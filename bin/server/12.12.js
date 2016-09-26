exports.ids = [12];
exports.modules = {

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.common = exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(450);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(451);
	
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

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = exports.paginationLinkSelector = undefined;
	
	var _reselect = __webpack_require__(451);
	
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

/***/ 451:
/***/ function(module, exports) {

	module.exports = require("reselect");

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(240);
	
	var _DocContainer = __webpack_require__(237);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(529);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _apis = __webpack_require__(403);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _selectors = __webpack_require__(449);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(248);
	
	var _reactCssModules = __webpack_require__(286);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ContentPage = __webpack_require__(533);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(539);
	
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
	
	var styles = __webpack_require__(541);
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

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(530);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(284);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(531);
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

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(532);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(534);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(535);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(240);
	
	var _selectors = __webpack_require__(449);
	
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

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(536);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(74);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(72);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(255);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(537);
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

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(538);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
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

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lifecircle = __webpack_require__(540);
	
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

/***/ 540:
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

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(542);
	    var insertCss = __webpack_require__(290);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(289)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCI/YTkwMSoiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzP2E4NzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvaGVscGVycy9saWZlY2lyY2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3M/NTFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHTzs7QUEwRVA7Ozs7Ozs7Ozs7QUE3RXlDOztLQUt6Qzs7OztBQUFPLEtBQThCOytFQUNYO0FBQ1YsdUJBQWU7QUFDYix5QkFBZTtBQUNkLDBCQUNmO01BSnFCLENBRHNDO2dCQVMvRDtNQUhPO0VBTnNDO0FBU3RDLEtBQTBCO2lEQUFvQztBQUN2RCx1QkFBVztBQUNULHlCQUFXO0FBQ1YsMEJBR2pCO01BTm9FO0VBQTNCO0FBTWxDLEtBQXlCO2lEQUFvQztBQUN0RCx1QkFBUztBQUNQLHlCQUFTO0FBQ1IsMEJBR2pCO01BTm1FO0VBQTNCO0FBTWpDLEtBQTBCO1lBQTBCLDhCQUNqQyx5QkFBTztBQUV2QixnQkFBTSxNQUFJO29CQUFVO0FBQ3BCLHVCQUFNLEtBQU07QUFDWCx3QkFBTSxLQUFHO0FBQ0osNkJBQUU7QUFDQyxrQ0FBTSxLQUFRO0FBQ3BCLDRCQUFNLEtBQU8sT0FBTTtBQUNsQiw2QkFBTSxLQUFPLE9BQUssS0FNaEM7OztVQVo2QjtNQUR0QjtFQUZrQztBQWVsQyxLQUFzQjtZQUEwQiw4QkFDakMscUJBQU87QUFFbkIsZ0JBQU0sTUFBSTtvQkFBVTtBQUNwQix1QkFBTSxLQUFLO0FBQ1Ysd0JBQU0sS0FLakI7O1VBUDZCO01BRHRCO0VBRjhCO0FBVTlCLEtBQTBCO1lBQTBCLDhCQUN0QyxvQkFBTztBQUVsQixnQkFBTSxNQUFJO29CQUFVO0FBQ3BCLHVCQUFNLEtBQU07QUFDWCx3QkFBTSxLQUtqQjs7VUFQNkI7TUFEdEI7RUFGa0M7QUFV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ZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyB9IGZyb20gJy4vY29tbW9uJ1xuaW1wb3J0ICogYXMgY29tbW9uIGZyb20gJy4vY29tbW9uJ1xuXG5leHBvcnQgY29uc3QgcXVlcnlEb3ViYW5Cb29rc1NlbGVjdG9yID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgICBlbnRpdGllc05hbWU6ICdkb3ViYW5Cb29rcycsXG4gICAgcGFnaW5hdGlvbk5hbWU6ICdkb3ViYW5Cb29rcycsXG4gICAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXV0aG9yc1NlbGVjdG9yID0gcXVlcnkgPT4gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICdhdXRob3JzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICdhdXRob3JzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IHNlYXJjaEJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICdib29rcycsXG4gIHBhZ2luYXRpb25RdWVyeTogcXVlcnlcbn0pXG5cbmV4cG9ydCBjb25zdCBkb3ViYW5Cb29rc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBib29rcyA9PiB7XG4gICAgcmV0dXJuIGJvb2tzLm1hcChib29rID0+ICh7XG4gICAgICBuYW1lOiBib29rLnRpdGxlLFxuICAgICAgdmFsdWU6IGJvb2suaWQsXG4gICAgICBhZGRpdGlvbmFsOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiBib29rLnN1bW1hcnksXG4gICAgICAgIGNvdmVyOiBib29rLmltYWdlcy5sYXJnZSxcbiAgICAgICAgYXV0aG9yOiBib29rLmF1dGhvci5qb2luKCcsICcpXG4gICAgICB9XG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGF1dGhvcnNBc09wdGlvbnMgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgcXVlcnlBdXRob3JzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICB2YWx1ZTogaXRlbS5pZFxuICAgIH0pKVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBib29rc1NlYXJjaEFzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWFyY2hCb29rc1NlbGVjdG9yKHF1ZXJ5KSxcbiAgaXRlbXMgPT4ge1xuICAgIHJldHVybiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2Jvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgICBwYWdpbmF0aW9uS2V5OiAnZGVmYXVsdCdcbiAgfSksXG4gIGJvb2tzID0+IGJvb2tzXG4pXG5cbmV4cG9ydCBjb25zdCB1c2Vyc1NlbGVjdG9yID0gc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICBlbnRpdGllc05hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25OYW1lOiAndXNlcnMnLFxuICBwYWdpbmF0aW9uS2V5OiAnZGVmYXVsdCdcbn0pXG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJ1xuZXhwb3J0IHsgY29tbW9uIH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9pbmRleC50c1xuICoqLyIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IGVudGl0aWVzU2VsZWN0b3IgPSBuYW1lID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLmVudGl0aWVzW25hbWVdIHx8IHt9XG59XG5jb25zdCBwYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBgJHtuYW1lfS4ke2tleX0uaWRzYCwgW10pXG59XG5leHBvcnQgY29uc3QgcGFnaW5hdGlvbkxpbmtTZWxlY3RvciA9IChuYW1lLCBrZXkgPSAnZGVmYXVsdCcpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8ucGljayhfLmdldChzdGF0ZS5wYWdpbmF0aW9uLCBgJHtuYW1lfS4ke2tleX1gLCB7fSksIFsnbmV4dCcsICdsYXN0J10pXG59XG5jb25zdCBxdWVyeVBhZ2luYXRpb25TZWxlY3RvciA9IChuYW1lLCBxdWVyeSkgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgW25hbWUsICdxdWVyeScsIHF1ZXJ5LCAnaWRzJ10sIFtdKVxufVxuXG50eXBlIFNlbGVjdFBhZ2luYXRlZEVudGl0aWVzT3B0aW9ucyA9IHtcbiAgZW50aXRpZXNOYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbk5hbWU6IHN0cmluZ1xuICBwYWdpbmF0aW9uS2V5Pzogc3RyaW5nXG4gIHBhZ2luYXRpb25RdWVyeT86IHN0cmluZ1xufVxuZXhwb3J0IGNvbnN0IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzID0gKG9wdGlvbnM6IFNlbGVjdFBhZ2luYXRlZEVudGl0aWVzT3B0aW9ucykgPT4ge1xuICBjb25zdCB7ZW50aXRpZXNOYW1lLCBwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSwgcGFnaW5hdGlvblF1ZXJ5fSA9IG9wdGlvbnNcbiAgbGV0IHBhZ2lTZWxlY3RvcjogKHN0YXRlOiBhbnkpID0+IGFueVtdXG5cbiAgaWYgKHBhZ2luYXRpb25RdWVyeSkge1xuICAgIHBhZ2lTZWxlY3RvciA9IHF1ZXJ5UGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uUXVlcnkpXG4gIH0gZWxzZSB7XG4gICAgcGFnaVNlbGVjdG9yID0gcGFnaW5hdGlvblNlbGVjdG9yKHBhZ2luYXRpb25OYW1lLCBwYWdpbmF0aW9uS2V5KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGVudGl0aWVzU2VsZWN0b3IoZW50aXRpZXNOYW1lKSxcbiAgICBwYWdpU2VsZWN0b3IsXG4gICAgKGVudGl0aWVzLCBpZHMpID0+IHtcbiAgICAgIHJldHVybiBpZHMubWFwKGlkID0+IGVudGl0aWVzW2lkXSlcbiAgICB9XG4gIClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbGVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVzZWxlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDQ1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAyIDMgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCBhcGlzIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgZmV0Y2hCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250ZW50UGFnZSdcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTWFuYWdlQm9va3MuY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBmZXRjaEJvb2tzPzogKGRhdGE/OiBmZXRjaEJvb2tzKSA9PiB2b2lkXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIGNsb3NlQ29uZmlybU1vZGFsOiBhbnlcbiAgcm91dGluZzogYW55XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgTWFuYWdlQm9va3MgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIHN0YXRpYyBmZXRjaERhdGEoe3N0b3JlLCBxdWVyeX0pIHtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hCb29rcyh7XG4gICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGlzLmRlbGV0ZUJvb2soaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ29uZmlybU1vZGFsKClcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKHsgbWVyZ2U6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGxvYWRCb29rcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3Moe1xuICAgICAgcGFnZTogcHJvcHMucm91dGluZy5xdWVyeS5wYWdlIHx8ICcxJyxcbiAgICAgIG1lcmdlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICAgIHRoaXMubG9hZEJvb2tzKG5leHRQcm9wcylcbiAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRCb29rcygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIuS5puexjeeuoeeQhlwiIGJvZHlDbGFzcz1cIm1hbmFnZS1ib29rc1wiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmZvVGFibGVcbiAgICAgICAgICAgIGRhdGE9e2Jvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIGF1dGhvcnM6IGl0ZW0uYXV0aG9ycyA/IGl0ZW0uYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIDogJ+acquefpeS9nOiAhSdcbiAgICAgICAgICAgIH0pKSkgfVxuICAgICAgICAgICAgaGVhZGVyPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUaXRsZSdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ2RhdGVDcmVhdGVkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGF0ZSBjcmVhdGVkJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnYXV0aG9ycycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0F1dGhvcihzKSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIGFjdGlvbnM9e1t7XG4gICAgICAgICAgICAgIG5hbWU6ICdEZWxldGUnLFxuICAgICAgICAgICAgICBmbjogcm93ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJvb2socm93LmlkLCByb3cudGl0bGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgb3BlcmF0aW9uTGFiZWw9XCJBY3Rpb25zXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGVudFBhZ2U+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGJvb2tMaXN0TmV3ZXN0OiBzZWxlY3RvcnMuYm9va3NTZWxlY3RvcihzdGF0ZSksXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCB7fT4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaEJvb2tzLCBzZW5kTm90aWZpY2F0aW9uLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCB9XG4pKE1hbmFnZUJvb2tzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi9JbmZvVGFibGUnXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbmZvVGFibGUuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBoZWFkZXI/OiB7XG4gICAga2V5OiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICB9W11cbiAgZGF0YTogYW55W11cbiAgLy8gdG9kb1xuICBlbmFibGVUb29sdGlwPzogYm9vbGVhblxuICBzdHlsZT86IGFueVxuICBhY3Rpb25zPzoge1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gICAgZm46IChyb3dEYXRhOiBhbnkpID0+IHZvaWRcbiAgfVtdXG4gIG9wZXJhdGlvbkxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgSW5mb1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGhlYWRlciwgZGF0YSwgZW5hYmxlVG9vbHRpcCwgc3R5bGUsIGFjdGlvbnMsIG9wZXJhdGlvbkxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgYWN0aW9ucyA9IGFjdGlvbnMgfHwgW11cblxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICBoZWFkZXIgPSAoZGF0YS5sZW5ndGggIT09IDAgJiYgXy5rZXlzKGRhdGFbMF0pLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgfVxuICAgICAgfSkpIHx8IFtdXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnaW5mby10YWJsZSc6IHRydWUsXG4gICAgICAnaW5mby10YWJsZS0tbm8taGVhZGVyJzogIWhlYWRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGUgfHwge319PlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PntpdGVtLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+eyBvcGVyYXRpb25MYWJlbCB8fCAn5pON5L2cJyB9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiA8dHI+PC90cj5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF8ubWFwKGhlYWRlciwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXl9Pntyb3dbaXRlbS5rZXldICYmIHJvd1tpdGVtLmtleV0udG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4OyB9XFxuXFxuLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzFCMjY3RjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTpob3ZlciB7XFxuICAgIGNvbG9yOiAjMmU0MGQyOyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjMDkwZDJiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6IFwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXG5cdFwiaW5mby10YWJsZVwiOiBcImluZm8tdGFibGVfQjdKWVVcIixcblx0XCJhY3Rpb25zXCI6IFwiYWN0aW9uc19wUl9OelwiLFxuXHRcImFjdGlvblwiOiBcImFjdGlvbl8zRExLeVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJ1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5cbnR5cGUgUGFnaW5hdGlvbkxpbmsgPSB7XG4gIHBhZ2U6IG51bWJlclxuICB1cmw6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAga2V5Pzogc3RyaW5nXG4gIH1cbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgcGFnaW5hdGlvbkxpbmtzOiB7XG4gICAgbmV4dD86IFBhZ2luYXRpb25MaW5rXG4gICAgbGFzdDogUGFnaW5hdGlvbkxpbmtcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcm91dGluZywgcGFnaW5hdGlvbkxpbmtzOiB7IG5leHQsIGxhc3QgfSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGFsbCA9IGxhc3QgJiYgbGFzdC5wYWdlIHx8IDFcbiAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICA6IGFsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFBhZ2luYXRvclxuICAgICAgICAgIGFsbD17YWxsfVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgdXJsPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGluZy5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG5hbWUsIGtleSB9IH0gPSBvd25Qcm9wc1xuXG4gIHJldHVybiB7XG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIHx8IHt9LFxuICAgIHBhZ2luYXRpb25MaW5rczogc2VsZWN0b3JzLnBhZ2luYXRpb25MaW5rU2VsZWN0b3IobmFtZSwga2V5KShzdGF0ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHt9XG4pKENvbnRlbnRQYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4vUGFnaW5hdG9yJ1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1BhZ2luYXRvci5zY3NzJylcblxuLyog5qCX5a2QIPCfjLBcbiAqIHJhbmdlID0gMlxuICogfCByYW5nZSB8IGN1cnJlbnQgfCByYW5nZ2UgfFxuICogICAyLCAzLCAgICAgWzRdLCAgICAgNSwgNlxuICovXG5cbnR5cGUgT2piID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsOiBudW1iZXJcbiAgY3VycmVudDogbnVtYmVyXG4gIHJhbmdlPzogbnVtYmVyIC8vIGRlZmF1bHQgM1xuICB1cmw6IHtcbiAgICBwYXRobmFtZTogc3RyaW5nXG4gICAgcXVlcnk6IE9iamVjdFxuICB9XG4gIHVybFN0eWxlPzogJ3F1ZXJ5JyB8ICdzbGFzaCdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBwYXJzZVVybChwYXRobmFtZTogc3RyaW5nLCBxdWVyeTogT2JqZWN0LCBwYWdlTnVtKSB7XG4gICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA6ICdxdWVyeSdcblxuICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlRm9ybURhdGEoXy5vbWl0KHF1ZXJ5LCBbJ3BhZ2UnXSkpXG4gICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWBcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VGb3JtRGF0YShxdWVyeSlcbiAgICByZXR1cm4gYCR7cGF0aG5hbWV9L3BhZ2UvJHtwYWdlTnVtfT8ke3F1ZXJ5UGFydH1gXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDNcbiAgICBjb25zdCB0b3RhbFJhbmdlRW5kSW5kZXggPSB0aGlzLnByb3BzLmFsbCAtIDFcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnQgYXMgYW55KSAtIDFcbiAgICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gcmFuZ2VcbiAgICBsZXQgcmFuZ2VFbmRJbmRleCA9IGN1cnJlbnRJbmRleCArIHJhbmdlXG4gICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCByaWdodFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHBhZ2VzID0gW11cbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmxcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpXG4gICAgfVxuXG4gICAgLy8g6aqM6K+BXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGDpobXnoIHlv4XpobvkuLrmlbDlrZfvvIzljbTlvpfliLAgJHt0eXBlb2YgY3VycmVudEluZGV4fWApXG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZXggPiByYW5nZUVuZEluZGV4IHx8IGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mhteeggeS4jeiDveWkp+S6juaJgOaciemhtemdouaVsOebruaIluWwj+S6jiAx77yBJylcbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXggLSAocmFuZ2UgKiAyICsgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHtcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgICAgICByYW5nZUVuZEluZGV4ID0gcmFuZ2UgKiAyICsgMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFNwcmVhZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICB9XSlcbiAgICB9XG5cbiAgICAvLyBhZGQgc3ByZWFkXG4gICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gc3BkLmNvbmNhdChwYWdlcylcbiAgICB9XG5cbiAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiB0b3RhbFJhbmdlRW5kSW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KHNwZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5hbGwgIT09IDEgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInBhZ2luYXRvclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtLS1jdXJyZW50XCI+e3BhZ2UucGFnZU51bX08L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2Utc3ByZWFkXCI+Li4uPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtXCI+PExpbmsgdG89e3RoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfT57cGFnZS5wYWdlTnVtfTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUGFnaW5hdG9yLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXNwcmVhZF8ySU5IVSwgLnBhZ2UtbnVtXzJvUFFVIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWluLXdpZHRoOiAzN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdpbmF0b3JfMVJIQW0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4ucGFnZS1zcHJlYWRfMklOSFUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBhZ2UtbnVtXzJvUFFVLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDNweDsgfVxcbiAgLnBhZ2UtbnVtXzJvUFFVIGE6aG92ZXIsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2Utc3ByZWFkXCI6IFwicGFnZS1zcHJlYWRfMklOSFVcIixcblx0XCJwYWdlLW51bVwiOiBcInBhZ2UtbnVtXzJvUFFVXCIsXG5cdFwicGFnZS1udW0tLWN1cnJlbnRcIjogXCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFxuXHRcInBhZ2luYXRvclwiOiBcInBhZ2luYXRvcl8xUkhBbVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2xpZmVjaXJjbGUnXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvaGVscGVycy9pbmRleC50c1xuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8g5qOA5p+lIHN0b3JlIOmHjOmdoueahCByb3V0aW5nIOaYr+WQpuWPmOWMllxuZXhwb3J0IGNvbnN0IG9uUm91dGluZ0NoYW5nZSA9IGZuID0+IChuZXh0UHJvcHMsIGN1cnJlbnRQcm9wcykgPT4ge1xuICBpZiAoIWN1cnJlbnRQcm9wcy5yb3V0aW5nKSB7XG4gICAgY29uc29sZS5lcnJvcigncm91dGluZyDpnIDopoHnjrDlnKjnu4Tku7YgcHJvcHMg6YeM6Z2i5aOw5piO77yBJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGhhc1BhdGhQYXJhbUNoYW5nZWQgPSAhXy5pc0VxdWFsKG5leHRQcm9wcy5yb3V0aW5nLCBjdXJyZW50UHJvcHMucm91dGluZylcblxuICBpZiAoaGFzUGF0aFBhcmFtQ2hhbmdlZCkge1xuICAgIGZuKG5leHRQcm9wcy5yb3V0aW5nKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9oZWxwZXJzL2xpZmVjaXJjbGUudHNcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL01hbmFnZUJvb2tzLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9wb3N0Y3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MuY3NzXG4gKiogbW9kdWxlIGlkID0gNTQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==