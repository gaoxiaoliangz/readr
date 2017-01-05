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
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _DocContainer = __webpack_require__(204);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _InfoTable = __webpack_require__(330);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _api = __webpack_require__(206);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _selectors = __webpack_require__(113);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(93);
	
	var _ContentPage = __webpack_require__(334);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(58);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(340);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _FileUploader = __webpack_require__(341);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	var _form = __webpack_require__(150);
	
	var _BookMetaForm = __webpack_require__(343);
	
	var _BookMetaForm2 = _interopRequireDefault(_BookMetaForm);
	
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
	
	        var _this = _possibleConstructorReturn(this, (ManageBooks.__proto__ || Object.getPrototypeOf(ManageBooks)).call(this, props));
	
	        _this.state = {
	            showModal: false
	        };
	        return _this;
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
	        key: 'editBookMeta',
	        value: function editBookMeta(bookId) {
	            var _this3 = this;
	
	            this.setState({
	                showModal: true
	            });
	            var bookEntities = this.props.bookEntities;
	
	            this.props.openModal({
	                title: '编辑书籍信息',
	                content: _react2.default.createElement(_BookMetaForm2.default, { onSave: function onSave(data) {
	                        _api2.default.editBookMeta(bookId, data).then(function (result) {
	                            _this3.loadBooks();
	                            _this3.props.closeModal();
	                            _this3.props.sendNotification('修改成功！', 'success');
	                        });
	                    } })
	            });
	            var bookMeta = bookEntities[bookId];
	            this.props.initializeForm('bookMeta', {
	                title: bookMeta.title,
	                authors: bookMeta.authors.map(function (item) {
	                    return item.name;
	                }).join(', '),
	                description: bookMeta.description,
	                cover: bookMeta.cover
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
	            var _this4 = this;
	
	            _helpers2.default.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this4.loadBooks(nextProps);
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
	            var _this5 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "书籍管理", bodyClass: "manage-books" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'books'
	                } }, _react2.default.createElement(_FileUploader2.default, { style: { marginTop: 20 }, url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
	                    _this5.loadBooks();
	                }, onError: function onError(error) {
	                    _this5.props.sendNotification(error.message, 'error');
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
	                        _this5.deleteBook(row.id, row.title);
	                    }
	                }, {
	                    name: '编辑',
	                    fn: function fn(row) {
	                        _this5.editBookMeta(row.id);
	                    }
	                }] })));
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    var currentPage = selectors.common.currentPage('books')(state);
	    var bookEntities = selectors.common.entities('books')(state);
	    return {
	        // 如果第一个参数传 null 会覆盖默认参数
	        bookListNewest: selectors.books(undefined, currentPage)(state),
	        routing: state.routing.locationBeforeTransitions,
	        bookEntities: bookEntities
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal, removeEntity: _actions.removeEntity, loadUsers: _actions.loadUsers, openModal: _actions.openModal, initializeForm: _actions.initializeForm, closeModal: _actions.closeModal })(ManageBooks);

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
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(123);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(125);
	
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
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	
	
	// module
	exports.push([module.id, ".info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-table--no-header_2v3xx {\n  position: relative; }\n\n.info-table_B7JYU {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_B7JYU > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_B7JYU > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_B7JYU > tbody > tr > td, .info-table_B7JYU > tbody > tr th {\n      padding: 0 10px;\n      max-width: 250px; }\n\n.actions_pR_Nz {\n  min-width: 80px; }\n  .actions_pR_Nz .action_3DLKy {\n    cursor: pointer;\n    color: #1B267F;\n    display: inline-block;\n    margin-right: 5px; }\n    .actions_pR_Nz .action_3DLKy:hover {\n      color: #2e40d2; }\n    .actions_pR_Nz .action_3DLKy:active {\n      color: #090d2b; }\n", ""]);
	
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
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Paginator = __webpack_require__(336);
	
	var _Paginator2 = _interopRequireDefault(_Paginator);
	
	var _reactRedux = __webpack_require__(92);
	
	var _selectors = __webpack_require__(113);
	
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
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(63);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _utils = __webpack_require__(95);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _reactCssModules = __webpack_require__(125);
	
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
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
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
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	
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
	            var style = _props2.style;
	            // 如果页面上有两个上传组件可能会出错
	            // input value 设为空会使得每次选中文件后都触发 onChange
	
	            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
	                    if (!noAjax) {
	                        (0, _jquery2.default)(_this2.fileInput).click();
	                    }
	                }, style: __assign({
	                    display: 'inline-block'
	                }, style) }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: function ref(_ref) {
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

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _betterReduxForm = __webpack_require__(117);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	var _actions = __webpack_require__(93);
	
	var _form = __webpack_require__(150);
	
	var _ModalFooter = __webpack_require__(149);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var BookMetaForm = function (_Component) {
	    _inherits(BookMetaForm, _Component);
	
	    function BookMetaForm(props) {
	        _classCallCheck(this, BookMetaForm);
	
	        return _possibleConstructorReturn(this, (BookMetaForm.__proto__ || Object.getPrototypeOf(BookMetaForm)).call(this, props));
	    }
	
	    _createClass(BookMetaForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var title = _props$fields.title;
	            var authors = _props$fields.authors;
	            var description = _props$fields.description;
	            var cover = _props$fields.cover;
	            var handleSubmit = _props.handleSubmit;
	            var closeModal = _props.closeModal;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "书名" }, title)), _react2.default.createElement(_form.Input, __assign({ placeholder: "作者" }, authors)), _react2.default.createElement(_form.Textarea, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_form.Input, __assign({ placeholder: "封面" }, cover)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
	                    onSave(data);
	                }), onCancel: closeModal }));
	        }
	    }]);
	
	    return BookMetaForm;
	}(_react.Component);
	BookMetaForm = __decorate([(0, _reactRedux.connect)(function (state) {
	    return state;
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal }), (0, _betterReduxForm2.default)({
	    form: 'bookMeta',
	    fields: ['title', 'authors', 'description', 'cover']
	})], BookMetaForm);
	exports.default = BookMetaForm;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2NvbXBvbmVudHMvQm9va01ldGFGb3JtLnRzeCJdLCJuYW1lcyI6WyJzZWxlY3RvcnMiLCJNYW5hZ2VCb29rcyIsInN0b3JlIiwicXVlcnkiLCJkaXNwYXRjaCIsInBhZ2UiLCJwcm9wcyIsInN0YXRlIiwic2hvd01vZGFsIiwiaWQiLCJib29rTmFtZSIsIm9wZW5Db25maXJtTW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJvbkNvbmZpcm0iLCJkZWxldGVCb29rIiwidGhlbiIsImNsb3NlQ29uZmlybU1vZGFsIiwic2VuZE5vdGlmaWNhdGlvbiIsInJlbW92ZUVudGl0eSIsImJvb2tJZCIsInNldFN0YXRlIiwiYm9va0VudGl0aWVzIiwib3Blbk1vZGFsIiwiY3JlYXRlRWxlbWVudCIsIm9uU2F2ZSIsImVkaXRCb29rTWV0YSIsImRhdGEiLCJsb2FkQm9va3MiLCJjbG9zZU1vZGFsIiwiYm9va01ldGEiLCJpbml0aWFsaXplRm9ybSIsImF1dGhvcnMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImpvaW4iLCJkZXNjcmlwdGlvbiIsImNvdmVyIiwicm91dGluZyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm9uUm91dGluZ0NoYW5nZSIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImxvYWRVc2VycyIsImJvb2tMaXN0TmV3ZXN0IiwiYm9keUNsYXNzIiwicGFnaW5hdGlvbiIsInN0eWxlIiwibWFyZ2luVG9wIiwidXJsIiwiYWNjZXB0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwibWVzc2FnZSIsImNvbG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXV0aG9yIiwiZGF0ZUNyZWF0ZWQiLCJEYXRlIiwidmFsdWVPZiIsImZvcm1hdCIsImhlYWRlciIsImtleSIsImFjdGlvbnMiLCJmbiIsInJvdyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwiY3VycmVudFBhZ2UiLCJjb21tb24iLCJlbnRpdGllcyIsImJvb2tzIiwidW5kZWZpbmVkIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsInN0eWxlcyIsInJlcXVpcmUiLCJJbmZvVGFibGUiLCJlbmFibGVUb29sdGlwIiwib3BlcmF0aW9uTGFiZWwiLCJrZXlzIiwiY2xhc3NOYW1lIiwic3R5bGVOYW1lIiwiaW5kZXgiLCJ0b1N0cmluZyIsImFjdGlvbiIsImluZGV4MiIsIm9uQ2xpY2siLCJDb250ZW50UGFnZSIsImNoaWxkcmVuIiwicGFnaW5hdGlvbkxpbmtzIiwibmV4dCIsImxhc3QiLCJhbGwiLCJjdXJyZW50IiwicGF0aG5hbWUiLCJQYWdpbmF0b3IiLCJwYWdlTnVtIiwidXJsU3R5bGUiLCJxdWVyeVBhcnQiLCJwYXJzZVVybGVuY29kZWQiLCJvbWl0IiwicmFuZ2UiLCJ0b3RhbFJhbmdlRW5kSW5kZXgiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsInJhbmdlU3RhcnRJbmRleCIsInJhbmdlRW5kSW5kZXgiLCJsZWZ0U3ByZWFkIiwicmlnaHRTcHJlYWQiLCJwYWdlcyIsIkVycm9yIiwiY29uc29sZSIsImNvbmNhdCIsImlzQ3VycmVudCIsInNwZCIsImlzU3ByZWFkIiwidG8iLCJwYXJzZVVybCIsIl9fYXNzaWduIiwidCIsInMiLCJuIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkZpbGVVcGxvYWRlciIsInZhbHVlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImJpbmQiLCJlIiwib25Db21wbGV0ZSIsImZpbGVzIiwiRm9ybURhdGEiLCJlYWNoIiwiYXBwZW5kIiwiYWpheCIsInR5cGUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb21wbGV0ZSIsImRhdGEyIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJqcVhIUiIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwibm9BamF4IiwibXVsdGlwbGUiLCJmaWxlSW5wdXQiLCJjbGljayIsImRpc3BsYXkiLCJtZXRob2QiLCJlbmNUeXBlIiwicmVmIiwib25DaGFuZ2UiLCJCb29rTWV0YUZvcm0iLCJmaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJwbGFjZWhvbGRlciIsIm9uQ2FuY2VsIiwiZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0M7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0tBQVlBLFM7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FDTUMsVzs7Ozs7eUNBQ2lDO0FBQUEsaUJBQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxpQkFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUMvQixvQkFBT0QsTUFBTUUsUUFBTixDQUFlLHdCQUFVO0FBQzVCQyx1QkFBTUYsTUFBTUU7QUFEZ0IsY0FBVixDQUFmLENBQVA7QUFHSDs7O0FBQ0QsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrSEFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsd0JBQVc7QUFERixVQUFiO0FBRmU7QUFLbEI7Ozs7b0NBQ1VDLEUsRUFBSUMsUSxFQUFVO0FBQUE7O0FBQ3JCLGtCQUFLSixLQUFMLENBQVdLLGdCQUFYLENBQTRCO0FBQ3hCQyx3QkFBTyxNQURpQjtBQUV4QkMsdURBQWdCSCxRQUFoQixXQUZ3QjtBQUd4QkksNEJBQVcscUJBQU07QUFDYixtQ0FBSUMsVUFBSixDQUFlTixFQUFmLEVBQW1CTyxJQUFuQixD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aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDIyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEzIDE1XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJztcbmltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbmZvVGFibGUnO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBsb2FkQm9va3MsIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsLCByZW1vdmVFbnRpdHksIGxvYWRVc2Vycywgb3Blbk1vZGFsLCBpbml0aWFsaXplRm9ybSwgY2xvc2VNb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL0ZpbGVVcGxvYWRlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9mb3JtJztcbmltcG9ydCBCb29rTWV0YUZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0Jvb2tNZXRhRm9ybSc7XG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGZldGNoRGF0YSh7IHN0b3JlLCBxdWVyeSB9KSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChsb2FkQm9va3Moe1xuICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGVsZXRlQm9vayhpZCwgYm9va05hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuQ29uZmlybU1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5Yig6ZmkJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGDlsIbliKDpmaTjgIoke2Jvb2tOYW1lfeOAi2AsXG4gICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhcGkuZGVsZXRlQm9vayhpZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ29uZmlybU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5Yig6Zmk5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlRW50aXR5KCdib29rcycsIGlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVkaXRCb29rTWV0YShib29rSWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93TW9kYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsgYm9va0VudGl0aWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnByb3BzLm9wZW5Nb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogJ+e8lui+keS5puexjeS/oeaBrycsXG4gICAgICAgICAgICBjb250ZW50OiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rTWV0YUZvcm0sIHsgb25TYXZlOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXBpLmVkaXRCb29rTWV0YShib29rSWQsIGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJvb2tzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5L+u5pS55oiQ5Yqf77yBJywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSB9KSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJvb2tNZXRhID0gYm9va0VudGl0aWVzW2Jvb2tJZF07XG4gICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZUZvcm0oJ2Jvb2tNZXRhJywge1xuICAgICAgICAgICAgdGl0bGU6IGJvb2tNZXRhLnRpdGxlLFxuICAgICAgICAgICAgYXV0aG9yczogYm9va01ldGEuYXV0aG9ycy5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpLmpvaW4oJywgJyksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYm9va01ldGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb3ZlcjogYm9va01ldGEuY292ZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRCb29rcyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkQm9va3Moe1xuICAgICAgICAgICAgcGFnZTogcHJvcHMucm91dGluZy5xdWVyeS5wYWdlIHx8ICcxJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvYWRCb29rcyhuZXh0UHJvcHMpO1xuICAgICAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkVXNlcnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgYm9va0xpc3ROZXdlc3QgPSB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0ID8gdGhpcy5wcm9wcy5ib29rTGlzdE5ld2VzdCA6IG51bGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi5Lmm57GN566h55CGXCIsIGJvZHlDbGFzczogXCJtYW5hZ2UtYm9va3NcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50UGFnZSwgeyBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdib29rcydcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlVXBsb2FkZXIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAyMCB9LCB1cmw6IFwiL2FwaS9ib29rc1wiLCBhY2NlcHQ6IFwiLnR4dCwuZXB1YlwiLCBuYW1lOiBcImJvb2stZmlsZVwiLCBvblN1Y2Nlc3M6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb29rcygpO1xuICAgICAgICAgICAgICAgICAgICB9LCBvbkVycm9yOiBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgY29sb3I6IFwiYmx1ZVwiIH0sIFwiXFx1NkRGQlxcdTUyQTBcXHU0RTY2XFx1N0M0RFwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvVGFibGUsIHsgZGF0YTogYm9va0xpc3ROZXdlc3QubWFwKGl0ZW0gPT4gKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcnM6IGl0ZW0uYXV0aG9ycyA/IGl0ZW0uYXV0aG9ycy5tYXAoYXV0aG9yID0+IGF1dGhvci5uYW1lKS5qb2luKCcsICcpIDogJ+acquefpeS9nOiAhScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogbW9tZW50KG5ldyBEYXRlKGl0ZW0uZGF0ZUNyZWF0ZWQpLnZhbHVlT2YoKSkuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpXG4gICAgICAgICAgICAgICAgICAgIH0pKSksIGhlYWRlcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSUQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfkuablkI0nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnZGF0ZUNyZWF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliJvlu7rml6XmnJ8nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnYXV0aG9ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+S9nOiAhSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSwgYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCb29rKHJvdy5pZCwgcm93LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+e8lui+kScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdEJvb2tNZXRhKHJvdy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0gfSkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gc2VsZWN0b3JzLmNvbW1vbi5jdXJyZW50UGFnZSgnYm9va3MnKShzdGF0ZSk7XG4gICAgY29uc3QgYm9va0VudGl0aWVzID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdGllcygnYm9va3MnKShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8g5aaC5p6c56ys5LiA5Liq5Y+C5pWw5LygIG51bGwg5Lya6KaG55uW6buY6K6k5Y+C5pWwXG4gICAgICAgIGJvb2tMaXN0TmV3ZXN0OiBzZWxlY3RvcnMuYm9va3ModW5kZWZpbmVkLCBjdXJyZW50UGFnZSkoc3RhdGUpLFxuICAgICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgICAgIGJvb2tFbnRpdGllc1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBsb2FkQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsLCByZW1vdmVFbnRpdHksIGxvYWRVc2Vycywgb3Blbk1vZGFsLCBpbml0aWFsaXplRm9ybSwgY2xvc2VNb2RhbCB9KShNYW5hZ2VCb29rcyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3hcbiAqKi8iLCJpbXBvcnQgSW5mb1RhYmxlIGZyb20gJy4vSW5mb1RhYmxlJztcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbmZvVGFibGUuc2NzcycpO1xubGV0IEluZm9UYWJsZSA9IGNsYXNzIEluZm9UYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGhlYWRlciwgZGF0YSwgZW5hYmxlVG9vbHRpcCwgc3R5bGUsIGFjdGlvbnMsIG9wZXJhdGlvbkxhYmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2luZm8tdGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgJ2luZm8tdGFibGUtLW5vLWhlYWRlcic6ICFoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgc3R5bGVOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBzdHlsZSB8fCB7fSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogaW5kZXggfSwgaXRlbS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uc1wiIH0sIG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnKSkpKVxuICAgICAgICAgICAgICAgICAgICA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubWFwKGhlYWRlciwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBrZXkgfSwgcm93W2l0ZW0ua2V5XSAmJiByb3dbaXRlbS5rZXldLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25zXCIgfSwgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvblwiLCBrZXk6IGluZGV4Miwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIGFjdGlvbi5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKSk7XG4gICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgfVxufTtcbkluZm9UYWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgSW5mb1RhYmxlKTtcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5mb1RhYmxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5mby10YWJsZV9CN0pZVSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMi41OyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgICAgbWF4LXdpZHRoOiAyNTBweDsgfVxcblxcbi5hY3Rpb25zX3BSX056IHtcXG4gIG1pbi13aWR0aDogODBweDsgfVxcbiAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxQjI2N0Y7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMyZTQwZDI7IH1cXG4gICAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTphY3RpdmUge1xcbiAgICAgIGNvbG9yOiAjMDkwZDJiOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaW5mby10YWJsZVwiOiBcImluZm8tdGFibGVfQjdKWVVcIixcblx0XCJpbmZvLXRhYmxlLS1uby1oZWFkZXJcIjogXCJpbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHhcIixcblx0XCJhY3Rpb25zXCI6IFwiYWN0aW9uc19wUl9OelwiLFxuXHRcImFjdGlvblwiOiBcImFjdGlvbl8zRExLeVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuL0NvbnRlbnRQYWdlJztcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGFnaW5hdG9yJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmNsYXNzIENvbnRlbnRQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJvdXRpbmcsIHBhZ2luYXRpb25MaW5rczogeyBuZXh0LCBsYXN0IH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGFsbCA9IGxhc3QgJiYgbGFzdC5wYWdlIHx8IDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBuZXh0XG4gICAgICAgICAgICA/IG5leHQucGFnZSAtIDFcbiAgICAgICAgICAgIDogYWxsO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQYWdpbmF0b3IsIHsgYWxsOiBhbGwsIGN1cnJlbnQ6IGN1cnJlbnQsIHVybDoge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcm91dGluZy5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHJvdXRpbmcucXVlcnkgfHwge31cbiAgICAgICAgICAgICAgICB9IH0pKSk7XG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBuYW1lLCBrZXkgfSB9ID0gb3duUHJvcHM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIHx8IHt9LFxuICAgICAgICBwYWdpbmF0aW9uTGlua3M6IHNlbGVjdG9ycy5jb21tb24ucGFnaW5hdGlvbkxpbmtzKG5hbWUsIGtleSkoc3RhdGUpXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge30pKENvbnRlbnRQYWdlKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4vUGFnaW5hdG9yJztcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1BhZ2luYXRvci5zY3NzJyk7XG5sZXQgUGFnaW5hdG9yID0gY2xhc3MgUGFnaW5hdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHBhcnNlVXJsKHBhdGhuYW1lLCBxdWVyeSwgcGFnZU51bSkge1xuICAgICAgICBsZXQgdXJsU3R5bGUgPSB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgICAgICAgIDogJ3F1ZXJ5JztcbiAgICAgICAgaWYgKHVybFN0eWxlID09PSAncXVlcnknKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VVcmxlbmNvZGVkKF8ub21pdChxdWVyeSwgWydwYWdlJ10pKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtwYXRobmFtZX0ke3F1ZXJ5UGFydCA/IGA/JHtxdWVyeVBhcnR9JmAgOiAnPyd9cGFnZT0ke3BhZ2VOdW19YDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VVcmxlbmNvZGVkKHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfS9wYWdlLyR7cGFnZU51bX0/JHtxdWVyeVBhcnR9YDtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMucHJvcHMucmFuZ2UgPyB0aGlzLnByb3BzLnJhbmdlIDogMztcbiAgICAgICAgY29uc3QgdG90YWxSYW5nZUVuZEluZGV4ID0gdGhpcy5wcm9wcy5hbGwgLSAxO1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwYXJzZUludCh0aGlzLnByb3BzLmN1cnJlbnQpIC0gMTtcbiAgICAgICAgbGV0IHJhbmdlU3RhcnRJbmRleCA9IGN1cnJlbnRJbmRleCAtIHJhbmdlO1xuICAgICAgICBsZXQgcmFuZ2VFbmRJbmRleCA9IGN1cnJlbnRJbmRleCArIHJhbmdlO1xuICAgICAgICBsZXQgbGVmdFNwcmVhZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcmlnaHRTcHJlYWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBhZ2VzID0gW107XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLnVybDtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmFsbCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYWxsIOW/hemhu+S4uiBudW1iZXIg57G75Z6L77yBJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6aqM6K+BXG4gICAgICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihg6aG156CB5b+F6aG75Li65pWw5a2X77yM5Y205b6X5YiwICR7dHlwZW9mIGN1cnJlbnRJbmRleH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gcmFuZ2VFbmRJbmRleCB8fCBjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfpobXnoIHkuI3og73lpKfkuo7miYDmnInpobXpnaLmlbDnm67miJblsI/kuo4gMe+8gScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5nZSAqIDIgKyAxID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICAgICAgLy8g5oC76ZW/5bqm5bCP5LqOIHJhbmdlIOebtOW+hFxuICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleDtcbiAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDlpITnkIblj7PkvqfmuqLlh7pcbiAgICAgICAgICAgIGlmIChyYW5nZUVuZEluZGV4ID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXg7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4IC0gKHJhbmdlICogMiArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmlnaHRTcHJlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnRJbmRleCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gcmFuZ2UgKiAyICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnRTcHJlYWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSByYW5nZVN0YXJ0SW5kZXg7IGkgPD0gcmFuZ2VFbmRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChbe1xuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50OiBpID09PSBjdXJyZW50SW5kZXhcbiAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHNwcmVhZFxuICAgICAgICBpZiAobGVmdFNwcmVhZCkge1xuICAgICAgICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwYWdlcyA9IHNwZC5jb25jYXQocGFnZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodFNwcmVhZCkge1xuICAgICAgICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogdG90YWxSYW5nZUVuZEluZGV4ICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChzcGQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5hbGwgIT09IDEgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwicGFnaW5hdG9yXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBudWxsLCBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCwgc3R5bGVOYW1lOiBcInBhZ2UtbnVtLS1jdXJyZW50XCIgfSwgcGFnZS5wYWdlTnVtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCwgc3R5bGVOYW1lOiBcInBhZ2Utc3ByZWFkXCIgfSwgXCIuLi5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLW51bVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyB0bzogdGhpcy5wYXJzZVVybCh1cmwucGF0aG5hbWUsIHVybC5xdWVyeSwgcGFnZS5wYWdlTnVtKSB9LCBwYWdlLnBhZ2VOdW0pKSk7XG4gICAgICAgICAgICB9KSkpKSk7XG4gICAgfVxufTtcblBhZ2luYXRvciA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgUGFnaW5hdG9yKTtcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1BhZ2luYXRvci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS1zcHJlYWRfMklOSFUsIC5wYWdlLW51bV8yb1BRVSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgY29sb3I6ICM2NjY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG1pbi13aWR0aDogMzdweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4ucGFnaW5hdG9yXzFSSEFtIHtcXG4gIG1hcmdpbjogMjBweCAwOyB9XFxuXFxuLnBhZ2Utc3ByZWFkXzJJTkhVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblxcbi5wYWdlLW51bV8yb1BRVSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAzcHg7IH1cXG4gIC5wYWdlLW51bV8yb1BRVSBhOmhvdmVyLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlLXNwcmVhZFwiOiBcInBhZ2Utc3ByZWFkXzJJTkhVXCIsXG5cdFwicGFnZS1udW1cIjogXCJwYWdlLW51bV8yb1BRVVwiLFxuXHRcInBhZ2UtbnVtLS1jdXJyZW50XCI6IFwicGFnZS1udW0tLWN1cnJlbnRfMVkybUVcIixcblx0XCJwYWdpbmF0b3JcIjogXCJwYWdpbmF0b3JfMVJIQW1cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtb21lbnRcIlxuICoqIG1vZHVsZSBpZCA9IDM0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi9GaWxlVXBsb2FkZXInO1xuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY2xhc3MgRmlsZVVwbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlRmlsZUNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBvbkNvbXBsZXRlLCBvblN1Y2Nlc3MsIG9uRXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQuZWFjaChmaWxlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAvLyDlpoLmnpzov5nkuYjorr7nva4gY29udGVudFR5cGUg5Lya5a+86Ie05LiN5a2Y5ZyoIGJvdW5kYXJ5IOeahOmXrumimCwg6ZyA6KaB6K6+572u5Li6IGZhbHNlXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGRhdGEyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKGRhdGEyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEyLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuICAgICAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKGRhdGEyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGpxWEhSLnJlc3BvbnNlSlNPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIGFjY2VwdCwgbm9BamF4LCBjaGlsZHJlbiwgbmFtZSwgbXVsdGlwbGUsIHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAvLyDlpoLmnpzpobXpnaLkuIrmnInkuKTkuKrkuIrkvKDnu4Tku7blj6/og73kvJrlh7rplJlcbiAgICAgICAgLy8gaW5wdXQgdmFsdWUg6K6+5Li656m65Lya5L2/5b6X5q+P5qyh6YCJ5Lit5paH5Lu25ZCO6YO96Kem5Y+RIG9uQ2hhbmdlXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmaWxlLXRyaWdnZXJcIiwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFub0FqYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLmZpbGVJbnB1dCkuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBzdHlsZTogX19hc3NpZ24oe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICB9LCBzdHlsZSkgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiB1cmwsIG1ldGhvZDogXCJwb3N0XCIsIGVuY1R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLCBzdHlsZTogbm9BamF4ID8ge30gOiB7IGRpc3BsYXk6ICdub25lJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgbXVsdGlwbGU6IG11bHRpcGxlLCB0eXBlOiBcImZpbGVcIiwgbmFtZTogbmFtZSB8fCAnZmlsZScsIGlkOiBcInVwbG9hZC1maWxlXCIsIHZhbHVlOiBub0FqYXggPyB1bmRlZmluZWQgOiAnJywgcmVmOiByZWYgPT4geyB0aGlzLmZpbGVJbnB1dCA9IHJlZjsgfSwgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub0FqYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGFjY2VwdDogYWNjZXB0IHx8ICcuKicgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwi5o+Q5LqkXCIgfSkpLFxuICAgICAgICAgICAgY2hpbGRyZW4pKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ZpbGVVcGxvYWRlci9GaWxlVXBsb2FkZXIudHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmb3JtIGZyb20gJ2JldHRlci1yZWR1eC1mb3JtJztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IElucHV0LCBUZXh0YXJlYSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL01vZGFsL01vZGFsRm9vdGVyJztcbmxldCBCb29rTWV0YUZvcm0gPSBjbGFzcyBCb29rTWV0YUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpZWxkczogeyB0aXRsZSwgYXV0aG9ycywgZGVzY3JpcHRpb24sIGNvdmVyIH0sIGhhbmRsZVN1Ym1pdCwgY2xvc2VNb2RhbCwgb25TYXZlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9fYXNzaWduKHsgcGxhY2Vob2xkZXI6IFwi5Lmm5ZCNXCIgfSwgdGl0bGUpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9fYXNzaWduKHsgcGxhY2Vob2xkZXI6IFwi5L2c6ICFXCIgfSwgYXV0aG9ycykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0YXJlYSwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLmj4/ov7BcIiB9LCBkZXNjcmlwdGlvbikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLlsIHpnaJcIiB9LCBjb3ZlcikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbEZvb3RlciwgeyBvbkNvbmZpcm06IGhhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pLCBvbkNhbmNlbDogY2xvc2VNb2RhbCB9KSkpO1xuICAgIH1cbn07XG5Cb29rTWV0YUZvcm0gPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KHN0YXRlID0+IHN0YXRlLCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSksXG4gICAgZm9ybSh7XG4gICAgICAgIGZvcm06ICdib29rTWV0YScsXG4gICAgICAgIGZpZWxkczogWyd0aXRsZScsICdhdXRob3JzJywgJ2Rlc2NyaXB0aW9uJywgJ2NvdmVyJ11cbiAgICB9KVxuXSwgQm9va01ldGFGb3JtKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tNZXRhRm9ybTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2NvbXBvbmVudHMvQm9va01ldGFGb3JtLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=