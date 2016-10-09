exports.ids = [12];
exports.modules = {

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _DocContainer = __webpack_require__(245);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(359);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(224);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(231);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(85);
	
	var _ContentPage = __webpack_require__(363);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(62);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(369);
	
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
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: 'deleteBook',
	        value: function deleteBook(id, bookName) {
	            var _this2 = this;
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: '将删除《' + bookName + '》',
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
	            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
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

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InfoTable = __webpack_require__(360);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfoTable2.default;

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(107);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(361);
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

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(362);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ContentPage = __webpack_require__(364);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ContentPage2.default;

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(365);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(84);
	
	var _selectors = __webpack_require__(231);
	
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
	        paginationLinks: selectors.common.paginationLinks(name, key)(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Paginator = __webpack_require__(366);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Paginator2.default;

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(88);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(109);
	
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
	
	var styles = __webpack_require__(367);
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

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(368);
	    var insertCss = __webpack_require__(113);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
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

/***/ 369:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3M/YTg3MSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzP2Y1ZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBQ21COzs7O0FBQ047Ozs7QUFDZDs7OztBQUM3Qjs7S0FBMkM7O0FBQzZFOztBQUN6RTs7OztBQUNuQjs7OztBQWNuQzs7Ozs7Ozs7Ozs7Ozs7S0FBbUM7OztB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RyxRQUFJLEtBQVEsT0FBVSxXQUFjLGlCQUUxQzs7QUFFTSx3QkFDTCw4QkFBRyxRQUFJLEtBQVEsT0FBVSxXQUFXLGNBQUMsZ0JBQUssbUNBQUcsSUFBTSxPQUFTLFNBQUksSUFBUyxVQUFLLElBQU0sT0FBTSxLQUFXLFlBQU0sS0FTNUg7Y0F0QnVCLENBRmQsQ0FERixDQURFOzs7O1lBakd1Qjs7QUFEakMseUJBQVcsK0JBQVEsVUE4SG5CO21CQUF3QixVOzs7Ozs7OztBQ3pKeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSx3SEFBdUgsMEJBQTBCLHNCQUFzQixnQkFBZ0IsMkJBQTJCLHFCQUFxQixvQkFBb0IsdUJBQXVCLHVCQUF1QiwyQkFBMkIsRUFBRSxzQkFBc0IsbUJBQW1CLEVBQUUsd0JBQXdCLDBCQUEwQixvQkFBb0IsRUFBRSwrQ0FBK0MsMEJBQTBCLGtCQUFrQixFQUFFLCtEQUErRCwwQkFBMEIsa0JBQWtCLEVBQUUsOEJBQThCLHFCQUFxQixvQkFBb0IsRUFBRTs7QUFFNXNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNiQSxvQyIsImZpbGUiOiIxMi4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5pbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5mb1RhYmxlJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCwgcmVtb3ZlRW50aXR5LCBsb2FkVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgbG9hZEJvb2tzPzogbG9hZEJvb2tzXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIGNsb3NlQ29uZmlybU1vZGFsOiBhbnlcbiAgcm91dGluZzogYW55XG4gIHJlbW92ZUVudGl0eTogcmVtb3ZlRW50aXR5XG4gIGxvYWRVc2VyczogbG9hZFVzZXJzXG59XG5cbmNsYXNzIE1hbmFnZUJvb2tzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBzdGF0aWMgZmV0Y2hEYXRhKHtzdG9yZSwgcXVlcnl9OiBGZXRjaERhdGFPcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcyh7XG4gICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGkuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKVxuICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJylcbiAgICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUVudGl0eSgnYm9va3MnLCBpZClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMScsXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkQm9va3MobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZEJvb2tzKClcbiAgICB0aGlzLnByb3BzLmxvYWRVc2VycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJvb2tMaXN0TmV3ZXN0ID0gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA/IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIuS5puexjeeuoeeQhlwiIGJvZHlDbGFzcz1cIm1hbmFnZS1ib29rc1wiPlxuICAgICAgICA8Q29udGVudFBhZ2VcbiAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICBuYW1lOiAnYm9va3MnXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmZvVGFibGVcbiAgICAgICAgICAgIGRhdGE9e2Jvb2tMaXN0TmV3ZXN0Lm1hcChpdGVtID0+IChPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIGF1dGhvcnM6IGl0ZW0uYXV0aG9ycyA/IGl0ZW0uYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIDogJ+acquefpeS9nOiAhScsXG4gICAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBtb21lbnQobmV3IERhdGUoaXRlbS5kYXRlQ3JlYXRlZCkudmFsdWVPZigpKS5mb3JtYXQoJ1lZWVnlubRNTeaciERE5pelJylcbiAgICAgICAgICAgIH0pKSkgfVxuICAgICAgICAgICAgaGVhZGVyPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0lEJ1xuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkuablkI0nXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdkYXRlQ3JlYXRlZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuaXpeacnydcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ2F1dGhvcnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfkvZzogIUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgICBhY3Rpb25zPXtbe1xuICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCb29rKHJvdy5pZCwgcm93LnRpdGxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGVudFBhZ2U+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHNlbGVjdG9ycy5jb21tb24uY3VycmVudFBhZ2UoJ2Jvb2tzJykoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICAvLyDlpoLmnpznrKzkuIDkuKrlj4LmlbDkvKAgbnVsbCDkvJropobnm5bpu5jorqTlj4LmlbBcbiAgICBib29rTGlzdE5ld2VzdDogc2VsZWN0b3JzLmJvb2tzKHVuZGVmaW5lZCwgY3VycmVudFBhZ2UpKHN0YXRlKSxcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIHt9PihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGxvYWRCb29rcywgc2VuZE5vdGlmaWNhdGlvbiwgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzIH1cbikoTWFuYWdlQm9va3MpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvTWFuYWdlQm9va3MudHN4XG4gKiovIiwiaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuL0luZm9UYWJsZSdcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGhlYWRlcj86IHtcbiAgICBrZXk6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZyB8IEpTWC5FbGVtZW50XG4gIH1bXVxuICBkYXRhOiBhbnlbXVxuICAvLyB0b2RvXG4gIGVuYWJsZVRvb2x0aXA/OiBib29sZWFuXG4gIHN0eWxlPzogYW55XG4gIGFjdGlvbnM/OiB7XG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgICBmbjogKHJvd0RhdGE6IGFueSkgPT4gdm9pZFxuICB9W11cbiAgb3BlcmF0aW9uTGFiZWw/OiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXVxuXG4gICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9XG4gICAgICB9KSkgfHwgW11cbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZSB8fCB7fX0+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDx0aD57IG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnIH08L3RoPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IDx0cj48L3RyPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2tleX0+e3Jvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVOYW1lPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5mb1RhYmxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5mby10YWJsZV9CN0pZVSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMi41OyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMUIyNjdGO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmhvdmVyIHtcXG4gICAgY29sb3I6ICMyZTQwZDI7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6YWN0aXZlIHtcXG4gICAgY29sb3I6ICMwOTBkMmI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjogXCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcblx0XCJpbmZvLXRhYmxlXCI6IFwiaW5mby10YWJsZV9CN0pZVVwiLFxuXHRcImFjdGlvbnNcIjogXCJhY3Rpb25zX3BSX056XCIsXG5cdFwiYWN0aW9uXCI6IFwiYWN0aW9uXzNETEt5XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4vQ29udGVudFBhZ2UnXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcblxudHlwZSBQYWdpbmF0aW9uTGluayA9IHtcbiAgcGFnZTogbnVtYmVyXG4gIHVybDogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBrZXk/OiBzdHJpbmdcbiAgfVxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHJvdXRpbmc6IGFueVxuICBwYWdpbmF0aW9uTGlua3M6IHtcbiAgICBuZXh0PzogUGFnaW5hdGlvbkxpbmtcbiAgICBsYXN0OiBQYWdpbmF0aW9uTGlua1xuICB9XG59XG5cbmNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMVxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0XG4gICAgICA/IG5leHQucGFnZSAtIDFcbiAgICAgIDogYWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UGFnaW5hdG9yXG4gICAgICAgICAgYWxsPXthbGx9XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICB1cmw9e3tcbiAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnk6IHJvdXRpbmcucXVlcnkgfHwge31cbiAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzXG5cbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMuY29tbW9uLnBhZ2luYXRpb25MaW5rcyhuYW1lLCBrZXkpKHN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAge31cbikoQ29udGVudFBhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKVxuXG4vKiDmoJflrZAg8J+MsFxuICogcmFuZ2UgPSAyXG4gKiB8IHJhbmdlIHwgY3VycmVudCB8IHJhbmdnZSB8XG4gKiAgIDIsIDMsICAgICBbNF0sICAgICA1LCA2XG4gKi9cblxudHlwZSBPamIgPSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGw6IG51bWJlclxuICBjdXJyZW50OiBudW1iZXJcbiAgcmFuZ2U/OiBudW1iZXIgLy8gZGVmYXVsdCAzXG4gIHVybDoge1xuICAgIHBhdGhuYW1lOiBzdHJpbmdcbiAgICBxdWVyeTogT2JqZWN0XG4gIH1cbiAgdXJsU3R5bGU/OiAncXVlcnknIHwgJ3NsYXNoJ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHBhcnNlVXJsKHBhdGhuYW1lOiBzdHJpbmcsIHF1ZXJ5OiBPYmplY3QsIHBhZ2VOdW0pIHtcbiAgICBsZXQgdXJsU3R5bGUgPSB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICA/IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgIDogJ3F1ZXJ5J1xuXG4gICAgaWYgKHVybFN0eWxlID09PSAncXVlcnknKSB7XG4gICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VVcmxlbmNvZGVkKF8ub21pdChxdWVyeSwgWydwYWdlJ10pKVxuICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cXVlcnlQYXJ0ID8gYD8ke3F1ZXJ5UGFydH0mYCA6ICc/J31wYWdlPSR7cGFnZU51bX1gXG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChxdWVyeSlcbiAgICByZXR1cm4gYCR7cGF0aG5hbWV9L3BhZ2UvJHtwYWdlTnVtfT8ke3F1ZXJ5UGFydH1gXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDNcbiAgICBjb25zdCB0b3RhbFJhbmdlRW5kSW5kZXggPSB0aGlzLnByb3BzLmFsbCAtIDFcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnQgYXMgYW55KSAtIDFcbiAgICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gcmFuZ2VcbiAgICBsZXQgcmFuZ2VFbmRJbmRleCA9IGN1cnJlbnRJbmRleCArIHJhbmdlXG4gICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZVxuICAgIGxldCByaWdodFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHBhZ2VzID0gW11cbiAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmxcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpXG4gICAgfVxuXG4gICAgLy8g6aqM6K+BXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGDpobXnoIHlv4XpobvkuLrmlbDlrZfvvIzljbTlvpfliLAgJHt0eXBlb2YgY3VycmVudEluZGV4fWApXG4gICAgfVxuICAgIGlmIChjdXJyZW50SW5kZXggPiByYW5nZUVuZEluZGV4IHx8IGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+mhteeggeS4jeiDveWkp+S6juaJgOaciemhtemdouaVsOebruaIluWwj+S6jiAx77yBJylcbiAgICB9XG5cbiAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXhcbiAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXggLSAocmFuZ2UgKiAyICsgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHtcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgICAgICByYW5nZUVuZEluZGV4ID0gcmFuZ2UgKiAyICsgMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdFNwcmVhZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICB9XSlcbiAgICB9XG5cbiAgICAvLyBhZGQgc3ByZWFkXG4gICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gc3BkLmNvbmNhdChwYWdlcylcbiAgICB9XG5cbiAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlTnVtOiB0b3RhbFJhbmdlRW5kSW5kZXggKyAxXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KHNwZClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5hbGwgIT09IDEgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInBhZ2luYXRvclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtLS1jdXJyZW50XCI+e3BhZ2UucGFnZU51bX08L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2Utc3ByZWFkXCI+Li4uPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IHN0eWxlTmFtZT1cInBhZ2UtbnVtXCI+PExpbmsgdG89e3RoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfT57cGFnZS5wYWdlTnVtfTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUGFnaW5hdG9yLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXNwcmVhZF8ySU5IVSwgLnBhZ2UtbnVtXzJvUFFVIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWluLXdpZHRoOiAzN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdpbmF0b3JfMVJIQW0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4ucGFnZS1zcHJlYWRfMklOSFUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBhZ2UtbnVtXzJvUFFVLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDNweDsgfVxcbiAgLnBhZ2UtbnVtXzJvUFFVIGE6aG92ZXIsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2Utc3ByZWFkXCI6IFwicGFnZS1zcHJlYWRfMklOSFVcIixcblx0XCJwYWdlLW51bVwiOiBcInBhZ2UtbnVtXzJvUFFVXCIsXG5cdFwicGFnZS1udW0tLWN1cnJlbnRcIjogXCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFxuXHRcInBhZ2luYXRvclwiOiBcInBhZ2luYXRvcl8xUkhBbVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1vbWVudFwiXG4gKiogbW9kdWxlIGlkID0gMzY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==