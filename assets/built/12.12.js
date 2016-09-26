webpackJsonp([12],{

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

/***/ 223:
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
	
	var _DocContainer = __webpack_require__(134);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(224);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _apis = __webpack_require__(119);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _selectors = __webpack_require__(160);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(8);
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ContentPage = __webpack_require__(227);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(232);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	var styles = __webpack_require__(234);
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: "deleteBook",
	        value: function deleteBook(id, bookName) {
	            var _this2 = this;
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: "将删除《" + bookName + "》",
	                onConfirm: function onConfirm() {
	                    _apis2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeConfirmModal();
	                        _this2.props.sendNotification('删除成功！');
	                        _this2.props.fetchBooks({ merge: false });
	                    });
	                }
	            });
	        }
	    }, {
	        key: "loadBooks",
	        value: function loadBooks() {
	            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	            this.props.fetchBooks({
	                page: props.routing.query.page || '1',
	                merge: false
	            });
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var _this3 = this;
	
	            helpers.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this3.loadBooks(nextProps);
	            })(nextProps, this.props);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.loadBooks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this4 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "书籍管理", bodyClass: "manage-books" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'books'
	                } }, _react2.default.createElement(_InfoTable2.default, { data: bookListNewest.map(function (item) {
	                    return Object.assign({}, item, {
	                        authors: item.authors ? item.authors.map(function (author) {
	                            return author.name;
	                        }).join(', ') : '未知作者'
	                    });
	                }), header: [{
	                    key: 'id',
	                    name: 'ID'
	                }, {
	                    key: 'title',
	                    name: '书名'
	                }, {
	                    key: 'dateCreated',
	                    name: '创建日期'
	                }, {
	                    key: 'authors',
	                    name: '作者'
	                }], actions: [{
	                    name: '删除',
	                    fn: function fn(row) {
	                        _this4.deleteBook(row.id, row.title);
	                    }
	                }] })));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var query = _ref.query;
	
	            return store.dispatch((0, _actions.fetchBooks)({
	                page: query.page
	            }));
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	ManageBooks = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ManageBooks);
	function mapStateToProps(state, ownProps) {
	    return {
	        bookListNewest: selectors.booksSelector(state),
	        routing: state.routing.locationBeforeTransitions
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal })(ManageBooks);

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

/***/ 234:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqIiwid2VicGFjazovLy8uL34vcmVzZWxlY3QvbGliL2luZGV4LmpzPzY0NmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tz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QVUsV0FBb0IsdUJBQU0sS0FFdEQ7O0FBQ0UscUJBQUssS0FBVSxVQUFFO0FBQ1gsNEJBQ0wsOEJBQUcsUUFBSSxLQUFRLE9BQVUsV0FBYyxpQkFFMUM7O0FBRU0sd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLE9BQVUsV0FBVyxjQUFDLGdCQUFLLG1DQUFHLElBQU0sT0FBUyxTQUFJLElBQVMsVUFBSyxJQUFNLE9BQU0sS0FBVyxZQUFNLEtBUzVIO2NBdEJ1QixDQUZkLENBREYsQ0FERTs7OztZQWpHdUI7O0FBRGpDLHlCQUFXLCtCQUFRLFVBOEhuQjttQkFBd0IsVTs7Ozs7OztBQzFKeEI7QUFDQSxtQkFBa0IsMkk7Ozs7Ozs7Ozs7Ozs7OztBQ0RVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRzVCOzs7Ozs7O0FBQU8sS0FBcUI7c0JBQW1CLFdBQWM7QUFDeEQsYUFBQyxDQUFhLGFBQVM7QUFDakIscUJBQU0sTUFBOEI7QUFDckMsb0JBQ1AsTUFIMkI7O0FBSzVCLGFBQXlCLHNCQUFHLENBQUUsaUJBQVEsUUFBVSxVQUFRLFNBQWMsYUFBUztBQUU1RSxhQUFxQixxQkFBRTtBQUN0QixnQkFBVSxVQUVmOztNQVhvQztFQUFKLEM7Ozs7Ozs7QUNIakMsMEMiLCJmaWxlIjoiMTIuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCBxdWVyeUF1dGhvcnNTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3QgZG91YmFuQm9va3NBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgYm9va3MgPT4ge1xuICAgIHJldHVybiBib29rcy5tYXAoYm9vayA9PiAoe1xuICAgICAgbmFtZTogYm9vay50aXRsZSxcbiAgICAgIHZhbHVlOiBib29rLmlkLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgIGF1dGhvcjogYm9vay5hdXRob3Iuam9pbignLCAnKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBhdXRob3JzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5QXV0aG9yc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWFyY2hBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VhcmNoQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgdXNlcnNTZWxlY3RvciA9IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG59KVxuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCB7IGNvbW1vbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLnBpY2soXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9YCwge30pLCBbJ25leHQnLCAnbGFzdCddKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0TWVtb2l6ZSA9IGRlZmF1bHRNZW1vaXplO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3I7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3I7XG5leHBvcnRzLmNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMpIHtcbiAgdmFyIGVxdWFsaXR5Q2hlY2sgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgbGFzdEFyZ3MgPSBudWxsO1xuICB2YXIgbGFzdFJlc3VsdCA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGxhc3RBcmdzICE9PSBudWxsICYmIGxhc3RBcmdzLmxlbmd0aCA9PT0gYXJncy5sZW5ndGggJiYgYXJncy5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZXF1YWxpdHlDaGVjayh2YWx1ZSwgbGFzdEFyZ3NbaW5kZXhdKTtcbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuICAgIGxhc3RSZXN1bHQgPSBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgbGFzdEFyZ3MgPSBhcmdzO1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlbGVjdG9yIGNyZWF0b3JzIGV4cGVjdCBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgJyArICgnaW5zdGVhZCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbJyArIGRlcGVuZGVuY3lUeXBlcyArICddJykpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBmdW5jc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgdmFyIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcblxuICAgIHZhciBtZW1vaXplZFJlc3VsdEZ1bmMgPSBtZW1vaXplLmFwcGx5KHVuZGVmaW5lZCwgW2Z1bmN0aW9uICgpIHtcbiAgICAgIHJlY29tcHV0YXRpb25zKys7XG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICB2YXIgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3RvcihzdGF0ZSwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMiA/IF9sZW40IC0gMiA6IDApLCBfa2V5NCA9IDI7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NCAtIDJdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcmFtcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3kuYXBwbHkodW5kZWZpbmVkLCBbc3RhdGUsIHByb3BzXS5jb25jYXQoYXJncykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVtb2l6ZWRSZXN1bHRGdW5jLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KHBhcmFtcykpO1xuICAgIH07XG5cbiAgICBzZWxlY3Rvci5yZXN1bHRGdW5jID0gcmVzdWx0RnVuYztcbiAgICBzZWxlY3Rvci5yZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucztcbiAgICB9O1xuICAgIHNlbGVjdG9yLnJlc2V0UmVjb21wdXRhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIH07XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihkZWZhdWx0TWVtb2l6ZSkuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gIHZhciBzZWxlY3RvckNyZWF0b3IgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBjcmVhdGVTZWxlY3RvciA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKCd3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSAnICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgcmV0dXJuIHNlbGVjdG9yQ3JlYXRvcihvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgIHZhbHVlc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Jlc2VsZWN0L2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250ZW50UGFnZSdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTWFuYWdlQm9va3MuY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBmZXRjaEJvb2tzPzogKGRhdGE/OiBmZXRjaEJvb2tzKSA9PiB2b2lkXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIGNsb3NlQ29uZmlybU1vZGFsOiBhbnlcbiAgcm91dGluZzogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBxdWVyeX0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcyh7XG4gICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGlzLmRlbGV0ZUJvb2soaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ29uZmlybU1vZGFsKClcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKHsgbWVyZ2U6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRCb29rcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3Moe1xuICAgICAgcGFnZTogcHJvcHMucm91dGluZy5xdWVyeS5wYWdlIHx8ICcxJyxcbiAgICAgIG1lcmdlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICAgIHRoaXMubG9hZEJvb2tzKG5leHRQcm9wcylcbiAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRCb29rcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIuS5puexjeeuoeeQhlwiIGJvZHlDbGFzcz1cIm1hbmFnZS1ib29rc1wiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmZvVGFibGVcbiAgICAgICAgICAgIGRhdGE9e2Jvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIGF1dGhvcnM6IGl0ZW0uYXV0aG9ycyA/IGl0ZW0uYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIDogJ+acquefpeS9nOiAhSdcbiAgICAgICAgICAgIH0pKSkgfVxuICAgICAgICAgICAgaGVhZGVyPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkuablkI0nXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRlQ3JlYXRlZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuaXpeacnydcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ2F1dGhvcnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkvZzogIUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBhY3Rpb25zPXtbe1xuICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCb29rKHJvdy5pZCwgcm93LnRpdGxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGVudFBhZ2U+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGJvb2tMaXN0TmV3ZXN0OiBzZWxlY3RvcnMuYm9va3NTZWxlY3RvcihzdGF0ZSksXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCB7fT4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCB9XG4pKE1hbmFnZUJvb2tzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi9JbmZvVGFibGUnXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbmZvVGFibGUuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBoZWFkZXI/OiB7XG4gICAga2V5OiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICB9W11cbiAgZGF0YTogYW55W11cbiAgLy8gdG9kb1xuICBlbmFibGVUb29sdGlwPzogYm9vbGVhblxuICBzdHlsZT86IGFueVxuICBhY3Rpb25zPzoge1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gICAgZm46IChyb3dEYXRhOiBhbnkpID0+IHZvaWRcbiAgfVtdXG4gIG9wZXJhdGlvbkxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgSW5mb1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGhlYWRlciwgZGF0YSwgZW5hYmxlVG9vbHRpcCwgc3R5bGUsIGFjdGlvbnMsIG9wZXJhdGlvbkxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgYWN0aW9ucyA9IGFjdGlvbnMgfHwgW11cblxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICBoZWFkZXIgPSAoZGF0YS5sZW5ndGggIT09IDAgJiYgXy5rZXlzKGRhdGFbMF0pLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgfVxuICAgICAgfSkpIHx8IFtdXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnaW5mby10YWJsZSc6IHRydWUsXG4gICAgICAnaW5mby10YWJsZS0tbm8taGVhZGVyJzogIWhlYWRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGUgfHwge319PlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PntpdGVtLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+eyBvcGVyYXRpb25MYWJlbCB8fCAn5pON5L2cJyB9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiA8dHI+PC90cj5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF8ubWFwKGhlYWRlciwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXl9Pntyb3dbaXRlbS5rZXldICYmIHJvd1tpdGVtLmtleV0udG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjpcImluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eFwiLFwiaW5mby10YWJsZVwiOlwiaW5mby10YWJsZV9CN0pZVVwiLFwiYWN0aW9uc1wiOlwiYWN0aW9uc19wUl9OelwiLFwiYWN0aW9uXCI6XCJhY3Rpb25fM0RMS3lcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4vQ29udGVudFBhZ2UnXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcblxudHlwZSBQYWdpbmF0aW9uTGluayA9IHtcbiAgcGFnZTogbnVtYmVyXG4gIHVybDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBrZXk/OiBzdHJpbmdcbiAgfVxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBwYWdpbmF0aW9uTGlua3M6IHtcbiAgICBuZXh0PzogUGFnaW5hdGlvbkxpbmtcbiAgICBsYXN0OiBQYWdpbmF0aW9uTGlua1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0XG4gICAgICA/IG5leHQucGFnZSAtIDFcbiAgICAgIDogYWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgYWxsPXthbGx9XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICB1cmw9e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHJvdXRpbmcucXVlcnkgfHwge31cbiAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzXG5cbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMucGFnaW5hdGlvbkxpbmtTZWxlY3RvcihuYW1lLCBrZXkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge31cbikoQ29udGVudFBhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKVxuXG4vKiDmoJflrZAg8J+MsFxuICogcmFuZ2UgPSAyXG4gKiB8IHJhbmdlIHwgY3VycmVudCB8IHJhbmdnZSB8XG4gKiAgIDIsIDMsICAgICBbNF0sICAgICA1LCA2XG4gKi9cblxudHlwZSBPamIgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGw6IG51bWJlclxuICBjdXJyZW50OiBudW1iZXJcbiAgcmFuZ2U/OiBudW1iZXIgLy8gZGVmYXVsdCAzXG4gIHVybDoge1xuICAgIHBhdGhuYW1lOiBzdHJpbmdcbiAgICBxdWVyeTogT2JqZWN0XG4gIH1cbiAgdXJsU3R5bGU/OiAncXVlcnknIHwgJ3NsYXNoJ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHBhcnNlVXJsKHBhdGhuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBPYmplY3QsIHBhZ2VOdW0pIHtcbiAgICBsZXQgdXJsU3R5bGUgPSB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA/IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgIDogJ3F1ZXJ5J1xuXG4gICAgaWYgKHVybFN0eWxlID09PSAncXVlcnknKSB7XG4gICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VGb3JtRGF0YShfLm9taXQocXVlcnksIFsncGFnZSddKSlcbiAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YFxuICAgIH1cblxuICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZUZvcm1EYXRhKHF1ZXJ5KVxuICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucHJvcHMucmFuZ2UgPyB0aGlzLnByb3BzLnJhbmdlIDogM1xuICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCBhcyBhbnkpIC0gMVxuICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZVxuICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2VcbiAgICBsZXQgbGVmdFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcGFnZXMgPSBbXVxuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLnVybFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmFsbCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxsIOW/hemhu+S4uiBudW1iZXIg57G75Z6L77yBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YClcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKVxuICAgIH1cblxuICAgIGlmIChyYW5nZSAqIDIgKyAxID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgLy8g5oC76ZW/5bqm5bCP5LqOIHJhbmdlIOebtOW+hFxuICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpITnkIblj7PkvqfmuqLlh7pcbiAgICAgIGlmIChyYW5nZUVuZEluZGV4ID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByYW5nZVN0YXJ0SW5kZXg7IGkgPD0gcmFuZ2VFbmRJbmRleDsgaSsrKSB7XG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChbe1xuICAgICAgICBwYWdlTnVtOiBpICsgMSxcbiAgICAgICAgaXNDdXJyZW50OiBpID09PSBjdXJyZW50SW5kZXhcbiAgICAgIH1dKVxuICAgIH1cblxuICAgIC8vIGFkZCBzcHJlYWRcbiAgICBpZiAobGVmdFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKVxuICAgIH1cblxuICAgIGlmIChyaWdodFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnaW5hdG9yXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW0tLWN1cnJlbnRcIj57cGFnZS5wYWdlTnVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1zcHJlYWRcIj4uLi48L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW1cIj48TGluayB0bz17dGhpcy5wYXJzZVVybCh1cmwucGF0aG5hbWUsIHVybC5xdWVyeSwgcGFnZS5wYWdlTnVtKSB9PntwYWdlLnBhZ2VOdW19PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZS1zcHJlYWRcIjpcInBhZ2Utc3ByZWFkXzJJTkhVXCIsXCJwYWdlLW51bVwiOlwicGFnZS1udW1fMm9QUVVcIixcInBhZ2UtbnVtLS1jdXJyZW50XCI6XCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFwicGFnaW5hdG9yXCI6XCJwYWdpbmF0b3JfMVJIQW1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydCAqIGZyb20gJy4vbGlmZWNpcmNsZSdcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyDmo4Dmn6Ugc3RvcmUg6YeM6Z2i55qEIHJvdXRpbmcg5piv5ZCm5Y+Y5YyWXG5leHBvcnQgY29uc3Qgb25Sb3V0aW5nQ2hhbmdlID0gZm4gPT4gKG5leHRQcm9wcywgY3VycmVudFByb3BzKSA9PiB7XG4gIGlmICghY3VycmVudFByb3BzLnJvdXRpbmcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdyb3V0aW5nIOmcgOimgeeOsOWcqOe7hOS7tiBwcm9wcyDph4zpnaLlo7DmmI7vvIEnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgaGFzUGF0aFBhcmFtQ2hhbmdlZCA9ICFfLmlzRXF1YWwobmV4dFByb3BzLnJvdXRpbmcsIGN1cnJlbnRQcm9wcy5yb3V0aW5nKVxuXG4gIGlmIChoYXNQYXRoUGFyYW1DaGFuZ2VkKSB7XG4gICAgZm4obmV4dFByb3BzLnJvdXRpbmcpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2hlbHBlcnMvbGlmZWNpcmNsZS50c1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9