exports.ids = [14];
exports.modules = {

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

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _actions = __webpack_require__(93);
	
	var _InfoTable = __webpack_require__(330);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _selectors = __webpack_require__(113);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _DocContainer = __webpack_require__(204);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _ContentPage = __webpack_require__(334);
	
	var _ContentPage2 = _interopRequireDefault(_ContentPage);
	
	var _helpers = __webpack_require__(58);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _moment = __webpack_require__(340);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ManageUsers = function (_Component) {
	    _inherits(ManageUsers, _Component);
	
	    function ManageUsers(props) {
	        _classCallCheck(this, ManageUsers);
	
	        return _possibleConstructorReturn(this, (ManageUsers.__proto__ || Object.getPrototypeOf(ManageUsers)).call(this, props));
	    }
	
	    _createClass(ManageUsers, [{
	        key: 'loadUsers',
	        value: function loadUsers() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	            this.props.loadUsers({
	                page: props.routing.query.page || '1'
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var _this2 = this;
	
	            _helpers2.default.onRoutingChange(function (routing) {
	                document.body.scrollTop = 0;
	                _this2.loadUsers(nextProps);
	            })(nextProps, this.props);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadUsers();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var users = this.props.users;
	
	            return _react2.default.createElement(_DocContainer2.default, { title: "用户管理" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
	                    name: 'users'
	                } }, _react2.default.createElement(_InfoTable2.default, { data: users.map(function (user) {
	                    return Object.assign({}, user, {
	                        dateCreated: (0, _moment2.default)(new Date(user.dateCreated).valueOf()).format('YYYY年MM月DD日')
	                    });
	                }) })));
	        }
	    }]);
	
	    return ManageUsers;
	}(_react.Component);
	
	function mapStateToProps(state, ownProps) {
	    return {
	        users: selectors.users(state),
	        routing: state.routing.locationBeforeTransitions
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadUsers: _actions.loadUsers })(ManageUsers);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cz9kZjAxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3g/MTRkZCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz84Y2FkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHM/ZWNlZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeD83ZTY2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cz9hNThlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4PzE3NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzP2Y1ZGMqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNDc2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiP2E4OGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJzdHlsZXMiLCJyZXF1aXJlIiwiSW5mb1RhYmxlIiwicHJvcHMiLCJoZWFkZXIiLCJkYXRhIiwiZW5hYmxlVG9vbHRpcCIsInN0eWxlIiwiYWN0aW9ucyIsIm9wZXJhdGlvbkxhYmVsIiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVOYW1lIiwiaXRlbSIsImluZGV4Iiwicm93IiwidG9TdHJpbmciLCJhY3Rpb24iLCJpbmRleDIiLCJvbkNsaWNrIiwiZm4iLCJzZWxlY3RvcnMiLCJDb250ZW50UGFnZSIsImNoaWxkcmVuIiwicm91dGluZyIsInBhZ2luYXRpb25MaW5rcyIsIm5leHQiLCJsYXN0IiwiYWxsIiwicGFnZSIsImN1cnJlbnQiLCJ1cmwiLCJwYXRobmFtZSIsInF1ZXJ5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInBhZ2luYXRpb24iLCJsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIiwiY29tbW9uIiwiUGFnaW5hdG9yIiwicGFnZU51bSIsInVybFN0eWxlIiwicXVlcnlQYXJ0IiwicGFyc2VVcmxlbmNvZGVkIiwib21pdCIsInJhbmdlIiwidG90YWxSYW5nZUVuZEluZGV4IiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJyYW5nZVN0YXJ0SW5kZXgiLCJyYW5nZUVuZEluZGV4IiwibGVmdFNwcmVhZCIsInJpZ2h0U3ByZWFkIiwicGFnZXMiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImNvbmNhdCIsImlzQ3VycmVudCIsInNwZCIsImlzU3ByZWFkIiwidG8iLCJwYXJzZVVybCIsIk1hbmFnZVVzZXJzIiwibG9hZFVzZXJzIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwib25Sb3V0aW5nQ2hhbmdlIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwidXNlcnMiLCJ0aXRsZSIsImFzc2lnbiIsInVzZXIiLCJkYXRlQ3JlYXRlZCIsIkRhdGUiLCJ2YWx1ZU9mIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFT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ICcuL0luZm9UYWJsZSc7XG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKTtcbmxldCBJbmZvVGFibGUgPSBjbGFzcyBJbmZvVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBoZWFkZXIsIGRhdGEsIGVuYWJsZVRvb2x0aXAsIHN0eWxlLCBhY3Rpb25zLCBvcGVyYXRpb25MYWJlbCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgYWN0aW9ucyA9IGFjdGlvbnMgfHwgW107XG4gICAgICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgICAgICBoZWFkZXIgPSAoZGF0YS5sZW5ndGggIT09IDAgJiYgXy5rZXlzKGRhdGFbMF0pLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdpbmZvLXRhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICdpbmZvLXRhYmxlLS1uby1oZWFkZXInOiAhaGVhZGVyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IHN0eWxlTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUgfHwge30gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLFxuICAgICAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBrZXk6IGluZGV4IH0sIGl0ZW0ubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvbnNcIiB9LCBvcGVyYXRpb25MYWJlbCB8fCAn5pON5L2cJykpKSlcbiAgICAgICAgICAgICAgICAgICAgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGtleToga2V5IH0sIHJvd1tpdGVtLmtleV0gJiYgcm93W2l0ZW0ua2V5XS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uc1wiIH0sIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIGFjdGlvbnMubWFwKChhY3Rpb24sIGluZGV4MikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25cIiwga2V5OiBpbmRleDIsIG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmZuKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBhY3Rpb24ubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSkpO1xuICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgIH1cbn07XG5JbmZvVGFibGUgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEluZm9UYWJsZSk7XG5leHBvcnQgZGVmYXVsdCBJbmZvVGFibGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0luZm9UYWJsZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5pbmZvLXRhYmxlLS1uby1oZWFkZXJfMnYzeHgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmluZm8tdGFibGVfQjdKWVUge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjY2O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGgge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gICAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICAgICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICAgIG1heC13aWR0aDogMjUwcHg7IH1cXG5cXG4uYWN0aW9uc19wUl9OeiB7XFxuICBtaW4td2lkdGg6IDgwcHg7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3kge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjMUIyNjdGO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMmU0MGQyOyB9XFxuICAgIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6YWN0aXZlIHtcXG4gICAgICBjb2xvcjogIzA5MGQyYjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImluZm8tdGFibGVcIjogXCJpbmZvLXRhYmxlX0I3SllVXCIsXG5cdFwiaW5mby10YWJsZS0tbm8taGVhZGVyXCI6IFwiaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4XCIsXG5cdFwiYWN0aW9uc1wiOiBcImFjdGlvbnNfcFJfTnpcIixcblx0XCJhY3Rpb25cIjogXCJhY3Rpb25fM0RMS3lcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSc7XG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5jbGFzcyBDb250ZW50UGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCByb3V0aW5nLCBwYWdpbmF0aW9uTGlua3M6IHsgbmV4dCwgbGFzdCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV4dFxuICAgICAgICAgICAgPyBuZXh0LnBhZ2UgLSAxXG4gICAgICAgICAgICA6IGFsbDtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdG9yLCB7IGFsbDogYWxsLCBjdXJyZW50OiBjdXJyZW50LCB1cmw6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByb3V0aW5nLnF1ZXJ5IHx8IHt9XG4gICAgICAgICAgICAgICAgfSB9KSkpO1xuICAgIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgbmFtZSwga2V5IH0gfSA9IG93blByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICAgICAgcGFnaW5hdGlvbkxpbmtzOiBzZWxlY3RvcnMuY29tbW9uLnBhZ2luYXRpb25MaW5rcyhuYW1lLCBrZXkpKHN0YXRlKVxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHt9KShDb250ZW50UGFnZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcic7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpO1xubGV0IFBhZ2luYXRvciA9IGNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBwYXJzZVVybChwYXRobmFtZSwgcXVlcnksIHBhZ2VOdW0pIHtcbiAgICAgICAgbGV0IHVybFN0eWxlID0gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnVybFN0eWxlXG4gICAgICAgICAgICA6ICdxdWVyeSc7XG4gICAgICAgIGlmICh1cmxTdHlsZSA9PT0gJ3F1ZXJ5Jykge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChfLm9taXQocXVlcnksIFsncGFnZSddKSk7XG4gICAgICAgICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHF1ZXJ5UGFydCA9IHV0aWxzLnBhcnNlVXJsZW5jb2RlZChxdWVyeSk7XG4gICAgICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWA7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLnByb3BzLnJhbmdlID8gdGhpcy5wcm9wcy5yYW5nZSA6IDM7XG4gICAgICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQodGhpcy5wcm9wcy5jdXJyZW50KSAtIDE7XG4gICAgICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZTtcbiAgICAgICAgbGV0IHJhbmdlRW5kSW5kZXggPSBjdXJyZW50SW5kZXggKyByYW5nZTtcbiAgICAgICAgbGV0IGxlZnRTcHJlYWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2U7XG4gICAgICAgIGxldCBwYWdlcyA9IFtdO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy51cmw7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hbGwgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FsbCDlv4XpobvkuLogbnVtYmVyIOexu+Wei++8gScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmqjOivgVxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmFuZ2UgKiAyICsgMSA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIOaAu+mVv+W6puWwj+S6jiByYW5nZSDnm7TlvoRcbiAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXg7XG4gICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aSE55CG5Y+z5L6n5rqi5Ye6XG4gICAgICAgICAgICBpZiAocmFuZ2VFbmRJbmRleCA+PSB0b3RhbFJhbmdlRW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4O1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJpZ2h0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHJhbmdlICogMiArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gcmFuZ2VTdGFydEluZGV4OyBpIDw9IHJhbmdlRW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoW3tcbiAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogaSArIDEsXG4gICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudDogaSA9PT0gY3VycmVudEluZGV4XG4gICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBzcHJlYWRcbiAgICAgICAgaWYgKGxlZnRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmlnaHRTcHJlYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwZCA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMuYWxsICE9PSAxICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInBhZ2luYXRvclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzQ3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLW51bS0tY3VycmVudFwiIH0sIHBhZ2UucGFnZU51bSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc1NwcmVhZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXgsIHN0eWxlTmFtZTogXCJwYWdlLXNwcmVhZFwiIH0sIFwiLi4uXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1udW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IHRoaXMucGFyc2VVcmwodXJsLnBhdGhuYW1lLCB1cmwucXVlcnksIHBhZ2UucGFnZU51bSkgfSwgcGFnZS5wYWdlTnVtKSkpO1xuICAgICAgICAgICAgfSkpKSkpO1xuICAgIH1cbn07XG5QYWdpbmF0b3IgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFBhZ2luYXRvcik7XG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Utc3ByZWFkXzJJTkhVLCAucGFnZS1udW1fMm9QUVUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtaW4td2lkdGg6IDM3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2luYXRvcl8xUkhBbSB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbi5wYWdlLXNwcmVhZF8ySU5IVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgM3B4OyB9XFxuICAucGFnZS1udW1fMm9QUVUgYTpob3ZlciwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS1zcHJlYWRcIjogXCJwYWdlLXNwcmVhZF8ySU5IVVwiLFxuXHRcInBhZ2UtbnVtXCI6IFwicGFnZS1udW1fMm9QUVVcIixcblx0XCJwYWdlLW51bS0tY3VycmVudFwiOiBcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9tZW50XCJcbiAqKiBtb2R1bGUgaWQgPSAzNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvYWRVc2VycyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5jbGFzcyBNYW5hZ2VVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBsb2FkVXNlcnMocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZFVzZXJzKHtcbiAgICAgICAgICAgIHBhZ2U6IHByb3BzLnJvdXRpbmcucXVlcnkucGFnZSB8fCAnMSdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaGVscGVycy5vblJvdXRpbmdDaGFuZ2Uocm91dGluZyA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvYWRVc2VycyhuZXh0UHJvcHMpO1xuICAgICAgICB9KShuZXh0UHJvcHMsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVXNlcnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB1c2VycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyB0aXRsZTogXCLnlKjmiLfnrqHnkIZcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50UGFnZSwgeyBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICd1c2VycydcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvVGFibGUsIHsgZGF0YTogdXNlcnMubWFwKHVzZXIgPT4gKE9iamVjdC5hc3NpZ24oe30sIHVzZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVDcmVhdGVkOiBtb21lbnQobmV3IERhdGUodXNlci5kYXRlQ3JlYXRlZCkudmFsdWVPZigpKS5mb3JtYXQoJ1lZWVnlubRNTeaciERE5pelJylcbiAgICAgICAgICAgICAgICAgICAgfSkpKSB9KSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcnM6IHNlbGVjdG9ycy51c2VycyhzdGF0ZSksXG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9hZFVzZXJzIH0pKE1hbmFnZVVzZXJzKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=