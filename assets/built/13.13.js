webpackJsonp([13],{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.common = exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(161);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(162);
	
	var common = _interopRequireWildcard(_common);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var queryDoubanBooksSelector = exports.queryDoubanBooksSelector = function queryDoubanBooksSelector(query) {
	    return (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	        entitiesName: 'doubanBooks',
	        paginationName: 'doubanBooks',
	        paginationQuery: query
	    }), function (books) {
	        return books;
	    });
	};
	var queryAuthorsSelector = exports.queryAuthorsSelector = function queryAuthorsSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'authors',
	        paginationName: 'authors',
	        paginationQuery: query
	    });
	};
	var searchBooksSelector = exports.searchBooksSelector = function searchBooksSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'books',
	        paginationName: 'books',
	        paginationQuery: query
	    });
	};
	var doubanBooksAsOptions = exports.doubanBooksAsOptions = function doubanBooksAsOptions(query) {
	    return (0, _reselect.createSelector)(queryDoubanBooksSelector(query), function (books) {
	        return books.map(function (book) {
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
	var authorsAsOptions = exports.authorsAsOptions = function authorsAsOptions(query) {
	    return (0, _reselect.createSelector)(queryAuthorsSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.name,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSearchAsOptions = exports.booksSearchAsOptions = function booksSearchAsOptions(query) {
	    return (0, _reselect.createSelector)(searchBooksSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.title,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSelector = exports.booksSelector = (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	    entitiesName: 'books',
	    paginationName: 'books',
	    paginationKey: 'default'
	}), function (books) {
	    return books;
	});
	var usersSelector = exports.usersSelector = (0, _common.selectPaginatedEntities)({
	    entitiesName: 'users',
	    paginationName: 'users',
	    paginationKey: 'default'
	});
	exports.common = common;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = exports.paginationLinkSelector = undefined;
	
	var _reselect = __webpack_require__(162);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var entitiesSelector = function entitiesSelector(name) {
	    return function (state) {
	        return state.entities[name] || {};
	    };
	};
	var paginationSelector = function paginationSelector(name) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    return function (state) {
	        return _lodash2.default.get(state.pagination, name + '.' + key + '.ids', []);
	    };
	};
	var paginationLinkSelector = exports.paginationLinkSelector = function paginationLinkSelector(name) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    return function (state) {
	        return _lodash2.default.pick(_lodash2.default.get(state.pagination, name + '.' + key, {}), ['next', 'last']);
	    };
	};
	var queryPaginationSelector = function queryPaginationSelector(name, query) {
	    return function (state) {
	        return _lodash2.default.get(state.pagination, [name, 'query', query, 'ids'], []);
	    };
	};
	var selectPaginatedEntities = exports.selectPaginatedEntities = function selectPaginatedEntities(options) {
	    var entitiesName = options.entitiesName;
	    var paginationName = options.paginationName;
	    var paginationKey = options.paginationKey;
	    var paginationQuery = options.paginationQuery;
	
	    var pagiSelector = void 0;
	    if (paginationQuery) {
	        pagiSelector = queryPaginationSelector(paginationName, paginationQuery);
	    } else {
	        pagiSelector = paginationSelector(paginationName, paginationKey);
	    }
	    return (0, _reselect.createSelector)(entitiesSelector(entitiesName), pagiSelector, function (entities, ids) {
	        return ids.map(function (id) {
	            return entities[id];
	        });
	    });
	};

/***/ },

/***/ 162:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createSelector = createSelector;
	exports.createStructuredSelector = createStructuredSelector;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function defaultEqualityCheck(a, b) {
	  return a === b;
	}
	
	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];
	
	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (lastArgs !== null && lastArgs.length === args.length && args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      return lastResult;
	    }
	    lastResult = func.apply(undefined, args);
	    lastArgs = args;
	    return lastResult;
	  };
	}
	
	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
	
	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep;
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }
	
	  return dependencies;
	}
	
	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }
	
	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }
	
	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);
	
	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));
	
	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }
	
	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };
	
	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}
	
	function createSelector() {
	  return createSelectorCreator(defaultMemoize).apply(undefined, arguments);
	}
	
	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];
	
	  if (typeof selectors !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }
	
	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(225);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(80);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	
	var styles = __webpack_require__(226);
	var InfoTable = function (_Component) {
	    _inherits(InfoTable, _Component);
	
	    function InfoTable(props) {
	        _classCallCheck(this, InfoTable);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InfoTable).call(this, props));
	    }
	
	    _createClass(InfoTable, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var header = _props.header;
	            var data = _props.data;
	            var enableTooltip = _props.enableTooltip;
	            var style = _props.style;
	            var actions = _props.actions;
	            var operationLabel = _props.operationLabel;
	
	            actions = actions || [];
	            if (!header) {
	                header = data.length !== 0 && _lodash2.default.keys(data[0]).map(function (key) {
	                    return {
	                        key: key,
	                        name: key
	                    };
	                }) || [];
	            }
	            var className = (0, _classnames2.default)({
	                'info-table': true,
	                'info-table--no-header': !header
	            });
	            return _react2.default.createElement("table", { styleName: className, style: style || {} }, _react2.default.createElement("tbody", null, header ? _react2.default.createElement("tr", null, header.map(function (item, index) {
	                return _react2.default.createElement("th", { key: index }, item.name);
	            }), actions.length !== 0 && _react2.default.createElement("th", null, operationLabel || '操作')) : _react2.default.createElement("tr", null), data.map(function (row, index) {
	                return _react2.default.createElement("tr", { key: index }, _lodash2.default.map(header, function (item, key) {
	                    return _react2.default.createElement("td", { key: key }, row[item.key] && row[item.key].toString());
	                }), actions.length !== 0 && _react2.default.createElement("td", { styleName: "actions" }, actions.length !== 0 && actions.map(function (action, index2) {
	                    return _react2.default.createElement("div", { styleName: "action", key: index2, onClick: function onClick(e) {
	                            action.fn(data[index]);
	                        } }, action.name);
	                })));
	            })));
	        }
	    }]);
	
	    return InfoTable;
	}(_react.Component);
	InfoTable = __decorate([(0, _reactCssModules2.default)(styles)], InfoTable);
	exports.default = InfoTable;

/***/ },

/***/ 226:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"info-table--no-header":"info-table--no-header_2v3xx","info-table":"info-table_B7JYU","actions":"actions_pR_Nz","action":"action_3DLKy"};

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(228);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(229);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(7);
	
	var _selectors = __webpack_require__(160);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ContentPage = function (_Component) {
	    _inherits(ContentPage, _Component);
	
	    function ContentPage(props) {
	        _classCallCheck(this, ContentPage);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ContentPage).call(this, props));
	    }
	
	    _createClass(ContentPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var routing = _props.routing;
	            var _props$paginationLink = _props.paginationLinks;
	            var next = _props$paginationLink.next;
	            var last = _props$paginationLink.last;
	
	            var all = last && last.page || 1;
	            var current = next ? next.page - 1 : all;
	            return _react2.default.createElement("div", null, children, _react2.default.createElement(_Paginator2.default, { all: all, current: current, url: {
	                    pathname: routing.pathname,
	                    query: routing.query || {}
	                } }));
	        }
	    }]);
	
	    return ContentPage;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var _ownProps$pagination = ownProps.pagination;
	    var name = _ownProps$pagination.name;
	    var key = _ownProps$pagination.key;
	
	    return {
	        routing: state.routing.locationBeforeTransitions || {},
	        paginationLinks: selectors.paginationLinkSelector(name, key)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(230);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 230:
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
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(16);
	
	var _utils2 = _interopRequireDefault(_utils);
	
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
	
	var styles = __webpack_require__(231);
	var Paginator = function (_Component) {
	    _inherits(Paginator, _Component);
	
	    function Paginator(props) {
	        _classCallCheck(this, Paginator);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Paginator).call(this, props));
	    }
	
	    _createClass(Paginator, [{
	        key: "parseUrl",
	        value: function parseUrl(pathname, query, pageNum) {
	            var urlStyle = this.props.urlStyle ? this.props.urlStyle : 'query';
	            if (urlStyle === 'query') {
	                var _queryPart = _utils2.default.parseFormData(_lodash2.default.omit(query, ['page']));
	                return "" + pathname + (_queryPart ? "?" + _queryPart + "&" : '?') + "page=" + pageNum;
	            }
	            var queryPart = _utils2.default.parseFormData(query);
	            return pathname + "/page/" + pageNum + "?" + queryPart;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var range = this.props.range ? this.props.range : 3;
	            var totalRangeEndIndex = this.props.all - 1;
	            var currentIndex = parseInt(this.props.current) - 1;
	            var rangeStartIndex = currentIndex - range;
	            var rangeEndIndex = currentIndex + range;
	            var leftSpread = false;
	            var rightSpread = false;
	            var pages = [];
	            var url = this.props.url;
	            if (typeof this.props.all !== 'number') {
	                throw new Error('all 必须为 number 类型！');
	            }
	            // 验证
	            if (typeof currentIndex !== 'number') {
	                console.error("页码必须为数字，却得到 " + (typeof currentIndex === "undefined" ? "undefined" : _typeof(currentIndex)));
	            }
	            if (currentIndex > rangeEndIndex || currentIndex < 0) {
	                console.error('页码不能大于所有页面数目或小于 1！');
	            }
	            if (range * 2 + 1 >= totalRangeEndIndex) {
	                // 总长度小于 range 直径
	                rangeEndIndex = totalRangeEndIndex;
	                rangeStartIndex = 0;
	            } else {
	                // 处理右侧溢出
	                if (rangeEndIndex >= totalRangeEndIndex) {
	                    rangeEndIndex = totalRangeEndIndex;
	                    rangeStartIndex = totalRangeEndIndex - (range * 2 + 1);
	                } else {
	                    rightSpread = true;
	                }
	                if (rangeStartIndex <= 0) {
	                    rangeStartIndex = 0;
	                    rangeEndIndex = range * 2 + 1;
	                } else {
	                    leftSpread = true;
	                }
	            }
	            for (var i = rangeStartIndex; i <= rangeEndIndex; i++) {
	                pages = pages.concat([{
	                    pageNum: i + 1,
	                    isCurrent: i === currentIndex
	                }]);
	            }
	            // add spread
	            if (leftSpread) {
	                var spd = [{
	                    pageNum: 1
	                }, {
	                    isSpread: true
	                }];
	                pages = spd.concat(pages);
	            }
	            if (rightSpread) {
	                var _spd = [{
	                    isSpread: true
	                }, {
	                    pageNum: totalRangeEndIndex + 1
	                }];
	                pages = pages.concat(_spd);
	            }
	            return this.props.all !== 1 && _react2.default.createElement("div", { styleName: "paginator" }, _react2.default.createElement("ul", null, pages.map(function (page, index) {
	                if (page.isCurrent) {
	                    return _react2.default.createElement("li", { key: index, styleName: "page-num--current" }, page.pageNum);
	                }
	                if (page.isSpread) {
	                    return _react2.default.createElement("li", { key: index, styleName: "page-spread" }, "...");
	                }
	                return _react2.default.createElement("li", { key: index, styleName: "page-num" }, _react2.default.createElement(_reactRouter.Link, { to: _this2.parseUrl(url.pathname, url.query, page.pageNum) }, page.pageNum));
	            })));
	        }
	    }]);
	
	    return Paginator;
	}(_react.Component);
	Paginator = __decorate([(0, _reactCssModules2.default)(styles)], Paginator);
	exports.default = Paginator;

/***/ },

/***/ 231:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"page-spread":"page-spread_2INHU","page-num":"page-num_2oPQU","page-num--current":"page-num--current_1Y2mE","paginator":"paginator_1RHAm"};

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifecircle = __webpack_require__(233);
	
	Object.keys(_lifecircle).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lifecircle[key];
	    }
	  });
	});

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.onRoutingChange = undefined;
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 检查 store 里面的 routing 是否变化
	var onRoutingChange = exports.onRoutingChange = function onRoutingChange(fn) {
	    return function (nextProps, currentProps) {
	        if (!currentProps.routing) {
	            console.error('routing 需要现在组件 props 里面声明！');
	            return false;
	        }
	        var hasPathParamChanged = !_lodash2.default.isEqual(nextProps.routing, currentProps.routing);
	        if (hasPathParamChanged) {
	            fn(nextProps.routing);
	        }
	    };
	};

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _actions = __webpack_require__(8);
	
	var _InfoTable = __webpack_require__(224);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _selectors = __webpack_require__(160);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _DocContainer = __webpack_require__(134);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _ContentPage = __webpack_require__(227);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(232);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageUsers = function (_Component) {
	    _inherits(ManageUsers, _Component);
	
	    function ManageUsers(props) {
	        _classCallCheck(this, ManageUsers);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageUsers).call(this, props));
	    }
	
	    _createClass(ManageUsers, [{
	        key: 'loadUsers',
	        value: function loadUsers() {
	            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	            this.props.fetchUsers({
	                api: {
	                    page: props.routing.query.page || '1'
	                }
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var _this2 = this;
	
	            helpers.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this2.loadUsers(nextProps);
	            })(nextProps, this.props);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadUsers();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var users = this.props.users;
	
	            return _react2.default.createElement(_DocContainer2.default, { title: "用户管理" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'users'
	                } }, _react2.default.createElement(_InfoTable2.default, { data: users })));
	        }
	    }]);
	
	    return ManageUsers;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        users: selectors.usersSelector(state),
	        routing: state.routing.locationBeforeTransitions
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(ManageUsers);

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50cz8zMzM2KioiLCJ3ZWJwYWNrOi8vLy4vfi9yZXNlbGVjdC9saWIvaW5kZXguanM/NjQ2YioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cz9hYjgxIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4P2NhZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3M/YThjYyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cz8yNjJjIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeD9iMzZiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHM/NWRiNSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3g/YjY3NSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3M/MTU2ZCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50cz9mNTkzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHM/OTI5OSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1l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QUFDLENBQWEsYUFBUztBQUNqQixxQkFBTSxNQUE4QjtBQUNyQyxvQkFDUCxNQUgyQjs7QUFLNUIsYUFBeUIsc0JBQUcsQ0FBRSxpQkFBUSxRQUFVLFVBQVEsU0FBYyxhQUFTO0FBRTVFLGFBQXFCLHFCQUFFO0FBQ3RCLGdCQUFVLFVBRWY7O01BWG9DO0VBQUosQzs7Ozs7Ozs7Ozs7Ozs7O0FDSE87Ozs7QUFDSDs7QUFDVzs7QUFDRTs7OztBQUMzQzs7S0FBMkM7O0FBQ007Ozs7QUFDRjs7OztBQUMvQzs7S0FRUDs7Ozs7Ozs7Ozs7O0tBQW1DOzs7QUFFakMsMEJBQWlCLE9BQ2Y7OzsrRkFHTzs7Ozs7O2lCQUFNLDhEQUFPLEtBQU07O0FBQ3RCLGtCQUFNLE1BQVcsV0FBQztBQUNqQixzQkFBRTtBQUNDLDJCQUFPLE1BQVEsUUFBTSxNQUFLLFFBS1g7Ozs7OzttREFBVSxXQUFXOzs7QUFDckMscUJBQWdCO0FBQ2IsMEJBQUssS0FBVSxZQUFJO0FBQ3ZCLHdCQUFVLFVBQ2Q7Y0FINkIsRUFHbkIsV0FBTSxLQUdIOzs7OztBQUNYLGtCQUdBOzs7O2tDQUNBO2lCQUFPLFFBQU8sS0FBTTs7QUFFakIsb0JBQ0wsZ0JBQWEsd0NBQU0sT0FBTywwQkFDWixtREFDRTtBQUNOLDJCQUNKO2tCQUZRLEVBRFosRUFLRSxnQkFBVSxxQ0FDSixNQU1mOzs7Ozs7O0FBRUQsMEJBQThCLE9BQVU7QUFDaEMsWUFBQztBQUNBLGdCQUFXLFVBQWMsY0FBTztBQUM5QixrQkFBTyxNQUFRLFFBSTFCOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQ0QsbUNBQW9CLGEiLCJmaWxlIjoiMTMuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCBxdWVyeUF1dGhvcnNTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3QgZG91YmFuQm9va3NBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgYm9va3MgPT4ge1xuICAgIHJldHVybiBib29rcy5tYXAoYm9vayA9PiAoe1xuICAgICAgbmFtZTogYm9vay50aXRsZSxcbiAgICAgIHZhbHVlOiBib29rLmlkLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgIGF1dGhvcjogYm9vay5hdXRob3Iuam9pbignLCAnKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBhdXRob3JzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5QXV0aG9yc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWFyY2hBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VhcmNoQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgdXNlcnNTZWxlY3RvciA9IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG59KVxuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCB7IGNvbW1vbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLnBpY2soXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9YCwge30pLCBbJ25leHQnLCAnbGFzdCddKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0TWVtb2l6ZSA9IGRlZmF1bHRNZW1vaXplO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3I7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3I7XG5leHBvcnRzLmNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMpIHtcbiAgdmFyIGVxdWFsaXR5Q2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgbGFzdEFyZ3MgPSBudWxsO1xuICB2YXIgbGFzdFJlc3VsdCA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGxhc3RBcmdzICE9PSBudWxsICYmIGxhc3RBcmdzLmxlbmd0aCA9PT0gYXJncy5sZW5ndGggJiYgYXJncy5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZXF1YWxpdHlDaGVjayh2YWx1ZSwgbGFzdEFyZ3NbaW5kZXhdKTtcbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIGxhc3RSZXN1bHQgPSBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGNyZWF0b3JzIGV4cGVjdCBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgJyArICgnaW5zdGVhZCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbJyArIGRlcGVuZGVuY3lUeXBlcyArICddJykpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBmdW5jc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgdmFyIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcblxuICAgIHZhciBtZW1vaXplZFJlc3VsdEZ1bmMgPSBtZW1vaXplLmFwcGx5KHVuZGVmaW5lZCwgW2Z1bmN0aW9uICgpIHtcbiAgICAgIHJlY29tcHV0YXRpb25zKys7XG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICB2YXIgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3RvcihzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMiA/IF9sZW40IC0gMiA6IDApLCBfa2V5NCA9IDI7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NCAtIDJdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmFtcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3kuYXBwbHkodW5kZWZpbmVkLCBbc3RhdGUsIHByb3BzXS5jb25jYXQoYXJncykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRSZXN1bHRGdW5jLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBzZWxlY3Rvci5yZXN1bHRGdW5jID0gcmVzdWx0RnVuYztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihkZWZhdWx0TWVtb2l6ZSkuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gIHZhciBzZWxlY3RvckNyZWF0b3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBjcmVhdGVTZWxlY3RvciA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKCd3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSAnICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgcmV0dXJuIHNlbGVjdG9yQ3JlYXRvcihvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIHZhbHVlc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jlc2VsZWN0L2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4vSW5mb1RhYmxlJ1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaGVhZGVyPzoge1xuICAgIGtleTogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgfVtdXG4gIGRhdGE6IGFueVtdXG4gIC8vIHRvZG9cbiAgZW5hYmxlVG9vbHRpcD86IGJvb2xlYW5cbiAgc3R5bGU/OiBhbnlcbiAgYWN0aW9ucz86IHtcbiAgICBuYW1lOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICAgIGZuOiAocm93RGF0YTogYW55KSA9PiB2b2lkXG4gIH1bXVxuICBvcGVyYXRpb25MYWJlbD86IHN0cmluZyB8IEpTWC5FbGVtZW50XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEluZm9UYWJsZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBoZWFkZXIsIGRhdGEsIGVuYWJsZVRvb2x0aXAsIHN0eWxlLCBhY3Rpb25zLCBvcGVyYXRpb25MYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIGFjdGlvbnMgPSBhY3Rpb25zIHx8IFtdXG5cbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgaGVhZGVyID0gKGRhdGEubGVuZ3RoICE9PSAwICYmIF8ua2V5cyhkYXRhWzBdKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbmFtZToga2V5XG4gICAgICAgIH1cbiAgICAgIH0pKSB8fCBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2luZm8tdGFibGUnOiB0cnVlLFxuICAgICAgJ2luZm8tdGFibGUtLW5vLWhlYWRlcic6ICFoZWFkZXJcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlIHx8IHt9fT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57aXRlbS5uYW1lfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnsgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogPHRyPjwvdHI+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT57cm93W2l0ZW0ua2V5XSAmJiByb3dbaXRlbS5rZXldLnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmZuKGRhdGFbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcImluZm8tdGFibGVcIjpcImluZm8tdGFibGVfQjdKWVVcIixcImFjdGlvbnNcIjpcImFjdGlvbnNfcFJfTnpcIixcImFjdGlvblwiOlwiYWN0aW9uXzNETEt5XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJ1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5cbnR5cGUgUGFnaW5hdGlvbkxpbmsgPSB7XG4gIHBhZ2U6IG51bWJlclxuICB1cmw6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAga2V5Pzogc3RyaW5nXG4gIH1cbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgcGFnaW5hdGlvbkxpbmtzOiB7XG4gICAgbmV4dD86IFBhZ2luYXRpb25MaW5rXG4gICAgbGFzdDogUGFnaW5hdGlvbkxpbmtcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcm91dGluZywgcGFnaW5hdGlvbkxpbmtzOiB7IG5leHQsIGxhc3QgfSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGFsbCA9IGxhc3QgJiYgbGFzdC5wYWdlIHx8IDFcbiAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICA6IGFsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFBhZ2luYXRvclxuICAgICAgICAgIGFsbD17YWxsfVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgdXJsPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGluZy5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG5hbWUsIGtleSB9IH0gPSBvd25Qcm9wc1xuXG4gIHJldHVybiB7XG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIHx8IHt9LFxuICAgIHBhZ2luYXRpb25MaW5rczogc2VsZWN0b3JzLnBhZ2luYXRpb25MaW5rU2VsZWN0b3IobmFtZSwga2V5KShzdGF0ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHt9XG4pKENvbnRlbnRQYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4vUGFnaW5hdG9yJ1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1BhZ2luYXRvci5zY3NzJylcblxuLyog5qCX5a2QIPCfjLBcbiAqIHJhbmdlID0gMlxuICogfCByYW5nZSB8IGN1cnJlbnQgfCByYW5nZ2UgfFxuICogICAyLCAzLCAgICAgWzRdLCAgICAgNSwgNlxuICovXG5cbnR5cGUgT2piID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsOiBudW1iZXJcbiAgY3VycmVudDogbnVtYmVyXG4gIHJhbmdlPzogbnVtYmVyIC8vIGRlZmF1bHQgM1xuICB1cmw6IHtcbiAgICBwYXRobmFtZTogc3RyaW5nXG4gICAgcXVlcnk6IE9iamVjdFxuICB9XG4gIHVybFN0eWxlPzogJ3F1ZXJ5JyB8ICdzbGFzaCdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBwYXJzZVVybChwYXRobmFtZTogc3RyaW5nLCBxdWVyeTogT2JqZWN0LCBwYWdlTnVtKSB7XG4gICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA6ICdxdWVyeSdcblxuICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlRm9ybURhdGEoXy5vbWl0KHF1ZXJ5LCBbJ3BhZ2UnXSkpXG4gICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWBcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VGb3JtRGF0YShxdWVyeSlcbiAgICByZXR1cm4gYCR7cGF0aG5hbWV9L3BhZ2UvJHtwYWdlTnVtfT8ke3F1ZXJ5UGFydH1gXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDNcbiAgICBjb25zdCB0b3RhbFJhbmdlRW5kSW5kZXggPSB0aGlzLnByb3BzLmFsbCAtIDFcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnQgYXMgYW55KSAtIDFcbiAgICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gcmFuZ2VcbiAgICBsZXQgcmFuZ2VFbmRJbmRleCA9IGN1cnJlbnRJbmRleCArIHJhbmdlXG4gICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCByaWdodFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHBhZ2VzID0gW11cbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmxcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpXG4gICAgfVxuXG4gICAgLy8g6aqM6K+BXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGDpobXnoIHlv4XpobvkuLrmlbDlrZfvvIzljbTlvpfliLAgJHt0eXBlb2YgY3VycmVudEluZGV4fWApXG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZXggPiByYW5nZUVuZEluZGV4IHx8IGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mhteeggeS4jeiDveWkp+S6juaJgOaciemhtemdouaVsOebruaIluWwj+S6jiAx77yBJylcbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXggLSAocmFuZ2UgKiAyICsgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHtcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgICAgICByYW5nZUVuZEluZGV4ID0gcmFuZ2UgKiAyICsgMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFNwcmVhZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICB9XSlcbiAgICB9XG5cbiAgICAvLyBhZGQgc3ByZWFkXG4gICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gc3BkLmNvbmNhdChwYWdlcylcbiAgICB9XG5cbiAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiB0b3RhbFJhbmdlRW5kSW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KHNwZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5hbGwgIT09IDEgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInBhZ2luYXRvclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtLS1jdXJyZW50XCI+e3BhZ2UucGFnZU51bX08L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2Utc3ByZWFkXCI+Li4uPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtXCI+PExpbmsgdG89e3RoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfT57cGFnZS5wYWdlTnVtfTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2Utc3ByZWFkXCI6XCJwYWdlLXNwcmVhZF8ySU5IVVwiLFwicGFnZS1udW1cIjpcInBhZ2UtbnVtXzJvUFFVXCIsXCJwYWdlLW51bS0tY3VycmVudFwiOlwicGFnZS1udW0tLWN1cnJlbnRfMVkybUVcIixcInBhZ2luYXRvclwiOlwicGFnaW5hdG9yXzFSSEFtXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2xpZmVjaXJjbGUnXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8g5qOA5p+lIHN0b3JlIOmHjOmdoueahCByb3V0aW5nIOaYr+WQpuWPmOWMllxuZXhwb3J0IGNvbnN0IG9uUm91dGluZ0NoYW5nZSA9IGZuID0+IChuZXh0UHJvcHMsIGN1cnJlbnRQcm9wcykgPT4ge1xuICBpZiAoIWN1cnJlbnRQcm9wcy5yb3V0aW5nKSB7XG4gICAgY29uc29sZS5lcnJvcigncm91dGluZyDpnIDopoHnjrDlnKjnu4Tku7YgcHJvcHMg6YeM6Z2i5aOw5piO77yBJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGhhc1BhdGhQYXJhbUNoYW5nZWQgPSAhXy5pc0VxdWFsKG5leHRQcm9wcy5yb3V0aW5nLCBjdXJyZW50UHJvcHMucm91dGluZylcblxuICBpZiAoaGFzUGF0aFBhcmFtQ2hhbmdlZCkge1xuICAgIGZuKG5leHRQcm9wcy5yb3V0aW5nKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbmZvVGFibGUnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJ1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmZXRjaFVzZXJzOiAob3B0aW9ucz86IGZldGNoVXNlcnMpID0+IHZvaWRcbiAgdXNlcnM6IGFueVtdXG4gIHJvdXRpbmc6IGFueVxufVxuXG5jbGFzcyBNYW5hZ2VVc2VycyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgbG9hZFVzZXJzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hVc2Vycyh7XG4gICAgICBhcGk6IHtcbiAgICAgICAgcGFnZTogcHJvcHMucm91dGluZy5xdWVyeS5wYWdlIHx8ICcxJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICAgIHRoaXMubG9hZFVzZXJzKG5leHRQcm9wcylcbiAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRVc2VycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHt1c2Vyc30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIueUqOaIt+euoeeQhlwiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAndXNlcnMnXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPEluZm9UYWJsZVxuICAgICAgICAgICAgZGF0YT17dXNlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRlbnRQYWdlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyczogc2VsZWN0b3JzLnVzZXJzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgZmV0Y2hVc2VycyB9XG4pKE1hbmFnZVVzZXJzIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9NYW5hZ2VVc2Vycy50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9