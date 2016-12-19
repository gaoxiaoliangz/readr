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

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _InfoTable = __webpack_require__(330);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _DocContainer = __webpack_require__(201);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50cz9kZjAxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS50c3g/MTRkZCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz9hODcxKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzcz84Y2FkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHM/ZWNlZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeD83ZTY2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9pbmRleC50cz9hNThlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4PzE3NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzP2Y1ZGMqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNDc2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiP2E4OGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZVVzZXJzL01hbmFnZVVzZXJzLnRzeCJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJzdHlsZXMiLCJyZXF1aXJlIiwiSW5mb1RhYmxlIiwicHJvcHMiLCJoZWFkZXIiLCJkYXRhIiwiZW5hYmxlVG9vbHRpcCIsInN0eWxlIiwiYWN0aW9ucyIsIm9wZXJhdGlvbkxhYmVsIiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVOYW1lIiwiaXRlbSIsImluZGV4Iiwicm93IiwidG9TdHJpbmciLCJhY3Rpb24iLCJpbmRleDIiLCJvbkNsaWNrIiwiZm4iLCJzZWxlY3RvcnMiLCJDb250ZW50UGFnZSIsImNoaWxkcmVuIiwicm91dGluZyIsInBhZ2luYXRpb25MaW5rcyIsIm5leHQiLCJsYXN0IiwiYWxsIiwicGFnZSIsImN1cnJlbnQiLCJ1cmwiLCJwYXRobmFtZSIsInF1ZXJ5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsInBhZ2luYXRpb24iLCJsb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zIiwiY29tbW9uIiwiUGFnaW5hdG9yIiwicGFnZU51bSIsInVybFN0eWxlIiwicXVlcnlQYXJ0IiwicGFyc2VVcmxlbmNvZGVkIiwib21pdCIsInJhbmdlIiwidG90YWxSYW5nZUVuZEluZGV4IiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJyYW5nZVN0YXJ0SW5kZXgiLCJyYW5nZUVuZEluZGV4IiwibGVmdFNwcmVhZCIsInJpZ2h0U3ByZWFkIiwicGFnZXMiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImNvbmNhdCIsImlzQ3VycmVudCIsInNwZCIsImlzU3ByZWFkIiwidG8iLCJwYXJzZVVybCIsIk1hbmFnZVVzZXJzIiwibG9hZFVzZXJzIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwib25Sb3V0aW5nQ2hhbmdlIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwidXNlcnMiLCJ0aXRsZSIsImFzc2lnbiIsInVzZXIiLCJkYXRlQ3JlYXRlZCIsIkRhdGUiLCJ2YWx1ZU9mIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBVEEsS0FBSUEsYUFBYyxhQUFRLFVBQUtBLFVBQWQsSUFBNkIsVUFBVUMsVUFBVixFQUFzQkMsTUFBdEIsRUFBOEJDLEdBQTlCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJQyxVQUFVQyxNQUFsQjtBQUFBLFNBQTBCQyxJQUFJSCxJQUFJLENBQUosR0FBUUgsTUFBUixHQUFpQkUsU0FBUyxJQUFULEdBQWdCQSxPQUFPSyxPQUFPQyx3QkFBUCxDQUFnQ1IsTUFBaEMsRUFBd0NDLEdBQXhDLENBQXZCLEdBQXNFQyxJQUFySDtBQUFBLFNBQTJITyxDQUEzSDtBQUNBLFNBQUksUUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQSxRQUFRQyxRQUFmLEtBQTRCLFVBQS9ELEVBQTJFTCxJQUFJSSxRQUFRQyxRQUFSLENBQWlCWixVQUFqQixFQUE2QkMsTUFBN0IsRUFBcUNDLEdBQXJDLEVBQTBDQyxJQUExQyxDQUFKLENBQTNFLEtBQ0ssS0FBSyxJQUFJVSxJQUFJYixXQUFXTSxNQUFYLEdBQW9CLENBQWpDLEVBQW9DTyxLQUFLLENBQXpDLEVBQTRDQSxHQUE1QztBQUFpRCxhQUFJSCxJQUFJVixXQUFXYSxDQUFYLENBQVIsRUFBdUJOLElBQUksQ0FBQ0gsSUFBSSxDQUFKLEdBQVFNLEVBQUVILENBQUYsQ0FBUixHQUFlSCxJQUFJLENBQUosR0FBUU0sRUFBRVQsTUFBRixFQUFVQyxHQUFWLEVBQWVLLENBQWYsQ0FBUixHQUE0QkcsRUFBRVQsTUFBRixFQUFVQyxHQUFWLENBQTVDLEtBQStESyxDQUFuRTtBQUF4RSxNQUNMLE9BQU9ILElBQUksQ0FBSixJQUFT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b1RhYmxlJztcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9JbmZvVGFibGUuc2NzcycpO1xubGV0IEluZm9UYWJsZSA9IGNsYXNzIEluZm9UYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IGhlYWRlciwgZGF0YSwgZW5hYmxlVG9vbHRpcCwgc3R5bGUsIGFjdGlvbnMsIG9wZXJhdGlvbkxhYmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBhY3Rpb25zID0gYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIGhlYWRlciA9IChkYXRhLmxlbmd0aCAhPT0gMCAmJiBfLmtleXMoZGF0YVswXSkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpIHx8IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2luZm8tdGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgJ2luZm8tdGFibGUtLW5vLWhlYWRlcic6ICFoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgc3R5bGVOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBzdHlsZSB8fCB7fSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogaW5kZXggfSwgaXRlbS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZU5hbWU6IFwiYWN0aW9uc1wiIH0sIG9wZXJhdGlvbkxhYmVsIHx8ICfmk43kvZwnKSkpKVxuICAgICAgICAgICAgICAgICAgICA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICBkYXRhLm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubWFwKGhlYWRlciwgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBrZXkgfSwgcm93W2l0ZW0ua2V5XSAmJiByb3dbaXRlbS5rZXldLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlTmFtZTogXCJhY3Rpb25zXCIgfSwgYWN0aW9ucy5sZW5ndGggIT09IDAgJiYgYWN0aW9ucy5tYXAoKGFjdGlvbiwgaW5kZXgyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImFjdGlvblwiLCBrZXk6IGluZGV4Miwgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZm4oZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIGFjdGlvbi5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpKSk7XG4gICAgICAgICAgICAgICAgfSkpKSk7XG4gICAgfVxufTtcbkluZm9UYWJsZSA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgSW5mb1RhYmxlKTtcbmV4cG9ydCBkZWZhdWx0IEluZm9UYWJsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vSW5mb1RhYmxlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyID4gdGQsIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB0aCB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uaW5mby10YWJsZV9CN0pZVSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDIuNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2NjY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsaW5lLWhlaWdodDogMi41OyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0aCB7XFxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgPiB0ZCwgLmluZm8tdGFibGVfQjdKWVUgPiB0Ym9keSA+IHRyIHRoIHtcXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgICAgbWF4LXdpZHRoOiAyNTBweDsgfVxcblxcbi5hY3Rpb25zX3BSX056IHtcXG4gIG1pbi13aWR0aDogODBweDsgfVxcbiAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxQjI2N0Y7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmhvdmVyIHtcXG4gICAgICBjb2xvcjogIzJlNDBkMjsgfVxcbiAgICAuYWN0aW9uc19wUl9OeiAuYWN0aW9uXzNETEt5OmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICMwOTBkMmI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpbmZvLXRhYmxlXCI6IFwiaW5mby10YWJsZV9CN0pZVVwiLFxuXHRcImluZm8tdGFibGUtLW5vLWhlYWRlclwiOiBcImluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eFwiLFxuXHRcImFjdGlvbnNcIjogXCJhY3Rpb25zX3BSX056XCIsXG5cdFwiYWN0aW9uXCI6IFwiYWN0aW9uXzNETEt5XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4vQ29udGVudFBhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudFBhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgcm91dGluZywgcGFnaW5hdGlvbkxpbmtzOiB7IG5leHQsIGxhc3QgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgYWxsID0gbGFzdCAmJiBsYXN0LnBhZ2UgfHwgMTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG5leHRcbiAgICAgICAgICAgID8gbmV4dC5wYWdlIC0gMVxuICAgICAgICAgICAgOiBhbGw7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRvciwgeyBhbGw6IGFsbCwgY3VycmVudDogY3VycmVudCwgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByb3V0aW5nLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcm91dGluZy5xdWVyeSB8fCB7fVxuICAgICAgICAgICAgICAgIH0gfSkpKTtcbiAgICB9XG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG5hbWUsIGtleSB9IH0gPSBvd25Qcm9wcztcbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMgfHwge30sXG4gICAgICAgIHBhZ2luYXRpb25MaW5rczogc2VsZWN0b3JzLmNvbW1vbi5wYWdpbmF0aW9uTGlua3MobmFtZSwga2V5KShzdGF0ZSlcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7fSkoQ29udGVudFBhZ2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL0NvbnRlbnRQYWdlLnRzeFxuICoqLyIsImltcG9ydCBQYWdpbmF0b3IgZnJvbSAnLi9QYWdpbmF0b3InO1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vUGFnaW5hdG9yLnNjc3MnKTtcbmxldCBQYWdpbmF0b3IgPSBjbGFzcyBQYWdpbmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcGFyc2VVcmwocGF0aG5hbWUsIHF1ZXJ5LCBwYWdlTnVtKSB7XG4gICAgICAgIGxldCB1cmxTdHlsZSA9IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgICAgICAgOiAncXVlcnknO1xuICAgICAgICBpZiAodXJsU3R5bGUgPT09ICdxdWVyeScpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQoXy5vbWl0KHF1ZXJ5LCBbJ3BhZ2UnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIGAke3BhdGhuYW1lfSR7cXVlcnlQYXJ0ID8gYD8ke3F1ZXJ5UGFydH0mYCA6ICc/J31wYWdlPSR7cGFnZU51bX1gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQocXVlcnkpO1xuICAgICAgICByZXR1cm4gYCR7cGF0aG5hbWV9L3BhZ2UvJHtwYWdlTnVtfT8ke3F1ZXJ5UGFydH1gO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5wcm9wcy5yYW5nZSA/IHRoaXMucHJvcHMucmFuZ2UgOiAzO1xuICAgICAgICBjb25zdCB0b3RhbFJhbmdlRW5kSW5kZXggPSB0aGlzLnByb3BzLmFsbCAtIDE7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCkgLSAxO1xuICAgICAgICBsZXQgcmFuZ2VTdGFydEluZGV4ID0gY3VycmVudEluZGV4IC0gcmFuZ2U7XG4gICAgICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2U7XG4gICAgICAgIGxldCBsZWZ0U3ByZWFkID0gZmFsc2U7XG4gICAgICAgIGxldCByaWdodFNwcmVhZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcGFnZXMgPSBbXTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMudXJsO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuYWxsICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbGwg5b+F6aG75Li6IG51bWJlciDnsbvlnovvvIEnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDpqozor4FcbiAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50SW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDpobXnoIHlv4XpobvkuLrmlbDlrZfvvIzljbTlvpfliLAgJHt0eXBlb2YgY3VycmVudEluZGV4fWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPiByYW5nZUVuZEluZGV4IHx8IGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+mhteeggeS4jeiDveWkp+S6juaJgOaciemhtemdouaVsOebruaIluWwj+S6jiAx77yBJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlICogMiArIDEgPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgICAgICAvLyDmgLvplb/luqblsI/kuo4gcmFuZ2Ug55u05b6EXG4gICAgICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4O1xuICAgICAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWkhOeQhuWPs+S+p+a6ouWHulxuICAgICAgICAgICAgaWYgKHJhbmdlRW5kSW5kZXggPj0gdG90YWxSYW5nZUVuZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleDtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSB0b3RhbFJhbmdlRW5kSW5kZXggLSAocmFuZ2UgKiAyICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByaWdodFNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2VTdGFydEluZGV4IDw9IDApIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdFNwcmVhZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IHJhbmdlU3RhcnRJbmRleDsgaSA8PSByYW5nZUVuZEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KFt7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IGkgKyAxLFxuICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnQ6IGkgPT09IGN1cnJlbnRJbmRleFxuICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgc3ByZWFkXG4gICAgICAgIGlmIChsZWZ0U3ByZWFkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3ByZWFkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHBhZ2VzID0gc3BkLmNvbmNhdChwYWdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0U3ByZWFkKSB7XG4gICAgICAgICAgICBjb25zdCBzcGQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc1NwcmVhZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiB0b3RhbFJhbmdlRW5kSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHBhZ2VzID0gcGFnZXMuY29uY2F0KHNwZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJwYWdpbmF0b3JcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIG51bGwsIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5pc0N1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1udW0tLWN1cnJlbnRcIiB9LCBwYWdlLnBhZ2VOdW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNTcHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdHlsZU5hbWU6IFwicGFnZS1zcHJlYWRcIiB9LCBcIi4uLlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCwgc3R5bGVOYW1lOiBcInBhZ2UtbnVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiB0aGlzLnBhcnNlVXJsKHVybC5wYXRobmFtZSwgdXJsLnF1ZXJ5LCBwYWdlLnBhZ2VOdW0pIH0sIHBhZ2UucGFnZU51bSkpKTtcbiAgICAgICAgICAgIH0pKSkpKTtcbiAgICB9XG59O1xuUGFnaW5hdG9yID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBQYWdpbmF0b3IpO1xuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vUGFnaW5hdG9yLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXNwcmVhZF8ySU5IVSwgLnBhZ2UtbnVtXzJvUFFVIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWluLXdpZHRoOiAzN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbi5wYWdpbmF0b3JfMVJIQW0ge1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4ucGFnZS1zcHJlYWRfMklOSFUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLnBhZ2UtbnVtXzJvUFFVLCAucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDNweDsgfVxcbiAgLnBhZ2UtbnVtXzJvUFFVIGE6aG92ZXIsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4ucGFnZS1udW0tLWN1cnJlbnRfMVkybUUge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG4gIGN1cnNvcjogZGVmYXVsdDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2Utc3ByZWFkXCI6IFwicGFnZS1zcHJlYWRfMklOSFVcIixcblx0XCJwYWdlLW51bVwiOiBcInBhZ2UtbnVtXzJvUFFVXCIsXG5cdFwicGFnZS1udW0tLWN1cnJlbnRcIjogXCJwYWdlLW51bS0tY3VycmVudF8xWTJtRVwiLFxuXHRcInBhZ2luYXRvclwiOiBcInBhZ2luYXRvcl8xUkhBbVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9QYWdpbmF0b3IvUGFnaW5hdG9yLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1vbWVudFwiXG4gKiogbW9kdWxlIGlkID0gMzQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBsb2FkVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBJbmZvVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbmZvVGFibGUnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJztcbmltcG9ydCBDb250ZW50UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRlbnRQYWdlJztcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgbG9hZFVzZXJzKHByb3BzID0gdGhpcy5wcm9wcykge1xuICAgICAgICB0aGlzLnByb3BzLmxvYWRVc2Vycyh7XG4gICAgICAgICAgICBwYWdlOiBwcm9wcy5yb3V0aW5nLnF1ZXJ5LnBhZ2UgfHwgJzEnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGhlbHBlcnMub25Sb3V0aW5nQ2hhbmdlKHJvdXRpbmcgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5sb2FkVXNlcnMobmV4dFByb3BzKTtcbiAgICAgICAgfSkobmV4dFByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZFVzZXJzKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgdXNlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi55So5oi3566h55CGXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudFBhZ2UsIHsgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAndXNlcnMnXG4gICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1RhYmxlLCB7IGRhdGE6IHVzZXJzLm1hcCh1c2VyID0+IChPYmplY3QuYXNzaWduKHt9LCB1c2VyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogbW9tZW50KG5ldyBEYXRlKHVzZXIuZGF0ZUNyZWF0ZWQpLnZhbHVlT2YoKSkuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpXG4gICAgICAgICAgICAgICAgICAgIH0pKSkgfSkpKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJzOiBzZWxlY3RvcnMudXNlcnMoc3RhdGUpLFxuICAgICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGxvYWRVc2VycyB9KShNYW5hZ2VVc2Vycyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9NYW5hZ2VVc2Vycy50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9