exports.ids = [12];
exports.modules = {

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.common = exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(452);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(453);
	
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

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = exports.paginationLinkSelector = undefined;
	
	var _reselect = __webpack_require__(453);
	
	var _lodash = __webpack_require__(9);
	
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
	    if (paginationQuery || paginationQuery === '') {
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

/***/ 453:
/***/ function(module, exports) {

	module.exports = require("reselect");

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _DocContainer = __webpack_require__(240);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(532);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _apis = __webpack_require__(405);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _selectors = __webpack_require__(451);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(251);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ContentPage = __webpack_require__(536);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(542);
	
	var helpers = _interopRequireWildcard(_helpers);
	
	var _moment = __webpack_require__(544);
	
	var _moment2 = _interopRequireDefault(_moment);
	
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
	
	var styles = __webpack_require__(545);
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
	                        }).join(', ') : '未知作者',
	                        dateCreated: (0, _moment2.default)(new Date(item.dateCreated).valueOf()).format('YYYY年MM月DD日')
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

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(533);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(286);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(534);
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

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(535);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".info-table--no-header_2v3xx {\n  position: relative; }\n\n.info-table_B7JYU {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_B7JYU > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_B7JYU > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n      padding: 0 10px; }\n\n.actions_pR_Nz .action_3DLKy {\n  cursor: pointer;\n  color: #1B267F;\n  display: inline-block; }\n  .actions_pR_Nz .action_3DLKy:hover {\n    color: #2e40d2; }\n  .actions_pR_Nz .action_3DLKy:active {\n    color: #090d2b; }\n", ""]);
	
	// exports
	exports.locals = {
		"info-table--no-header": "info-table--no-header_2v3xx",
		"info-table": "info-table_B7JYU",
		"actions": "actions_pR_Nz",
		"action": "action_3DLKy"
	};

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(537);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(538);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(243);
	
	var _selectors = __webpack_require__(451);
	
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

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(539);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(73);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(257);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(540);
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

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(541);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-spread_2INHU, .page-num_2oPQU a, .page-num--current_1Y2mE a, .page-num--current_1Y2mE {\n  display: inline-block;\n  padding: 8px 12px;\n  color: #666;\n  border: 1px solid #ddd;\n  background: #fff;\n  min-width: 37px;\n  text-align: center;\n  border-radius: 3px;\n  box-sizing: border-box; }\n\n.paginator_1RHAm {\n  margin: 20px 0; }\n\n.page-spread_2INHU {\n  display: inline-block;\n  cursor: default; }\n\n.page-num_2oPQU, .page-num--current_1Y2mE {\n  display: inline-block;\n  margin: 0 3px; }\n  .page-num_2oPQU a:hover, .page-num--current_1Y2mE a:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.page-num--current_1Y2mE {\n  background: #ddd;\n  cursor: default; }\n", ""]);
	
	// exports
	exports.locals = {
		"page-spread": "page-spread_2INHU",
		"page-num": "page-num_2oPQU",
		"page-num--current": "page-num--current_1Y2mE",
		"paginator": "paginator_1RHAm"
	};

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifecircle = __webpack_require__(543);
	
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

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.onRoutingChange = undefined;
	
	var _lodash = __webpack_require__(9);
	
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

/***/ 544:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(546);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCI/YTkwMSoiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzP2E4NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9saWZlY2lyY2xlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3M/NTFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHTzs7QUEwRVA7Ozs7Ozs7Ozs7QUE3RXlDOztLQUt6Qzs7OztBQUFPLEtBQThCOytFQUNYO0FBQ1YsdUJBQWU7QUFDYix5QkFBZTtBQUNkLDBCQUNmO01BSnFCLENBRHNDO2dCQVMvRDtNQUhPO0VBTnNDO0FBU3RDLEtBQTBCO2lEQUFvQztBQUN2RCx1QkFBVztBQUNULHlCQUFXO0FBQ1YsMEJBR2pCO01BTm9FO0VBQTNCO0FBTWxDLEtBQXlCO2lEQUFvQztBQUN0RCx1QkFBUztBQUNQLHlCQUFTO0FBQ1IsMEJBR2pCO01BTm1FO0VBQTNCO0FBTWpDLEtBQTBCO1lBQTBCLDhCQUNqQyx5QkFBTztBQUV2QixnQkFBTSxNQUFJO29CQUFVO0FBQ3BCLHVCQUFNLEtBQU07QUFDWCx3QkFBTSxLQUFHO0FBQ0osNkJBQUU7QUFDQyxrQ0FBTSxLQUFRO0FBQ3BCLDRCQUFNLEtBQU8sT0FBTTtBQUNsQiw2QkFBTSxLQUFPLE9BQUssS0FNaEM7OztVQVo2QjtNQUR0QjtFQUZrQztBQWVsQyxLQUFzQjtZQUEwQiw4QkFDakMscUJBQU87QUFFbkIsZ0JBQU0sTUFBSTtvQkFBVTtBQUNwQix1QkFBTSxLQUFLO0FBQ1Ysd0JBQU0sS0FLakI7O1VBUDZCO01BRHRCO0VBRjhCO0FBVTlCLEtBQTBCO1lBQTBCLDhCQUN0QyxvQkFBTztBQUVsQixnQkFBTSxNQUFJO29CQUFVO0FBQ3BCLHVCQUFNLEtBQU07QUFDWCx3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REFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTIuMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCAqIGFzIGNvbW1vbiBmcm9tICcuL2NvbW1vbidcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnZG91YmFuQm9va3MnLFxuICAgIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCBxdWVyeUF1dGhvcnNTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYXV0aG9ycycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hCb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3QgZG91YmFuQm9va3NBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgYm9va3MgPT4ge1xuICAgIHJldHVybiBib29rcy5tYXAoYm9vayA9PiAoe1xuICAgICAgbmFtZTogYm9vay50aXRsZSxcbiAgICAgIHZhbHVlOiBib29rLmlkLFxuICAgICAgYWRkaXRpb25hbDoge1xuICAgICAgICBkZXNjcmlwdGlvbjogYm9vay5zdW1tYXJ5LFxuICAgICAgICBjb3ZlcjogYm9vay5pbWFnZXMubGFyZ2UsXG4gICAgICAgIGF1dGhvcjogYm9vay5hdXRob3Iuam9pbignLCAnKVxuICAgICAgfVxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBhdXRob3JzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5QXV0aG9yc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWFyY2hBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VhcmNoQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0udGl0bGUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gICAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgdXNlcnNTZWxlY3RvciA9IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbktleTogJ2RlZmF1bHQnXG59KVxuXG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbidcbmV4cG9ydCB7IGNvbW1vbiB9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLnBpY2soXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9YCwge30pLCBbJ25leHQnLCAnbGFzdCddKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkgfHwgcGFnaW5hdGlvblF1ZXJ5ID09PSAnJykge1xuICAgIHBhZ2lTZWxlY3RvciA9IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uUXVlcnkpXG4gIH0gZWxzZSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGVudGl0aWVzU2VsZWN0b3IoZW50aXRpZXNOYW1lKSxcbiAgICBwYWdpU2VsZWN0b3IsXG4gICAgKGVudGl0aWVzLCBpZHMpID0+IHtcbiAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IGVudGl0aWVzW2lkXSlcbiAgICB9XG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVzZWxlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDQ1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250ZW50UGFnZSdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9NYW5hZ2VCb29rcy5jc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGZldGNoQm9va3M/OiAoZGF0YT86IGZldGNoQm9va3MpID0+IHZvaWRcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbiAgb3BlbkNvbmZpcm1Nb2RhbDogKGRhdGE6IG9wZW5Db25maXJtTW9kYWwpID0+IHZvaWRcbiAgY2xvc2VDb25maXJtTW9kYWw6IGFueVxuICByb3V0aW5nOiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmUsIHF1ZXJ5fTogRmV0Y2hEYXRhT3B0aW9ucykge1xuICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChmZXRjaEJvb2tzKHtcbiAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2VcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBkZWxldGVCb29rKGlkLCBib29rTmFtZSkge1xuICAgIHRoaXMucHJvcHMub3BlbkNvbmZpcm1Nb2RhbCh7XG4gICAgICB0aXRsZTogJ+ehruiupOWIoOmZpCcsXG4gICAgICBjb250ZW50OiBg5bCG5Yig6Zmk44CKJHtib29rTmFtZX3jgItgLFxuICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgIGFwaXMuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoeyBtZXJnZTogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rcyh7XG4gICAgICBwYWdlOiBwcm9wcy5yb3V0aW5nLnF1ZXJ5LnBhZ2UgfHwgJzEnLFxuICAgICAgbWVyZ2U6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2tzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5Lmm57GN566h55CGXCIgYm9keUNsYXNzPVwibWFuYWdlLWJvb2tzXCI+XG4gICAgICAgIDxDb250ZW50UGFnZVxuICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgIG5hbWU6ICdib29rcydcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEluZm9UYWJsZVxuICAgICAgICAgICAgZGF0YT17Ym9va0xpc3ROZXdlc3QubWFwKGl0ZW0gPT4gKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgYXV0aG9yczogaXRlbS5hdXRob3JzID8gaXRlbS5hdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgOiAn5pyq55+l5L2c6ICFJyxcbiAgICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG1vbWVudChuZXcgRGF0ZShpdGVtLmRhdGVDcmVhdGVkKS52YWx1ZU9mKCkpLmZvcm1hdCgnWVlZWeW5tE1N5pyIRETml6UnKVxuICAgICAgICAgICAgfSkpKSB9XG4gICAgICAgICAgICBoZWFkZXI9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnSUQnXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+S5puWQjSdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ2RhdGVDcmVhdGVkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65pel5pyfJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnYXV0aG9ycycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+S9nOiAhSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGFjdGlvbnM9e1t7XG4gICAgICAgICAgICAgIG5hbWU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICBmbjogcm93ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJvb2socm93LmlkLCByb3cudGl0bGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250ZW50UGFnZT5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgYm9va0xpc3ROZXdlc3Q6IHNlbGVjdG9ycy5ib29rc1NlbGVjdG9yKHN0YXRlKSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIHt9PihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsIH1cbikoTWFuYWdlQm9va3MpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhlYWRlcj86IHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIH1bXVxuICBkYXRhOiBhbnlbXVxuICAvLyB0b2RvXG4gIGVuYWJsZVRvb2x0aXA/OiBib29sZWFuXG4gIHN0eWxlPzogYW55XG4gIGFjdGlvbnM/OiB7XG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgICBmbjogKHJvd0RhdGE6IGFueSkgPT4gdm9pZFxuICB9W11cbiAgb3BlcmF0aW9uTGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXVxuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9XG4gICAgICB9KSkgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZSB8fCB7fX0+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57IG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDx0cj48L3RyPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleX0+e3Jvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5mb1RhYmxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5mby10YWJsZV9CN0pZVSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMi41OyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMUIyNjdGO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmhvdmVyIHtcXG4gICAgY29sb3I6ICMyZTQwZDI7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6YWN0aXZlIHtcXG4gICAgY29sb3I6ICMwOTBkMmI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjogXCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcblx0XCJpbmZvLXRhYmxlXCI6IFwiaW5mby10YWJsZV9CN0pZVVwiLFxuXHRcImFjdGlvbnNcIjogXCJhY3Rpb25zX3BSX056XCIsXG5cdFwiYWN0aW9uXCI6IFwiYWN0aW9uXzNETEt5XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4vQ29udGVudFBhZ2UnXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcblxudHlwZSBQYWdpbmF0aW9uTGluayA9IHtcbiAgcGFnZTogbnVtYmVyXG4gIHVybDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBrZXk/OiBzdHJpbmdcbiAgfVxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBwYWdpbmF0aW9uTGlua3M6IHtcbiAgICBuZXh0PzogUGFnaW5hdGlvbkxpbmtcbiAgICBsYXN0OiBQYWdpbmF0aW9uTGlua1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0XG4gICAgICA/IG5leHQucGFnZSAtIDFcbiAgICAgIDogYWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgYWxsPXthbGx9XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICB1cmw9e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHJvdXRpbmcucXVlcnkgfHwge31cbiAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzXG5cbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMucGFnaW5hdGlvbkxpbmtTZWxlY3RvcihuYW1lLCBrZXkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge31cbikoQ29udGVudFBhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKVxuXG4vKiDmoJflrZAg8J+MsFxuICogcmFuZ2UgPSAyXG4gKiB8IHJhbmdlIHwgY3VycmVudCB8IHJhbmdnZSB8XG4gKiAgIDIsIDMsICAgICBbNF0sICAgICA1LCA2XG4gKi9cblxudHlwZSBPamIgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGw6IG51bWJlclxuICBjdXJyZW50OiBudW1iZXJcbiAgcmFuZ2U/OiBudW1iZXIgLy8gZGVmYXVsdCAzXG4gIHVybDoge1xuICAgIHBhdGhuYW1lOiBzdHJpbmdcbiAgICBxdWVyeTogT2JqZWN0XG4gIH1cbiAgdXJsU3R5bGU/OiAncXVlcnknIHwgJ3NsYXNoJ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHBhcnNlVXJsKHBhdGhuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBPYmplY3QsIHBhZ2VOdW0pIHtcbiAgICBsZXQgdXJsU3R5bGUgPSB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA/IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgIDogJ3F1ZXJ5J1xuXG4gICAgaWYgKHVybFN0eWxlID09PSAncXVlcnknKSB7XG4gICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VGb3JtRGF0YShfLm9taXQocXVlcnksIFsncGFnZSddKSlcbiAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YFxuICAgIH1cblxuICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZUZvcm1EYXRhKHF1ZXJ5KVxuICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucHJvcHMucmFuZ2UgPyB0aGlzLnByb3BzLnJhbmdlIDogM1xuICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCBhcyBhbnkpIC0gMVxuICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZVxuICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2VcbiAgICBsZXQgbGVmdFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcGFnZXMgPSBbXVxuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLnVybFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmFsbCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxsIOW/hemhu+S4uiBudW1iZXIg57G75Z6L77yBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YClcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKVxuICAgIH1cblxuICAgIGlmIChyYW5nZSAqIDIgKyAxID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgLy8g5oC76ZW/5bqm5bCP5LqOIHJhbmdlIOebtOW+hFxuICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpITnkIblj7PkvqfmuqLlh7pcbiAgICAgIGlmIChyYW5nZUVuZEluZGV4ID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByYW5nZVN0YXJ0SW5kZXg7IGkgPD0gcmFuZ2VFbmRJbmRleDsgaSsrKSB7XG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChbe1xuICAgICAgICBwYWdlTnVtOiBpICsgMSxcbiAgICAgICAgaXNDdXJyZW50OiBpID09PSBjdXJyZW50SW5kZXhcbiAgICAgIH1dKVxuICAgIH1cblxuICAgIC8vIGFkZCBzcHJlYWRcbiAgICBpZiAobGVmdFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKVxuICAgIH1cblxuICAgIGlmIChyaWdodFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnaW5hdG9yXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW0tLWN1cnJlbnRcIj57cGFnZS5wYWdlTnVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1zcHJlYWRcIj4uLi48L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW1cIj48TGluayB0bz17dGhpcy5wYXJzZVVybCh1cmwucGF0aG5hbWUsIHVybC5xdWVyeSwgcGFnZS5wYWdlTnVtKSB9PntwYWdlLnBhZ2VOdW19PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Utc3ByZWFkXzJJTkhVLCAucGFnZS1udW1fMm9QUVUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtaW4td2lkdGg6IDM3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2luYXRvcl8xUkhBbSB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbi5wYWdlLXNwcmVhZF8ySU5IVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgM3B4OyB9XFxuICAucGFnZS1udW1fMm9QUVUgYTpob3ZlciwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS1zcHJlYWRcIjogXCJwYWdlLXNwcmVhZF8ySU5IVVwiLFxuXHRcInBhZ2UtbnVtXCI6IFwicGFnZS1udW1fMm9QUVVcIixcblx0XCJwYWdlLW51bS0tY3VycmVudFwiOiBcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydCAqIGZyb20gJy4vbGlmZWNpcmNsZSdcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyDmo4Dmn6Ugc3RvcmUg6YeM6Z2i55qEIHJvdXRpbmcg5piv5ZCm5Y+Y5YyWXG5leHBvcnQgY29uc3Qgb25Sb3V0aW5nQ2hhbmdlID0gZm4gPT4gKG5leHRQcm9wcywgY3VycmVudFByb3BzKSA9PiB7XG4gIGlmICghY3VycmVudFByb3BzLnJvdXRpbmcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdyb3V0aW5nIOmcgOimgeeOsOWcqOe7hOS7tiBwcm9wcyDph4zpnaLlo7DmmI7vvIEnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgaGFzUGF0aFBhcmFtQ2hhbmdlZCA9ICFfLmlzRXF1YWwobmV4dFByb3BzLnJvdXRpbmcsIGN1cnJlbnRQcm9wcy5yb3V0aW5nKVxuXG4gIGlmIChoYXNQYXRoUGFyYW1DaGFuZ2VkKSB7XG4gICAgZm4obmV4dFByb3BzLnJvdXRpbmcpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2hlbHBlcnMvbGlmZWNpcmNsZS50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9tZW50XCJcbiAqKiBtb2R1bGUgaWQgPSA1NDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL01hbmFnZUJvb2tzLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gNTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==