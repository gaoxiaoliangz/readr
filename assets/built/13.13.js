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
	
	    console.log(state.routing);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqKiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50cz8zMzM2KioiLCJ3ZWJwYWNrOi8vLy4vfi9yZXNlbGVjdC9saWIvaW5kZXguanM/NjQ2YioqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cz9hYjgxIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4P2NhZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3M/YThjYyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cz8yNjJjIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeD9iMzZiIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHM/NWRiNSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3g/YjY3NSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3M/MTU2ZCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50cz9mNTkzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHM/OTI5OSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1l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QjtzQkFBbUIsV0FBYztBQUN4RCxhQUFDLENBQWEsYUFBUztBQUNqQixxQkFBTSxNQUE4QjtBQUNyQyxvQkFDUCxNQUgyQjs7QUFLNUIsYUFBeUIsc0JBQUcsQ0FBRSxpQkFBUSxRQUFVLFVBQVEsU0FBYyxhQUFTO0FBRTVFLGFBQXFCLHFCQUFFO0FBQ3RCLGdCQUFVLFVBRWY7O01BWG9DO0VBQUosQzs7Ozs7Ozs7Ozs7Ozs7O0FDSE87Ozs7QUFDSDs7QUFDVzs7QUFDRTs7OztBQUMzQzs7S0FBMkM7O0FBQ007Ozs7QUFDRjs7OztBQUMvQzs7S0FRUDs7Ozs7Ozs7Ozs7O0tBQW1DOzs7QUFFakMsMEJBQWlCLE9BQ2Y7OzsrRkFHTzs7Ozs7O2lCQUFNLDhEQUFPLEtBQU07O0FBQ3RCLGtCQUFNLE1BQVcsV0FBQztBQUNqQixzQkFBRTtBQUNDLDJCQUFPLE1BQVEsUUFBTSxNQUFLLFFBS1g7Ozs7OzttREFBVSxXQUFXOzs7QUFDckMscUJBQWdCO0FBQ2IsMEJBQUssS0FBVSxZQUFJO0FBQ3ZCLHdCQUFVLFVBQ2Q7Y0FINkIsRUFHbkIsV0FBTSxLQUdIOzs7OztBQUNYLGtCQUdBOzs7O2tDQUNBO2lCQUFPLFFBQU8sS0FBTTs7QUFFakIsb0JBQ0wsZ0JBQWEsd0NBQU0sT0FBTywwQkFDWixtREFDRTtBQUNOLDJCQUNKO2tCQUZRLEVBRFosRUFLRSxnQkFBVSxxQ0FDSixNQU1mOzs7Ozs7O0FBRUQsMEJBQThCLE9BQVU7QUFDaEMsWUFBQztBQUNBLGdCQUFXLFVBQWMsY0FBTztBQUM5QixrQkFBTyxNQUFRLFFBSTFCOzs7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQ0QsbUNBQW9CLGEiLCJmaWxlIjoiMTMuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCBxdWVyeUF1dGhvcnNTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3QgZG91YmFuQm9va3NBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgYm9va3MgPT4ge1xuICAgIHJldHVybiBib29rcy5tYXAoYm9vayA9PiAoe1xuICAgICAgbmFtZTogYm9vay50aXRsZSxcbiAgICAgIHZhbHVlOiBib29rLmlkLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgIGF1dGhvcjogYm9vay5hdXRob3Iuam9pbignLCAnKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBhdXRob3JzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5QXV0aG9yc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWFyY2hBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VhcmNoQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgdXNlcnNTZWxlY3RvciA9IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG59KVxuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCB7IGNvbW1vbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLnBpY2soXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9YCwge30pLCBbJ25leHQnLCAnbGFzdCddKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50c1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdE1lbW9pemUgPSBkZWZhdWx0TWVtb2l6ZTtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3JDcmVhdG9yO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yO1xuZXhwb3J0cy5jcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3I7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jKSB7XG4gIHZhciBlcXVhbGl0eUNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEVxdWFsaXR5Q2hlY2sgOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChsYXN0QXJncyAhPT0gbnVsbCAmJiBsYXN0QXJncy5sZW5ndGggPT09IGFyZ3MubGVuZ3RoICYmIGFyZ3MuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGVxdWFsaXR5Q2hlY2sodmFsdWUsIGxhc3RBcmdzW2luZGV4XSk7XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICBsYXN0UmVzdWx0ID0gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIGxhc3RBcmdzID0gYXJncztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnMgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgZnVuY3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICB2YXIgcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG5cbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh1bmRlZmluZWQsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZWNvbXB1dGF0aW9ucysrO1xuICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChtZW1vaXplT3B0aW9ucykpO1xuXG4gICAgdmFyIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3Ioc3RhdGUsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNCA+IDIgPyBfbGVuNCAtIDIgOiAwKSwgX2tleTQgPSAyOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTQgLSAyXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJhbXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXBlbmRlbmN5KSB7XG4gICAgICAgIHJldHVybiBkZXBlbmRlbmN5LmFwcGx5KHVuZGVmaW5lZCwgW3N0YXRlLCBwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgc2VsZWN0b3IucmVzdWx0RnVuYyA9IHJlc3VsdEZ1bmM7XG4gICAgc2VsZWN0b3IucmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnM7XG4gICAgfTtcbiAgICBzZWxlY3Rvci5yZXNldFJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB9O1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3IoKSB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycykge1xuICB2YXIgc2VsZWN0b3JDcmVhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gY3JlYXRlU2VsZWN0b3IgOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArICgnd2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgJyArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHJldHVybiBzZWxlY3RvckNyZWF0b3Iob2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICB2YWx1ZXNbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZXNlbGVjdC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMiAzIDEyIDEzIDE0IDE1XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhlYWRlcj86IHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIH1bXVxuICBkYXRhOiBhbnlbXVxuICAvLyB0b2RvXG4gIGVuYWJsZVRvb2x0aXA/OiBib29sZWFuXG4gIHN0eWxlPzogYW55XG4gIGFjdGlvbnM/OiB7XG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgICBmbjogKHJvd0RhdGE6IGFueSkgPT4gdm9pZFxuICB9W11cbiAgb3BlcmF0aW9uTGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXVxuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9XG4gICAgICB9KSkgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZSB8fCB7fX0+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57IG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDx0cj48L3RyPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleX0+e3Jvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImluZm8tdGFibGUtLW5vLWhlYWRlclwiOlwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXCJpbmZvLXRhYmxlXCI6XCJpbmZvLXRhYmxlX0I3SllVXCIsXCJhY3Rpb25zXCI6XCJhY3Rpb25zX3BSX056XCIsXCJhY3Rpb25cIjpcImFjdGlvbl8zRExLeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSdcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG50eXBlIFBhZ2luYXRpb25MaW5rID0ge1xuICBwYWdlOiBudW1iZXJcbiAgdXJsOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGtleT86IHN0cmluZ1xuICB9XG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHBhZ2luYXRpb25MaW5rczoge1xuICAgIG5leHQ/OiBQYWdpbmF0aW9uTGlua1xuICAgIGxhc3Q6IFBhZ2luYXRpb25MaW5rXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJvdXRpbmcsIHBhZ2luYXRpb25MaW5rczogeyBuZXh0LCBsYXN0IH0gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxXG4gICAgY29uc3QgY3VycmVudCA9IG5leHRcbiAgICAgID8gbmV4dC5wYWdlIC0gMVxuICAgICAgOiBhbGxcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICBhbGw9e2FsbH1cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgIHVybD17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeTogcm91dGluZy5xdWVyeSB8fCB7fVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBuYW1lLCBrZXkgfSB9ID0gb3duUHJvcHNcbiAgY29uc29sZS5sb2coc3RhdGUucm91dGluZylcblxuICByZXR1cm4ge1xuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICBwYWdpbmF0aW9uTGlua3M6IHNlbGVjdG9ycy5wYWdpbmF0aW9uTGlua1NlbGVjdG9yKG5hbWUsIGtleSkoc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7fVxuKShDb250ZW50UGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcidcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpXG5cbi8qIOagl+WtkCDwn4ywXG4gKiByYW5nZSA9IDJcbiAqIHwgcmFuZ2UgfCBjdXJyZW50IHwgcmFuZ2dlIHxcbiAqICAgMiwgMywgICAgIFs0XSwgICAgIDUsIDZcbiAqL1xuXG50eXBlIE9qYiA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbDogbnVtYmVyXG4gIGN1cnJlbnQ6IG51bWJlclxuICByYW5nZT86IG51bWJlciAvLyBkZWZhdWx0IDNcbiAgdXJsOiB7XG4gICAgcGF0aG5hbWU6IHN0cmluZ1xuICAgIHF1ZXJ5OiBPYmplY3RcbiAgfVxuICB1cmxTdHlsZT86ICdxdWVyeScgfCAnc2xhc2gnXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcGFyc2VVcmwocGF0aG5hbWU6IHN0cmluZywgcXVlcnk6IE9iamVjdCwgcGFnZU51bSkge1xuICAgIGxldCB1cmxTdHlsZSA9IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgID8gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgOiAncXVlcnknXG5cbiAgICBpZiAodXJsU3R5bGUgPT09ICdxdWVyeScpIHtcbiAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZUZvcm1EYXRhKF8ub21pdChxdWVyeSwgWydwYWdlJ10pKVxuICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cXVlcnlQYXJ0ID8gYD8ke3F1ZXJ5UGFydH0mYCA6ICc/J31wYWdlPSR7cGFnZU51bX1gXG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlRm9ybURhdGEocXVlcnkpXG4gICAgcmV0dXJuIGAke3BhdGhuYW1lfS9wYWdlLyR7cGFnZU51bX0/JHtxdWVyeVBhcnR9YFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzXG4gICAgY29uc3QgdG90YWxSYW5nZUVuZEluZGV4ID0gdGhpcy5wcm9wcy5hbGwgLSAxXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50IGFzIGFueSkgLSAxXG4gICAgbGV0IHJhbmdlU3RhcnRJbmRleCA9IGN1cnJlbnRJbmRleCAtIHJhbmdlXG4gICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZVxuICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcmlnaHRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCBwYWdlcyA9IFtdXG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgVxuICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcihg6aG156CB5b+F6aG75Li65pWw5a2X77yM5Y205b6X5YiwICR7dHlwZW9mIGN1cnJlbnRJbmRleH1gKVxuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGV4ID4gcmFuZ2VFbmRJbmRleCB8fCBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpobXnoIHkuI3og73lpKfkuo7miYDmnInpobXpnaLmlbDnm67miJblsI/kuo4gMe+8gScpXG4gICAgfVxuXG4gICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4IC0gKHJhbmdlICogMiArIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodFNwcmVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA8PSAwKSB7XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgfV0pXG4gICAgfVxuXG4gICAgLy8gYWRkIHNwcmVhZFxuICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHNwZC5jb25jYXQocGFnZXMpXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogdG90YWxSYW5nZUVuZEluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChzcGQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdpbmF0b3JcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bS0tY3VycmVudFwiPntwYWdlLnBhZ2VOdW19PC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLXNwcmVhZFwiPi4uLjwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bVwiPjxMaW5rIHRvPXt0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0+e3BhZ2UucGFnZU51bX08L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlLXNwcmVhZFwiOlwicGFnZS1zcHJlYWRfMklOSFVcIixcInBhZ2UtbnVtXCI6XCJwYWdlLW51bV8yb1BRVVwiLFwicGFnZS1udW0tLWN1cnJlbnRcIjpcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXCJwYWdpbmF0b3JcIjpcInBhZ2luYXRvcl8xUkhBbVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9saWZlY2lyY2xlJ1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2hlbHBlcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIOajgOafpSBzdG9yZSDph4zpnaLnmoQgcm91dGluZyDmmK/lkKblj5jljJZcbmV4cG9ydCBjb25zdCBvblJvdXRpbmdDaGFuZ2UgPSBmbiA9PiAobmV4dFByb3BzLCBjdXJyZW50UHJvcHMpID0+IHtcbiAgaWYgKCFjdXJyZW50UHJvcHMucm91dGluZykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3JvdXRpbmcg6ZyA6KaB546w5Zyo57uE5Lu2IHByb3BzIOmHjOmdouWjsOaYju+8gScpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBoYXNQYXRoUGFyYW1DaGFuZ2VkID0gIV8uaXNFcXVhbChuZXh0UHJvcHMucm91dGluZywgY3VycmVudFByb3BzLnJvdXRpbmcpXG5cbiAgaWYgKGhhc1BhdGhQYXJhbUNoYW5nZWQpIHtcbiAgICBmbihuZXh0UHJvcHMucm91dGluZylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvaGVscGVycy9saWZlY2lyY2xlLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250ZW50UGFnZSdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZmV0Y2hVc2VyczogKG9wdGlvbnM/OiBmZXRjaFVzZXJzKSA9PiB2b2lkXG4gIHVzZXJzOiBhbnlbXVxuICByb3V0aW5nOiBhbnlcbn1cblxuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGxvYWRVc2Vycyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoVXNlcnMoe1xuICAgICAgYXBpOiB7XG4gICAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMSdcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGhlbHBlcnMub25Sb3V0aW5nQ2hhbmdlKHJvdXRpbmcgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG4gICAgICB0aGlzLmxvYWRVc2VycyhuZXh0UHJvcHMpXG4gICAgfSkobmV4dFByb3BzLCB0aGlzLnByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7dXNlcnN9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLnlKjmiLfnrqHnkIZcIj5cbiAgICAgICAgPENvbnRlbnRQYWdlXG4gICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgbmFtZTogJ3VzZXJzJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIDxJbmZvVGFibGVcbiAgICAgICAgICAgIGRhdGE9e3VzZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250ZW50UGFnZT5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcnM6IHNlbGVjdG9ycy51c2Vyc1NlbGVjdG9yKHN0YXRlKSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoVXNlcnMgfVxuKShNYW5hZ2VVc2VycyBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvTWFuYWdlVXNlcnMudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==