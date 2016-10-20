exports.ids = [1];
exports.modules = {

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _BookPageList = __webpack_require__(249);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(259);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(85);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(262);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(272);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _api = __webpack_require__(240);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _utils = __webpack_require__(88);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(238);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _selectors = __webpack_require__(223);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Loading = __webpack_require__(273);
	
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
	
	var styles = __webpack_require__(277);
	var Viewer = function (_Component) {
	    _inherits(Viewer, _Component);
	
	    function Viewer(props) {
	        _classCallCheck(this, Viewer);
	
	        var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));
	
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
	            var _props = this.props;
	            var isFetchingProgress = _props.isFetchingProgress;
	            var role = _props.session.user.role;
	
	            var progressDetermined = typeof isFetchingProgress !== 'undefined' || this.props.isFetchingProgress !== false;
	            if (progressDetermined && role !== 'visitor') {
	                this.setProgress(newProgress);
	            }
	        }
	    }, {
	        key: "handleViewerClick",
	        value: function handleViewerClick() {
	            if (this.state.isTouchMode) {
	                this.setState({
	                    showPanel: !this.state.showPanel,
	                    showPageInfo: !this.state.showPageInfo
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
	            var sessionDetermined = this.props.session.determined === false && nextProps.session.determined === true;
	            if (sessionDetermined && nextProps.session.user.role !== 'visitor') {
	                this.props.fetchProgress(this.bookId);
	            }
	            if (sessionDetermined && nextProps.session.user.role === 'visitor') {
	                this.props.initializeBookProgress();
	            }
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
	            var session = this.props.session;
	
	            this.props.loadBook(this.bookId, { withContent: true });
	            this.addEventListeners();
	            // 从其他页面直接进来的话 session 一开始就是确定的
	            if (session.determined && session.user.role !== 'visitor') {
	                this.props.fetchProgress(this.bookId);
	            }
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.removeEventListeners();
	            this.props.destroyBookProgress();
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
	                return _react2.default.createElement(_Loading2.default, { text: "书籍获取中", center: true });
	            }
	            if (this.state.isCalcMode) {
	                return _react2.default.createElement(_BookPageWithRawHtml2.default, { nodes: nodes, ref: function ref(_ref) {
	                        _this4.bookPageWithRawHtml = _ref;
	                    }, fluid: fluid });
	            } else {
	                // 移除了获取等待
	                // 一旦获取到进度，会使页面直接跳转过去
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
	    return {
	        book: book,
	        rawBookContent: _lodash2.default.get(book, 'content.raw', ''),
	        progress: state.components.viewer.bookProgress.percentage,
	        isFetchingProgress: state.components.viewer.bookProgress.isFetching,
	        session: state.session
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { loadBook: _actions.loadBook, fetchProgress: _actions.fetchProgress, openConfirmModal: _actions.openConfirmModal, initializeBookProgress: _actions.initializeBookProgress, destroyBookProgress: _actions.destroyBookProgress })(Viewer);

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(250);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(253);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(106);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(254);
	
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
	
	var styles = __webpack_require__(257);
	var BookPageList = function (_Component) {
	    _inherits(BookPageList, _Component);
	
	    function BookPageList(props) {
	        _classCallCheck(this, BookPageList);
	
	        var _this = _possibleConstructorReturn(this, (BookPageList.__proto__ || Object.getPrototypeOf(BookPageList)).call(this, props));
	
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
	        key: "scrollPage",
	        value: function scrollPage() {
	            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	            var pageHeight = props.pageHeight;
	            var initialPage = props.initialPage;
	            var initialProgress = props.initialProgress;
	
	            var _calcPages2 = this.calcPages();
	
	            var totalHeight = _calcPages2.totalHeight;
	
	            var scrollTop = 0;
	            if (initialProgress) {
	                scrollTop = totalHeight * initialProgress;
	            } else if (initialPage) {
	                scrollTop = pageHeight * (initialPage - 1);
	            }
	            document.body.scrollTop = scrollTop;
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps, nextState) {
	            var initialProgressChanged = this.props.initialProgress !== nextProps.initialProgress;
	            if (initialProgressChanged) {
	                this.scrollPage(nextProps);
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.scrollPage();
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
	            var _props2 = this.props;
	            var pageCount = _props2.pageCount;
	            var pageHeight = _props2.pageHeight;
	            var fluid = _props2.fluid;
	            var showPageInfo = _props2.showPageInfo;
	            var isCalcMode = _props2.isCalcMode;
	
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

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(106);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(251);
	var BookPage = function (_Component) {
	    _inherits(BookPage, _Component);
	
	    function BookPage() {
	        _classCallCheck(this, BookPage);
	
	        return _possibleConstructorReturn(this, (BookPage.__proto__ || Object.getPrototypeOf(BookPage)).apply(this, arguments));
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

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(252);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".content_deYS4 {\n  margin: 0 auto;\n  width: 550px;\n  position: relative;\n  overflow: hidden;\n  color: #666;\n  line-height: 1.9; }\n  .content_deYS4 p {\n    margin: 0;\n    min-height: 25px; }\n\n.page_26Jj7 {\n  display: block;\n  width: 100%;\n  overflow: hidden; }\n\n.page--fluid_20eQM { }\n  .page--fluid_20eQM .content_deYS4 {\n    width: 100%;\n    padding: 0 20px; }\n\n.page--init_1VHVM {\n  position: relative;\n  height: auto; }\n  .page--init_1VHVM .content_deYS4 {\n    height: auto; }\n\n.page-no_2_187 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-top: 1px solid #e6e6e6;\n  padding: 0 10px;\n  color: #e6e6e6;\n  font-size: 0.8rem; }\n", ""]);
	
	// exports
	exports.locals = {
		"content": "content_deYS4",
		"page": "page_26Jj7",
		"page--fluid": "page--fluid_20eQM page_26Jj7",
		"page--init": "page--init_1VHVM",
		"page-no": "page-no_2_187"
	};

/***/ },

/***/ 253:
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

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(255);
	var ViewerScrollbar = function (_Component) {
	    _inherits(ViewerScrollbar, _Component);
	
	    function ViewerScrollbar(props) {
	        _classCallCheck(this, ViewerScrollbar);
	
	        return _possibleConstructorReturn(this, (ViewerScrollbar.__proto__ || Object.getPrototypeOf(ViewerScrollbar)).call(this, props));
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

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(256);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollbar_3nI1M {\n  width: 2px;\n  min-height: 400px;\n  position: fixed;\n  right: 40px;\n  top: 100px; }\n  .scrollbar_3nI1M:hover .button_1ys08 {\n    display: block; }\n\n.track_3l7Dy {\n  width: 2px;\n  background: #c4c4c4;\n  border-radius: 3px;\n  position: absolute;\n  left: 8px;\n  top: 0;\n  z-index: 1; }\n\n.track--past_2_8Sr {\n  background: #5866db;\n  z-index: 2; }\n\n.button_1ys08 {\n  width: 20px;\n  height: 20px;\n  background: #1B267F;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  position: absolute;\n  left: 0;\n  top: 84px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 3;\n  display: none; }\n\n.loc-info_15nWB {\n  text-align: center;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  background: #222;\n  color: #ddd;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  padding: 7px 15px; }\n\n.sub-info_3bYj5 {\n  font-size: 0.8rem;\n  color: #aaa; }\n", ""]);
	
	// exports
	exports.locals = {
		"scrollbar": "scrollbar_3nI1M",
		"button": "button_1ys08",
		"track": "track_3l7Dy",
		"track--past": "track--past_2_8Sr track_3l7Dy",
		"loc-info": "loc-info_15nWB",
		"sub-info": "sub-info_3bYj5"
	};

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(258);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_2I79Z {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_Ba_RX {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_2I79Z",
		"pages--fluid": "pages--fluid_Ba_RX pages_2I79Z"
	};

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(260);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(261);
	
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

/***/ 260:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 261:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(69);
	
	var _Icon = __webpack_require__(104);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(184);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(263);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(270);
	var ViewerPanel = function (_Component) {
	    _inherits(ViewerPanel, _Component);
	
	    function ViewerPanel(props) {
	        _classCallCheck(this, ViewerPanel);
	
	        var _this = _possibleConstructorReturn(this, (ViewerPanel.__proto__ || Object.getPrototypeOf(ViewerPanel)).call(this, props));
	
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

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _Switcher = __webpack_require__(264);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(268);
	var ViewerPreference = function (_Component) {
	    _inherits(ViewerPreference, _Component);
	
	    function ViewerPreference(props) {
	        _classCallCheck(this, ViewerPreference);
	
	        return _possibleConstructorReturn(this, (ViewerPreference.__proto__ || Object.getPrototypeOf(ViewerPreference)).call(this, props));
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

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(265);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
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
	
	var styles = __webpack_require__(266);
	var Switcher = function (_Component) {
	    _inherits(Switcher, _Component);
	
	    function Switcher(props) {
	        _classCallCheck(this, Switcher);
	
	        return _possibleConstructorReturn(this, (Switcher.__proto__ || Object.getPrototypeOf(Switcher)).call(this, props));
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

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(267);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(269);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-preference_kLYVW {\n  position: absolute;\n  right: 0;\n  top: 60px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden; }\n\n.option_3oCQo {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_3oCQo:last-child {\n    border: none; }\n\n.option-font-size_12HR2 {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_12HR2 span {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n  .option-font-size_12HR2 span:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n\n.option-scroll_2EQ0n {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_2EQ0n .label_iDRgB {\n    float: left; }\n  .option-scroll_2EQ0n .switcher_37lfk {\n    float: right; }\n\n.option-theme_4kqAY {\n  padding: 5px 0; }\n  .option-theme_4kqAY span {\n    border-radius: 50%;\n    border: 2px solid #ddd;\n    text-indent: -999em;\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    cursor: pointer; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-preference": "viewer-preference_kLYVW",
		"option": "option_3oCQo",
		"option-font-size": "option-font-size_12HR2 option_3oCQo",
		"option-scroll": "option-scroll_2EQ0n option_3oCQo",
		"label": "label_iDRgB",
		"switcher": "switcher_37lfk",
		"option-theme": "option-theme_4kqAY option_3oCQo"
	};

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(271);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-panel_107MY {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 990;\n  background: #222;\n  color: #fff;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);\n  height: 60px; }\n\n.container_3L78R {\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  height: 60px;\n  line-height: 60px;\n  position: relative; }\n\n.back_1mVrC {\n  position: absolute;\n  left: 5px;\n  top: 0; }\n  .back_1mVrC a {\n    color: #fff;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px;\n    overflow: hidden; }\n    .back_1mVrC a span {\n      float: left;\n      margin-right: 5px; }\n  .back_1mVrC span {\n    line-height: 30px;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px; }\n\n.title_3MIpP {\n  font-size: 1.2rem; }\n\n.preference_2JQRi {\n  position: absolute;\n  right: 15px;\n  top: 0;\n  cursor: pointer;\n  display: none; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-panel": "viewer-panel_107MY",
		"container": "container_3L78R",
		"back": "back_1mVrC",
		"title": "title_3MIpP",
		"preference": "preference_2JQRi"
	};

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(249);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookPageWithRawHtml = function (_Component) {
	    _inherits(BookPageWithRawHtml, _Component);
	
	    function BookPageWithRawHtml(props) {
	        _classCallCheck(this, BookPageWithRawHtml);
	
	        return _possibleConstructorReturn(this, (BookPageWithRawHtml.__proto__ || Object.getPrototypeOf(BookPageWithRawHtml)).call(this, props));
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

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(274);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(106);
	
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
	
	var styles = __webpack_require__(275);
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading(props) {
	        _classCallCheck(this, Loading);
	
	        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));
	
	        _this.state = {
	            dynamicText: ''
	        };
	        return _this;
	    }
	
	    _createClass(Loading, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            this.intervalId = setInterval(function () {
	                if (_this2.state.dynamicText.length === 3) {
	                    _this2.setState({ dynamicText: '' });
	                } else {
	                    _this2.setState({
	                        dynamicText: _this2.state.dynamicText + '.'
	                    });
	                }
	            }, 500);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            clearInterval(this.intervalId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var text = _props.text;
	            var center = _props.center;
	            var dynamicText = this.state.dynamicText;
	
	            var wrapClass = (0, _classnames2.default)({
	                'loading-wrap--center': center,
	                'loading-wrap': !center
	            });
	            return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
	        }
	    }]);
	
	    return Loading;
	}(_react.Component);
	Loading = __decorate([(0, _reactCssModules2.default)(styles)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(276);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(278);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VMaXN0LnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2Uuc2Nzcz8wZWViIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnNjc3M/NDIyZCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlTGlzdC5zY3NzPzE5N2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlTGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2UudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzcz8yOGQwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnNjc3M/YTZhZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzPzEwZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIuc2Nzcz9kNWZmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUVlOzs7O0FBQzdDOztLQUFzQzs7QUFDK0U7O0FBQ3RHOzs7O0FBQzRCOzs7O0FBQ2dCOzs7O0FBQ3hCOzs7O0FBQ047Ozs7QUFDTDs7OztBQUN5Qjs7OztBQUNqRDs7S0FBMkM7O0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzVDLEtBQVksU0FBVSxvQkFBaUI7QUEyQnZDO0FBQThCOztBQUU1QixxQkFBaUI7QUFDZjs7cUhBQVk7O0FBRVIsZUFBTyxTQUFRLE1BQU8sT0FBRztBQUN6QixlQUFNO0FBQ0Msd0JBQU87QUFDTix5QkFBTTtBQUNMLDBCQUFJO0FBQ1Ysb0JBQUk7QUFDVyxtQ0FBTztBQUN0QixvQkFBTztBQUNELDBCQUNaO0FBUlk7QUFTVCxlQUFrQixvQkFBTyxNQUFrQixrQkFBVztBQUN0RCxlQUFzQix3QkFBTyxNQUFzQixzQkFBVztBQUM5RCxlQUFxQix1QkFBTyxNQUFxQixxQkFBVztBQUM1RCxlQUFhLGVBQU8sTUFBYSxhQUFXO0FBQzVDLGVBQXNCLHlDQUFhLFNBQUssTUFBYSxjQUFLO0FBQ3JELHNCQUVYO0FBSGtFLFVBQWxDOztBQVNyQjs7Ozs7QUFDSCxvQkFBTSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUN6QztBQUVXOzs7O0FBQ0gsb0JBQU0sZ0JBQWdCLGdCQUFLLEtBQU0sUUFDekM7QUFFVzs7O3FD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QUE2Q1osU0FBZ0I7QUFDakIsV0FHTjtBQUowQjttQkFJSixROzs7Ozs7OztBQy9EdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxnREFBK0MsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGdCQUFnQixFQUFFLHlCQUF5QixtQkFBbUIsMEJBQTBCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyx1QkFBdUIsRUFBRTs7QUFFelU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDWEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMscUJBQXFCLEVBQUU7O0FBRTFEIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Cb29rUGFnZUxpc3QnXG5pbXBvcnQgKiBhcyB2aWV3ZXJVdGlscyBmcm9tICcuL1ZpZXdlci51dGlscydcbmltcG9ydCB7IGxvYWRCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuQ29uZmlybU1vZGFsLCBpbml0aWFsaXplQm9va1Byb2dyZXNzLCBkZXN0cm95Qm9va1Byb2dyZXNzIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBWaWV3ZXJQYW5lbCBmcm9tICcuL2NvbXBvbmVudHMvVmlld2VyUGFuZWwnXG5pbXBvcnQgQm9va1BhZ2VXaXRoUmF3SHRtbCBmcm9tICcuL2NvbXBvbmVudHMvQm9va1BhZ2VXaXRoUmF3SHRtbCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlci5zY3NzJylcblxuaW50ZXJmYWNlIEFsbFByb3BzIHtcbiAgbG9hZEJvb2s6IGxvYWRCb29rXG4gIGJvb2s6IGFueVxuICByYXdCb29rQ29udGVudDogc3RyaW5nXG4gIGZldGNoUHJvZ3Jlc3M6IChib29rSWQ6IHN0cmluZykgPT4gdm9pZFxuICBwcm9ncmVzczogbnVtYmVyXG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIHNlc3Npb246IGFueVxuICBpc0ZldGNoaW5nUHJvZ3Jlc3M6IGJvb2xlYW5cbiAgaW5pdGlhbGl6ZUJvb2tQcm9ncmVzczogYW55XG4gIGRlc3Ryb3lCb29rUHJvZ3Jlc3M6IGFueVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93UGFuZWw/OiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIG5vZGVIZWlnaHRzPzogbnVtYmVyW11cbiAgbm9kZXM/OiBzdHJpbmdbXVxuICBzaG93Vmlld2VyUHJlZmVyZW5jZT86IGJvb2xlYW5cbiAgZmx1aWQ/OiBib29sZWFuXG4gIGlzVG91Y2hNb2RlPzogYm9vbGVhblxuICBzaG93UGFnZUluZm8/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlciBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5ib29rSWQgPSBwcm9wcy5wYXJhbXMuaWRcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgIGlzQ2FsY01vZGU6IHRydWUsXG4gICAgICBub2RlSGVpZ2h0czogW10sXG4gICAgICBub2RlczogW10sXG4gICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2UsXG4gICAgICBmbHVpZDogZmFsc2UsXG4gICAgICBpc1RvdWNoTW9kZTogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va0lkOiBzdHJpbmdcbiAgYm9va1BhZ2VXaXRoUmF3SHRtbDogYW55XG4gIGRlYm91bmRlZEhhbmRsZVJlc2l6ZTogYW55XG5cbiAgaXNWaWV3Rmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBpc1RvdWNoTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIHNldFByb2dyZXNzKHBlcmNlbnRhZ2UpIHtcbiAgICBhcGkuc2V0UHJvZ3Jlc3ModGhpcy5ib29rSWQsIHsgcGVyY2VudGFnZSB9KVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ2FsY01vZGUgJiYgIXRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgbGV0IGRUb1NjcmVlblJpZ2h0ID0gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggLSBldmVudC5wYWdlWFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiB5IDwgOTAsXG4gICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UobmV3UHJvZ3Jlc3MpIHtcbiAgICBjb25zdCB7IGlzRmV0Y2hpbmdQcm9ncmVzcywgc2Vzc2lvbjogeyB1c2VyOiB7IHJvbGUgfSB9IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcHJvZ3Jlc3NEZXRlcm1pbmVkID0gdHlwZW9mIGlzRmV0Y2hpbmdQcm9ncmVzcyAhPT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wcm9wcy5pc0ZldGNoaW5nUHJvZ3Jlc3MgIT09IGZhbHNlXG5cbiAgICBpZiAocHJvZ3Jlc3NEZXRlcm1pbmVkICYmIHJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgdGhpcy5zZXRQcm9ncmVzcyhuZXdQcm9ncmVzcylcbiAgICB9XG4gIH1cblxuICBoYW5kbGVWaWV3ZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1RvdWNoTW9kZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dQYW5lbDogIXRoaXMuc3RhdGUuc2hvd1BhbmVsLFxuICAgICAgICBzaG93UGFnZUluZm86ICF0aGlzLnN0YXRlLnNob3dQYWdlSW5mb1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjRG9tKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDYWxjTW9kZTogdHJ1ZVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sLmdldENvbnRlbnRIdG1sKClcbiAgICAgIGNvbnN0IG5vZGVIZWlnaHRzID0gdmlld2VyVXRpbHMuZ2V0Tm9kZUhlaWdodHMoY29udGVudEh0bWwuY2hpbGROb2RlcylcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxjIGRvbmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVIZWlnaHRzLFxuICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCBzaG91ZENhbGNOb2RlcyA9ICh0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50ID09PSAnJyAmJiBuZXh0UHJvcHMucmF3Qm9va0NvbnRlbnQgIT09ICcnKVxuICAgICAgfHwgdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yYXdCb29rQ29udGVudCAhPT0gJydcblxuICAgIGNvbnN0IHNlc3Npb25EZXRlcm1pbmVkID0gdGhpcy5wcm9wcy5zZXNzaW9uLmRldGVybWluZWQgPT09IGZhbHNlICYmIG5leHRQcm9wcy5zZXNzaW9uLmRldGVybWluZWQgPT09IHRydWVcblxuICAgIGlmIChzZXNzaW9uRGV0ZXJtaW5lZCAmJiBuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgIT09ICd2aXNpdG9yJykge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaFByb2dyZXNzKHRoaXMuYm9va0lkKVxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uRGV0ZXJtaW5lZCAmJiBuZXh0UHJvcHMuc2Vzc2lvbi51c2VyLnJvbGUgPT09ICd2aXNpdG9yJykge1xuICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplQm9va1Byb2dyZXNzKClcbiAgICB9XG5cbiAgICBpZiAoc2hvdWRDYWxjTm9kZXMpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdmlld2VyVXRpbHMubWFya2Rvd25Ub05vZGVTdHJpbmdMaXN0KG5leHRQcm9wcy5yYXdCb29rQ29udGVudClcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVzLFxuICAgICAgICBmbHVpZDogdGhpcy5pc1ZpZXdGbHVpZCgpLFxuICAgICAgICBpc1RvdWNoTW9kZTogdGhpcy5pc1RvdWNoTW9kZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IGhhc0Jvb2tOb2Rlc0xvYWRlZCA9IHRoaXMuc3RhdGUubm9kZXMubGVuZ3RoICE9PSAwICYmIHByZXZTdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDBcbiAgICBjb25zdCB2aWV3Q2hhbmdlZCA9IHRoaXMuc3RhdGUuZmx1aWQgIT09IHByZXZTdGF0ZS5mbHVpZFxuXG4gICAgaWYgKGhhc0Jvb2tOb2Rlc0xvYWRlZCB8fCB2aWV3Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjRG9tKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHNlc3Npb24gfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnByb3BzLmxvYWRCb29rKHRoaXMuYm9va0lkLCB7IHdpdGhDb250ZW50OiB0cnVlIH0pXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAvLyDku47lhbbku5bpobXpnaLnm7TmjqXov5vmnaXnmoTor50gc2Vzc2lvbiDkuIDlvIDlp4vlsLHmmK/noa7lrprnmoRcbiAgICBpZiAoc2Vzc2lvbi5kZXRlcm1pbmVkICYmIHNlc3Npb24udXNlci5yb2xlICE9PSAndmlzaXRvcicpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9ncmVzcyh0aGlzLmJvb2tJZClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLnByb3BzLmRlc3Ryb3lCb29rUHJvZ3Jlc3MoKVxuICB9XG5cbiAgcmVuZGVyVmlld1BhbmVsKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5zaG93UGFuZWwgfHwgdGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZSkgJiYgKFxuICAgICAgPFZpZXdlclBhbmVsXG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmJvb2sudGl0bGV9XG4gICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlPXt0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlfVxuICAgICAgICBvblByZWZWaXNpYmlsaXR5Q2hhbmdlPXtuZXdWaXNpYmlsaXR5ID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBuZXdWaXNpYmlsaXR5XG4gICAgICAgICAgfSlcbiAgICAgICAgfSB9XG4gICAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyQm9vaygpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBub2RlSGVpZ2h0cywgZmx1aWQsIHNob3dQYWdlSW5mbyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyB0ZXh0PVwi5Lmm57GN6I635Y+W5LitXCIgY2VudGVyIC8+XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNDYWxjTW9kZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJvb2tQYWdlV2l0aFJhd0h0bWxcbiAgICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlV2l0aFJhd0h0bWwgPSByZWYgfSB9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOenu+mZpOS6huiOt+WPluetieW+hVxuICAgICAgLy8g5LiA5pem6I635Y+W5Yiw6L+b5bqm77yM5Lya5L2/6aG16Z2i55u05o6l6Lez6L2s6L+H5Y67XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgICAgbm9kZUhlaWdodHM9e25vZGVIZWlnaHRzfVxuICAgICAgICAgIG5vZGVzPXt0aGlzLnN0YXRlLm5vZGVzfVxuICAgICAgICAgIHBhZ2VDb3VudD17NX1cbiAgICAgICAgICBpbml0aWFsUHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgIHBhZ2VIZWlnaHQ9ezkwMH1cbiAgICAgICAgICBvblByb2dyZXNzQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICBzaG93UGFnZUluZm89e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciBib2R5Q2xhc3M9XCJ2aWV3ZXJcIiB0aXRsZT17dGhpcy5wcm9wcy5ib29rLnRpdGxlfT5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVZpZXdlckNsaWNrfSBvbk1vdXNlTW92ZT17dGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmV9ID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJWaWV3UGFuZWwoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJCb29rKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBib29rSWQgPSBvd25Qcm9wcy5wYXJhbXMuaWRcbiAgY29uc3QgYm9vayA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGJvb2tJZCkoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICBib29rLFxuICAgIHJhd0Jvb2tDb250ZW50OiBfLmdldChib29rLCAnY29udGVudC5yYXcnLCAnJyksXG4gICAgcHJvZ3Jlc3M6IHN0YXRlLmNvbXBvbmVudHMudmlld2VyLmJvb2tQcm9ncmVzcy5wZXJjZW50YWdlLFxuICAgIGlzRmV0Y2hpbmdQcm9ncmVzczogc3RhdGUuY29tcG9uZW50cy52aWV3ZXIuYm9va1Byb2dyZXNzLmlzRmV0Y2hpbmcsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBBbGxQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBsb2FkQm9vaywgZmV0Y2hQcm9ncmVzcywgb3BlbkNvbmZpcm1Nb2RhbCwgaW5pdGlhbGl6ZUJvb2tQcm9ncmVzcywgZGVzdHJveUJvb2tQcm9ncmVzcyB9XG4pKFZpZXdlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rUGFnZSBmcm9tICcuL0Jvb2tQYWdlJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9Cb29rUGFnZUxpc3QudXRpbHMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgVmlld2VyU2Nyb2xsYmFyIGZyb20gJy4vVmlld2VyU2Nyb2xsYmFyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rUGFnZUxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG4gIHBhZ2VDb3VudDogbnVtYmVyXG4gIGlzU2Nyb2xsTW9kZT86IGJvb2xlYW5cbiAgaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgaW5pdGlhbFByb2dyZXNzPzogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBvblByb2dyZXNzQ2hhbmdlPzogKG5ld1Byb2dyZXNzOiBudW1iZXIpID0+IHZvaWRcbiAgZmx1aWQ6IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2Nyb2xsVG9wPzogbnVtYmVyXG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMjAwLCB7XG4gICAgICBtYXhXYWl0OiAxMDAwXG4gICAgfSlcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdERvbTogSFRNTFVMaXN0RWxlbWVudFxuICBib29rUGFnZTogYW55XG4gIGRlYm91bmRlZEhhbmRsZVNjcm9sbDogYW55XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0NhbGNNb2RlKSB7XG4gICAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgICAgY29uc3QgeyBvblByb2dyZXNzQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHV0aWxzLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQsIHBhZ2VzLmxlbmd0aClcblxuICAgICAgaWYgKG9uUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25Qcm9ncmVzc0NoYW5nZShzY3JvbGxUb3AgLyB0b3RhbEhlaWdodClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpXG4gIH1cblxuICBjYWxjUGFnZXMoKSB7XG4gICAgLy8gdG9kbzog5re75Yqg57yT5a2YXG4gICAgY29uc3QgeyBub2RlSGVpZ2h0cywgbm9kZXMsIHBhZ2VIZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYWdlcyA9IHV0aWxzLmdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KVxuXG4gICAgcmV0dXJuIHsgcGFnZXMsIHRvdGFsSGVpZ2h0OiBwYWdlcy5sZW5ndGggKiBwYWdlSGVpZ2h0IH1cbiAgfVxuXG4gIHNjcm9sbFBhZ2UocHJvcHMgPSB0aGlzLnByb3BzKSB7XG4gICAgY29uc3QgeyBwYWdlSGVpZ2h0LCBpbml0aWFsUGFnZSwgaW5pdGlhbFByb2dyZXNzIH0gPSBwcm9wc1xuICAgIGNvbnN0IHsgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBsZXQgc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKGluaXRpYWxQcm9ncmVzcykge1xuICAgICAgc2Nyb2xsVG9wID0gdG90YWxIZWlnaHQgKiBpbml0aWFsUHJvZ3Jlc3NcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxQYWdlKSB7XG4gICAgICBzY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogKGluaXRpYWxQYWdlIC0gMSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxQcm9ncmVzc0NoYW5nZWQgPSB0aGlzLnByb3BzLmluaXRpYWxQcm9ncmVzcyAhPT0gbmV4dFByb3BzLmluaXRpYWxQcm9ncmVzc1xuXG4gICAgaWYgKGluaXRpYWxQcm9ncmVzc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsUGFnZShuZXh0UHJvcHMpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zY3JvbGxQYWdlKClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIHRvdGFsSGVpZ2h0IH0gPSB0aGlzLmNhbGNQYWdlcygpXG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcGFnZUNvdW50LCBwYWdlSGVpZ2h0LCBmbHVpZCwgc2hvd1BhZ2VJbmZvLCBpc0NhbGNNb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZXMnOiAhZmx1aWQsXG4gICAgICAncGFnZXMtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgbGV0IHN0YXJ0UGFnZUluZGV4XG4gICAgbGV0IGVuZFBhZ2VJbmRleFxuXG4gICAgaWYgKGlzQ2FsY01vZGUpIHtcbiAgICAgIHN0YXJ0UGFnZUluZGV4ID0gMFxuICAgICAgZW5kUGFnZUluZGV4ID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFBhZ2VJbmRleCA9IGN1cnJlbnRQYWdlIC0gTWF0aC5jZWlsKHBhZ2VDb3VudCAvIDIpXG4gICAgICBzdGFydFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4IDwgMCA/IDAgOiBzdGFydFBhZ2VJbmRleFxuXG4gICAgICBlbmRQYWdlSW5kZXggPSBzdGFydFBhZ2VJbmRleCArIHBhZ2VDb3VudFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdERvbSA9IHJlZiB9IH0gc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IGhlaWdodDogdG90YWxIZWlnaHQgfX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgXy5zbGljZShwYWdlcywgc3RhcnRQYWdlSW5kZXgsIGVuZFBhZ2VJbmRleCkubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCb29rUGFnZVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlID0gcmVmIH0gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxWaWV3ZXJTY3JvbGxiYXJcbiAgICAgICAgICB2aXNpYmxlPXtzaG93UGFnZUluZm99XG4gICAgICAgICAgY3VycmVudD17Y3VycmVudFBhZ2V9XG4gICAgICAgICAgdG90YWw9e3BhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vQm9va1BhZ2Uuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwYWdlOiB1dGlscy5UUGFnZVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgZmx1aWQ6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgYm9va1BhZ2VEb206IEhUTUxEaXZFbGVtZW50XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZTogeyBub2RlcywgbWV0YSB9LCBwYWdlSGVpZ2h0LCBmbHVpZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHBhZ2VIZWlnaHQgKiAobWV0YS5wYWdlTm8gLSAxKSxcbiAgICAgIGhlaWdodDogcGFnZUhlaWdodCB8fCAnYXV0bydcbiAgICB9XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZSc6ICFmbHVpZCxcbiAgICAgICdwYWdlLS1mbHVpZCc6IGZsdWlkXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgc3R5bGVOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IG1ldGEub2Zmc2V0IH19XG4gICAgICAgICAgc3R5bGVOYW1lPVwiY29udGVudFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBub2Rlcy5qb2luKCcnKSB9fVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZURvbSA9IHJlZiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1ub1wiPnttZXRhLnBhZ2VOb308L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2UudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rUGFnZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnRfZGVZUzQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogNTUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICM2NjY7XFxuICBsaW5lLWhlaWdodDogMS45OyB9XFxuICAuY29udGVudF9kZVlTNCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAyNXB4OyB9XFxuXFxuLnBhZ2VfMjZKajcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucGFnZS0tZmx1aWRfMjBlUU0geyB9XFxuICAucGFnZS0tZmx1aWRfMjBlUU0gLmNvbnRlbnRfZGVZUzQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4OyB9XFxuXFxuLnBhZ2UtLWluaXRfMVZIVk0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuICAucGFnZS0taW5pdF8xVkhWTSAuY29udGVudF9kZVlTNCB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblxcbi5wYWdlLW5vXzJfMTg3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiAjZTZlNmU2O1xcbiAgZm9udC1zaXplOiAwLjhyZW07IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjb250ZW50XCI6IFwiY29udGVudF9kZVlTNFwiLFxuXHRcInBhZ2VcIjogXCJwYWdlXzI2Smo3XCIsXG5cdFwicGFnZS0tZmx1aWRcIjogXCJwYWdlLS1mbHVpZF8yMGVRTSBwYWdlXzI2Smo3XCIsXG5cdFwicGFnZS0taW5pdFwiOiBcInBhZ2UtLWluaXRfMVZIVk1cIixcblx0XCJwYWdlLW5vXCI6IFwicGFnZS1ub18yXzE4N1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG4vLyBsb25nIHBhcmFncmFwaCBzaXR1YXRpb24gZG9lc24ndCBzZWVtIHRvIGFmZmVjdCB0aGlzIGZ1bmN0aW9uXG4vLyBvZmZzZXQgZGlzdGFuY2UgaXMgYWx3YXlzIG5lZ3RpdmUgb3IgemVyb1xuLy8gdGhlIGluZGV4IHdpbGwgYmUgb2YgdGhlIHBhcmFncmFwaCB3aXRoIHRoaXMgb2Zmc2V0IGF0IHRoZSBlbmRcbmZ1bmN0aW9uIGdldFBhZ2VPZmZzZXQoe3BhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHN9OiB7XG4gIHBhZ2VJbmRleDogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IG5vZGVJbmRleCA9IDBcbiAgbGV0IG5vZGVTdGFydEluZGV4XG5cbiAgaWYgKHBhZ2VJbmRleCAhPT0gMCkge1xuICAgIGxldCBub2RlSGVpZ2h0U3VtID0gMFxuICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgKiBwYWdlSW5kZXgpIHtcbiAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbbm9kZUluZGV4XVxuICAgICAgbm9kZUluZGV4KytcbiAgICB9XG4gICAgb2Zmc2V0ID0gbm9kZUhlaWdodFN1bSAtIG5vZGVIZWlnaHRzW25vZGVJbmRleCAtIDFdIC0gcGFnZUluZGV4ICogcGFnZUhlaWdodFxuICAgIG5vZGVTdGFydEluZGV4ID0gbm9kZUluZGV4IC0gMVxuICB9IGVsc2Uge1xuICAgIG5vZGVTdGFydEluZGV4ID0gMFxuICB9XG5cbiAgcmV0dXJuIHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9XG59XG5cblxuZnVuY3Rpb24gZ2V0Tm9kZXNPZlBhZ2Uoe3BhZ2VJbmRleCwgbm9kZXMsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBub2RlczogYW55XG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBub2RlSGVpZ2h0czogbnVtYmVyW11cbn0pIHtcbiAgbGV0IHsgb2Zmc2V0LCBub2RlU3RhcnRJbmRleCB9ID0gZ2V0UGFnZU9mZnNldCh7IHBhZ2VJbmRleCwgcGFnZUhlaWdodCwgbm9kZUhlaWdodHMgfSlcbiAgbGV0IG5vZGVJbmRleCA9IG5vZGVTdGFydEluZGV4XG4gIGxldCBub2RlRW5kSW5kZXhcbiAgbGV0IHBhZ2VOb2RlcyA9IFtdXG5cbiAgbGV0IG5vZGVIZWlnaHRTdW0gPSBvZmZzZXQgKyBub2RlSGVpZ2h0c1tub2RlU3RhcnRJbmRleF1cblxuICBub2RlSW5kZXgrK1xuICBpZiAobm9kZUhlaWdodFN1bSA8IHBhZ2VIZWlnaHQpIHtcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICYmIG5vZGVJbmRleCAhPT0gbm9kZXMubGVuZ3RoKSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG5vZGVFbmRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlRW5kSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICB9XG5cbiAgZm9yIChsZXQgaSA9IG5vZGVTdGFydEluZGV4OyBpIDw9IG5vZGVFbmRJbmRleCAmJiBpIDw9IG5vZGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIHBhZ2VOb2Rlcy5wdXNoKG5vZGVzW2ldKVxuICB9XG5cbiAgcmV0dXJuIHsgcGFnZU5vZGVzLCBvZmZzZXQgfVxufVxuXG5cbmV4cG9ydCB0eXBlIFRQYWdlID0ge1xuICBub2Rlczogc3RyaW5nW11cbiAgbWV0YTogYW55XG59XG5leHBvcnQgdHlwZSBUUGFnZUxpc3QgPSBUUGFnZVtdXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBOb2Rlc0J5UGFnZShub2RlczogYW55LCBub2RlSGVpZ2h0czogbnVtYmVyW10sIHBhZ2VIZWlnaHQ6IG51bWJlcik6IFRQYWdlTGlzdCB7XG4gIGxldCBwYWdlcyA9IFtdXG4gIGxldCBwYWdlSGVpZ2h0U3VtID0gbm9kZUhlaWdodHMucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKVxuICBsZXQgcGFnZVN1bSA9IE1hdGguY2VpbChwYWdlSGVpZ2h0U3VtIC8gcGFnZUhlaWdodClcblxuICBjb25zb2xlLmxvZygndG9kbzogZ3JvdXAgbm9kZXMnKVxuICAvLyBub2RlcyA9IG5vZGVzLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgLy8gICBub2RlLnByb3BzLmluZGV4ID0gaW5kZXhcbiAgLy8gICByZXR1cm4gbm9kZVxuICAvLyB9KVxuXG4gIGlmIChub2RlSGVpZ2h0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIG5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IDEsXG4gICAgICAgIG9mZnNldDogMFxuICAgICAgfVxuICAgIH1dXG4gIH1cblxuICAvLyBmaW5hbGx5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZVN1bTsgaSsrKSB7XG4gICAgY29uc3QgeyBwYWdlTm9kZXMsIG9mZnNldCB9ID0gZ2V0Tm9kZXNPZlBhZ2UoeyBwYWdlSW5kZXg6IGksIG5vZGVzLCBub2RlSGVpZ2h0cywgcGFnZUhlaWdodCB9KVxuXG4gICAgcGFnZXMucHVzaCh7XG4gICAgICBub2RlczogcGFnZU5vZGVzLFxuICAgICAgbWV0YToge1xuICAgICAgICBwYWdlTm86IGkgKyAxLFxuICAgICAgICBvZmZzZXRcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBwYWdlc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudGFnZVRvUGFnZShwOiBudW1iZXIsIHBhZ2VTdW06IG51bWJlcikge1xuICBpZiAocCA+IDEpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXcm9uZyBwYXJhbWV0ZXIhJylcbiAgICByZXR1cm4gbnVsbFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUludCgocCAqIHBhZ2VTdW0pIGFzIGFueSkgKyAxXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZUxpc3QudXRpbHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVmlld2VyU2Nyb2xsYmFyLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjdXJyZW50OiBudW1iZXJcbiAgdG90YWw6IG51bWJlclxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCwgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChjdXJyZW50IC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy52aXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsb2MtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+PHN0cm9uZz57Y3VycmVudH08L3N0cm9uZz4ve3RvdGFsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLWluZm9cIj57cGVyY2VudGFnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclNjcm9sbGJhci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGxiYXJfM25JMU0ge1xcbiAgd2lkdGg6IDJweDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDEwMHB4OyB9XFxuICAuc2Nyb2xsYmFyXzNuSTFNOmhvdmVyIC5idXR0b25fMXlzMDgge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmFja18zbDdEeSB7XFxuICB3aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDhweDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4udHJhY2stLXBhc3RfMl84U3Ige1xcbiAgYmFja2dyb3VuZDogIzU4NjZkYjtcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4uYnV0dG9uXzF5czA4IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDg0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5sb2MtaW5mb18xNW5XQiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBhZGRpbmc6IDdweCAxNXB4OyB9XFxuXFxuLnN1Yi1pbmZvXzNiWWo1IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNhYWE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzY3JvbGxiYXJcIjogXCJzY3JvbGxiYXJfM25JMU1cIixcblx0XCJidXR0b25cIjogXCJidXR0b25fMXlzMDhcIixcblx0XCJ0cmFja1wiOiBcInRyYWNrXzNsN0R5XCIsXG5cdFwidHJhY2stLXBhc3RcIjogXCJ0cmFjay0tcGFzdF8yXzhTciB0cmFja18zbDdEeVwiLFxuXHRcImxvYy1pbmZvXCI6IFwibG9jLWluZm9fMTVuV0JcIixcblx0XCJzdWItaW5mb1wiOiBcInN1Yi1pbmZvXzNiWWo1XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Cb29rUGFnZUxpc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZXNfMkk3OVoge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlcy0tZmx1aWRfQmFfUlgge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlc1wiOiBcInBhZ2VzXzJJNzlaXCIsXG5cdFwicGFnZXMtLWZsdWlkXCI6IFwicGFnZXMtLWZsdWlkX0JhX1JYIHBhZ2VzXzJJNzlaXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8vIOaaguS4jeaUr+aMgeWMheWQq+WbvueJh+eahOiuoeeul1xuLy8g6K6h566X5rKh5pyJ562J5b6F5Zu+54mH5Yqg6L295a6M5oiQ77yM5omA5Lul57uT5p6c5piv5LiN5q2j56Gu55qEXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgY29uc29sZS5sb2coJ2RvbSByZWFkeSwgZ2V0Tm9kZUhlaWdodHMnKVxuICBsZXQgbm9kZXNIZWlnaHQgPSBbXVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChub2RlLmNsYXNzTmFtZSAhPT0gJ2diLWxpbmUnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIScpXG4gICAgfVxuICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpXG4gIH0pXG5cbiAgcmV0dXJuIG5vZGVzSGVpZ2h0XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdChtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zb2xlLmxvZygnc3RhcnQgbWQnKVxuICBsZXQgaHRtbCA9IG1hcmtlZChtYXJrZG93biwge1xuICAgIGdmbTogdHJ1ZSxcbiAgICBicmVha3M6IHRydWVcbiAgfSlcbiAgY29uc29sZS5sb2coJ2RvbmUgbWFya2VkJylcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGVcbiAgICAubWFwLmNhbGwoJChodG1sKSwgKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IDMgJiYgZWxlLm5vZGVWYWx1ZSA9PT0gJ1xcbicpIHtcbiAgICAgICAgLy8g56e76ZmkIGh0bWwg6YeM55qE5Zue6L2mXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ1AnKSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUuaW5uZXJIVE1MfTwvcD5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUub3V0ZXJIVE1MfTwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIobm9kZSA9PiBub2RlKVxuICAvLyBjb25zb2xlLmxvZyhub2RlcylcbiAgY29uc29sZS5sb2coJ2VuZCBtZCcpXG4gIHJldHVybiBub2Rlc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudXRpbHMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1hcmtlZFwiXG4gKiogbW9kdWxlIGlkID0gMjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvSWNvbidcbmltcG9ydCBGYWRlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUnXG5pbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuL1ZpZXdlclByZWZlcmVuY2UnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVmlld2VyUGFuZWwuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBib29sZWFuXG4gIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U6IChuZXdWaXNpYmlsaXR5OiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVByZWZDbGljayA9IHRoaXMuaGFuZGxlUHJlZkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVByZWZDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uUHJlZlZpc2liaWxpdHlDaGFuZ2UoIXRoaXMucHJvcHMuc2hvd1ZpZXdlclByZWZlcmVuY2UpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBzaG93Vmlld2VyUHJlZmVyZW5jZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImJhY2tcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmVmQ2xpY2t9IHN0eWxlTmFtZT1cInByZWZlcmVuY2VcIj5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwcmVmZXJlbmNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RmFkZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoXG4gICAgICAgICAgICAgICAgPFZpZXdlclByZWZlcmVuY2UgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhbmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1N3aXRjaGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlclByZWZlcmVuY2Uuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXByZWZlcmVuY2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLWZvbnQtc2l6ZVwiPlxuICAgICAgICAgICAgPHNwYW4+QS08L3NwYW4+PHNwYW4+QSs8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj7mu5rliqjmqKHlvI88L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoZXIgdmFsdWU9e3RydWV9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXRoZW1lXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJ319PnRoZW1lMTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNlZWUnfX0+dGhlbWUyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzIyMid9fT50aGVtZTM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuKShWaWV3ZXJQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnRzeFxuICoqLyIsImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJ1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJylcblxuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgb246IGJvb2xlYW5cbi8vIH1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKG5ld1ZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIH1bXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHZhbHVlOiBpc09uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc09uID09PSAnMScgfHwgaXNPbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzT24gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09uID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YXRlID0gQm9vbGVhbihpc09uKSA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHN0eWxlTmFtZT1cInN3aXRjaGVyLXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSlcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5rKh5pyJ57uZIG9wdGlvbnMg5pe25b+F6aG75L2/55So5biD5bCU5Z6L55qEIHZhbHVl77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9e2Bzd2l0Y2hlci0tJHtzdGF0ZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fc3dpdGNoZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zd2l0Y2hlci13cmFwXzNVTUFVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zd2l0Y2hlcl9HM240XywgLnN3aXRjaGVyLS1vZmZfMUVvT1UsIC5zd2l0Y2hlci0tb25fMnhpd08ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cXG5cXG4uc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDIwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjMmU0MGQyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3dpdGNoZXItd3JhcFwiOiBcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyX0czbjRfXCIsXG5cdFwic3dpdGNoZXItLW9mZlwiOiBcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcblx0XCJzd2l0Y2hlci0tb25cIjogXCJzd2l0Y2hlci0tb25fMnhpd09cIixcblx0XCJzd2l0Y2hlci1idXR0b25cIjogXCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcblx0XCJzd2l0Y2hlci10cmFja1wiOiBcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclByZWZlcmVuY2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wcmVmZXJlbmNlX2tMWVZXIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm9wdGlvbl8zb0NRbyB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbl8zb0NRbzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLm9wdGlvbi1mb250LXNpemVfMTJIUjIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLm9wdGlvbi1zY3JvbGxfMkVRMG4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzJFUTBuIC5sYWJlbF9pRFJnQiB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8yRVEwbiAuc3dpdGNoZXJfMzdsZmsge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4ub3B0aW9uLXRoZW1lXzRrcUFZIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICAub3B0aW9uLXRoZW1lXzRrcUFZIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wcmVmZXJlbmNlXCI6IFwidmlld2VyLXByZWZlcmVuY2Vfa0xZVldcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fM29DUW9cIixcblx0XCJvcHRpb24tZm9udC1zaXplXCI6IFwib3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiBvcHRpb25fM29DUW9cIixcblx0XCJvcHRpb24tc2Nyb2xsXCI6IFwib3B0aW9uLXNjcm9sbF8yRVEwbiBvcHRpb25fM29DUW9cIixcblx0XCJsYWJlbFwiOiBcImxhYmVsX2lEUmdCXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8zN2xma1wiLFxuXHRcIm9wdGlvbi10aGVtZVwiOiBcIm9wdGlvbi10aGVtZV80a3FBWSBvcHRpb25fM29DUW9cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9WaWV3ZXJQYW5lbC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wYW5lbF8xMDdNWSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5MDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gIGhlaWdodDogNjBweDsgfVxcblxcbi5jb250YWluZXJfM0w3OFIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfMW1WckMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwOyB9XFxuICAuYmFja18xbVZyQyBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAuYmFja18xbVZyQyBhIHNwYW4ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuYmFja18xbVZyQyBzcGFuIHtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDsgfVxcblxcbi50aXRsZV8zTUlwUCB7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5wcmVmZXJlbmNlXzJKUVJpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wYW5lbFwiOiBcInZpZXdlci1wYW5lbF8xMDdNWVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl8zTDc4UlwiLFxuXHRcImJhY2tcIjogXCJiYWNrXzFtVnJDXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTUlwUFwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzJKUVJpXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmNsYXNzIEJvb2tQYWdlV2l0aFJhd0h0bWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBib29rUGFnZUxpc3Q6IGFueVxuXG4gIGdldENvbnRlbnRIdG1sKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tQYWdlTGlzdC5ib29rUGFnZS5ib29rUGFnZURvbVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmx1aWQsIG5vZGVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2tQYWdlTGlzdFxuICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZUhlaWdodHM9e1tdfVxuICAgICAgICBwYWdlQ291bnQ9ezF9XG4gICAgICAgIHBhZ2VIZWlnaHQ9ezB9XG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdCA9IHJlZiB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VXaXRoUmF3SHRtbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4XG4gKiovIiwiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTG9hZGluZy5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFja2Ryb3A/OiBib29sZWFuXG4gIHRleHQ/OiBzdHJpbmdcbiAgY2VudGVyPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkeW5hbWljVGV4dD86IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuXG4gIGludGVydmFsSWQ6IE5vZGVKUy5UaW1lclxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGR5bmFtaWNUZXh0OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmR5bmFtaWNUZXh0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHluYW1pY1RleHQ6ICcnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkeW5hbWljVGV4dDogdGhpcy5zdGF0ZS5keW5hbWljVGV4dCArICcuJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGV4dCwgY2VudGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBkeW5hbWljVGV4dCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3Qgd3JhcENsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAnbG9hZGluZy13cmFwLS1jZW50ZXInOiBjZW50ZXIsXG4gICAgICAnbG9hZGluZy13cmFwJzogIWNlbnRlclxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e3dyYXBDbGFzc30+XG4gICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRleHQtbG9hZGluZ1wiPnt0ZXh0ICsgZHluYW1pY1RleHR9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbkxvYWRpbmdbJ2RlZmF1bHRQcm9wcyddID0ge1xuICB0ZXh0OiAn5Yqg6L295LitJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Mb2FkaW5nLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDZcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0LWxvYWRpbmdfM2VmcWgge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA1MHB4IDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM5OTk7IH1cXG5cXG4udGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmxvYWRpbmctd3JhcF9odHlZeiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRleHQtbG9hZGluZ1wiOiBcInRleHQtbG9hZGluZ18zZWZxaFwiLFxuXHRcImxvYWRpbmctd3JhcFwiOiBcImxvYWRpbmctd3JhcF9odHlZelwiLFxuXHRcImxvYWRpbmctd3JhcC0tY2VudGVyXCI6IFwibG9hZGluZy13cmFwLS1jZW50ZXJfM1BFSWhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA2XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9WaWV3ZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=