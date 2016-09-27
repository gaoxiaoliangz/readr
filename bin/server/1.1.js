exports.ids = [1];
exports.modules = {

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _BookPageList = __webpack_require__(423);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(433);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(251);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(436);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(446);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _apis = __webpack_require__(405);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _utils = __webpack_require__(257);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(240);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
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
	
	var styles = __webpack_require__(447);
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
	                return _react2.default.createElement("div", { className: "text-loading" }, "加载中 ...");
	            }
	            return this.state.isCalcMode ? _react2.default.createElement(_BookPageWithRawHtml2.default, { nodes: nodes, ref: function ref(_ref) {
	                    _this5.bookPageWithRawHtml = _ref;
	                }, fluid: fluid }) : _react2.default.createElement(_BookPageList2.default, { nodeHeights: nodeHeights, nodes: this.state.nodes, pageCount: 5, initialProgress: progress, pageHeight: 900, onProgressChange: this.handleProgressChange, fluid: fluid, showPageInfo: showPageInfo });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "viewer", title: this.props.book.title }, _react2.default.createElement("div", { onClick: this.handleViewerClick, onMouseMove: this.handelViewerMouseMove }, this.renderViewPanel(), this.renderBook()));
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
	}, { fetchBook: _actions.fetchBook, fetchProgress: _actions.fetchProgress, openConfirmModal: _actions.openConfirmModal })(Viewer);

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(424);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(427);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(286);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(288);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(428);
	
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
	
	var styles = __webpack_require__(431);
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

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(286);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(425);
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

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(426);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 427:
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

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(429);
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

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(430);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollbar_3vHlt {\n  width: 2px;\n  min-height: 400px;\n  position: fixed;\n  right: 40px;\n  top: 100px; }\n  .scrollbar_3vHlt:hover .button_1vdqU {\n    display: block; }\n\n.track_2FLTA {\n  width: 2px;\n  background: #c4c4c4;\n  border-radius: 3px;\n  position: absolute;\n  left: 8px;\n  top: 0;\n  z-index: 1; }\n\n.track--past_3YKd4 {\n  background: #5866db;\n  z-index: 2; }\n\n.button_1vdqU {\n  width: 20px;\n  height: 20px;\n  background: #1B267F;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  position: absolute;\n  left: 0;\n  top: 84px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 3;\n  display: none; }\n\n.loc-info_377Vu {\n  text-align: center;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  background: #222;\n  color: #ddd;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  padding: 7px 15px; }\n\n.sub-info_3qI5u {\n  font-size: 0.8rem;\n  color: #aaa; }\n", ""]);
	
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

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(432);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_1SNis {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_39FPe {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_1SNis",
		"pages--fluid": "pages--fluid_39FPe pages_1SNis"
	};

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(434);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(435);
	
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

/***/ 434:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 435:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(73);
	
	var _Icon = __webpack_require__(284);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(364);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(437);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(444);
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

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(243);
	
	var _Switcher = __webpack_require__(438);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(442);
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

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(439);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(288);
	
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
	
	var styles = __webpack_require__(440);
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

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(441);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(443);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(445);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
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

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(423);
	
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

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(448);
	    var insertCss = __webpack_require__(292);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzPzMwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzPzUwNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS1saXN0LnNjc3M/MzFmYiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzPzA4YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzcz8wZjU4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzPzc5OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUVJOzs7O0FBQ2xDOztLQUFzQzs7QUFDbUM7O0FBQzFEOzs7O0FBQ2lCOzs7O0FBQ2dCOzs7O0FBQ2I7Ozs7QUFDZDs7OztBQUNHOzs7O0FB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QVF4Qzs7Ozs7Ozs7Ozs7O0tBQTJDOzs7QUFFekMsa0NBQWlCLE9BQ2Y7Ozt1R0FLWTs7Ozs7O0FBQ04sb0JBQUssS0FBYSxhQUFTLFNBRzdCOzs7Ozs7OzBCQUN5QixLQUFNO2lCQUF0QjtpQkFBUzs7QUFFZixvQkFDTCxnQkFBYSx3Q0FDTixPQUFRLE9BQ1IsT0FBUSxPQUNGLGFBQUssSUFDUCxXQUFJLEdBQ0gsWUFBSSxHQUNKLGtCQUNQO0FBQWUsNEJBQWEsZUFNdkM7a0JBTmdCLElBVk47Ozs7Ozs7bUJBZ0J3QixvQjs7Ozs7Ozs7QUNwQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQXlDLDJCQUEyQjtBQUNwRSxvREFBbUQ7Ozs7Ozs7O0FDVm5EO0FBQ0E7OztBQUdBO0FBQ0Esb0NBQW1DLHFCQUFxQixFQUFFOztBQUUxRCIsImZpbGUiOiIxLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IEJvb2tQYWdlTGlzdCBmcm9tICcuL0Jvb2tQYWdlTGlzdCdcbmltcG9ydCAqIGFzIHZpZXdlclV0aWxzIGZyb20gJy4vVmlld2VyLnV0aWxzJ1xuaW1wb3J0IHsgZmV0Y2hCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuQ29uZmlybU1vZGFsIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBWaWV3ZXJQYW5lbCBmcm9tICcuL1ZpZXdlclBhbmVsJ1xuaW1wb3J0IEJvb2tQYWdlV2l0aFJhd0h0bWwgZnJvbSAnLi9Cb29rUGFnZVdpdGhSYXdIdG1sJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fdmlld2VyLnNjc3MnKVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hCb29rOiBhbnlcbiAgYm9vazogYW55XG4gIHJhd0Jvb2tDb250ZW50OiBzdHJpbmdcbiAgZmV0Y2hQcm9ncmVzczogKGJvb2tJZDogc3RyaW5nKSA9PiB2b2lkXG4gIHByb2dyZXNzOiBudW1iZXJcbiAgb3BlbkNvbmZpcm1Nb2RhbDogKGRhdGE6IG9wZW5Db25maXJtTW9kYWwpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dQYW5lbD86IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgbm9kZUhlaWdodHM/OiBudW1iZXJbXVxuICBub2Rlcz86IHN0cmluZ1tdXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlPzogYm9vbGVhblxuICBmbHVpZD86IGJvb2xlYW5cbiAgaXNUb3VjaE1vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICBpc0NhbGNNb2RlOiB0cnVlLFxuICAgICAgbm9kZUhlaWdodHM6IFtdLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlLFxuICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgaXNUb3VjaE1vZGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va0lkOiBzdHJpbmdcbiAgYm9va1BhZ2VXaXRoUmF3SHRtbDogYW55XG4gIGRlYm91bmRlZEhhbmRsZVJlc2l6ZTogYW55XG5cbiAgaXNWaWV3Rmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBpc1RvdWNoTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIHNldFByb2dyZXNzKHBlcmNlbnRhZ2UpIHtcbiAgICBhcGkuc2V0UHJvZ3Jlc3ModGhpcy5ib29rSWQsIHsgcGVyY2VudGFnZSB9KVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ2FsY01vZGUgJiYgIXRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgbGV0IGRUb1NjcmVlblJpZ2h0ID0gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggLSBldmVudC5wYWdlWFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiB5IDwgOTAsXG4gICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UobmV3UHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKVxuICB9XG5cbiAgaGFuZGxlVmlld2VyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjRG9tKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDYWxjTW9kZTogdHJ1ZVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sLmdldENvbnRlbnRIdG1sKClcbiAgICAgIGNvbnN0IG5vZGVIZWlnaHRzID0gdmlld2VyVXRpbHMuZ2V0Tm9kZUhlaWdodHMoY29udGVudEh0bWwuY2hpbGROb2RlcylcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxjIGRvbmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVIZWlnaHRzLFxuICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgbG9hZFJhd0Jvb2tDb250ZW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rKHRoaXMuYm9va0lkKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHZpZXdlclV0aWxzLm1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdCh0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZXMsXG4gICAgICAgIGZsdWlkOiB0aGlzLmlzVmlld0ZsdWlkKCksXG4gICAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhXy5pc0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IGhhc0Jvb2tOb2Rlc0xvYWRlZCA9IHRoaXMuc3RhdGUubm9kZXMubGVuZ3RoICE9PSAwICYmIHByZXZTdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDBcbiAgICBjb25zdCB2aWV3Q2hhbmdlZCA9IHRoaXMuc3RhdGUuZmx1aWQgIT09IHByZXZTdGF0ZS5mbHVpZFxuXG4gICAgaWYgKGhhc0Jvb2tOb2Rlc0xvYWRlZCB8fCB2aWV3Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjRG9tKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRSYXdCb29rQ29udGVudCgpXG4gICAgdGhpcy5wcm9wcy5mZXRjaFByb2dyZXNzKHRoaXMuYm9va0lkKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXJWaWV3UGFuZWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnNob3dQYW5lbCB8fCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlKSAmJiAoXG4gICAgICA8Vmlld2VyUGFuZWxcbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX1cbiAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U9e3RoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2V9XG4gICAgICAgIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U9e25ld1Zpc2liaWxpdHkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IG5ld1Zpc2liaWxpdHlcbiAgICAgICAgICB9KVxuICAgICAgICB9IH1cbiAgICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJCb29rKCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG5vZGVIZWlnaHRzLCBmbHVpZCwgc2hvd1BhZ2VJbmZvIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sb2FkaW5nXCI+5Yqg6L295LitIC4uLjwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzQ2FsY01vZGVcbiAgICAgID8gKFxuICAgICAgICA8Qm9va1BhZ2VXaXRoUmF3SHRtbFxuICAgICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VXaXRoUmF3SHRtbCA9IHJlZiB9IH1cbiAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgLz5cbiAgICAgIClcbiAgICAgIDogKFxuICAgICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgICAgbm9kZUhlaWdodHM9e25vZGVIZWlnaHRzfVxuICAgICAgICAgIG5vZGVzPXt0aGlzLnN0YXRlLm5vZGVzfVxuICAgICAgICAgIHBhZ2VDb3VudD17NX1cbiAgICAgICAgICBpbml0aWFsUHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgIHBhZ2VIZWlnaHQ9ezkwMH1cbiAgICAgICAgICBvblByb2dyZXNzQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICBzaG93UGFnZUluZm89e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICAvPlxuICAgICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIGJvZHlDbGFzcz1cInZpZXdlclwiIHRpdGxlPXt0aGlzLnByb3BzLmJvb2sudGl0bGV9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld2VyQ2xpY2t9IG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSB9ID5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVmlld1BhbmVsKCkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJCb29rKCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBib29rID0gc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvb2ssXG4gICAgICByYXdCb29rQ29udGVudDogXy5nZXQoYm9vaywgJ2NvbnRlbnQucmF3JywgJycpLFxuICAgICAgcHJvZ3Jlc3M6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZ3Jlc3MucGVyY2VudGFnZScsIDApLFxuICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH1cbiAgfSxcbiAgeyBmZXRjaEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5Db25maXJtTW9kYWwgfVxuKShWaWV3ZXIgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vQm9va1BhZ2UnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi9WaWV3ZXJTY3JvbGxiYXInXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2Jvb2stcGFnZS1saXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxuICBwYWdlQ291bnQ6IG51bWJlclxuICBpc1Njcm9sbE1vZGU/OiBib29sZWFuXG4gIGluaXRpYWxQYWdlPzogbnVtYmVyXG4gIGluaXRpYWxQcm9ncmVzcz86IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgb25Qcm9ncmVzc0NoYW5nZT86IChuZXdQcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkXG4gIGZsdWlkOiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNjcm9sbFRvcD86IG51bWJlclxuICBjdXJyZW50UGFnZT86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rUGFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICBjdXJyZW50UGFnZTogMVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbCA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwsIDIwMCwge1xuICAgICAgbWF4V2FpdDogMTAwMFxuICAgIH0pXG4gIH1cblxuICBib29rUGFnZUxpc3REb206IEhUTUxVTGlzdEVsZW1lbnRcbiAgYm9va1BhZ2U6IGFueVxuICBkZWJvdW5kZWRIYW5kbGVTY3JvbGw6IGFueVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNDYWxjTW9kZSkge1xuICAgICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICAgIGNvbnN0IHsgb25Qcm9ncmVzc0NoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSB1dGlscy5wZXJjZW50YWdlVG9QYWdlKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0LCBwYWdlcy5sZW5ndGgpXG5cbiAgICAgIGlmIChvblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gIH1cblxuICBjYWxjUGFnZXMoKSB7XG4gICAgLy8gdG9kbzog5re75Yqg57yT5a2YXG4gICAgY29uc3QgeyBub2RlSGVpZ2h0cywgbm9kZXMsIHBhZ2VIZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYWdlcyA9IHV0aWxzLmdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KVxuXG4gICAgcmV0dXJuIHsgcGFnZXMsIHRvdGFsSGVpZ2h0OiBwYWdlcy5sZW5ndGggKiBwYWdlSGVpZ2h0IH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFnZUhlaWdodCwgaW5pdGlhbFBhZ2UsIGluaXRpYWxQcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBsZXQgc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKGluaXRpYWxQcm9ncmVzcykge1xuICAgICAgc2Nyb2xsVG9wID0gdG90YWxIZWlnaHQgKiBpbml0aWFsUHJvZ3Jlc3NcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxQYWdlKSB7XG4gICAgICBzY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogKGluaXRpYWxQYWdlIC0gMSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwYWdlQ291bnQsIHBhZ2VIZWlnaHQsIGZsdWlkLCBzaG93UGFnZUluZm8gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdGFydFBhZ2VJbmRleCA9IGN1cnJlbnRQYWdlIC0gMVxuICAgIGNvbnN0IGVuZFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4ICsgcGFnZUNvdW50XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZXMnOiAhZmx1aWQsXG4gICAgICAncGFnZXMtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VMaXN0RG9tID0gcmVmIH0gfSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiB0b3RhbEhlaWdodCB9fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBfLnNsaWNlKHBhZ2VzLCBzdGFydFBhZ2VJbmRleCwgZW5kUGFnZUluZGV4KS5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJvb2tQYWdlXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XG4gICAgICAgICAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2UgPSByZWYgfSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFZpZXdlclNjcm9sbGJhclxuICAgICAgICAgIHZpc2libGU9e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbD17cGFnZXMubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2Jvb2stcGFnZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBhZ2U6IHV0aWxzLlRQYWdlXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBmbHVpZDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBib29rUGFnZURvbTogSFRNTERpdkVsZW1lbnRcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlOiB7IG5vZGVzLCBtZXRhIH0sIHBhZ2VIZWlnaHQsIGZsdWlkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogcGFnZUhlaWdodCAqIChtZXRhLnBhZ2VObyAtIDEpLFxuICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlJzogIWZsdWlkLFxuICAgICAgJ3BhZ2UtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogbWV0YS5vZmZzZXQgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5vZGVzLmpvaW4oJycpIH19XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlRG9tID0gcmVmIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdlLW5vXCI+e21ldGEucGFnZU5vfTwvZGl2PlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay1wYWdlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudF8xbXlkSSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA1NTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzY2NjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7IH1cXG4gIC5jb250ZW50XzFteWRJIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7IH1cXG5cXG4ucGFnZV8xU1U0aCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5wYWdlLS1mbHVpZF92WDhyUSB7IH1cXG4gIC5wYWdlLS1mbHVpZF92WDhyUSAuY29udGVudF8xbXlkSSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cXG5cXG4ucGFnZS0taW5pdF84RFpGQiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5wYWdlLS1pbml0XzhEWkZCIC5jb250ZW50XzFteWRJIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLnBhZ2Utbm9fMWpiVi0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxuICBmb250LXNpemU6IDAuOHJlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJjb250ZW50XzFteWRJXCIsXG5cdFwicGFnZVwiOiBcInBhZ2VfMVNVNGhcIixcblx0XCJwYWdlLS1mbHVpZFwiOiBcInBhZ2UtLWZsdWlkX3ZYOHJRIHBhZ2VfMVNVNGhcIixcblx0XCJwYWdlLS1pbml0XCI6IFwicGFnZS0taW5pdF84RFpGQlwiLFxuXHRcInBhZ2Utbm9cIjogXCJwYWdlLW5vXzFqYlYtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIGxvbmcgcGFyYWdyYXBoIHNpdHVhdGlvbiBkb2Vzbid0IHNlZW0gdG8gYWZmZWN0IHRoaXMgZnVuY3Rpb25cbi8vIG9mZnNldCBkaXN0YW5jZSBpcyBhbHdheXMgbmVndGl2ZSBvciB6ZXJvXG4vLyB0aGUgaW5kZXggd2lsbCBiZSBvZiB0aGUgcGFyYWdyYXBoIHdpdGggdGhpcyBvZmZzZXQgYXQgdGhlIGVuZFxuZnVuY3Rpb24gZ2V0UGFnZU9mZnNldCh7cGFnZUluZGV4LCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0c306IHtcbiAgcGFnZUluZGV4OiBudW1iZXJcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxufSkge1xuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgbm9kZUluZGV4ID0gMFxuICBsZXQgbm9kZVN0YXJ0SW5kZXhcblxuICBpZiAocGFnZUluZGV4ICE9PSAwKSB7XG4gICAgbGV0IG5vZGVIZWlnaHRTdW0gPSAwXG4gICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAqIHBhZ2VJbmRleCkge1xuICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tub2RlSW5kZXhdXG4gICAgICBub2RlSW5kZXgrK1xuICAgIH1cbiAgICBvZmZzZXQgPSBub2RlSGVpZ2h0U3VtIC0gbm9kZUhlaWdodHNbbm9kZUluZGV4IC0gMV0gLSBwYWdlSW5kZXggKiBwYWdlSGVpZ2h0XG4gICAgbm9kZVN0YXJ0SW5kZXggPSBub2RlSW5kZXggLSAxXG4gIH0gZWxzZSB7XG4gICAgbm9kZVN0YXJ0SW5kZXggPSAwXG4gIH1cblxuICByZXR1cm4geyBvZmZzZXQsIG5vZGVTdGFydEluZGV4IH1cbn1cblxuXG5mdW5jdGlvbiBnZXROb2Rlc09mUGFnZSh7cGFnZUluZGV4LCBub2RlcywgcGFnZUhlaWdodCwgbm9kZUhlaWdodHN9OiB7XG4gIHBhZ2VJbmRleDogbnVtYmVyXG4gIG5vZGVzOiBhbnlcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxufSkge1xuICBsZXQgeyBvZmZzZXQsIG5vZGVTdGFydEluZGV4IH0gPSBnZXRQYWdlT2Zmc2V0KHsgcGFnZUluZGV4LCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0cyB9KVxuICBsZXQgbm9kZUluZGV4ID0gbm9kZVN0YXJ0SW5kZXhcbiAgbGV0IG5vZGVFbmRJbmRleFxuICBsZXQgcGFnZU5vZGVzID0gW11cblxuICBsZXQgbm9kZUhlaWdodFN1bSA9IG9mZnNldCArIG5vZGVIZWlnaHRzW25vZGVTdGFydEluZGV4XVxuXG4gIG5vZGVJbmRleCsrXG4gIGlmIChub2RlSGVpZ2h0U3VtIDwgcGFnZUhlaWdodCkge1xuICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgJiYgbm9kZUluZGV4ICE9PSBub2Rlcy5sZW5ndGgpIHtcbiAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbbm9kZUluZGV4XVxuICAgICAgbm9kZUluZGV4KytcbiAgICB9XG4gICAgbm9kZUVuZEluZGV4ID0gbm9kZUluZGV4IC0gMVxuICB9IGVsc2Uge1xuICAgIG5vZGVFbmRJbmRleCA9IG5vZGVTdGFydEluZGV4XG4gIH1cblxuICBmb3IgKGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7IGkgPD0gbm9kZUVuZEluZGV4ICYmIGkgPD0gbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgcGFnZU5vZGVzLnB1c2gobm9kZXNbaV0pXG4gIH1cblxuICByZXR1cm4geyBwYWdlTm9kZXMsIG9mZnNldCB9XG59XG5cblxuZXhwb3J0IHR5cGUgVFBhZ2UgPSB7XG4gIG5vZGVzOiBzdHJpbmdbXVxuICBtZXRhOiBhbnlcbn1cbmV4cG9ydCB0eXBlIFRQYWdlTGlzdCA9IFRQYWdlW11cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzQnlQYWdlKG5vZGVzOiBhbnksIG5vZGVIZWlnaHRzOiBudW1iZXJbXSwgcGFnZUhlaWdodDogbnVtYmVyKTogVFBhZ2VMaXN0IHtcbiAgbGV0IHBhZ2VzID0gW11cbiAgbGV0IHBhZ2VIZWlnaHRTdW0gPSBub2RlSGVpZ2h0cy5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApXG4gIGxldCBwYWdlU3VtID0gTWF0aC5jZWlsKHBhZ2VIZWlnaHRTdW0gLyBwYWdlSGVpZ2h0KVxuXG4gIGNvbnNvbGUubG9nKCd0b2RvOiBncm91cCBub2RlcycpXG4gIC8vIG5vZGVzID0gbm9kZXMubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAvLyAgIG5vZGUucHJvcHMuaW5kZXggPSBpbmRleFxuICAvLyAgIHJldHVybiBub2RlXG4gIC8vIH0pXG5cbiAgaWYgKG5vZGVIZWlnaHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbe1xuICAgICAgbm9kZXMsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHBhZ2VObzogMSxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9XG4gICAgfV1cbiAgfVxuXG4gIC8vIGZpbmFsbHlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlU3VtOyBpKyspIHtcbiAgICBjb25zdCB7IHBhZ2VOb2Rlcywgb2Zmc2V0IH0gPSBnZXROb2Rlc09mUGFnZSh7IHBhZ2VJbmRleDogaSwgbm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0IH0pXG5cbiAgICBwYWdlcy5wdXNoKHtcbiAgICAgIG5vZGVzOiBwYWdlTm9kZXMsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHBhZ2VObzogaSArIDEsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlVG9QYWdlKHA6IG51bWJlciwgcGFnZVN1bTogbnVtYmVyKSB7XG4gIGlmIChwID4gMSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dyb25nIHBhcmFtZXRlciEnKVxuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KChwICogcGFnZVN1bSkgYXMgYW55KSArIDFcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3QudXRpbHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXNjcm9sbGJhci5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY3VycmVudDogbnVtYmVyXG4gIHRvdGFsOiBudW1iZXJcbiAgdmlzaWJsZTogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQsIHRvdGFsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGVyY2VudGFnZSA9ICgoY3VycmVudCAvIHRvdGFsKSAqIDEwMCkudG9GaXhlZCgyKSArICclJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibG9jLWluZm9cIj5cbiAgICAgICAgICA8ZGl2PjxzdHJvbmc+e2N1cnJlbnR9PC9zdHJvbmc+L3t0b3RhbH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN1Yi1pbmZvXCI+e3BlcmNlbnRhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJTY3JvbGxiYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyU2Nyb2xsYmFyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2Nyb2xsYmFyXzN2SGx0IHtcXG4gIHdpZHRoOiAycHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAxMDBweDsgfVxcbiAgLnNjcm9sbGJhcl8zdkhsdDpob3ZlciAuYnV0dG9uXzF2ZHFVIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4udHJhY2tfMkZMVEEge1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA4cHg7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLnRyYWNrLS1wYXN0XzNZS2Q0IHtcXG4gIGJhY2tncm91bmQ6ICM1ODY2ZGI7XFxuICB6LWluZGV4OiAyOyB9XFxuXFxuLmJ1dHRvbl8xdmRxVSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA4NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMztcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubG9jLWluZm9fMzc3VnUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBwYWRkaW5nOiA3cHggMTVweDsgfVxcblxcbi5zdWItaW5mb18zcUk1dSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2Nyb2xsYmFyXCI6IFwic2Nyb2xsYmFyXzN2SGx0XCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzF2ZHFVXCIsXG5cdFwidHJhY2tcIjogXCJ0cmFja18yRkxUQVwiLFxuXHRcInRyYWNrLS1wYXN0XCI6IFwidHJhY2stLXBhc3RfM1lLZDQgdHJhY2tfMkZMVEFcIixcblx0XCJsb2MtaW5mb1wiOiBcImxvYy1pbmZvXzM3N1Z1XCIsXG5cdFwic3ViLWluZm9cIjogXCJzdWItaW5mb18zcUk1dVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX2Jvb2stcGFnZS1saXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlc18xU05pcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuXFxuLnBhZ2VzLS1mbHVpZF8zOUZQZSB7XFxuICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2VzXCI6IFwicGFnZXNfMVNOaXNcIixcblx0XCJwYWdlcy0tZmx1aWRcIjogXCJwYWdlcy0tZmx1aWRfMzlGUGUgcGFnZXNfMVNOaXNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLWxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8vIOaaguS4jeaUr+aMgeWMheWQq+WbvueJh+eahOiuoeeul1xuLy8g6K6h566X5rKh5pyJ562J5b6F5Zu+54mH5Yqg6L295a6M5oiQ77yM5omA5Lul57uT5p6c5piv5LiN5q2j56Gu55qEXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgY29uc29sZS5sb2coJ2RvbSByZWFkeSwgZ2V0Tm9kZUhlaWdodHMnKVxuICBsZXQgbm9kZXNIZWlnaHQgPSBbXVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChub2RlLmNsYXNzTmFtZSAhPT0gJ2diLWxpbmUnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIScpXG4gICAgfVxuICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpXG4gIH0pXG5cbiAgcmV0dXJuIG5vZGVzSGVpZ2h0XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdChtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zb2xlLmxvZygnc3RhcnQgbWQnKVxuICBsZXQgaHRtbCA9IG1hcmtlZChtYXJrZG93biwge1xuICAgIGdmbTogdHJ1ZSxcbiAgICBicmVha3M6IHRydWVcbiAgfSlcbiAgY29uc29sZS5sb2coJ2RvbmUgbWFya2VkJylcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGVcbiAgICAubWFwLmNhbGwoJChodG1sKSwgKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IDMgJiYgZWxlLm5vZGVWYWx1ZSA9PT0gJ1xcbicpIHtcbiAgICAgICAgLy8g56e76ZmkIGh0bWwg6YeM55qE5Zue6L2mXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ1AnKSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUuaW5uZXJIVE1MfTwvcD5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUub3V0ZXJIVE1MfTwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIobm9kZSA9PiBub2RlKVxuICAvLyBjb25zb2xlLmxvZyhub2RlcylcbiAgY29uc29sZS5sb2coJ2VuZCBtZCcpXG4gIHJldHVybiBub2Rlc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudXRpbHMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1hcmtlZFwiXG4gKiogbW9kdWxlIGlkID0gNDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gNDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbidcbmltcG9ydCBGYWRlIGZyb20gJy4uLy4uL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUnXG5pbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuL1ZpZXdlclByZWZlcmVuY2UnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXBhbmVsLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBzaG93Vmlld2VyUHJlZmVyZW5jZTogYm9vbGVhblxuICBvblByZWZWaXNpYmlsaXR5Q2hhbmdlOiAobmV3VmlzaWJpbGl0eTogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVQcmVmQ2xpY2sgPSB0aGlzLmhhbmRsZVByZWZDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVQcmVmQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vblByZWZWaXNpYmlsaXR5Q2hhbmdlKCF0aGlzLnByb3BzLnNob3dWaWV3ZXJQcmVmZXJlbmNlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc2hvd1ZpZXdlclByZWZlcmVuY2UgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInZpZXdlci1wYW5lbFwiPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYmFja1wiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJiYWNrXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+6L+U5ZuePC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJlZkNsaWNrfSBzdHlsZU5hbWU9XCJwcmVmZXJlbmNlXCI+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicHJlZmVyZW5jZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZhZGU+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFxuICAgICAgICAgICAgICAgIDxWaWV3ZXJQcmVmZXJlbmNlIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJQYW5lbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL1N3aXRjaGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyUHJlZmVyZW5jZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ2aWV3ZXItcHJlZmVyZW5jZVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tZm9udC1zaXplXCI+XG4gICAgICAgICAgICA8c3Bhbj5BLTwvc3Bhbj48c3Bhbj5BKzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPua7muWKqOaooeW8jzwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hlciB2YWx1ZT17dHJ1ZX0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tdGhlbWVcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNmZmYnfX0+dGhlbWUxPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI2VlZSd9fT50aGVtZTI8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjMjIyJ319PnRoZW1lMzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4pKFZpZXdlclByZWZlcmVuY2UgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQcmVmZXJlbmNlLnRzeFxuICoqLyIsImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJ1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJylcblxuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgb246IGJvb2xlYW5cbi8vIH1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKG5ld1ZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIH1bXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHZhbHVlOiBpc09uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc09uID09PSAnMScgfHwgaXNPbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzT24gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09uID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YXRlID0gQm9vbGVhbihpc09uKSA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHN0eWxlTmFtZT1cInN3aXRjaGVyLXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSlcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5rKh5pyJ57uZIG9wdGlvbnMg5pe25b+F6aG75L2/55So5biD5bCU5Z6L55qEIHZhbHVl77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9e2Bzd2l0Y2hlci0tJHtzdGF0ZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fc3dpdGNoZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zd2l0Y2hlci13cmFwXzNVTUFVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zd2l0Y2hlcl9HM240XywgLnN3aXRjaGVyLS1vZmZfMUVvT1UsIC5zd2l0Y2hlci0tb25fMnhpd08ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cXG5cXG4uc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDIwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjMmU0MGQyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3dpdGNoZXItd3JhcFwiOiBcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyX0czbjRfXCIsXG5cdFwic3dpdGNoZXItLW9mZlwiOiBcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcblx0XCJzd2l0Y2hlci0tb25cIjogXCJzd2l0Y2hlci0tb25fMnhpd09cIixcblx0XCJzd2l0Y2hlci1idXR0b25cIjogXCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcblx0XCJzd2l0Y2hlci10cmFja1wiOiBcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXByZWZlcmVuY2VfMUZOSloge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDYwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDYzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ub3B0aW9uXzE5RlhXIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAub3B0aW9uXzE5RlhXOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG5cXG4ub3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLm9wdGlvbi1mb250LXNpemVfMThPTkcgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm9wdGlvbi1mb250LXNpemVfMThPTkcgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7IH1cXG5cXG4ub3B0aW9uLXNjcm9sbF8zYWd0TyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLm9wdGlvbi1zY3JvbGxfM2FndE8gLmxhYmVsXzNITFBwIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzNhZ3RPIC5zd2l0Y2hlcl8zVDlLXyB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcblxcbi5vcHRpb24tdGhlbWVfMzhiVWcge1xcbiAgcGFkZGluZzogNXB4IDA7IH1cXG4gIC5vcHRpb24tdGhlbWVfMzhiVWcgc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTllbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXByZWZlcmVuY2VcIjogXCJ2aWV3ZXItcHJlZmVyZW5jZV8xRk5KWlwiLFxuXHRcIm9wdGlvblwiOiBcIm9wdGlvbl8xOUZYV1wiLFxuXHRcIm9wdGlvbi1mb250LXNpemVcIjogXCJvcHRpb24tZm9udC1zaXplXzE4T05HIG9wdGlvbl8xOUZYV1wiLFxuXHRcIm9wdGlvbi1zY3JvbGxcIjogXCJvcHRpb24tc2Nyb2xsXzNhZ3RPIG9wdGlvbl8xOUZYV1wiLFxuXHRcImxhYmVsXCI6IFwibGFiZWxfM0hMUHBcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyXzNUOUtfXCIsXG5cdFwib3B0aW9uLXRoZW1lXCI6IFwib3B0aW9uLXRoZW1lXzM4YlVnIG9wdGlvbl8xOUZYV1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXItcGFuZWwuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXItcGFuZWxfYW9Pdjcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTA7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRhaW5lcl8yY0xOSSB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5iYWNrX3BweFFfIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDVweDtcXG4gIHRvcDogMDsgfVxcbiAgLmJhY2tfcHB4UV8gYSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmJhY2tfcHB4UV8gYSBzcGFuIHtcXG4gICAgICBmbG9hdDogbGVmdDsgfVxcbiAgLmJhY2tfcHB4UV8gc3BhbiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4udGl0bGVfM05obGkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cXG5cXG4ucHJlZmVyZW5jZV8xd1BhNiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTVweDtcXG4gIHRvcDogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWV3ZXItcGFuZWxcIjogXCJ2aWV3ZXItcGFuZWxfYW9PdjdcIixcblx0XCJjb250YWluZXJcIjogXCJjb250YWluZXJfMmNMTklcIixcblx0XCJiYWNrXCI6IFwiYmFja19wcHhRX1wiLFxuXHRcInRpdGxlXCI6IFwidGl0bGVfM05obGlcIixcblx0XCJwcmVmZXJlbmNlXCI6IFwicHJlZmVyZW5jZV8xd1BhNlwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2tQYWdlTGlzdCBmcm9tICcuL0Jvb2tQYWdlTGlzdCdcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIG5vZGVzOiBzdHJpbmdbXVxuICBmbHVpZDogYm9vbGVhblxufVxuXG5jbGFzcyBCb29rUGFnZVdpdGhSYXdIdG1sIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgYm9va1BhZ2VMaXN0OiBhbnlcblxuICBnZXRDb250ZW50SHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib29rUGFnZUxpc3QuYm9va1BhZ2UuYm9va1BhZ2VEb21cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZsdWlkLCBub2RlcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb29rUGFnZUxpc3RcbiAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgIG5vZGVIZWlnaHRzPXtbXX1cbiAgICAgICAgcGFnZUNvdW50PXsxfVxuICAgICAgICBwYWdlSGVpZ2h0PXswfVxuICAgICAgICBpc0NhbGNNb2RlXG4gICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZUxpc3QgPSByZWYgfX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlV2l0aFJhd0h0bWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VXaXRoUmF3SHRtbC50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==