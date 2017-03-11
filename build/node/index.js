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
exports.VIEWER = exports.MODAL = exports.CLOSE_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = exports.NOTIFICATION = exports.SHELF = exports.AUTH = exports.PROFILE = exports.DOUBAN_BOOKS = exports.COLLECTION = exports.COLLECTIONS = exports.AUTHORS = exports.LOAD_BOOK_PROGRESS = exports.BOOK_PROGRESS = exports.LOAD_SESSION = exports.SESSION = exports.USER_LOGOUT = exports.LOGOUT = exports.LOAD_USERS = exports.USERS = exports.LOAD_BOOKS = exports.BOOKS = exports.LOAD_BOOK_CONTENT = exports.BOOK_CONTENT = exports.LOAD_BOOK = exports.BOOK = exports.REMOVE_ENTITY = undefined;

var _utils = __webpack_require__(51);

/**
 * api
 */
const REMOVE_ENTITY = exports.REMOVE_ENTITY = 'REMOVE_ENTITY';
const BOOK = exports.BOOK = (0, _utils.createRequestTypes)('book');
const LOAD_BOOK = exports.LOAD_BOOK = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK');
const BOOK_CONTENT = exports.BOOK_CONTENT = (0, _utils.createRequestTypes)('book-content');
const LOAD_BOOK_CONTENT = exports.LOAD_BOOK_CONTENT = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK_CONTENT');
const BOOKS = exports.BOOKS = (0, _utils.createRequestTypes)('books');
const LOAD_BOOKS = exports.LOAD_BOOKS = (0, _utils.createSagaTriggerActionType)('LOAD_BOOKS');
const USERS = exports.USERS = (0, _utils.createRequestTypes)('users');
const LOAD_USERS = exports.LOAD_USERS = (0, _utils.createSagaTriggerActionType)('LOAD_USERS');
const LOGOUT = exports.LOGOUT = (0, _utils.createRequestTypes)('revoke');
const USER_LOGOUT = exports.USER_LOGOUT = (0, _utils.createSagaTriggerActionType)('USER_LOGOUT');
const SESSION = exports.SESSION = (0, _utils.createRequestTypes)('SESSION');
const LOAD_SESSION = exports.LOAD_SESSION = (0, _utils.createSagaTriggerActionType)('LOAD_SESSION');
const BOOK_PROGRESS = exports.BOOK_PROGRESS = (0, _utils.createRequestTypes)('book-progress');
const LOAD_BOOK_PROGRESS = exports.LOAD_BOOK_PROGRESS = (0, _utils.createSagaTriggerActionType)('LOAD_BOOK_PROGRESS');
const AUTHORS = exports.AUTHORS = (0, _utils.createRequestTypes)('authors');
const COLLECTIONS = exports.COLLECTIONS = (0, _utils.createRequestTypes)('collections');
const COLLECTION = exports.COLLECTION = (0, _utils.createRequestTypes)('collection');
const DOUBAN_BOOKS = exports.DOUBAN_BOOKS = (0, _utils.createRequestTypes)('douban-books');
const PROFILE = exports.PROFILE = (0, _utils.createRequestTypes)('profile');
const AUTH = exports.AUTH = (0, _utils.createRequestTypes)('auth');
const SHELF = exports.SHELF = (0, _utils.createRequestTypes)('shelf');
/**
 * components
 */
// general
const NOTIFICATION = exports.NOTIFICATION = {
    SHOW: (0, _utils.createComponentActionType)('notification', 'SHOW'),
    HIDE: (0, _utils.createComponentActionType)('notification', 'HIDE')
};
const OPEN_CONFIRM_MODAL = exports.OPEN_CONFIRM_MODAL = (0, _utils.createComponentActionType)('confirm-modal', 'OPEN');
const CLOSE_CONFIRM_MODAL = exports.CLOSE_CONFIRM_MODAL = (0, _utils.createComponentActionType)('confirm-modal', 'CLOSE');
const MODAL = exports.MODAL = {
    OPEN: (0, _utils.createComponentActionType)('modal', 'SHOW'),
    CLOSE: (0, _utils.createComponentActionType)('modal', 'HIDE')
};
// viewer
const VIEWER = exports.VIEWER = {
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
    SCROLL_MODE_TOGGLE: (0, _utils.createComponentActionType)('viewer/scroll-mode', 'TOGGLE'),
    PAGE_PROGRESS_INFO_TOGGLE: (0, _utils.createComponentActionType)('viewer/progress-info', 'TOGGLE')
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
let GenericError = class GenericError {
    constructor(message, name) {
        this.name = name || 'GenericError';
        this.statusCode = 500;
        this.message = message;
        this.stack = new Error().stack;
        this.type = this.name;
    }
};
exports.default = GenericError;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

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
const ENABLE_SERVER_ROUTING = exports.ENABLE_SERVER_ROUTING = '__ENABLE_SERVER_ROUTING__';
const INITIAL_STATE = exports.INITIAL_STATE = '__INITIAL_STATE__';
// 其他常量
const DOUBAN_API_ROOT = exports.DOUBAN_API_ROOT = 'https://api.douban.com/v2';
const GITHUB_API_ROOT = exports.GITHUB_API_ROOT = 'https://api.github.com';
const ROLES = exports.ROLES = {
    USER: 'user',
    ADMIN: 'admin',
    VISITOR: 'visitor'
};
const API_PREFIX = exports.API_PREFIX = 'api';

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

var _lifecircle = __webpack_require__(133);

var lifecircle = _interopRequireWildcard(_lifecircle);

var _getApiRoot = __webpack_require__(132);

var _getApiRoot2 = _interopRequireDefault(_getApiRoot);

var _isServerRoutingEnabled = __webpack_require__(60);

var _isServerRoutingEnabled2 = _interopRequireDefault(_isServerRoutingEnabled);

var _redirect = __webpack_require__(135);

var _redirect2 = _interopRequireDefault(_redirect);

var _isServerEnv = __webpack_require__(59);

var _isServerEnv2 = _interopRequireDefault(_isServerEnv);

var _print = __webpack_require__(134);

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, lifecircle, {
    getApiRoot: _getApiRoot2.default,
    isServerRoutingEnabled: _isServerRoutingEnabled2.default,
    redirect: _redirect2.default,
    isServerEnv: _isServerEnv2.default,
    print: _print2.default
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collection = exports.book = exports.author = exports.tag = exports.progress = exports.file = exports.user = undefined;

var _schema = __webpack_require__(212);

var _schema2 = _interopRequireDefault(_schema);

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

var _validator = __webpack_require__(71);

var _validator2 = _interopRequireDefault(_validator);

var _types = __webpack_require__(176);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const user = exports.user = new _schema2.default('users', [{
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
const file = exports.file = new _schema2.default('files', [{
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
const progress = exports.progress = new _schema2.default('reading_progress', [{
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
const tag = exports.tag = new _schema2.default('tags', [{
    name: 'name',
    required: true
}, {
    name: 'slug',
    unique: true
}, {
    name: 'description'
}]);
const author = exports.author = new _schema2.default('authors', [{
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
const book = exports.book = new _schema2.default('books', [{
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
const collection = exports.collection = new _schema2.default('collections', [{
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = __webpack_require__(211);

var _database2 = _interopRequireDefault(_database);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = __webpack_require__(34);

var _utils2 = _interopRequireDefault(_utils);

var _validate = __webpack_require__(213);

var _validate2 = _interopRequireDefault(_validate);

var _outputEmptyEntity = __webpack_require__(68);

var _outputEmptyEntity2 = _interopRequireDefault(_outputEmptyEntity);

var _paginate = __webpack_require__(69);

var _paginate2 = _interopRequireDefault(_paginate);

var _helpers = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Model = class Model {
    static parseQuery(idOrQuery) {
        if (typeof idOrQuery === 'undefined') {
            throw new Error('Param idOrQuery is undefined!');
        }
        return typeof idOrQuery === 'string' ? { _id: idOrQuery } : idOrQuery;
    }
    constructor(schema) {
        this._schema = schema;
        this._tableName = schema.name;
    }
    outputEmpty(id) {
        return (0, _outputEmptyEntity2.default)(this._schema.fields, id);
    }
    findOne(idOrQuery, raw) {
        const query = Model.parseQuery(idOrQuery);
        return this.list({ raw: raw, disablePagination: true, query: query }).then(result => {
            const entity = result[0];
            if (!entity) {
                return Promise.reject((0, _helpers.notFoundIn)(this._schema._baseTable));
            }
            return entity;
        });
    }
    list() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const raw = options.raw,
              page = options.page,
              disablePagination = options.disablePagination,
              filter = options.filter,
              mapping = options.mapping,
              query = options.query;

        return (0, _database.connect)().then(connection => {
            const doQuery = () => {
                const listRaw = listRawQuery => {
                    return connection.collection(this._tableName).find(listRawQuery).toArray();
                };
                const rawResults = listRaw(query || {});
                if (raw) {
                    return rawResults;
                } else {
                    return rawResults.then(results => {
                        return (0, _database.embedRef)(results, this._schema);
                    });
                }
            };
            return doQuery().then(entities => {
                const modifiedEntities = entities.filter(filter || (() => true)).map(mapping || (entity => entity));
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
    listRaw() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        const filter = options.filter,
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
    add(data) {
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
                return (0, _database.connect)().then(connection => {
                    const result = connection.collection(this._tableName).insert([dataWithID]);
                    connection.close();
                    return result;
                });
            };
            // 过滤出和数据库中已存在数据相匹配的输入项
            if (dataToCheck.length !== 0) {
                const checkingResult = Promise.all(dataToCheck.map(dataItem => {
                    return _database2.default.getRowByMatch({ [dataItem.key]: dataItem.value }, this._tableName).then(res => {
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
                        return Promise.reject(new _errors2.default.BadRequestError((0, _i18n2.default)('errors.schema.unique', res[0].key)));
                    }
                    return exec();
                });
            }
            return exec();
        };
        return _utils2.default.reduceTasks([(0, _validate2.default)(data, this._schema), query]);
    }
    update(idOrQuery, data) {
        let updateConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        const multi = updateConfig.multi,
              upsert = updateConfig.upsert;

        const query = Model.parseQuery(idOrQuery);
        const doQuery = () => {
            const data2 = Object.assign({}, data, {
                date_updated: new Date().toString()
            });
            const exec = () => {
                return (0, _database.connect)().then(connection => {
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
        return _utils2.default.reduceTasks([(0, _validate2.default)(data, this._schema, true), doQuery]);
    }
    remove(idOrQuery) {
        const query = Model.parseQuery(idOrQuery);
        return (0, _database.connect)().then(connection => {
            const result = connection.collection(this._tableName).remove(query);
            connection.close();
            return result;
        });
    }
};
exports.default = Model;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetForm = exports.initializeForm = undefined;

var _api = __webpack_require__(95);

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _api[key];
    }
  });
});

var _common = __webpack_require__(96);

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _viewer = __webpack_require__(97);

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

const initializeForm = exports.initializeForm = _betterReduxForm.actions.initialize;
const resetForm = exports.resetForm = _betterReduxForm.actions.reset;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNull2 = __webpack_require__(277);

var _isNull3 = _interopRequireDefault(_isNull2);

exports.default = i18n;

var _cn = __webpack_require__(218);

var _cn2 = _interopRequireDefault(_cn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addPadding(str) {
    if (!str) {
        return '';
    }
    if (escape(str.substr(-1)).indexOf('%u') !== 0) {
        return ` ${str} `;
    }
    return str;
} /**
   * referenced ghost i18n.js, it's a simplified version
   * and I used js to store local translations instead of json
   */

function getMatchingString(msgPath) {
    let matchingString = _cn2.default;
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
    if ((0, _isNull3.default)(matchingString)) {
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

var _apifns = __webpack_require__(232);

var apifns = _interopRequireWildcard(_apifns);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Object.assign({}, apifns);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notFoundError = __webpack_require__(184);

var _notFoundError2 = _interopRequireDefault(_notFoundError);

var _validationError = __webpack_require__(190);

var _validationError2 = _interopRequireDefault(_validationError);

var _badRequestError = __webpack_require__(179);

var _badRequestError2 = _interopRequireDefault(_badRequestError);

var _internalServerError = __webpack_require__(181);

var _internalServerError2 = _interopRequireDefault(_internalServerError);

var _noPermissionError = __webpack_require__(183);

var _noPermissionError2 = _interopRequireDefault(_noPermissionError);

var _unauthorizedError = __webpack_require__(188);

var _unauthorizedError2 = _interopRequireDefault(_unauthorizedError);

var _requestTooLargeError = __webpack_require__(185);

var _requestTooLargeError2 = _interopRequireDefault(_requestTooLargeError);

var _unsupportedFileTypeError = __webpack_require__(189);

var _unsupportedFileTypeError2 = _interopRequireDefault(_unsupportedFileTypeError);

var _emailError = __webpack_require__(180);

var _emailError2 = _interopRequireDefault(_emailError);

var _methodNotAllowedError = __webpack_require__(182);

var _methodNotAllowedError2 = _interopRequireDefault(_methodNotAllowedError);

var _tooManyRequestsError = __webpack_require__(187);

var _tooManyRequestsError2 = _interopRequireDefault(_tooManyRequestsError);

var _tokenRevocationError = __webpack_require__(186);

var _tokenRevocationError2 = _interopRequireDefault(_tokenRevocationError);

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getCurrentTime = __webpack_require__(231);

var _getCurrentTime2 = _interopRequireDefault(_getCurrentTime);

var _padNumberWithZero = __webpack_require__(73);

var _padNumberWithZero2 = _interopRequireDefault(_padNumberWithZero);

var _parseQuery = __webpack_require__(74);

var _parseQuery2 = _interopRequireDefault(_parseQuery);

var _parseUrlencoded = __webpack_require__(36);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _dom = __webpack_require__(230);

var _dom2 = _interopRequireDefault(_dom);

var _browser = __webpack_require__(226);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({
    getCurrentTime: _getCurrentTime2.default,
    padNumberWithZero: _padNumberWithZero2.default,
    parseQuery: _parseQuery2.default,
    parseUrlencoded: _parseUrlencoded2.default
}, _dom2.default, _browser2.default);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash/pick");

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

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

var _computeHash = __webpack_require__(191);

var _computeHash2 = _interopRequireDefault(_computeHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notFoundError(itemName) {
    return new _errors2.default.NotFoundError((0, _i18n2.default)('errors.api.general.notFound', itemName));
}
function notFoundIn(collectionName) {
    return new _errors2.default.NotFoundError((0, _i18n2.default)('errors.api.general.notFoundIn', collectionName));
}
exports.computeHash = _computeHash2.default;

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

var _entities = __webpack_require__(167);

Object.keys(_entities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _entities[key];
    }
  });
});

var _common = __webpack_require__(33);

var common = _interopRequireWildcard(_common);

var _betterReduxForm = __webpack_require__(28);

var _viewer = __webpack_require__(168);

var viewer = _interopRequireWildcard(_viewer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.common = common;
exports.form = _betterReduxForm.selectors;
exports.viewer = viewer;

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

var _Icon = __webpack_require__(117);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Icon2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Container = __webpack_require__(112);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Container2.default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDescendant;
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
/* 32 */
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

const DOCTYPE = exports.DOCTYPE = '<!DOCTYPE html>';
const AppDoc = props => {
    const bodyScript = props.script,
          otherLink = props.link,
          bodyClass = props.bodyClass,
          appMarkup = props.appMarkup,
          initialState = props.initialState;
    var _props$helmetHeadObje = props.helmetHeadObject;
    const title = _props$helmetHeadObje.title,
          meta = _props$helmetHeadObje.meta,
          helmetLink = _props$helmetHeadObje.link,
          headScript = _props$helmetHeadObje.script,
          masterTitle = props.title;

    return _react2.default.createElement("html", { lang: "zh-CN" }, _react2.default.createElement("head", null, _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" }), _react2.default.createElement("meta", { name: "description", content: "" }), masterTitle ? _react2.default.createElement("title", null, masterTitle || title && title.toString()) : title && title.toComponent(), meta && meta.toComponent(), helmetLink && helmetLink.toComponent(), otherLink && otherLink.map((link, index) => {
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
        return _react2.default.createElement("link", { key: index, href: href, rel: rel });
    }), headScript && headScript.toComponent()), _react2.default.createElement("body", Object.assign({}, bodyClass && { className: bodyClass }), props.children, typeof appMarkup === 'string' ? _react2.default.createElement("div", { id: "root", dangerouslySetInnerHTML: { __html: appMarkup || '' } }) : _react2.default.createElement("div", { id: "root" }, appMarkup), initialState && _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: `var ${_common.INITIAL_STATE} = ${JSON.stringify(initialState || {})};` } }), bodyScript && bodyScript.map((script, index) => {
        if (typeof script === 'string') {
            return _react2.default.createElement("script", { key: index, src: script });
        }
        const src = script.src,
              type = script.type,
              innerHTML = script.innerHTML;

        return _react2.default.createElement("script", { key: index, src: src, type: type || 'text/javascript', dangerouslySetInnerHTML: { __html: innerHTML } });
    })));
};
AppDoc['defaultProps'] = {
    helmetHeadObject: {}
};
exports.default = AppDoc;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pagedEntities = exports.entityPages = exports.currentPage = exports.nextPage = exports.paginationLinks = exports.paginationPages = exports.isPaginationFetching = exports.entity = exports.entities = exports.session = undefined;

var _keys2 = __webpack_require__(85);

var _keys3 = _interopRequireDefault(_keys2);

var _mapValues2 = __webpack_require__(278);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _reselect = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_KEY = 'default';
const session = exports.session = state => {
    return (0, _get3.default)(state, ['session'], {});
};
const entities = exports.entities = name => state => {
    return state.entities[name] || {};
};
const entity = exports.entity = (name, id) => state => {
    return (0, _get3.default)(state, ['entities', name, id], {});
};
const isPaginationFetching = exports.isPaginationFetching = function isPaginationFetching(name) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return state => {
        return (0, _get3.default)(state, ['pagination', name, key, 'isFetching'], true);
    };
};
const paginationPages = exports.paginationPages = function paginationPages(name) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return state => {
        return (0, _get3.default)(state, ['pagination', name, key, 'pages'], {});
    };
};
const paginationLinks = exports.paginationLinks = function paginationLinks(name) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return state => {
        return (0, _pick3.default)((0, _get3.default)(state.pagination, `${name}.${key}`, {}), ['next', 'last']);
    };
};
const nextPage = exports.nextPage = function nextPage(name) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return (0, _reselect.createSelector)(paginationLinks(name, key), selectedPaginationLinks => {
        return (0, _get3.default)(selectedPaginationLinks, 'next.page', 0);
    });
};
const currentPage = exports.currentPage = function currentPage(name) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
    return (0, _reselect.createSelector)(paginationLinks(name, key), selectedPaginationLinks => {
        const next = (0, _get3.default)(selectedPaginationLinks, 'next.page');
        const last = (0, _get3.default)(selectedPaginationLinks, 'last.page');
        return next ? next - 1 : last;
    });
};
const entityPages = exports.entityPages = options => {
    const entitiesName = options.entitiesName,
          paginationName = options.paginationName,
          paginationKey = options.paginationKey;

    return (0, _reselect.createSelector)(entities(entitiesName), paginationPages(paginationName, paginationKey), (selectedEntities, pages) => {
        return (0, _mapValues3.default)(pages, ids => {
            return ids.map(id => selectedEntities[id]).filter(item => Boolean(item));
        });
    });
};
const pagedEntities = exports.pagedEntities = options => {
    const page = options.page;

    return (0, _reselect.createSelector)(entityPages(options), pages => {
        if (page) {
            return (0, _get3.default)(pages, [page], []);
        }
        let allEntities = [];
        (0, _keys3.default)(pages).forEach(p => {
            allEntities = allEntities.concat(pages[p]);
        });
        return allEntities;
    });
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = __webpack_require__(71);

var _validator2 = _interopRequireDefault(_validator);

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

var _pipeline = __webpack_require__(219);

var _pipeline2 = _interopRequireDefault(_pipeline);

var _reduceTasks = __webpack_require__(220);

var _reduceTasks2 = _interopRequireDefault(_reduceTasks);

var _sortByDate = __webpack_require__(221);

var _sortByDate2 = _interopRequireDefault(_sortByDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { validator: _validator2.default, i18n: _i18n2.default, pipeline: _pipeline2.default, reduceTasks: _reduceTasks2.default, sortByDate: _sortByDate2.default };

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.callApi = callApi;

__webpack_require__(274);

var _parseUrlencoded = __webpack_require__(36);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _jsonp = __webpack_require__(222);

var _jsonp2 = _interopRequireDefault(_jsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = {
    dataType: 'json',
    method: 'GET',
    credentials: 'same-origin'
};
// return fetch options
const parseOptions = originanOptions => {
    var _Object$assign = Object.assign({}, defaultOptions, originanOptions);

    let method = _Object$assign.method,
        data = _Object$assign.data,
        credentials = _Object$assign.credentials,
        dataType = _Object$assign.dataType,
        useJsonp = _Object$assign.useJsonp;

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
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (options.useJsonp) {
        return (0, _jsonp2.default)(fullUrl);
    }
    return fetch(fullUrl, parseOptions(options)).then(response => {
        if (response.status !== 204) {
            return response.json().then(json => {
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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cloneDeep2 = __webpack_require__(275);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

exports.default = parseUrlencoded;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo
function parseUrlencoded(originalObj) {
    if ((0, _isEmpty3.default)(originalObj)) {
        return '';
    }
    let object = (0, _cloneDeep3.default)(originalObj);
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Dropdown.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Dropdown.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Modal.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Modal.scss");

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

module.exports = require("redux-saga");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(284);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _BodyClass = __webpack_require__(101);

var _BodyClass2 = _interopRequireDefault(_BodyClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DocContainer = class DocContainer extends _react.Component {
    render() {
        var _props = this.props;
        const bodyClass = _props.bodyClass,
              title = _props.title,
              head = _props.head;

        const helmetProps = Object.assign({}, head, {
            title: title
        });
        return _react2.default.createElement("div", { className: 'gb-doc-container' }, _react2.default.createElement(_reactHelmet2.default, Object.assign({}, helmetProps)), _react2.default.createElement(_BodyClass2.default, { className: bodyClass }, this.props.children));
    }
};

DocContainer.rewind = () => {
    const bodyClass = _BodyClass2.default.rewind();
    const head = _reactHelmet2.default.rewind();
    return {
        head: head,
        bodyClass: bodyClass
    };
};
exports.default = DocContainer;

/***/ }),
/* 47 */
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

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logo = __webpack_require__(120);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Logo2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOAD_CACHE = 'LOAD_CACHE';
const action = exports.action = function action(type) {
    let payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.assign({}, {
        type: type
    }, payload);
};
const createRequestTypes = exports.createRequestTypes = base => {
    return [REQUEST, SUCCESS, FAILURE, LOAD_CACHE].reduce((acc, type) => {
        acc[type] = `api/${base}/${type}`;
        return acc;
    }, {});
};
const createComponentActionType = exports.createComponentActionType = (name, operation) => `components/${name}/${operation}`;
const createSagaTriggerActionType = exports.createSagaTriggerActionType = operation => `saga-triggers/${operation}`;
const createActionEntity = exports.createActionEntity = requestTypes => {
    return {
        request: payload => action(requestTypes.REQUEST, payload),
        success: (response, payload) => action(requestTypes.SUCCESS, Object.assign({}, { response: response }, payload)),
        // TODO
        loadCache: (response, payload) => action(requestTypes.SUCCESS, Object.assign({}, { response: response }, payload, { loadedFromCache: true })),
        failure: (error, payload) => action(requestTypes.FAILURE, Object.assign({}, { error: error }, payload))
    };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(75);
let Alert = class Alert extends _react.Component {
    render() {
        const type = this.props.type ? this.props.type : 'success';
        return _react2.default.createElement("div", null, this.props.visible && _react2.default.createElement("div", { styleName: `alert--${type}` }, _react2.default.createElement("div", { styleName: "alert-close" }, _react2.default.createElement(_Icon2.default, { onClick: this.props.onRequestClose, name: "close", size: 15 })), _react2.default.createElement("div", { styleName: "content" }, this.props.message)));
    }
};
Alert = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Alert);
exports.default = Alert;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItemSep = exports.Dropdown = exports.DropdownItem = undefined;

var _Dropdown = __webpack_require__(113);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownItem = __webpack_require__(114);

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

var _DropdownItemSep = __webpack_require__(115);

var _DropdownItemSep2 = _interopRequireDefault(_DropdownItemSep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropdownItem = _DropdownItem2.default;
exports.Dropdown = _Dropdown2.default;
exports.DropdownItemSep = _DropdownItemSep2.default;
exports.default = _Dropdown2.default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(283);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

var _Fade = __webpack_require__(88);

var _Fade2 = _interopRequireDefault(_Fade);

var _Modal = __webpack_require__(39);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Modal = class Modal extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalHeight: 0,
            isModalHidden: false,
            isModalVerticalCenter: true,
            clicks: 0
        };
        this.setView = this.setView.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    hideModal() {
        this.props.onRequestClose();
        _utils2.default.unlockScroll();
    }
    setView() {
        let modalHeight = _reactDom2.default.findDOMNode(this.modal).clientHeight;
        let isModalVerticalCenter = true;
        let documentHeight = document.body.clientHeight;
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
    componentWillReceiveProps(nextProps) {}
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
    }
    componentDidUpdate(prevProps) {
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
    componentWillUnmount() {
        window.removeEventListener('resize', this.setView);
    }
    render() {
        const open = this.props.open;

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
        return _react2.default.createElement(_Fade2.default, null, open === true && _react2.default.createElement("div", { onClick: e => {
                // 使用阻止冒泡会造成问题
                if (e.target.querySelector(`#${modalId}`)) {
                    this.hideModal();
                }
            }, className: _Modal2.default['modal-backdrop'], style: style.backdrop }, _react2.default.createElement("div", { id: modalId, style: style.modal, className: `${_Modal2.default['modal']} ${className}`, ref: _ref => {
                this.modal = _ref;
            } }, this.props.children)));
    }
};
exports.default = Modal;

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

var _ModalPlus = __webpack_require__(123);

var _ModalPlus2 = _interopRequireDefault(_ModalPlus);

var _ConfirmModal = __webpack_require__(122);

var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
exports.ModalPlus = _ModalPlus2.default;
exports.ConfirmModal = _ConfirmModal2.default;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(22);

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
const ServerSideAppRoot = props => {
    const store = props.store,
          renderProps = props.renderProps,
          renderPageContent = props.renderPageContent;

    return !(0, _isEmpty3.default)(renderProps) && _react2.default.createElement(_reactRedux.Provider, { store: store }, renderPageContent ? _react2.default.createElement(_reactRouter.RouterContext, Object.assign({}, renderProps)) : _react2.default.createElement("div", { className: "text-loading" }, "Loading..."));
};
exports.default = ServerSideAppRoot;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEWER_DEFS = exports.COMMON = exports.ACTION_TYPES = undefined;

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _common = __webpack_require__(8);

var COMMON = _interopRequireWildcard(_common);

var _viewerDefs = __webpack_require__(90);

var VIEWER_DEFS = _interopRequireWildcard(_viewerDefs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.ACTION_TYPES = ACTION_TYPES;
exports.COMMON = COMMON;
exports.VIEWER_DEFS = VIEWER_DEFS;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isServerEnv = __webpack_require__(59);

var _isServerEnv2 = _interopRequireDefault(_isServerEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GLOBAL_ENV_VAR = '__ENV__';
const getEnv = () => {
    if ((0, _isServerEnv2.default)()) {
        return process.env;
    }
    return window[GLOBAL_ENV_VAR];
};
exports.default = getEnv;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isServerEnv;
function isServerEnv() {
    return typeof window === 'undefined';
}

/***/ }),
/* 60 */
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

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _callApi = __webpack_require__(35);

var _callApi2 = _interopRequireDefault(_callApi);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _handleResponse = __webpack_require__(72);

var _handleResponse2 = _interopRequireDefault(_handleResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = store => next => action => {
    const CALL_API = action.CALL_API;
    if (typeof CALL_API === 'undefined') {
        return next(action);
    }
    let endpoint = CALL_API.endpoint,
        apiUrl = CALL_API.apiUrl,
        options = CALL_API.options,
        pagination = CALL_API.pagination;
    const types = CALL_API.types,
          schema = CALL_API.schema;

    var _types = _slicedToArray(types, 3);

    const requestType = _types[0],
          successType = _types[1],
          failureType = _types[2];

    const actionWith = (_ref) => {
        let data = _ref.data,
            hasPagination = _ref.hasPagination;

        let finalAction = Object.assign({}, action, data);
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
    const fullUrl = `${apiUrl}/${endpoint}`;
    return (0, _callApi2.default)(fullUrl, options || {}).then(response => {
        const normalizedRes = (0, _handleResponse2.default)(response, schema);
        let finalAction = {
            response: normalizedRes,
            type: successType,
            pagination: pagination
        };
        return next(dispatch => {
            dispatch(actionWith({ data: finalAction, hasPagination: Boolean(pagination) }));
            return {
                ok: true,
                response: response
            };
        });
    }, error => next(dispatch => {
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
    }));
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = store => next => action => {
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = store => next => action => {
    console.info(action.type);
    next(action);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = store => next => action => {
    if (action.type === ACTION_TYPES.DOUBAN_BOOKS.SUCCESS) {
        action.response.result = action.response.result.books;
    }
    return next(action);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RESERVED_ACTION_KYES = exports.API_CONFIG_KEYS = undefined;

var _isUndefined2 = __webpack_require__(78);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

exports.fetchEntity = fetchEntity;

var _cache = __webpack_require__(224);

var cache = _interopRequireWildcard(_cache);

var _effects = __webpack_require__(16);

var _getEnv2 = __webpack_require__(58);

var _getEnv3 = _interopRequireDefault(_getEnv2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getEnv = (0, _getEnv3.default)();

const ENABLE_ENTITY_CACHE = _getEnv.ENABLE_ENTITY_CACHE;

const OPTIONS = 'options';
const ID = 'id';
const DATA = 'data';
const TYPE = 'type';
const API_CONFIG_KEYS = exports.API_CONFIG_KEYS = [OPTIONS, ID, DATA];
const RESERVED_ACTION_KYES = exports.RESERVED_ACTION_KYES = [TYPE, ...API_CONFIG_KEYS];
// TODO
// 似乎需要优化，缓存的逻辑和获取的耦合太深了
function* fetchEntity(entity, apiFn, apiConfig, payload) {
    const fullPayload = (0, _assign3.default)({}, apiConfig, payload);
    const id = apiConfig[ID];
    const options = apiConfig[OPTIONS];
    const apiArgs = [id, options].filter(arg => !(0, _isUndefined3.default)(arg));
    let hasCache;
    let cacheId;
    if (id && ENABLE_ENTITY_CACHE) {
        cacheId = cache.createCacheId(apiFn + id + options);
        let cacheContent = cache.getCache(cacheId);
        hasCache = Boolean(cacheContent);
        if (hasCache) {
            let action = entity.loadCache(cacheContent, fullPayload);
            yield (0, _effects.put)(entity.request(fullPayload));
            yield (0, _effects.put)(action);
            return action;
        }
    }
    yield (0, _effects.put)(entity.request(fullPayload));

    var _ref = yield (0, _effects.call)(apiFn, ...apiArgs);

    const response = _ref.response,
          error = _ref.error;

    if (response) {
        // 如果是 undefined 也不会有任何处理
        if (hasCache === false) {
            cache.setCache(cacheId, response);
        }
        let action = entity.success(response, fullPayload);
        yield (0, _effects.put)(action);
        return action;
    } else {
        let action = entity.failure(error, fullPayload);
        yield (0, _effects.put)(action);
        return action;
    }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _normalizr = __webpack_require__(79);

const book = new _normalizr.Schema('books', {
    idAttribute: 'id'
});
const bookContent = new _normalizr.Schema('bookContents', {
    idAttribute: 'id'
});
const author = new _normalizr.Schema('authors', {
    idAttribute: 'id'
});
const collection = new _normalizr.Schema('bookCollections', {
    idAttribute: 'id'
});
collection.define({
    items: (0, _normalizr.arrayOf)(book)
});
const profile = new _normalizr.Schema('profiles', {
    idAttribute: 'id'
});
const user = new _normalizr.Schema('users', {
    idAttribute: 'id'
});
const doubanBook = new _normalizr.Schema('doubanBooks', {
    idAttribute: 'id'
});
const shelfBook = new _normalizr.Schema('shelfBooks', {
    idAttribute: 'id'
});
const bookProgress = new _normalizr.Schema('bookProgress', {
    idAttribute: 'bookId'
});
const matchedBooks = new _normalizr.Schema('books', {
    idAttribute: 'bookId'
});
exports.default = {
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

const fileModel = new _model2.default(schemas.file);
function readFile(fileId, parser) {
    return fileModel.findOne(fileId).then(fileResult => {
        if (parser && typeof parser === 'function') {
            const binaryFile = fileResult.content.buffer;
            return parser(binaryFile).then(content => {
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
    let idObjOrIdString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
    return (0, _assign3.default)({}, entity, idObj);
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = paginate;
const defaultOptions = {
    page: 1,
    limit: 10,
    order: 'new'
};
function paginate(results, options) {
    var _Object$assign = Object.assign({}, defaultOptions, options);

    let page = _Object$assign.page,
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const colors = __webpack_require__(268);
const print = {
    info: function info(message) {
        console.info('\n' + colors.bgGreen.bold.white(' INFO '), colors.green(message));
    },
    test: function test(message) {
        console.info('\n' + colors.bgCyan.bold.black(' INFO '), typeof message !== 'object' ? colors.cyan(message) : message);
    },
    warn: function warn(message) {
        console.error('\n' + colors.bgYellow.bold.black(' WARNING '), typeof message !== 'object' ? colors.yellow(message) : message);
    },
    error: function error(message) {
        console.error('\n' + colors.bgRed.bold.white(' ERROR '), typeof message !== 'object' ? colors.red(message) : message);
    }
};
exports.default = print;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const validator = __webpack_require__(289);
const additionalValidators = {
    lengthMin: function lengthMin(len) {
        return input => {
            return input.length >= len;
        };
    },
    lengthMax: function lengthMax(len) {
        return input => {
            return input.length <= len;
        };
    }
};
exports.default = Object.assign({}, validator, additionalValidators);

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _normalizr = __webpack_require__(79);

var _parseQuery = __webpack_require__(74);

var _parseQuery2 = _interopRequireDefault(_parseQuery);

var _humps = __webpack_require__(40);

var _humps2 = _interopRequireDefault(_humps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parseHeaderPageLinkByRel = (links, rel) => {
    const link = links.split(',').find(s => s.indexOf(`rel="${rel}"`) > -1);
    if (!link) {
        return undefined;
    }
    const url = link.split(';')[0].trim().slice(1, -1);
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
    const links = response.headers.get('link');
    if (!links) {
        return {};
    }
    const next = parseHeaderPageLinkByRel(links, 'next');
    const last = parseHeaderPageLinkByRel(links, 'last');
    return {
        next: next,
        last: last
    };
}
function handleResponse(_ref, schema) {
    let json = _ref.json,
        _response = _ref._response;

    const camelizedJson = _humps2.default.camelizeKeys(json);

    var _parseResHeaderToPagi = parseResHeaderToPagination(_response);

    const next = _parseResHeaderToPagi.next,
          last = _parseResHeaderToPagi.last;

    if (typeof schema !== 'undefined') {
        return (0, _assign3.default)({}, (0, _normalizr.normalize)(camelizedJson, schema), {
            _next: next,
            _last: last
        });
    }
    return camelizedJson;
}
exports.default = handleResponse;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = padNumberWithZero;
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parseQuery;
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
/* 75 */
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Alert.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Alert.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("lodash/isUndefined");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initialize = __webpack_require__(194);

var _initialize2 = _interopRequireDefault(_initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _initialize2.default;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = exports.SelectizeInput = exports.Input = exports.Button = undefined;

var _Button = __webpack_require__(87);

var _Button2 = _interopRequireDefault(_Button);

var _Input = __webpack_require__(89);

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

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = __webpack_require__(261);
function ModalFooter(props) {
    const onConfirm = props.onConfirm,
          onCancel = props.onCancel;

    return _react2.default.createElement("div", { className: styles['modal-footer'] }, _react2.default.createElement(_form.Button, { color: "blue", onClick: onConfirm }, "\u786E\u8BA4"), onCancel && _react2.default.createElement(_form.Button, { color: "white", onClick: onCancel }, "\u53D6\u6D88"));
}
exports.default = ModalFooter;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(104);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fade = __webpack_require__(116);

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Fade2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(119);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Input2.default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const THEMES = exports.THEMES = {
    WHITE: 'WHITE',
    NIGHT: 'NIGHT',
    SEPIA: 'SEPIA'
};

/***/ }),
/* 91 */
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

const styles = __webpack_require__(92);
// 暂不支持包含图片的计算
// 计算没有等待图片加载完成，所以结果是不正确的
function getNodeHeights(nodes) {
    let nodesHeight = [];
    Array.prototype.forEach.call(nodes, (node, index) => {
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
    let pageIndex = _ref.pageIndex,
        pageHeight = _ref.pageHeight,
        nodeHeights = _ref.nodeHeights;

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
    return { offset: offset, nodeStartIndex: nodeStartIndex };
}
function getNodesOfPage(_ref2) {
    let pageIndex = _ref2.pageIndex,
        nodes = _ref2.nodes,
        pageHeight = _ref2.pageHeight,
        nodeHeights = _ref2.nodeHeights;

    var _getPageOffset = getPageOffset({ pageIndex: pageIndex, pageHeight: pageHeight, nodeHeights: nodeHeights });

    let offset = _getPageOffset.offset,
        nodeStartIndex = _getPageOffset.nodeStartIndex;

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
    return { pageNodes: pageNodes, offset: offset };
}
function groupNodesByPage(nodes, nodeHeights, pageHeight) {
    let pageStartFrom = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let chapterId = arguments[4];

    let pages = [];
    let pageHeightSum = nodeHeights.reduce((a, b) => a + b, 0);
    let pageSum = Math.ceil(pageHeightSum / pageHeight);
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
    for (let i = 0; i < pageSum; i++) {
        var _getNodesOfPage = getNodesOfPage({ pageIndex: i, nodes: nodes, nodeHeights: nodeHeights, pageHeight: pageHeight });

        const pageNodes = _getNodesOfPage.pageNodes,
              offset = _getNodesOfPage.offset;

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
                offset: offset,
                chapterId: chapterId,
                hash: hash
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
    _helpers2.default.print(`Grouping nodes takes ${t1 - t0}ms`);
    return allPages;
}
function resolveBookLocation(href, computedPages) {
    const chapterId = href.split('$')[0];
    const hash = href.split('$')[1];
    let i = 0;
    let foundChapterPage;
    while (i < computedPages.length) {
        const page = computedPages[i];
        if (`#${page.meta.chapterId}` === chapterId) {
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

/***/ }),
/* 92 */
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookPage.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookPage.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
	"app.css": "css/app.6905dd8f30.css",
	"app.js": "js/app.6905dd8f30.js",
	"base.global.css": "css/base.global.30e3ea3a4f.css",
	"base.global.js": "js/base.global.30e3ea3a4f.js",
	"js/chunk.019866bf07.15.js": "js/chunk.019866bf07.15.js",
	"js/chunk.0fd3f0ff29.1.js": "js/chunk.0fd3f0ff29.1.js",
	"js/chunk.1077eb1339.13.js": "js/chunk.1077eb1339.13.js",
	"js/chunk.33fdcc5dca.8.js": "js/chunk.33fdcc5dca.8.js",
	"js/chunk.59a06f9774.16.js": "js/chunk.59a06f9774.16.js",
	"js/chunk.5afd701505.11.js": "js/chunk.5afd701505.11.js",
	"js/chunk.5c2bd96261.10.js": "js/chunk.5c2bd96261.10.js",
	"js/chunk.621a627064.3.js": "js/chunk.621a627064.3.js",
	"js/chunk.8746e0d284.5.js": "js/chunk.8746e0d284.5.js",
	"js/chunk.9532f2a3e3.14.js": "js/chunk.9532f2a3e3.14.js",
	"js/chunk.9a3117103c.7.js": "js/chunk.9a3117103c.7.js",
	"js/chunk.9c6aafbd6b.2.js": "js/chunk.9c6aafbd6b.2.js",
	"js/chunk.af41305a12.0.js": "js/chunk.af41305a12.0.js",
	"js/chunk.b437659e2f.9.js": "js/chunk.b437659e2f.9.js",
	"js/chunk.c019e1a581.12.js": "js/chunk.c019e1a581.12.js",
	"js/chunk.da09ebb3df.6.js": "js/chunk.da09ebb3df.6.js",
	"js/chunk.ef9f212a9b.4.js": "js/chunk.ef9f212a9b.4.js",
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOAD_ACTIONS = exports.loadSession = exports.session = exports.loadBookProgress = exports.progress = exports.userLogout = exports.logout = exports.loadUsers = exports.users = exports.loadBooks = exports.books = exports.loadBookContent = exports.bookContent = exports.loadBook = exports.book = exports.removeEntity = undefined;
exports.fetchAuthors = fetchAuthors;
exports.fetchCollections = fetchCollections;
exports.fetchCollection = fetchCollection;
exports.searchDoubanBooks = searchDoubanBooks;
exports.fetchProfile = fetchProfile;
exports.userAuth = userAuth;
exports.fetchShelf = fetchShelf;

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

var _schemas = __webpack_require__(66);

var _schemas2 = _interopRequireDefault(_schemas);

var _common = __webpack_require__(8);

var _utils3 = __webpack_require__(51);

var _actionTypes = __webpack_require__(4);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const removeEntity = exports.removeEntity = (name, id) => ({ type: ActionTypes.REMOVE_ENTITY, name: name, id: id });
const book = exports.book = (0, _utils3.createActionEntity)(ActionTypes.BOOK);
const loadBook = exports.loadBook = id => (0, _utils3.action)(ActionTypes.LOAD_BOOK, { id: id });
const bookContent = exports.bookContent = (0, _utils3.createActionEntity)(ActionTypes.BOOK_CONTENT);
const loadBookContent = exports.loadBookContent = id => (0, _utils3.action)(ActionTypes.LOAD_BOOK_CONTENT, { id: id });
const books = exports.books = (0, _utils3.createActionEntity)(ActionTypes.BOOKS);
const loadBooks = exports.loadBooks = (options, key) => (0, _utils3.action)(ActionTypes.LOAD_BOOKS, { options: options, key: key });
const users = exports.users = (0, _utils3.createActionEntity)(ActionTypes.USERS);
const loadUsers = exports.loadUsers = options => (0, _utils3.action)(ActionTypes.LOAD_USERS, { options: options });
const logout = exports.logout = (0, _utils3.createActionEntity)(ActionTypes.LOGOUT);
const userLogout = exports.userLogout = () => (0, _utils3.action)(ActionTypes.USER_LOGOUT);
const progress = exports.progress = (0, _utils3.createActionEntity)(ActionTypes.BOOK_PROGRESS);
const loadBookProgress = exports.loadBookProgress = id => (0, _utils3.action)(ActionTypes.LOAD_BOOK_PROGRESS, { id: id });
const session = exports.session = (0, _utils3.createActionEntity)(ActionTypes.SESSION);
const loadSession = exports.loadSession = () => (0, _utils3.action)(ActionTypes.LOAD_SESSION);
// define load actions handled in sagas
const LOAD_ACTIONS = exports.LOAD_ACTIONS = [ActionTypes.LOAD_BOOK, ActionTypes.LOAD_BOOK_CONTENT, ActionTypes.LOAD_BOOKS, ActionTypes.LOAD_USERS];
/**
 * legacy call api actions
 */
function fetchAuthors(options) {
    const CALL_API = {
        types: [ActionTypes.AUTHORS.REQUEST, ActionTypes.AUTHORS.SUCCESS, ActionTypes.AUTHORS.FAILURE],
        endpoint: `authors?${_utils2.default.parseUrlencoded(options)}`,
        schema: _schemas2.default.AUTHOR_ARRAY,
        pagination: {
            name: 'authors',
            q: options.q
        }
    };
    return { CALL_API: CALL_API };
}
function fetchCollections() {
    let flowType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'newest';

    return {
        flowType: flowType,
        CALL_API: {
            types: [ActionTypes.COLLECTIONS.REQUEST, ActionTypes.COLLECTIONS.SUCCESS, ActionTypes.COLLECTIONS.FAILURE],
            endpoint: `collections`,
            schema: _schemas2.default.COLLECTION_ARRAY
        }
    };
}
function fetchCollection(collectionId) {
    return {
        collectionId: collectionId,
        CALL_API: {
            types: [ActionTypes.COLLECTION.REQUEST, ActionTypes.COLLECTION.SUCCESS, ActionTypes.COLLECTION.FAILURE],
            endpoint: `collections/${collectionId}`,
            schema: _schemas2.default.COLLECTION
        }
    };
}
function searchDoubanBooks(q) {
    const CALL_API = {
        types: [ActionTypes.DOUBAN_BOOKS.REQUEST, ActionTypes.DOUBAN_BOOKS.SUCCESS, ActionTypes.DOUBAN_BOOKS.FAILURE],
        endpoint: `book/search?count=10&q=${q}`,
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
    const CALL_API = {
        types: [ActionTypes.PROFILE.REQUEST, ActionTypes.PROFILE.SUCCESS, ActionTypes.PROFILE.FAILURE],
        endpoint: `user/profile`,
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
    const CALL_API = {
        types: [ActionTypes.SHELF.REQUEST, ActionTypes.SHELF.SUCCESS, ActionTypes.SHELF.FAILURE],
        endpoint: `user/books/shelf`,
        schema: _schemas2.default.SHELF_BOOK_ARRAY,
        pagination: {
            name: 'bookShelves'
        }
    };
    return { CALL_API: CALL_API };
}

/***/ }),
/* 96 */
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

var _actionTypes = __webpack_require__(4);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const sendNotification = exports.sendNotification = function sendNotification(message) {
    let msgType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
    let t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

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
function showNotification(id, message) {
    let msgType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

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

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleViewerScrollMode = exports.changeViewerTheme = exports.changeViewerFontSize = exports.toggleViewerPageProgressInfo = exports.toggleViewerNavigation = exports.toggleViewerPreference = exports.toggleViewerPanel = exports.viewerJumpTo = exports.destroyBookProgress = exports.updateBookProgress = exports.initializeBookProgress = exports.calcBookFailure = exports.calcBookSuccess = exports.calcBook = exports.configViewer = exports.initializeViewer = exports.initializeViewerConfig = undefined;

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// viewer
const initializeViewerConfig = exports.initializeViewerConfig = function initializeViewerConfig(bookId) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return { bookId: bookId, config: config, type: ACTION_TYPES.VIEWER.INITIALIZE_CONFIG };
};
const initializeViewer = exports.initializeViewer = bookId => ({ bookId: bookId, type: ACTION_TYPES.VIEWER.INITIALIZE });
const configViewer = exports.configViewer = (bookId, payload) => ({
    bookId: bookId,
    payload: payload,
    type: ACTION_TYPES.VIEWER.CONFIG
});
// book
const calcBook = exports.calcBook = (bookId, wrap) => ({
    bookId: bookId,
    wrap: wrap,
    type: ACTION_TYPES.VIEWER.CALC_START
});
const calcBookSuccess = exports.calcBookSuccess = (bookId, computed) => {
    return {
        bookId: bookId,
        computed: computed,
        type: ACTION_TYPES.VIEWER.CALC_SUCCESS
    };
};
const calcBookFailure = exports.calcBookFailure = (bookId, error) => {
    return {
        bookId: bookId,
        error: error,
        type: ACTION_TYPES.VIEWER.CALC_FAILURE
    };
};
const initializeBookProgress = exports.initializeBookProgress = () => ({ type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_INITIALIZE });
// progress
const updateBookProgress = exports.updateBookProgress = percentage => (dispatch, getState) => {
    _helpers2.default.print('Action updateBookProgress');
    const state = getState();

    var _selectors$viewer$con = selectors.viewer.config(state);

    const bookId = _selectors$viewer$con.bookId;

    const computed = selectors.viewer.computed(bookId)(state);
    const pageNo = Math.floor(computed.length * percentage) + 1;
    return dispatch({
        id: bookId,
        percentage: percentage,
        pageNo: pageNo,
        type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE
    });
};
const destroyBookProgress = exports.destroyBookProgress = () => {
    return {
        type: ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY
    };
};
const viewerJumpTo = exports.viewerJumpTo = percentage => ({ type: ACTION_TYPES.VIEWER.JUMP, percentage: percentage });
// sub components
const toggleViewerPanel = exports.toggleViewerPanel = reset => ({ type: ACTION_TYPES.VIEWER.PANEL_TOGGLE, reset: reset });
const toggleViewerPreference = exports.toggleViewerPreference = reset => ({ type: ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE, reset: reset });
const toggleViewerNavigation = exports.toggleViewerNavigation = reset => ({ type: ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE, reset: reset });
const toggleViewerPageProgressInfo = exports.toggleViewerPageProgressInfo = reset => ({ type: ACTION_TYPES.VIEWER.PAGE_PROGRESS_INFO_TOGGLE, payload: reset });
// config
const changeViewerFontSize = exports.changeViewerFontSize = fontSizeInPixel => ({ type: ACTION_TYPES.VIEWER.FONT_CHANGE, fontSize: fontSizeInPixel });
const changeViewerTheme = exports.changeViewerTheme = themeName => ({ type: ACTION_TYPES.VIEWER.THEME_CHANGE, theme: themeName });
const toggleViewerScrollMode = exports.toggleViewerScrollMode = reset => ({ type: ACTION_TYPES.VIEWER.SCROLL_MODE_TOGGLE, reset: reset });

/***/ }),
/* 98 */
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

const styles = __webpack_require__(75);
function Alerts(props) {
    return _react2.default.createElement("div", { className: styles.alerts }, props.messages.map((msg, index) => _react2.default.createElement(_Alert2.default, { key: index, type: msg.type, message: msg.content, visible: msg.visible, onRequestClose: () => {
            props.onRequestClose(msg.id);
        } })));
}
exports.default = Alerts;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = exports.Alerts = undefined;

var _Alert = __webpack_require__(52);

var _Alert2 = _interopRequireDefault(_Alert);

var _Alerts = __webpack_require__(98);

var _Alerts2 = _interopRequireDefault(_Alerts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Alerts = _Alerts2.default;
exports.Alert = _Alert2.default;
exports.default = _Alert2.default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _Branding = __webpack_require__(103);

var _Branding2 = _interopRequireDefault(_Branding);

var _Colophon = __webpack_require__(106);

var _Colophon2 = _interopRequireDefault(_Colophon);

var _actions = __webpack_require__(13);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let App = class App extends _react.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        this.props.userLogout();
    }
    componentDidMount() {
        if (this.props.session.user.role !== 'visitor') {
            this.props.fetchShelf();
        }
    }
    componentWillReceiveProps(nextProps) {
        const userLoggedIn = this.props.session.user.role === 'visitor' && nextProps.session.user.role !== 'visitor';
        if (userLoggedIn) {
            this.props.fetchShelf();
        }
    }
    render() {
        let isAdmin = false;
        let username = null;
        if (this.props.session.user.role !== 'visitor') {
            isAdmin = this.props.session.user.role === 'admin';
            username = this.props.session.user.username;
        }
        const bookShelf = this.props.bookShelf;

        const bookShelfList = bookShelf.map(book => ({
            title: book.title,
            id: book.id
        }));
        return _react2.default.createElement("div", null, _react2.default.createElement(_Branding2.default, { recentReading: bookShelfList, isAdmin: isAdmin, username: username, onLogout: this.handleLogout }), this.props.children, _react2.default.createElement(_Colophon2.default, null));
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    notification: state.components.notification,
    session: state.session,
    bookShelf: selectors.shelfBooks()(state)
}), { fetchShelf: _actions.fetchShelf, userLogout: _actions.userLogout })(App);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = __webpack_require__(285);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BodyClass = class BodyClass extends _react.Component {
    render() {
        return _react2.default.createElement("div", { className: "body-class" }, this.props.children);
    }
};
BodyClass = __decorate([(0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)], BodyClass);
function reducePropsToState(propsList) {
    const innermostProps = (0, _last3.default)(propsList);
    if (innermostProps) {
        const props = (0, _pick3.default)(innermostProps, ['className']);
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
exports.default = BodyClass;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(47);

var _Dropdown = __webpack_require__(53);

var _Logo = __webpack_require__(50);

var _Logo2 = _interopRequireDefault(_Logo);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(252);
let Branding = class Branding extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownMenuVisible: false
        };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    toggleDropdownMenu() {
        this.setState({
            isDropdownMenuVisible: !this.state.isDropdownMenuVisible
        });
    }
    handleLogoutClick(e) {
        this.props.onLogout();
        e.preventDefault();
    }
    render() {
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
        var _props = this.props;
        const username = _props.username,
              recentReading = _props.recentReading;

        return _react2.default.createElement("div", { styleName: `branding ${this.props.className ? this.props.className : ''}` }, _react2.default.createElement(_layout.Container, { className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "left" }, _react2.default.createElement(_Logo2.default, null)), _react2.default.createElement("div", { className: "left", styleName: "nav" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/browse" }, "\u6D4F\u89C8")))), username ? _react2.default.createElement("div", { styleName: "nav--user" }, recentReading.length !== 0 && _react2.default.createElement(_Dropdown.Dropdown, { styleName: "dropdown-recent-reading", title: "最近阅读" }, recentReading.slice(0, 5).map((book, index) => {
            return _react2.default.createElement(_Dropdown.DropdownItem, { key: index }, _react2.default.createElement(_reactRouter.Link, { to: `/viewer/book/${book.id}` }, book.title));
        }), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/shelf` }, "\u67E5\u770B\u5168\u90E8"))), _react2.default.createElement(_Dropdown.Dropdown, { title: _react2.default.createElement("div", { style: { display: 'inline-block' } }, username, isAdmin && _react2.default.createElement("span", { className: "badge" }, "\u7BA1\u7406\u5458")) }, isAdmin === true && _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/console" }, "\u63A7\u5236\u53F0")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/shelf` }, "\u4E66\u67B6")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/profile` }, "\u4E2A\u4EBA\u4E3B\u9875")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/preference` }, "\u8BBE\u7F6E")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))) : _react2.default.createElement("div", { styleName: "nav--user" }, _react2.default.createElement("ul", { styleName: "nav-links" }, _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signin" }, "\u767B\u5F55")), _react2.default.createElement("li", { styleName: "nav-item" }, _react2.default.createElement(_reactRouter.Link, { styleName: "nav-link", to: "/signup" }, "\u6CE8\u518C")))))));
    }
};
Branding = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Branding);
exports.default = Branding;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Branding = __webpack_require__(102);

var _Branding2 = _interopRequireDefault(_Branding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Branding2.default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(253);
let Button = class Button extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false
        };
    }
    render() {
        var _props = this.props;
        let onClick = _props.onClick,
            className = _props.className,
            color = _props.color,
            size = _props.size,
            isFluid = _props.isFluid,
            width = _props.width,
            to = _props.to;

        let style = {};
        const styleName = (0, _classnames2.default)({
            'btn': true,
            'btn--hover': this.state.isMouseOver,
            'btn--fluid': isFluid,
            [`btn--${color}`]: Boolean(color),
            [`btn--${size}`]: Boolean(size)
        });
        if (this.props.to) {
            onClick = e => {
                e.preventDefault();
                _helpers2.default.redirect(to);
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
                width: width
            };
        }
        let props = (0, _omit3.default)(this.props, ['to', 'color', 'size', 'isFluid', 'width', 'styles']);
        props = (0, _assign3.default)({}, props, {
            className: className || '',
            onClick: onClick,
            style: style
        });
        return _react2.default.createElement("button", Object.assign({}, props, { styleName: styleName, onMouseOver: () => {
                this.setState({
                    isMouseOver: true
                });
            }, onMouseOut: () => {
                this.setState({
                    isMouseOver: false
                });
            } }), this.props.children);
    }
};
Button = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Button);
Button.defaultProps = {
    color: 'blue'
};
exports.default = Button;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(254);
let Colophon = class Colophon extends _react.Component {
    render() {
        return _react2.default.createElement("div", { className: "colophon", styleName: "colophon" }, _react2.default.createElement(_Container2.default, null, _react2.default.createElement("p", null, "\u00A9 2015\uFF0D2016 readrweb.com, all rights reserved")));
    }
};
Colophon = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Colophon);
exports.default = Colophon;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colophon = __webpack_require__(105);

var _Colophon2 = _interopRequireDefault(_Colophon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Colophon2.default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _layout = __webpack_require__(47);

var _ConsoleBranding = __webpack_require__(109);

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

var _actions = __webpack_require__(13);

var _ConsoleSidebar = __webpack_require__(111);

var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

var _menus = __webpack_require__(130);

var _menus2 = _interopRequireDefault(_menus);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Console = class Console extends _react.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    redirectIfNotAdmin() {
        let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

        if (props.session.user.role !== 'admin') {
            _helpers2.default.redirect('/');
        }
    }
    handleLogout() {
        this.props.userLogout();
    }
    componentWillReceiveProps(nextProps) {
        const userRoleChanged = this.props.session.user.role !== nextProps.session.user.role;
        if (userRoleChanged) {
            this.redirectIfNotAdmin(nextProps);
        }
    }
    render() {
        let isAdmin = this.props.session.user.role === 'admin';
        let username = this.props.session.user.username;
        let pathname = this.props.routing.locationBeforeTransitions ? this.props.routing.locationBeforeTransitions.pathname : 'console';
        const contentStyle = {
            marginLeft: 320,
            paddingTop: 60
        };
        return isAdmin ? _react2.default.createElement(_DocContainer2.default, { bodyClass: "console" }, _react2.default.createElement(_ConsoleBranding2.default, { isAdmin: isAdmin, username: username, onLogout: this.handleLogout }), _react2.default.createElement(_layout.Container, { isFluid: true }, _react2.default.createElement(_ConsoleSidebar2.default, { menuMapping: _menus2.default, currentPath: pathname }), _react2.default.createElement("div", { style: contentStyle }, this.props.children))) : _react2.default.createElement("div", { style: { textAlign: 'center', margin: '20px 0' } }, "ACCESS DENIED!");
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    notifications: state.components.notifications,
    session: state.session,
    routing: state.routing
}), { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth, userLogout: _actions.userLogout })(Console);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _Dropdown = __webpack_require__(53);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(50);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(255);
let ConsoleBranding = class ConsoleBranding extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownMenuVisible: false
        };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(e) {
        this.props.onLogout();
        e.preventDefault();
    }
    toggleDropdownMenu() {
        this.setState({
            isDropdownMenuVisible: !this.state.isDropdownMenuVisible
        });
    }
    render() {
        let username = this.props.username;
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
        return _react2.default.createElement("div", { styleName: "branding" }, _react2.default.createElement(_Container2.default, { isFluid: true, className: "clearfix" }, _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "left" }, _react2.default.createElement(_Logo2.default, { to: "/console" })), _react2.default.createElement("div", { styleName: "sub-name" }, _react2.default.createElement("span", { styleName: "sub" }, "\u63A7\u5236\u53F0")), _react2.default.createElement("div", { styleName: "nav right" }, username && _react2.default.createElement(_Dropdown.Dropdown, { style: "dark", title: _react2.default.createElement("span", null, username, isAdmin && _react2.default.createElement("span", { className: "badge badge--dark" }, "\u7BA1\u7406\u5458")) }, _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: "/" }, "\u56DE\u5230 Readr")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/profile` }, "\u4E2A\u4EBA\u4E3B\u9875")), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement(_reactRouter.Link, { to: `/user/preference` }, "\u8BBE\u7F6E")), _react2.default.createElement(_Dropdown.DropdownItemSep, null), _react2.default.createElement(_Dropdown.DropdownItem, null, _react2.default.createElement("a", { onClick: this.handleLogoutClick, href: "#" }, "\u9000\u51FA")))))));
    }
};
ConsoleBranding = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], ConsoleBranding);
exports.default = ConsoleBranding;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConsoleBranding = __webpack_require__(108);

var _ConsoleBranding2 = _interopRequireDefault(_ConsoleBranding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ConsoleBranding2.default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(256);
let ConsoleSidebar = class ConsoleSidebar extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        const menuMapping = _props.menuMapping,
              currentPath = _props.currentPath;

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
        let rootMenu = _react2.default.createElement("ul", { styleName: "nav-side-root" }, menuMapping.map((menu, index) => {
            return _react2.default.createElement("li", { key: index, styleName: index !== currentMenu.rootIndex ? 'root-item' : 'root-item--current' }, _react2.default.createElement(_reactRouter.Link, { to: menu.path }, _react2.default.createElement(_Icon2.default, { size: 25, styleName: "icon", name: menu.component })));
        }));
        let subMenu = _react2.default.createElement("ul", { styleName: "nav-side-sub" }, menuMapping[currentMenu.rootIndex].subMenu.map((menu, index) => {
            return _react2.default.createElement("li", { key: index, styleName: index !== currentMenu.subIndex ? 'sub-item' : 'sub-item--current' }, _react2.default.createElement(_reactRouter.Link, { to: menu.path }, menu.displayName));
        }));
        return _react2.default.createElement("div", { styleName: "sidebar-left" }, rootMenu, subMenu);
    }
};
ConsoleSidebar = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], ConsoleSidebar);
exports.default = ConsoleSidebar;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConsoleSidebar = __webpack_require__(110);

var _ConsoleSidebar2 = _interopRequireDefault(_ConsoleSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ConsoleSidebar2.default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Container = class Container extends _react.Component {
    render() {
        let className = (this.props.isFluid ? 'container-fluid' : 'container') + (this.props.className ? ` ${this.props.className}` : '');
        return _react2.default.createElement("div", { className: className }, this.props.children);
    }
};
exports.default = Container;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(38);
let Dropdown = class Dropdown extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.handleGlobalClick = this.handleGlobalClick.bind(this);
    }
    handleGlobalClick(e) {
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
    componentDidMount() {
        window.addEventListener('click', this.handleGlobalClick);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleGlobalClick);
    }
    render() {
        var _props = this.props;
        const className = _props.className,
              style = _props.style;

        return _react2.default.createElement("div", { ref: _ref => {
                this.dropdown = _ref;
            }, styleName: "dropdown", className: className || '' }, _react2.default.createElement("div", { styleName: "dropdown-toggle" }, _react2.default.createElement("span", null, this.props.title), _react2.default.createElement("span", { styleName: "dropdown-caret" })), this.state.showMenu && _react2.default.createElement("div", { styleName: style === 'dark' ? 'dropdown-menu--dark' : 'dropdown-menu' }, _react2.default.createElement("ul", null, this.props.children)));
    }
};
Dropdown = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Dropdown);
exports.default = Dropdown;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = __webpack_require__(38);
function DropdownItem(props) {
    return _react2.default.createElement("li", null, typeof props.children === 'string' ? _react2.default.createElement("div", { className: styles['dropdown-item'] }, props.children) : _react2.default.cloneElement(props.children, {
        className: styles['dropdown-item']
    }));
}
exports.default = DropdownItem;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = __webpack_require__(38);
function DropdownItemSep(props) {
    return _react2.default.createElement("li", { className: styles['sep'] });
}
exports.default = DropdownItemSep;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(93);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = __webpack_require__(257);

exports.default = props => {
    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _svgIcons = __webpack_require__(118);

var _svgIcons2 = _interopRequireDefault(_svgIcons);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(258);
let Icon = class Icon extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props;
        let name = _props.name,
            onClick = _props.onClick,
            size = _props.size;

        let className = (0, _classnames2.default)('icon', `icon-${name}`, this.props.className);
        if (typeof _svgIcons2.default[name] === 'undefined') {
            console.error('Icon name (%s) not found! ', name);
        }
        size = size || 30;
        const svgWrapStyle = {
            position: 'absolute',
            top: '50%',
            marginTop: -size / 2
        };
        return _react2.default.createElement("span", { styleName: "icon", style: { minWidth: size, minHeight: size }, className: className, onClick: onClick }, _react2.default.createElement("div", { style: svgWrapStyle }, _react2.default.createElement("svg", Object.assign({}, _svgIcons2.default[name].viewBox && { viewBox: _svgIcons2.default[name].viewBox }, { width: size, height: size, styleName: "svg-shape" }), _react2.default.createElement("path", { d: _svgIcons2.default[name].path }))));
    }
};
Icon = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Icon);
exports.default = Icon;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(259);
let Input = class Input extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let props = Object.assign({}, this.props);
        delete props.className;
        var _props = this.props;
        const error = _props.error,
              touched = _props.touched;

        const showError = error && touched;
        return _react2.default.createElement("div", { styleName: (0, _classnames2.default)({ 'input-wrap': !showError, 'input-wrap--error': showError }), className: this.props.className || '' }, _react2.default.createElement("input", { styleName: "input", placeholder: this.props.placeholder, value: this.props.value, onChange: e => {
                this.props.onChange(e);
            }, type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }), showError && _react2.default.createElement("div", { styleName: "error-msg" }, error));
    }
};
Input = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Input);
exports.default = Input;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Logo = __webpack_require__(260);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logo(props) {
    const dark = props.dark,
          to = props.to;

    const styleName = dark ? 'logo--dark' : 'logo';
    return _react2.default.createElement("h1", { className: _Logo2.default['logo-wrap'] }, _react2.default.createElement(_reactRouter.Link, { className: _Logo2.default[styleName], to: to }, "readr"));
}
Logo['defaultProps'] = {
    to: '/'
};
exports.default = Logo;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _Alert = __webpack_require__(99);

var _Modal = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Master = class Master extends _react.Component {
    // static fetchData({ store, userSession }) {
    //   return store.dispatch(userAuth(userSession))
    // }
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        const hasNewErrorMsg = this.props.errorMessage.length !== nextProps.errorMessage.length;
        const routerChanged = nextProps.routing.locationBeforeTransitions.pathname !== this.props.routing.locationBeforeTransitions.pathname;
        if (hasNewErrorMsg) {
            this.props.sendNotification((0, _last3.default)(nextProps.errorMessage).toString(), 'error', 0);
        }
        if (routerChanged) {
            // 返回顶部
            window.document.body.scrollTop = 0;
        }
    }
    componentWillMount() {
        // this.props.userAuth()
        this.props.loadSession();
    }
    render() {
        var _props = this.props;
        const confirmModal = _props.confirmModal,
              closeConfirmModal = _props.closeConfirmModal,
              modal = _props.modal,
              closeModal = _props.closeModal;

        return _react2.default.createElement("div", { className: "app-root" }, _react2.default.createElement(_Modal.ConfirmModal, { open: confirmModal.open, title: confirmModal.title, onConfirm: confirmModal.onConfirm, onRequestClose: closeConfirmModal, width: 500 }, confirmModal.content), _react2.default.createElement(_Modal.ModalPlus, { open: modal.open, width: 500, onRequestClose: closeModal, title: modal.title }, modal.content), this.props.notifications.filter(noti => noti.visible).length > 0 && _react2.default.createElement(_Alert.Alerts, { onRequestClose: this.props.hideNotification, messages: this.props.notifications.map(noti => ({
                content: noti.message || '发生错误！',
                type: noti.type,
                visible: noti.visible,
                id: noti.id
            })) }), this.props.children);
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    notifications: state.components.notifications,
    errorMessage: state.errorMessage,
    confirmModal: state.components.confirmModal,
    modal: state.components.modal,
    routing: state.routing,
    session: state.session
}), { sendNotification: _actions.sendNotification, hideNotification: _actions.hideNotification, closeConfirmModal: _actions.closeConfirmModal, userAuth: _actions.userAuth, closeModal: _actions.closeModal, loadSession: _actions.loadSession })(Master);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(55);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalFooter = __webpack_require__(86);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(39);
let Dialog = class Dialog extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        const onConfirm = _props.onConfirm,
              onRequestClose = _props.onRequestClose,
              open = _props.open;

        return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: this.props.width }, _react2.default.createElement("div", { styleName: "confirm-modal" }, this.props.title && _react2.default.createElement("div", { styleName: "modal-header" }, _react2.default.createElement("h1", { styleName: "modal-title" }, this.props.title)), _react2.default.createElement("div", { styleName: "modal-content" }, this.props.children), _react2.default.createElement(_ModalFooter2.default, { onConfirm: onConfirm, onCancel: onRequestClose })));
    }
};
Dialog = __decorate([(0, _reactCssModules2.default)(styles)], Dialog);
exports.default = Dialog;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(54);

var _Modal2 = _interopRequireDefault(_Modal);

var _Modal3 = __webpack_require__(39);

var _Modal4 = _interopRequireDefault(_Modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ModalPlus = class ModalPlus extends _react.Component {
    render() {
        var _props = this.props;
        const title = _props.title,
              open = _props.open,
              onRequestClose = _props.onRequestClose,
              width = _props.width,
              actions = _props.actions;

        return _react2.default.createElement(_Modal2.default, { open: open, onRequestClose: onRequestClose, width: width || 600 }, _react2.default.createElement("div", { className: _Modal4.default['modal-plus'] }, title && _react2.default.createElement("div", { className: _Modal4.default['modal-header'] }, _react2.default.createElement("h1", { className: _Modal4.default['modal-title'] }, title)), _react2.default.createElement("div", { className: _Modal4.default['modal-body'] }, this.props.children), actions && actions.map((action, index) => {
            return _react2.default.cloneElement(action, {
                key: index
            });
        })));
    }
};
exports.default = ModalPlus;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppDoc = __webpack_require__(32);

var _AppDoc2 = _interopRequireDefault(_AppDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Page500 = class Page500 extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        const message = this.props.message;
        // todo: use AppError

        return _react2.default.createElement(_AppDoc2.default, { title: "500 Server Error", appMarkup: _react2.default.createElement("div", { className: "page500" }, _react2.default.createElement("h1", null, "500"), _react2.default.createElement("p", null, message)) });
    }
};
exports.default = Page500;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(49);

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(262);
let SelectizeInput = class SelectizeInput extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            focus: false,
            value: '',
            expendedOptionIndex: 0
        };
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.focusInput = this.focusInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    addValue(newValue) {
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
    showOptions() {
        this.setState({
            showOptions: true
        });
    }
    hideOptions() {
        this.setState({
            showOptions: false
        });
    }
    removeValue(index) {
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
    clearInputValue() {
        this.props.onInputChange('');
    }
    handleKeyPress(e) {
        if (e.keyCode === 8 && !this.props.value && this.props.values.length !== 0) {
            this.removeValue(-1);
        }
    }
    handleInputChange(e) {
        this.props.onInputChange(e.target.value);
        if ((this.props.options || []).length !== 0) {
            this.showOptions();
        }
    }
    focusInput() {
        this.input.focus();
    }
    handleOutsideClick(e) {
        if ((0, _isDescendant2.default)(this.inputWrap, e.target) || this.inputWrap === e.target) {
            this.focusInput();
            this.showOptions();
        } else {
            this.hideOptions();
        }
    }
    componentWillReceiveProps(nextProps) {
        const optionsLoaded = (nextProps.options || []).length !== 0 && (this.props.options || []).length === 0;
        if (optionsLoaded && this.state.focus) {
            this.showOptions();
        }
    }
    componentDidMount() {
        window.addEventListener('click', this.handleOutsideClick);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick);
    }
    render() {
        var _props = this.props;
        const label = _props.label,
              values = _props.values,
              onAddNewValue = _props.onAddNewValue,
              omitSelectedValuesFromOptions = _props.omitSelectedValuesFromOptions;

        let value = this.props.value || '';
        let options = this.props.options || [];
        let inputWidth = values.length > 0 ? value.length === 0 ? 16 : value.length * 16 : '100%';
        let placeholder = values.length > 0 ? '' : this.props.placeholder;
        let filteredOptions = options.filter(option => {
            if (omitSelectedValuesFromOptions) {
                const valueOfValues = (0, _map3.default)(values, 'value');
                return valueOfValues.indexOf(option.value) === -1;
            }
            return true;
        });
        const selectizeInputStyleName = (0, _classnames2.default)({
            'selectize-input': true,
            'selectize-input--focus': this.state.focus,
            'selectize-input--empty': values.length === 0
        });
        return _react2.default.createElement("div", { styleName: "selectize-wrap", className: this.props.className || '' }, label ? _react2.default.createElement("label", { className: "form-label" }, label) : null, _react2.default.createElement("div", { styleName: selectizeInputStyleName, ref: _ref => {
                this.inputWrap = _ref;
            } }, values.map((v, index) => {
            return _react2.default.createElement("span", { key: index, styleName: "selectize-tag" }, v.name, _react2.default.createElement(_Icon2.default, { styleName: "icon-remove", size: 20, name: "close", onClick: e => {
                    this.removeValue(index);
                } }));
        }), _react2.default.createElement("input", { style: { width: inputWidth }, ref: _ref2 => {
                this.input = _ref2;
            }, value: value, placeholder: placeholder, onBlur: e => {
                this.setState({ focus: false });
            }, onFocus: e => {
                this.setState({ focus: true });
            }, onChange: this.handleInputChange, onKeyDown: e => {
                this.handleKeyPress(e);
            } })), this.state.showOptions && (filteredOptions.length !== 0 || onAddNewValue) ? _react2.default.createElement("ul", { styleName: "query-results" }, filteredOptions.map((option, index) => {
            if (option.disabled) {
                return _react2.default.createElement("li", { key: index, className: "disabled" }, option.name);
            }
            return _react2.default.createElement("li", { key: index, onClick: e => {
                    this.addValue(option);
                    if (this.props.onOptionClick) {
                        this.props.onOptionClick(option);
                    }
                } }, _react2.default.createElement("span", null, option.name));
        }), onAddNewValue ? _react2.default.createElement("li", { onClick: e => {
                onAddNewValue(this.props.value);
            }, className: "add" }, "\u6DFB\u52A0 ", _react2.default.createElement("strong", null, this.props.value)) : null) : null);
    }
};
SelectizeInput = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], SelectizeInput);
SelectizeInput['defaultProps'] = {
    omitSelectedValuesFromOptions: true
};
exports.default = SelectizeInput;

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

exports.default = _SelectizeInput2.default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(263);
let Textarea = class Textarea extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return _react2.default.createElement("div", { styleName: "textarea-wrap", className: this.props.className || '' }, _react2.default.createElement("textarea", { placeholder: this.props.placeholder, value: this.props.value, onChange: e => {
                this.props.onChange(e);
            }, styleName: "textarea", type: this.props.type ? this.props.type : 'text', name: this.props.name ? this.props.name : null }));
    }
};
Textarea = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Textarea);
exports.default = Textarea;

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

exports.default = _Textarea2.default;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(287);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(140);

var _reducers2 = _interopRequireDefault(_reducers);

var _api = __webpack_require__(61);

var _api2 = _interopRequireDefault(_api);

var _modifyResponse = __webpack_require__(64);

var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

var _handleServerStore = __webpack_require__(62);

var _handleServerStore2 = _interopRequireDefault(_handleServerStore);

var _handleInitialState = __webpack_require__(131);

var _handleInitialState2 = _interopRequireDefault(_handleInitialState);

var _logActionTypes = __webpack_require__(63);

var _logActionTypes2 = _interopRequireDefault(_logActionTypes);

var _reduxLogger = __webpack_require__(286);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _middleware = __webpack_require__(137);

var _middleware2 = _interopRequireDefault(_middleware);

var _reduxSaga = __webpack_require__(44);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sagaMiddleware = (0, _reduxSaga2.default)();
const SERVER_MIDDLEWARES_DEV = [_handleServerStore2.default, sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default, _logActionTypes2.default];
const SERVER_MIDDLEWARES_PROD = [_handleServerStore2.default, sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default];
const MIDDLEWARES_DEV = [sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true })];
const MIDDLEWARES_PROD = [sagaMiddleware, _api2.default, _middleware2.default.cache, _modifyResponse2.default, _reduxThunk2.default];
function configureStore() {
    let middlewares;
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
    const store = (0, _redux.createStore)(_reducers2.default, (0, _handleInitialState2.default)(), _redux.applyMiddleware.apply(null, middlewares));
    if (false) {
        module.hot.accept('./reducers', () => {
            console.info('hot updating reducers');
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    return Object.assign({}, store, {
        runSaga: sagaMiddleware.run,
        close: () => store.dispatch(_reduxSaga.END)
    });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
exports.default = menus;

/***/ }),
/* 131 */
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

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getApiRoot;

var _getEnv = __webpack_require__(58);

var _getEnv2 = _interopRequireDefault(_getEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = (0, _getEnv2.default)();
function getApiRoot() {
    const PORT = env.PORT;

    if (process.env.NODE_ENV === 'production') {
        // todo: domain
        return `/api`;
    }
    return `http://localhost:${PORT}/api`;
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onRoutingChange = undefined;

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 检查 store 里面的 routing 是否变化
const onRoutingChange = exports.onRoutingChange = fn => (nextProps, currentProps) => {
    if (!currentProps.routing) {
        console.error('routing 需要现在组件 props 里面声明！');
        return false;
    }
    const hasPathParamChanged = !(0, _isEqual3.default)(nextProps.routing, currentProps.routing);
    if (hasPathParamChanged) {
        fn(nextProps.routing);
    }
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = print;
function print() {
    if (process.env.NODE_ENV !== 'production') {
        const style = 'color: blue;';

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = redirect;

var _isServerRoutingEnabled = __webpack_require__(60);

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

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = store => next => action => {
    return next(action);
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__(61);

var _api2 = _interopRequireDefault(_api);

var _modifyResponse = __webpack_require__(64);

var _modifyResponse2 = _interopRequireDefault(_modifyResponse);

var _handleServerStore = __webpack_require__(62);

var _handleServerStore2 = _interopRequireDefault(_handleServerStore);

var _logActionTypes = __webpack_require__(63);

var _logActionTypes2 = _interopRequireDefault(_logActionTypes);

var _cache = __webpack_require__(136);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    api: _api2.default,
    modifyResponse: _modifyResponse2.default,
    handleServerStore: _handleServerStore2.default,
    logActionTypes: _logActionTypes2.default,
    cache: _cache2.default
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _viewer = __webpack_require__(139);

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function notifications() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let action = arguments[1];

    if (action.type === ACTION_TYPES.NOTIFICATION.HIDE) {
        return state.map(n => n.id === action.id ? Object.assign({}, n, { visible: false }) : n);
    }
    if (action.type === ACTION_TYPES.NOTIFICATION.SHOW) {
        return [...state, {
            visible: true,
            message: action.message,
            type: action.msgType,
            id: action.id
        }];
    }
    return state;
}
function confirmModal() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

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
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

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
const components = (0, _redux.combineReducers)({
    notifications: notifications,
    confirmModal: confirmModal,
    modal: modal,
    viewer: _viewer2.default
});
exports.default = components;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _constants = __webpack_require__(57);

var CONSTANTS = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getFlag = (reset, currentFlag) => {
    if (typeof reset === 'undefined') {
        return !currentFlag;
    }
    return reset;
};
function contents() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.CALC_SUCCESS:
            return (0, _merge3.default)({}, state, {
                [action.bookId]: {
                    computed: action.computed
                }
            });
        default:
            return state;
    }
}
function config() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { theme: CONSTANTS.VIEWER_DEFS.THEMES.WHITE, isScrollMode: true };
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.SCROLL_MODE_TOGGLE:
            const reset = action.reset;

            return (0, _merge3.default)({}, state, {
                isScrollMode: getFlag(reset, state.isScrollMode)
            });
        case ACTION_TYPES.VIEWER.THEME_CHANGE:
            return (0, _merge3.default)({}, state, {
                theme: action.theme
            });
        case ACTION_TYPES.VIEWER.FONT_CHANGE:
            return (0, _merge3.default)({}, state, {
                fontSize: action.fontSize
            });
        case ACTION_TYPES.VIEWER.CONFIG:
            return (0, _merge3.default)({}, state, {
                bookId: action.bookId
            }, action.payload);
        default:
            return state;
    }
}
function progress() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE:
            return (0, _merge3.default)({}, state, {
                [action.id]: {
                    isFetching: false,
                    percentage: action.percentage,
                    pageNo: action.pageNo
                }
            });
        case ACTION_TYPES.VIEWER.BOOK_PROGRESS_DESTROY:
            return (0, _assign3.default)({}, state, {
                [action.id]: {
                    isFetching: false
                }
            });
        default:
            return state;
    }
}
const panel = function panel() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.PANEL_TOGGLE:
            const reset = action.reset;

            const a = getFlag(reset, state.show);
            return {
                show: a
            };
        default:
            return state;
    }
};
const preference = function preference() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
            const reset = action.reset;

            return {
                show: getFlag(reset, state.show)
            };
        default:
            return state;
    }
};
const navigation = function navigation() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE:
            const reset = action.reset;

            return {
                show: getFlag(reset, state.show)
            };
        default:
            return state;
    }
};
const progressComponent = function progressComponent() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false };
    let action = arguments[1];

    switch (action.type) {
        case ACTION_TYPES.VIEWER.PAGE_PROGRESS_INFO_TOGGLE:
            const payload = action.payload;

            return {
                show: getFlag(payload, state.show)
            };
        default:
            return state;
    }
};
const components = (0, _redux.combineReducers)({
    panel: panel,
    preference: preference,
    navigation: navigation,
    progress: progressComponent
});
exports.default = (0, _redux.combineReducers)({
    config: config,
    contents: contents,
    progress: progress,
    components: components
});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

exports.entities = entities;
exports.session = session;

var _redux = __webpack_require__(17);

var _reactRouterRedux = __webpack_require__(81);

var _components = __webpack_require__(138);

var _components2 = _interopRequireDefault(_components);

var _pagination = __webpack_require__(142);

var _pagination2 = _interopRequireDefault(_pagination);

var _betterReduxForm = __webpack_require__(28);

var _actionTypes = __webpack_require__(4);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorMessage() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let action = arguments[1];
    const error = action.error;

    if (error) {
        return [...state, action.error.message || '发生未知错误！'];
    }
    return state;
}
function entities() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

    if (action.response && action.response.entities) {
        return (0, _merge3.default)({}, state, action.response.entities);
    }
    if (action.type === ActionTypes.REMOVE_ENTITY) {
        const name = action.name,
              id = action.id;

        return (0, _assign3.default)({}, state, {
            [name]: (0, _omit3.default)(state[name], [id])
        });
    }
    return state;
}
const DEFAULT_VISTOR_STATE = { user: { role: 'visitor' }, isFetching: false, determined: false };
function session() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_VISTOR_STATE;
    let action = arguments[1];

    switch (action.type) {
        case ActionTypes.SESSION.REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.SESSION.SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                determined: true,
                user: action.response
            });
        case ActionTypes.SESSION.FAILURE:
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
// export function session(state = DEFAULT_VISTOR_STATE, action) {
//   switch (action.type) {
//     case ActionTypes.AUTH.REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true
//       })
//     case ActionTypes.AUTH.SUCCESS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         determined: true,
//         user: action.response
//       })
//     case ActionTypes.AUTH.FAILURE:
//       return Object.assign({}, state, {
//         isFetching: false,
//         determined: true
//       })
//     case ActionTypes.LOGOUT.SUCCESS:
//       return Object.assign({}, DEFAULT_VISTOR_STATE, {
//         determined: true
//       })
//     default:
//       return state
//   }
// }
const rootReducer = (0, _redux.combineReducers)({
    components: _components2.default,
    entities: entities,
    errorMessage: errorMessage,
    session: session,
    routing: _reactRouterRedux.routerReducer,
    form: _betterReduxForm.reducer,
    pagination: _pagination2.default
});
exports.default = rootReducer;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_PAGINATION_STATE = undefined;

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

var _union2 = __webpack_require__(279);

var _union3 = _interopRequireDefault(_union2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.computePaginationState = computePaginationState;
exports.default = paginate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_PAGINATION_STATE = exports.DEFAULT_PAGINATION_STATE = {
    isFetching: false,
    pages: {},
    ids: [],
    pageCount: 0
};
function computePaginationState(state, action) {
    const currentPage = action.response._next ? action.response._next.page - 1 : action.response._last && action.response._last.page || 1;
    const pages = (0, _assign3.default)({}, {
        [currentPage]: action.response.result
    });
    return (0, _assign3.default)({}, state, {
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
    let types = _ref.types,
        mapActionToKey = _ref.mapActionToKey;

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected types to be an array of three elements.');
    }
    if (!types.every(t => typeof t === 'string')) {
        throw new Error('Expected types to be strings.');
    }
    if (typeof mapActionToKey !== 'function') {
        throw new Error('Expected mapActionToKey to be a function.');
    }

    var _types = _slicedToArray(types, 3);

    const requestType = _types[0],
          successType = _types[1],
          failureType = _types[2];

    function updatePagination() {
        let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_PAGINATION_STATE;
        let action = arguments[1];

        switch (action.type) {
            case requestType:
                return (0, _assign3.default)({}, state, {
                    isFetching: true
                });
            case successType:
                return computePaginationState(state, action);
            case failureType:
                return (0, _assign3.default)({}, state, {
                    isFetching: false
                });
            default:
                return state;
        }
    }
    return function updatePaginationByKey() {
        let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let action = arguments[1];

        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                const key = mapActionToKey(action);
                if (typeof key !== 'string') {
                    throw new Error('Expected key to be a string.');
                }
                return (0, _merge3.default)({}, state, {
                    [key]: updatePagination(state[key], action)
                });
            default:
                return state;
        }
    };
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = combined;

var _paginate = __webpack_require__(141);

var _paginate2 = _interopRequireDefault(_paginate);

var _redux = __webpack_require__(17);

var _actionTypes = __webpack_require__(4);

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_KEY = 'default';
const SEARCH_KEY = 'search';
const parseTypes = actionTypes => {
    return [actionTypes.REQUEST, actionTypes.SUCCESS, actionTypes.FAILURE];
};
const generalMapActionToKey = action => {
    const options = action.options,
          key = action.key;

    var _ref = options || {};

    const q = _ref.q;

    if (key) {
        return key;
    }
    if (q) {
        return SEARCH_KEY;
    }
    return DEFAULT_KEY;
};
function pagination() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

    const combinedReducer = (0, _redux.combineReducers)({
        books: (0, _paginate2.default)({
            mapActionToKey: generalMapActionToKey,
            types: parseTypes(ActionTypes.BOOKS)
        }),
        users: (0, _paginate2.default)({
            mapActionToKey: generalMapActionToKey,
            types: parseTypes(ActionTypes.USERS)
        }),
        authors: () => state.authors || {},
        doubanBooks: () => state.doubanBooks || {},
        bookShelves: () => state.bookShelves || {}
    });
    return combinedReducer(state, action);
}
// legacy pagination support
const updatePagination = function updatePagination() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _paginate.DEFAULT_PAGINATION_STATE;
    let action = arguments[1];
    let merge = arguments[2];

    if (!action.response) {
        return Object.assign({}, state, {
            isFetching: true
        });
    } else {
        return (0, _paginate.computePaginationState)(state, action);
    }
};
function legacyPagination() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments[1];

    if (action.pagination) {
        var _action$pagination = action.pagination;
        const name = _action$pagination.name,
              q = _action$pagination.q,
              key = _action$pagination.key,
              merge = _action$pagination.merge;

        const qKey = q ? SEARCH_KEY : null;
        const finalKey = qKey || key || DEFAULT_KEY;
        const originalState = state[name] && state[name][finalKey] || undefined;
        return Object.assign({}, state, {
            [name]: {
                [finalKey]: updatePagination(originalState, action, merge)
            }
        });
    }
    return state;
}
function combined(state, action) {
    return pagination(legacyPagination(state, action), action);
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(11).then((function (require) {
            fn(null, __webpack_require__(291).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(15).then((function (require) {
            fn(null, __webpack_require__(292).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(3).then((function (require) {
            fn(null, __webpack_require__(293).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(9).then((function (require) {
            fn(null, __webpack_require__(294).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(2).then((function (require) {
            fn(null, __webpack_require__(295).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(1).then((function (require) {
            fn(null, __webpack_require__(296).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(10).then((function (require) {
            fn(null, __webpack_require__(297).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(5).then((function (require) {
            fn(null, __webpack_require__(298).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(6).then((function (require) {
            fn(null, __webpack_require__(299).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(12).then((function (require) {
            fn(null, __webpack_require__(300).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(8).then((function (require) {
            fn(null, __webpack_require__(301).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(7).then((function (require) {
            fn(null, __webpack_require__(302).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(4).then((function (require) {
            fn(null, __webpack_require__(303).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(14).then((function (require) {
            fn(null, __webpack_require__(304).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(13).then((function (require) {
            fn(null, __webpack_require__(305).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(16).then((function (require) {
            fn(null, __webpack_require__(306).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    getComponent: function getComponent(nextState, fn) {
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            fn(null, __webpack_require__(307).default);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Master = __webpack_require__(121);

var _Master2 = _interopRequireDefault(_Master);

var _App = __webpack_require__(100);

var _App2 = _interopRequireDefault(_App);

var _Console = __webpack_require__(107);

var _Console2 = _interopRequireDefault(_Console);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createRoutes = function createRoutes() {
    let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const request = context.request,
          response = context.response;

    const handleConsoleEnter = (nextState, replace, callback) => {
        if (request) {
            // 服务端校验方式
            const role = request.context.user.role;

            if (role !== _common.ROLES.ADMIN) {
                response.redirect('/');
            }
            callback();
        } else {
            // 客户端校验方式
            try {
                _webAPI2.default.auth().then(res => {
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
    return _react2.default.createElement(_reactRouter.Route, { path: "/", component: _Master2.default }, _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "viewer/book/:id" }, __webpack_require__(159))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "test" }, __webpack_require__(158))), _react2.default.createElement(_reactRouter.Route, { component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, Object.assign({}, __webpack_require__(145))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "browse" }, __webpack_require__(147))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "book/:id" }, __webpack_require__(146))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections" }, __webpack_require__(149))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections/:id" }, __webpack_require__(148))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "signin" }, __webpack_require__(156))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "signup" }, __webpack_require__(157))), _react2.default.createElement(_reactRouter.Route, { path: "user" }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/user/profile" }), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "shelf" }, __webpack_require__(155))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "preference" }, __webpack_require__(153))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "profile" }, __webpack_require__(154))))), _react2.default.createElement(_reactRouter.Route, { onEnter: handleConsoleEnter, path: "console", component: _Console2.default }, _react2.default.createElement(_reactRouter.IndexRedirect, { to: "/console/books" }), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "books" }, __webpack_require__(150))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "users" }, __webpack_require__(151))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "books/new" }, __webpack_require__(143))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "collections/new" }, __webpack_require__(144)))), _react2.default.createElement(_reactRouter.Route, Object.assign({ path: "*" }, __webpack_require__(152))));
};
exports.default = createRoutes;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rootSaga;

var _effects = __webpack_require__(16);

var _loadRequests = __webpack_require__(162);

var _loadRequests2 = _interopRequireDefault(_loadRequests);

var _loginFlow = __webpack_require__(163);

var _loginFlow2 = _interopRequireDefault(_loginFlow);

var _viewerTasks = __webpack_require__(166);

var _viewerTasks2 = _interopRequireDefault(_viewerTasks);

var _test = __webpack_require__(165);

var _test2 = _interopRequireDefault(_test);

var _sessionWatcher = __webpack_require__(164);

var _sessionWatcher2 = _interopRequireDefault(_sessionWatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function* rootSaga() {
    yield [(0, _effects.fork)(_loadRequests2.default), (0, _effects.fork)(_loginFlow2.default), (0, _effects.fork)(_viewerTasks2.default), (0, _effects.fork)(_test.watchTest2), (0, _effects.fork)(_test2.default), (0, _effects.fork)(_sessionWatcher2.default)];
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RESERVED_ACTION_KYES = exports.API_CONFIG_KEYS = undefined;

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

exports.default = watchAllLoadRequests;

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _utils = __webpack_require__(65);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OPTIONS = 'options';
const ID = 'id';
const DATA = 'data';
const TYPE = 'type';
const API_CONFIG_KEYS = exports.API_CONFIG_KEYS = [OPTIONS, ID, DATA];
const RESERVED_ACTION_KYES = exports.RESERVED_ACTION_KYES = [TYPE, ...API_CONFIG_KEYS];
const fetchBook = _utils.fetchEntity.bind(null, actions.book, _webAPI2.default.fetchBook);
const fetchBookContent = _utils.fetchEntity.bind(null, actions.bookContent, _webAPI2.default.fetchBookContent);
const fetchBooks = _utils.fetchEntity.bind(null, actions.books, _webAPI2.default.fetchBooks);
const fetchUsers = _utils.fetchEntity.bind(null, actions.users, _webAPI2.default.fetchUsers);
function* handleLoad(fetchFn, parsedAction, callApi) {
    const apiConfig = parsedAction.apiConfig,
          payload = parsedAction.payload;
    // 在检查是否有数据的算法完成之前默认直接 call api

    if (typeof callApi === 'undefined' || callApi === true) {
        yield (0, _effects.call)(fetchFn, apiConfig, payload);
    }
}
function* watchAllLoadRequests() {
    while (true) {
        const action = yield (0, _effects.take)(actions.LOAD_ACTIONS);
        const apiConfig = (0, _pick3.default)(action, API_CONFIG_KEYS);
        // 如果直接使用 payload 可能在 pagination 之类的 reducer 里面会有一些麻烦
        // 因为可能比较难判断哪个是 key
        const payload = (0, _omit3.default)(action, RESERVED_ACTION_KYES);
        const parsedAction = { apiConfig: apiConfig, payload: payload };
        switch (action.type) {
            case ACTION_TYPES.LOAD_USERS:
                yield (0, _effects.fork)(handleLoad, fetchUsers, parsedAction);
                break;
            case ACTION_TYPES.LOAD_BOOKS:
                yield (0, _effects.fork)(handleLoad, fetchBooks, parsedAction);
                break;
            case ACTION_TYPES.LOAD_BOOK:
                yield (0, _effects.fork)(handleLoad, fetchBook, parsedAction);
                break;
            case ACTION_TYPES.LOAD_BOOK_CONTENT:
                yield (0, _effects.fork)(handleLoad, fetchBookContent, parsedAction);
                break;
            default:
        }
    }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watchLoginFlow;

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function* watchLoginFlow() {
    // 使用 fetchEntity 会更好么？
    // 目前因为这种 put 类型的请求的返回值和一般的 entity 不一样所以不能直接使用
    while (true) {
        yield (0, _effects.take)(ACTION_TYPES.USER_LOGOUT);
        yield (0, _effects.put)(actions.logout.request());
        try {
            yield (0, _effects.call)(_webAPI2.default.logout);
            yield (0, _effects.put)(actions.logout.success());
        } catch (error) {
            yield (0, _effects.put)(actions.logout.failure(error));
        }
    }
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sessionWatcher;

var _effects = __webpack_require__(16);

var _reduxSaga = __webpack_require__(44);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function* handleSession(action) {
    yield (0, _effects.put)(actions.session.request());
    try {
        const result = yield (0, _effects.call)(_webAPI2.default.auth);
        yield (0, _effects.put)(actions.session.success(result.json));
    } catch (error) {
        yield (0, _effects.put)(actions.session.failure(error));
    }
}
function* sessionWatcher() {
    yield (0, _reduxSaga.takeLatest)(ACTION_TYPES.LOAD_SESSION, handleSession);
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watchTest;
exports.watchTest2 = watchTest2;

var _effects = __webpack_require__(16);

function someAsyncTask() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('loaded');
            resolve('load done');
            // yield put({ type: 'LOADED'})
        }, 1000);
    });
}
function doLoad() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('load done');
        }, 3000);
    });
}
function* doLoadWithCancel() {
    // while (true) {
    try {
        const res = yield someAsyncTask();
        yield (0, _effects.put)({ type: 'done', res: res });
        // setTimeout(function () {
        //   // console.log('loaded')
        //   // resolve('load done')
        //   yield put({ type: 'LOADED'})
        // }, 3000)
    } catch (error) {} finally {
        if (yield (0, _effects.cancelled)()) {
            console.log('canceled');
            yield (0, _effects.put)({ type: 'CANCEL_LOAD' });
            // return Promise.resolve('canceled p')
        }
    }
    // }
}
function doSave() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('save done');
        }, 3000);
    });
}
function* watchTest() {
    while (true) {
        const action = yield (0, _effects.take)(['LOAD', 'SAVE']);
        let res;
        if (action.type === 'LOAD') {
            res = yield doLoad();
            console.log(res);
        }
        if (action.type === 'SAVE') {
            res = yield doSave();
            console.log(res);
        }
    }
}
function* watchTest2() {
    while (true) {
        const loadAction = yield (0, _effects.take)('LOAD');
        const loadTask = yield (0, _effects.fork)(doLoadWithCancel);
        const saveAction = yield (0, _effects.take)('SAVE');
        if (saveAction.type === 'SAVE') {
            console.log('save?');
            yield (0, _effects.cancel)(loadTask);
        }
        yield (0, _effects.put)({ type: 'then what' });
    }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _merge2 = __webpack_require__(26);

var _merge3 = _interopRequireDefault(_merge2);

exports.default = watchViewer;

var _reduxSaga = __webpack_require__(44);

var _effects = __webpack_require__(16);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _actionTypes = __webpack_require__(4);

var ACTION_TYPES = _interopRequireWildcard(_actionTypes);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _common = __webpack_require__(8);

var _utils = __webpack_require__(65);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _Viewer = __webpack_require__(91);

var viewerUtils = _interopRequireWildcard(_Viewer);

var _utils2 = __webpack_require__(23);

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_PAGE_HEIGHT = 900;
const DEFAULT_FONT_SIZE = 16;
const fetchBookProgress = _utils.fetchEntity.bind(null, actions.progress, _webAPI2.default.fetchBookProgress);
function* setViewer(bookId) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    const viewerWidth = _utils3.default.getScreenInfo().view.width;
    const isSmallScreen = viewerWidth < 700;
    let initialized = {
        bookId: bookId,
        isCalcMode: true,
        fluid: isSmallScreen,
        isTouchMode: isSmallScreen,
        pageHeight: DEFAULT_PAGE_HEIGHT,
        fontSize: DEFAULT_FONT_SIZE,
        width: isSmallScreen ? viewerWidth : 'max'
    };
    const computed = yield (0, _effects.select)(selectors.viewer.computed(bookId));
    if (computed.length > 0) {
        initialized.isCalcMode = false;
    }
    initialized = (0, _merge3.default)({}, initialized, config);
    yield (0, _effects.put)(actions.configViewer(bookId, initialized));
}
function* setViewerWithAction(action) {
    const bookId = action.bookId;
    const config = action.config;
    yield setViewer(bookId, config);
}
function* watchInitViewer() {
    yield* (0, _reduxSaga.takeEvery)(ACTION_TYPES.VIEWER.INITIALIZE_CONFIG, setViewerWithAction);
}
function calcBook(wrap, flesh) {
    const startCalcHtmlTime = new Date().valueOf();
    const computedChapters = Array.prototype.map.call(wrap.childNodes, child => {
        const childDiv = child;
        const id = childDiv.getAttribute('id');
        const nodeHeights = viewerUtils.getNodeHeights(childDiv.querySelector('.lines').childNodes);
        return {
            id: id,
            nodeHeights: nodeHeights
        };
    });
    const endCalcHtmlTime = new Date().valueOf();
    _helpers2.default.print(`Calculating html takes ${endCalcHtmlTime - startCalcHtmlTime}ms`);
    const computedPages = viewerUtils.groupPageFromChapters(flesh, computedChapters, 900);
    return computedPages;
}
function* updateProgress(bookId, percentage) {
    try {
        yield (0, _effects.call)(_webAPI2.default.setProgress, bookId, {
            percentage: percentage
        });
    } catch (error) {
        console.error(error);
    } finally {
        if (yield (0, _effects.cancelled)()) {
            _helpers2.default.print('updateProgress canceled');
        }
    }
}
function* watchCalcBook() {
    while (true) {
        var _ref = yield (0, _effects.take)(ACTION_TYPES.VIEWER.CALC_START);

        const bookId = _ref.bookId,
              wrap = _ref.wrap;

        const bookContent = yield (0, _effects.select)(selectors.common.entity('bookContents', bookId));
        const flesh = bookContent.flesh || {};
        try {
            const computed = calcBook(wrap, flesh);
            yield (0, _effects.put)(actions.calcBookSuccess(bookId, computed));
            yield (0, _effects.put)(actions.configViewer(bookId, {
                isCalcMode: false
            }));
        } catch (error) {
            yield (0, _effects.put)(actions.calcBookFailure(bookId, error));
        }
    }
}
function* watchProgressOperations() {
    while (true) {
        const action = yield (0, _effects.take)([ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE, ACTION_TYPES.LOAD_BOOK_PROGRESS]);
        const session = yield (0, _effects.select)(selectors.common.session);
        const userRole = (0, _get3.default)(session, 'user.role');
        if (userRole !== _common.ROLES.VISITOR) {
            if (action.type === ACTION_TYPES.LOAD_BOOK_PROGRESS) {
                yield (0, _effects.call)(fetchBookProgress, { id: action.id });
            }
            if (action.type === ACTION_TYPES.VIEWER.BOOK_PROGRESS_UPDATE) {
                yield updateProgress(action.id, action.percentage);
            }
        } else {
            _helpers2.default.print('Not logged in, progress will not be fetched!');
        }
    }
}
function* jumpTo(action) {
    const percentage = action.percentage;

    var _ref2 = yield (0, _effects.select)(selectors.viewer.config);

    const bookId = _ref2.bookId,
          pageHeight = _ref2.pageHeight,
          isScrollMode = _ref2.isScrollMode;

    const allPages = yield (0, _effects.select)(selectors.viewer.computed(bookId));
    const pageCount = allPages.length;
    const totalHeight = pageCount * pageHeight;
    if (isScrollMode) {
        document.body.scrollTop = percentage ? totalHeight * percentage : 0;
    } else {
        yield (0, _effects.put)(actions.updateBookProgress(percentage));
    }
}
function* watchJumpRequest() {
    yield* (0, _reduxSaga.takeEvery)(ACTION_TYPES.VIEWER.JUMP, jumpTo);
}
function* fetchProgressAndJump(bookId) {
    yield (0, _effects.put)(actions.loadBookProgress(bookId));
    yield (0, _effects.take)(ACTION_TYPES.BOOK_PROGRESS.SUCCESS);

    var _ref3 = yield (0, _effects.select)(selectors.common.entity('bookProgress', bookId));

    const percentage = _ref3.percentage;

    yield (0, _effects.put)(actions.viewerJumpTo(percentage));
}
function* initializeViewer() {
    while (true) {
        var _ref4 = yield (0, _effects.take)(ACTION_TYPES.VIEWER.INITIALIZE);

        const bookId = _ref4.bookId;

        const computed = yield (0, _effects.select)(selectors.viewer.computed(bookId));
        if ((0, _isEmpty3.default)(computed)) {
            yield [(0, _effects.put)(actions.loadBook(bookId)), (0, _effects.put)(actions.loadBookContent(bookId))];
            yield (0, _effects.put)(actions.initializeViewerConfig(bookId));
            yield (0, _effects.take)(ACTION_TYPES.VIEWER.CALC_SUCCESS);
            yield fetchProgressAndJump(bookId);
        } else {
            yield fetchProgressAndJump(bookId);
        }
    }
}
function* watchViewer() {
    yield [(0, _effects.fork)(watchProgressOperations), (0, _effects.fork)(watchCalcBook), (0, _effects.fork)(watchInitViewer), (0, _effects.fork)(watchJumpRequest), (0, _effects.fork)(initializeViewer)];
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sessionUserId = exports.users = exports.booksAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.books = exports.shelfBooks = exports.authors = exports.doubanBooks = undefined;

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _reselect = __webpack_require__(45);

var _common = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const doubanBooks = exports.doubanBooks = key => (0, _reselect.createSelector)((0, _common.pagedEntities)({
    entitiesName: 'doubanBooks',
    paginationName: 'doubanBooks',
    paginationKey: key
}), books => books);
const authors = exports.authors = key => (0, _common.pagedEntities)({
    entitiesName: 'authors',
    paginationName: 'authors',
    paginationKey: key
});
const shelfBooks = exports.shelfBooks = key => (0, _common.pagedEntities)({
    entitiesName: 'shelfBooks',
    paginationName: 'bookShelves',
    paginationKey: key
});
const books = exports.books = (key, page) => (0, _common.pagedEntities)({
    entitiesName: 'books',
    paginationName: 'books',
    paginationKey: key,
    page: page
});
const doubanBooksAsOptions = exports.doubanBooksAsOptions = key => (0, _reselect.createSelector)(doubanBooks(key), selectedBooks => {
    return selectedBooks.map(book => ({
        name: book.title,
        value: book.id,
        additional: {
            description: book.summary,
            cover: book.images.large,
            author: book.author.join(', ')
        }
    }));
});
const authorsAsOptions = exports.authorsAsOptions = key => (0, _reselect.createSelector)(authors(key), items => {
    return items.map(item => ({
        name: item.name,
        value: item.id
    }));
});
const booksAsOptions = exports.booksAsOptions = key => (0, _reselect.createSelector)(books(key), items => {
    return items.map(item => ({
        name: item.title,
        value: item.id
    }));
});
const users = exports.users = (0, _common.pagedEntities)({
    entitiesName: 'users',
    paginationName: 'users'
});
const sessionUserId = exports.sessionUserId = state => {
    return (0, _get3.default)(state, ['session', 'user', 'id']);
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.progressComponent = exports.navigation = exports.preference = exports.panel = exports.progress = exports.navData = exports.computed = exports.config = exports.self = undefined;

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _common = __webpack_require__(33);

var common = _interopRequireWildcard(_common);

var _reselect = __webpack_require__(45);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const self = exports.self = state => {
    return (0, _get3.default)(state, ['components', 'viewer'], {});
};
const config = exports.config = state => {
    return (0, _get3.default)(state, ['components', 'viewer', 'config'], {});
};
const computed = exports.computed = bookId => state => {
    return (0, _get3.default)(state, ['components', 'viewer', 'contents', bookId, 'computed'], []);
};
const navData = exports.navData = bookId => state => {
    const bookContent = common.entity('bookContents', bookId)(state);
    return (0, _get3.default)(bookContent, 'nav', []);
};
const progress = exports.progress = bookId => state => {
    return (0, _get3.default)(state, ['components', 'viewer', 'progress', bookId], {});
};
// sub components
const panel = exports.panel = (0, _reselect.createSelector)(self, _self => {
    return (0, _get3.default)(_self, ['components', 'panel'], {});
});
const preference = exports.preference = (0, _reselect.createSelector)(self, _self => {
    return (0, _get3.default)(_self, ['components', 'preference'], {});
});
const navigation = exports.navigation = (0, _reselect.createSelector)(self, _self => {
    return (0, _get3.default)(_self, ['components', 'navigation'], {});
});
const progressComponent = exports.progressComponent = (0, _reselect.createSelector)(self, _self => {
    return (0, _get3.default)(_self, ['components', 'progress'], {});
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNil2 = __webpack_require__(41);

var _isNil3 = _interopRequireDefault(_isNil2);

var _model = __webpack_require__(12);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BasicApi = class BasicApi {
    constructor(schema) {
        this._schema = schema;
        this._model = new _model2.default(schema);
    }
    findOne(id) {
        return this._model.findOne(id);
    }
    list(page, keyword) {
        return this._model.list({
            page: page,
            disablePagination: (0, _isNil3.default)(page),
            // TODO
            filter: entity => true
        });
    }
    add(data) {
        return this._model.add(data);
    }
    update(id, data) {
        // todo
        // 无法提前知道是否为 upsert，所以无法预先决定是否验证 fields
        // 可能会造成 upsert 的数据 fields 不全的问题
        return this._model.update(id, data);
    }
    remove(id) {
        return this._model.remove(id);
    }
};
exports.default = BasicApi;

/***/ }),
/* 170 */
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

var _get2 = __webpack_require__(14);

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

var _utils = __webpack_require__(34);

var _utils2 = _interopRequireDefault(_utils);

var _helpers = __webpack_require__(25);

var _file = __webpack_require__(67);

var _parsers = __webpack_require__(214);

var _parsers2 = _interopRequireDefault(_parsers);

var _callApi = __webpack_require__(35);

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

const bookModel = new _model2.default(schemas.book);
const fileModel = new _model2.default(schemas.file);
const progressModel = new _model2.default(schemas.progress);
const authorModel = new _model2.default(schemas.author);
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
                description: description
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

        var _ref = yield (0, _callApi2.default)(`https://api.douban.com/v2/book/search?q=${encodeURI(keyword)}&count=1`);

        const bookJson = _ref.json;

        return (0, _get3.default)(bookJson, ['books', 0], {});
    });
}
function fetchBookMetaByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield fetchBookByTitle(title);
        return {
            cover: (0, _get3.default)(book, ['images', 'large']),
            description: (0, _get3.default)(book, 'summary'),
            authorInfo: (0, _get3.default)(book, 'author_intro')
        };
    });
}
/**
 * apis
 */
function findBook(id) {
    return bookModel.findOne(id).then(result => {
        const data = (0, _omit3.default)(result, ['file']);
        let contentType = 'txt';
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
    return __awaiter(this, void 0, void 0, function* () {
        const mergeBookMeta = (title, authorId, extMeta) => {
            return (0, _assign3.default)({}, {
                title: title,
                authors: [authorId],
                file: fileId
            }, meta, extMeta);
        };
        function doSave(title, authorName) {
            return __awaiter(this, void 0, void 0, function* () {
                const bookMeta = yield fetchBookMetaByTitle(title);
                const authorId = yield getAuthorId(authorName, bookMeta.authorInfo);
                const bookData = mergeBookMeta(title, authorId, (0, _omit3.default)(bookMeta, 'authorInfo'));
                return bookModel.add(bookData);
            });
        }
        if (fileId) {
            const fileResult = yield (0, _file.readFile)(fileId);
            if (fileResult.mimetype === 'application/epub+zip') {
                try {
                    const file = yield (0, _file.readFile)(fileId, _parsers2.default.epub);
                    const parsedContent = file.content;
                    const authorName = parsedContent.meta.author;
                    return doSave(parsedContent.meta.title, authorName);
                } catch (error) {
                    yield fileModel.remove(fileId);
                    throw error;
                }
            } else if (fileResult.mimetype === 'text/plain') {
                const file = yield (0, _file.readFile)(fileId);
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

        var _ref2 = yield fetchBookMetaByTitle(meta.authors);

        const authorInfo = _ref2.authorInfo;

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
            return Promise.reject((0, _helpers.notFoundError)('book'));
        }
        if (bookEntity.file.mimetype === 'application/epub+zip') {
            const fileResult = yield (0, _file.readFile)(fileId, _parsers2.default.epub);
            bookContent = (0, _omit3.default)(fileResult.content, ['meta']);
        } else if (bookEntity.file.mimetype === 'text/plain') {
            const fileResult = yield (0, _file.readFile)(fileId, _parsers2.default.txtContent);
            bookContent = fileResult.content;
        } else {
            return Promise.reject(new Error('Unsupported file type!'));
        }
        return (0, _assign3.default)({}, bookContent, { _id: bookId, content_id: fileId });
    });
}
function listBooks(page) {
    return bookModel.list({
        page: page,
        disablePagination: (0, _isNil3.default)(page),
        mapping: entity => (0, _omit3.default)(entity, ['content', 'file'])
    });
}
function listShelfBooks(userId, page) {
    return progressModel.listRaw({ query: { user_id: userId } }).then(results => {
        if (results.length === 0) {
            return results;
        }
        return Promise.all(results.sort(_utils2.default.sortByDate()).map(result => {
            return bookModel.findOne(result.book_id, true).then(res => {
                return res;
            }, error => {
                // 如果错误不是 404 也输出空的 entity
                return bookModel.outputEmpty(result.book_id);
            });
        })).then(res => {
            return (0, _paginate2.default)(res.map(entity => (0, _omit3.default)(entity, ['content'])), {
                page: page
            });
        });
    });
}
function removeBook(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = yield bookModel.findOne(bookId, true);
        const fileId = book.file;
        yield bookModel.remove(bookId);
        return (0, _file.delFile)(fileId);
    });
}

/***/ }),
/* 171 */
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

const collectionModel = new _model2.default(schemas.collection);
function listCollection(page) {
    return collectionModel.list({
        page: page,
        disablePagination: (0, _isNil3.default)(page),
        mapping: entity => {
            return (0, _assign3.default)({}, entity, {
                items: entity['items'].map(item => (0, _omit3.default)(item, 'content'))
            });
        }
    });
}

/***/ }),
/* 172 */
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

var _books = __webpack_require__(170);

Object.keys(_books).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _books[key];
    }
  });
});

var _user = __webpack_require__(173);

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});

var _users = __webpack_require__(174);

Object.keys(_users).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _users[key];
    }
  });
});

var _collections = __webpack_require__(171);

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

var _basicApi = __webpack_require__(169);

var _basicApi2 = _interopRequireDefault(_basicApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const author = exports.author = new _basicApi2.default(schemas.author);
const collection = exports.collection = new _basicApi2.default(schemas.collection);
const book = exports.book = new _basicApi2.default(schemas.book);
const tag = exports.tag = new _basicApi2.default(schemas.tag);
const user = exports.user = new _basicApi2.default(schemas.user);

/***/ }),
/* 173 */
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

const progressModel = new _model2.default(schemas.progress);
function getReadingProgress(userId, bookId) {
    const query = _humps2.default.decamelizeKeys({ userId: userId, bookId: bookId });
    return progressModel.list({ disablePagination: true, raw: true, query: query }).then(res => {
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
    const query = _humps2.default.decamelizeKeys({ userId: userId, bookId: bookId });
    return progressModel.update(query, data, {
        upsert: true
    });
}

/***/ }),
/* 174 */
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

const userModel = new _model2.default(schemas.user);
function findUser(id) {
    return userModel.findOne(id).then(entity => {
        return (0, _omit3.default)(entity, ['password']);
    });
}
function addUser(userInfo) {
    return userModel.add((0, _assign3.default)({}, userInfo, {
        role: _common.ROLES.USER
    }));
}

/***/ }),
/* 175 */
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
    const overidePort = config.port,
          isProduction = config.isProduction;

    const server = _http2.default.createServer(app);
    const port = overidePort || Number(process.env.PORT);
    app.set('port', port);
    server.listen(port);
    _print2.default.info(`Server running in ${isProduction ? 'production' : 'development'} at port ${port}`);
    return app;
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
let DataType = exports.DataType = class DataType {
    constructor(mark, isTypeArray) {
        this.mark = mark;
        this.isTypeArray = typeof isTypeArray === 'undefined' ? false : isTypeArray;
    }
    isArray() {
        if (typeof this.isTypeArray === 'undefined' || !this.isTypeArray) {
            return false;
        }
        return true;
    }
    equals(type) {
        return type.mark === this.mark && type.isArray() === this.isTypeArray;
    }
};
const arrayOf = exports.arrayOf = type => {
    return new DataType(type.mark, true);
};
const DataTypes = {
    String: new DataType('STRING'),
    Number: new DataType('NUMBER'),
    ID: new DataType('ID')
};
exports.default = DataTypes;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listCollections = exports.delFile = exports.readFile = exports.setReadingProgress = exports.getReadingProgress = exports.listShelfBooks = exports.addUser = exports.findUser = exports.removeBook = exports.editBookMeta = exports.listBooks = exports.resolveBookContent = exports.findBook = exports.addBook = exports.user = exports.tag = exports.book = exports.collection = exports.author = undefined;

var _api = __webpack_require__(172);

var api = _interopRequireWildcard(_api);

var _makeBasicEndpoint = __webpack_require__(178);

var _makeBasicEndpoint2 = _interopRequireDefault(_makeBasicEndpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// basic endpoints
const author = exports.author = (0, _makeBasicEndpoint2.default)(api.author);
const collection = exports.collection = (0, _makeBasicEndpoint2.default)(api.collection);
const book = exports.book = (0, _makeBasicEndpoint2.default)(api.book);
const tag = exports.tag = (0, _makeBasicEndpoint2.default)(api.tag);
const user = exports.user = (0, _makeBasicEndpoint2.default)(api.user);
// common endpoints
// books
const addBook = exports.addBook = (req, res, next) => {
    req.apiResults = api.addBook(req.body, req.loggedFileId);
    next();
};
const findBook = exports.findBook = (req, res, next) => {
    req.apiResults = api.findBook(req.params.book);
    next();
};
const resolveBookContent = exports.resolveBookContent = (req, res, next) => {
    req.apiResults = api.resolveBookContent(req.params.book);
    next();
};
const listBooks = exports.listBooks = (req, res, next) => {
    req.apiResults = api.listBooks(req.query.page || 1);
    next();
};
const editBookMeta = exports.editBookMeta = (req, res, next) => {
    req.apiResults = api.editBookMeta(req.params.book, req.body);
    next();
};
const removeBook = exports.removeBook = (req, res, next) => {
    req.apiResults = api.removeBook(req.params.book);
    next();
};
// users
const findUser = exports.findUser = (req, res, next) => {
    req.apiResults = api.findUser(req.context.user.id);
    next();
};
const addUser = exports.addUser = (req, res, next) => {
    req.apiResults = api.addUser(req.body);
    next();
};
// user
const listShelfBooks = exports.listShelfBooks = (req, res, next) => {
    req.apiResults = api.listShelfBooks(req.context.user.id, req.query.page || 1);
    next();
};
const getReadingProgress = exports.getReadingProgress = (req, res, next) => {
    req.apiResults = api.getReadingProgress(req.context.user.id, req.params.book);
    next();
};
const setReadingProgress = exports.setReadingProgress = (req, res, next) => {
    req.apiResults = api.setReadingProgress(req.context.user.id, req.params.book, req.body);
    next();
};
// file
const readFile = exports.readFile = (req, res, next) => {
    req.apiResults = api.readFile(req.params.file);
    next();
};
const delFile = exports.delFile = (req, res, next) => {
    req.apiResults = api.delFile(req.params.file);
    next();
};
// other
const listCollections = exports.listCollections = (req, res, next) => {
    req.apiResults = api.listCollection(req.query.page || 1);
    next();
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    return { findOne: findOne, list: list, add: add, update: update, remove: remove };
};
exports.default = makeBasicEndpoint;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let BadRequestError = class BadRequestError extends _genericError2.default {
    constructor(message, code) {
        super(message, 'BadRequestError');
        this.statusCode = 400;
        if (code) {
            this.code = code;
        }
    }
};
exports.default = BadRequestError;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EmailError = class EmailError extends _genericError2.default {
    constructor(message) {
        super(message, 'EmailError');
        this.statusCode = 500;
    }
};
exports.default = EmailError;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let InternalServerError = class InternalServerError extends _genericError2.default {
    constructor(message) {
        super(message, 'InternalServerError');
        this.statusCode = 500;
    }
};
exports.default = InternalServerError;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MethodNotAllowedError = class MethodNotAllowedError extends _genericError2.default {
    constructor(message) {
        super(message, 'MethodNotAllowedError');
        this.statusCode = 405;
    }
};
exports.default = MethodNotAllowedError;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let NoPermissionError = class NoPermissionError extends _genericError2.default {
    constructor(message) {
        super(message, 'NoPermissionError');
        this.statusCode = 403;
    }
};
exports.default = NoPermissionError;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let NotFoundError = class NotFoundError extends _genericError2.default {
    constructor(message) {
        super(message, 'NotFoundError');
        this.statusCode = 404;
    }
};
exports.default = NotFoundError;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let RequestEntityTooLargeError = class RequestEntityTooLargeError extends _genericError2.default {
    constructor(message) {
        super(message, 'RequestEntityTooLargeError');
        this.statusCode = 413;
    }
};
exports.default = RequestEntityTooLargeError;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TokenRevocationError = class TokenRevocationError extends _genericError2.default {
    constructor(message) {
        super(message, 'TokenRevocationError');
        this.statusCode = 503;
    }
};
exports.default = TokenRevocationError;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let TooManyRequestsError = class TooManyRequestsError extends _genericError2.default {
    constructor(message) {
        super(message, 'TooManyRequestsError');
        this.statusCode = 429;
    }
};
exports.default = TooManyRequestsError;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UnauthorizedError = class UnauthorizedError extends _genericError2.default {
    constructor(message) {
        super(message, 'UnauthorizedError');
        this.statusCode = 401;
    }
};
exports.default = UnauthorizedError;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UnsupportedFileTypeError = class UnsupportedFileTypeError extends _genericError2.default {
    constructor(message) {
        super(message, 'UnsupportedFileTypeError');
        this.statusCode = 415;
    }
};
exports.default = UnsupportedFileTypeError;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _genericError = __webpack_require__(5);

var _genericError2 = _interopRequireDefault(_genericError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ValidationError = class ValidationError extends _genericError2.default {
    constructor(message, offendingProperty) {
        super(message, 'ValidationError');
        this.statusCode = 422;
        if (offendingProperty) {
            this.property = offendingProperty;
        }
    }
};
exports.default = ValidationError;

/***/ }),
/* 191 */
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
  const shasum = _crypto2.default.createHash('sha1');
  shasum.update(buffer);
  return shasum.digest('hex');
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _urlJoin = __webpack_require__(82);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => {
    return (0, _urlJoin2.default)(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.DB_NAME);
};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _urlJoin = __webpack_require__(82);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = () => {
    return (0, _urlJoin2.default)(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.MONGOSTORE_NAME);
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initialize;

var _express = __webpack_require__(77);

var _express2 = _interopRequireDefault(_express);

var _expressSession = __webpack_require__(272);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = __webpack_require__(80);

var _path2 = _interopRequireDefault(_path);

var _morgan = __webpack_require__(281);

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = __webpack_require__(270);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(267);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectMongo = __webpack_require__(269);

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _render = __webpack_require__(205);

var _render2 = _interopRequireDefault(_render);

var _bootstrap = __webpack_require__(175);

var _bootstrap2 = _interopRequireDefault(_bootstrap);

var _routes = __webpack_require__(217);

var _routes2 = _interopRequireDefault(_routes);

var _constants = __webpack_require__(57);

var CONSTANTS = _interopRequireWildcard(_constants);

var _getMongoStoreUrl = __webpack_require__(193);

var _getMongoStoreUrl2 = _interopRequireDefault(_getMongoStoreUrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoStore = (0, _connectMongo2.default)(_expressSession2.default);
const app = (0, _express2.default)();
const PUBLIC_DIR = 'build/static';
const PUBLIC_URL = '/static';
const SESSION_SECRET = 'key';
const REQ_SIZE_LIMIT = '5mb';
const MONGO_STORE_URL = (0, _getMongoStoreUrl2.default)();
function initialize(config) {
    const basePath = config.basePath,
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
    app.use(PUBLIC_URL, _express2.default.static(_path2.default.join(basePath, PUBLIC_DIR)));
    // api routing
    app.use(`/${CONSTANTS.COMMON.API_PREFIX}`, _routes2.default.api());
    // render view
    app.use((0, _render2.default)(isProduction));
    // log error info
    app.use((0, _morgan2.default)('dev', {
        skip: function skip(req, res) {
            return res.statusCode < 400;
        }
    }));
    return (0, _bootstrap2.default)(app, {
        isProduction: isProduction
    });
}

/***/ }),
/* 195 */
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

var _i18n = __webpack_require__(15);

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
    const user = new _model2.default(schemas.user);
    const login = req.body.login ? req.body.login.toLowerCase() : undefined;
    const password = req.body.password;
    if (typeof login === 'undefined') {
        next(new _errors2.default.ValidationError((0, _i18n2.default)('errors.validation.preCheck.missRequiredFields', 'login')));
    }
    if (typeof password === 'undefined') {
        next(new _errors2.default.ValidationError((0, _i18n2.default)('errors.validation.preCheck.missRequiredFields', 'password')));
    }
    const query = { $or: [{ username: login, password: password }, { email: login, password: password }] };
    user.findOne(query).then(result => {
        req.session.user = _humps2.default.camelizeKeys(result);
        req.apiResults = Promise.resolve({ ok: 1 });
        next();
    }, error => {
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
exports.default = { basicAuth: basicAuth, check: check, revoke: revoke };

/***/ }),
/* 196 */
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

/***/ }),
/* 197 */
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

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(error, req, res, next) {
    const statusCode = error.statusCode || 500;
    let errorJson = error;
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

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _parseUrlencoded = __webpack_require__(36);

var _parseUrlencoded2 = _interopRequireDefault(_parseUrlencoded);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const API_ROOT = _helpers2.default.getApiRoot();
function parsePagination(_ref, _ref2) {
    let fullPath = _ref.fullPath,
        query = _ref.query;
    let current = _ref2.current,
        all = _ref2.all;

    const getLintByPage = page => `${fullPath}?${(0, _parseUrlencoded2.default)((0, _assign3.default)({}, query, { page: page }))}`;
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
    const apiResults = req.apiResults;

    if (!apiResults) {
        next(new Error('"apiResults" is not present!'));
    }
    apiResults.then(results => {
        handleSuccess(results, req, res);
    }, error => {
        next(error);
    });
}
exports.default = handleJSONResponse;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _parseContext = __webpack_require__(201);

var _parseContext2 = _interopRequireDefault(_parseContext);

var _auth = __webpack_require__(195);

var _auth2 = _interopRequireDefault(_auth);

var _requirePermissionsOf = __webpack_require__(209);

var _requirePermissionsOf2 = _interopRequireDefault(_requirePermissionsOf);

var _handleError = __webpack_require__(197);

var _handleError2 = _interopRequireDefault(_handleError);

var _handleJsonResponse = __webpack_require__(198);

var _handleJsonResponse2 = _interopRequireDefault(_handleJsonResponse);

var _logFile = __webpack_require__(200);

var _logFile2 = _interopRequireDefault(_logFile);

var _prepareApi = __webpack_require__(202);

var _prepareApi2 = _interopRequireDefault(_prepareApi);

var _handleApiNotFound = __webpack_require__(196);

var _handleApiNotFound2 = _interopRequireDefault(_handleApiNotFound);

var _setHeader = __webpack_require__(210);

var _setHeader2 = _interopRequireDefault(_setHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get2 = __webpack_require__(14);

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

const fileModel = new _model2.default(schemas.file);
// @req#loggedFileId
function logFile(req, res, next) {
    const file = req.file;
    const hash = helpers.computeHash(file.buffer);
    const data = {
        filename: file.originalname,
        // 会被转换为 binData 的 BSON type
        content: file.buffer,
        mimetype: file.mimetype,
        size: file.size,
        encoding: file.encoding,
        hash: hash
    };
    fileModel.findOne({ hash: hash }).then(result => {
        // req.loggedFileId = result._id
        // TODO: 404 处理
        const err = new Error('File already exists!');
        next(err);
    }, notFoundError => {
        // TODO: 不使用 404
        // 为了确定是未找到而不是其他错误需要做额外的判断
        fileModel.add(data).then(result => {
            const loggedFileId = (0, _get3.default)(result, ['ops', 0, '_id']);
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
/* 201 */
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

/***/ }),
/* 202 */
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

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(43);

var _ServerSideAppRoot = __webpack_require__(56);

var _ServerSideAppRoot2 = _interopRequireDefault(_ServerSideAppRoot);

var _sagas = __webpack_require__(161);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchData(req, res, next) {
    const renderProps = req.locals.matchedResults.renderProps;

    const store = req.locals.store;
    const rootComponent = _react2.default.createElement(_ServerSideAppRoot2.default, { renderPageContent: true, renderProps: renderProps, store: req.locals.store });
    store.runSaga(_sagas2.default).done.then(next);
    (0, _server.renderToString)(rootComponent);
    store.close();
}
exports.default = fetchData;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(43);

var _Page = __webpack_require__(124);

var _Page2 = _interopRequireDefault(_Page);

var _AppDoc = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(error, req, res, next) {
    const html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_Page2.default, { message: error.message || 'Unknown error occurred!' }));
    res.send(_AppDoc.DOCTYPE + html);
}
exports.default = handleError;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _init = __webpack_require__(206);

var _init2 = _interopRequireDefault(_init);

var _matchRoute = __webpack_require__(207);

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _fetchData = __webpack_require__(203);

var _fetchData2 = _interopRequireDefault(_fetchData);

var _renderView = __webpack_require__(208);

var _renderView2 = _interopRequireDefault(_renderView);

var _handleError = __webpack_require__(204);

var _handleError2 = _interopRequireDefault(_handleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const render = isProduction => {
    return [_init2.default, _matchRoute2.default, _fetchData2.default, (0, _renderView2.default)(isProduction), _handleError2.default];
};
exports.default = render;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = init;

var _reactRouterRedux = __webpack_require__(81);

var _reactRouter = __webpack_require__(9);

var _configureStore = __webpack_require__(129);

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
    const memoryHistory = (0, _reactRouter.createMemoryHistory)(req.url);
    const store = (0, _configureStore2.default)();
    const history = (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store);
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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _last2 = __webpack_require__(42);

var _last3 = _interopRequireDefault(_last2);

var _reactRouter = __webpack_require__(9);

var _createRoutes = __webpack_require__(160);

var _createRoutes2 = _interopRequireDefault(_createRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchRoute(req, res, next) {
    (0, _reactRouter.match)({
        history: req.locals.history,
        routes: (0, _createRoutes2.default)(),
        location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            next(error);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            const wrappedComponent = (0, _last3.default)(renderProps.components)['WrappedComponent'];
            const statusCode = wrappedComponent ? 200 : 404;
            req.locals.matchedResults = { renderProps: renderProps, statusCode: statusCode };
            next();
        } else {
            // todo
            next(new Error('Missing 404 handle page in routes!'));
        }
    });
}
exports.default = matchRoute;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _path = __webpack_require__(80);

var _path2 = _interopRequireDefault(_path);

var _server = __webpack_require__(43);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _ServerSideAppRoot = __webpack_require__(56);

var _ServerSideAppRoot2 = _interopRequireDefault(_ServerSideAppRoot);

var _AppDoc = __webpack_require__(32);

var _AppDoc2 = _interopRequireDefault(_AppDoc);

var _assetsManifest = __webpack_require__(94);

var _assetsManifest2 = _interopRequireDefault(_assetsManifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        cssAssets = [_path2.default.join(prefix, _assetsManifest2.default['base.global.css']), _path2.default.join(prefix, _assetsManifest2.default['vendor.global.css']), _path2.default.join(prefix, _assetsManifest2.default['modifiers.global.css']), _path2.default.join(prefix, _assetsManifest2.default['app.css'])];
        jsAssets = [_path2.default.join(prefix, _assetsManifest2.default['vendor.js']), _path2.default.join(prefix, _assetsManifest2.default['app.js'])];
    } else {
        cssAssets = [resolveDevAssets('css/base.global.css'), resolveDevAssets('css/vendor.global.css'), resolveDevAssets('css/modifiers.global.css'), resolveDevAssets('css/app.css')];
        jsAssets = [resolveDevAssets('js/vendor.dll.js'), resolveDevAssets('js/app.js')];
    }
    const clientEnv = (0, _pick3.default)(process.env, CLIENT_ENV_VARS);
    return (req, res) => {
        // test 500 page
        // if (req) {
        //   throw new Error('Server fucked up!')
        // }
        var _req$locals$matchedRe = req.locals.matchedResults;
        const renderProps = _req$locals$matchedRe.renderProps,
              statusCode = _req$locals$matchedRe.statusCode;

        const appRootMarkup = (0, _server.renderToString)(_react2.default.createElement(_ServerSideAppRoot2.default, { renderPageContent: true, renderProps: renderProps, store: req.locals.store }));
        // 需要在 render 之后调用
        // 不调用 rewind 会造成内存泄漏

        var _DocContainer$rewind = _DocContainer2.default.rewind();

        const bodyClass = _DocContainer$rewind.bodyClass,
              head = _DocContainer$rewind.head;
        // todo: global var name

        const html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_AppDoc2.default, { appMarkup: appRootMarkup, helmetHeadObject: head, bodyClass: bodyClass, initialState: req.locals.store.getState(), link: cssAssets, script: [{ innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' }, { innerHTML: `var __ENV__ = ${JSON.stringify(clientEnv)}` }].concat(jsAssets) }));
        res.status(statusCode).send(_AppDoc.DOCTYPE + html);
    };
}
exports.default = renderView;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = requirePermissionsOf;

var _common = __webpack_require__(8);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

var _i18n = __webpack_require__(15);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 权限等级排序
 * admin | user | visitor | none
 */
function requirePermissionsOf(userRole) {
    return (req, res, next) => {
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

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _process$env = process.env;
const PORT = _process$env.PORT,
      API_HOST = _process$env.API_HOST,
      WEBPACK_PORT = _process$env.WEBPACK_PORT;

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
    }
    next();
};
exports.default = setHeader;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _filter2 = __webpack_require__(276);

var _filter3 = _interopRequireDefault(_filter2);

exports.connect = connect;
exports.getRowById = getRowById;
exports.getRowByMatch = getRowByMatch;
exports.embedRef = embedRef;

var _mongodb = __webpack_require__(280);

var _mongodb2 = _interopRequireDefault(_mongodb);

var _outputEmptyEntity = __webpack_require__(68);

var _outputEmptyEntity2 = _interopRequireDefault(_outputEmptyEntity);

var _getMongoDBUrl = __webpack_require__(192);

var _getMongoDBUrl2 = _interopRequireDefault(_getMongoDBUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MongoClient = _mongodb2.default.MongoClient;
function connect() {
    return MongoClient.connect((0, _getMongoDBUrl2.default)());
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
        return Object.assign({}, field, { ids: ids });
    });
};
// 并且添加相应错误信息
const handleRefResult = (rawRefResult, refSchema, id) => {
    if (typeof rawRefResult === 'object') {
        return rawRefResult;
    }
    return (0, _outputEmptyEntity2.default)(refSchema.fields, id);
};
const doesRefHaveRefInside = ref => {
    return (0, _filter3.default)(ref.fields, field => Boolean(field.ref)).length !== 0;
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
            return (0, _assign3.default)({}, rawResult, refObj);
        });
    }));
}
exports.default = {
    embedRef: embedRef,
    getRowByMatch: getRowByMatch,
    getRowById: getRowById
};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
let Schema = class Schema {
    constructor(baseTable, fieldDefinition) {
        this._fieldDefinition = fieldDefinition;
        this._baseTable = baseTable;
    }
    get name() {
        return this._baseTable;
    }
    get fields() {
        return this._fieldDefinition;
    }
};
exports.default = Schema;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(49);

var _map3 = _interopRequireDefault(_map2);

var _isUndefined2 = __webpack_require__(78);

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

exports.default = validate;

var _utils = __webpack_require__(34);

var _utils2 = _interopRequireDefault(_utils);

var _errors = __webpack_require__(19);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reduceTasks = _utils2.default.reduceTasks;
const i18n = _utils2.default.i18n;
function validate(data, schema, isEditing) {
    if (typeof data === 'undefined') {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.emptyObject')));
    }
    const suppliedFields = Object.keys(data).filter(key => !(0, _isUndefined3.default)(data[key]));
    const suppliedFieldsInSchema = schema.fields.filter(field => !(0, _isUndefined3.default)(data[field.name]));
    const allFields = (0, _map3.default)(schema.fields, 'name');
    const requiredFields = schema.fields.filter(field => Boolean(field.required)).map(field => field.name);
    const unsupportedFields = suppliedFields.filter(key => allFields.indexOf(key) === -1);
    const missedFields = requiredFields.filter(key => suppliedFields.indexOf(key) === -1);
    if (unsupportedFields.length > 0) {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.unsupportedInput', unsupportedFields[0])));
    }
    if (missedFields.length > 0 && !isEditing) {
        return Promise.reject(new _errors2.default.BadRequestError(i18n('errors.validation.preCheck.missRequiredFields', missedFields[0])));
    }
    // 验证 fields，因为每个 field 可能有不止一个 validator
    const validateField = (val, validators) => {
        return reduceTasks(validators.map(validation => {
            if (validation.fn(val)) {
                return Promise.resolve(true);
            }
            return Promise.reject(new _errors2.default.BadRequestError(validation.errorMsg));
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleEpubParser = __webpack_require__(288);

var _simpleEpubParser2 = _interopRequireDefault(_simpleEpubParser);

var _txtContent = __webpack_require__(215);

var _txtContent2 = _interopRequireDefault(_txtContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { epub: _simpleEpubParser2.default, txtContent: _txtContent2.default };

/***/ }),
/* 215 */
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
        return { nav: nav, flesh: flesh };
    });
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setupApiApp;

var _express = __webpack_require__(77);

var _express2 = _interopRequireDefault(_express);

var _multer = __webpack_require__(282);

var _multer2 = _interopRequireDefault(_multer);

var _endpoints = __webpack_require__(177);

var endpoints = _interopRequireWildcard(_endpoints);

var _common = __webpack_require__(8);

var _middleware = __webpack_require__(199);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FORM_DATA_FILE_KEY = 'file';
const upload = (0, _multer2.default)();
const authenticatePublic = [_middleware2.default.prepareApi, _middleware2.default.parseContext];
const authenticatePrivate = [_middleware2.default.prepareApi, _middleware2.default.parseContext, _middleware2.default.requirePermissionsOf(_common.ROLES.USER)];
const authenticateAdmin = [_middleware2.default.prepareApi, _middleware2.default.parseContext, _middleware2.default.requirePermissionsOf(_common.ROLES.ADMIN)];
function apiRoutes() {
    const router = _express2.default.Router();
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
    const apiApp = (0, _express2.default)();
    apiApp.use(_middleware2.default.setHeader);
    apiApp.use(apiRoutes());
    apiApp.use(_middleware2.default.handleApiNotFound);
    apiApp.use(_middleware2.default.handleJSONResponse);
    apiApp.use(_middleware2.default.handleError);
    return apiApp;
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiRoutes = __webpack_require__(216);

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    api: _apiRoutes2.default
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bluebird = __webpack_require__(76);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _bluebird2.default.all(args).then(args => {
        // Iterate through the tasks passing args from one into the next
        return _bluebird2.default.reduce(tasks, (arg, task) => {
            return runTask(task, arg);
        }, args);
    });
} /**
   * # Pipeline Utility (borrowed from Ghost)
   *
   * Based on pipeline.js from when.js:
   * https://github.com/cujojs/when/blob/3.7.4/pipeline.js
   */
exports.default = pipeline;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reduceTasks;

var _bluebird = __webpack_require__(76);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tasks 可以是返回 Promise 的 fn
// 也可以是 Promise
function reduceTasks(tasks) {
    return _bluebird2.default.reduce(tasks, (result, task) => {
        if (typeof task === 'function') {
            return task.call(this);
        }
        // 如果 task 是 Promise blue bird 貌似会自动把 promise resolve 出来，是 reject 直接就终止执行
        // 所以 写 task()#then 会出错
        return task;
    });
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sortByDate;
// 最新的在前面
// 最新的在前面
function sortByDate() {
    return (a, b) => {
        return new Date(b.date_updated).valueOf() - new Date(a.date_updated).valueOf();
    };
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jsonp;
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeResponse;

var _handleResponse = __webpack_require__(72);

var _handleResponse2 = _interopRequireDefault(_handleResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeResponse(resultPromise, schema) {
    return resultPromise.then(response => ({ response: (0, _handleResponse2.default)(response, schema) }), error => ({ error: error }));
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

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
    let content = localStorage.getItem(key);
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
    if (typeof content !== 'object') {
        throw new Error('Cache content type should be object!');
    }
    const save = () => {
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

/***/ }),
/* 225 */
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

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getScreenInfo = __webpack_require__(225);

var _getScreenInfo2 = _interopRequireDefault(_getScreenInfo);

var _isIE = __webpack_require__(227);

var _isIE2 = _interopRequireDefault(_isIE);

var _lockScroll = __webpack_require__(228);

var _lockScroll2 = _interopRequireDefault(_lockScroll);

var _unlockScroll = __webpack_require__(229);

var _unlockScroll2 = _interopRequireDefault(_unlockScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getScreenInfo: _getScreenInfo2.default,
    isIE: _isIE2.default,
    lockScroll: _lockScroll2.default,
    unlockScroll: _unlockScroll2.default
};

/***/ }),
/* 227 */
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

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = lockScroll;
function lockScroll() {
    document.body.style.overflow = 'hidden';
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unlockScroll;
function unlockScroll() {
    document.body.style.overflow = 'visible';
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    isDescendant: _isDescendant2.default
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getCurrentTime;

var _padNumberWithZero = __webpack_require__(73);

var _padNumberWithZero2 = _interopRequireDefault(_padNumberWithZero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentTime() {
    const d = new Date();
    const time = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    return time.map(t => {
        return (0, _padNumberWithZero2.default)(t);
    }).join('');
}

/***/ }),
/* 232 */
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

var _callApi = __webpack_require__(35);

var _callApi2 = _interopRequireDefault(_callApi);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _normalizeResponse = __webpack_require__(223);

var _normalizeResponse2 = _interopRequireDefault(_normalizeResponse);

var _schemas = __webpack_require__(66);

var _schemas2 = _interopRequireDefault(_schemas);

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

var _common = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const API_ROOT = _helpers2.default.getApiRoot();
/**
 * general helper functions
 */
const parseEndpointWithOptions = (endpoint, options) => {
    if (typeof options === 'string') {
        return options;
    } else {
        const queryString = _utils2.default.parseUrlencoded(options);
        return `${endpoint}?${queryString}`;
    }
};
function fetchNormalized(endpoint, schema) {
    let fetchOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (endpoint.indexOf('http://') !== -1) {
        return (0, _normalizeResponse2.default)((0, _callApi2.default)(endpoint, fetchOptions), schema);
    }
    return (0, _normalizeResponse2.default)((0, _callApi2.default)(`${API_ROOT}/${endpoint}`, fetchOptions), schema);
}
/**
 * specific api services
 */
const fetchBookProgress = exports.fetchBookProgress = id => {
    return fetchNormalized(`user/books/${id}/progress`, _schemas2.default.BOOK_PROGRESS);
};
const fetchBook = exports.fetchBook = id => {
    return fetchNormalized(`books/${id}`, _schemas2.default.BOOK);
};
const fetchBookContent = exports.fetchBookContent = id => {
    return fetchNormalized(`books/${id}/content`, _schemas2.default.BOOK_CONTENT);
};
const fetchBooks = exports.fetchBooks = function fetchBooks() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const withContent = options.withContent;

    let apiOptions = !withContent ? {
        exclude: 'content'
    } : {};
    apiOptions = (0, _assign3.default)({}, (0, _omit3.default)(options, ['withContent']), apiOptions);
    return fetchNormalized(parseEndpointWithOptions('books', apiOptions), _schemas2.default.BOOK_ARRAY);
};
const fetchUsers = exports.fetchUsers = options => {
    return fetchNormalized(parseEndpointWithOptions('users', options), _schemas2.default.USER_ARRAY);
};
// external apis
const fetchDoubanBooks = exports.fetchDoubanBooks = keyword => (0, _callApi2.default)(`${_common.DOUBAN_API_ROOT}/book/search?count=10&q=${keyword}`, {
    useJsonp: true
});
const userLogin = exports.userLogin = data => (0, _callApi2.default)(`${API_ROOT}/auth`, {
    method: 'POST',
    data: data
});
const userSignup = exports.userSignup = data => (0, _callApi2.default)(`${API_ROOT}/users`, {
    method: 'POST',
    data: data
});
const auth = exports.auth = () => {
    return (0, _callApi2.default)(`${API_ROOT}/auth`, {
        method: 'GET'
    });
};
const logout = exports.logout = () => {
    return (0, _callApi2.default)(`${API_ROOT}/auth/revoke`, {
        method: 'PUT'
    });
};
function addCollection(data) {
    return (0, _callApi2.default)(`${API_ROOT}/collections`, { method: 'POST', data: data });
}
function addBook(data) {
    return (0, _callApi2.default)(`${API_ROOT}/books`, { method: 'POST', data: data });
}
function editBookMeta(bookId, data) {
    return (0, _callApi2.default)(`${API_ROOT}/books/${bookId}`, { method: 'PUT', data: data });
}
function addAuthor(data) {
    return (0, _callApi2.default)(`${API_ROOT}/authors`, { method: 'POST', data: data });
}
function setProgress(bookId, data) {
    (0, _callApi2.default)(`${API_ROOT}/user/books/${bookId}/progress`, { method: 'PUT', data: data });
}
function deleteBook(id) {
    return (0, _callApi2.default)(`${API_ROOT}/books/${id}`, {
        method: 'DELETE'
    });
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const md5 = __webpack_require__(234);
exports.default = md5;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

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
  } else if (typeof module === 'object' && module.exports) {
    module.exports = md5;
  } else {
    $.md5 = md5;
  }
})(undefined);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".colophon_j1kR3 {\n  font-size: 1rem;\n  padding: 20px 0;\n  color: #999; }\n", ""]);

// exports
exports.locals = {
	"colophon": "colophon_j1kR3"
};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".dropdown-item_XFcbL {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.light-link_ZiwxI {\n  color: #ddd; }\n  .light-link_ZiwxI:hover {\n    color: #fff; }\n\n.dropdown_3P4JX {\n  display: inline-block;\n  cursor: pointer;\n  position: relative; }\n\n.dropdown-toggle_2E3V1 {\n  display: block;\n  user-select: none;\n  -webkit-user-select: none;\n  max-height: 100%; }\n\n.dropdown-menu_1nMO4 {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);\n  line-height: 2.2;\n  font-size: 1rem;\n  text-align: left;\n  background: #222;\n  position: absolute;\n  right: 0;\n  width: 150px;\n  overflow: hidden;\n  padding: 5px 0;\n  z-index: 900; }\n\n.dropdown-caret_26jVH {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  vertical-align: middle;\n  content: \"\";\n  border: 4px solid;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  margin-left: 5px; }\n\n.dropdown-item_XFcbL {\n  display: block;\n  padding: 0 25px;\n  transition: all 0s; }\n  .dropdown-item_XFcbL:hover {\n    background: #3c3c3c; }\n  .dropdown-item_XFcbL:active {\n    background: #3c3c3c; }\n\n.sep_1VAnF {\n  margin: 5px 0;\n  height: 1px;\n  background: #3c3c3c; }\n\n.dropdown-menu--dark_22QR5 {\n  background: #1B267F; }\n  .dropdown-menu--dark_22QR5 .sep_1VAnF {\n    background: #1f2c94; }\n  .dropdown-menu--dark_22QR5 .dropdown-item_XFcbL:hover {\n    background: #1f2c94; }\n", ""]);

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
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".svg-shape_2SBH- {\n  fill: currentColor;\n  overflow: hidden; }\n\n.icon_66GYG {\n  display: inline-block;\n  position: relative; }\n", ""]);

// exports
exports.locals = {
	"svg-shape": "svg-shape_2SBH-",
	"icon": "icon_66GYG"
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".logo-wrap_1aLoA {\n  margin: 0;\n  line-height: 60px;\n  color: #fff;\n  margin-top: -3px;\n  display: inline-block; }\n\n.logo_35NyS {\n  background: url(" + __webpack_require__(251) + ") no-repeat left;\n  width: 70px;\n  height: 60px;\n  background-size: 70px;\n  text-indent: -999em;\n  display: inline-block; }\n\n.logo--dark_2shYM {\n  background: url(" + __webpack_require__(250) + ") no-repeat left;\n  background-size: 70px; }\n", ""]);

// exports
exports.locals = {
	"logo-wrap": "logo-wrap_1aLoA",
	"logo": "logo_35NyS",
	"logo--dark": "logo--dark_2shYM logo_35NyS"
};

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".modal-footer_WHxcY button {\n  margin-right: 10px; }\n", ""]);

// exports
exports.locals = {
	"modal-footer": "modal-footer_WHxcY"
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".textarea-wrap_1Wwgp {\n  margin: 10px 0;\n  position: relative; }\n\n.textarea_2QMlV {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #ddd;\n  outline: none;\n  height: 100px;\n  transition: border-color .3s; }\n\n.textarea_2QMlV:focus {\n  border-color: #1B267F; }\n", ""]);

// exports
exports.locals = {
	"textarea-wrap": "textarea-wrap_1Wwgp",
	"textarea": "textarea_2QMlV"
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Branding.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Branding.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_button.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_button.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Colophon.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Colophon.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ConsoleBranding.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ConsoleSidebar.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Fade.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Fade.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Icon.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Icon.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Input.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Input.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Logo.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Logo.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ModalFooter.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./ModalFooter.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./SelectizeInput.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./SelectizeInput.scss");

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Textarea.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Textarea.scss");

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

module.exports = __webpack_require__(83);


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

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map