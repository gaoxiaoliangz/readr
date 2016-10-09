exports.ids = [1];
exports.modules = {

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(285);
	
	var _BookPageList = __webpack_require__(449);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(459);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(85);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(462);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(472);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(315);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _api = __webpack_require__(103);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _utils = __webpack_require__(88);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(282);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _selectors = __webpack_require__(431);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Loading = __webpack_require__(473);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
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
	
	var styles = __webpack_require__(477);
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
	            _api2.default.setProgress(this.bookId, { percentage: percentage });
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
	            return !_lodash2.default.isEqual(this.state, nextState) || !_lodash2.default.isEqual(this.props, nextProps);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var shoudCalcNodes = this.props.rawBookContent === '' && nextProps.rawBookContent !== '' || this.state.nodes.length === 0 && this.props.rawBookContent !== '';
	            if (shoudCalcNodes) {
	                var nodes = viewerUtils.markdownToNodeStringList(nextProps.rawBookContent);
	                this.setState({
	                    nodes: nodes,
	                    fluid: this.isViewFluid(),
	                    isTouchMode: this.isTouchMode()
	                });
	            }
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
	            this.props.loadBook(this.bookId, { withContent: true });
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
	            var _this3 = this;
	
	            return (this.state.showPanel || this.state.showViewerPreference) && _react2.default.createElement(_ViewerPanel2.default, { title: this.props.book.title, showViewerPreference: this.state.showViewerPreference, onPrefVisibilityChange: function onPrefVisibilityChange(newVisibility) {
	                    _this3.setState({
	                        showViewerPreference: newVisibility
	                    });
	                } });
	        }
	    }, {
	        key: "renderBook",
	        value: function renderBook() {
	            var _this4 = this;
	
	            var _state = this.state;
	            var nodes = _state.nodes;
	            var nodeHeights = _state.nodeHeights;
	            var fluid = _state.fluid;
	            var showPageInfo = _state.showPageInfo;
	            var progress = this.props.progress;
	
	            if (nodes.length === 0) {
	                return _react2.default.createElement(_Loading2.default, { text: "书籍获取中 ...", center: true });
	            }
	            if (this.state.isCalcMode) {
	                return _react2.default.createElement(_BookPageWithRawHtml2.default, { nodes: nodes, ref: function ref(_ref) {
	                        _this4.bookPageWithRawHtml = _ref;
	                    }, fluid: fluid });
	            } else {
	                if (typeof progress === 'undefined') {
	                    return _react2.default.createElement(_Loading2.default, { text: "阅读进度获取中 ...", center: true });
	                }
	                return _react2.default.createElement(_BookPageList2.default, { nodeHeights: nodeHeights, nodes: this.state.nodes, pageCount: 5, initialProgress: progress, pageHeight: 900, onProgressChange: this.handleProgressChange, fluid: fluid, showPageInfo: showPageInfo });
	            }
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
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var bookId = ownProps.params.id;
	    var book = selectors.common.entity('books', bookId)(state);
	    var progressEntity = selectors.common.entity('booksProgress', bookId)(state);
	    return {
	        book: book,
	        rawBookContent: _lodash2.default.get(book, 'content.raw', ''),
	        progress: _lodash2.default.get(progressEntity, 'percentage'),
	        session: state.session
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBook: _actions.loadBook, fetchProgress: _actions.fetchProgress, openConfirmModal: _actions.openConfirmModal })(Viewer);

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(450);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(453);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(313);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(315);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(454);
	
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
	
	var styles = __webpack_require__(457);
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
	            console.log('removed');
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
	            var isCalcMode = _props3.isCalcMode;
	
	            var className = (0, _classnames2.default)({
	                'pages': !fluid,
	                'pages--fluid': fluid
	            });
	            var startPageIndex = void 0;
	            var endPageIndex = void 0;
	            if (isCalcMode) {
	                startPageIndex = 0;
	                endPageIndex = 1;
	            } else {
	                startPageIndex = currentPage - Math.ceil(pageCount / 2);
	                startPageIndex = startPageIndex < 0 ? 0 : startPageIndex;
	                endPageIndex = startPageIndex + pageCount;
	            }
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

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(313);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(315);
	
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
	
	var styles = __webpack_require__(451);
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

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(452);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
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

/***/ 453:
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

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(315);
	
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
	
	var styles = __webpack_require__(455);
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

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(456);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
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

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(458);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_Lkz-8 {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_1DXUA {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_Lkz-8",
		"pages--fluid": "pages--fluid_1DXUA pages_Lkz-8"
	};

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(460);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(461);
	
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

/***/ 460:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 461:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _Icon = __webpack_require__(311);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(391);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(463);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(315);
	
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
	
	var styles = __webpack_require__(470);
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

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(285);
	
	var _Switcher = __webpack_require__(464);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(315);
	
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
	
	var styles = __webpack_require__(468);
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

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(465);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(315);
	
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
	
	var styles = __webpack_require__(466);
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

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(467);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
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

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(469);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
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

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(471);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
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

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(449);
	
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

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(474);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(115);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(315);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(313);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	
	var styles = __webpack_require__(475);
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).apply(this, arguments));
	    }
	
	    _createClass(Loading, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(styles)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中 ...'
	};
	exports.default = Loading;

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(476);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-loading_3efqh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3efqh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_htyYz {\n  text-align: left; }\n\n.loading-wrap--center_3PEIh {\n  text-align: center; }\n", ""]);
	
	// exports
	exports.locals = {
		"text-loading": "text-loading_3efqh",
		"loading-wrap": "loading-wrap_htyYz",
		"loading-wrap--center": "loading-wrap--center_3PEIh"
	};

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(478);
	    var insertCss = __webpack_require__(319);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(318)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzPzMwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzPzUwNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnNjc3M/OGViZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3M/YTIxZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzPzA4YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzcz8wZjU4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzEwZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3M/Nzk4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOzs7O0FBQ0g7O0FBRUk7Ozs7QUFDbEM7O0tBQXNDOztBQUNrQzs7QUFDekQ7Ozs7QUFDaUI7Ozs7QUFDZ0I7Ozs7QUFDYjs7OztBQUNOOzs7O0FBQ0w7Ozs7QUFDeUI7Ozs7QUFDakQ7O0tBQTJDOztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM1QyxLQUFZLFNBQVUsb0JBQWtCO0FBdUJ4Qzs7O0FBRUUscUJBQWlCOzs7K0ZBQ0g7O0FBRVIsZUFBTyxTQUFRLE1BQU8sT0FBRztBQUN6QixlQUFNLFFBQUc7QUFDRix3QkFBTztBQUNOLHlCQUFNO0FBQ0wsMEJBQUk7QUFDVixvQkFBSTtBQUNXLG1DQUFPO0FBQ3RCLG9CQUFPO0FBQ0QsMEJBQ1o7V0FYRDtBQVlJLGVBQWtCLG9CQUFPLE1BQWtCLGtCQUFXO0FBQ3RELGVBQXNCLHdCQUFPLE1BQXNCLHNCQUFXO0FBQzlELGVBQXFCLHVCQUFPLE1BQXFCLHFCQUFXO0FBQzVELGVBQWEsZUFBTyxNQUFhLGFBQVc7QUFDNUMsZUFBc0IseUNBQWEsU0FBSyxNQUFhLGNBQUssS0FBRTtBQUN2RCxzQkFRQTtVQVRxQjs7Ozs7OztBQVV4QixvQkFBTSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUc5Qjs7Ozs7QUFDSCxvQkFBTSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUc5Qjs7OztxQ0FBVztBQUNqQiwyQkFBWSxZQUFLLEtBQU8sUUFBRSxFQUdWOzs7OytDQUFNO0FBQ3RCLGlCQUFDLENBQUssS0FBTSxNQUFXLGNBQUksQ0FBSyxLQUFNLE1BQWE7QUFDcEQscUJBQUssSUFBUSxNQUFNLFFBQVcsU0FBSyxLQUFVO0FBQzdDLHFCQUFrQixpQkFBUSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUFRLE1BQU07QUFFL0Qsc0JBQVMs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QU12QztrQkFOZ0IsSUFWTjs7Ozs7OzttQkFnQndCLG9COzs7Ozs7Ozs7Ozs7O0FDcENaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RrQjs7OztBQUNFOzs7O0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNuQyxLQUFZLFNBQVUsb0JBQWtCO0FBU3hDOzs7Ozs7Ozs7Ozs7MEJBRWlDLEtBQU07aUJBQXZCO2lCQUFVOztBQUV0Qix1REFBNkI7QUFDTCx5Q0FBUTtBQUNoQixpQ0FBRSxDQUNoQjtjQUgwQixDQUFiLENBRlQ7QUFPQyxvQkFDTCw4QkFBSSxTQUFVLFdBQVksYUFDeEIsOEJBQUssVUFBVSxXQUFlLGtCQUlyQzs7OztZQWRPOztBQUZSLHVCQUFXLCtCQUFRO0FBa0JaLFNBQWdCLGtCQUFHO0FBQ3BCLFdBR047O21CQUFzQixROzs7Ozs7OztBQ2hDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxnREFBK0MsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGdCQUFnQixFQUFFLHlCQUF5QixtQkFBbUIsMEJBQTBCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyx1QkFBdUIsRUFBRTs7QUFFelU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDWEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMscUJBQXFCLEVBQUU7O0FBRTFEIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuaW1wb3J0ICogYXMgdmlld2VyVXRpbHMgZnJvbSAnLi9WaWV3ZXIudXRpbHMnXG5pbXBvcnQgeyBsb2FkQm9vaywgZmV0Y2hQcm9ncmVzcywgb3BlbkNvbmZpcm1Nb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgVmlld2VyUGFuZWwgZnJvbSAnLi9WaWV3ZXJQYW5lbCdcbmltcG9ydCBCb29rUGFnZVdpdGhSYXdIdG1sIGZyb20gJy4vQm9va1BhZ2VXaXRoUmF3SHRtbCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL192aWV3ZXIuc2NzcycpXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBsb2FkQm9vazogbG9hZEJvb2tcbiAgYm9vazogYW55XG4gIHJhd0Jvb2tDb250ZW50OiBzdHJpbmdcbiAgZmV0Y2hQcm9ncmVzczogKGJvb2tJZDogc3RyaW5nKSA9PiB2b2lkXG4gIHByb2dyZXNzOiBudW1iZXJcbiAgb3BlbkNvbmZpcm1Nb2RhbDogKGRhdGE6IG9wZW5Db25maXJtTW9kYWwpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dQYW5lbD86IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgbm9kZUhlaWdodHM/OiBudW1iZXJbXVxuICBub2Rlcz86IHN0cmluZ1tdXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlPzogYm9vbGVhblxuICBmbHVpZD86IGJvb2xlYW5cbiAgaXNUb3VjaE1vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICBpc0NhbGNNb2RlOiB0cnVlLFxuICAgICAgbm9kZUhlaWdodHM6IFtdLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlLFxuICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgaXNUb3VjaE1vZGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va0lkOiBzdHJpbmdcbiAgYm9va1BhZ2VXaXRoUmF3SHRtbDogYW55XG4gIGRlYm91bmRlZEhhbmRsZVJlc2l6ZTogYW55XG5cbiAgaXNWaWV3Rmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBpc1RvdWNoTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIHNldFByb2dyZXNzKHBlcmNlbnRhZ2UpIHtcbiAgICBhcGkuc2V0UHJvZ3Jlc3ModGhpcy5ib29rSWQsIHsgcGVyY2VudGFnZSB9KVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ2FsY01vZGUgJiYgIXRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgbGV0IGRUb1NjcmVlblJpZ2h0ID0gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggLSBldmVudC5wYWdlWFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiB5IDwgOTAsXG4gICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UobmV3UHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKVxuICB9XG5cbiAgaGFuZGxlVmlld2VyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjRG9tKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDYWxjTW9kZTogdHJ1ZVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sLmdldENvbnRlbnRIdG1sKClcbiAgICAgIGNvbnN0IG5vZGVIZWlnaHRzID0gdmlld2VyVXRpbHMuZ2V0Tm9kZUhlaWdodHMoY29udGVudEh0bWwuY2hpbGROb2RlcylcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxjIGRvbmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVIZWlnaHRzLFxuICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzaG91ZENhbGNOb2RlcyA9ICh0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50ID09PSAnJyAmJiBuZXh0UHJvcHMucmF3Qm9va0NvbnRlbnQgIT09ICcnKVxuICAgICAgfHwgdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yYXdCb29rQ29udGVudCAhPT0gJydcblxuICAgIGlmIChzaG91ZENhbGNOb2Rlcykge1xuICAgICAgY29uc3Qgbm9kZXMgPSB2aWV3ZXJVdGlscy5tYXJrZG93blRvTm9kZVN0cmluZ0xpc3QobmV4dFByb3BzLnJhd0Jvb2tDb250ZW50KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZXMsXG4gICAgICAgIGZsdWlkOiB0aGlzLmlzVmlld0ZsdWlkKCksXG4gICAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgaGFzQm9va05vZGVzTG9hZGVkID0gdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGggIT09IDAgJiYgcHJldlN0YXRlLm5vZGVzLmxlbmd0aCA9PT0gMFxuICAgIGNvbnN0IHZpZXdDaGFuZ2VkID0gdGhpcy5zdGF0ZS5mbHVpZCAhPT0gcHJldlN0YXRlLmZsdWlkXG5cbiAgICBpZiAoaGFzQm9va05vZGVzTG9hZGVkIHx8IHZpZXdDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbGNEb20oKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZEJvb2sodGhpcy5ib29rSWQsIHsgd2l0aENvbnRlbnQ6IHRydWUgfSlcbiAgICB0aGlzLnByb3BzLmZldGNoUHJvZ3Jlc3ModGhpcy5ib29rSWQpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIHJlbmRlclZpZXdQYW5lbCgpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuc2hvd1BhbmVsIHx8IHRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2UpICYmIChcbiAgICAgIDxWaWV3ZXJQYW5lbFxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5ib29rLnRpdGxlfVxuICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZT17dGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZX1cbiAgICAgICAgb25QcmVmVmlzaWJpbGl0eUNoYW5nZT17bmV3VmlzaWJpbGl0eSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogbmV3VmlzaWJpbGl0eVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gfVxuICAgICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckJvb2soKSB7XG4gICAgY29uc3QgeyBub2Rlcywgbm9kZUhlaWdodHMsIGZsdWlkLCBzaG93UGFnZUluZm8gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgdGV4dD1cIuS5puexjeiOt+WPluS4rSAuLi5cIiBjZW50ZXIgLz5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0NhbGNNb2RlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9va1BhZ2VXaXRoUmF3SHRtbFxuICAgICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VXaXRoUmF3SHRtbCA9IHJlZiB9IH1cbiAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm9ncmVzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nIHRleHQ9XCLpmIXor7vov5vluqbojrflj5bkuK0gLi4uXCIgY2VudGVyIC8+XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCb29rUGFnZUxpc3RcbiAgICAgICAgICBub2RlSGVpZ2h0cz17bm9kZUhlaWdodHN9XG4gICAgICAgICAgbm9kZXM9e3RoaXMuc3RhdGUubm9kZXN9XG4gICAgICAgICAgcGFnZUNvdW50PXs1fVxuICAgICAgICAgIGluaXRpYWxQcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgcGFnZUhlaWdodD17OTAwfVxuICAgICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2V9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIHNob3dQYWdlSW5mbz17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIGJvZHlDbGFzcz1cInZpZXdlclwiIHRpdGxlPXt0aGlzLnByb3BzLmJvb2sudGl0bGV9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld2VyQ2xpY2t9IG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZX0gPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclZpZXdQYW5lbCgpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckJvb2soKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IGJvb2tJZCA9IG93blByb3BzLnBhcmFtcy5pZFxuICBjb25zdCBib29rID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tzJywgYm9va0lkKShzdGF0ZSlcbiAgY29uc3QgcHJvZ3Jlc3NFbnRpdHkgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va3NQcm9ncmVzcycsIGJvb2tJZCkoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICBib29rLFxuICAgIHJhd0Jvb2tDb250ZW50OiBfLmdldChib29rLCAnY29udGVudC5yYXcnLCAnJyksXG4gICAgcHJvZ3Jlc3M6IF8uZ2V0KHByb2dyZXNzRW50aXR5LCAncGVyY2VudGFnZScpLFxuICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIHsgbG9hZEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5Db25maXJtTW9kYWwgfVxuKShWaWV3ZXIgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vQm9va1BhZ2UnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi9WaWV3ZXJTY3JvbGxiYXInXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vQm9va1BhZ2VMaXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxuICBwYWdlQ291bnQ6IG51bWJlclxuICBpc1Njcm9sbE1vZGU/OiBib29sZWFuXG4gIGluaXRpYWxQYWdlPzogbnVtYmVyXG4gIGluaXRpYWxQcm9ncmVzcz86IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgb25Qcm9ncmVzc0NoYW5nZT86IChuZXdQcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkXG4gIGZsdWlkOiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNjcm9sbFRvcD86IG51bWJlclxuICBjdXJyZW50UGFnZT86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rUGFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICBjdXJyZW50UGFnZTogMVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbCA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwsIDIwMCwge1xuICAgICAgbWF4V2FpdDogMTAwMFxuICAgIH0pXG4gIH1cblxuICBib29rUGFnZUxpc3REb206IEhUTUxVTGlzdEVsZW1lbnRcbiAgYm9va1BhZ2U6IGFueVxuICBkZWJvdW5kZWRIYW5kbGVTY3JvbGw6IGFueVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNDYWxjTW9kZSkge1xuICAgICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICAgIGNvbnN0IHsgb25Qcm9ncmVzc0NoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSB1dGlscy5wZXJjZW50YWdlVG9QYWdlKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0LCBwYWdlcy5sZW5ndGgpXG5cbiAgICAgIGlmIChvblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gICAgY29uc29sZS5sb2coJ3JlbW92ZWQnKVxuICB9XG5cbiAgY2FsY1BhZ2VzKCkge1xuICAgIC8vIHRvZG86IOa3u+WKoOe8k+WtmFxuICAgIGNvbnN0IHsgbm9kZUhlaWdodHMsIG5vZGVzLCBwYWdlSGVpZ2h0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGFnZXMgPSB1dGlscy5ncm91cE5vZGVzQnlQYWdlKG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodClcblxuICAgIHJldHVybiB7IHBhZ2VzLCB0b3RhbEhlaWdodDogcGFnZXMubGVuZ3RoICogcGFnZUhlaWdodCB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBhZ2VIZWlnaHQsIGluaXRpYWxQYWdlLCBpbml0aWFsUHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgbGV0IHNjcm9sbFRvcCA9IDBcblxuICAgIGlmIChpbml0aWFsUHJvZ3Jlc3MpIHtcbiAgICAgIHNjcm9sbFRvcCA9IHRvdGFsSGVpZ2h0ICogaW5pdGlhbFByb2dyZXNzXG4gICAgfSBlbHNlIGlmIChpbml0aWFsUGFnZSkge1xuICAgICAgc2Nyb2xsVG9wID0gcGFnZUhlaWdodCAqIChpbml0aWFsUGFnZSAtIDEpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcGFnZUNvdW50LCBwYWdlSGVpZ2h0LCBmbHVpZCwgc2hvd1BhZ2VJbmZvLCBpc0NhbGNNb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZXMnOiAhZmx1aWQsXG4gICAgICAncGFnZXMtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgbGV0IHN0YXJ0UGFnZUluZGV4XG4gICAgbGV0IGVuZFBhZ2VJbmRleFxuXG4gICAgaWYgKGlzQ2FsY01vZGUpIHtcbiAgICAgIHN0YXJ0UGFnZUluZGV4ID0gMFxuICAgICAgZW5kUGFnZUluZGV4ID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBhZ2VJbmRleCA9IGN1cnJlbnRQYWdlIC0gTWF0aC5jZWlsKHBhZ2VDb3VudCAvIDIpXG4gICAgICBzdGFydFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4IDwgMCA/IDAgOiBzdGFydFBhZ2VJbmRleFxuXG4gICAgICBlbmRQYWdlSW5kZXggPSBzdGFydFBhZ2VJbmRleCArIHBhZ2VDb3VudFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdERvbSA9IHJlZiB9IH0gc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IGhlaWdodDogdG90YWxIZWlnaHQgfX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgXy5zbGljZShwYWdlcywgc3RhcnRQYWdlSW5kZXgsIGVuZFBhZ2VJbmRleCkubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCb29rUGFnZVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlID0gcmVmIH0gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxWaWV3ZXJTY3JvbGxiYXJcbiAgICAgICAgICB2aXNpYmxlPXtzaG93UGFnZUluZm99XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgdG90YWw9e3BhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9Cb29rUGFnZUxpc3QudXRpbHMnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL19ib29rLXBhZ2Uuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwYWdlOiB1dGlscy5UUGFnZVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgZmx1aWQ6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgYm9va1BhZ2VEb206IEhUTUxEaXZFbGVtZW50XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZTogeyBub2RlcywgbWV0YSB9LCBwYWdlSGVpZ2h0LCBmbHVpZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHBhZ2VIZWlnaHQgKiAobWV0YS5wYWdlTm8gLSAxKSxcbiAgICAgIGhlaWdodDogcGFnZUhlaWdodCB8fCAnYXV0bydcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZSc6ICFmbHVpZCxcbiAgICAgICdwYWdlLS1mbHVpZCc6IGZsdWlkXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IG1ldGEub2Zmc2V0IH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBub2Rlcy5qb2luKCcnKSB9fVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZURvbSA9IHJlZiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1ub1wiPnttZXRhLnBhZ2VOb308L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX2Jvb2stcGFnZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnRfMW15ZEkge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNTUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM2NjY7XFxuICBsaW5lLWhlaWdodDogMS45OyB9XFxuICAuY29udGVudF8xbXlkSSBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4OyB9XFxuXFxuLnBhZ2VfMVNVNGgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucGFnZS0tZmx1aWRfdlg4clEgeyB9XFxuICAucGFnZS0tZmx1aWRfdlg4clEgLmNvbnRlbnRfMW15ZEkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4OyB9XFxuXFxuLnBhZ2UtLWluaXRfOERaRkIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuICAucGFnZS0taW5pdF84RFpGQiAuY29udGVudF8xbXlkSSB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblxcbi5wYWdlLW5vXzFqYlYtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjZTZlNmU2O1xcbiAgZm9udC1zaXplOiAwLjhyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiY29udGVudF8xbXlkSVwiLFxuXHRcInBhZ2VcIjogXCJwYWdlXzFTVTRoXCIsXG5cdFwicGFnZS0tZmx1aWRcIjogXCJwYWdlLS1mbHVpZF92WDhyUSBwYWdlXzFTVTRoXCIsXG5cdFwicGFnZS0taW5pdFwiOiBcInBhZ2UtLWluaXRfOERaRkJcIixcblx0XCJwYWdlLW5vXCI6IFwicGFnZS1ub18xamJWLVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBsb25nIHBhcmFncmFwaCBzaXR1YXRpb24gZG9lc24ndCBzZWVtIHRvIGFmZmVjdCB0aGlzIGZ1bmN0aW9uXG4vLyBvZmZzZXQgZGlzdGFuY2UgaXMgYWx3YXlzIG5lZ3RpdmUgb3IgemVyb1xuLy8gdGhlIGluZGV4IHdpbGwgYmUgb2YgdGhlIHBhcmFncmFwaCB3aXRoIHRoaXMgb2Zmc2V0IGF0IHRoZSBlbmRcbmZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoe3BhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHN9OiB7XG4gIHBhZ2VJbmRleDogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IG5vZGVJbmRleCA9IDBcbiAgbGV0IG5vZGVTdGFydEluZGV4XG5cbiAgaWYgKHBhZ2VJbmRleCAhPT0gMCkge1xuICAgIGxldCBub2RlSGVpZ2h0U3VtID0gMFxuICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgKiBwYWdlSW5kZXgpIHtcbiAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbbm9kZUluZGV4XVxuICAgICAgbm9kZUluZGV4KytcbiAgICB9XG4gICAgb2Zmc2V0ID0gbm9kZUhlaWdodFN1bSAtIG5vZGVIZWlnaHRzW25vZGVJbmRleCAtIDFdIC0gcGFnZUluZGV4ICogcGFnZUhlaWdodFxuICAgIG5vZGVTdGFydEluZGV4ID0gbm9kZUluZGV4IC0gMVxuICB9IGVsc2Uge1xuICAgIG5vZGVTdGFydEluZGV4ID0gMFxuICB9XG5cbiAgcmV0dXJuIHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9XG59XG5cblxuZnVuY3Rpb24gZ2V0Tm9kZXNPZlBhZ2Uoe3BhZ2VJbmRleCwgbm9kZXMsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBub2RlczogYW55XG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9ID0gZ2V0UGFnZU9mZnNldCh7IHBhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHMgfSlcbiAgbGV0IG5vZGVJbmRleCA9IG5vZGVTdGFydEluZGV4XG4gIGxldCBub2RlRW5kSW5kZXhcbiAgbGV0IHBhZ2VOb2RlcyA9IFtdXG5cbiAgbGV0IG5vZGVIZWlnaHRTdW0gPSBvZmZzZXQgKyBub2RlSGVpZ2h0c1tub2RlU3RhcnRJbmRleF1cblxuICBub2RlSW5kZXgrK1xuICBpZiAobm9kZUhlaWdodFN1bSA8IHBhZ2VIZWlnaHQpIHtcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICYmIG5vZGVJbmRleCAhPT0gbm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG5vZGVFbmRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlRW5kSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IG5vZGVTdGFydEluZGV4OyBpIDw9IG5vZGVFbmRJbmRleCAmJiBpIDw9IG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHBhZ2VOb2Rlcy5wdXNoKG5vZGVzW2ldKVxuICB9XG5cbiAgcmV0dXJuIHsgcGFnZU5vZGVzLCBvZmZzZXQgfVxufVxuXG5cbmV4cG9ydCB0eXBlIFRQYWdlID0ge1xuICBub2Rlczogc3RyaW5nW11cbiAgbWV0YTogYW55XG59XG5leHBvcnQgdHlwZSBUUGFnZUxpc3QgPSBUUGFnZVtdXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBOb2Rlc0J5UGFnZShub2RlczogYW55LCBub2RlSGVpZ2h0czogbnVtYmVyW10sIHBhZ2VIZWlnaHQ6IG51bWJlcik6IFRQYWdlTGlzdCB7XG4gIGxldCBwYWdlcyA9IFtdXG4gIGxldCBwYWdlSGVpZ2h0U3VtID0gbm9kZUhlaWdodHMucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKVxuICBsZXQgcGFnZVN1bSA9IE1hdGguY2VpbChwYWdlSGVpZ2h0U3VtIC8gcGFnZUhlaWdodClcblxuICBjb25zb2xlLmxvZygndG9kbzogZ3JvdXAgbm9kZXMnKVxuICAvLyBub2RlcyA9IG5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgLy8gICBub2RlLnByb3BzLmluZGV4ID0gaW5kZXhcbiAgLy8gICByZXR1cm4gbm9kZVxuICAvLyB9KVxuXG4gIGlmIChub2RlSGVpZ2h0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIG5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IDEsXG4gICAgICAgIG9mZnNldDogMFxuICAgICAgfVxuICAgIH1dXG4gIH1cblxuICAvLyBmaW5hbGx5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZVN1bTsgaSsrKSB7XG4gICAgY29uc3QgeyBwYWdlTm9kZXMsIG9mZnNldCB9ID0gZ2V0Tm9kZXNPZlBhZ2UoeyBwYWdlSW5kZXg6IGksIG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodCB9KVxuXG4gICAgcGFnZXMucHVzaCh7XG4gICAgICBub2RlczogcGFnZU5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IGkgKyAxLFxuICAgICAgICBvZmZzZXRcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBwYWdlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGFnZVRvUGFnZShwOiBudW1iZXIsIHBhZ2VTdW06IG51bWJlcikge1xuICBpZiAocCA+IDEpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXcm9uZyBwYXJhbWV0ZXIhJylcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludCgocCAqIHBhZ2VTdW0pIGFzIGFueSkgKyAxXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1zY3JvbGxiYXIuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGN1cnJlbnQ6IG51bWJlclxuICB0b3RhbDogbnVtYmVyXG4gIHZpc2libGU6IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyU2Nyb2xsYmFyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50LCB0b3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDApLnRvRml4ZWQoMikgKyAnJSdcblxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLnZpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImxvYy1pbmZvXCI+XG4gICAgICAgICAgPGRpdj48c3Ryb25nPntjdXJyZW50fTwvc3Ryb25nPi97dG90YWx9PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzdWItaW5mb1wiPntwZXJjZW50YWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyU2Nyb2xsYmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcm9sbGJhcl8zdkhsdCB7XFxuICB3aWR0aDogMnB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMTAwcHg7IH1cXG4gIC5zY3JvbGxiYXJfM3ZIbHQ6aG92ZXIgLmJ1dHRvbl8xdmRxVSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRyYWNrXzJGTFRBIHtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogOHB4O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi50cmFjay0tcGFzdF8zWUtkNCB7XFxuICBiYWNrZ3JvdW5kOiAjNTg2NmRiO1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5idXR0b25fMXZkcVUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogODRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvYy1pbmZvXzM3N1Z1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7IH1cXG5cXG4uc3ViLWluZm9fM3FJNXUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2FhYTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNjcm9sbGJhclwiOiBcInNjcm9sbGJhcl8zdkhsdFwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8xdmRxVVwiLFxuXHRcInRyYWNrXCI6IFwidHJhY2tfMkZMVEFcIixcblx0XCJ0cmFjay0tcGFzdFwiOiBcInRyYWNrLS1wYXN0XzNZS2Q0IHRyYWNrXzJGTFRBXCIsXG5cdFwibG9jLWluZm9cIjogXCJsb2MtaW5mb18zNzdWdVwiLFxuXHRcInN1Yi1pbmZvXCI6IFwic3ViLWluZm9fM3FJNXVcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tQYWdlTGlzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZXNfTGt6LTgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlcy0tZmx1aWRfMURYVUEge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlc1wiOiBcInBhZ2VzX0xrei04XCIsXG5cdFwicGFnZXMtLWZsdWlkXCI6IFwicGFnZXMtLWZsdWlkXzFEWFVBIHBhZ2VzX0xrei04XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyDmmoLkuI3mlK/mjIHljIXlkKvlm77niYfnmoTorqHnrpdcbi8vIOiuoeeul+ayoeacieetieW+heWbvueJh+WKoOi9veWujOaIkO+8jOaJgOS7pee7k+aenOaYr+S4jeato+ehrueahFxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVIZWlnaHRzKG5vZGVzKSB7XG4gIGNvbnNvbGUubG9nKCdkb20gcmVhZHksIGdldE5vZGVIZWlnaHRzJylcbiAgbGV0IG5vZGVzSGVpZ2h0ID0gW11cblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAobm9kZS5jbGFzc05hbWUgIT09ICdnYi1saW5lJykge1xuICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCEnKVxuICAgIH1cbiAgICBub2Rlc0hlaWdodC5wdXNoKG5vZGUuY2xpZW50SGVpZ2h0KVxuICB9KVxuXG4gIHJldHVybiBub2Rlc0hlaWdodFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blRvTm9kZVN0cmluZ0xpc3QobWFya2Rvd246IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IG1kJylcbiAgbGV0IGh0bWwgPSBtYXJrZWQobWFya2Rvd24sIHtcbiAgICBnZm06IHRydWUsXG4gICAgYnJlYWtzOiB0cnVlXG4gIH0pXG4gIGNvbnNvbGUubG9nKCdkb25lIG1hcmtlZCcpXG4gIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlXG4gICAgLm1hcC5jYWxsKCQoaHRtbCksIChlbGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlLm5vZGVUeXBlID09PSAzICYmIGVsZS5ub2RlVmFsdWUgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIOenu+mZpCBodG1sIOmHjOeahOWbnui9plxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlLnRhZ05hbWUgPT09ICdQJykge1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLmlubmVySFRNTH08L3A+YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLm91dGVySFRNTH08L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZSlcbiAgLy8gY29uc29sZS5sb2cobm9kZXMpXG4gIGNvbnNvbGUubG9nKCdlbmQgbWQnKVxuICByZXR1cm4gbm9kZXNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnV0aWxzLnRzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDQ2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDQ2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0ljb24nXG5pbXBvcnQgRmFkZSBmcm9tICcuLi8uLi9lbGVtZW50cy9fYW5pbWF0aW9ucy9GYWRlJ1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi9WaWV3ZXJQcmVmZXJlbmNlJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1wYW5lbC5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGJvb2xlYW5cbiAgb25QcmVmVmlzaWJpbGl0eUNoYW5nZTogKG5ld1Zpc2liaWxpdHk6IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlUHJlZkNsaWNrID0gdGhpcy5oYW5kbGVQcmVmQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlUHJlZkNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25QcmVmVmlzaWJpbGl0eUNoYW5nZSghdGhpcy5wcm9wcy5zaG93Vmlld2VyUHJlZmVyZW5jZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHNob3dWaWV3ZXJQcmVmZXJlbmNlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ2aWV3ZXItcGFuZWxcIj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYmFja1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPui/lOWbnjwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVByZWZDbGlja30gc3R5bGVOYW1lPVwicHJlZmVyZW5jZVwiPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInByZWZlcmVuY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGYWRlPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZSA/IChcbiAgICAgICAgICAgICAgICA8Vmlld2VyUHJlZmVyZW5jZSAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFuZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUGFuZWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi8uLi9lbGVtZW50cy9Td2l0Y2hlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXByZWZlcmVuY2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLWZvbnQtc2l6ZVwiPlxuICAgICAgICAgICAgPHNwYW4+QS08L3NwYW4+PHNwYW4+QSs8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj7mu5rliqjmqKHlvI88L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoZXIgdmFsdWU9e3RydWV9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXRoZW1lXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJ319PnRoZW1lMTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNlZWUnfX0+dGhlbWUyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzIyMid9fT50aGVtZTM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuKShWaWV3ZXJQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgIG9uOiBib29sZWFuXG4vLyB9XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB0aXRsZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChuZXdWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZFxuICBvcHRpb25zPzoge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB9W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICBpc09uID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNPbiA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZidcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSBzdHlsZU5hbWU9XCJzd2l0Y2hlci13cmFwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeaVsOaNruacieivr++8jOWwhuS9v+eUqOm7mOiupOaVsOaNru+8gScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPXtgc3dpdGNoZXItLSR7c3RhdGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJ1xuLy8gICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wcmVmZXJlbmNlXzFGTkpaIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm9wdGlvbl8xOUZYVyB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbl8xOUZYVzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLm9wdGlvbi1mb250LXNpemVfMThPTkcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLm9wdGlvbi1zY3JvbGxfM2FndE8ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzNhZ3RPIC5sYWJlbF8zSExQcCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8zYWd0TyAuc3dpdGNoZXJfM1Q5S18ge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4ub3B0aW9uLXRoZW1lXzM4YlVnIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICAub3B0aW9uLXRoZW1lXzM4YlVnIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wcmVmZXJlbmNlXCI6IFwidmlld2VyLXByZWZlcmVuY2VfMUZOSlpcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tZm9udC1zaXplXCI6IFwib3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyBvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tc2Nyb2xsXCI6IFwib3B0aW9uLXNjcm9sbF8zYWd0TyBvcHRpb25fMTlGWFdcIixcblx0XCJsYWJlbFwiOiBcImxhYmVsXzNITFBwXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8zVDlLX1wiLFxuXHRcIm9wdGlvbi10aGVtZVwiOiBcIm9wdGlvbi10aGVtZV8zOGJVZyBvcHRpb25fMTlGWFdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXBhbmVsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXBhbmVsX2FvT3Y3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTkwO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gIGhlaWdodDogNjBweDsgfVxcblxcbi5jb250YWluZXJfMmNMTkkge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uYmFja19wcHhRXyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1cHg7XFxuICB0b3A6IDA7IH1cXG4gIC5iYWNrX3BweFFfIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5iYWNrX3BweFFfIGEgc3BhbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5iYWNrX3BweFFfIHNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLnRpdGxlXzNOaGxpIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuXFxuLnByZWZlcmVuY2VfMXdQYTYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB0b3A6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXBhbmVsXCI6IFwidmlld2VyLXBhbmVsX2FvT3Y3XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyXzJjTE5JXCIsXG5cdFwiYmFja1wiOiBcImJhY2tfcHB4UV9cIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlXzNOaGxpXCIsXG5cdFwicHJlZmVyZW5jZVwiOiBcInByZWZlcmVuY2VfMXdQYTZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rUGFnZUxpc3QgZnJvbSAnLi9Cb29rUGFnZUxpc3QnXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgZmx1aWQ6IGJvb2xlYW5cbn1cblxuY2xhc3MgQm9va1BhZ2VXaXRoUmF3SHRtbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdDogYW55XG5cbiAgZ2V0Q29udGVudEh0bWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9va1BhZ2VMaXN0LmJvb2tQYWdlLmJvb2tQYWdlRG9tXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmbHVpZCwgbm9kZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICBub2RlSGVpZ2h0cz17W119XG4gICAgICAgIHBhZ2VDb3VudD17MX1cbiAgICAgICAgcGFnZUhlaWdodD17MH1cbiAgICAgICAgaXNDYWxjTW9kZVxuICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VMaXN0ID0gcmVmIH19XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZVdpdGhSYXdIdG1sXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4XG4gKiovIiwiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9hZGluZy5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFja2Ryb3A/OiBib29sZWFuXG4gIHRleHQ/OiBzdHJpbmdcbiAgY2VudGVyPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0LCBjZW50ZXIgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHdyYXBDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2xvYWRpbmctd3JhcC0tY2VudGVyJzogY2VudGVyLFxuICAgICAgJ2xvYWRpbmctd3JhcCc6ICFjZW50ZXJcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXt3cmFwQ2xhc3N9PlxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJ0ZXh0LWxvYWRpbmdcIj57dGV4dH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuTG9hZGluZ1snZGVmYXVsdFByb3BzJ10gPSB7XG4gIHRleHQ6ICfliqDovb3kuK0gLi4uJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Mb2FkaW5nLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDZcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4udGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmxvYWRpbmctd3JhcF9odHlZeiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHQtbG9hZGluZ1wiOiBcInRleHQtbG9hZGluZ18zZWZxaFwiLFxuXHRcImxvYWRpbmctd3JhcFwiOiBcImxvYWRpbmctd3JhcF9odHlZelwiLFxuXHRcImxvYWRpbmctd3JhcC0tY2VudGVyXCI6IFwibG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA2XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDQ3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=