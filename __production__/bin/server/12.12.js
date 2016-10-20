exports.ids = [12];
exports.modules = {

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _DocContainer = __webpack_require__(238);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(360);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(240);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(223);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(85);
	
	var _ContentPage = __webpack_require__(364);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(62);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(370);
	
	var _moment2 = _interopRequireDefault(_moment);
	
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

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(361);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(106);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(362);
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

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(363);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(365);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(366);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(84);
	
	var _selectors = __webpack_require__(223);
	
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

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(367);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(88);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(368);
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

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(369);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 370:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3M/YTg3MSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzP2Y1ZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQ047Ozs7QUFDZDs7OztBQUM3Qjs7S0FBMkM7O0FBQzZFOztBQUN6RTs7OztBQUNuQjs7OztBQWNuQzs7Ozs7Ozs7Ozs7Ozs7S0FBbUM7OztB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fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgcmVtb3ZlRW50aXR5LCBsb2FkVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgbG9hZEJvb2tzPzogbG9hZEJvb2tzXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIGNsb3NlQ29uZmlybU1vZGFsOiBhbnlcbiAgcm91dGluZzogYW55XG4gIHJlbW92ZUVudGl0eTogcmVtb3ZlRW50aXR5XG4gIGxvYWRVc2VyczogbG9hZFVzZXJzXG59XG5cbmNsYXNzIE1hbmFnZUJvb2tzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcXVlcnl9OiBGZXRjaERhdGFPcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcyh7XG4gICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGkuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUVudGl0eSgnYm9va3MnLCBpZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMScsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2tzKClcbiAgICB0aGlzLnByb3BzLmxvYWRVc2VycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIuS5puexjeeuoeeQhlwiIGJvZHlDbGFzcz1cIm1hbmFnZS1ib29rc1wiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmZvVGFibGVcbiAgICAgICAgICAgIGRhdGE9e2Jvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIGF1dGhvcnM6IGl0ZW0uYXV0aG9ycyA/IGl0ZW0uYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIDogJ+acquefpeS9nOiAhScsXG4gICAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBtb21lbnQobmV3IERhdGUoaXRlbS5kYXRlQ3JlYXRlZCkudmFsdWVPZigpKS5mb3JtYXQoJ1lZWVnlubRNTeaciERE5pelJylcbiAgICAgICAgICAgIH0pKSkgfVxuICAgICAgICAgICAgaGVhZGVyPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkuablkI0nXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRlQ3JlYXRlZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuaXpeacnydcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ2F1dGhvcnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkvZzogIUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBhY3Rpb25zPXtbe1xuICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCb29rKHJvdy5pZCwgcm93LnRpdGxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGVudFBhZ2U+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHNlbGVjdG9ycy5jb21tb24uY3VycmVudFBhZ2UoJ2Jvb2tzJykoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICAvLyDlpoLmnpznrKzkuIDkuKrlj4LmlbDkvKAgbnVsbCDkvJropobnm5bpu5jorqTlj4LmlbBcbiAgICBib29rTGlzdE5ld2VzdDogc2VsZWN0b3JzLmJvb2tzKHVuZGVmaW5lZCwgY3VycmVudFBhZ2UpKHN0YXRlKSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIHt9PihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGxvYWRCb29rcywgc2VuZE5vdGlmaWNhdGlvbiwgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzIH1cbikoTWFuYWdlQm9va3MpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhlYWRlcj86IHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIH1bXVxuICBkYXRhOiBhbnlbXVxuICAvLyB0b2RvXG4gIGVuYWJsZVRvb2x0aXA/OiBib29sZWFuXG4gIHN0eWxlPzogYW55XG4gIGFjdGlvbnM/OiB7XG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgICBmbjogKHJvd0RhdGE6IGFueSkgPT4gdm9pZFxuICB9W11cbiAgb3BlcmF0aW9uTGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXVxuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9XG4gICAgICB9KSkgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZSB8fCB7fX0+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZU5hbWU9XCJhY3Rpb25zXCI+eyBvcGVyYXRpb25MYWJlbCB8fCAn5pON5L2cJyB9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiA8dHI+PC90cj5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF8ubWFwKGhlYWRlciwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtrZXl9Pntyb3dbaXRlbS5rZXldICYmIHJvd1tpdGVtLmtleV0udG9TdHJpbmcoKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXgyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIG1heC13aWR0aDogMjUwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiB7XFxuICBtaW4td2lkdGg6IDgwcHg7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3kge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMUIyNjdGO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMyZTQwZDI7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTphY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMDkwZDJiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5mby10YWJsZVwiOiBcImluZm8tdGFibGVfQjdKWVVcIixcblx0XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjogXCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcblx0XCJhY3Rpb25zXCI6IFwiYWN0aW9uc19wUl9OelwiLFxuXHRcImFjdGlvblwiOiBcImFjdGlvbl8zRExLeVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJ1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5cbnR5cGUgUGFnaW5hdGlvbkxpbmsgPSB7XG4gIHBhZ2U6IG51bWJlclxuICB1cmw6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAga2V5Pzogc3RyaW5nXG4gIH1cbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgcGFnaW5hdGlvbkxpbmtzOiB7XG4gICAgbmV4dD86IFBhZ2luYXRpb25MaW5rXG4gICAgbGFzdDogUGFnaW5hdGlvbkxpbmtcbiAgfVxufVxuXG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcm91dGluZywgcGFnaW5hdGlvbkxpbmtzOiB7IG5leHQsIGxhc3QgfSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGFsbCA9IGxhc3QgJiYgbGFzdC5wYWdlIHx8IDFcbiAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICA6IGFsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFBhZ2luYXRvclxuICAgICAgICAgIGFsbD17YWxsfVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgdXJsPXt7XG4gICAgICAgICAgICBwYXRobmFtZTogcm91dGluZy5wYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG5hbWUsIGtleSB9IH0gPSBvd25Qcm9wc1xuXG4gIHJldHVybiB7XG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIHx8IHt9LFxuICAgIHBhZ2luYXRpb25MaW5rczogc2VsZWN0b3JzLmNvbW1vbi5wYWdpbmF0aW9uTGlua3MobmFtZSwga2V5KShzdGF0ZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHt9XG4pKENvbnRlbnRQYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4vUGFnaW5hdG9yJ1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1BhZ2luYXRvci5zY3NzJylcblxuLyog5qCX5a2QIPCfjLBcbiAqIHJhbmdlID0gMlxuICogfCByYW5nZSB8IGN1cnJlbnQgfCByYW5nZ2UgfFxuICogICAyLCAzLCAgICAgWzRdLCAgICAgNSwgNlxuICovXG5cbnR5cGUgT2piID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsOiBudW1iZXJcbiAgY3VycmVudDogbnVtYmVyXG4gIHJhbmdlPzogbnVtYmVyIC8vIGRlZmF1bHQgM1xuICB1cmw6IHtcbiAgICBwYXRobmFtZTogc3RyaW5nXG4gICAgcXVlcnk6IE9iamVjdFxuICB9XG4gIHVybFN0eWxlPzogJ3F1ZXJ5JyB8ICdzbGFzaCdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBwYXJzZVVybChwYXRobmFtZTogc3RyaW5nLCBxdWVyeTogT2JqZWN0LCBwYWdlTnVtKSB7XG4gICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA6ICdxdWVyeSdcblxuICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChfLm9taXQocXVlcnksIFsncGFnZSddKSlcbiAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YFxuICAgIH1cblxuICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQocXVlcnkpXG4gICAgcmV0dXJuIGAke3BhdGhuYW1lfS9wYWdlLyR7cGFnZU51bX0/JHtxdWVyeVBhcnR9YFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzXG4gICAgY29uc3QgdG90YWxSYW5nZUVuZEluZGV4ID0gdGhpcy5wcm9wcy5hbGwgLSAxXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50IGFzIGFueSkgLSAxXG4gICAgbGV0IHJhbmdlU3RhcnRJbmRleCA9IGN1cnJlbnRJbmRleCAtIHJhbmdlXG4gICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZVxuICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcmlnaHRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCBwYWdlcyA9IFtdXG4gICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKVxuICAgIH1cblxuICAgIC8vIOmqjOivgVxuICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcihg6aG156CB5b+F6aG75Li65pWw5a2X77yM5Y205b6X5YiwICR7dHlwZW9mIGN1cnJlbnRJbmRleH1gKVxuICAgIH1cbiAgICBpZiAoY3VycmVudEluZGV4ID4gcmFuZ2VFbmRJbmRleCB8fCBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfpobXnoIHkuI3og73lpKfkuo7miYDmnInpobXpnaLmlbDnm67miJblsI/kuo4gMe+8gScpXG4gICAgfVxuXG4gICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4IC0gKHJhbmdlICogMiArIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodFNwcmVhZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA8PSAwKSB7XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgfV0pXG4gICAgfVxuXG4gICAgLy8gYWRkIHNwcmVhZFxuICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHNwZC5jb25jYXQocGFnZXMpXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogdG90YWxSYW5nZUVuZEluZGV4ICsgMVxuICAgICAgICB9XG4gICAgICBdXG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChzcGQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdpbmF0b3JcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bS0tY3VycmVudFwiPntwYWdlLnBhZ2VOdW19PC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLXNwcmVhZFwiPi4uLjwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZU5hbWU9XCJwYWdlLW51bVwiPjxMaW5rIHRvPXt0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0+e3BhZ2UucGFnZU51bX08L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1BhZ2luYXRvci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS1zcHJlYWRfMklOSFUsIC5wYWdlLW51bV8yb1BRVSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY29sb3I6ICM2NjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1pbi13aWR0aDogMzdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGFnaW5hdG9yXzFSSEFtIHtcXG4gIG1hcmdpbjogMjBweCAwOyB9XFxuXFxuLnBhZ2Utc3ByZWFkXzJJTkhVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbi5wYWdlLW51bV8yb1BRVSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAzcHg7IH1cXG4gIC5wYWdlLW51bV8yb1BRVSBhOmhvdmVyLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlLXNwcmVhZFwiOiBcInBhZ2Utc3ByZWFkXzJJTkhVXCIsXG5cdFwicGFnZS1udW1cIjogXCJwYWdlLW51bV8yb1BRVVwiLFxuXHRcInBhZ2UtbnVtLS1jdXJyZW50XCI6IFwicGFnZS1udW0tLWN1cnJlbnRfMVkybUVcIixcblx0XCJwYWdpbmF0b3JcIjogXCJwYWdpbmF0b3JfMVJIQW1cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtb21lbnRcIlxuICoqIG1vZHVsZSBpZCA9IDM3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=