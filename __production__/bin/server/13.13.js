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
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _betterReduxForm = __webpack_require__(114);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	var _actions = __webpack_require__(90);
	
	var _form = __webpack_require__(147);
	
	var _ModalFooter = __webpack_require__(146);
	
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
	    fields: ['title', 'authors', 'description', 'cover'],
	    destroyOnUnmount: true
	})], BookMetaForm);
	exports.default = BookMetaForm;

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNWRjIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL2NvbXBvbmVudHMvQm9va01ldGFGb3JtLnRzeCJdLCJuYW1lcyI6WyJzZWxlY3RvcnMiLCJNYW5hZ2VCb29rcyIsInN0b3JlIiwicXVlcnkiLCJkaXNwYXRjaCIsInBhZ2UiLCJwcm9wcyIsInN0YXRlIiwic2hvd01vZGFsIiwiaWQiLCJib29rTmFtZSIsIm9wZW5Db25maXJtTW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJvbkNvbmZpcm0iLCJkZWxldGVCb29rIiwidGhlbiIsImNsb3NlQ29uZmlybU1vZGFsIiwic2VuZE5vdGlmaWNhdGlvbiIsInJlbW92ZUVudGl0eSIsImJvb2tJZCIsInNldFN0YXRlIiwiYm9va0VudGl0aWVzIiwib3Blbk1vZGFsIiwiY3JlYXRlRWxlbWVudCIsIm9uU2F2ZSIsImVkaXRCb29rTWV0YSIsImRhdGEiLCJsb2FkQm9va3MiLCJjbG9zZU1vZGFsIiwiYm9va01ldGEiLCJpbml0aWFsaXplRm9ybSIsImF1dGhvcnMiLCJtYXAiLCJpdGVtIiwibmFtZSIsImpvaW4iLCJkZXNjcmlwdGlvbiIsImNvdmVyIiwicm91dGluZyIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm9uUm91dGluZ0NoYW5nZSIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImxvYWRVc2VycyIsImJvb2tMaXN0TmV3ZXN0IiwiYm9keUNsYXNzIiwicGFnaW5hdGlvbiIsInN0eWxlIiwibWFyZ2luVG9wIiwidXJsIiwiYWNjZXB0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImVycm9yIiwibWVzc2FnZSIsImNvbG9yIiwiT2JqZWN0IiwiYXNzaWduIiwiYXV0aG9yIiwiZGF0ZUNyZWF0ZWQiLCJEYXRlIiwidmFsdWVPZiIsImZvcm1hdCIsImhlYWRlciIsImtleSIsImFjdGlvbnMiLCJmbiIsInJvdyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwiY3VycmVudFBhZ2UiLCJjb21tb24iLCJlbnRpdGllcyIsImJvb2tzIiwidW5kZWZpbmVkIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsIl9fZGVjb3JhdGUiLCJkZWNvcmF0b3JzIiwidGFyZ2V0IiwiZGVzYyIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZCIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsInN0eWxlcyIsInJlcXVpcmUiLCJJbmZvVGFibGUiLCJlbmFibGVUb29sdGlwIiwib3BlcmF0aW9uTGFiZWwiLCJrZXlzIiwiY2xhc3NOYW1lIiwic3R5bGVOYW1lIiwiaW5kZXgiLCJ0b1N0cmluZyIsImFjdGlvbiIsImluZGV4MiIsIm9uQ2xpY2siLCJDb250ZW50UGFnZSIsImNoaWxkcmVuIiwicGFnaW5hdGlvbkxpbmtzIiwibmV4dCIsImxhc3QiLCJhbGwiLCJjdXJyZW50IiwicGF0aG5hbWUiLCJQYWdpbmF0b3IiLCJwYWdlTnVtIiwidXJsU3R5bGUiLCJxdWVyeVBhcnQiLCJwYXJzZVVybGVuY29kZWQiLCJvbWl0IiwicmFuZ2UiLCJ0b3RhbFJhbmdlRW5kSW5kZXgiLCJjdXJyZW50SW5kZXgiLCJwYXJzZUludCIsInJhbmdlU3RhcnRJbmRleCIsInJhbmdlRW5kSW5kZXgiLCJsZWZ0U3ByZWFkIiwicmlnaHRTcHJlYWQiLCJwYWdlcyIsIkVycm9yIiwiY29uc29sZSIsImNvbmNhdCIsImlzQ3VycmVudCIsInNwZCIsImlzU3ByZWFkIiwidG8iLCJwYXJzZVVybCIsIl9fYXNzaWduIiwidCIsInMiLCJuIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkZpbGVVcGxvYWRlciIsInZhbHVlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImJpbmQiLCJlIiwib25Db21wbGV0ZSIsImZpbGVzIiwiRm9ybURhdGEiLCJlYWNoIiwiYXBwZW5kIiwiYWpheCIsInR5cGUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb21wbGV0ZSIsImRhdGEyIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJqcVhIUiIsImVycm9yVGhyb3duIiwicmVzcG9uc2VKU09OIiwibm9BamF4IiwibXVsdGlwbGUiLCJmaWxlSW5wdXQiLCJjbGljayIsImRpc3BsYXkiLCJtZXRob2QiLCJlbmNUeXBlIiwicmVmIiwib25DaGFuZ2UiLCJCb29rTWV0YUZvcm0iLCJmaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJwbGFjZWhvbGRlciIsIm9uQ2FuY2VsIiwiZm9ybSIsImRlc3Ryb3lPblVubW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9DOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztLQUFZQSxTOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBQ01DLFc7Ozs7O3lDQUNpQztBQUFBLGlCQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsaUJBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDL0Isb0JBQU9ELE1BQU1FLFFBQU4sQ0FBZSx3QkFBVTtBQUM1QkMsdUJBQU1GLE1BQU1FO0FBRGdCLGNBQVYsQ0FBZixDQUFQO0FBR0g7OztBQUNELDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0hBQ1RBLEtBRFM7O0FBRWYsZUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHdCQUFXO0FBREYsVUFBYjtBQUZlO0FBS2xCOzs7O29DQUNVQyxFLEVBQUlDLFEsRUFBVTtBQUFBOztBQUNyQixrQkFBS0osS0FBTCxDQUFXSyxnQkFBWCxDQUE0QjtBQUN4QkMsd0JBQU8sTUFEaUI7QUFFeEJDLHVEQUFnQkgsUUFBaEIsV0FGd0I7QUFHeEJJLDRCQUFXLHFCQUFNO0FBQ2IsbUNBQUlDLFVBQUosQ0FBZU4s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b3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMjIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTMgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGxvYWRCb29rcywgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzLCBvcGVuTW9kYWwsIGluaXRpYWxpemVGb3JtLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250ZW50UGFnZSc7XG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvRmlsZVVwbG9hZGVyJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IEJvb2tNZXRhRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvQm9va01ldGFGb3JtJztcbmNsYXNzIE1hbmFnZUJvb2tzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZmV0Y2hEYXRhKHsgc3RvcmUsIHF1ZXJ5IH0pIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGxvYWRCb29rcyh7XG4gICAgICAgICAgICBwYWdlOiBxdWVyeS5wYWdlXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBkZWxldGVCb29rKGlkLCBib29rTmFtZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFwaS5kZWxldGVCb29rKGlkKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VDb25maXJtTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfliKDpmaTmiJDlip/vvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVFbnRpdHkoJ2Jvb2tzJywgaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWRpdEJvb2tNZXRhKGJvb2tJZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dNb2RhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyBib29rRW50aXRpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMucHJvcHMub3Blbk1vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn57yW6L6R5Lmm57GN5L+h5oGvJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tNZXRhRm9ybSwgeyBvblNhdmU6IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcGkuZWRpdEJvb2tNZXRhKGJvb2tJZCwgZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm9va3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfkv67mlLnmiJDlip/vvIEnLCAnc3VjY2VzcycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IH0pKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYm9va01ldGEgPSBib29rRW50aXRpZXNbYm9va0lkXTtcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplRm9ybSgnYm9va01ldGEnLCB7XG4gICAgICAgICAgICB0aXRsZTogYm9va01ldGEudGl0bGUsXG4gICAgICAgICAgICBhdXRob3JzOiBib29rTWV0YS5hdXRob3JzLm1hcChpdGVtID0+IGl0ZW0ubmFtZSkuam9pbignLCAnKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBib29rTWV0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGNvdmVyOiBib29rTWV0YS5jb3ZlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZEJvb2tzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRCb29rcyh7XG4gICAgICAgICAgICBwYWdlOiBwcm9wcy5yb3V0aW5nLnF1ZXJ5LnBhZ2UgfHwgJzEnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIHRoaXMubG9hZEJvb2tzKG5leHRQcm9wcyk7XG4gICAgICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmxvYWRCb29rcygpO1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRVc2VycygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyB0aXRsZTogXCLkuabnsY3nrqHnkIZcIiwgYm9keUNsYXNzOiBcIm1hbmFnZS1ib29rc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRlbnRQYWdlLCB7IHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Jvb2tzJ1xuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGVVcGxvYWRlciwgeyBzdHlsZTogeyBtYXJnaW5Ub3A6IDIwIH0sIHVybDogXCIvYXBpL2Jvb2tzXCIsIGFjY2VwdDogXCIudHh0LC5lcHViXCIsIG5hbWU6IFwiYm9vay1maWxlXCIsIG9uU3VjY2VzczogcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJvb2tzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIG9uRXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJibHVlXCIgfSwgXCJcXHU2REZCXFx1NTJBMFxcdTRFNjZcXHU3QzREXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9UYWJsZSwgeyBkYXRhOiBib29rTGlzdE5ld2VzdC5tYXAoaXRlbSA9PiAoT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yczogaXRlbS5hdXRob3JzID8gaXRlbS5hdXRob3JzLm1hcChhdXRob3IgPT4gYXV0aG9yLm5hbWUpLmpvaW4oJywgJykgOiAn5pyq55+l5L2c6ICFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBtb21lbnQobmV3IERhdGUoaXRlbS5kYXRlQ3JlYXRlZCkudmFsdWVPZigpKS5mb3JtYXQoJ1lZWVnlubRNTeaciERE5pelJylcbiAgICAgICAgICAgICAgICAgICAgfSkpKSwgaGVhZGVyOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdJRCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+S5puWQjSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkYXRlQ3JlYXRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+WIm+W7uuaXpeacnydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdhdXRob3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5L2c6ICFJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLCBhY3Rpb25zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiByb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJvb2socm93LmlkLCByb3cudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn57yW6L6RJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0Qm9va01ldGEocm93LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSB9KSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBzZWxlY3RvcnMuY29tbW9uLmN1cnJlbnRQYWdlKCdib29rcycpKHN0YXRlKTtcbiAgICBjb25zdCBib29rRW50aXRpZXMgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0aWVzKCdib29rcycpKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyDlpoLmnpznrKzkuIDkuKrlj4LmlbDkvKAgbnVsbCDkvJropobnm5bpu5jorqTlj4LmlbBcbiAgICAgICAgYm9va0xpc3ROZXdlc3Q6IHNlbGVjdG9ycy5ib29rcyh1bmRlZmluZWQsIGN1cnJlbnRQYWdlKShzdGF0ZSksXG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICAgICAgYm9va0VudGl0aWVzXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvYWRCb29rcywgc2VuZE5vdGlmaWNhdGlvbiwgb3BlbkNvbmZpcm1Nb2RhbCwgY2xvc2VDb25maXJtTW9kYWwsIHJlbW92ZUVudGl0eSwgbG9hZFVzZXJzLCBvcGVuTW9kYWwsIGluaXRpYWxpemVGb3JtLCBjbG9zZU1vZGFsIH0pKE1hbmFnZUJvb2tzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsImltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi9JbmZvVGFibGUnO1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0luZm9UYWJsZS5zY3NzJyk7XG5sZXQgSW5mb1RhYmxlID0gY2xhc3MgSW5mb1RhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgaGVhZGVyLCBkYXRhLCBlbmFibGVUb29sdGlwLCBzdHlsZSwgYWN0aW9ucywgb3BlcmF0aW9uTGFiZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGFjdGlvbnMgPSBhY3Rpb25zIHx8IFtdO1xuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVyID0gKGRhdGEubGVuZ3RoICE9PSAwICYmIF8ua2V5cyhkYXRhWzBdKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkgfHwgW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnaW5mby10YWJsZSc6IHRydWUsXG4gICAgICAgICAgICAnaW5mby10YWJsZS0tbm8taGVhZGVyJzogIWhlYWRlclxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgeyBzdHlsZU5hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHN0eWxlIHx8IHt9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsga2V5OiBpbmRleCB9LCBpdGVtLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25zXCIgfSwgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcpKSkpXG4gICAgICAgICAgICAgICAgICAgIDogUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAoaGVhZGVyLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBrZXk6IGtleSB9LCByb3dbaXRlbS5rZXldICYmIHJvd1tpdGVtLmtleV0udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvbnNcIiB9LCBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uXCIsIGtleTogaW5kZXgyLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5mbihkYXRhW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgYWN0aW9uLm5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpKTtcbiAgICAgICAgICAgICAgICB9KSkpKTtcbiAgICB9XG59O1xuSW5mb1RhYmxlID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBJbmZvVGFibGUpO1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbmZvVGFibGUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pbmZvLXRhYmxlX0I3SllVIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRoIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4OyB9XFxuXFxuLmFjdGlvbnNfcFJfTnoge1xcbiAgbWluLXdpZHRoOiA4MHB4OyB9XFxuICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzFCMjY3RjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzJlNDBkMjsgfVxcbiAgICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICMwOTBkMmI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbmZvLXRhYmxlXCI6IFwiaW5mby10YWJsZV9CN0pZVVwiLFxuXHRcImluZm8tdGFibGUtLW5vLWhlYWRlclwiOiBcImluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eFwiLFxuXHRcImFjdGlvbnNcIjogXCJhY3Rpb25zX3BSX056XCIsXG5cdFwiYWN0aW9uXCI6IFwiYWN0aW9uXzNETEt5XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4vQ29udGVudFBhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgcm91dGluZywgcGFnaW5hdGlvbkxpbmtzOiB7IG5leHQsIGxhc3QgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG5leHRcbiAgICAgICAgICAgID8gbmV4dC5wYWdlIC0gMVxuICAgICAgICAgICAgOiBhbGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRvciwgeyBhbGw6IGFsbCwgY3VycmVudDogY3VycmVudCwgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcm91dGluZy5xdWVyeSB8fCB7fVxuICAgICAgICAgICAgICAgIH0gfSkpKTtcbiAgICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG5hbWUsIGtleSB9IH0gPSBvd25Qcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgICAgIHBhZ2luYXRpb25MaW5rczogc2VsZWN0b3JzLmNvbW1vbi5wYWdpbmF0aW9uTGlua3MobmFtZSwga2V5KShzdGF0ZSlcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7fSkoQ29udGVudFBhZ2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InO1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKTtcbmxldCBQYWdpbmF0b3IgPSBjbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcGFyc2VVcmwocGF0aG5hbWUsIHF1ZXJ5LCBwYWdlTnVtKSB7XG4gICAgICAgIGxldCB1cmxTdHlsZSA9IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgICAgICAgOiAncXVlcnknO1xuICAgICAgICBpZiAodXJsU3R5bGUgPT09ICdxdWVyeScpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQoXy5vbWl0KHF1ZXJ5LCBbJ3BhZ2UnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cXVlcnlQYXJ0ID8gYD8ke3F1ZXJ5UGFydH0mYCA6ICc/J31wYWdlPSR7cGFnZU51bX1gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQocXVlcnkpO1xuICAgICAgICByZXR1cm4gYCR7cGF0aG5hbWV9L3BhZ2UvJHtwYWdlTnVtfT8ke3F1ZXJ5UGFydH1gO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzO1xuICAgICAgICBjb25zdCB0b3RhbFJhbmdlRW5kSW5kZXggPSB0aGlzLnByb3BzLmFsbCAtIDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCkgLSAxO1xuICAgICAgICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gcmFuZ2U7XG4gICAgICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2U7XG4gICAgICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2U7XG4gICAgICAgIGxldCByaWdodFNwcmVhZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDpqozor4FcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDpobXnoIHlv4XpobvkuLrmlbDlrZfvvIzljbTlvpfliLAgJHt0eXBlb2YgY3VycmVudEluZGV4fWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiByYW5nZUVuZEluZGV4IHx8IGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mhteeggeS4jeiDveWkp+S6juaJgOaciemhtemdouaVsOebruaIluWwj+S6jiAx77yBJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4O1xuICAgICAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleDtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXggLSAocmFuZ2UgKiAyICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByaWdodFNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdFNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgc3ByZWFkXG4gICAgICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHBhZ2VzID0gc3BkLmNvbmNhdChwYWdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiB0b3RhbFJhbmdlRW5kSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KHNwZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJwYWdpbmF0b3JcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1udW0tLWN1cnJlbnRcIiB9LCBwYWdlLnBhZ2VOdW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1zcHJlYWRcIiB9LCBcIi4uLlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCwgc3R5bGVOYW1lOiBcInBhZ2UtbnVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiB0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0sIHBhZ2UucGFnZU51bSkpKTtcbiAgICAgICAgICAgIH0pKSkpKTtcbiAgICB9XG59O1xuUGFnaW5hdG9yID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBQYWdpbmF0b3IpO1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUGFnaW5hdG9yLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXNwcmVhZF8ySU5IVSwgLnBhZ2UtbnVtXzJvUFFVIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWluLXdpZHRoOiAzN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdpbmF0b3JfMVJIQW0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4ucGFnZS1zcHJlYWRfMklOSFUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBhZ2UtbnVtXzJvUFFVLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDNweDsgfVxcbiAgLnBhZ2UtbnVtXzJvUFFVIGE6aG92ZXIsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2Utc3ByZWFkXCI6IFwicGFnZS1zcHJlYWRfMklOSFVcIixcblx0XCJwYWdlLW51bVwiOiBcInBhZ2UtbnVtXzJvUFFVXCIsXG5cdFwicGFnZS1udW0tLWN1cnJlbnRcIjogXCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFxuXHRcInBhZ2luYXRvclwiOiBcInBhZ2luYXRvcl8xUkhBbVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1vbWVudFwiXG4gKiogbW9kdWxlIGlkID0gMzQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuL0ZpbGVVcGxvYWRlcic7XG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ZpbGVVcGxvYWRlci9pbmRleC50c1xuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5jbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIG9uQ29tcGxldGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIOWmguaenOi/meS5iOiuvue9riBjb250ZW50VHlwZSDkvJrlr7zoh7TkuI3lrZjlnKggYm91bmRhcnkg55qE6Zeu6aKYLCDpnIDopoHorr7nva7kuLogZmFsc2VcbiAgICAgICAgICAgIC8vIGNvbnRlbnRUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZGF0YTIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YTIsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoanFYSFIucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVybCwgYWNjZXB0LCBub0FqYXgsIGNoaWxkcmVuLCBuYW1lLCBtdWx0aXBsZSwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vIOWmguaenOmhtemdouS4iuacieS4pOS4quS4iuS8oOe7hOS7tuWPr+iDveS8muWHuumUmVxuICAgICAgICAvLyBpbnB1dCB2YWx1ZSDorr7kuLrnqbrkvJrkvb/lvpfmr4/mrKHpgInkuK3mlofku7blkI7pg73op6blj5Egb25DaGFuZ2VcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZpbGUtdHJpZ2dlclwiLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmlsZUlucHV0KS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHN0eWxlOiBfX2Fzc2lnbih7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgIH0sIHN0eWxlKSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHVybCwgbWV0aG9kOiBcInBvc3RcIiwgZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIHN0eWxlOiBub0FqYXggPyB7fSA6IHsgZGlzcGxheTogJ25vbmUnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBtdWx0aXBsZTogbXVsdGlwbGUsIHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBuYW1lIHx8ICdmaWxlJywgaWQ6IFwidXBsb2FkLWZpbGVcIiwgdmFsdWU6IG5vQWpheCA/IHVuZGVmaW5lZCA6ICcnLCByZWY6IHJlZiA9PiB7IHRoaXMuZmlsZUlucHV0ID0gcmVmOyB9LCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgYWNjZXB0OiBhY2NlcHQgfHwgJy4qJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCLmj5DkuqRcIiB9KSksXG4gICAgICAgICAgICBjaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3hcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGZvcm0gZnJvbSAnYmV0dGVyLXJlZHV4LWZvcm0nO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgY2xvc2VNb2RhbCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXQsIFRleHRhcmVhIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTW9kYWwvTW9kYWxGb290ZXInO1xubGV0IEJvb2tNZXRhRm9ybSA9IGNsYXNzIEJvb2tNZXRhRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmllbGRzOiB7IHRpdGxlLCBhdXRob3JzLCBkZXNjcmlwdGlvbiwgY292ZXIgfSwgaGFuZGxlU3VibWl0LCBjbG9zZU1vZGFsLCBvblNhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLkuablkI1cIiB9LCB0aXRsZSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLkvZzogIVcIiB9LCBhdXRob3JzKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRhcmVhLCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuaPj+i/sFwiIH0sIGRlc2NyaXB0aW9uKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuWwgemdolwiIH0sIGNvdmVyKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsRm9vdGVyLCB7IG9uQ29uZmlybTogaGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblNhdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSksIG9uQ2FuY2VsOiBjbG9zZU1vZGFsIH0pKSk7XG4gICAgfVxufTtcbkJvb2tNZXRhRm9ybSA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUsIHsgc2VuZE5vdGlmaWNhdGlvbiwgY2xvc2VNb2RhbCB9KSxcbiAgICBmb3JtKHtcbiAgICAgICAgZm9ybTogJ2Jvb2tNZXRhJyxcbiAgICAgICAgZmllbGRzOiBbJ3RpdGxlJywgJ2F1dGhvcnMnLCAnZGVzY3JpcHRpb24nLCAnY292ZXInXSxcbiAgICAgICAgZGVzdHJveU9uVW5tb3VudDogdHJ1ZVxuICAgIH0pXG5dLCBCb29rTWV0YUZvcm0pO1xuZXhwb3J0IGRlZmF1bHQgQm9va01ldGFGb3JtO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlQm9va3MvY29tcG9uZW50cy9Cb29rTWV0YUZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==