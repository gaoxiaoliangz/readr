exports.ids = [13];
exports.modules = {

/***/ 220:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(330);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(203);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(90);
	
	var _ContentPage = __webpack_require__(334);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(58);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(340);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _FileUploader = __webpack_require__(341);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _form = __webpack_require__(147);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    _createClass(ManageBooks, null, [{
	        key: 'fetchData',
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	            var query = _ref.query;
	
	            return store.dispatch((0, _actions.loadBooks)({
	                page: query.page
	            }));
	        }
	    }]);
	
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
	                } }, _react2.default.createElement(_form.Button, { color: "blue" }, '\u6DFB\u52A0\u4E66\u7C4D')), _react2.default.createElement(_InfoTable2.default, { data: bookListNewest.map(function (item) {
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

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(331);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(120);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var styles = __webpack_require__(332);
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

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(333);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(335);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(336);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(89);
	
	var _selectors = __webpack_require__(110);
	
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

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(337);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(92);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(122);
	
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
	
	var styles = __webpack_require__(338);
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

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(339);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 340:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUploader = __webpack_require__(342);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FileUploader2.default;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(220);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3giXSwibmFtZXMiOlsic2VsZWN0b3JzIiwiTWFuYWdlQm9va3MiLCJzdG9yZSIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJwYWdlIiwicHJvcHMiLCJpZCIsImJvb2tOYW1lIiwib3BlbkNvbmZpcm1Nb2RhbCIsInRpdGxlIiwiY29udGVudCIsIm9uQ29uZmlybSIsImRlbGV0ZUJvb2siLCJ0aGVuIiwiY2xvc2VDb25maXJtTW9kYWwiLCJzZW5kTm90aWZpY2F0aW9uIiwicmVtb3ZlRW50aXR5IiwibG9hZEJvb2tzIiwicm91dGluZyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm9uUm91dGluZ0NoYW5nZSIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImxvYWRVc2VycyIsImJvb2tMaXN0TmV3ZXN0IiwiY3JlYXRlRWxlbWVudCIsImJvZHlDbGFzcyIsInBhZ2luYXRpb24iLCJuYW1lIiwidXJsIiwiYWNjZXB0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwibWVzc2FnZSIsImNvbG9yIiwiZGF0YSIsIm1hcCIsIk9iamVjdCIsImFzc2lnbiIsIml0ZW0iLCJhdXRob3JzIiwiYXV0aG9yIiwiam9pbiIsImRhdGVDcmVhdGVkIiwiRGF0ZSIsInZhbHVlT2YiLCJmb3JtYXQiLCJoZWFkZXIiLCJrZXkiLCJhY3Rpb25zIiwiZm4iLCJyb3ciLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiY3VycmVudFBhZ2UiLCJjb21tb24iLCJib29rcyIsInVuZGVmaW5lZCIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJzdHlsZXMiLCJyZXF1aXJlIiwiSW5mb1RhYmxlIiwiZW5hYmxlVG9vbHRpcCIsInN0eWxlIiwib3BlcmF0aW9uTGFiZWwiLCJrZXlzIiwiY2xhc3NOYW1lIiwic3R5bGVOYW1lIiwiaW5kZXgiLCJ0b1N0cmluZyIsImFjdGlvbiIsImluZGV4MiIsIm9uQ2xpY2siLCJDb250ZW50UGFnZSIsImNoaWxkcmVuIiwicGFnaW5hdGlvbkxpbmtzIiwibmV4dCIsImxhc3QiLCJhbGwiLCJjdXJyZW50IiwicGF0aG5hbWUiLCJQYWdpbmF0b3IiLCJwYWdlTnVtIiwidXJsU3R5bGUiLCJxdWVyeVBhcnQiLCJwYXJzZVVybGVuY29kZWQiLCJvbWl0IiwicmFuZ2UiLCJ0b3RhbFJhbmdlRW5kSW5kZXgiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsInJhbmdlU3RhcnRJbmRleCIsInJhbmdlRW5kSW5kZXgiLCJsZWZ0U3ByZWFkIiwicmlnaHRTcHJlYWQiLCJwYWdlcyIsIkVycm9yIiwiY29uc29sZSIsImNvbmNhdCIsImlzQ3VycmVudCIsInNwZCIsImlzU3ByZWFkIiwidG8iLCJwYXJzZVVybCIsIkZpbGVVcGxvYWRlciIsInZhbHVlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImJpbmQiLCJlIiwib25Db21wbGV0ZSIsImZpbGVzIiwiRm9ybURhdGEiLCJlYWNoIiwiYXBwZW5kIiwiYWpheCIsInR5cGUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb21wbGV0ZSIsImRhdGEyIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJqcVhIUiIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwibm9BamF4IiwibXVsdGlwbGUiLCJmaWxlSW5wdXQiLCJjbGljayIsImRpc3BsYXkiLCJtZXRob2QiLCJlbmNUeXBlIiwicmVmIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFD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QW9CLE9BQXBCLEVBQTZCLEVBQUUwRyxNQUFNLFFBQVIsRUFBa0JWLE9BQU8sSUFBekIsRUFBN0IsQ0FOSixDQVBJLEVBY0ovQixRQWRJLENBQVI7QUFlSDs7Ozs7O21CQUVVOEIsWSIsImZpbGUiOiIxMy4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMyAxNVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcic7XG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgcmVtb3ZlRW50aXR5LCBsb2FkVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi9lbGVtZW50cy9GaWxlVXBsb2FkZXInO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCBxdWVyeSB9KSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChsb2FkQm9va3Moe1xuICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGDlsIbliKDpmaTjgIoke2Jvb2tOYW1lfeOAi2AsXG4gICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhcGkuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ29uZmlybU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlRW50aXR5KCdib29rcycsIGlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRCb29rcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkQm9va3Moe1xuICAgICAgICAgICAgcGFnZTogcHJvcHMucm91dGluZy5xdWVyeS5wYWdlIHx8ICcxJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvYWRCb29rcyhuZXh0UHJvcHMpO1xuICAgICAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkVXNlcnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi5Lmm57GN566h55CGXCIsIGJvZHlDbGFzczogXCJtYW5hZ2UtYm9va3NcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50UGFnZSwgeyBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdib29rcydcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlVXBsb2FkZXIsIHsgdXJsOiBcIi9hcGkvYm9va3NcIiwgYWNjZXB0OiBcIi50eHQsLmVwdWJcIiwgbmFtZTogXCJib29rLWZpbGVcIiwgb25TdWNjZXNzOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNvbG9yOiBcImJsdWVcIiB9LCBcIlxcdTZERkJcXHU1MkEwXFx1NEU2NlxcdTdDNERcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1RhYmxlLCB7IGRhdGE6IGJvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JzOiBpdGVtLmF1dGhvcnMgPyBpdGVtLmF1dGhvcnMubWFwKGF1dGhvciA9PiBhdXRob3IubmFtZSkuam9pbignLCAnKSA6ICfmnKrnn6XkvZzogIUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUNyZWF0ZWQ6IG1vbWVudChuZXcgRGF0ZShpdGVtLmRhdGVDcmVhdGVkKS52YWx1ZU9mKCkpLmZvcm1hdCgnWVlZWeW5tE1N5pyIRETml6UnKVxuICAgICAgICAgICAgICAgICAgICB9KSkpLCBoZWFkZXI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Lmm5ZCNJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2RhdGVDcmVhdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yib5bu65pel5pyfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2F1dGhvcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfkvZzogIUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sIGFjdGlvbnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQm9vayhyb3cuaWQsIHJvdy50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0gfSkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gc2VsZWN0b3JzLmNvbW1vbi5jdXJyZW50UGFnZSgnYm9va3MnKShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8g5aaC5p6c56ys5LiA5Liq5Y+C5pWw5LygIG51bGwg5Lya6KaG55uW6buY6K6k5Y+C5pWwXG4gICAgICAgIGJvb2tMaXN0TmV3ZXN0OiBzZWxlY3RvcnMuYm9va3ModW5kZWZpbmVkLCBjdXJyZW50UGFnZSkoc3RhdGUpLFxuICAgICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvYWRCb29rcywgc2VuZE5vdGlmaWNhdGlvbiwgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzIH0pKE1hbmFnZUJvb2tzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi9JbmZvVGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJyk7XG5sZXQgSW5mb1RhYmxlID0gY2xhc3MgSW5mb1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGFjdGlvbnMgPSBhY3Rpb25zIHx8IFtdO1xuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVyID0gKGRhdGEubGVuZ3RoICE9PSAwICYmIF8ua2V5cyhkYXRhWzBdKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnaW5mby10YWJsZSc6IHRydWUsXG4gICAgICAgICAgICAnaW5mby10YWJsZS0tbm8taGVhZGVyJzogIWhlYWRlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBzdHlsZU5hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHN0eWxlIHx8IHt9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsga2V5OiBpbmRleCB9LCBpdGVtLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25zXCIgfSwgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcpKSkpXG4gICAgICAgICAgICAgICAgICAgIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGtleSB9LCByb3dbaXRlbS5rZXldICYmIHJvd1tpdGVtLmtleV0udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvbnNcIiB9LCBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uXCIsIGtleTogaW5kZXgyLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgYWN0aW9uLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpKTtcbiAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59O1xuSW5mb1RhYmxlID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBJbmZvVGFibGUpO1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbmZvVGFibGUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pbmZvLXRhYmxlX0I3SllVIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRoIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4OyB9XFxuXFxuLmFjdGlvbnNfcFJfTnoge1xcbiAgbWluLXdpZHRoOiA4MHB4OyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzFCMjY3RjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMmU0MGQyOyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6YWN0aXZlIHtcXG4gICAgICBjb2xvcjogIzA5MGQyYjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImluZm8tdGFibGVcIjogXCJpbmZvLXRhYmxlX0I3SllVXCIsXG5cdFwiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6IFwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXG5cdFwiYWN0aW9uc1wiOiBcImFjdGlvbnNfcFJfTnpcIixcblx0XCJhY3Rpb25cIjogXCJhY3Rpb25fM0RMS3lcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSc7XG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICAgICAgICA6IGFsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdG9yLCB7IGFsbDogYWxsLCBjdXJyZW50OiBjdXJyZW50LCB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgICAgICAgfSB9KSkpO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICAgICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMuY29tbW9uLnBhZ2luYXRpb25MaW5rcyhuYW1lLCBrZXkpKHN0YXRlKVxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt9KShDb250ZW50UGFnZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcic7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpO1xubGV0IFBhZ2luYXRvciA9IGNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBwYXJzZVVybChwYXRobmFtZSwgcXVlcnksIHBhZ2VOdW0pIHtcbiAgICAgICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICAgICAgICA6ICdxdWVyeSc7XG4gICAgICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChfLm9taXQocXVlcnksIFsncGFnZSddKSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChxdWVyeSk7XG4gICAgICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDM7XG4gICAgICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50KSAtIDE7XG4gICAgICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZTtcbiAgICAgICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZTtcbiAgICAgICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2U7XG4gICAgICAgIGxldCBwYWdlcyA9IFtdO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmw7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmqjOivgVxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXg7XG4gICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICAgICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4O1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzcHJlYWRcbiAgICAgICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInBhZ2luYXRvclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLW51bS0tY3VycmVudFwiIH0sIHBhZ2UucGFnZU51bSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLXNwcmVhZFwiIH0sIFwiLi4uXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1udW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IHRoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfSwgcGFnZS5wYWdlTnVtKSkpO1xuICAgICAgICAgICAgfSkpKSkpO1xuICAgIH1cbn07XG5QYWdpbmF0b3IgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFBhZ2luYXRvcik7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Utc3ByZWFkXzJJTkhVLCAucGFnZS1udW1fMm9QUVUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtaW4td2lkdGg6IDM3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2luYXRvcl8xUkhBbSB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbi5wYWdlLXNwcmVhZF8ySU5IVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgM3B4OyB9XFxuICAucGFnZS1udW1fMm9QUVUgYTpob3ZlciwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS1zcHJlYWRcIjogXCJwYWdlLXNwcmVhZF8ySU5IVVwiLFxuXHRcInBhZ2UtbnVtXCI6IFwicGFnZS1udW1fMm9QUVVcIixcblx0XCJwYWdlLW51bS0tY3VycmVudFwiOiBcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9tZW50XCJcbiAqKiBtb2R1bGUgaWQgPSAzNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4vRmlsZVVwbG9hZGVyJztcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5jbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIG9uQ29tcGxldGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIOWmguaenOi/meS5iOiuvue9riBjb250ZW50VHlwZSDkvJrlr7zoh7TkuI3lrZjlnKggYm91bmRhcnkg55qE6Zeu6aKYLCDpnIDopoHorr7nva7kuLogZmFsc2VcbiAgICAgICAgICAgIC8vIGNvbnRlbnRUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZGF0YTIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YTIsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoanFYSFIucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVybCwgYWNjZXB0LCBub0FqYXgsIGNoaWxkcmVuLCBuYW1lLCBtdWx0aXBsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgLy8g5aaC5p6c6aG16Z2i5LiK5pyJ5Lik5Liq5LiK5Lyg57uE5Lu25Y+v6IO95Lya5Ye66ZSZXG4gICAgICAgIC8vIGlucHV0IHZhbHVlIOiuvuS4uuepuuS8muS9v+W+l+avj+asoemAieS4reaWh+S7tuWQjumDveinpuWPkSBvbkNoYW5nZVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmlsZS10cmlnZ2VyXCIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbm9BamF4KSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5maWxlSW5wdXQpLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHVybCwgbWV0aG9kOiBcInBvc3RcIiwgZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIHN0eWxlOiBub0FqYXggPyB7fSA6IHsgZGlzcGxheTogJ25vbmUnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBtdWx0aXBsZTogbXVsdGlwbGUsIHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBuYW1lIHx8ICdmaWxlJywgaWQ6IFwidXBsb2FkLWZpbGVcIiwgdmFsdWU6IG5vQWpheCA/IHVuZGVmaW5lZCA6ICcnLCByZWY6IHJlZiA9PiB7IHRoaXMuZmlsZUlucHV0ID0gcmVmOyB9LCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgYWNjZXB0OiBhY2NlcHQgfHwgJy4qJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCLmj5DkuqRcIiB9KSksXG4gICAgICAgICAgICBjaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9