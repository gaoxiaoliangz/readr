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
	                    name: 'Title'
	                }, {
	                    key: 'dateCreated',
	                    name: 'Date created'
	                }, {
	                    key: 'authors',
	                    name: 'Author(s)'
	                }], actions: [{
	                    name: 'Delete',
	                    fn: function fn(row) {
	                        _this4.deleteBook(row.id, row.title);
	                    }
	                }], operationLabel: "Actions" })));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
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

/***/ 234:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqIiwid2VicGFjazovLy8uL34vcmVzZWxlY3QvbGliL2luZGV4LmpzPzY0NmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tz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QUFVLFdBQW9CLHVCQUFNLEtBRXREOztBQUNFLHFCQUFLLEtBQVUsVUFBRTtBQUNYLDRCQUNMLDhCQUFHLFFBQUksS0FBUSxPQUFVLFdBQWMsaUJBRTFDOztBQUVNLHdCQUNMLDhCQUFHLFFBQUksS0FBUSxPQUFVLFdBQVcsY0FBQyxnQkFBSyxtQ0FBRyxJQUFNLE9BQVMsU0FBSSxJQUFTLFVBQUssSUFBTSxPQUFNLEtBQVcsWUFBTSxLQVM1SDtjQXRCdUIsQ0FGZCxDQURGLENBREU7Ozs7WUFqR3VCOztBQURqQyx5QkFBVywrQkFBUSxVQThIbkI7bUJBQXdCLFU7Ozs7Ozs7QUMxSnhCO0FBQ0EsbUJBQWtCLDJJOzs7Ozs7Ozs7Ozs7Ozs7QUNEVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0c1Qjs7Ozs7OztBQUFPLEtBQXFCO3NCQUFtQixXQUFjO0FBQ3hELGFBQUMsQ0FBYSxhQUFTO0FBQ2pCLHFCQUFNLE1BQThCO0FBQ3JDLG9CQUNQLE1BSDJCOztBQUs1QixhQUF5QixzQkFBRyxDQUFFLGlCQUFRLFFBQVUsVUFBUSxTQUFjLGFBQVM7QUFFNUUsYUFBcUIscUJBQUU7QUFDdEIsZ0JBQVUsVUFFZjs7TUFYb0M7RUFBSixDOzs7Ozs7O0FDSGpDLDBDIiwiZmlsZSI6IjEyLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzIH0gZnJvbSAnLi9jb21tb24nXG5pbXBvcnQgKiBhcyBjb21tb24gZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBjb25zdCBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgcXVlcnlBdXRob3JzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IGRvdWJhbkJvb2tzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGJvb2tzID0+IHtcbiAgICByZXR1cm4gYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICB2YWx1ZTogYm9vay5pZCxcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgY292ZXI6IGJvb2suaW1hZ2VzLmxhcmdlLFxuICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYXV0aG9yc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeUF1dGhvcnNTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VhcmNoQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlYXJjaEJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHVzZXJzU2VsZWN0b3IgPSBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xufSlcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5leHBvcnQgeyBjb21tb24gfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgZW50aXRpZXNTZWxlY3RvciA9IG5hbWUgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gc3RhdGUuZW50aXRpZXNbbmFtZV0gfHwge31cbn1cbmNvbnN0IHBhZ2luYXRpb25TZWxlY3RvciA9IChuYW1lLCBrZXkgPSAnZGVmYXVsdCcpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fS5pZHNgLCBbXSlcbn1cbmV4cG9ydCBjb25zdCBwYWdpbmF0aW9uTGlua1NlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5waWNrKF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIGAke25hbWV9LiR7a2V5fWAsIHt9KSwgWyduZXh0JywgJ2xhc3QnXSlcbn1cbmNvbnN0IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIHF1ZXJ5KSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBbbmFtZSwgJ3F1ZXJ5JywgcXVlcnksICdpZHMnXSwgW10pXG59XG5cbnR5cGUgU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zID0ge1xuICBlbnRpdGllc05hbWU6IHN0cmluZ1xuICBwYWdpbmF0aW9uTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25LZXk/OiBzdHJpbmdcbiAgcGFnaW5hdGlvblF1ZXJ5Pzogc3RyaW5nXG59XG5leHBvcnQgY29uc3Qgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgPSAob3B0aW9uczogU2VsZWN0UGFnaW5hdGVkRW50aXRpZXNPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtlbnRpdGllc05hbWUsIHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5LCBwYWdpbmF0aW9uUXVlcnl9ID0gb3B0aW9uc1xuICBsZXQgcGFnaVNlbGVjdG9yOiAoc3RhdGU6IGFueSkgPT4gYW55W11cblxuICBpZiAocGFnaW5hdGlvblF1ZXJ5KSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25RdWVyeSlcbiAgfSBlbHNlIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBwYWdpbmF0aW9uU2VsZWN0b3IocGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXkpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZW50aXRpZXNTZWxlY3RvcihlbnRpdGllc05hbWUpLFxuICAgIHBhZ2lTZWxlY3RvcixcbiAgICAoZW50aXRpZXMsIGlkcykgPT4ge1xuICAgICAgcmV0dXJuIGlkcy5tYXAoaWQgPT4gZW50aXRpZXNbaWRdKVxuICAgIH1cbiAgKVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHRNZW1vaXplID0gZGVmYXVsdE1lbW9pemU7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcjtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcjtcbmV4cG9ydHMuY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBsYXN0QXJncyA9IG51bGw7XG4gIHZhciBsYXN0UmVzdWx0ID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEFyZ3MgIT09IG51bGwgJiYgbGFzdEFyZ3MubGVuZ3RoID09PSBhcmdzLmxlbmd0aCAmJiBhcmdzLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBlcXVhbGl0eUNoZWNrKHZhbHVlLCBsYXN0QXJnc1tpbmRleF0pO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcDtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcignU2VsZWN0b3IgY3JlYXRvcnMgZXhwZWN0IGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCAnICsgKCdpbnN0ZWFkIHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFsnICsgZGVwZW5kZW5jeVR5cGVzICsgJ10nKSk7XG4gIH1cblxuICByZXR1cm4gZGVwZW5kZW5jaWVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lbW9pemVPcHRpb25zID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIG1lbW9pemVPcHRpb25zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGZ1bmNzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgdmFyIHJlY29tcHV0YXRpb25zID0gMDtcbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuXG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodW5kZWZpbmVkLCBbZnVuY3Rpb24gKCkge1xuICAgICAgcmVjb21wdXRhdGlvbnMrKztcbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9XS5jb25jYXQobWVtb2l6ZU9wdGlvbnMpKTtcblxuICAgIHZhciBzZWxlY3RvciA9IGZ1bmN0aW9uIHNlbGVjdG9yKHN0YXRlLCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAyID8gX2xlbjQgLSAyIDogMCksIF9rZXk0ID0gMjsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0IC0gMl0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyYW1zID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICByZXR1cm4gZGVwZW5kZW5jeS5hcHBseSh1bmRlZmluZWQsIFtzdGF0ZSwgcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkocGFyYW1zKSk7XG4gICAgfTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLnJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zO1xuICAgIH07XG4gICAgc2VsZWN0b3IucmVzZXRSZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgdmFyIHNlbGVjdG9yQ3JlYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNlbGVjdG9yIDogYXJndW1lbnRzWzFdO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoJ3doZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhICcgKyB0eXBlb2Ygc2VsZWN0b3JzKSk7XG4gIH1cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICByZXR1cm4gc2VsZWN0b3JDcmVhdG9yKG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgdmFsdWVzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVzZWxlY3QvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyAxMiAxMyAxNCAxNVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJ1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9NYW5hZ2VCb29rcy5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGZldGNoQm9va3M/OiAoZGF0YT86IGZldGNoQm9va3MpID0+IHZvaWRcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbiAgb3BlbkNvbmZpcm1Nb2RhbDogKGRhdGE6IG9wZW5Db25maXJtTW9kYWwpID0+IHZvaWRcbiAgY2xvc2VDb25maXJtTW9kYWw6IGFueVxuICByb3V0aW5nOiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBkZWxldGVCb29rKGlkLCBib29rTmFtZSkge1xuICAgIHRoaXMucHJvcHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICBjb250ZW50OiBg5bCG5Yig6Zmk44CKJHtib29rTmFtZX3jgItgLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIGFwaXMuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoeyBtZXJnZTogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcyh7XG4gICAgICBwYWdlOiBwcm9wcy5yb3V0aW5nLnF1ZXJ5LnBhZ2UgfHwgJzEnLFxuICAgICAgbWVyZ2U6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2tzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5Lmm57GN566h55CGXCIgYm9keUNsYXNzPVwibWFuYWdlLWJvb2tzXCI+XG4gICAgICAgIDxDb250ZW50UGFnZVxuICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgIG5hbWU6ICdib29rcydcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEluZm9UYWJsZVxuICAgICAgICAgICAgZGF0YT17Ym9va0xpc3ROZXdlc3QubWFwKGl0ZW0gPT4gKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgYXV0aG9yczogaXRlbS5hdXRob3JzID8gaXRlbS5hdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgOiAn5pyq55+l5L2c6ICFJ1xuICAgICAgICAgICAgfSkpKSB9XG4gICAgICAgICAgICBoZWFkZXI9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSUQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1RpdGxlJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnZGF0ZUNyZWF0ZWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdEYXRlIGNyZWF0ZWQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdhdXRob3JzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQXV0aG9yKHMpJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgYWN0aW9ucz17W3tcbiAgICAgICAgICAgICAgbmFtZTogJ0RlbGV0ZScsXG4gICAgICAgICAgICAgIGZuOiByb3cgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQm9vayhyb3cuaWQsIHJvdy50aXRsZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV19XG4gICAgICAgICAgICBvcGVyYXRpb25MYWJlbD1cIkFjdGlvbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250ZW50UGFnZT5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgYm9va0xpc3ROZXdlc3Q6IHNlbGVjdG9ycy5ib29rc1NlbGVjdG9yKHN0YXRlKSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIHt9PihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsIH1cbikoTWFuYWdlQm9va3MpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhlYWRlcj86IHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIH1bXVxuICBkYXRhOiBhbnlbXVxuICAvLyB0b2RvXG4gIGVuYWJsZVRvb2x0aXA/OiBib29sZWFuXG4gIHN0eWxlPzogYW55XG4gIGFjdGlvbnM/OiB7XG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgICBmbjogKHJvd0RhdGE6IGFueSkgPT4gdm9pZFxuICB9W11cbiAgb3BlcmF0aW9uTGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXVxuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9XG4gICAgICB9KSkgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZSB8fCB7fX0+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57IG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDx0cj48L3RyPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleX0+e3Jvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImluZm8tdGFibGUtLW5vLWhlYWRlclwiOlwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXCJpbmZvLXRhYmxlXCI6XCJpbmZvLXRhYmxlX0I3SllVXCIsXCJhY3Rpb25zXCI6XCJhY3Rpb25zX3BSX056XCIsXCJhY3Rpb25cIjpcImFjdGlvbl8zRExLeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSdcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG50eXBlIFBhZ2luYXRpb25MaW5rID0ge1xuICBwYWdlOiBudW1iZXJcbiAgdXJsOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGtleT86IHN0cmluZ1xuICB9XG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHBhZ2luYXRpb25MaW5rczoge1xuICAgIG5leHQ/OiBQYWdpbmF0aW9uTGlua1xuICAgIGxhc3Q6IFBhZ2luYXRpb25MaW5rXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJvdXRpbmcsIHBhZ2luYXRpb25MaW5rczogeyBuZXh0LCBsYXN0IH0gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxXG4gICAgY29uc3QgY3VycmVudCA9IG5leHRcbiAgICAgID8gbmV4dC5wYWdlIC0gMVxuICAgICAgOiBhbGxcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICBhbGw9e2FsbH1cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgIHVybD17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeTogcm91dGluZy5xdWVyeSB8fCB7fVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBuYW1lLCBrZXkgfSB9ID0gb3duUHJvcHNcbiAgY29uc29sZS5sb2coc3RhdGUucm91dGluZylcblxuICByZXR1cm4ge1xuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICBwYWdpbmF0aW9uTGlua3M6IHNlbGVjdG9ycy5wYWdpbmF0aW9uTGlua1NlbGVjdG9yKG5hbWUsIGtleSkoc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7fVxuKShDb250ZW50UGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcidcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpXG5cbi8qIOagl+WtkCDwn4ywXG4gKiByYW5nZSA9IDJcbiAqIHwgcmFuZ2UgfCBjdXJyZW50IHwgcmFuZ2dlIHxcbiAqICAgMiwgMywgICAgIFs0XSwgICAgIDUsIDZcbiAqL1xuXG50eXBlIE9qYiA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbDogbnVtYmVyXG4gIGN1cnJlbnQ6IG51bWJlclxuICByYW5nZT86IG51bWJlciAvLyBkZWZhdWx0IDNcbiAgdXJsOiB7XG4gICAgcGF0aG5hbWU6IHN0cmluZ1xuICAgIHF1ZXJ5OiBPYmplY3RcbiAgfVxuICB1cmxTdHlsZT86ICdxdWVyeScgfCAnc2xhc2gnXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcGFyc2VVcmwocGF0aG5hbWU6IHN0cmluZywgcXVlcnk6IE9iamVjdCwgcGFnZU51bSkge1xuICAgIGxldCB1cmxTdHlsZSA9IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgID8gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgOiAncXVlcnknXG5cbiAgICBpZiAodXJsU3R5bGUgPT09ICdxdWVyeScpIHtcbiAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZUZvcm1EYXRhKF8ub21pdChxdWVyeSwgWydwYWdlJ10pKVxuICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cXVlcnlQYXJ0ID8gYD8ke3F1ZXJ5UGFydH0mYCA6ICc/J31wYWdlPSR7cGFnZU51bX1gXG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlRm9ybURhdGEocXVlcnkpXG4gICAgcmV0dXJuIGAke3BhdGhuYW1lfS9wYWdlLyR7cGFnZU51bX0/JHtxdWVyeVBhcnR9YFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzXG4gICAgY29uc3QgdG90YWxSYW5nZUVuZEluZGV4ID0gdGhpcy5wcm9wcy5hbGwgLSAxXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50IGFzIGFueSkgLSAxXG4gICAgbGV0IHJhbmdlU3RhcnRJbmRleCA9IGN1cnJlbnRJbmRleCAtIHJhbmdlXG4gICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZVxuICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcmlnaHRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCBwYWdlcyA9IFtdXG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgVxuICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcihg6aG156CB5b+F6aG75Li65pWw5a2X77yM5Y205b6X5YiwICR7dHlwZW9mIGN1cnJlbnRJbmRleH1gKVxuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGV4ID4gcmFuZ2VFbmRJbmRleCB8fCBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpobXnoIHkuI3og73lpKfkuo7miYDmnInpobXpnaLmlbDnm67miJblsI/kuo4gMe+8gScpXG4gICAgfVxuXG4gICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4IC0gKHJhbmdlICogMiArIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodFNwcmVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA8PSAwKSB7XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgfV0pXG4gICAgfVxuXG4gICAgLy8gYWRkIHNwcmVhZFxuICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHNwZC5jb25jYXQocGFnZXMpXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogdG90YWxSYW5nZUVuZEluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChzcGQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdpbmF0b3JcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bS0tY3VycmVudFwiPntwYWdlLnBhZ2VOdW19PC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLXNwcmVhZFwiPi4uLjwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bVwiPjxMaW5rIHRvPXt0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0+e3BhZ2UucGFnZU51bX08L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlLXNwcmVhZFwiOlwicGFnZS1zcHJlYWRfMklOSFVcIixcInBhZ2UtbnVtXCI6XCJwYWdlLW51bV8yb1BRVVwiLFwicGFnZS1udW0tLWN1cnJlbnRcIjpcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXCJwYWdpbmF0b3JcIjpcInBhZ2luYXRvcl8xUkhBbVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiZXhwb3J0ICogZnJvbSAnLi9saWZlY2lyY2xlJ1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2hlbHBlcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIOajgOafpSBzdG9yZSDph4zpnaLnmoQgcm91dGluZyDmmK/lkKblj5jljJZcbmV4cG9ydCBjb25zdCBvblJvdXRpbmdDaGFuZ2UgPSBmbiA9PiAobmV4dFByb3BzLCBjdXJyZW50UHJvcHMpID0+IHtcbiAgaWYgKCFjdXJyZW50UHJvcHMucm91dGluZykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3JvdXRpbmcg6ZyA6KaB546w5Zyo57uE5Lu2IHByb3BzIOmHjOmdouWjsOaYju+8gScpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBoYXNQYXRoUGFyYW1DaGFuZ2VkID0gIV8uaXNFcXVhbChuZXh0UHJvcHMucm91dGluZywgY3VycmVudFByb3BzLnJvdXRpbmcpXG5cbiAgaWYgKGhhc1BhdGhQYXJhbUNoYW5nZWQpIHtcbiAgICBmbihuZXh0UHJvcHMucm91dGluZylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvaGVscGVycy9saWZlY2lyY2xlLnRzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=