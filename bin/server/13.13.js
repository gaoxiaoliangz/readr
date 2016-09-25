exports.ids = [13];
exports.modules = {

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.usersSelector = exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
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
	        return {
	            next: _lodash2.default.get(state.pagination, name + '.' + key + '.next', []),
	            last: _lodash2.default.get(state.pagination, name + '.' + key + '.last', [])
	        };
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
	
	var _react = __webpack_require__(110);
	
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
	                    return _react2.default.createElement("td", { key: key }, row[item.key].toString());
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

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(276);
	
	var _actions = __webpack_require__(78);
	
	var _InfoTable = __webpack_require__(529);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _selectors = __webpack_require__(449);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _DocContainer = __webpack_require__(273);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _ContentPage = __webpack_require__(537);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchUsers();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var users = _props.users;
	            var userPaginationLinks = _props.userPaginationLinks;
	
	            return _react2.default.createElement(_DocContainer2.default, { title: "用户管理" }, _react2.default.createElement(_ContentPage2.default, { pagination: userPaginationLinks }, _react2.default.createElement(_InfoTable2.default, { data: users })));
	        }
	    }]);
	
	    return ManageUsers;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        users: selectors.usersSelector(state),
	        userPaginationLinks: selectors.paginationLinkSelector('users')(state)
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(ManageUsers);

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(538);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(539);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(276);
	
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
	            var _props$pagination = _props.pagination;
	            var next = _props$pagination.next;
	            var last = _props$pagination.last;
	
	            return _react2.default.createElement("div", null, children, _react2.default.createElement(_Paginator2.default, { all: last.page || 1, current: next.page - 1 || 1, url: {
	                    pathname: routing.pathname,
	                    query: routing.query || {}
	                } }));
	        }
	    }]);
	
	    return ContentPage;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        routing: state.routing.locationBeforeTransitions
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(540);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(110);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(108);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(85);
	
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
	
	var styles = __webpack_require__(541);
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
	                    return _react2.default.createElement("li", { key: index, className: "page-spread" }, "...");
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
	exports.push([module.id, ".paginator_1RHAm ul li {\n  display: inline-block; }\n\n.page-num_2oPQU {\n  background: #ddd; }\n\n.page-num--current_1Y2mE {\n  background: #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"paginator": "paginator_1RHAm",
		"page-num": "page-num_2oPQU",
		"page-num--current": "page-num--current_1Y2mE"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIqIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvY29tbW9uLnRzPzMzMzYqIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlc2VsZWN0XCI/YTkwMSoiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzP2FiODEiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3g/Y2FkNyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz84Y2FkIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvTWFuYWdlVXNlcnMudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3M/ZjVkYyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3MiXSwi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IiwiZmlsZSI6IjEzLjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzIH0gZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBjb25zdCBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgcXVlcnlBdXRob3JzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IGRvdWJhbkJvb2tzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGJvb2tzID0+IHtcbiAgICByZXR1cm4gYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICB2YWx1ZTogYm9vay5pZCxcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgY292ZXI6IGJvb2suaW1hZ2VzLmxhcmdlLFxuICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYXV0aG9yc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeUF1dGhvcnNTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VhcmNoQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlYXJjaEJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0IGNvbnN0IHVzZXJzU2VsZWN0b3IgPSBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ3VzZXJzJyxcbiAgcGFnaW5hdGlvbk5hbWU6ICd1c2VycycsXG4gIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xufSlcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuZXhwb3J0IGNvbnN0IHBhZ2luYXRpb25MaW5rU2VsZWN0b3IgPSAobmFtZSwga2V5ID0gJ2RlZmF1bHQnKSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmV4dDogXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lm5leHRgLCBbXSksXG4gICAgbGFzdDogXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmxhc3RgLCBbXSlcbiAgfVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXNlbGVjdFwiXG4gKiogbW9kdWxlIGlkID0gNDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTIgMTMgMTQgMTVcbiAqKi8iLCJpbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4vSW5mb1RhYmxlJ1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaGVhZGVyPzoge1xuICAgIGtleTogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgfVtdXG4gIGRhdGE6IGFueVtdXG4gIC8vIHRvZG9cbiAgZW5hYmxlVG9vbHRpcD86IGJvb2xlYW5cbiAgc3R5bGU/OiBhbnlcbiAgYWN0aW9ucz86IHtcbiAgICBuYW1lOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICAgIGZuOiAocm93RGF0YTogYW55KSA9PiB2b2lkXG4gIH1bXVxuICBvcGVyYXRpb25MYWJlbD86IHN0cmluZyB8IEpTWC5FbGVtZW50XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEluZm9UYWJsZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBoZWFkZXIsIGRhdGEsIGVuYWJsZVRvb2x0aXAsIHN0eWxlLCBhY3Rpb25zLCBvcGVyYXRpb25MYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIGFjdGlvbnMgPSBhY3Rpb25zIHx8IFtdXG5cbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgaGVhZGVyID0gKGRhdGEubGVuZ3RoICE9PSAwICYmIF8ua2V5cyhkYXRhWzBdKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbmFtZToga2V5XG4gICAgICAgIH1cbiAgICAgIH0pKSB8fCBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2luZm8tdGFibGUnOiB0cnVlLFxuICAgICAgJ2luZm8tdGFibGUtLW5vLWhlYWRlcic6ICFoZWFkZXJcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlIHx8IHt9fT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57aXRlbS5uYW1lfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnsgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogPHRyPjwvdHI+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT57cm93W2l0ZW0ua2V5XS50b1N0cmluZygpIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4OyB9XFxuXFxuLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzFCMjY3RjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTpob3ZlciB7XFxuICAgIGNvbG9yOiAjMmU0MGQyOyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjMDkwZDJiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6IFwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXG5cdFwiaW5mby10YWJsZVwiOiBcImluZm8tdGFibGVfQjdKWVVcIixcblx0XCJhY3Rpb25zXCI6IFwiYWN0aW9uc19wUl9OelwiLFxuXHRcImFjdGlvblwiOiBcImFjdGlvbl8zRExLeVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZldGNoVXNlcnM6IChvcHRpb25zPzogZmV0Y2hVc2VycykgPT4gdm9pZFxuICB1c2VyczogYW55W11cbiAgdXNlclBhZ2luYXRpb25MaW5rczogYW55XG59XG5cbmNsYXNzIE1hbmFnZVVzZXJzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7dXNlcnMsIHVzZXJQYWdpbmF0aW9uTGlua3N9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLnlKjmiLfnrqHnkIZcIj5cbiAgICAgICAgPENvbnRlbnRQYWdlXG4gICAgICAgICAgcGFnaW5hdGlvbj17dXNlclBhZ2luYXRpb25MaW5rc31cbiAgICAgICAgICA+XG4gICAgICAgICAgPEluZm9UYWJsZVxuICAgICAgICAgICAgZGF0YT17dXNlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRlbnRQYWdlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyczogc2VsZWN0b3JzLnVzZXJzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIHVzZXJQYWdpbmF0aW9uTGlua3M6IHNlbGVjdG9ycy5wYWdpbmF0aW9uTGlua1NlbGVjdG9yKCd1c2VycycpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBmZXRjaFVzZXJzIH1cbikoTWFuYWdlVXNlcnMgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeFxuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJ1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxudHlwZSBQYWdpbmF0aW9uTGluayA9IHtcbiAgcGFnZTogbnVtYmVyXG4gIHVybDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBuZXh0OiBQYWdpbmF0aW9uTGlua1xuICAgIGxhc3Q6IFBhZ2luYXRpb25MaW5rXG4gIH1cbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbn1cblxuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJvdXRpbmcsIHBhZ2luYXRpb246IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgYWxsPXtsYXN0LnBhZ2UgfHwgMX1cbiAgICAgICAgICBjdXJyZW50PXtuZXh0LnBhZ2UgLSAxIHx8IDF9XG4gICAgICAgICAgdXJsPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGluZy5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge31cbikoQ29udGVudFBhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKVxuXG4vKiDmoJflrZAg8J+MsFxuICogcmFuZ2UgPSAyXG4gKiB8IHJhbmdlIHwgY3VycmVudCB8IHJhbmdnZSB8XG4gKiAgIDIsIDMsICAgICBbNF0sICAgICA1LCA2XG4gKi9cblxudHlwZSBPamIgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGw6IG51bWJlclxuICBjdXJyZW50OiBudW1iZXJcbiAgcmFuZ2U/OiBudW1iZXIgLy8gZGVmYXVsdCAzXG4gIHVybDoge1xuICAgIHBhdGhuYW1lOiBzdHJpbmdcbiAgICBxdWVyeTogT2JqZWN0XG4gIH1cbiAgdXJsU3R5bGU/OiAncXVlcnknIHwgJ3NsYXNoJ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHBhcnNlVXJsKHBhdGhuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBPYmplY3QsIHBhZ2VOdW0pIHtcbiAgICBsZXQgdXJsU3R5bGUgPSB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA/IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgIDogJ3F1ZXJ5J1xuXG4gICAgaWYgKHVybFN0eWxlID09PSAncXVlcnknKSB7XG4gICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VGb3JtRGF0YShfLm9taXQocXVlcnksIFsncGFnZSddKSlcbiAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YFxuICAgIH1cblxuICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZUZvcm1EYXRhKHF1ZXJ5KVxuICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucHJvcHMucmFuZ2UgPyB0aGlzLnByb3BzLnJhbmdlIDogM1xuICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCBhcyBhbnkpIC0gMVxuICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZVxuICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2VcbiAgICBsZXQgbGVmdFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcGFnZXMgPSBbXVxuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLnVybFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmFsbCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxsIOW/hemhu+S4uiBudW1iZXIg57G75Z6L77yBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YClcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKVxuICAgIH1cblxuICAgIGlmIChyYW5nZSAqIDIgKyAxID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgLy8g5oC76ZW/5bqm5bCP5LqOIHJhbmdlIOebtOW+hFxuICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpITnkIblj7PkvqfmuqLlh7pcbiAgICAgIGlmIChyYW5nZUVuZEluZGV4ID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByYW5nZVN0YXJ0SW5kZXg7IGkgPD0gcmFuZ2VFbmRJbmRleDsgaSsrKSB7XG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChbe1xuICAgICAgICBwYWdlTnVtOiBpICsgMSxcbiAgICAgICAgaXNDdXJyZW50OiBpID09PSBjdXJyZW50SW5kZXhcbiAgICAgIH1dKVxuICAgIH1cblxuICAgIC8vIGFkZCBzcHJlYWRcbiAgICBpZiAobGVmdFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKVxuICAgIH1cblxuICAgIGlmIChyaWdodFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnaW5hdG9yXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW0tLWN1cnJlbnRcIj57cGFnZS5wYWdlTnVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGFnZS1zcHJlYWRcIj4uLi48L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW1cIj48TGluayB0bz17dGhpcy5wYXJzZVVybCh1cmwucGF0aG5hbWUsIHVybC5xdWVyeSwgcGFnZS5wYWdlTnVtKSB9PntwYWdlLnBhZ2VOdW19PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDU0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2luYXRvcl8xUkhBbSB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCIsXG5cdFwicGFnZS1udW1cIjogXCJwYWdlLW51bV8yb1BRVVwiLFxuXHRcInBhZ2UtbnVtLS1jdXJyZW50XCI6IFwicGFnZS1udW0tLWN1cnJlbnRfMVkybUVcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNTQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==