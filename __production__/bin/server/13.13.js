exports.ids = [13];
exports.modules = {

/***/ 286:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(398);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(269);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(94);
	
	var _ContentPage = __webpack_require__(402);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(56);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(408);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _FileUploader = __webpack_require__(409);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _form = __webpack_require__(213);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, (ManageBooks.__proto__ || Object.getPrototypeOf(ManageBooks)).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: 'deleteBook',
	        value: function deleteBook(id, bookName) {
	            var _this2 = this;
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: '\u5C06\u5220\u9664\u300A' + bookName + '\u300B',
	                onConfirm: function onConfirm() {
	                    _api2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeConfirmModal();
	                        _this2.props.sendNotification('删除成功！');
	                        _this2.props.removeEntity('books', id);
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'loadBooks',
	        value: function loadBooks() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	            this.props.loadBooks({
	                page: props.routing.query.page || '1'
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var _this3 = this;
	
	            _helpers2.default.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this3.loadBooks(nextProps);
	            })(nextProps, this.props);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadBooks();
	            this.props.loadUsers();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "书籍管理", bodyClass: "manage-books" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'books'
	                } }, _react2.default.createElement(_FileUploader2.default, { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
	                    _this4.loadBooks();
	                }, onError: function onError(error) {
	                    _this4.props.sendNotification(error.message, 'error');
	                } }, _react2.default.createElement(_form.Button, { color: "blue" }, "添加书籍")), _react2.default.createElement(_InfoTable2.default, { data: bookListNewest.map(function (item) {
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
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var query = _ref.query;
	
	            return store.dispatch((0, _actions.loadBooks)({
	                page: query.page
	            }));
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    var currentPage = selectors.common.currentPage('books')(state);
	    return {
	        // 如果第一个参数传 null 会覆盖默认参数
	        bookListNewest: selectors.books(undefined, currentPage)(state),
	        routing: state.routing.locationBeforeTransitions
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal, removeEntity: _actions.removeEntity, loadUsers: _actions.loadUsers })(ManageBooks);

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(399);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(400);
	var InfoTable = function (_Component) {
	    _inherits(InfoTable, _Component);
	
	    function InfoTable(props) {
	        _classCallCheck(this, InfoTable);
	
	        return _possibleConstructorReturn(this, (InfoTable.__proto__ || Object.getPrototypeOf(InfoTable)).call(this, props));
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
	            }), actions.length !== 0 && _react2.default.createElement("th", { styleName: "actions" }, operationLabel || '操作')) : _react2.default.createElement("tr", null), data.map(function (row, index) {
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

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(401);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-table--no-header_2v3xx {\n  position: relative; }\n\n.info-table_B7JYU {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_B7JYU > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_B7JYU > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n      padding: 0 10px;\n      max-width: 250px; }\n\n.actions_pR_Nz {\n  min-width: 80px; }\n  .actions_pR_Nz .action_3DLKy {\n    cursor: pointer;\n    color: #1B267F;\n    display: inline-block; }\n    .actions_pR_Nz .action_3DLKy:hover {\n      color: #2e40d2; }\n    .actions_pR_Nz .action_3DLKy:active {\n      color: #090d2b; }\n", ""]);
	
	// exports
	exports.locals = {
		"info-table": "info-table_B7JYU",
		"info-table--no-header": "info-table--no-header_2v3xx",
		"actions": "actions_pR_Nz",
		"action": "action_3DLKy"
	};

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(403);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(404);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(93);
	
	var _selectors = __webpack_require__(115);
	
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
	
	        return _possibleConstructorReturn(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).call(this, props));
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
	        paginationLinks: selectors.common.paginationLinks(name, key)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(405);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(61);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(96);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(406);
	var Paginator = function (_Component) {
	    _inherits(Paginator, _Component);
	
	    function Paginator(props) {
	        _classCallCheck(this, Paginator);
	
	        return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));
	    }
	
	    _createClass(Paginator, [{
	        key: "parseUrl",
	        value: function parseUrl(pathname, query, pageNum) {
	            var urlStyle = this.props.urlStyle ? this.props.urlStyle : 'query';
	            if (urlStyle === 'query') {
	                var _queryPart = _utils2.default.parseUrlencoded(_lodash2.default.omit(query, ['page']));
	                return "" + pathname + (_queryPart ? "?" + _queryPart + "&" : '?') + "page=" + pageNum;
	            }
	            var queryPart = _utils2.default.parseUrlencoded(query);
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
	                console.error("\u9875\u7801\u5FC5\u987B\u4E3A\u6570\u5B57\uFF0C\u5374\u5F97\u5230 " + (typeof currentIndex === "undefined" ? "undefined" : _typeof(currentIndex)));
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

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(407);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 408:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUploader = __webpack_require__(410);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FileUploader2.default;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(286);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FileUploader = function (_Component) {
	    _inherits(FileUploader, _Component);
	
	    function FileUploader(props) {
	        _classCallCheck(this, FileUploader);
	
	        var _this = _possibleConstructorReturn(this, (FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call(this, props));
	
	        _this.state = {
	            value: null
	        };
	        _this.handleFileChange = _this.handleFileChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(FileUploader, [{
	        key: 'handleFileChange',
	        value: function handleFileChange(e) {
	            var _props = this.props;
	            var url = _props.url;
	            var onComplete = _props.onComplete;
	            var onSuccess = _props.onSuccess;
	            var onError = _props.onError;
	
	            var files = e.target.files;
	            var data = new FormData();
	            if (files.length > 1) {
	                _jquery2.default.each(files, function (key, value) {
	                    data.append(key, value);
	                });
	            } else {
	                data.append('file', files[0]);
	            }
	            _jquery2.default.ajax({
	                url: url,
	                type: 'POST',
	                data: data,
	                cache: false,
	                processData: false,
	                // 如果这么设置 contentType 会导致不存在 boundary 的问题, 需要设置为 false
	                // contentType: 'multipart/form-data',
	                contentType: false,
	                xhrFields: {
	                    withCredentials: true
	                },
	                complete: function complete(data2) {
	                    if (onComplete) {
	                        onComplete(data2);
	                    }
	                },
	                success: function success(data2, textStatus, jqXHR) {
	                    if (onSuccess) {
	                        onSuccess(data2);
	                    }
	                },
	                error: function error(jqXHR, textStatus, errorThrown) {
	                    if (onError) {
	                        onError(jqXHR.responseJSON);
	                    }
	                }
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props2 = this.props;
	            var url = _props2.url;
	            var accept = _props2.accept;
	            var noAjax = _props2.noAjax;
	            var children = _props2.children;
	            var name = _props2.name;
	            var multiple = _props2.multiple;
	            // 如果页面上有两个上传组件可能会出错
	            // input value 设为空会使得每次选中文件后都触发 onChange
	
	            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
	                    if (!noAjax) {
	                        (0, _jquery2.default)(_this2.fileInput).click();
	                    }
	                }, style: {
	                    display: 'inline-block'
	                } }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: function ref(_ref) {
	                    _this2.fileInput = _ref;
	                }, onChange: function onChange(e) {
	                    if (!noAjax) {
	                        _this2.handleFileChange(e);
	                    }
	                }, accept: accept || '.*' }), _react2.default.createElement("input", { type: "submit", value: "提交" })), children);
	        }
	    }]);
	
	    return FileUploader;
	}(_react.Component);
	
	exports.default = FileUploader;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxl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Q0ksd0JBQUUsZUFBZSxPQUFZLFlBQWE7QUFDMUMseUJBQVMsU0FBRTtBQUNMLGlDQUFNLE1BQ2Y7QUFDRjtBQUVKO0FBOUJTO0FBZ0NROzs7NkNBQ2pCLENBRU07Ozs7QUFDRTs7MkJBQXdELEtBQU07aUJBQXpEO2lCQUFRO2lCQUFRO2lCQUFVO2lCQUFNO2lCQUFZO0FBRW5DO0FBQ29COztBQUNqQyxvQkFDTCw4QkFBSSxTQUNPLFdBQWUsZ0JBQ2pCLFNBQUc7QUFDTCx5QkFBQyxDQUFRLFFBQUU7QUFDWCwrQ0FBSyxPQUFXLFdBQ25CO0FBQ0Y7QUFBRyxvQkFDRTtBQUNJLDhCQUNQO0FBRkssc0JBSVAsOEJBQUssVUFBTyxRQUFNLEtBQU8sUUFBTyxRQUFRLFNBQXNCLHVCQUFNLE9BQVEsU0FBSyxLQUFHLEVBQVMsU0FBVywwQ0FDaEcsV0FDSSxVQUFXLFVBQ2YsTUFBTyxRQUNQLE1BQU0sUUFBVyxRQUNuQixJQUFjLGVBQ1gsT0FBUSxTQUFZLFlBQU0sSUFDNUIsS0FBSztBQUFVLDRCQUFVLFlBQU87QUFBRyxvQkFDOUIsVUFBRztBQUNOLHlCQUFDLENBQVEsUUFBRTtBQUNSLGdDQUFpQixpQkFDdkI7QUFDRjtBQUFHLG9CQUNHLFFBQVEsVUFDWixNQWJKLEdBY0EsOEJBQU0sV0FBSyxNQUFTLFVBQU0sT0FDckIsVUFJYjtBQUdGOzs7Ozs7bUJBQTJCLGEiLCJmaWxlIjoiMTMuMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMjg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTMgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGxvYWRCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJ1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi9lbGVtZW50cy9GaWxlVXBsb2FkZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIGxvYWRCb29rcz86IHR5cGVvZiBsb2FkQm9va3NcbiAgYm9va0xpc3ROZXdlc3Q/OiBhbnlcbiAgb3BlbkNvbmZpcm1Nb2RhbDogdHlwZW9mIG9wZW5Db25maXJtTW9kYWxcbiAgY2xvc2VDb25maXJtTW9kYWw6IGFueVxuICByb3V0aW5nOiBhbnlcbiAgcmVtb3ZlRW50aXR5OiB0eXBlb2YgcmVtb3ZlRW50aXR5XG4gIGxvYWRVc2VyczogdHlwZW9mIGxvYWRVc2Vyc1xufVxuXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcXVlcnl9OiBGZXRjaERhdGFPcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcyh7XG4gICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGkuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUVudGl0eSgnYm9va3MnLCBpZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMScsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2tzKClcbiAgICB0aGlzLnByb3BzLmxvYWRVc2VycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIuS5puexjeeuoeeQhlwiIGJvZHlDbGFzcz1cIm1hbmFnZS1ib29rc1wiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPEZpbGVVcGxvYWRlclxuICAgICAgICAgICAgdXJsPVwiL2FwaS9ib29rc1wiXG4gICAgICAgICAgICBhY2NlcHQ9XCIudHh0LC5lcHViXCJcbiAgICAgICAgICAgIG5hbWU9XCJib29rLWZpbGVcIlxuICAgICAgICAgICAgb25TdWNjZXNzPXtyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRCb29rcygpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgICB9IH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJibHVlXCI+5re75Yqg5Lmm57GNPC9CdXR0b24+XG4gICAgICAgICAgPC9GaWxlVXBsb2FkZXI+XG4gICAgICAgICAgPEluZm9UYWJsZVxuICAgICAgICAgICAgZGF0YT17Ym9va0xpc3ROZXdlc3QubWFwKGl0ZW0gPT4gKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgYXV0aG9yczogaXRlbS5hdXRob3JzID8gaXRlbS5hdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgOiAn5pyq55+l5L2c6ICFJyxcbiAgICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG1vbWVudChuZXcgRGF0ZShpdGVtLmRhdGVDcmVhdGVkKS52YWx1ZU9mKCkpLmZvcm1hdCgnWVlZWeW5tE1N5pyIRETml6UnKVxuICAgICAgICAgICAgfSkpKX1cbiAgICAgICAgICAgIGhlYWRlcj17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdJRCdcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Lmm5ZCNJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnZGF0ZUNyZWF0ZWQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rml6XmnJ8nXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdhdXRob3JzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAn5L2c6ICFJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgYWN0aW9ucz17W3tcbiAgICAgICAgICAgICAgbmFtZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgIGZuOiByb3cgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQm9vayhyb3cuaWQsIHJvdy50aXRsZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRlbnRQYWdlPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBzZWxlY3RvcnMuY29tbW9uLmN1cnJlbnRQYWdlKCdib29rcycpKHN0YXRlKVxuXG4gIHJldHVybiB7XG4gICAgLy8g5aaC5p6c56ys5LiA5Liq5Y+C5pWw5LygIG51bGwg5Lya6KaG55uW6buY6K6k5Y+C5pWwXG4gICAgYm9va0xpc3ROZXdlc3Q6IHNlbGVjdG9ycy5ib29rcyh1bmRlZmluZWQsIGN1cnJlbnRQYWdlKShzdGF0ZSksXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCB7fT4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBsb2FkQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsLCByZW1vdmVFbnRpdHksIGxvYWRVc2VycyB9XG4pKE1hbmFnZUJvb2tzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaGVhZGVyPzoge1xuICAgIGtleTogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgfVtdXG4gIGRhdGE6IGFueVtdXG4gIC8vIFRPRE86IOWunueOsOaOp+WItuaYvuekulxuICBlbmFibGVUb29sdGlwPzogYm9vbGVhblxuICBzdHlsZT86IGFueVxuICBhY3Rpb25zPzoge1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gICAgZm46IChyb3dEYXRhOiBhbnkpID0+IHZvaWRcbiAgfVtdXG4gIG9wZXJhdGlvbkxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgSW5mb1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGhlYWRlciwgZGF0YSwgZW5hYmxlVG9vbHRpcCwgc3R5bGUsIGFjdGlvbnMsIG9wZXJhdGlvbkxhYmVsIH0gPSB0aGlzLnByb3BzXG4gICAgYWN0aW9ucyA9IGFjdGlvbnMgfHwgW11cblxuICAgIGlmICghaGVhZGVyKSB7XG4gICAgICBoZWFkZXIgPSAoZGF0YS5sZW5ndGggIT09IDAgJiYgXy5rZXlzKGRhdGFbMF0pLm1hcChrZXkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgfVxuICAgICAgfSkpIHx8IFtdXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnaW5mby10YWJsZSc6IHRydWUsXG4gICAgICAnaW5mby10YWJsZS0tbm8taGVhZGVyJzogIWhlYWRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGUgfHwge319PlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PntpdGVtLm5hbWV9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGVOYW1lPVwiYWN0aW9uc1wiPnsgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogPHRyPjwvdHI+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT57cm93W2l0ZW0ua2V5XSAmJiByb3dbaXRlbS5rZXldLnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmZuKGRhdGFbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIG1heC13aWR0aDogMjUwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiB7XFxuICBtaW4td2lkdGg6IDgwcHg7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3kge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMUIyNjdGO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMyZTQwZDI7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTphY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMDkwZDJiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5mby10YWJsZVwiOiBcImluZm8tdGFibGVfQjdKWVVcIixcblx0XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjogXCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcblx0XCJhY3Rpb25zXCI6IFwiYWN0aW9uc19wUl9OelwiLFxuXHRcImFjdGlvblwiOiBcImFjdGlvbl8zRExLeVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJ1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcblxudHlwZSBQYWdpbmF0aW9uTGluayA9IHtcbiAgcGFnZTogbnVtYmVyXG4gIHVybDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBrZXk/OiBzdHJpbmdcbiAgfVxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBwYWdpbmF0aW9uTGlua3M6IHtcbiAgICBuZXh0PzogUGFnaW5hdGlvbkxpbmtcbiAgICBsYXN0OiBQYWdpbmF0aW9uTGlua1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0XG4gICAgICA/IG5leHQucGFnZSAtIDFcbiAgICAgIDogYWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgYWxsPXthbGx9XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICB1cmw9e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHJvdXRpbmcucXVlcnkgfHwge31cbiAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzXG5cbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMuY29tbW9uLnBhZ2luYXRpb25MaW5rcyhuYW1lLCBrZXkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge31cbikoQ29udGVudFBhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcidcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1BhZ2luYXRvci5zY3NzJylcblxuLyog5qCX5a2QIPCfjLBcbiAqIHJhbmdlID0gMlxuICogfCByYW5nZSB8IGN1cnJlbnQgfCByYW5nZ2UgfFxuICogICAyLCAzLCAgICAgWzRdLCAgICAgNSwgNlxuICovXG5cbnR5cGUgT2piID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsOiBudW1iZXJcbiAgY3VycmVudDogbnVtYmVyXG4gIHJhbmdlPzogbnVtYmVyIC8vIGRlZmF1bHQgM1xuICB1cmw6IHtcbiAgICBwYXRobmFtZTogc3RyaW5nXG4gICAgcXVlcnk6IE9iamVjdFxuICB9XG4gIHVybFN0eWxlPzogJ3F1ZXJ5JyB8ICdzbGFzaCdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBwYXJzZVVybChwYXRobmFtZTogc3RyaW5nLCBxdWVyeTogT2JqZWN0LCBwYWdlTnVtKSB7XG4gICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA6ICdxdWVyeSdcblxuICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChfLm9taXQocXVlcnksIFsncGFnZSddKSlcbiAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YFxuICAgIH1cblxuICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQocXVlcnkpXG4gICAgcmV0dXJuIGAke3BhdGhuYW1lfS9wYWdlLyR7cGFnZU51bX0/JHtxdWVyeVBhcnR9YFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzXG4gICAgY29uc3QgdG90YWxSYW5nZUVuZEluZGV4ID0gdGhpcy5wcm9wcy5hbGwgLSAxXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50IGFzIGFueSkgLSAxXG4gICAgbGV0IHJhbmdlU3RhcnRJbmRleCA9IGN1cnJlbnRJbmRleCAtIHJhbmdlXG4gICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZVxuICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcmlnaHRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCBwYWdlcyA9IFtdXG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgVxuICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcihg6aG156CB5b+F6aG75Li65pWw5a2X77yM5Y205b6X5YiwICR7dHlwZW9mIGN1cnJlbnRJbmRleH1gKVxuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGV4ID4gcmFuZ2VFbmRJbmRleCB8fCBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpobXnoIHkuI3og73lpKfkuo7miYDmnInpobXpnaLmlbDnm67miJblsI/kuo4gMe+8gScpXG4gICAgfVxuXG4gICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4IC0gKHJhbmdlICogMiArIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodFNwcmVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA8PSAwKSB7XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgfV0pXG4gICAgfVxuXG4gICAgLy8gYWRkIHNwcmVhZFxuICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHNwZC5jb25jYXQocGFnZXMpXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogdG90YWxSYW5nZUVuZEluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChzcGQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdpbmF0b3JcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bS0tY3VycmVudFwiPntwYWdlLnBhZ2VOdW19PC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLXNwcmVhZFwiPi4uLjwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bVwiPjxMaW5rIHRvPXt0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0+e3BhZ2UucGFnZU51bX08L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUGFnaW5hdG9yLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXNwcmVhZF8ySU5IVSwgLnBhZ2UtbnVtXzJvUFFVIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWluLXdpZHRoOiAzN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdpbmF0b3JfMVJIQW0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4ucGFnZS1zcHJlYWRfMklOSFUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBhZ2UtbnVtXzJvUFFVLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDNweDsgfVxcbiAgLnBhZ2UtbnVtXzJvUFFVIGE6aG92ZXIsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2Utc3ByZWFkXCI6IFwicGFnZS1zcHJlYWRfMklOSFVcIixcblx0XCJwYWdlLW51bVwiOiBcInBhZ2UtbnVtXzJvUFFVXCIsXG5cdFwicGFnZS1udW0tLWN1cnJlbnRcIjogXCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFxuXHRcInBhZ2luYXRvclwiOiBcInBhZ2luYXRvcl8xUkhBbVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1vbWVudFwiXG4gKiogbW9kdWxlIGlkID0gNDA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuL0ZpbGVVcGxvYWRlcidcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmludGVyZmFjZSBDYWxsYmFjayB7XG4gIChkYXRhOiBhbnkpOiBhbnlcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXJsOiBzdHJpbmdcbiAgbm9BamF4PzogYm9vbGVhblxuICBvblN1Y2Nlc3M/OiBDYWxsYmFja1xuICBvbkVycm9yPzogQ2FsbGJhY2tcbiAgb25Db21wbGV0ZT86IENhbGxiYWNrXG4gIG5hbWU/OiBzdHJpbmdcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIGFjY2VwdD86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB2YWx1ZTogc3RyaW5nXG59XG5cbmNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBmaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlRmlsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgeyB1cmwsIG9uQ29tcGxldGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlc1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICQuZWFjaChmaWxlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pXG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGEsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG5cbiAgICAgIC8vIOWmguaenOi/meS5iOiuvue9riBjb250ZW50VHlwZSDkvJrlr7zoh7TkuI3lrZjlnKggYm91bmRhcnkg55qE6Zeu6aKYLCDpnIDopoHorr7nva7kuLogZmFsc2VcbiAgICAgIC8vIGNvbnRlbnRUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXG5cbiAgICAgIHhockZpZWxkczoge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZGF0YTIgPT4ge1xuICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgIG9uQ29tcGxldGUoZGF0YTIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YTIsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICBvblN1Y2Nlc3MoZGF0YTIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgIG9uRXJyb3IoanFYSFIucmVzcG9uc2VKU09OKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsLCBhY2NlcHQsIG5vQWpheCwgY2hpbGRyZW4sIG5hbWUsIG11bHRpcGxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyDlpoLmnpzpobXpnaLkuIrmnInkuKTkuKrkuIrkvKDnu4Tku7blj6/og73kvJrlh7rplJlcbiAgICAvLyBpbnB1dCB2YWx1ZSDorr7kuLrnqbrkvJrkvb/lvpfmr4/mrKHpgInkuK3mlofku7blkI7pg73op6blj5Egb25DaGFuZ2VcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXRyaWdnZXJcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgJCh0aGlzLmZpbGVJbnB1dCkuY2xpY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8Zm9ybSBhY3Rpb249e3VybH0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgc3R5bGU9e25vQWpheCA/IHt9IDogeyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPXtuYW1lIHx8ICdmaWxlJ31cbiAgICAgICAgICAgIGlkPVwidXBsb2FkLWZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e25vQWpheCA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmZpbGVJbnB1dCA9IHJlZiB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFub0FqYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBhY2NlcHQ9e2FjY2VwdCB8fCAnLionfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5o+Q5LqkXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ZpbGVVcGxvYWRlci9GaWxlVXBsb2FkZXIudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==