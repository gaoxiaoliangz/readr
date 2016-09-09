exports.ids = [1];
exports.modules = {

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _BookPageList = __webpack_require__(407);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(417);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(259);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(420);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(430);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(270);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _apis = __webpack_require__(388);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _utils = __webpack_require__(348);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _Body = __webpack_require__(431);
	
	var _Body2 = _interopRequireDefault(_Body);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	var styles = __webpack_require__(433);
	var Viewer = function (_Component) {
	    _inherits(Viewer, _Component);
	
	    function Viewer(props) {
	        _classCallCheck(this, Viewer);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Viewer).call(this, props));
	
	        _this.bookId = props.params.id;
	        _this.state = {
	            showPanel: false,
	            isCalcMode: true,
	            nodeHeights: [],
	            nodes: [],
	            showViewerPreference: false,
	            fluid: false,
	            isTouchMode: false
	        };
	        _this.handleViewerClick = _this.handleViewerClick.bind(_this);
	        _this.handelViewerMouseMove = _this.handelViewerMouseMove.bind(_this);
	        _this.handleProgressChange = _this.handleProgressChange.bind(_this);
	        _this.handleResize = _this.handleResize.bind(_this);
	        _this.deboundedHandleResize = _lodash2.default.debounce(_this.handleResize, 500, {
	            maxWait: 1000
	        });
	        return _this;
	    }
	
	    _createClass(Viewer, [{
	        key: "isViewFluid",
	        value: function isViewFluid() {
	            return _utils2.default.getScreenInfo().view.width < 700;
	        }
	    }, {
	        key: "isTouchMode",
	        value: function isTouchMode() {
	            return _utils2.default.getScreenInfo().view.width < 700;
	        }
	    }, {
	        key: "setProgress",
	        value: function setProgress(percentage) {
	            _apis2.default.setProgress(this.bookId, { percentage: percentage });
	        }
	    }, {
	        key: "handelViewerMouseMove",
	        value: function handelViewerMouseMove(event) {
	            if (!this.state.isCalcMode && !this.state.isTouchMode) {
	                var y = event.pageY - document.body.scrollTop;
	                var dToScreenRight = _utils2.default.getScreenInfo().view.width - event.pageX;
	                this.setState({
	                    showPanel: y < 90,
	                    showPageInfo: dToScreenRight < 100
	                });
	            }
	        }
	    }, {
	        key: "handleResize",
	        value: function handleResize() {
	            this.setState({
	                fluid: this.isViewFluid(),
	                isTouchMode: this.isTouchMode()
	            });
	        }
	    }, {
	        key: "handleProgressChange",
	        value: function handleProgressChange(newProgress) {
	            this.setProgress(newProgress);
	        }
	    }, {
	        key: "handleViewerClick",
	        value: function handleViewerClick() {
	            if (this.state.isTouchMode) {
	                this.setState({
	                    showPanel: !this.state.showPanel
	                });
	            }
	        }
	    }, {
	        key: "calcDom",
	        value: function calcDom() {
	            var _this2 = this;
	
	            this.setState({
	                isCalcMode: true
	            }, function () {
	                var contentHtml = _this2.bookPageWithRawHtml.getContentHtml();
	                var nodeHeights = viewerUtils.getNodeHeights(contentHtml.childNodes);
	                console.log('calc done');
	                _this2.setState({
	                    nodeHeights: nodeHeights,
	                    isCalcMode: false
	                });
	            });
	        }
	    }, {
	        key: "loadRawBookContent",
	        value: function loadRawBookContent() {
	            var _this3 = this;
	
	            this.props.fetchBook(this.bookId).then(function (res) {
	                var nodes = viewerUtils.markdownToNodeStringList(_this3.props.rawBookContent);
	                _this3.setState({
	                    nodes: nodes,
	                    fluid: _this3.isViewFluid(),
	                    isTouchMode: _this3.isTouchMode()
	                });
	            });
	        }
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            window.addEventListener('resize', this.deboundedHandleResize);
	        }
	    }, {
	        key: "removeEventListeners",
	        value: function removeEventListeners() {
	            window.removeEventListener('resize', this.deboundedHandleResize);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return !_lodash2.default.isEqual(this.state, nextState);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {
	            var hasBookNodesLoaded = this.state.nodes.length !== 0 && prevState.nodes.length === 0;
	            var viewChanged = this.state.fluid !== prevState.fluid;
	            if (hasBookNodesLoaded || viewChanged) {
	                this.calcDom();
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.loadRawBookContent();
	            this.props.fetchProgress(this.bookId);
	            this.addEventListeners();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeEventListeners();
	        }
	    }, {
	        key: "renderViewPanel",
	        value: function renderViewPanel() {
	            var _this4 = this;
	
	            return (this.state.showPanel || this.state.showViewerPreference) && _react2.default.createElement(_ViewerPanel2.default, { title: this.props.book.title, showViewerPreference: this.state.showViewerPreference, onPrefVisibilityChange: function onPrefVisibilityChange(newVisibility) {
	                    _this4.setState({
	                        showViewerPreference: newVisibility
	                    });
	                } });
	        }
	    }, {
	        key: "renderBook",
	        value: function renderBook() {
	            var _this5 = this;
	
	            var _state = this.state;
	            var nodes = _state.nodes;
	            var nodeHeights = _state.nodeHeights;
	            var fluid = _state.fluid;
	            var showPageInfo = _state.showPageInfo;
	            var progress = this.props.progress;
	
	            if (nodes.length === 0) {
	                return _react2.default.createElement("div", { styleName: "loading" }, "Loading ...");
	            }
	            return this.state.isCalcMode ? _react2.default.createElement(_BookPageWithRawHtml2.default, { nodes: nodes, ref: function ref(_ref) {
	                    _this5.bookPageWithRawHtml = _ref;
	                }, fluid: fluid }) : _react2.default.createElement(_BookPageList2.default, { nodeHeights: nodeHeights, nodes: this.state.nodes, pageCount: 5, initialProgress: progress, pageHeight: 900, onProgressChange: this.handleProgressChange, fluid: fluid, showPageInfo: showPageInfo });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_Body2.default, { bodyClass: "viewer" }, _react2.default.createElement("div", { onClick: this.handleViewerClick, onMouseMove: this.handelViewerMouseMove }, this.renderViewPanel(), this.renderBook()));
	        }
	    }]);
	
	    return Viewer;
	}(_react.Component);
	Viewer = __decorate([(0, _reactCssModules2.default)(styles)], Viewer);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    var book = state.entities.books[ownProps.params.id] || {};
	    return {
	        book: book,
	        rawBookContent: _lodash2.default.get(book, 'content.raw', ''),
	        progress: _lodash2.default.get(state.payloads, 'progress.percentage', 0),
	        session: state.session
	    };
	}, { fetchBook: _actions.fetchBook, fetchProgress: _actions.fetchProgress, openDialog: _actions.openDialog })(Viewer);

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(408);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(411);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(268);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(270);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(412);
	
	var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	var styles = __webpack_require__(415);
	var BookPageList = function (_Component) {
	    _inherits(BookPageList, _Component);
	
	    function BookPageList(props) {
	        _classCallCheck(this, BookPageList);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookPageList).call(this, props));
	
	        _this.state = {
	            scrollTop: 0,
	            currentPage: 1
	        };
	        _this.handleScroll = _this.handleScroll.bind(_this);
	        _this.deboundedHandleScroll = _lodash2.default.debounce(_this.handleScroll, 200, {
	            maxWait: 1000
	        });
	        return _this;
	    }
	
	    _createClass(BookPageList, [{
	        key: "handleScroll",
	        value: function handleScroll() {
	            if (!this.props.isCalcMode) {
	                var _calcPages = this.calcPages();
	
	                var pages = _calcPages.pages;
	                var totalHeight = _calcPages.totalHeight;
	                var onProgressChange = this.props.onProgressChange;
	
	                var scrollTop = document.body.scrollTop;
	                var currentPage = utils.percentageToPage(scrollTop / totalHeight, pages.length);
	                if (onProgressChange) {
	                    onProgressChange(scrollTop / totalHeight);
	                }
	                this.setState({
	                    currentPage: currentPage
	                });
	            }
	        }
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            window.addEventListener('scroll', this.deboundedHandleScroll);
	        }
	    }, {
	        key: "removeEventListeners",
	        value: function removeEventListeners() {
	            window.removeEventListener('scroll', this.deboundedHandleScroll);
	        }
	    }, {
	        key: "calcPages",
	        value: function calcPages() {
	            // todo: 添加缓存
	            var _props = this.props;
	            var nodeHeights = _props.nodeHeights;
	            var nodes = _props.nodes;
	            var pageHeight = _props.pageHeight;
	
	            var pages = utils.groupNodesByPage(nodes, nodeHeights, pageHeight);
	            return { pages: pages, totalHeight: pages.length * pageHeight };
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _props2 = this.props;
	            var pageHeight = _props2.pageHeight;
	            var initialPage = _props2.initialPage;
	            var initialProgress = _props2.initialProgress;
	
	            var _calcPages2 = this.calcPages();
	
	            var totalHeight = _calcPages2.totalHeight;
	
	            var scrollTop = 0;
	            if (initialProgress) {
	                scrollTop = totalHeight * initialProgress;
	            } else if (initialPage) {
	                scrollTop = pageHeight * (initialPage - 1);
	            }
	            document.body.scrollTop = scrollTop;
	            this.addEventListeners();
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeEventListeners();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _calcPages3 = this.calcPages();
	
	            var pages = _calcPages3.pages;
	            var totalHeight = _calcPages3.totalHeight;
	            var currentPage = this.state.currentPage;
	            var _props3 = this.props;
	            var pageCount = _props3.pageCount;
	            var pageHeight = _props3.pageHeight;
	            var fluid = _props3.fluid;
	            var showPageInfo = _props3.showPageInfo;
	
	            var startPageIndex = currentPage - 1;
	            var endPageIndex = startPageIndex + pageCount;
	            var className = (0, _classnames2.default)({
	                'pages': !fluid,
	                'pages--fluid': fluid
	            });
	            return _react2.default.createElement("div", null, _react2.default.createElement("ul", { ref: function ref(_ref) {
	                    _this2.bookPageListDom = _ref;
	                }, styleName: className, style: { height: totalHeight } }, _lodash2.default.slice(pages, startPageIndex, endPageIndex).map(function (page, index) {
	                return _react2.default.createElement(_BookPage2.default, { key: index, page: page, pageHeight: pageHeight, fluid: fluid, ref: function ref(_ref2) {
	                        _this2.bookPage = _ref2;
	                    } });
	            })), _react2.default.createElement(_ViewerScrollbar2.default, { visible: showPageInfo, current: currentPage, total: pages.length }));
	        }
	    }]);
	
	    return BookPageList;
	}(_react.Component);
	BookPageList = __decorate([(0, _reactCssModules2.default)(styles)], BookPageList);
	exports.default = BookPageList;

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(268);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(409);
	var BookPage = function (_Component) {
	    _inherits(BookPage, _Component);
	
	    function BookPage() {
	        _classCallCheck(this, BookPage);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPage).apply(this, arguments));
	    }
	
	    _createClass(BookPage, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var _props$page = _props.page;
	            var nodes = _props$page.nodes;
	            var meta = _props$page.meta;
	            var pageHeight = _props.pageHeight;
	            var fluid = _props.fluid;
	
	            var style = {
	                position: 'absolute',
	                top: pageHeight * (meta.pageNo - 1),
	                height: pageHeight || 'auto'
	            };
	            var className = (0, _classnames2.default)({
	                'page': !fluid,
	                'page--fluid': fluid
	            });
	            return _react2.default.createElement("li", { styleName: className, style: style }, _react2.default.createElement("div", { style: { marginTop: meta.offset }, styleName: "content", dangerouslySetInnerHTML: { __html: nodes.join('') }, ref: function ref(_ref) {
	                    _this2.bookPageDom = _ref;
	                } }), _react2.default.createElement("div", { styleName: "page-no" }, meta.pageNo));
	        }
	    }]);
	
	    return BookPage;
	}(_react.Component);
	BookPage = __decorate([(0, _reactCssModules2.default)(styles)], BookPage);
	exports.default = BookPage;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(410);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".content_1mydI {\n  margin: 0 auto;\n  width: 550px;\n  position: relative;\n  overflow: hidden;\n  color: #666;\n  line-height: 1.9; }\n  .content_1mydI p {\n    margin: 0;\n    min-height: 25px; }\n\n.page_1SU4h {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.page--fluid_vX8rQ { }\n  .page--fluid_vX8rQ .content_1mydI {\n    width: 100%;\n    padding: 0 20px; }\n\n.page--init_8DZFB {\n  position: relative;\n  height: auto; }\n  .page--init_8DZFB .content_1mydI {\n    height: auto; }\n\n.page-no_1jbV- {\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-top: 1px solid #e6e6e6;\n  padding: 0 10px;\n  color: #e6e6e6;\n  font-size: 0.8rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"content": "content_1mydI",
		"page": "page_1SU4h",
		"page--fluid": "page--fluid_vX8rQ page_1SU4h",
		"page--init": "page--init_8DZFB",
		"page-no": "page-no_1jbV-"
	};

/***/ },

/***/ 411:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.groupNodesByPage = groupNodesByPage;
	exports.percentageToPage = percentageToPage;
	// long paragraph situation doesn't seem to affect this function
	// offset distance is always negtive or zero
	// the index will be of the paragraph with this offset at the end
	function getPageOffset(_ref) {
	    var pageIndex = _ref.pageIndex;
	    var pageHeight = _ref.pageHeight;
	    var nodeHeights = _ref.nodeHeights;
	
	    var offset = 0;
	    var nodeIndex = 0;
	    var nodeStartIndex = void 0;
	    if (pageIndex !== 0) {
	        var nodeHeightSum = 0;
	        while (nodeHeightSum <= pageHeight * pageIndex) {
	            nodeHeightSum += nodeHeights[nodeIndex];
	            nodeIndex++;
	        }
	        offset = nodeHeightSum - nodeHeights[nodeIndex - 1] - pageIndex * pageHeight;
	        nodeStartIndex = nodeIndex - 1;
	    } else {
	        nodeStartIndex = 0;
	    }
	    return { offset: offset, nodeStartIndex: nodeStartIndex };
	}
	function getNodesOfPage(_ref2) {
	    var pageIndex = _ref2.pageIndex;
	    var nodes = _ref2.nodes;
	    var pageHeight = _ref2.pageHeight;
	    var nodeHeights = _ref2.nodeHeights;
	
	    var _getPageOffset = getPageOffset({ pageIndex: pageIndex, pageHeight: pageHeight, nodeHeights: nodeHeights });
	
	    var offset = _getPageOffset.offset;
	    var nodeStartIndex = _getPageOffset.nodeStartIndex;
	
	    var nodeIndex = nodeStartIndex;
	    var nodeEndIndex = void 0;
	    var pageNodes = [];
	    var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
	    nodeIndex++;
	    if (nodeHeightSum < pageHeight) {
	        while (nodeHeightSum <= pageHeight && nodeIndex !== nodes.length) {
	            nodeHeightSum += nodeHeights[nodeIndex];
	            nodeIndex++;
	        }
	        nodeEndIndex = nodeIndex - 1;
	    } else {
	        nodeEndIndex = nodeStartIndex;
	    }
	    for (var i = nodeStartIndex; i <= nodeEndIndex && i <= nodes.length - 1; i++) {
	        pageNodes.push(nodes[i]);
	    }
	    return { pageNodes: pageNodes, offset: offset };
	}
	function groupNodesByPage(nodes, nodeHeights, pageHeight) {
	    var pages = [];
	    var pageHeightSum = nodeHeights.reduce(function (a, b) {
	        return a + b;
	    }, 0);
	    var pageSum = Math.ceil(pageHeightSum / pageHeight);
	    console.log('todo: group nodes');
	    // nodes = nodes.map((node, index) => {
	    //   node.props.index = index
	    //   return node
	    // })
	    if (nodeHeights.length === 0) {
	        return [{
	            nodes: nodes,
	            meta: {
	                pageNo: 1,
	                offset: 0
	            }
	        }];
	    }
	    // finally
	    for (var i = 0; i < pageSum; i++) {
	        var _getNodesOfPage = getNodesOfPage({ pageIndex: i, nodes: nodes, nodeHeights: nodeHeights, pageHeight: pageHeight });
	
	        var pageNodes = _getNodesOfPage.pageNodes;
	        var offset = _getNodesOfPage.offset;
	
	        pages.push({
	            nodes: pageNodes,
	            meta: {
	                pageNo: i + 1,
	                offset: offset
	            }
	        });
	    }
	    return pages;
	}
	function percentageToPage(p, pageSum) {
	    if (p > 1) {
	        console.error('Wrong parameter!');
	        return null;
	    } else {
	        return parseInt(p * pageSum) + 1;
	    }
	}

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(413);
	var ViewerScrollbar = function (_Component) {
	    _inherits(ViewerScrollbar, _Component);
	
	    function ViewerScrollbar(props) {
	        _classCallCheck(this, ViewerScrollbar);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewerScrollbar).call(this, props));
	    }
	
	    _createClass(ViewerScrollbar, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var current = _props.current;
	            var total = _props.total;
	
	            var percentage = (current / total * 100).toFixed(2) + '%';
	            return this.props.visible && _react2.default.createElement("div", { styleName: "loc-info" }, _react2.default.createElement("div", null, _react2.default.createElement("strong", null, current), "/", total), _react2.default.createElement("div", { styleName: "sub-info" }, percentage));
	        }
	    }]);
	
	    return ViewerScrollbar;
	}(_react.Component);
	ViewerScrollbar = __decorate([(0, _reactCssModules2.default)(styles)], ViewerScrollbar);
	exports.default = ViewerScrollbar;

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(414);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollbar_3vHlt {\n  width: 2px;\n  min-height: 400px;\n  position: fixed;\n  right: 40px;\n  top: 100px; }\n  .scrollbar_3vHlt:hover .button_1vdqU {\n    display: block; }\n\n.track_2FLTA {\n  width: 2px;\n  background: #c4c4c4;\n  border-radius: 3px;\n  position: absolute;\n  left: 8px;\n  top: 0;\n  z-index: 1; }\n\n.track--past_3YKd4 {\n  background: #89beff;\n  z-index: 2; }\n\n.button_1vdqU {\n  width: 20px;\n  height: 20px;\n  background: #006BEF;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  position: absolute;\n  left: 0;\n  top: 84px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 3;\n  display: none; }\n\n.loc-info_377Vu {\n  text-align: center;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  background: #2C2C2C;\n  color: #ddd;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  padding: 7px 15px; }\n\n.sub-info_3qI5u {\n  font-size: 0.8rem;\n  color: #aaa; }\n", ""]);
	
	// exports
	exports.locals = {
		"scrollbar": "scrollbar_3vHlt",
		"button": "button_1vdqU",
		"track": "track_2FLTA",
		"track--past": "track--past_3YKd4 track_2FLTA",
		"loc-info": "loc-info_377Vu",
		"sub-info": "sub-info_3qI5u"
	};

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(416);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_1SNis {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_39FPe {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_1SNis",
		"pages--fluid": "pages--fluid_39FPe pages_1SNis"
	};

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(418);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(419);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 暂不支持包含图片的计算
	// 计算没有等待图片加载完成，所以结果是不正确的
	function getNodeHeights(nodes) {
	    console.log('dom ready, getNodeHeights');
	    var nodesHeight = [];
	    Array.prototype.forEach.call(nodes, function (node, index) {
	        if (node.className !== 'gb-line') {
	            console.error('Unsupported content found!');
	        }
	        nodesHeight.push(node.clientHeight);
	    });
	    return nodesHeight;
	}
	function markdownToNodeStringList(markdown) {
	    console.log('start md');
	    var html = (0, _marked2.default)(markdown, {
	        gfm: true,
	        breaks: true
	    });
	    console.log('done marked');
	    var nodes = Array.prototype.map.call((0, _jquery2.default)(html), function (ele, index) {
	        if (ele.nodeType === 3 && ele.nodeValue === '\n') {
	            // 移除 html 里的回车
	            return null;
	        }
	        if (ele.tagName === 'P') {
	            return '<p class="gb-line">' + ele.innerHTML + '</p>';
	        } else {
	            return '<div class="gb-line">' + ele.outerHTML + '</div>';
	        }
	    }).filter(function (node) {
	        return node;
	    });
	    // console.log(nodes)
	    console.log('end md');
	    return nodes;
	}

/***/ },

/***/ 418:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 419:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(89);
	
	var _Icon = __webpack_require__(266);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(352);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(421);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(428);
	var ViewerPanel = function (_Component) {
	    _inherits(ViewerPanel, _Component);
	
	    function ViewerPanel(props) {
	        _classCallCheck(this, ViewerPanel);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ViewerPanel).call(this, props));
	
	        _this.state = {
	            showViewerPreference: false
	        };
	        _this.handlePrefClick = _this.handlePrefClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(ViewerPanel, [{
	        key: "handlePrefClick",
	        value: function handlePrefClick() {
	            this.props.onPrefVisibilityChange(!this.props.showViewerPreference);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var title = _props.title;
	            var showViewerPreference = _props.showViewerPreference;
	
	            return _react2.default.createElement("div", { styleName: "viewer-panel" }, _react2.default.createElement("div", { styleName: "container" }, _react2.default.createElement("div", { styleName: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "返回"))), _react2.default.createElement("span", { styleName: "title" }, title), _react2.default.createElement("div", { onClick: this.handlePrefClick, styleName: "preference" }, _react2.default.createElement(_Icon2.default, { name: "preference" })), _react2.default.createElement(_Fade2.default, null, showViewerPreference ? _react2.default.createElement(_ViewerPreference2.default, null) : null)));
	        }
	    }]);
	
	    return ViewerPanel;
	}(_react.Component);
	ViewerPanel = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPanel);
	exports.default = ViewerPanel;

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _Switcher = __webpack_require__(422);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(426);
	var ViewerPreference = function (_Component) {
	    _inherits(ViewerPreference, _Component);
	
	    function ViewerPreference(props) {
	        _classCallCheck(this, ViewerPreference);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewerPreference).call(this, props));
	    }
	
	    _createClass(ViewerPreference, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", null, "A-"), _react2.default.createElement("span", null, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "滚动模式"), _react2.default.createElement(_Switcher2.default, { value: true })), _react2.default.createElement("li", { styleName: "option-theme" }, _react2.default.createElement("span", { style: { background: '#fff' } }, "theme1"), _react2.default.createElement("span", { style: { background: '#eee' } }, "theme2"), _react2.default.createElement("span", { style: { background: '#222' } }, "theme3"))));
	        }
	    }]);
	
	    return ViewerPreference;
	}(_react.Component);
	ViewerPreference = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPreference);
	exports.default = (0, _reactRedux.connect)()(ViewerPreference);

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(423);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(270);
	
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
	
	var styles = __webpack_require__(424);
	var Switcher = function (_Component) {
	    _inherits(Switcher, _Component);
	
	    function Switcher(props) {
	        _classCallCheck(this, Switcher);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Switcher).call(this, props));
	    }
	
	    _createClass(Switcher, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var isOn = _props.value;
	            var className = _props.className;
	
	            if (typeof this.props.value === 'string') {
	                if (isOn === '1' || isOn === 'true') {
	                    isOn = true;
	                } else {
	                    isOn = false;
	                }
	            }
	            var state = Boolean(isOn) ? 'on' : 'off';
	            return _react2.default.createElement("div", { className: className || '', styleName: "switcher-wrap" }, this.props.title && _react2.default.createElement("span", null, this.props.title), _react2.default.createElement("div", { onClick: function onClick(e) {
	                    if (_this2.props.onChange) {
	                        var newValue = void 0;
	                        if (_this2.props.options) {
	                            var currentValueIndex = _this2.props.options.map(function (option) {
	                                return option.value;
	                            }).indexOf(_this2.props.value);
	                            if (currentValueIndex === 1) {
	                                newValue = _this2.props.options[0].value;
	                            } else if (currentValueIndex === 0) {
	                                newValue = _this2.props.options[1].value;
	                            } else {
	                                newValue = _this2.props.options[0].value;
	                                console.error('当前数据有误，将使用默认数据！');
	                            }
	                        } else {
	                            if (typeof _this2.props.value === 'string') {
	                                console.error('没有给 options 时必须使用布尔型的 value！');
	                            } else {
	                                newValue = !_this2.props.value;
	                            }
	                        }
	                        _this2.props.onChange(newValue);
	                    }
	                }, styleName: "switcher--" + state }, _react2.default.createElement("div", { styleName: "switcher-button" }), _react2.default.createElement("div", { styleName: "switcher-track" })));
	        }
	    }]);
	
	    return Switcher;
	}(_react.Component);
	Switcher = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], Switcher);
	exports.default = Switcher;

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(425);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".switcher-wrap_3UMAU {\n  display: inline-block; }\n\n.switcher_G3n4_, .switcher--off_1EoOU, .switcher--on_2xiwO {\n  display: inline-block;\n  width: 40px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 5px;\n  color: green; }\n\n.switcher-button_2kHGL {\n  background: #1B267F;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.switcher-track_xvhjg {\n  height: 10px;\n  margin-top: 5px;\n  border-radius: 50px; }\n\n.switcher--off_1EoOU .switcher-track_xvhjg {\n  background: #ddd; }\n\n.switcher--off_1EoOU .switcher-button_2kHGL {\n  left: 0; }\n\n.switcher--on_2xiwO .switcher-button_2kHGL {\n  left: 20px; }\n\n.switcher--on_2xiwO .switcher-track_xvhjg {\n  background: #2e40d2; }\n", ""]);
	
	// exports
	exports.locals = {
		"switcher-wrap": "switcher-wrap_3UMAU",
		"switcher": "switcher_G3n4_",
		"switcher--off": "switcher--off_1EoOU",
		"switcher--on": "switcher--on_2xiwO",
		"switcher-button": "switcher-button_2kHGL",
		"switcher-track": "switcher-track_xvhjg"
	};

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(427);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-preference_1FNJZ {\n  position: absolute;\n  right: 0;\n  top: 60px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden; }\n\n.option_19FXW {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_19FXW:last-child {\n    border: none; }\n\n.option-font-size_18ONG {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_18ONG span {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n  .option-font-size_18ONG span:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n\n.option-scroll_3agtO {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_3agtO .label_3HLPp {\n    float: left; }\n  .option-scroll_3agtO .switcher_3T9K_ {\n    float: right; }\n\n.option-theme_38bUg {\n  padding: 5px 0; }\n  .option-theme_38bUg span {\n    border-radius: 50%;\n    border: 2px solid #ddd;\n    text-indent: -999em;\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    cursor: pointer; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-preference": "viewer-preference_1FNJZ",
		"option": "option_19FXW",
		"option-font-size": "option-font-size_18ONG option_19FXW",
		"option-scroll": "option-scroll_3agtO option_19FXW",
		"label": "label_3HLPp",
		"switcher": "switcher_3T9K_",
		"option-theme": "option-theme_38bUg option_19FXW"
	};

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(429);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-panel_aoOv7 {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 990;\n  background: black;\n  color: #fff;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);\n  height: 60px; }\n\n.container_2cLNI {\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 15px;\n  position: relative; }\n\n.back_ppxQ_ {\n  position: absolute;\n  left: 5px;\n  top: 0; }\n  .back_ppxQ_ a {\n    color: #fff;\n    display: inline-block;\n    overflow: hidden; }\n    .back_ppxQ_ a span {\n      float: left; }\n  .back_ppxQ_ span {\n    line-height: 30px;\n    display: inline-block; }\n\n.title_3Nhli {\n  font-size: 1.2rem; }\n\n.preference_1wPa6 {\n  position: absolute;\n  right: 15px;\n  top: 0;\n  cursor: pointer;\n  display: none; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-panel": "viewer-panel_aoOv7",
		"container": "container_2cLNI",
		"back": "back_ppxQ_",
		"title": "title_3Nhli",
		"preference": "preference_1wPa6"
	};

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(407);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookPageWithRawHtml = function (_Component) {
	    _inherits(BookPageWithRawHtml, _Component);
	
	    function BookPageWithRawHtml(props) {
	        _classCallCheck(this, BookPageWithRawHtml);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BookPageWithRawHtml).call(this, props));
	    }
	
	    _createClass(BookPageWithRawHtml, [{
	        key: 'getContentHtml',
	        value: function getContentHtml() {
	            return this.bookPageList.bookPage.bookPageDom;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props;
	            var fluid = _props.fluid;
	            var nodes = _props.nodes;
	
	            return _react2.default.createElement(_BookPageList2.default, { fluid: fluid, nodes: nodes, nodeHeights: [], pageCount: 1, pageHeight: 0, isCalcMode: true, ref: function ref(_ref) {
	                    _this2.bookPageList = _ref;
	                } });
	        }
	    }]);
	
	    return BookPageWithRawHtml;
	}(_react.Component);
	
	exports.default = BookPageWithRawHtml;

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(432);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Body = function (_Component) {
	    _inherits(Body, _Component);
	
	    function Body() {
	        _classCallCheck(this, Body);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
	    }
	
	    _createClass(Body, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	
	            return _react2.default.createElement("div", { className: className || '' }, this.props.children);
	        }
	    }]);
	
	    return Body;
	}(_react.Component);
	
	function reducePropsToState(propsList) {
	    var bodyClass = void 0;
	    propsList.forEach(function (props) {
	        bodyClass = props.bodyClass;
	    });
	    return bodyClass;
	}
	function handleStateChangeOnClient(className) {
	    if (typeof className !== 'undefined') {
	        document.body.className = className;
	    } else {
	        document.body.removeAttribute('class');
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(Body);

/***/ },

/***/ 432:
/***/ function(module, exports) {

	module.exports = require("react-side-effect");

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(434);
	    var insertCss = __webpack_require__(274);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(273)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n\n.loading_Da64M {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #999; }\n", ""]);
	
	// exports
	exports.locals = {
		"loading": "loading_Da64M"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzPzMwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzPzUwNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS1saXN0LnNjc3M/MzFmYiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzPzA4YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzcz8wZjU4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0JvZHkudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNpZGUtZWZmZWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3M/Nzk4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBRUk7Ozs7QUFDbEM7O0tBQXNDOztBQUM2Qjs7QUFDcEQ7Ozs7QUFDaUI7Ozs7QUFDZ0I7Ozs7QUFDYjs7OztBQUNkOzs7O0FBQ0c7Ozs7QUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEMsS0FBWSxTQUFlLG9CQUFrQjtBQXVCN0M7OztBQUVFLHFCQUFpQjs7OytGQUNIOztBQUVSLGVBQU8sU0FBUSxNQUFPLE9BQUc7QUFDekIsZUFBTSxRQUFHO0FBQ0Ysd0JBQU87QUFDTix5QkFBTTtBQUNMLDBCQUFJO0FBQ1Ysb0JBQUk7QUFDVyxtQ0FBTztBQUN0QixvQkFBTztBQUNELDBCQUNaO1dBWEQ7QUFZSSxlQUFrQixvQkFBTyxNQUFrQixrQkFBVztBQUN0RCxlQUFzQix3QkFBTyxNQUFzQixzQkFBVztBQUM5RCxlQUFxQix1QkFBTyxNQUFxQixxQkFBVztBQUM1RCxlQUFhLGVBQU8sTUFBYSxhQUFXO0FBQzVDLGVBQXNCLHlDQUFhLFNBQUssTUFBYSxjQUFLLEtBQUU7QUFDdkQsc0JBUUE7VUFUcUI7Ozs7Ozs7QUFVeEIsb0JBQU0sZ0JBQWdCLGdCQUFLLEtBQU0sUUFHOUI7Ozs7O0FBQ0gsb0JBQU0sZ0JBQWdCLGdCQUFLLEtBQU0sUUFHOUI7Ozs7cUNBQVc7QUFDakIsNEJBQVksWUFBSyxLQUFPLFFBQUUsRUFHVjs7OzsrQ0FBTTtBQUN0QixpQkFBQyxDQUFLLEtBQU0sTUFBVyxjQUFJLENBQUssS0FBTSxNQUFhO0FBQ3BELHFCQUFLLElBQVEsTUFBTSxRQUFXLFNBQUssS0FBVTtBQUM3QyxxQkFBa0IsaUJBQVEsZ0JBQWdCLGdCQUFLLEtBQU0sUUFBUSxNQUFNO0FBRS9ELHNCQUFTLFNBQUM7QUFDSCxnQ0FBRyxJQUFLO0FBQ0wsbUNBQWdCLGlCQUt0QjtvQkFYOEM7Ozs7OztBQVlwRCxrQkFBUyxTQUFDO0FBQ1Asd0JBQU0sS0FBYztBQUNkLDhCQUFNLEtBSUQ7Ozs7OzhDQUFZO0FBQzFCLGtCQUFZLFlBR0Q7Ozs7O0FBQ1osaUJBQUssS0FBTSxNQUFhO0FBQ3JCLHNCQUFTLFNBQUM7QUFDSCxnQ0FBRSxDQUFLLEtBQU0sTUFLckI7b0JBUHdCOzs7Ozs7OztBQVF6QixrQkFBUyxTQUFDO0FBQ0YsNkJBQ1g7O0FBQ0MscUJBQWlCLGNBQU8sT0FBb0Isb0JBQWlCO0FBQzdELHFCQUFpQixjQUFjLFlBQWUsZUFBWSxZQUFZO0FBQy9ELHlCQUFJLElBQWE7QUFDcEIsd0JBQVMsU0FBQztBQUNEO0FBQ0QsaUNBS0U7O2NBWGI7Ozs7Ozs7QUFZQyxrQkFBTSxNQUFVLFVBQUssS0FBUSxRQUFLO0FBQ3BDLHFCQUFXLFFBQWMsWUFBeUIseUJBQUssT0FBTSxNQUFnQjtBQUV6RSx3QkFBUyxTQUFDO0FBQ1A7QUFDQSw0QkFBTSxPQUFjO0FBQ2Qsa0NBQU0sT0FLTjs7Y0FYMkI7Ozs7O0FBWXBDLG9CQUFpQixpQkFBUyxVQUFNLEtBR3BCOzs7OztBQUNaLG9CQUFvQixvQkFBUyxVQUFNLEtBR3RCOzs7OytDQUFVLFdBQVc7QUFDbEMsb0JBQUMsQ0FBRSxpQkFBUSxRQUFLLEtBQU0sT0FHWjs7Ozs0Q0FBVSxXQUFXO0FBQ3JDLGlCQUF3QixxQkFBTyxLQUFNLE1BQU0sTUFBTyxXQUFNLEtBQWEsVUFBTSxNQUFPLFdBQU07QUFDeEYsaUJBQWlCLGNBQU8sS0FBTSxNQUFNLFVBQWMsVUFBTTtBQUVyRCxpQkFBbUIsc0JBQWdCO0FBQ2hDLHNCQUlTLFVBTHlCOzs7Ozs7QUFNcEMsa0JBQXFCO0FBQ3JCLGtCQUFNLE1BQWMsY0FBSyxLQUFRO0FBQ2pDLGtCQUdjOzs7OztBQUNkLGtCQUdTOzs7Ozs7O0FBQ1Asb0JBQUMsQ0FBSyxLQUFNLE1BQVUsYUFBUSxLQUFNLE1BQTBCLHlDQUN0RCx1Q0FDTCxPQUFNLEtBQU0sTUFBSyxLQUFPLE9BQ1Qsc0JBQU0sS0FBTSxNQUFzQixzQkFDaEM7QUFDaEIsNEJBQVMsU0FBQztBQUNRLCtDQU9wQjs7a0JBVGlDLEVBSHZDOzs7Ozs7OzBCQWFzRCxLQUNsRCxNQURBO2lCQUFPO2lCQUFhO2lCQUFPO2lCQUFnQjtpQkFDL0IsV0FBTyxLQUFNOztBQUU1QixpQkFBTSxNQUFPLFdBQU8sR0FBRTtBQUNqQix3QkFBQyw4QkFBSSxTQUFVLFdBQVUsYUFDaEM7O0FBRUssb0JBQUssS0FBTSxNQUNiLDZCQUNvQiwrQ0FDYixPQUFRLE9BQ1Y7QUFBZSw0QkFBb0Isc0JBQVU7a0JBQXhDLEVBQ0gsT0FHUCxPQU5BLElBT0EsZ0JBQWEsd0NBQ0EsYUFBYyxhQUNwQixPQUFNLEtBQU0sTUFBTyxPQUNmLFdBQUksR0FDRSxpQkFBVyxVQUNoQixZQUFNLEtBQ0Esa0JBQU0sS0FBc0Isc0JBQ3ZDLE9BQVEsT0FDRCxjQUtkOzs7OztBQUNHLG9CQUNMLGdCQUFLLGdDQUFVLFdBQVMsWUFDdEIsOEJBQUksU0FBUSxTQUFNLEtBQW1CLG1CQUFZLGFBQU0sS0FBd0IseUJBQ3ZFLEtBQW9CLG1CQUNwQixLQUtmOzs7O1lBdEw2Qjs7QUFEOUIsc0JBQVcsK0JBQVEsVUF5TG5CO21CQUFzQixtQ0FDZCxPQUFlO0FBQ25CLFNBQVUsT0FBUSxNQUFTLFNBQU0sTUFBUyxTQUFPLE9BQUksT0FBTTtBQUVyRCxZQUFDO0FBQ0Q7QUFDVSx5QkFBRyxpQkFBSSxJQUFLLE1BQWUsZUFBSztBQUN0QyxtQkFBRyxpQkFBSSxJQUFNLE1BQVMsVUFBdUIsdUJBQUk7QUFDbEQsa0JBQU8sTUFFakI7O0VBVEQsRUFVQSxFQUFXLCtCQUFlLHVDQUMzQixtQ0FBZSxROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hPd0I7Ozs7QUFDUDs7OztBQUMxQjs7S0FBc0M7O0FBQ3ZCOzs7O0FBQ2E7Ozs7QUFDTzs7OztBQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMvQyxLQUFZLFNBQWUsb0JBQTBCO0FBc0JyRDs7O0FBRUUsMkJBQWlCOzs7cUdBQ0g7O0FBQ1IsZUFBTSxRQUFHO0FBQ0Ysd0JBQUc7QUFDRCwwQkFDWjtXQUpEO0FBS0ksZUFBYSxlQUFPLE1BQWEsYUFBVztBQUM1QyxlQUFzQix5Q0FBYSxTQUFLLE1BQWEsY0FBSyxLQUFFO0FBQ3ZELHNCQVFDO1VBVG9COzs7Ozs7O0FBVTNCLGlCQUFDLENBQUssS0FBTSxNQUFZO2tDQUNVLEtBQzdCOztxQkFETztxQkFBZTtxQkFDRixtQkFBTyxLQUFNOztBQUV2QyxxQkFBZSxZQUFXLFNBQUssS0FBVTtBQUN6QyxxQkFBaUIsY0FBUSxNQUFpQixpQkFBVSxZQUFjLGFBQU8sTUFBUTtBQUU5RSxxQkFBa0Isa0JBQUU7QUFDTCxzQ0FBVSxZQUMzQjs7QUFFRyxzQkFBUyxTQUFDO0FBTUQ7b0JBaEJQOzs7Ozs7QUFpQkYsb0JBQWlCLGlCQUFTLFVBQU0sS0FHcEI7Ozs7O0FBQ1osb0JBQW9CLG9CQUFTLFVBQU0sS0FHbEM7Ozs7cUNBRUQ7OzBCQUF5QyxLQUFNO2lCQUFsQztpQkFBTztpQkFBYzs7QUFDeEMsaUJBQVcsUUFBUSxNQUFpQixpQkFBTSxPQUFhLGFBQWE7QUFFOUQsb0JBQUMsRUFBTyxjQUFhLGFBQU8sTUFBTyxTQUcxQjs7Ozs7MkJBQzBDLEtBQ25EO2lCQURZO2lCQUFhO2lCQUFtQjs7K0JBQ3RCLEtBQVk7O2lCQUFuQjs7QUFDckIsaUJBQWEsWUFBSSxFQUZYO0FBSUgsaUJBQWlCLGlCQUFFO0FBQ1gsNkJBQWMsY0FDbkI7d0JBQWlCLGFBQUU7QUFDZCw2QkFBZ0IsY0FBWSxjQUN0QztjQUZTO0FBSUYsc0JBQUssS0FBVSxZQUFZO0FBQy9CLGtCQUdjOzs7OztBQUNkLGtCQUdBOzs7Ozs7OytCQUMrQixLQUM3Qjs7aUJBRE87aUJBQWU7aUJBQ1AsY0FBTyxLQUN0QjsyQkFBcUQsS0FBTTtpQkFBaEQ7aUJBQVk7aUJBQU87aUJBQWdCOztBQUNwRCxpQkFBb0IsaUJBQWMsY0FBSTtBQUN0QyxpQkFBa0IsZUFBaUIsaUJBQVk7QUFDL0MsdURBQTZCO0FBQ3BCLDBCQUFFLENBQU07QUFDRCxpQ0FDZDtjQUgwQixDQUFiLENBTFQ7QUFVQyxrREFDRCwyQ0FDQyxRQUFJO0FBQWUsNEJBQWdCLGtCQUFVO2tCQUFwQyxFQUE4QyxXQUFZLFdBQU0sT0FBRSxFQUFRLFFBQWdCLGlCQUVqRyxpQkFBTSxNQUFNLE9BQWdCLGdCQUFlLGNBQUksY0FBTSxNQUFPO0FBQ3BELHdCQUNMLGdCQUFTLG9DQUNKLEtBQVEsT0FDUCxNQUFPLE1BQ0QsWUFBYSxZQUNsQixPQUFRLE9BQ1Y7QUFBZSxnQ0FBUyxXQUtoQztzQkFMYTtjQVBtQyxDQUZyRCxDQURGLEVBZ0JFLGdCQUFnQiwyQ0FDUCxTQUFlLGNBQ2YsU0FBYyxhQUNoQixPQUFPLE1BS3JCOzs7O1lBM0dtQzs7QUFEcEMsNEJBQVcsK0JBQVEsVUE4R25CO21CQUEyQixhOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFJYTs7OztBQUdMOzs7O0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQWUsb0JBQXFCO0FBWWhEOzs7Ozs7Ozs7Ozs7OzswQkFLNkQsS0FBTTtzQ0FBakQ7aUJBQU87aUJBQVE7aUJBQVk7aUJBQVM7O0FBQ2xELHlCQUFjO0FBQ0osMkJBQVk7QUFDakIsc0JBQWUsY0FBSyxLQUFPLFNBQUs7QUFDN0IseUJBQVksY0FDbkI7Y0FKVSxDQURMO0FBTU4sdURBQTZCO0FBQ3JCLHlCQUFFLENBQU07QUFDRCxnQ0FDYjtjQUgwQixDQUFiO0FBS1Isb0JBQ0wsOEJBQUcsUUFBVSxXQUFZLFdBQU0sT0FBUSx1Q0FDakMsU0FDRyxPQUFFLEVBQVcsV0FBTSxLQUFVLFVBQ3pCLFdBQVUsV0FDSSx5QkFBRSxFQUFRLFFBQU8sTUFBSyxLQUFPLE9BQ2pEO0FBQWUsNEJBQVksY0FDNUI7a0JBRE0sRUFKVixHQU1BLDhCQUFJLFNBQVUsV0FBVSxhQUFNLEtBSXJDOzs7O1lBeEJPOztBQUxSLHdCQUFXLCtCQUFRLFVBK0JuQjttQkFBdUIsUzs7Ozs7Ozs7QUM5Q3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsMkNBQTBDLG1CQUFtQixpQkFBaUIsdUJBQXVCLHFCQUFxQixnQkFBZ0IscUJBQXFCLEVBQUUsc0JBQXNCLGdCQUFnQix1QkFBdUIsRUFBRSxpQkFBaUIsbUJBQW1CLGdCQUFnQixxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSx1Q0FBdUMsa0JBQWtCLHNCQUFzQixFQUFFLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEVBQUUsc0NBQXNDLG1CQUFtQixFQUFFLG9CQUFvQix1QkFBdUIsWUFBWSxXQUFXLGtDQUFrQyxvQkFBb0IsbUJBQW1CLHNCQUFzQixFQUFFOztBQUVyckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLFVBQXVCO1NBQVU7U0FBWTtTQUk1Qzs7QUFDQyxTQUFVLFNBQUk7QUFDZCxTQUFhLFlBQUk7QUFDakIsU0FBa0I7QUFFZixTQUFVLGNBQU8sR0FBRTtBQUNwQixhQUFpQixnQkFBSTtBQUNyQixnQkFBb0IsaUJBQWMsYUFBWTtBQUMvQiw4QkFBZSxZQUFXO0FBRXhDLHlCQUhnRDs7QUFJM0Msa0JBQWdCLGdCQUFjLFlBQVUsWUFBSyxLQUFZLFlBQWE7QUFDOUQsMEJBQVksWUFDdEI7WUFBRTtBQUNRLDBCQUNmOztBQUVLLFlBQUMsRUFBUSxnQkFDaEI7O0FBR0QsVUFBd0I7U0FBVTtTQUFPO1NBQVk7U0FLcEQ7OzBCQUMrQyxjQUFDLEVBQVcsc0JBQVksd0JBQWdCOztTQUExRTtTQUFrQjs7QUFDOUIsU0FBYSxZQUFpQjtBQUM5QixTQUFnQjtBQUNoQixTQUFhLFlBQUs7QUFFbEIsU0FBaUIsZ0JBQVMsU0FBYyxZQUFnQjtBQUU3QyxpQkFQUDtBQVFELFNBQWMsZ0JBQWMsWUFBRTtBQUMvQixnQkFBb0IsaUJBQWMsY0FBYSxjQUFVLE1BQU87QUFDakQsOEJBQWUsWUFBVztBQUV4Qyx5QkFIa0U7O0FBSXZELHdCQUFZLFlBQ3BCO1lBQUU7QUFDTSx3QkFDYjs7QUFFRyxVQUFDLElBQUssSUFBaUIsZ0JBQUcsS0FBZ0IsZ0JBQUssS0FBUyxNQUFPLFNBQUksR0FBSztBQUNqRSxtQkFBSyxLQUFNLE1BQ3JCLElBRjhFOztBQUl6RSxZQUFDLEVBQVcsc0JBU3BCOzsyQkFBMkMsT0FBdUIsYUFBb0I7QUFDcEYsU0FBUyxRQUFLO0FBQ2QsU0FBaUIsNEJBQXFCLGlCQUFHLEdBQVE7Z0JBQUUsSUFBSztNQUFqQixFQUFxQixDQUE3QjtBQUMvQixTQUFXLFVBQU8sS0FBSyxLQUFjLGdCQUFjO0FBRTVDLGFBQUksSUFJTjs7Ozs7U0FFVSxZQUFPLFdBQU87QUFDckIsaUJBQUU7QUFDRDtBQUNELG1CQUFFO0FBQ0UseUJBQUc7QUFDSCx5QkFLRjs7VUFURCxFQURzQjtNQUE1Qjs7VUFXRSxJQUFLLElBQUksR0FBRyxJQUFVLFNBQUs7K0JBQ2MsZUFBQyxFQUFXLFdBQUcsR0FBTyxjQUFhLDBCQUFlOzthQUE3RTthQUFVOztBQUV0QixlQUFLLEtBQUM7QUFDSixvQkFBVztBQUNaLG1CQUFFO0FBQ0UseUJBQUcsSUFBSTtBQUlsQjs7WUFUTztNQURKO0FBWUUsWUFHUjs7MkJBQTBDLEdBQWlCO0FBQ3RELFNBQUUsSUFBSyxHQUFFO0FBQ0gsaUJBQU0sTUFBb0I7QUFDM0IsZ0JBQ0Y7WUFBRTtBQUNBLGdCQUFVLFNBQUUsSUFBbUIsV0FFeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR3VDOzs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMxQyxLQUFZLFNBQWUsb0JBQTRCO0FBU3ZEOzs7QUFFRSw4QkFBaUIsT0FDZjs7O21HQUdJOzs7OztrQ0FDRTswQkFBeUIsS0FBTTtpQkFBdEI7aUJBQVM7O0FBQ3hCLGlCQUFnQixhQUFHLENBQUMsT0FBUSxHQUFTLFFBQU8sS0FBUSxRQUFHLEtBQU07QUFFdEQsb0JBQ0QsS0FBTSxNQUFZLFdBQ3BCLDhCQUFJLFNBQVUsV0FBVyxjQUN2Qiw4QkFBSSxhQUFDLDhCQUFPLGdCQUFtQixlQUFjLFFBQzdDLDhCQUFJLFNBQVUsV0FBVyxjQUtsQzs7OztZQW5Cc0M7O0FBRHZDLCtCQUFXLCtCQUFRLFVBc0JuQjttQkFBOEIsZ0I7Ozs7Ozs7O0FDL0I5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLDZDQUE0QyxlQUFlLHNCQUFzQixvQkFBb0IsZ0JBQWdCLGVBQWUsRUFBRSwwQ0FBMEMscUJBQXFCLEVBQUUsa0JBQWtCLGVBQWUsd0JBQXdCLHVCQUF1Qix1QkFBdUIsY0FBYyxXQUFXLGVBQWUsRUFBRSx3QkFBd0Isd0JBQXdCLGVBQWUsRUFBRSxtQkFBbUIsZ0JBQWdCLGlCQUFpQix3QkFBd0IsK0NBQStDLHVCQUF1QixZQUFZLGNBQWMsb0JBQW9CLHVCQUF1QixlQUFlLGtCQUFrQixFQUFFLHFCQUFxQix1QkFBdUIsb0JBQW9CLGdCQUFnQixpQkFBaUIsd0JBQXdCLGdCQUFnQiwrQ0FBK0Msc0JBQXNCLEVBQUUscUJBQXFCLHNCQUFzQixnQkFBZ0IsRUFBRTs7QUFFaDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EseUNBQXdDLHVCQUF1QixpQkFBaUIsbUJBQW1CLHFCQUFxQixxQkFBcUIsRUFBRSx5QkFBeUIsZ0JBQWdCLEVBQUU7O0FBRTFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7O0FDWDJCOzs7O0FBSzNCOzs7Ozs7Ozt5QkFBb0M7QUFDM0IsYUFBSSxJQUE2QjtBQUN4QyxTQUFlLGNBQUs7QUFFZixXQUFVLFVBQVEsUUFBSyxLQUFNLGlCQUFPLE1BQU87QUFDM0MsYUFBSyxLQUFVLGNBQWUsV0FBRTtBQUMxQixxQkFBTSxNQUNkOztBQUNVLHFCQUFLLEtBQUssS0FDckI7TUFMa0M7QUFPOUIsWUFJUjs7bUNBQXlEO0FBQ2hELGFBQUksSUFBWTtBQUN2QixzQ0FBMEIsVUFBRTtBQUN2QixjQUFNO0FBQ0gsaUJBQ047TUFIZSxDQUFUO0FBSUQsYUFBSSxJQUFlO0FBQzFCLHVCQUE2QixVQUN2QixJQUFLLEtBQUUsc0JBQU0saUJBQU0sS0FBTztBQUN6QixhQUFJLElBQVMsYUFBTSxLQUFPLElBQVUsY0FBVTs7QUFFekMsb0JBQ1AsS0FGZ0I7O0FBSWQsYUFBSSxJQUFRLFlBQVMsS0FBRTtBQUNqQiw0Q0FBeUIsSUFDNUI7Z0JBQUU7QUFDQyw4Q0FBMkIsSUFFcEM7O01BWGlCLENBREYsQ0FhVjtnQkFDWTtNQURQLENBYkg7O1lBZUosQ0FBSSxJQUFVO0FBQ2YsWUFDUDs7Ozs7Ozs7QUM1Q0Qsb0M7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7Ozs7QUFDTDs7QUFDRzs7OztBQUNZOzs7O0FBQ0Q7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzFDLEtBQVksU0FBZSxvQkFBd0I7QUFZbkQ7OztBQUVFLDBCQUFpQjs7O29HQUNIOztBQUNSLGVBQU0sUUFBRztBQUNTLG1DQUNyQjtXQUhEO0FBSUksZUFBZ0Isa0JBQU8sTUFBZ0IsZ0JBRzlCOzs7Ozs7O0FBQ1Qsa0JBQU0sTUFBdUIsdUJBQUMsQ0FBSyxLQUFNLE1BRzlCOzs7OzZDQUdYOzs7a0NBQ0U7MEJBQXNDLEtBQU07aUJBQXJDO2lCQUF3Qjs7QUFFOUIsb0JBQ0wsOEJBQUksU0FBVSxXQUFlLGtCQUMzQiw4QkFBSSxTQUFVLFdBQVksZUFDeEIsOEJBQUksU0FBVSxXQUFPLFVBQ25CLGdCQUFLLG1DQUFHLElBQUksT0FDVixnQkFBSyxnQ0FBSyxNQUFVLFdBQ3BCLDhCQUFLLGNBRUgsU0FDTiw4QkFBSyxVQUFVLFdBQVEsV0FBZSxRQUN0Qyw4QkFBSSxTQUFRLFNBQU0sS0FBaUIsaUJBQVUsV0FBYSxnQkFDeEQsZ0JBQUssZ0NBQUssTUFDTixrQkFDTixnQkFBSyxvQ0FFc0IsdUJBQ3JCLGdCQUFpQiwwQ0FDbEIsUUFPZDs7OztZQTVDa0M7O0FBRG5DLDJCQUFXLCtCQUFRLFVBK0NuQjttQkFBMEIsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWM7Ozs7QUFDSDs7QUFFUzs7OztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsS0FBWSxTQUFlLG9CQUE2QjtBQU94RDs7O0FBRUUsK0JBQWlCLE9BQ2Y7OztvR0FHSTs7Ozs7O0FBQ0csb0JBQ0wsOEJBQUksU0FBVSxXQUFvQix1QkFDaEMsOEJBQUcsUUFBVSxXQUFVLGFBQ3JCLDhCQUFHLFFBQVUsV0FBbUIsc0JBQzlCLDhCQUFLLGNBQVUscUNBQUssY0FDakIsUUFDTCw4QkFBRyxRQUFVLFdBQWdCLG1CQUMzQiw4QkFBSyxVQUFVLFdBQVEsV0FBWSxTQUNuQyxnQkFBUyxvQ0FBTSxPQUNaLFVBQ0wsOEJBQUcsUUFBVSxXQUFlLGtCQUMxQiw4QkFBSyxVQUFNLE9BQUUsRUFBVyxZQUFVLFlBQWMsV0FDaEQsOEJBQUssVUFBTSxPQUFFLEVBQVcsWUFBVSxZQUFjLFdBQ2hELDhCQUFLLFVBQU0sT0FBRSxFQUFXLFlBQVUsWUFNN0M7Ozs7WUExQnVDOztBQUR4QyxnQ0FBVywrQkFBUSxVQTZCbkI7bUJBQ0MsMkJBQXlCLGtCOzs7Ozs7Ozs7Ozs7O0FDeENIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RpQjs7OztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsS0FBWSxTQUFVLG9CQUFvQjtBQXdCMUM7OztBQUVFLHVCQUFpQixPQUNmOzs7NEZBR2U7Ozs7OzZDQUdYOzs7a0NBQ0E7OzswQkFBaUMsS0FBTTtpQkFBMUIsY0FBTjtpQkFBbUI7O0FBRTNCLGlCQUFDLE9BQVcsS0FBTSxNQUFNLFVBQWMsVUFBRTtBQUN0QyxxQkFBSyxTQUFRLE9BQVEsU0FBWTtBQUM5Qiw0QkFDQSxLQUZnQzt3QkFFOUI7QUFDRiw0QkFFUDs7O0FBQ0QsaUJBQVMsUUFBVSxRQUFNLFFBQU8sT0FBUTtBQUVqQyxvQkFDTCw4QkFBSSxTQUFVLFdBQVcsYUFBTyxJQUFVLFdBQWdCLG1CQUVsRCxLQUFNLE1BQVUsU0FDbEIsOEJBQUssY0FBTSxLQUFNLE1BRXBCLHNDQUNHLFNBQ0s7QUFDRix5QkFBSyxPQUFNLE1BQVU7QUFDdEIsNkJBQVksa0JBRFk7QUFHckIsNkJBQUssT0FBTSxNQUFTLFNBQUU7QUFDdkIsaUNBQXVCLDJCQUFhLE1BQVEsUUFBSTt3Q0FBaUIsT0FBTzs4QkFBakIsQ0FBekIsQ0FBa0QsUUFBSyxPQUFNLE1BQU87QUFFL0YsaUNBQWtCLHNCQUFPLEdBQUU7QUFDcEIsNENBQU8sT0FBTSxNQUFRLFFBQUcsR0FDNUI7d0NBQXNCLHNCQUFPLEdBQUU7QUFDM0IsNENBQU8sT0FBTSxNQUFRLFFBQUcsR0FDNUI7OEJBRkksTUFFRjtBQUNFLDRDQUFPLE9BQU0sTUFBUSxRQUFHLEdBQU07QUFDL0IseUNBQU0sTUFFWDs7Z0NBQUU7QUFDSCxpQ0FBQyxPQUFXLE9BQU0sTUFBTSxVQUFjLFVBQUU7QUFDbEMseUNBQU0sTUFDVDtvQ0FBRTtBQUNFLDRDQUFHLENBQUssT0FBTSxNQUV6Qjs7O0FBRUcsZ0NBQU0sTUFBUyxTQUVyQjs7a0JBekJRLEVBMEJDLDBCQUFxQixPQTNCbEMsRUE2QkUsOEJBQUksU0FBVSxXQUF5QixzQkFDdkMsOEJBQUksU0FBVSxXQUt2Qjs7OztZQS9EK0I7O0FBSGhDLHVEQUFrQixRQUFFO0FBQ0wsb0JBQ2I7RUFGUyxJQXVGWDttQkFBdUIsUzs7Ozs7Ozs7QUM5R3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsaURBQWdELDBCQUEwQixFQUFFLGdFQUFnRSwwQkFBMEIsZ0JBQWdCLHVCQUF1QixvQkFBb0Isa0JBQWtCLGlCQUFpQixFQUFFLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsdUJBQXVCLFdBQVcsK0NBQStDLEVBQUUsMkJBQTJCLGlCQUFpQixvQkFBb0Isd0JBQXdCLEVBQUUsZ0RBQWdELHFCQUFxQixFQUFFLGlEQUFpRCxZQUFZLEVBQUUsZ0RBQWdELGVBQWUsRUFBRSwrQ0FBK0Msd0JBQXdCLEVBQUU7O0FBRS95QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNkQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLHFEQUFvRCx1QkFBdUIsYUFBYSxjQUFjLGlCQUFpQixxQkFBcUIsZ0RBQWdELGdCQUFnQix1QkFBdUIsOEJBQThCLHFCQUFxQixFQUFFLG1CQUFtQix1QkFBdUIsa0NBQWtDLEVBQUUsOEJBQThCLG1CQUFtQixFQUFFLDZCQUE2QixxQkFBcUIsZUFBZSxFQUFFLGtDQUFrQyx3QkFBd0IsaUJBQWlCLGtCQUFrQiw2QkFBNkIscUJBQXFCLG1CQUFtQix3QkFBd0Isc0JBQXNCLEVBQUUsOENBQThDLHVCQUF1QixtQ0FBbUMsRUFBRSwwQkFBMEIscUJBQXFCLHFCQUFxQixFQUFFLHVDQUF1QyxrQkFBa0IsRUFBRSwwQ0FBMEMsbUJBQW1CLEVBQUUseUJBQXlCLG1CQUFtQixFQUFFLDhCQUE4Qix5QkFBeUIsNkJBQTZCLDBCQUEwQiw0QkFBNEIsa0JBQWtCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEVBQUU7O0FBRS90QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0EsZ0RBQStDLGdCQUFnQixvQkFBb0IsV0FBVyxpQkFBaUIsc0JBQXNCLGdCQUFnQiwrQ0FBK0MsaUJBQWlCLEVBQUUsc0JBQXNCLHNCQUFzQix1QkFBdUIsbUJBQW1CLHFCQUFxQix1QkFBdUIsRUFBRSxpQkFBaUIsdUJBQXVCLGNBQWMsV0FBVyxFQUFFLG1CQUFtQixrQkFBa0IsNEJBQTRCLHVCQUF1QixFQUFFLDBCQUEwQixvQkFBb0IsRUFBRSxzQkFBc0Isd0JBQXdCLDRCQUE0QixFQUFFLGtCQUFrQixzQkFBc0IsRUFBRSx1QkFBdUIsdUJBQXVCLGdCQUFnQixXQUFXLG9CQUFvQixrQkFBa0IsRUFBRTs7QUFFL3dCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7O0FDZHdDOzs7O0FBUXhDOzs7Ozs7Ozs7Ozs7S0FBMkM7OztBQUV6QyxrQ0FBaUIsT0FDZjs7O3VHQUtZOzs7Ozs7QUFDTixvQkFBSyxLQUFhLGFBQVMsU0FHN0I7Ozs7Ozs7MEJBQ3lCLEtBQU07aUJBQXRCO2lCQUFTOztBQUVmLG9CQUNMLGdCQUFhLHdDQUNOLE9BQVEsT0FDUixPQUFRLE9BQ0YsYUFBSyxJQUNQLFdBQUksR0FDSCxZQUFJLEdBQ0osa0JBQ1A7QUFBZSw0QkFBYSxlQU12QztrQkFOZ0IsSUFWTjs7Ozs7OzttQkFnQndCLG9COzs7Ozs7Ozs7Ozs7Ozs7QUNyQ007Ozs7QUFTeEM7Ozs7Ozs7Ozs7OztLQUNROzs7Ozs7Ozs7OztrQ0FDRTtpQkFBYSxZQUFPLEtBQU07O0FBRXpCLG9CQUNMLDhCQUFJLFNBQVUsV0FBVyxhQUFPLE1BQ3pCLEtBQU0sTUFJbEI7Ozs7Ozs7QUFFRCw2QkFBcUM7QUFDbkMsU0FBYTtBQUVKLGVBQVEsa0JBQWdCO0FBQ3RCLHFCQUFRLE1BQ2pCO01BRmdCO0FBSVosWUFDUDs7QUFFRCxvQ0FBNEM7QUFDdkMsU0FBQyxPQUFnQixjQUFpQixhQUFFO0FBQzdCLGtCQUFLLEtBQVUsWUFDbkI7WUFBRTtBQUNFLGtCQUFLLEtBQWdCLGdCQUlqQzs7O21CQUE2QiwrQkFDVCxvQkFFbkIsMkJBQU0sTTs7Ozs7OztBQzFDUCwrQzs7Ozs7Ozs7QUNDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLG9DQUFtQyxxQkFBcUIsRUFBRSxvQkFBb0IsdUJBQXVCLG1CQUFtQixvQkFBb0Isc0JBQXNCLGdCQUFnQixFQUFFOztBQUVwTDtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuaW1wb3J0ICogYXMgdmlld2VyVXRpbHMgZnJvbSAnLi9WaWV3ZXIudXRpbHMnXG5pbXBvcnQgeyBmZXRjaEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5EaWFsb2cgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFZpZXdlclBhbmVsIGZyb20gJy4vVmlld2VyUGFuZWwnXG5pbXBvcnQgQm9va1BhZ2VXaXRoUmF3SHRtbCBmcm9tICcuL0Jvb2tQYWdlV2l0aFJhd0h0bWwnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm9keSdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLnNjc3MnKVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hCb29rOiBhbnlcbiAgYm9vazogYW55XG4gIHJhd0Jvb2tDb250ZW50OiBzdHJpbmdcbiAgZmV0Y2hQcm9ncmVzczogKGJvb2tJZDogc3RyaW5nKSA9PiB2b2lkXG4gIHByb2dyZXNzOiBudW1iZXJcbiAgb3BlbkRpYWxvZzogKGRhdGE6IG9wZW5EaWFsb2cpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dQYW5lbD86IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgbm9kZUhlaWdodHM/OiBudW1iZXJbXVxuICBub2Rlcz86IHN0cmluZ1tdXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlPzogYm9vbGVhblxuICBmbHVpZD86IGJvb2xlYW5cbiAgaXNUb3VjaE1vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICBpc0NhbGNNb2RlOiB0cnVlLFxuICAgICAgbm9kZUhlaWdodHM6IFtdLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlLFxuICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgaXNUb3VjaE1vZGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va0lkOiBzdHJpbmdcbiAgYm9va1BhZ2VXaXRoUmF3SHRtbDogYW55XG4gIGRlYm91bmRlZEhhbmRsZVJlc2l6ZTogYW55XG5cbiAgaXNWaWV3Rmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBpc1RvdWNoTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIHNldFByb2dyZXNzKHBlcmNlbnRhZ2UpIHtcbiAgICBhcGkuc2V0UHJvZ3Jlc3ModGhpcy5ib29rSWQsIHsgcGVyY2VudGFnZSB9KVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ2FsY01vZGUgJiYgIXRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgbGV0IGRUb1NjcmVlblJpZ2h0ID0gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggLSBldmVudC5wYWdlWFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiB5IDwgOTAsXG4gICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UobmV3UHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKVxuICB9XG5cbiAgaGFuZGxlVmlld2VyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjRG9tKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDYWxjTW9kZTogdHJ1ZVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sLmdldENvbnRlbnRIdG1sKClcbiAgICAgIGNvbnN0IG5vZGVIZWlnaHRzID0gdmlld2VyVXRpbHMuZ2V0Tm9kZUhlaWdodHMoY29udGVudEh0bWwuY2hpbGROb2RlcylcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxjIGRvbmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVIZWlnaHRzLFxuICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgbG9hZFJhd0Jvb2tDb250ZW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rKHRoaXMuYm9va0lkKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHZpZXdlclV0aWxzLm1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdCh0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZXMsXG4gICAgICAgIGZsdWlkOiB0aGlzLmlzVmlld0ZsdWlkKCksXG4gICAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhXy5pc0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IGhhc0Jvb2tOb2Rlc0xvYWRlZCA9IHRoaXMuc3RhdGUubm9kZXMubGVuZ3RoICE9PSAwICYmIHByZXZTdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDBcbiAgICBjb25zdCB2aWV3Q2hhbmdlZCA9IHRoaXMuc3RhdGUuZmx1aWQgIT09IHByZXZTdGF0ZS5mbHVpZFxuXG4gICAgaWYgKGhhc0Jvb2tOb2Rlc0xvYWRlZCB8fCB2aWV3Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjRG9tKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRSYXdCb29rQ29udGVudCgpXG4gICAgdGhpcy5wcm9wcy5mZXRjaFByb2dyZXNzKHRoaXMuYm9va0lkKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXJWaWV3UGFuZWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnNob3dQYW5lbCB8fCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlKSAmJiAoXG4gICAgICA8Vmlld2VyUGFuZWxcbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX1cbiAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U9e3RoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2V9XG4gICAgICAgIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U9e25ld1Zpc2liaWxpdHkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IG5ld1Zpc2liaWxpdHlcbiAgICAgICAgICB9KVxuICAgICAgICB9IH1cbiAgICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJCb29rKCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG5vZGVIZWlnaHRzLCBmbHVpZCwgc2hvd1BhZ2VJbmZvIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgc3R5bGVOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmcgLi4uPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNDYWxjTW9kZVxuICAgICAgPyAoXG4gICAgICAgIDxCb29rUGFnZVdpdGhSYXdIdG1sXG4gICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sID0gcmVmIH0gfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgICAgOiAoXG4gICAgICAgIDxCb29rUGFnZUxpc3RcbiAgICAgICAgICBub2RlSGVpZ2h0cz17bm9kZUhlaWdodHN9XG4gICAgICAgICAgbm9kZXM9e3RoaXMuc3RhdGUubm9kZXN9XG4gICAgICAgICAgcGFnZUNvdW50PXs1fVxuICAgICAgICAgIGluaXRpYWxQcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgcGFnZUhlaWdodD17OTAwfVxuICAgICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2V9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIHNob3dQYWdlSW5mbz17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb2R5IGJvZHlDbGFzcz1cInZpZXdlclwiPlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld2VyQ2xpY2t9IG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSB9ID5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVmlld1BhbmVsKCkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJCb29rKCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQm9keT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wczogYW55KSA9PiB7XG4gICAgY29uc3QgYm9vayA9IHN0YXRlLmVudGl0aWVzLmJvb2tzW293blByb3BzLnBhcmFtcy5pZF0gfHwge31cblxuICAgIHJldHVybiB7XG4gICAgICBib29rLFxuICAgICAgcmF3Qm9va0NvbnRlbnQ6IF8uZ2V0KGJvb2ssICdjb250ZW50LnJhdycsICcnKSxcbiAgICAgIHByb2dyZXNzOiBfLmdldChzdGF0ZS5wYXlsb2FkcywgJ3Byb2dyZXNzLnBlcmNlbnRhZ2UnLCAwKSxcbiAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbiAgICB9XG4gIH0sXG4gIHsgZmV0Y2hCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuRGlhbG9nIH1cbikoVmlld2VyIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rUGFnZSBmcm9tICcuL0Jvb2tQYWdlJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9Cb29rUGFnZUxpc3QudXRpbHMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgVmlld2VyU2Nyb2xsYmFyIGZyb20gJy4vVmlld2VyU2Nyb2xsYmFyJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL19ib29rLXBhZ2UtbGlzdC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG5vZGVzOiBzdHJpbmdbXVxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbiAgcGFnZUNvdW50OiBudW1iZXJcbiAgaXNTY3JvbGxNb2RlPzogYm9vbGVhblxuICBpbml0aWFsUGFnZT86IG51bWJlclxuICBpbml0aWFsUHJvZ3Jlc3M/OiBudW1iZXJcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIG9uUHJvZ3Jlc3NDaGFuZ2U/OiAobmV3UHJvZ3Jlc3M6IG51bWJlcikgPT4gdm9pZFxuICBmbHVpZDogYm9vbGVhblxuICBpc0NhbGNNb2RlPzogYm9vbGVhblxuICBzaG93UGFnZUluZm8/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzY3JvbGxUb3A/OiBudW1iZXJcbiAgY3VycmVudFBhZ2U/OiBudW1iZXJcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va1BhZ2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgY3VycmVudFBhZ2U6IDFcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlU2Nyb2xsLCAyMDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va1BhZ2VMaXN0RG9tOiBIVE1MVUxpc3RFbGVtZW50XG4gIGJvb2tQYWdlOiBhbnlcbiAgZGVib3VuZGVkSGFuZGxlU2Nyb2xsOiBhbnlcblxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzQ2FsY01vZGUpIHtcbiAgICAgIGNvbnN0IHsgcGFnZXMsIHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgICBjb25zdCB7IG9uUHJvZ3Jlc3NDaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gdXRpbHMucGVyY2VudGFnZVRvUGFnZShzY3JvbGxUb3AgLyB0b3RhbEhlaWdodCwgcGFnZXMubGVuZ3RoKVxuXG4gICAgICBpZiAob25Qcm9ncmVzc0NoYW5nZSkge1xuICAgICAgICBvblByb2dyZXNzQ2hhbmdlKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFBhZ2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsKVxuICB9XG5cbiAgY2FsY1BhZ2VzKCkge1xuICAgIC8vIHRvZG86IOa3u+WKoOe8k+WtmFxuICAgIGNvbnN0IHsgbm9kZUhlaWdodHMsIG5vZGVzLCBwYWdlSGVpZ2h0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGFnZXMgPSB1dGlscy5ncm91cE5vZGVzQnlQYWdlKG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodClcblxuICAgIHJldHVybiB7IHBhZ2VzLCB0b3RhbEhlaWdodDogcGFnZXMubGVuZ3RoICogcGFnZUhlaWdodCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBhZ2VIZWlnaHQsIGluaXRpYWxQYWdlLCBpbml0aWFsUHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgbGV0IHNjcm9sbFRvcCA9IDBcblxuICAgIGlmIChpbml0aWFsUHJvZ3Jlc3MpIHtcbiAgICAgIHNjcm9sbFRvcCA9IHRvdGFsSGVpZ2h0ICogaW5pdGlhbFByb2dyZXNzXG4gICAgfSBlbHNlIGlmIChpbml0aWFsUGFnZSkge1xuICAgICAgc2Nyb2xsVG9wID0gcGFnZUhlaWdodCAqIChpbml0aWFsUGFnZSAtIDEpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcGFnZUNvdW50LCBwYWdlSGVpZ2h0LCBmbHVpZCwgc2hvd1BhZ2VJbmZvIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3RhcnRQYWdlSW5kZXggPSBjdXJyZW50UGFnZSAtIDFcbiAgICBjb25zdCBlbmRQYWdlSW5kZXggPSBzdGFydFBhZ2VJbmRleCArIHBhZ2VDb3VudFxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3BhZ2VzJzogIWZsdWlkLFxuICAgICAgJ3BhZ2VzLS1mbHVpZCc6IGZsdWlkXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdERvbSA9IHJlZiB9IH0gc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IGhlaWdodDogdG90YWxIZWlnaHQgfX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgXy5zbGljZShwYWdlcywgc3RhcnRQYWdlSW5kZXgsIGVuZFBhZ2VJbmRleCkubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCb29rUGFnZVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlID0gcmVmIH0gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxWaWV3ZXJTY3JvbGxiYXJcbiAgICAgICAgICB2aXNpYmxlPXtzaG93UGFnZUluZm99XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgdG90YWw9e3BhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9Cb29rUGFnZUxpc3QudXRpbHMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL19ib29rLXBhZ2Uuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwYWdlOiB1dGlscy5UUGFnZVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgZmx1aWQ6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgYm9va1BhZ2VEb206IEhUTUxEaXZFbGVtZW50XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZTogeyBub2RlcywgbWV0YSB9LCBwYWdlSGVpZ2h0LCBmbHVpZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHBhZ2VIZWlnaHQgKiAobWV0YS5wYWdlTm8gLSAxKSxcbiAgICAgIGhlaWdodDogcGFnZUhlaWdodCB8fCAnYXV0bydcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZSc6ICFmbHVpZCxcbiAgICAgICdwYWdlLS1mbHVpZCc6IGZsdWlkXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IG1ldGEub2Zmc2V0IH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBub2Rlcy5qb2luKCcnKSB9fVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZURvbSA9IHJlZiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1ub1wiPnttZXRhLnBhZ2VOb308L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX2Jvb2stcGFnZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnRfMW15ZEkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNTUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM2NjY7XFxuICBsaW5lLWhlaWdodDogMS45OyB9XFxuICAuY29udGVudF8xbXlkSSBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4OyB9XFxuXFxuLnBhZ2VfMVNVNGgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucGFnZS0tZmx1aWRfdlg4clEgeyB9XFxuICAucGFnZS0tZmx1aWRfdlg4clEgLmNvbnRlbnRfMW15ZEkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4OyB9XFxuXFxuLnBhZ2UtLWluaXRfOERaRkIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuICAucGFnZS0taW5pdF84RFpGQiAuY29udGVudF8xbXlkSSB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblxcbi5wYWdlLW5vXzFqYlYtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjZTZlNmU2O1xcbiAgZm9udC1zaXplOiAwLjhyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiY29udGVudF8xbXlkSVwiLFxuXHRcInBhZ2VcIjogXCJwYWdlXzFTVTRoXCIsXG5cdFwicGFnZS0tZmx1aWRcIjogXCJwYWdlLS1mbHVpZF92WDhyUSBwYWdlXzFTVTRoXCIsXG5cdFwicGFnZS0taW5pdFwiOiBcInBhZ2UtLWluaXRfOERaRkJcIixcblx0XCJwYWdlLW5vXCI6IFwicGFnZS1ub18xamJWLVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBsb25nIHBhcmFncmFwaCBzaXR1YXRpb24gZG9lc24ndCBzZWVtIHRvIGFmZmVjdCB0aGlzIGZ1bmN0aW9uXG4vLyBvZmZzZXQgZGlzdGFuY2UgaXMgYWx3YXlzIG5lZ3RpdmUgb3IgemVyb1xuLy8gdGhlIGluZGV4IHdpbGwgYmUgb2YgdGhlIHBhcmFncmFwaCB3aXRoIHRoaXMgb2Zmc2V0IGF0IHRoZSBlbmRcbmZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoe3BhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHN9OiB7XG4gIHBhZ2VJbmRleDogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IG5vZGVJbmRleCA9IDBcbiAgbGV0IG5vZGVTdGFydEluZGV4XG5cbiAgaWYgKHBhZ2VJbmRleCAhPT0gMCkge1xuICAgIGxldCBub2RlSGVpZ2h0U3VtID0gMFxuICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgKiBwYWdlSW5kZXgpIHtcbiAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbbm9kZUluZGV4XVxuICAgICAgbm9kZUluZGV4KytcbiAgICB9XG4gICAgb2Zmc2V0ID0gbm9kZUhlaWdodFN1bSAtIG5vZGVIZWlnaHRzW25vZGVJbmRleCAtIDFdIC0gcGFnZUluZGV4ICogcGFnZUhlaWdodFxuICAgIG5vZGVTdGFydEluZGV4ID0gbm9kZUluZGV4IC0gMVxuICB9IGVsc2Uge1xuICAgIG5vZGVTdGFydEluZGV4ID0gMFxuICB9XG5cbiAgcmV0dXJuIHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9XG59XG5cblxuZnVuY3Rpb24gZ2V0Tm9kZXNPZlBhZ2Uoe3BhZ2VJbmRleCwgbm9kZXMsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBub2RlczogYW55XG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9ID0gZ2V0UGFnZU9mZnNldCh7IHBhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHMgfSlcbiAgbGV0IG5vZGVJbmRleCA9IG5vZGVTdGFydEluZGV4XG4gIGxldCBub2RlRW5kSW5kZXhcbiAgbGV0IHBhZ2VOb2RlcyA9IFtdXG5cbiAgbGV0IG5vZGVIZWlnaHRTdW0gPSBvZmZzZXQgKyBub2RlSGVpZ2h0c1tub2RlU3RhcnRJbmRleF1cblxuICBub2RlSW5kZXgrK1xuICBpZiAobm9kZUhlaWdodFN1bSA8IHBhZ2VIZWlnaHQpIHtcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICYmIG5vZGVJbmRleCAhPT0gbm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG5vZGVFbmRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlRW5kSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IG5vZGVTdGFydEluZGV4OyBpIDw9IG5vZGVFbmRJbmRleCAmJiBpIDw9IG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHBhZ2VOb2Rlcy5wdXNoKG5vZGVzW2ldKVxuICB9XG5cbiAgcmV0dXJuIHsgcGFnZU5vZGVzLCBvZmZzZXQgfVxufVxuXG5cbmV4cG9ydCB0eXBlIFRQYWdlID0ge1xuICBub2Rlczogc3RyaW5nW11cbiAgbWV0YTogYW55XG59XG5leHBvcnQgdHlwZSBUUGFnZUxpc3QgPSBUUGFnZVtdXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBOb2Rlc0J5UGFnZShub2RlczogYW55LCBub2RlSGVpZ2h0czogbnVtYmVyW10sIHBhZ2VIZWlnaHQ6IG51bWJlcik6IFRQYWdlTGlzdCB7XG4gIGxldCBwYWdlcyA9IFtdXG4gIGxldCBwYWdlSGVpZ2h0U3VtID0gbm9kZUhlaWdodHMucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKVxuICBsZXQgcGFnZVN1bSA9IE1hdGguY2VpbChwYWdlSGVpZ2h0U3VtIC8gcGFnZUhlaWdodClcblxuICBjb25zb2xlLmxvZygndG9kbzogZ3JvdXAgbm9kZXMnKVxuICAvLyBub2RlcyA9IG5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgLy8gICBub2RlLnByb3BzLmluZGV4ID0gaW5kZXhcbiAgLy8gICByZXR1cm4gbm9kZVxuICAvLyB9KVxuXG4gIGlmIChub2RlSGVpZ2h0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIG5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IDEsXG4gICAgICAgIG9mZnNldDogMFxuICAgICAgfVxuICAgIH1dXG4gIH1cblxuICAvLyBmaW5hbGx5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZVN1bTsgaSsrKSB7XG4gICAgY29uc3QgeyBwYWdlTm9kZXMsIG9mZnNldCB9ID0gZ2V0Tm9kZXNPZlBhZ2UoeyBwYWdlSW5kZXg6IGksIG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodCB9KVxuXG4gICAgcGFnZXMucHVzaCh7XG4gICAgICBub2RlczogcGFnZU5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IGkgKyAxLFxuICAgICAgICBvZmZzZXRcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBwYWdlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGFnZVRvUGFnZShwOiBudW1iZXIsIHBhZ2VTdW06IG51bWJlcikge1xuICBpZiAocCA+IDEpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXcm9uZyBwYXJhbWV0ZXIhJylcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludCgocCAqIHBhZ2VTdW0pIGFzIGFueSkgKyAxXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1zY3JvbGxiYXIuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGN1cnJlbnQ6IG51bWJlclxuICB0b3RhbDogbnVtYmVyXG4gIHZpc2libGU6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyU2Nyb2xsYmFyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50LCB0b3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDApLnRvRml4ZWQoMikgKyAnJSdcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImxvYy1pbmZvXCI+XG4gICAgICAgICAgPGRpdj48c3Ryb25nPntjdXJyZW50fTwvc3Ryb25nPi97dG90YWx9PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzdWItaW5mb1wiPntwZXJjZW50YWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyU2Nyb2xsYmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcm9sbGJhcl8zdkhsdCB7XFxuICB3aWR0aDogMnB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMTAwcHg7IH1cXG4gIC5zY3JvbGxiYXJfM3ZIbHQ6aG92ZXIgLmJ1dHRvbl8xdmRxVSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRyYWNrXzJGTFRBIHtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogOHB4O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi50cmFjay0tcGFzdF8zWUtkNCB7XFxuICBiYWNrZ3JvdW5kOiAjODliZWZmO1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5idXR0b25fMXZkcVUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMDA2QkVGO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogODRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvYy1pbmZvXzM3N1Z1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzJDMkMyQztcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7IH1cXG5cXG4uc3ViLWluZm9fM3FJNXUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2FhYTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNjcm9sbGJhclwiOiBcInNjcm9sbGJhcl8zdkhsdFwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8xdmRxVVwiLFxuXHRcInRyYWNrXCI6IFwidHJhY2tfMkZMVEFcIixcblx0XCJ0cmFjay0tcGFzdFwiOiBcInRyYWNrLS1wYXN0XzNZS2Q0IHRyYWNrXzJGTFRBXCIsXG5cdFwibG9jLWluZm9cIjogXCJsb2MtaW5mb18zNzdWdVwiLFxuXHRcInN1Yi1pbmZvXCI6IFwic3ViLWluZm9fM3FJNXVcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19ib29rLXBhZ2UtbGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLWxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZXNfMVNOaXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlcy0tZmx1aWRfMzlGUGUge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlc1wiOiBcInBhZ2VzXzFTTmlzXCIsXG5cdFwicGFnZXMtLWZsdWlkXCI6IFwicGFnZXMtLWZsdWlkXzM5RlBlIHBhZ2VzXzFTTmlzXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS1saXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyDmmoLkuI3mlK/mjIHljIXlkKvlm77niYfnmoTorqHnrpdcbi8vIOiuoeeul+ayoeacieetieW+heWbvueJh+WKoOi9veWujOaIkO+8jOaJgOS7pee7k+aenOaYr+S4jeato+ehrueahFxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVIZWlnaHRzKG5vZGVzKSB7XG4gIGNvbnNvbGUubG9nKCdkb20gcmVhZHksIGdldE5vZGVIZWlnaHRzJylcbiAgbGV0IG5vZGVzSGVpZ2h0ID0gW11cblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAobm9kZS5jbGFzc05hbWUgIT09ICdnYi1saW5lJykge1xuICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCEnKVxuICAgIH1cbiAgICBub2Rlc0hlaWdodC5wdXNoKG5vZGUuY2xpZW50SGVpZ2h0KVxuICB9KVxuXG4gIHJldHVybiBub2Rlc0hlaWdodFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blRvTm9kZVN0cmluZ0xpc3QobWFya2Rvd246IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IG1kJylcbiAgbGV0IGh0bWwgPSBtYXJrZWQobWFya2Rvd24sIHtcbiAgICBnZm06IHRydWUsXG4gICAgYnJlYWtzOiB0cnVlXG4gIH0pXG4gIGNvbnNvbGUubG9nKCdkb25lIG1hcmtlZCcpXG4gIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlXG4gICAgLm1hcC5jYWxsKCQoaHRtbCksIChlbGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlLm5vZGVUeXBlID09PSAzICYmIGVsZS5ub2RlVmFsdWUgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIOenu+mZpCBodG1sIOmHjOeahOWbnui9plxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlLnRhZ05hbWUgPT09ICdQJykge1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLmlubmVySFRNTH08L3A+YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLm91dGVySFRNTH08L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZSlcbiAgLy8gY29uc29sZS5sb2cobm9kZXMpXG4gIGNvbnNvbGUubG9nKCdlbmQgbWQnKVxuICByZXR1cm4gbm9kZXNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnV0aWxzLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDQxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDQxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0ljb24nXG5pbXBvcnQgRmFkZSBmcm9tICcuLi8uLi9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlJ1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi9WaWV3ZXJQcmVmZXJlbmNlJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1wYW5lbC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGJvb2xlYW5cbiAgb25QcmVmVmlzaWJpbGl0eUNoYW5nZTogKG5ld1Zpc2liaWxpdHk6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlUHJlZkNsaWNrID0gdGhpcy5oYW5kbGVQcmVmQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlUHJlZkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25QcmVmVmlzaWJpbGl0eUNoYW5nZSghdGhpcy5wcm9wcy5zaG93Vmlld2VyUHJlZmVyZW5jZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHNob3dWaWV3ZXJQcmVmZXJlbmNlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ2aWV3ZXItcGFuZWxcIj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYmFja1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPui/lOWbnjwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZWZDbGlja30gc3R5bGVOYW1lPVwicHJlZmVyZW5jZVwiPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInByZWZlcmVuY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGYWRlPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZSA/IChcbiAgICAgICAgICAgICAgICA8Vmlld2VyUHJlZmVyZW5jZSAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFuZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUGFuZWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi8uLi9lbGVtZW50cy9Td2l0Y2hlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXByZWZlcmVuY2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLWZvbnQtc2l6ZVwiPlxuICAgICAgICAgICAgPHNwYW4+QS08L3NwYW4+PHNwYW4+QSs8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj7mu5rliqjmqKHlvI88L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoZXIgdmFsdWU9e3RydWV9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXRoZW1lXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJ319PnRoZW1lMTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNlZWUnfX0+dGhlbWUyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzIyMid9fT50aGVtZTM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuKShWaWV3ZXJQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgIG9uOiBib29sZWFuXG4vLyB9XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB0aXRsZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChuZXdWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZFxuICBvcHRpb25zPzoge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB9W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICBpc09uID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNPbiA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZidcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSBzdHlsZU5hbWU9XCJzd2l0Y2hlci13cmFwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeaVsOaNruacieivr++8jOWwhuS9v+eUqOm7mOiupOaVsOaNru+8gScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPXtgc3dpdGNoZXItLSR7c3RhdGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJ1xuLy8gICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wcmVmZXJlbmNlXzFGTkpaIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm9wdGlvbl8xOUZYVyB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbl8xOUZYVzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLm9wdGlvbi1mb250LXNpemVfMThPTkcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLm9wdGlvbi1zY3JvbGxfM2FndE8ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzNhZ3RPIC5sYWJlbF8zSExQcCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8zYWd0TyAuc3dpdGNoZXJfM1Q5S18ge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4ub3B0aW9uLXRoZW1lXzM4YlVnIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICAub3B0aW9uLXRoZW1lXzM4YlVnIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wcmVmZXJlbmNlXCI6IFwidmlld2VyLXByZWZlcmVuY2VfMUZOSlpcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tZm9udC1zaXplXCI6IFwib3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyBvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tc2Nyb2xsXCI6IFwib3B0aW9uLXNjcm9sbF8zYWd0TyBvcHRpb25fMTlGWFdcIixcblx0XCJsYWJlbFwiOiBcImxhYmVsXzNITFBwXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8zVDlLX1wiLFxuXHRcIm9wdGlvbi10aGVtZVwiOiBcIm9wdGlvbi10aGVtZV8zOGJVZyBvcHRpb25fMTlGWFdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXBhbmVsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXBhbmVsX2FvT3Y3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTkwO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gIGhlaWdodDogNjBweDsgfVxcblxcbi5jb250YWluZXJfMmNMTkkge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uYmFja19wcHhRXyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1cHg7XFxuICB0b3A6IDA7IH1cXG4gIC5iYWNrX3BweFFfIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5iYWNrX3BweFFfIGEgc3BhbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5iYWNrX3BweFFfIHNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLnRpdGxlXzNOaGxpIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXFxuLnByZWZlcmVuY2VfMXdQYTYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXBhbmVsXCI6IFwidmlld2VyLXBhbmVsX2FvT3Y3XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyXzJjTE5JXCIsXG5cdFwiYmFja1wiOiBcImJhY2tfcHB4UV9cIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlXzNOaGxpXCIsXG5cdFwicHJlZmVyZW5jZVwiOiBcInByZWZlcmVuY2VfMXdQYTZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rUGFnZUxpc3QgZnJvbSAnLi9Cb29rUGFnZUxpc3QnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgZmx1aWQ6IGJvb2xlYW5cbn1cblxuY2xhc3MgQm9va1BhZ2VXaXRoUmF3SHRtbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdDogYW55XG5cbiAgZ2V0Q29udGVudEh0bWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va1BhZ2VMaXN0LmJvb2tQYWdlLmJvb2tQYWdlRG9tXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmbHVpZCwgbm9kZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICBub2RlSGVpZ2h0cz17W119XG4gICAgICAgIHBhZ2VDb3VudD17MX1cbiAgICAgICAgcGFnZUhlaWdodD17MH1cbiAgICAgICAgaXNDYWxjTW9kZVxuICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VMaXN0ID0gcmVmIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZVdpdGhSYXdIdG1sXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJ3JlYWN0LXNpZGUtZWZmZWN0J1xuXG5pbnRlcmZhY2UgQm9keVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xuICBib2R5Q2xhc3M6IHN0cmluZ1xufVxuXG5jbGFzcyBCb2R5IGV4dGVuZHMgQ29tcG9uZW50PEJvZHlQcm9wcywge30+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgbGV0IGJvZHlDbGFzc1xuXG4gIHByb3BzTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGJvZHlDbGFzcyA9IHByb3BzLmJvZHlDbGFzc1xuICB9KVxuXG4gIHJldHVybiBib2R5Q2xhc3Ncbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChjbGFzc05hbWUpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTaWRlRWZmZWN0KFxuICByZWR1Y2VQcm9wc1RvU3RhdGUsXG4gIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnRcbikoQm9keSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQm9keS50c3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlLWVmZmVjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwicmVhY3Qtc2lkZS1lZmZlY3RcIlxuICoqIG1vZHVsZSBpZCA9IDQzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA3IDggMTJcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblxcbi5sb2FkaW5nX0RhNjRNIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzk5OTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxvYWRpbmdcIjogXCJsb2FkaW5nX0RhNjRNXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9