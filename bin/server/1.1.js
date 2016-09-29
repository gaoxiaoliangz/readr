exports.ids = [1];
exports.modules = {

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(244);
	
	var _BookPageList = __webpack_require__(428);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(438);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(252);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(441);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(451);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(293);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _apis = __webpack_require__(410);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _utils = __webpack_require__(258);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(241);
	
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
	
	var styles = __webpack_require__(452);
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

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(429);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(432);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(291);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(293);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(433);
	
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
	
	var styles = __webpack_require__(436);
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

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(291);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(293);
	
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
	
	var styles = __webpack_require__(430);
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

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(431);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
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

/***/ 432:
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

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(293);
	
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
	
	var styles = __webpack_require__(434);
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

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(435);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
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

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(437);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_1SNis {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_39FPe {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_1SNis",
		"pages--fluid": "pages--fluid_39FPe pages_1SNis"
	};

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(439);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(440);
	
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

/***/ 439:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 440:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(74);
	
	var _Icon = __webpack_require__(289);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(369);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(442);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(293);
	
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
	
	var styles = __webpack_require__(449);
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

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(244);
	
	var _Switcher = __webpack_require__(443);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(293);
	
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
	
	var styles = __webpack_require__(447);
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

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(444);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(293);
	
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
	
	var styles = __webpack_require__(445);
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

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(446);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
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

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(448);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
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

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(450);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
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

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(76);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(428);
	
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

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(453);
	    var insertCss = __webpack_require__(297);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(296)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzPzMwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzPzUwNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS1saXN0LnNjc3M/MzFmYiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzPzA4YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzcz8wZjU4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzPzc5OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUVJOzs7O0FBQ2xDOztLQUFzQzs7QUFDbUM7O0FBQzFEOzs7O0FBQ2lCOzs7O0FBQ2dCOzs7O0FBQ2I7Ozs7QUFDZDs7OztBQUNHOzs7O0FB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Ozs7O0FBUXhDOzs7Ozs7Ozs7Ozs7S0FBMkM7OztBQUV6QyxrQ0FBaUIsT0FDZjs7O3VHQUtZOzs7Ozs7QUFDTixvQkFBSyxLQUFhLGFBQVMsU0FHN0I7Ozs7Ozs7MEJBQ3lCLEtBQU07aUJBQXRCO2lCQUFTOztBQUVmLG9CQUNMLGdCQUFhLHdDQUNOLE9BQVEsT0FDUixPQUFRLE9BQ0YsYUFBSyxJQUNQLFdBQUksR0FDSCxZQUFJLEdBQ0osa0JBQ1A7QUFBZSw0QkFBYSxlQU12QztrQkFOZ0IsSUFWTjs7Ozs7OzttQkFnQndCLG9COzs7Ozs7OztBQ3BDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMscUJBQXFCLEVBQUU7O0FBRTFEIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuaW1wb3J0ICogYXMgdmlld2VyVXRpbHMgZnJvbSAnLi9WaWV3ZXIudXRpbHMnXG5pbXBvcnQgeyBmZXRjaEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5Db25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFZpZXdlclBhbmVsIGZyb20gJy4vVmlld2VyUGFuZWwnXG5pbXBvcnQgQm9va1BhZ2VXaXRoUmF3SHRtbCBmcm9tICcuL0Jvb2tQYWdlV2l0aFJhd0h0bWwnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL192aWV3ZXIuc2NzcycpXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBmZXRjaEJvb2s6IGFueVxuICBib29rOiBhbnlcbiAgcmF3Qm9va0NvbnRlbnQ6IHN0cmluZ1xuICBmZXRjaFByb2dyZXNzOiAoYm9va0lkOiBzdHJpbmcpID0+IHZvaWRcbiAgcHJvZ3Jlc3M6IG51bWJlclxuICBvcGVuQ29uZmlybU1vZGFsOiAoZGF0YTogb3BlbkNvbmZpcm1Nb2RhbCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd1BhbmVsPzogYm9vbGVhblxuICBpc0NhbGNNb2RlPzogYm9vbGVhblxuICBub2RlSGVpZ2h0cz86IG51bWJlcltdXG4gIG5vZGVzPzogc3RyaW5nW11cbiAgc2hvd1ZpZXdlclByZWZlcmVuY2U/OiBib29sZWFuXG4gIGZsdWlkPzogYm9vbGVhblxuICBpc1RvdWNoTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5ib29rSWQgPSBwcm9wcy5wYXJhbXMuaWRcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgIGlzQ2FsY01vZGU6IHRydWUsXG4gICAgICBub2RlSGVpZ2h0czogW10sXG4gICAgICBub2RlczogW10sXG4gICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2UsXG4gICAgICBmbHVpZDogZmFsc2UsXG4gICAgICBpc1RvdWNoTW9kZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWaWV3ZXJDbGljayA9IHRoaXMuaGFuZGxlVmlld2VyQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlID0gdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVSZXNpemUsIDUwMCwge1xuICAgICAgbWF4V2FpdDogMTAwMFxuICAgIH0pXG4gIH1cblxuICBib29rSWQ6IHN0cmluZ1xuICBib29rUGFnZVdpdGhSYXdIdG1sOiBhbnlcbiAgZGVib3VuZGVkSGFuZGxlUmVzaXplOiBhbnlcblxuICBpc1ZpZXdGbHVpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIGlzVG91Y2hNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCA8IDcwMFxuICB9XG5cbiAgc2V0UHJvZ3Jlc3MocGVyY2VudGFnZSkge1xuICAgIGFwaS5zZXRQcm9ncmVzcyh0aGlzLmJvb2tJZCwgeyBwZXJjZW50YWdlIH0pXG4gIH1cblxuICBoYW5kZWxWaWV3ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNDYWxjTW9kZSAmJiAhdGhpcy5zdGF0ZS5pc1RvdWNoTW9kZSkge1xuICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBsZXQgZFRvU2NyZWVuUmlnaHQgPSB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCAtIGV2ZW50LnBhZ2VYXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6IHkgPCA5MCxcbiAgICAgICAgc2hvd1BhZ2VJbmZvOiBkVG9TY3JlZW5SaWdodCA8IDEwMFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmbHVpZDogdGhpcy5pc1ZpZXdGbHVpZCgpLFxuICAgICAgaXNUb3VjaE1vZGU6IHRoaXMuaXNUb3VjaE1vZGUoKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQcm9ncmVzc0NoYW5nZShuZXdQcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpXG4gIH1cblxuICBoYW5kbGVWaWV3ZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1RvdWNoTW9kZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dQYW5lbDogIXRoaXMuc3RhdGUuc2hvd1BhbmVsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGNEb20oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NhbGNNb2RlOiB0cnVlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEh0bWwgPSB0aGlzLmJvb2tQYWdlV2l0aFJhd0h0bWwuZ2V0Q29udGVudEh0bWwoKVxuICAgICAgY29uc3Qgbm9kZUhlaWdodHMgPSB2aWV3ZXJVdGlscy5nZXROb2RlSGVpZ2h0cyhjb250ZW50SHRtbC5jaGlsZE5vZGVzKVxuICAgICAgY29uc29sZS5sb2coJ2NhbGMgZG9uZScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZUhlaWdodHMsXG4gICAgICAgIGlzQ2FsY01vZGU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBsb2FkUmF3Qm9va0NvbnRlbnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2sodGhpcy5ib29rSWQpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdmlld2VyVXRpbHMubWFya2Rvd25Ub05vZGVTdHJpbmdMaXN0KHRoaXMucHJvcHMucmF3Qm9va0NvbnRlbnQpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub2RlcyxcbiAgICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgICAgaXNUb3VjaE1vZGU6IHRoaXMuaXNUb3VjaE1vZGUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgaGFzQm9va05vZGVzTG9hZGVkID0gdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGggIT09IDAgJiYgcHJldlN0YXRlLm5vZGVzLmxlbmd0aCA9PT0gMFxuICAgIGNvbnN0IHZpZXdDaGFuZ2VkID0gdGhpcy5zdGF0ZS5mbHVpZCAhPT0gcHJldlN0YXRlLmZsdWlkXG5cbiAgICBpZiAoaGFzQm9va05vZGVzTG9hZGVkIHx8IHZpZXdDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbGNEb20oKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZFJhd0Jvb2tDb250ZW50KClcbiAgICB0aGlzLnByb3BzLmZldGNoUHJvZ3Jlc3ModGhpcy5ib29rSWQpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIHJlbmRlclZpZXdQYW5lbCgpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuc2hvd1BhbmVsIHx8IHRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2UpICYmIChcbiAgICAgIDxWaWV3ZXJQYW5lbFxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5ib29rLnRpdGxlfVxuICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZT17dGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZX1cbiAgICAgICAgb25QcmVmVmlzaWJpbGl0eUNoYW5nZT17bmV3VmlzaWJpbGl0eSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogbmV3VmlzaWJpbGl0eVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gfVxuICAgICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckJvb2soKSB7XG4gICAgY29uc3QgeyBub2Rlcywgbm9kZUhlaWdodHMsIGZsdWlkLCBzaG93UGFnZUluZm8gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxvYWRpbmdcIj7liqDovb3kuK0gLi4uPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNDYWxjTW9kZVxuICAgICAgPyAoXG4gICAgICAgIDxCb29rUGFnZVdpdGhSYXdIdG1sXG4gICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sID0gcmVmIH0gfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgICAgOiAoXG4gICAgICAgIDxCb29rUGFnZUxpc3RcbiAgICAgICAgICBub2RlSGVpZ2h0cz17bm9kZUhlaWdodHN9XG4gICAgICAgICAgbm9kZXM9e3RoaXMuc3RhdGUubm9kZXN9XG4gICAgICAgICAgcGFnZUNvdW50PXs1fVxuICAgICAgICAgIGluaXRpYWxQcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgcGFnZUhlaWdodD17OTAwfVxuICAgICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2V9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIHNob3dQYWdlSW5mbz17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwidmlld2VyXCIgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX0+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVWaWV3ZXJDbGlja30gb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlIH0gPlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJWaWV3UGFuZWwoKSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlckJvb2soKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJvb2sgPSBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIHx8IHt9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9vayxcbiAgICAgIHJhd0Jvb2tDb250ZW50OiBfLmdldChib29rLCAnY29udGVudC5yYXcnLCAnJyksXG4gICAgICBwcm9ncmVzczogXy5nZXQoc3RhdGUucGF5bG9hZHMsICdwcm9ncmVzcy5wZXJjZW50YWdlJywgMCksXG4gICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG4gICAgfVxuICB9LFxuICB7IGZldGNoQm9vaywgZmV0Y2hQcm9ncmVzcywgb3BlbkNvbmZpcm1Nb2RhbCB9XG4pKFZpZXdlciBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2UgZnJvbSAnLi9Cb29rUGFnZSdcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vQm9va1BhZ2VMaXN0LnV0aWxzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IFZpZXdlclNjcm9sbGJhciBmcm9tICcuL1ZpZXdlclNjcm9sbGJhcidcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYm9vay1wYWdlLWxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG4gIHBhZ2VDb3VudDogbnVtYmVyXG4gIGlzU2Nyb2xsTW9kZT86IGJvb2xlYW5cbiAgaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgaW5pdGlhbFByb2dyZXNzPzogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBvblByb2dyZXNzQ2hhbmdlPzogKG5ld1Byb2dyZXNzOiBudW1iZXIpID0+IHZvaWRcbiAgZmx1aWQ6IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2Nyb2xsVG9wPzogbnVtYmVyXG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMjAwLCB7XG4gICAgICBtYXhXYWl0OiAxMDAwXG4gICAgfSlcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdERvbTogSFRNTFVMaXN0RWxlbWVudFxuICBib29rUGFnZTogYW55XG4gIGRlYm91bmRlZEhhbmRsZVNjcm9sbDogYW55XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0NhbGNNb2RlKSB7XG4gICAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgICAgY29uc3QgeyBvblByb2dyZXNzQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHV0aWxzLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQsIHBhZ2VzLmxlbmd0aClcblxuICAgICAgaWYgKG9uUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25Qcm9ncmVzc0NoYW5nZShzY3JvbGxUb3AgLyB0b3RhbEhlaWdodClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIGNhbGNQYWdlcygpIHtcbiAgICAvLyB0b2RvOiDmt7vliqDnvJPlrZhcbiAgICBjb25zdCB7IG5vZGVIZWlnaHRzLCBub2RlcywgcGFnZUhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBhZ2VzID0gdXRpbHMuZ3JvdXBOb2Rlc0J5UGFnZShub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQpXG5cbiAgICByZXR1cm4geyBwYWdlcywgdG90YWxIZWlnaHQ6IHBhZ2VzLmxlbmd0aCAqIHBhZ2VIZWlnaHQgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwYWdlSGVpZ2h0LCBpbml0aWFsUGFnZSwgaW5pdGlhbFByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgIGxldCBzY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAoaW5pdGlhbFByb2dyZXNzKSB7XG4gICAgICBzY3JvbGxUb3AgPSB0b3RhbEhlaWdodCAqIGluaXRpYWxQcm9ncmVzc1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFBhZ2UpIHtcbiAgICAgIHNjcm9sbFRvcCA9IHBhZ2VIZWlnaHQgKiAoaW5pdGlhbFBhZ2UgLSAxKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHBhZ2VDb3VudCwgcGFnZUhlaWdodCwgZmx1aWQsIHNob3dQYWdlSW5mbyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0YXJ0UGFnZUluZGV4ID0gY3VycmVudFBhZ2UgLSAxXG4gICAgY29uc3QgZW5kUGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggKyBwYWdlQ291bnRcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlcyc6ICFmbHVpZCxcbiAgICAgICdwYWdlcy0tZmx1aWQnOiBmbHVpZFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZUxpc3REb20gPSByZWYgfSB9IHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17eyBoZWlnaHQ6IHRvdGFsSGVpZ2h0IH19PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF8uc2xpY2UocGFnZXMsIHN0YXJ0UGFnZUluZGV4LCBlbmRQYWdlSW5kZXgpLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm9va1BhZ2VcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgICAgcGFnZUhlaWdodD17cGFnZUhlaWdodH1cbiAgICAgICAgICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZSA9IHJlZiB9IH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Vmlld2VyU2Nyb2xsYmFyXG4gICAgICAgICAgdmlzaWJsZT17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIHRvdGFsPXtwYWdlcy5sZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZUxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vQm9va1BhZ2VMaXN0LnV0aWxzJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYm9vay1wYWdlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcGFnZTogdXRpbHMuVFBhZ2VcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rUGFnZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGJvb2tQYWdlRG9tOiBIVE1MRGl2RWxlbWVudFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhZ2U6IHsgbm9kZXMsIG1ldGEgfSwgcGFnZUhlaWdodCwgZmx1aWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBwYWdlSGVpZ2h0ICogKG1ldGEucGFnZU5vIC0gMSksXG4gICAgICBoZWlnaHQ6IHBhZ2VIZWlnaHQgfHwgJ2F1dG8nXG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3BhZ2UnOiAhZmx1aWQsXG4gICAgICAncGFnZS0tZmx1aWQnOiBmbHVpZFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBtZXRhLm9mZnNldCB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbm9kZXMuam9pbignJykgfX1cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VEb20gPSByZWYgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInBhZ2Utbm9cIj57bWV0YS5wYWdlTm99PC9kaXY+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19ib29rLXBhZ2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250ZW50XzFteWRJIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgbGluZS1oZWlnaHQ6IDEuOTsgfVxcbiAgLmNvbnRlbnRfMW15ZEkgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMjVweDsgfVxcblxcbi5wYWdlXzFTVTRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnBhZ2UtLWZsdWlkX3ZYOHJRIHsgfVxcbiAgLnBhZ2UtLWZsdWlkX3ZYOHJRIC5jb250ZW50XzFteWRJIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDsgfVxcblxcbi5wYWdlLS1pbml0XzhEWkZCIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bzsgfVxcbiAgLnBhZ2UtLWluaXRfOERaRkIgLmNvbnRlbnRfMW15ZEkge1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4ucGFnZS1ub18xamJWLSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGVudFwiOiBcImNvbnRlbnRfMW15ZElcIixcblx0XCJwYWdlXCI6IFwicGFnZV8xU1U0aFwiLFxuXHRcInBhZ2UtLWZsdWlkXCI6IFwicGFnZS0tZmx1aWRfdlg4clEgcGFnZV8xU1U0aFwiLFxuXHRcInBhZ2UtLWluaXRcIjogXCJwYWdlLS1pbml0XzhEWkZCXCIsXG5cdFwicGFnZS1ub1wiOiBcInBhZ2Utbm9fMWpiVi1cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8gbG9uZyBwYXJhZ3JhcGggc2l0dWF0aW9uIGRvZXNuJ3Qgc2VlbSB0byBhZmZlY3QgdGhpcyBmdW5jdGlvblxuLy8gb2Zmc2V0IGRpc3RhbmNlIGlzIGFsd2F5cyBuZWd0aXZlIG9yIHplcm9cbi8vIHRoZSBpbmRleCB3aWxsIGJlIG9mIHRoZSBwYXJhZ3JhcGggd2l0aCB0aGlzIG9mZnNldCBhdCB0aGUgZW5kXG5mdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KHtwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBub2RlSW5kZXggPSAwXG4gIGxldCBub2RlU3RhcnRJbmRleFxuXG4gIGlmIChwYWdlSW5kZXggIT09IDApIHtcbiAgICBsZXQgbm9kZUhlaWdodFN1bSA9IDBcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICogcGFnZUluZGV4KSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG9mZnNldCA9IG5vZGVIZWlnaHRTdW0gLSBub2RlSGVpZ2h0c1tub2RlSW5kZXggLSAxXSAtIHBhZ2VJbmRleCAqIHBhZ2VIZWlnaHRcbiAgICBub2RlU3RhcnRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlU3RhcnRJbmRleCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfVxufVxuXG5cbmZ1bmN0aW9uIGdldE5vZGVzT2ZQYWdlKHtwYWdlSW5kZXgsIG5vZGVzLCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0c306IHtcbiAgcGFnZUluZGV4OiBudW1iZXJcbiAgbm9kZXM6IGFueVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfSA9IGdldFBhZ2VPZmZzZXQoeyBwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzIH0pXG4gIGxldCBub2RlSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICBsZXQgbm9kZUVuZEluZGV4XG4gIGxldCBwYWdlTm9kZXMgPSBbXVxuXG4gIGxldCBub2RlSGVpZ2h0U3VtID0gb2Zmc2V0ICsgbm9kZUhlaWdodHNbbm9kZVN0YXJ0SW5kZXhdXG5cbiAgbm9kZUluZGV4KytcbiAgaWYgKG5vZGVIZWlnaHRTdW0gPCBwYWdlSGVpZ2h0KSB7XG4gICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAmJiBub2RlSW5kZXggIT09IG5vZGVzLmxlbmd0aCkge1xuICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tub2RlSW5kZXhdXG4gICAgICBub2RlSW5kZXgrK1xuICAgIH1cbiAgICBub2RlRW5kSW5kZXggPSBub2RlSW5kZXggLSAxXG4gIH0gZWxzZSB7XG4gICAgbm9kZUVuZEluZGV4ID0gbm9kZVN0YXJ0SW5kZXhcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBub2RlU3RhcnRJbmRleDsgaSA8PSBub2RlRW5kSW5kZXggJiYgaSA8PSBub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBwYWdlTm9kZXMucHVzaChub2Rlc1tpXSlcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VOb2Rlcywgb2Zmc2V0IH1cbn1cblxuXG5leHBvcnQgdHlwZSBUUGFnZSA9IHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG1ldGE6IGFueVxufVxuZXhwb3J0IHR5cGUgVFBhZ2VMaXN0ID0gVFBhZ2VbXVxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXM6IGFueSwgbm9kZUhlaWdodHM6IG51bWJlcltdLCBwYWdlSGVpZ2h0OiBudW1iZXIpOiBUUGFnZUxpc3Qge1xuICBsZXQgcGFnZXMgPSBbXVxuICBsZXQgcGFnZUhlaWdodFN1bSA9IG5vZGVIZWlnaHRzLnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMClcbiAgbGV0IHBhZ2VTdW0gPSBNYXRoLmNlaWwocGFnZUhlaWdodFN1bSAvIHBhZ2VIZWlnaHQpXG5cbiAgY29uc29sZS5sb2coJ3RvZG86IGdyb3VwIG5vZGVzJylcbiAgLy8gbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gIC8vICAgbm9kZS5wcm9wcy5pbmRleCA9IGluZGV4XG4gIC8vICAgcmV0dXJuIG5vZGVcbiAgLy8gfSlcblxuICBpZiAobm9kZUhlaWdodHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBub2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiAxLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH1cbiAgICB9XVxuICB9XG5cbiAgLy8gZmluYWxseVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VTdW07IGkrKykge1xuICAgIGNvbnN0IHsgcGFnZU5vZGVzLCBvZmZzZXQgfSA9IGdldE5vZGVzT2ZQYWdlKHsgcGFnZUluZGV4OiBpLCBub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQgfSlcblxuICAgIHBhZ2VzLnB1c2goe1xuICAgICAgbm9kZXM6IHBhZ2VOb2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiBpICsgMSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcGFnZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRhZ2VUb1BhZ2UocDogbnVtYmVyLCBwYWdlU3VtOiBudW1iZXIpIHtcbiAgaWYgKHAgPiAxKSB7XG4gICAgY29uc29sZS5lcnJvcignV3JvbmcgcGFyYW1ldGVyIScpXG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoKHAgKiBwYWdlU3VtKSBhcyBhbnkpICsgMVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC51dGlscy50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItc2Nyb2xsYmFyLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjdXJyZW50OiBudW1iZXJcbiAgdG90YWw6IG51bWJlclxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCwgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChjdXJyZW50IC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy52aXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsb2MtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+PHN0cm9uZz57Y3VycmVudH08L3N0cm9uZz4ve3RvdGFsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLWluZm9cIj57cGVyY2VudGFnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJTY3JvbGxiYXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXNjcm9sbGJhci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGxiYXJfM3ZIbHQge1xcbiAgd2lkdGg6IDJweDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDEwMHB4OyB9XFxuICAuc2Nyb2xsYmFyXzN2SGx0OmhvdmVyIC5idXR0b25fMXZkcVUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmFja18yRkxUQSB7XFxuICB3aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDhweDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4udHJhY2stLXBhc3RfM1lLZDQge1xcbiAgYmFja2dyb3VuZDogIzU4NjZkYjtcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4uYnV0dG9uXzF2ZHFVIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDg0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5sb2MtaW5mb18zNzdWdSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBhZGRpbmc6IDdweCAxNXB4OyB9XFxuXFxuLnN1Yi1pbmZvXzNxSTV1IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNhYWE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzY3JvbGxiYXJcIjogXCJzY3JvbGxiYXJfM3ZIbHRcIixcblx0XCJidXR0b25cIjogXCJidXR0b25fMXZkcVVcIixcblx0XCJ0cmFja1wiOiBcInRyYWNrXzJGTFRBXCIsXG5cdFwidHJhY2stLXBhc3RcIjogXCJ0cmFjay0tcGFzdF8zWUtkNCB0cmFja18yRkxUQVwiLFxuXHRcImxvYy1pbmZvXCI6IFwibG9jLWluZm9fMzc3VnVcIixcblx0XCJzdWItaW5mb1wiOiBcInN1Yi1pbmZvXzNxSTV1XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay1wYWdlLWxpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS1saXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0MzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2VzXzFTTmlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ucGFnZXMtLWZsdWlkXzM5RlBlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZXNcIjogXCJwYWdlc18xU05pc1wiLFxuXHRcInBhZ2VzLS1mbHVpZFwiOiBcInBhZ2VzLS1mbHVpZF8zOUZQZSBwYWdlc18xU05pc1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLy8g5pqC5LiN5pSv5oyB5YyF5ZCr5Zu+54mH55qE6K6h566XXG4vLyDorqHnrpfmsqHmnInnrYnlvoXlm77niYfliqDovb3lrozmiJDvvIzmiYDku6Xnu5PmnpzmmK/kuI3mraPnoa7nmoRcbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlSGVpZ2h0cyhub2Rlcykge1xuICBjb25zb2xlLmxvZygnZG9tIHJlYWR5LCBnZXROb2RlSGVpZ2h0cycpXG4gIGxldCBub2Rlc0hlaWdodCA9IFtdXG5cbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKG5vZGUuY2xhc3NOYW1lICE9PSAnZ2ItbGluZScpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vuc3VwcG9ydGVkIGNvbnRlbnQgZm91bmQhJylcbiAgICB9XG4gICAgbm9kZXNIZWlnaHQucHVzaChub2RlLmNsaWVudEhlaWdodClcbiAgfSlcblxuICByZXR1cm4gbm9kZXNIZWlnaHRcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25Ub05vZGVTdHJpbmdMaXN0KG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBtZCcpXG4gIGxldCBodG1sID0gbWFya2VkKG1hcmtkb3duLCB7XG4gICAgZ2ZtOiB0cnVlLFxuICAgIGJyZWFrczogdHJ1ZVxuICB9KVxuICBjb25zb2xlLmxvZygnZG9uZSBtYXJrZWQnKVxuICBjb25zdCBub2RlcyA9IEFycmF5LnByb3RvdHlwZVxuICAgIC5tYXAuY2FsbCgkKGh0bWwpLCAoZWxlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZS5ub2RlVHlwZSA9PT0gMyAmJiBlbGUubm9kZVZhbHVlID09PSAnXFxuJykge1xuICAgICAgICAvLyDnp7vpmaQgaHRtbCDph4znmoTlm57ovaZcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZS50YWdOYW1lID09PSAnUCcpIHtcbiAgICAgICAgcmV0dXJuIGA8cCBjbGFzcz1cImdiLWxpbmVcIj4ke2VsZS5pbm5lckhUTUx9PC9wPmBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdiLWxpbmVcIj4ke2VsZS5vdXRlckhUTUx9PC9kaXY+YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmZpbHRlcihub2RlID0+IG5vZGUpXG4gIC8vIGNvbnNvbGUubG9nKG5vZGVzKVxuICBjb25zb2xlLmxvZygnZW5kIG1kJylcbiAgcmV0dXJuIG5vZGVzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWFya2VkXCJcbiAqKiBtb2R1bGUgaWQgPSA0MzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSA0NDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZSdcbmltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4vVmlld2VyUHJlZmVyZW5jZSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItcGFuZWwuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBib29sZWFuXG4gIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U6IChuZXdWaXNpYmlsaXR5OiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVByZWZDbGljayA9IHRoaXMuaGFuZGxlUHJlZkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVByZWZDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uUHJlZlZpc2liaWxpdHlDaGFuZ2UoIXRoaXMucHJvcHMuc2hvd1ZpZXdlclByZWZlcmVuY2UpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBzaG93Vmlld2VyUHJlZmVyZW5jZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImJhY2tcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmVmQ2xpY2t9IHN0eWxlTmFtZT1cInByZWZlcmVuY2VcIj5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwcmVmZXJlbmNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RmFkZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoXG4gICAgICAgICAgICAgICAgPFZpZXdlclByZWZlcmVuY2UgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhbmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclBhbmVsLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInZpZXdlci1wcmVmZXJlbmNlXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi1mb250LXNpemVcIj5cbiAgICAgICAgICAgIDxzcGFuPkEtPC9zcGFuPjxzcGFuPkErPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+5rua5Yqo5qih5byPPC9zcGFuPlxuICAgICAgICAgICAgPFN3aXRjaGVyIHZhbHVlPXt0cnVlfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi10aGVtZVwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI2ZmZid9fT50aGVtZTE8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZWVlJ319PnRoZW1lMjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyMyMjInfX0+dGhlbWUzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbikoVmlld2VyUHJlZmVyZW5jZSBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4vU3dpdGNoZXInXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX3N3aXRjaGVyLnNjc3MnKVxuXG4vLyBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICBvbjogYm9vbGVhblxuLy8gfVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiAobmV3VmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pID0+IHZvaWRcbiAgb3B0aW9ucz86IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgfVtdXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdmFsdWU6IGlzT24sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzT24gPT09ICcxJyB8fCBpc09uID09PSAndHJ1ZScpIHtcbiAgICAgICAgaXNPbiA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzT24gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RhdGUgPSBCb29sZWFuKGlzT24pID8gJ29uJyA6ICdvZmYnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30gc3R5bGVOYW1lPVwic3dpdGNoZXItd3JhcFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSAmJiAoXG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVJbmRleCA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkuaW5kZXhPZih0aGlzLnByb3BzLnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzFdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3mlbDmja7mnInor6/vvIzlsIbkvb/nlKjpu5jorqTmlbDmja7vvIEnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmsqHmnInnu5kgb3B0aW9ucyDml7blv4Xpobvkvb/nlKjluIPlsJTlnovnmoQgdmFsdWXvvIEnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9ICF0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT17YHN3aXRjaGVyLS0ke3N0YXRlfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZidcbi8vICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJ1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgc3R5bGVOYW1lPXt0aGlzLnByb3BzLm9uID8gJ3N3aXRjaGVyLS1vbicgOiAnc3dpdGNoZXItLW9mZid9PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19zd2l0Y2hlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN3aXRjaGVyLXdyYXBfM1VNQVUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLnN3aXRjaGVyX0czbjRfLCAuc3dpdGNoZXItLW9mZl8xRW9PVSwgLnN3aXRjaGVyLS1vbl8yeGl3TyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjb2xvcjogZ3JlZW47IH1cXG5cXG4uc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTsgfVxcblxcbi5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMjBweDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGJhY2tncm91bmQ6ICMyZTQwZDI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzd2l0Y2hlci13cmFwXCI6IFwic3dpdGNoZXItd3JhcF8zVU1BVVwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfRzNuNF9cIixcblx0XCJzd2l0Y2hlci0tb2ZmXCI6IFwic3dpdGNoZXItLW9mZl8xRW9PVVwiLFxuXHRcInN3aXRjaGVyLS1vblwiOiBcInN3aXRjaGVyLS1vbl8yeGl3T1wiLFxuXHRcInN3aXRjaGVyLWJ1dHRvblwiOiBcInN3aXRjaGVyLWJ1dHRvbl8ya0hHTFwiLFxuXHRcInN3aXRjaGVyLXRyYWNrXCI6IFwic3dpdGNoZXItdHJhY2tfeHZoamdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXItcHJlZmVyZW5jZV8xRk5KWiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDEycHggNjNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICM2NjY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5vcHRpb25fMTlGWFcge1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gIC5vcHRpb25fMTlGWFc6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5vcHRpb24tZm9udC1zaXplXzE4T05HIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwOyB9XFxuICAub3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAub3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDsgfVxcblxcbi5vcHRpb24tc2Nyb2xsXzNhZ3RPIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8zYWd0TyAubGFiZWxfM0hMUHAge1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgLm9wdGlvbi1zY3JvbGxfM2FndE8gLnN3aXRjaGVyXzNUOUtfIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm9wdGlvbi10aGVtZV8zOGJVZyB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcbiAgLm9wdGlvbi10aGVtZV8zOGJVZyBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWV3ZXItcHJlZmVyZW5jZVwiOiBcInZpZXdlci1wcmVmZXJlbmNlXzFGTkpaXCIsXG5cdFwib3B0aW9uXCI6IFwib3B0aW9uXzE5RlhXXCIsXG5cdFwib3B0aW9uLWZvbnQtc2l6ZVwiOiBcIm9wdGlvbi1mb250LXNpemVfMThPTkcgb3B0aW9uXzE5RlhXXCIsXG5cdFwib3B0aW9uLXNjcm9sbFwiOiBcIm9wdGlvbi1zY3JvbGxfM2FndE8gb3B0aW9uXzE5RlhXXCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbF8zSExQcFwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfM1Q5S19cIixcblx0XCJvcHRpb24tdGhlbWVcIjogXCJvcHRpb24tdGhlbWVfMzhiVWcgb3B0aW9uXzE5RlhXXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci1wYW5lbC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wYW5lbF9hb092NyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5MDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxuICBoZWlnaHQ6IDYwcHg7IH1cXG5cXG4uY29udGFpbmVyXzJjTE5JIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfcHB4UV8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwOyB9XFxuICAuYmFja19wcHhRXyBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAuYmFja19wcHhRXyBhIHNwYW4ge1xcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAuYmFja19wcHhRXyBzcGFuIHtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi50aXRsZV8zTmhsaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5wcmVmZXJlbmNlXzF3UGE2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wYW5lbFwiOiBcInZpZXdlci1wYW5lbF9hb092N1wiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl8yY0xOSVwiLFxuXHRcImJhY2tcIjogXCJiYWNrX3BweFFfXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTmhsaVwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzF3UGE2XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmNsYXNzIEJvb2tQYWdlV2l0aFJhd0h0bWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBib29rUGFnZUxpc3Q6IGFueVxuXG4gIGdldENvbnRlbnRIdG1sKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tQYWdlTGlzdC5ib29rUGFnZS5ib29rUGFnZURvbVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmx1aWQsIG5vZGVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2tQYWdlTGlzdFxuICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZUhlaWdodHM9e1tdfVxuICAgICAgICBwYWdlQ291bnQ9ezF9XG4gICAgICAgIHBhZ2VIZWlnaHQ9ezB9XG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdCA9IHJlZiB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VXaXRoUmF3SHRtbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZVdpdGhSYXdIdG1sLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9