exports.ids = [13];
exports.modules = {

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

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _actions = __webpack_require__(85);
	
	var _InfoTable = __webpack_require__(359);
	
	var _InfoTable2 = _interopRequireDefault(_InfoTable);
	
	var _selectors = __webpack_require__(231);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _DocContainer = __webpack_require__(245);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
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
	
	var ManageUsers = function (_Component) {
	    _inherits(ManageUsers, _Component);
	
	    function ManageUsers(props) {
	        _classCallCheck(this, ManageUsers);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageUsers).call(this, props));
	    }
	
	    _createClass(ManageUsers, [{
	        key: 'loadUsers',
	        value: function loadUsers() {
	            var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvaW5kZXgudHM/YWI4MSIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnRzeD9jYWQ3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzP2E4NzEqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzPzhjYWQiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvaW5kZXgudHM/MjYyYyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db250ZW50UGFnZS9Db250ZW50UGFnZS50c3g/YjM2YiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzPzVkYjUiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4P2I2NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL1BhZ2luYXRvci5zY3NzP2Y1ZGMqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzcz9mNDc2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiP2E4OGQiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VVc2Vycy9NYW5hZ2VVc2Vycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RnQjs7OztBQUNsQjs7OztBQUNhOzs7O0FBQ087Ozs7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YmxlIGZyb20gJy4vSW5mb1RhYmxlJ1xuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vSW5mb1RhYmxlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgaGVhZGVyPzoge1xuICAgIGtleTogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nIHwgSlNYLkVsZW1lbnRcbiAgfVtdXG4gIGRhdGE6IGFueVtdXG4gIC8vIHRvZG9cbiAgZW5hYmxlVG9vbHRpcD86IGJvb2xlYW5cbiAgc3R5bGU/OiBhbnlcbiAgYWN0aW9ucz86IHtcbiAgICBuYW1lOiBzdHJpbmcgfCBKU1guRWxlbWVudFxuICAgIGZuOiAocm93RGF0YTogYW55KSA9PiB2b2lkXG4gIH1bXVxuICBvcGVyYXRpb25MYWJlbD86IHN0cmluZyB8IEpTWC5FbGVtZW50XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEluZm9UYWJsZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBoZWFkZXIsIGRhdGEsIGVuYWJsZVRvb2x0aXAsIHN0eWxlLCBhY3Rpb25zLCBvcGVyYXRpb25MYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIGFjdGlvbnMgPSBhY3Rpb25zIHx8IFtdXG5cbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgaGVhZGVyID0gKGRhdGEubGVuZ3RoICE9PSAwICYmIF8ua2V5cyhkYXRhWzBdKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgbmFtZToga2V5XG4gICAgICAgIH1cbiAgICAgIH0pKSB8fCBbXVxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2luZm8tdGFibGUnOiB0cnVlLFxuICAgICAgJ2luZm8tdGFibGUtLW5vLWhlYWRlcic6ICFoZWFkZXJcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlIHx8IHt9fT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlclxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fT57aXRlbS5uYW1lfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRoPnsgb3BlcmF0aW9uTGFiZWwgfHwgJ+aTjeS9nCcgfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogPHRyPjwvdHI+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfLm1hcChoZWFkZXIsIChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fT57cm93W2l0ZW0ua2V5XSAmJiByb3dbaXRlbS5rZXldLnRvU3RyaW5nKCl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTmFtZT1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLmxlbmd0aCAhPT0gMCAmJiBhY3Rpb25zLm1hcCgoYWN0aW9uLCBpbmRleDIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU5hbWU9XCJhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmZuKGRhdGFbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1RhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0luZm9UYWJsZS9JbmZvVGFibGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9JbmZvVGFibGUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvSW5mb1RhYmxlL0luZm9UYWJsZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDEyIDEzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mby10YWJsZS0tbm8taGVhZGVyXzJ2M3h4IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5pbmZvLXRhYmxlX0I3SllVIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMi41O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHI6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY2NjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7IH1cXG4gIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRoIHtcXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAgIC5pbmZvLXRhYmxlX0I3SllVID4gdGJvZHkgPiB0ciA+IHRkLCAuaW5mby10YWJsZV9CN0pZVSA+IHRib2R5ID4gdHIgdGgge1xcbiAgICAgIHBhZGRpbmc6IDAgMTBweDsgfVxcblxcbi5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3kge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMxQjI2N0Y7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5hY3Rpb25zX3BSX056IC5hY3Rpb25fM0RMS3k6aG92ZXIge1xcbiAgICBjb2xvcjogIzJlNDBkMjsgfVxcbiAgLmFjdGlvbnNfcFJfTnogLmFjdGlvbl8zRExLeTphY3RpdmUge1xcbiAgICBjb2xvcjogIzA5MGQyYjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImluZm8tdGFibGUtLW5vLWhlYWRlclwiOiBcImluZm8tdGFibGUtLW5vLWhlYWRlcl8ydjN4eFwiLFxuXHRcImluZm8tdGFibGVcIjogXCJpbmZvLXRhYmxlX0I3SllVXCIsXG5cdFwiYWN0aW9uc1wiOiBcImFjdGlvbnNfcFJfTnpcIixcblx0XCJhY3Rpb25cIjogXCJhY3Rpb25fM0RMS3lcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9JbmZvVGFibGUvSW5mb1RhYmxlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJpbXBvcnQgQ29udGVudFBhZ2UgZnJvbSAnLi9Db250ZW50UGFnZSdcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbnRlbnRQYWdlL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG50eXBlIFBhZ2luYXRpb25MaW5rID0ge1xuICBwYWdlOiBudW1iZXJcbiAgdXJsOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGtleT86IHN0cmluZ1xuICB9XG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHBhZ2luYXRpb25MaW5rczoge1xuICAgIG5leHQ/OiBQYWdpbmF0aW9uTGlua1xuICAgIGxhc3Q6IFBhZ2luYXRpb25MaW5rXG4gIH1cbn1cblxuY2xhc3MgQ29udGVudFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHJvdXRpbmcsIHBhZ2luYXRpb25MaW5rczogeyBuZXh0LCBsYXN0IH0gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhbGwgPSBsYXN0ICYmIGxhc3QucGFnZSB8fCAxXG4gICAgY29uc3QgY3VycmVudCA9IG5leHRcbiAgICAgID8gbmV4dC5wYWdlIC0gMVxuICAgICAgOiBhbGxcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICBhbGw9e2FsbH1cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgIHVybD17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IHJvdXRpbmcucGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeTogcm91dGluZy5xdWVyeSB8fCB7fVxuICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBuYW1lLCBrZXkgfSB9ID0gb3duUHJvcHNcblxuICByZXR1cm4ge1xuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyB8fCB7fSxcbiAgICBwYWdpbmF0aW9uTGlua3M6IHNlbGVjdG9ycy5jb21tb24ucGFnaW5hdGlvbkxpbmtzKG5hbWUsIGtleSkoc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7fVxuKShDb250ZW50UGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29udGVudFBhZ2UvQ29udGVudFBhZ2UudHN4XG4gKiovIiwiaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuL1BhZ2luYXRvcidcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvUGFnaW5hdG9yL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9QYWdpbmF0b3Iuc2NzcycpXG5cbi8qIOagl+WtkCDwn4ywXG4gKiByYW5nZSA9IDJcbiAqIHwgcmFuZ2UgfCBjdXJyZW50IHwgcmFuZ2dlIHxcbiAqICAgMiwgMywgICAgIFs0XSwgICAgIDUsIDZcbiAqL1xuXG50eXBlIE9qYiA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsbDogbnVtYmVyXG4gIGN1cnJlbnQ6IG51bWJlclxuICByYW5nZT86IG51bWJlciAvLyBkZWZhdWx0IDNcbiAgdXJsOiB7XG4gICAgcGF0aG5hbWU6IHN0cmluZ1xuICAgIHF1ZXJ5OiBPYmplY3RcbiAgfVxuICB1cmxTdHlsZT86ICdxdWVyeScgfCAnc2xhc2gnXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFBhZ2luYXRvciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcGFyc2VVcmwocGF0aG5hbWU6IHN0cmluZywgcXVlcnk6IE9iamVjdCwgcGFnZU51bSkge1xuICAgIGxldCB1cmxTdHlsZSA9IHRoaXMucHJvcHMudXJsU3R5bGVcbiAgICAgID8gdGhpcy5wcm9wcy51cmxTdHlsZVxuICAgICAgOiAncXVlcnknXG5cbiAgICBpZiAodXJsU3R5bGUgPT09ICdxdWVyeScpIHtcbiAgICAgIGxldCBxdWVyeVBhcnQgPSB1dGlscy5wYXJzZVVybGVuY29kZWQoXy5vbWl0KHF1ZXJ5LCBbJ3BhZ2UnXSkpXG4gICAgICByZXR1cm4gYCR7cGF0aG5hbWV9JHtxdWVyeVBhcnQgPyBgPyR7cXVlcnlQYXJ0fSZgIDogJz8nfXBhZ2U9JHtwYWdlTnVtfWBcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlQYXJ0ID0gdXRpbHMucGFyc2VVcmxlbmNvZGVkKHF1ZXJ5KVxuICAgIHJldHVybiBgJHtwYXRobmFtZX0vcGFnZS8ke3BhZ2VOdW19PyR7cXVlcnlQYXJ0fWBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucHJvcHMucmFuZ2UgPyB0aGlzLnByb3BzLnJhbmdlIDogM1xuICAgIGNvbnN0IHRvdGFsUmFuZ2VFbmRJbmRleCA9IHRoaXMucHJvcHMuYWxsIC0gMVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KHRoaXMucHJvcHMuY3VycmVudCBhcyBhbnkpIC0gMVxuICAgIGxldCByYW5nZVN0YXJ0SW5kZXggPSBjdXJyZW50SW5kZXggLSByYW5nZVxuICAgIGxldCByYW5nZUVuZEluZGV4ID0gY3VycmVudEluZGV4ICsgcmFuZ2VcbiAgICBsZXQgbGVmdFNwcmVhZCA9IGZhbHNlXG4gICAgbGV0IHJpZ2h0U3ByZWFkID0gZmFsc2VcbiAgICBsZXQgcGFnZXMgPSBbXVxuICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLnVybFxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmFsbCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWxsIOW/hemhu+S4uiBudW1iZXIg57G75Z6L77yBJylcbiAgICB9XG5cbiAgICAvLyDpqozor4FcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRJbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYOmhteeggeW/hemhu+S4uuaVsOWtl++8jOWNtOW+l+WIsCAke3R5cGVvZiBjdXJyZW50SW5kZXh9YClcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJbmRleCA+IHJhbmdlRW5kSW5kZXggfHwgY3VycmVudEluZGV4IDwgMCkge1xuICAgICAgY29uc29sZS5lcnJvcign6aG156CB5LiN6IO95aSn5LqO5omA5pyJ6aG16Z2i5pWw55uu5oiW5bCP5LqOIDHvvIEnKVxuICAgIH1cblxuICAgIGlmIChyYW5nZSAqIDIgKyAxID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgLy8g5oC76ZW/5bqm5bCP5LqOIHJhbmdlIOebtOW+hFxuICAgICAgcmFuZ2VFbmRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleFxuICAgICAgcmFuZ2VTdGFydEluZGV4ID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpITnkIblj7PkvqfmuqLlh7pcbiAgICAgIGlmIChyYW5nZUVuZEluZGV4ID49IHRvdGFsUmFuZ2VFbmRJbmRleCkge1xuICAgICAgICByYW5nZUVuZEluZGV4ID0gdG90YWxSYW5nZUVuZEluZGV4XG4gICAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHRvdGFsUmFuZ2VFbmRJbmRleCAtIChyYW5nZSAqIDIgKyAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlnaHRTcHJlYWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPD0gMCkge1xuICAgICAgICByYW5nZVN0YXJ0SW5kZXggPSAwXG4gICAgICAgIHJhbmdlRW5kSW5kZXggPSByYW5nZSAqIDIgKyAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0U3ByZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSByYW5nZVN0YXJ0SW5kZXg7IGkgPD0gcmFuZ2VFbmRJbmRleDsgaSsrKSB7XG4gICAgICBwYWdlcyA9IHBhZ2VzLmNvbmNhdChbe1xuICAgICAgICBwYWdlTnVtOiBpICsgMSxcbiAgICAgICAgaXNDdXJyZW50OiBpID09PSBjdXJyZW50SW5kZXhcbiAgICAgIH1dKVxuICAgIH1cblxuICAgIC8vIGFkZCBzcHJlYWRcbiAgICBpZiAobGVmdFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgcGFnZU51bTogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBzcGQuY29uY2F0KHBhZ2VzKVxuICAgIH1cblxuICAgIGlmIChyaWdodFNwcmVhZCkge1xuICAgICAgY29uc3Qgc3BkID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaXNTcHJlYWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VOdW06IHRvdGFsUmFuZ2VFbmRJbmRleCArIDFcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgcGFnZXMgPSBwYWdlcy5jb25jYXQoc3BkKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmFsbCAhPT0gMSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnaW5hdG9yXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2UuaXNDdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW0tLWN1cnJlbnRcIj57cGFnZS5wYWdlTnVtfTwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYWdlLmlzU3ByZWFkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1zcHJlYWRcIj4uLi48L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gc3R5bGVOYW1lPVwicGFnZS1udW1cIj48TGluayB0bz17dGhpcy5wYXJzZVVybCh1cmwucGF0aG5hbWUsIHVybC5xdWVyeSwgcGFnZS5wYWdlTnVtKSB9PntwYWdlLnBhZ2VOdW19PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3IudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9QYWdpbmF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2Utc3ByZWFkXzJJTkhVLCAucGFnZS1udW1fMm9QUVUgYSwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGEsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtaW4td2lkdGg6IDM3cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLnBhZ2luYXRvcl8xUkhBbSB7XFxuICBtYXJnaW46IDIwcHggMDsgfVxcblxcbi5wYWdlLXNwcmVhZF8ySU5IVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG5cXG4ucGFnZS1udW1fMm9QUVUsIC5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgM3B4OyB9XFxuICAucGFnZS1udW1fMm9QUVUgYTpob3ZlciwgLnBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5wYWdlLW51bS0tY3VycmVudF8xWTJtRSB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZS1zcHJlYWRcIjogXCJwYWdlLXNwcmVhZF8ySU5IVVwiLFxuXHRcInBhZ2UtbnVtXCI6IFwicGFnZS1udW1fMm9QUVVcIixcblx0XCJwYWdlLW51bS0tY3VycmVudFwiOiBcInBhZ2UtbnVtLS1jdXJyZW50XzFZMm1FXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwicGFnaW5hdG9yXzFSSEFtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdpbmF0b3Iuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMiAxM1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibW9tZW50XCJcbiAqKiBtb2R1bGUgaWQgPSAzNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTIgMTNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBsb2FkVXNlcnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IEluZm9UYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0luZm9UYWJsZSdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGVudFBhZ2UnXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxvYWRVc2VyczogbG9hZFVzZXJzXG4gIHVzZXJzOiBhbnlbXVxuICByb3V0aW5nOiBhbnlcbn1cblxuY2xhc3MgTWFuYWdlVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGxvYWRVc2Vycyhwcm9wcyA9IHRoaXMucHJvcHMpIHtcbiAgICB0aGlzLnByb3BzLmxvYWRVc2Vycyh7XG4gICAgICBwYWdlOiBwcm9wcy5yb3V0aW5nLnF1ZXJ5LnBhZ2UgfHwgJzEnXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBoZWxwZXJzLm9uUm91dGluZ0NoYW5nZShyb3V0aW5nID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgICAgdGhpcy5sb2FkVXNlcnMobmV4dFByb3BzKVxuICAgIH0pKG5leHRQcm9wcywgdGhpcy5wcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZFVzZXJzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge3VzZXJzfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi55So5oi3566h55CGXCI+XG4gICAgICAgIDxDb250ZW50UGFnZVxuICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgIG5hbWU6ICd1c2VycydcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICA8SW5mb1RhYmxlXG4gICAgICAgICAgICBkYXRhPXt1c2Vycy5tYXAodXNlciA9PiAoT2JqZWN0LmFzc2lnbih7fSwgdXNlciwge1xuICAgICAgICAgICAgICBkYXRlQ3JlYXRlZDogbW9tZW50KG5ldyBEYXRlKHVzZXIuZGF0ZUNyZWF0ZWQpLnZhbHVlT2YoKSkuZm9ybWF0KCdZWVlZ5bm0TU3mnIhEROaXpScpXG4gICAgICAgICAgICB9KSkpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Db250ZW50UGFnZT5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgdXNlcnM6IHNlbGVjdG9ycy51c2VycyhzdGF0ZSksXG4gICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBsb2FkVXNlcnMgfVxuKShNYW5hZ2VVc2VycyBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvTWFuYWdlVXNlcnMvTWFuYWdlVXNlcnMudHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==