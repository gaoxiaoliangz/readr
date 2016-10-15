exports.ids = [1];
exports.modules = {

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
	
	var _reactRedux = __webpack_require__(84);
	
	var _BookPageList = __webpack_require__(250);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(260);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(85);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(263);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(273);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _api = __webpack_require__(223);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _utils = __webpack_require__(88);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(245);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _selectors = __webpack_require__(230);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _Loading = __webpack_require__(274);
	
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
	
	var styles = __webpack_require__(278);
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
	            this.setProgress(newProgress);
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
	                return _react2.default.createElement(_Loading2.default, { text: "书籍获取中", center: true });
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
	
	var _BookPage = __webpack_require__(251);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(254);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(106);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(255);
	
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
	
	var styles = __webpack_require__(258);
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

/***/ 251:
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
	
	var styles = __webpack_require__(252);
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

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(253);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 254:
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

/***/ 255:
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
	
	var styles = __webpack_require__(256);
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

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(257);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(259);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_Lkz-8 {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  overflow: hidden;\n  background: #fff; }\n\n.pages--fluid_1DXUA {\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_Lkz-8",
		"pages--fluid": "pages--fluid_1DXUA pages_Lkz-8"
	};

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(261);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(262);
	
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

/***/ 261:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 262:
/***/ function(module, exports) {

	module.exports = require("jquery");

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
	
	var _reactRouter = __webpack_require__(69);
	
	var _Icon = __webpack_require__(104);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(184);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(264);
	
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
	
	var styles = __webpack_require__(271);
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

/***/ 264:
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
	
	var _Switcher = __webpack_require__(265);
	
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
	
	var styles = __webpack_require__(269);
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

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(266);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 266:
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
	
	var styles = __webpack_require__(267);
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

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(268);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 268:
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

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(270);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
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

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(272);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 272:
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

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(250);
	
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

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(275);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 275:
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
	
	var styles = __webpack_require__(276);
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

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(277);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 277:
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

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(279);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzPzMwZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnV0aWxzLnRzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclNjcm9sbGJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzPzUwNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXNjcm9sbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnNjc3M/OGViZSIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzcz9hMjFlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3M/MDhhNCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzP2E2YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VXaXRoUmF3SHRtbC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3M/MTBkYiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2Nzcz83OThlIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDSDs7QUFFSTs7OztBQUNsQzs7S0FBc0M7O0FBQ2tDOztBQUN6RDs7OztBQUM0Qjs7OztBQUNLOzs7O0FBQ2I7Ozs7QUFDTjs7OztBQUNMOzs7O0FBQ3lCOzs7O0FBQ2pEOztLQUEyQzs7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNUMsS0FBWSxTQUFVLG9CQUFrQjtBQXVCeEM7QUFBOEI7O0FBRTVCLHFCQUFpQjtBQUNmOztxSEFBWTs7QUFFUixlQUFPLFNBQVEsTUFBTyxPQUFHO0FBQ3pCLGVBQU07QUFDQyx3QkFBTztBQUNOLHlCQUFNO0FBQ0wsMEJBQUk7QUFDVixvQkFBSTtBQUNXLG1DQUFPO0FBQ3RCLG9CQUFPO0FBQ0QsMEJBQ1o7QUFSWTtBQVNULGVBQWtCLG9CQUFPLE1BQWtCLGtCQUFXO0FBQ3RELGVBQXNCLHdCQUFPLE1BQXNCLHNCQUFXO0FBQzlELGVBQXFCLHVCQUFPLE1BQXFCLHFCQUFXO0FBQzVELGVBQWEsZUFBTyxNQUFhLGFBQVc7QUFDNUMsZUFBc0IseUNBQWEsU0FBSyxNQUFhLGNBQUs7QUFDckQsc0JBRVg7QUFIa0UsVUFBbEM7O0FBU3JCOzs7OztBQUNILG9CQUFNLGdCQUFnQixnQkFBSyxLQUFNLFFBQ3pDO0FBRVc7Ozs7QUFDSCxvQkFBTSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUN6QztBQUVXOzs7cUNBQVc7QUFDakIsMkJBQVksWUFBSyxLQUFPLFFBQUUsRUFDL0I7QUFFcUI7OzsrQ0FBTTtBQUN0QixpQkFBQyxDQUFLLEtBQU0sTUFBVyxjQUFJLENBQUssS0FBTSxNQUFhLGFBQUU7QUFDdEQscUJBQUssSUFBUSxNQUFNLFFBQVcsU0FBSyxLQUFVO0FB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Y0FFdkM7QUFIZ0I7QUFJbEI7QUFBQyxjQVI0QixFQVMvQjtBQUVvQjs7OztBQUNMLDJCQUFLLEtBQ3BCO0FBRU07Ozs7QUFDRSwwQkFBdUIsS0FDdkI7aUJBRE07aUJBQVU7aUJBQ0QsY0FBTyxLQUFNOztBQUVsQyxpQkFBZTtBQUNTLHlDQUFRO0FBQ2hCLGlDQUFFLENBQ2hCO0FBSDJCLGNBQUQ7QUFLckIsb0JBQ0wsOEJBQUksU0FBVSxXQUFZLGFBQ3hCLDhCQUFLLFVBQVUsV0FBZSxrQkFBTSxPQUcxQztBQUNEOzs7OztBQTNDRCx1QkFBVywrQkFBUTtBQTZDWixTQUFnQjtBQUNqQixXQUdOO0FBSjBCO21CQUlKLFE7Ozs7Ozs7O0FDL0R0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLGdEQUErQyx1QkFBdUIsbUJBQW1CLG9CQUFvQix3QkFBd0IsZ0JBQWdCLEVBQUUseUJBQXlCLG1CQUFtQiwwQkFBMEIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFOztBQUV6VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLG9DQUFtQyxxQkFBcUIsRUFBRTs7QUFFMUQiLCJmaWxlIjoiMS4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBCb29rUGFnZUxpc3QgZnJvbSAnLi9Cb29rUGFnZUxpc3QnXG5pbXBvcnQgKiBhcyB2aWV3ZXJVdGlscyBmcm9tICcuL1ZpZXdlci51dGlscydcbmltcG9ydCB7IGxvYWRCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuQ29uZmlybU1vZGFsIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBWaWV3ZXJQYW5lbCBmcm9tICcuL2NvbXBvbmVudHMvVmlld2VyUGFuZWwnXG5pbXBvcnQgQm9va1BhZ2VXaXRoUmF3SHRtbCBmcm9tICcuL0Jvb2tQYWdlV2l0aFJhd0h0bWwnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fdmlld2VyLnNjc3MnKVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgbG9hZEJvb2s6IGxvYWRCb29rXG4gIGJvb2s6IGFueVxuICByYXdCb29rQ29udGVudDogc3RyaW5nXG4gIGZldGNoUHJvZ3Jlc3M6IChib29rSWQ6IHN0cmluZykgPT4gdm9pZFxuICBwcm9ncmVzczogbnVtYmVyXG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBzaG93UGFuZWw/OiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIG5vZGVIZWlnaHRzPzogbnVtYmVyW11cbiAgbm9kZXM/OiBzdHJpbmdbXVxuICBzaG93Vmlld2VyUHJlZmVyZW5jZT86IGJvb2xlYW5cbiAgZmx1aWQ/OiBib29sZWFuXG4gIGlzVG91Y2hNb2RlPzogYm9vbGVhblxuICBzaG93UGFnZUluZm8/OiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlciBleHRlbmRzIENvbXBvbmVudDxJQWxsUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UGFuZWw6IGZhbHNlLFxuICAgICAgaXNDYWxjTW9kZTogdHJ1ZSxcbiAgICAgIG5vZGVIZWlnaHRzOiBbXSxcbiAgICAgIG5vZGVzOiBbXSxcbiAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZSxcbiAgICAgIGZsdWlkOiBmYWxzZSxcbiAgICAgIGlzVG91Y2hNb2RlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVZpZXdlckNsaWNrID0gdGhpcy5oYW5kbGVWaWV3ZXJDbGljay5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUgPSB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZSA9IHRoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVJlc2l6ZSwgNTAwLCB7XG4gICAgICBtYXhXYWl0OiAxMDAwXG4gICAgfSlcbiAgfVxuXG4gIGJvb2tJZDogc3RyaW5nXG4gIGJvb2tQYWdlV2l0aFJhd0h0bWw6IGFueVxuICBkZWJvdW5kZWRIYW5kbGVSZXNpemU6IGFueVxuXG4gIGlzVmlld0ZsdWlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCA8IDcwMFxuICB9XG5cbiAgaXNUb3VjaE1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBzZXRQcm9ncmVzcyhwZXJjZW50YWdlKSB7XG4gICAgYXBpLnNldFByb2dyZXNzKHRoaXMuYm9va0lkLCB7IHBlcmNlbnRhZ2UgfSlcbiAgfVxuXG4gIGhhbmRlbFZpZXdlck1vdXNlTW92ZShldmVudCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc0NhbGNNb2RlICYmICF0aGlzLnN0YXRlLmlzVG91Y2hNb2RlKSB7XG4gICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIGxldCBkVG9TY3JlZW5SaWdodCA9IHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIC0gZXZlbnQucGFnZVhcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dQYW5lbDogeSA8IDkwLFxuICAgICAgICBzaG93UGFnZUluZm86IGRUb1NjcmVlblJpZ2h0IDwgMTAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZsdWlkOiB0aGlzLmlzVmlld0ZsdWlkKCksXG4gICAgICBpc1RvdWNoTW9kZTogdGhpcy5pc1RvdWNoTW9kZSgpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVByb2dyZXNzQ2hhbmdlKG5ld1Byb2dyZXNzKSB7XG4gICAgdGhpcy5zZXRQcm9ncmVzcyhuZXdQcm9ncmVzcylcbiAgfVxuXG4gIGhhbmRsZVZpZXdlckNsaWNrKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzVG91Y2hNb2RlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiAhdGhpcy5zdGF0ZS5zaG93UGFuZWwsXG4gICAgICAgIHNob3dQYWdlSW5mbzogIXRoaXMuc3RhdGUuc2hvd1BhZ2VJbmZvXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGNEb20oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NhbGNNb2RlOiB0cnVlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEh0bWwgPSB0aGlzLmJvb2tQYWdlV2l0aFJhd0h0bWwuZ2V0Q29udGVudEh0bWwoKVxuICAgICAgY29uc3Qgbm9kZUhlaWdodHMgPSB2aWV3ZXJVdGlscy5nZXROb2RlSGVpZ2h0cyhjb250ZW50SHRtbC5jaGlsZE5vZGVzKVxuICAgICAgY29uc29sZS5sb2coJ2NhbGMgZG9uZScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZUhlaWdodHMsXG4gICAgICAgIGlzQ2FsY01vZGU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUpXG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIV8uaXNFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFfLmlzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIGNvbnN0IHNob3VkQ2FsY05vZGVzID0gKHRoaXMucHJvcHMucmF3Qm9va0NvbnRlbnQgPT09ICcnICYmIG5leHRQcm9wcy5yYXdCb29rQ29udGVudCAhPT0gJycpXG4gICAgICB8fCB0aGlzLnN0YXRlLm5vZGVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50ICE9PSAnJ1xuXG4gICAgaWYgKHNob3VkQ2FsY05vZGVzKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHZpZXdlclV0aWxzLm1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdChuZXh0UHJvcHMucmF3Qm9va0NvbnRlbnQpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub2RlcyxcbiAgICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgICAgaXNUb3VjaE1vZGU6IHRoaXMuaXNUb3VjaE1vZGUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBjb25zdCBoYXNCb29rTm9kZXNMb2FkZWQgPSB0aGlzLnN0YXRlLm5vZGVzLmxlbmd0aCAhPT0gMCAmJiBwcmV2U3RhdGUubm9kZXMubGVuZ3RoID09PSAwXG4gICAgY29uc3Qgdmlld0NoYW5nZWQgPSB0aGlzLnN0YXRlLmZsdWlkICE9PSBwcmV2U3RhdGUuZmx1aWRcblxuICAgIGlmIChoYXNCb29rTm9kZXNMb2FkZWQgfHwgdmlld0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FsY0RvbSgpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkQm9vayh0aGlzLmJvb2tJZCwgeyB3aXRoQ29udGVudDogdHJ1ZSB9KVxuICAgIHRoaXMucHJvcHMuZmV0Y2hQcm9ncmVzcyh0aGlzLmJvb2tJZClcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgcmVuZGVyVmlld1BhbmVsKCkge1xuICAgIHJldHVybiAodGhpcy5zdGF0ZS5zaG93UGFuZWwgfHwgdGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZSkgJiYgKFxuICAgICAgPFZpZXdlclBhbmVsXG4gICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmJvb2sudGl0bGV9XG4gICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlPXt0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlfVxuICAgICAgICBvblByZWZWaXNpYmlsaXR5Q2hhbmdlPXtuZXdWaXNpYmlsaXR5ID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBuZXdWaXNpYmlsaXR5XG4gICAgICAgICAgfSlcbiAgICAgICAgfSB9XG4gICAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyQm9vaygpIHtcbiAgICBjb25zdCB7IG5vZGVzLCBub2RlSGVpZ2h0cywgZmx1aWQsIHNob3dQYWdlSW5mbyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgcHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyB0ZXh0PVwi5Lmm57GN6I635Y+W5LitXCIgY2VudGVyIC8+XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNDYWxjTW9kZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEJvb2tQYWdlV2l0aFJhd0h0bWxcbiAgICAgICAgICBub2Rlcz17bm9kZXN9XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlV2l0aFJhd0h0bWwgPSByZWYgfSB9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGluZyB0ZXh0PVwi6ZiF6K+76L+b5bqm6I635Y+W5LitIC4uLlwiIGNlbnRlciAvPlxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgICAgbm9kZUhlaWdodHM9e25vZGVIZWlnaHRzfVxuICAgICAgICAgIG5vZGVzPXt0aGlzLnN0YXRlLm5vZGVzfVxuICAgICAgICAgIHBhZ2VDb3VudD17NX1cbiAgICAgICAgICBpbml0aWFsUHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgIHBhZ2VIZWlnaHQ9ezkwMH1cbiAgICAgICAgICBvblByb2dyZXNzQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICBzaG93UGFnZUluZm89e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciBib2R5Q2xhc3M9XCJ2aWV3ZXJcIiB0aXRsZT17dGhpcy5wcm9wcy5ib29rLnRpdGxlfT5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLmhhbmRsZVZpZXdlckNsaWNrfSBvbk1vdXNlTW92ZT17dGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmV9ID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJWaWV3UGFuZWwoKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJCb29rKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBib29rSWQgPSBvd25Qcm9wcy5wYXJhbXMuaWRcbiAgY29uc3QgYm9vayA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGJvb2tJZCkoc3RhdGUpXG4gIGNvbnN0IHByb2dyZXNzRW50aXR5ID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tzUHJvZ3Jlc3MnLCBib29rSWQpKHN0YXRlKVxuXG4gIHJldHVybiB7XG4gICAgYm9vayxcbiAgICByYXdCb29rQ29udGVudDogXy5nZXQoYm9vaywgJ2NvbnRlbnQucmF3JywgJycpLFxuICAgIHByb2dyZXNzOiBfLmdldChwcm9ncmVzc0VudGl0eSwgJ3BlcmNlbnRhZ2UnKSxcbiAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGxvYWRCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuQ29uZmlybU1vZGFsIH1cbikoVmlld2VyIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb29rUGFnZSBmcm9tICcuL0Jvb2tQYWdlJ1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9Cb29rUGFnZUxpc3QudXRpbHMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgVmlld2VyU2Nyb2xsYmFyIGZyb20gJy4vVmlld2VyU2Nyb2xsYmFyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rUGFnZUxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG4gIHBhZ2VDb3VudDogbnVtYmVyXG4gIGlzU2Nyb2xsTW9kZT86IGJvb2xlYW5cbiAgaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgaW5pdGlhbFByb2dyZXNzPzogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBvblByb2dyZXNzQ2hhbmdlPzogKG5ld1Byb2dyZXNzOiBudW1iZXIpID0+IHZvaWRcbiAgZmx1aWQ6IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2Nyb2xsVG9wPzogbnVtYmVyXG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMjAwLCB7XG4gICAgICBtYXhXYWl0OiAxMDAwXG4gICAgfSlcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdERvbTogSFRNTFVMaXN0RWxlbWVudFxuICBib29rUGFnZTogYW55XG4gIGRlYm91bmRlZEhhbmRsZVNjcm9sbDogYW55XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0NhbGNNb2RlKSB7XG4gICAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgICAgY29uc3QgeyBvblByb2dyZXNzQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHV0aWxzLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQsIHBhZ2VzLmxlbmd0aClcblxuICAgICAgaWYgKG9uUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25Qcm9ncmVzc0NoYW5nZShzY3JvbGxUb3AgLyB0b3RhbEhlaWdodClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpXG4gIH1cblxuICBjYWxjUGFnZXMoKSB7XG4gICAgLy8gdG9kbzog5re75Yqg57yT5a2YXG4gICAgY29uc3QgeyBub2RlSGVpZ2h0cywgbm9kZXMsIHBhZ2VIZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYWdlcyA9IHV0aWxzLmdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KVxuXG4gICAgcmV0dXJuIHsgcGFnZXMsIHRvdGFsSGVpZ2h0OiBwYWdlcy5sZW5ndGggKiBwYWdlSGVpZ2h0IH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFnZUhlaWdodCwgaW5pdGlhbFBhZ2UsIGluaXRpYWxQcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBsZXQgc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKGluaXRpYWxQcm9ncmVzcykge1xuICAgICAgc2Nyb2xsVG9wID0gdG90YWxIZWlnaHQgKiBpbml0aWFsUHJvZ3Jlc3NcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxQYWdlKSB7XG4gICAgICBzY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogKGluaXRpYWxQYWdlIC0gMSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwYWdlQ291bnQsIHBhZ2VIZWlnaHQsIGZsdWlkLCBzaG93UGFnZUluZm8sIGlzQ2FsY01vZGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlcyc6ICFmbHVpZCxcbiAgICAgICdwYWdlcy0tZmx1aWQnOiBmbHVpZFxuICAgIH0pXG5cbiAgICBsZXQgc3RhcnRQYWdlSW5kZXhcbiAgICBsZXQgZW5kUGFnZUluZGV4XG5cbiAgICBpZiAoaXNDYWxjTW9kZSkge1xuICAgICAgc3RhcnRQYWdlSW5kZXggPSAwXG4gICAgICBlbmRQYWdlSW5kZXggPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0UGFnZUluZGV4ID0gY3VycmVudFBhZ2UgLSBNYXRoLmNlaWwocGFnZUNvdW50IC8gMilcbiAgICAgIHN0YXJ0UGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggPCAwID8gMCA6IHN0YXJ0UGFnZUluZGV4XG5cbiAgICAgIGVuZFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4ICsgcGFnZUNvdW50XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VMaXN0RG9tID0gcmVmIH0gfSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiB0b3RhbEhlaWdodCB9fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBfLnNsaWNlKHBhZ2VzLCBzdGFydFBhZ2VJbmRleCwgZW5kUGFnZUluZGV4KS5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJvb2tQYWdlXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XG4gICAgICAgICAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2UgPSByZWYgfSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFZpZXdlclNjcm9sbGJhclxuICAgICAgICAgIHZpc2libGU9e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbD17cGFnZXMubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2Jvb2stcGFnZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBhZ2U6IHV0aWxzLlRQYWdlXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBmbHVpZDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBib29rUGFnZURvbTogSFRNTERpdkVsZW1lbnRcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlOiB7IG5vZGVzLCBtZXRhIH0sIHBhZ2VIZWlnaHQsIGZsdWlkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogcGFnZUhlaWdodCAqIChtZXRhLnBhZ2VObyAtIDEpLFxuICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlJzogIWZsdWlkLFxuICAgICAgJ3BhZ2UtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogbWV0YS5vZmZzZXQgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5vZGVzLmpvaW4oJycpIH19XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlRG9tID0gcmVmIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdlLW5vXCI+e21ldGEucGFnZU5vfTwvZGl2PlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fYm9vay1wYWdlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGVudF8xbXlkSSB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA1NTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogIzY2NjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjk7IH1cXG4gIC5jb250ZW50XzFteWRJIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7IH1cXG5cXG4ucGFnZV8xU1U0aCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5wYWdlLS1mbHVpZF92WDhyUSB7IH1cXG4gIC5wYWdlLS1mbHVpZF92WDhyUSAuY29udGVudF8xbXlkSSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7IH1cXG5cXG4ucGFnZS0taW5pdF84RFpGQiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5wYWdlLS1pbml0XzhEWkZCIC5jb250ZW50XzFteWRJIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLnBhZ2Utbm9fMWpiVi0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxuICBmb250LXNpemU6IDAuOHJlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJjb250ZW50XzFteWRJXCIsXG5cdFwicGFnZVwiOiBcInBhZ2VfMVNVNGhcIixcblx0XCJwYWdlLS1mbHVpZFwiOiBcInBhZ2UtLWZsdWlkX3ZYOHJRIHBhZ2VfMVNVNGhcIixcblx0XCJwYWdlLS1pbml0XCI6IFwicGFnZS0taW5pdF84RFpGQlwiLFxuXHRcInBhZ2Utbm9cIjogXCJwYWdlLW5vXzFqYlYtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIGxvbmcgcGFyYWdyYXBoIHNpdHVhdGlvbiBkb2Vzbid0IHNlZW0gdG8gYWZmZWN0IHRoaXMgZnVuY3Rpb25cbi8vIG9mZnNldCBkaXN0YW5jZSBpcyBhbHdheXMgbmVndGl2ZSBvciB6ZXJvXG4vLyB0aGUgaW5kZXggd2lsbCBiZSBvZiB0aGUgcGFyYWdyYXBoIHdpdGggdGhpcyBvZmZzZXQgYXQgdGhlIGVuZFxuZnVuY3Rpb24gZ2V0UGFnZU9mZnNldCh7cGFnZUluZGV4LCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0c306IHtcbiAgcGFnZUluZGV4OiBudW1iZXJcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxufSkge1xuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgbm9kZUluZGV4ID0gMFxuICBsZXQgbm9kZVN0YXJ0SW5kZXhcblxuICBpZiAocGFnZUluZGV4ICE9PSAwKSB7XG4gICAgbGV0IG5vZGVIZWlnaHRTdW0gPSAwXG4gICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAqIHBhZ2VJbmRleCkge1xuICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tub2RlSW5kZXhdXG4gICAgICBub2RlSW5kZXgrK1xuICAgIH1cbiAgICBvZmZzZXQgPSBub2RlSGVpZ2h0U3VtIC0gbm9kZUhlaWdodHNbbm9kZUluZGV4IC0gMV0gLSBwYWdlSW5kZXggKiBwYWdlSGVpZ2h0XG4gICAgbm9kZVN0YXJ0SW5kZXggPSBub2RlSW5kZXggLSAxXG4gIH0gZWxzZSB7XG4gICAgbm9kZVN0YXJ0SW5kZXggPSAwXG4gIH1cblxuICByZXR1cm4geyBvZmZzZXQsIG5vZGVTdGFydEluZGV4IH1cbn1cblxuXG5mdW5jdGlvbiBnZXROb2Rlc09mUGFnZSh7cGFnZUluZGV4LCBub2RlcywgcGFnZUhlaWdodCwgbm9kZUhlaWdodHN9OiB7XG4gIHBhZ2VJbmRleDogbnVtYmVyXG4gIG5vZGVzOiBhbnlcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxufSkge1xuICBsZXQgeyBvZmZzZXQsIG5vZGVTdGFydEluZGV4IH0gPSBnZXRQYWdlT2Zmc2V0KHsgcGFnZUluZGV4LCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0cyB9KVxuICBsZXQgbm9kZUluZGV4ID0gbm9kZVN0YXJ0SW5kZXhcbiAgbGV0IG5vZGVFbmRJbmRleFxuICBsZXQgcGFnZU5vZGVzID0gW11cblxuICBsZXQgbm9kZUhlaWdodFN1bSA9IG9mZnNldCArIG5vZGVIZWlnaHRzW25vZGVTdGFydEluZGV4XVxuXG4gIG5vZGVJbmRleCsrXG4gIGlmIChub2RlSGVpZ2h0U3VtIDwgcGFnZUhlaWdodCkge1xuICAgIHdoaWxlIChub2RlSGVpZ2h0U3VtIDw9IHBhZ2VIZWlnaHQgJiYgbm9kZUluZGV4ICE9PSBub2Rlcy5sZW5ndGgpIHtcbiAgICAgIG5vZGVIZWlnaHRTdW0gKz0gbm9kZUhlaWdodHNbbm9kZUluZGV4XVxuICAgICAgbm9kZUluZGV4KytcbiAgICB9XG4gICAgbm9kZUVuZEluZGV4ID0gbm9kZUluZGV4IC0gMVxuICB9IGVsc2Uge1xuICAgIG5vZGVFbmRJbmRleCA9IG5vZGVTdGFydEluZGV4XG4gIH1cblxuICBmb3IgKGxldCBpID0gbm9kZVN0YXJ0SW5kZXg7IGkgPD0gbm9kZUVuZEluZGV4ICYmIGkgPD0gbm9kZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgcGFnZU5vZGVzLnB1c2gobm9kZXNbaV0pXG4gIH1cblxuICByZXR1cm4geyBwYWdlTm9kZXMsIG9mZnNldCB9XG59XG5cblxuZXhwb3J0IHR5cGUgVFBhZ2UgPSB7XG4gIG5vZGVzOiBzdHJpbmdbXVxuICBtZXRhOiBhbnlcbn1cbmV4cG9ydCB0eXBlIFRQYWdlTGlzdCA9IFRQYWdlW11cbmV4cG9ydCBmdW5jdGlvbiBncm91cE5vZGVzQnlQYWdlKG5vZGVzOiBhbnksIG5vZGVIZWlnaHRzOiBudW1iZXJbXSwgcGFnZUhlaWdodDogbnVtYmVyKTogVFBhZ2VMaXN0IHtcbiAgbGV0IHBhZ2VzID0gW11cbiAgbGV0IHBhZ2VIZWlnaHRTdW0gPSBub2RlSGVpZ2h0cy5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApXG4gIGxldCBwYWdlU3VtID0gTWF0aC5jZWlsKHBhZ2VIZWlnaHRTdW0gLyBwYWdlSGVpZ2h0KVxuXG4gIGNvbnNvbGUubG9nKCd0b2RvOiBncm91cCBub2RlcycpXG4gIC8vIG5vZGVzID0gbm9kZXMubWFwKChub2RlLCBpbmRleCkgPT4ge1xuICAvLyAgIG5vZGUucHJvcHMuaW5kZXggPSBpbmRleFxuICAvLyAgIHJldHVybiBub2RlXG4gIC8vIH0pXG5cbiAgaWYgKG5vZGVIZWlnaHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbe1xuICAgICAgbm9kZXMsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHBhZ2VObzogMSxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9XG4gICAgfV1cbiAgfVxuXG4gIC8vIGZpbmFsbHlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlU3VtOyBpKyspIHtcbiAgICBjb25zdCB7IHBhZ2VOb2Rlcywgb2Zmc2V0IH0gPSBnZXROb2Rlc09mUGFnZSh7IHBhZ2VJbmRleDogaSwgbm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0IH0pXG5cbiAgICBwYWdlcy5wdXNoKHtcbiAgICAgIG5vZGVzOiBwYWdlTm9kZXMsXG4gICAgICBtZXRhOiB7XG4gICAgICAgIHBhZ2VObzogaSArIDEsXG4gICAgICAgIG9mZnNldFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50YWdlVG9QYWdlKHA6IG51bWJlciwgcGFnZVN1bTogbnVtYmVyKSB7XG4gIGlmIChwID4gMSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dyb25nIHBhcmFtZXRlciEnKVxuICAgIHJldHVybiBudWxsXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KChwICogcGFnZVN1bSkgYXMgYW55KSArIDFcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3QudXRpbHMudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXNjcm9sbGJhci5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY3VycmVudDogbnVtYmVyXG4gIHRvdGFsOiBudW1iZXJcbiAgdmlzaWJsZTogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQsIHRvdGFsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGVyY2VudGFnZSA9ICgoY3VycmVudCAvIHRvdGFsKSAqIDEwMCkudG9GaXhlZCgyKSArICclJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwibG9jLWluZm9cIj5cbiAgICAgICAgICA8ZGl2PjxzdHJvbmc+e2N1cnJlbnR9PC9zdHJvbmc+L3t0b3RhbH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN1Yi1pbmZvXCI+e3BlcmNlbnRhZ2V9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJTY3JvbGxiYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyU2Nyb2xsYmFyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2Nyb2xsYmFyXzN2SGx0IHtcXG4gIHdpZHRoOiAycHg7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAxMDBweDsgfVxcbiAgLnNjcm9sbGJhcl8zdkhsdDpob3ZlciAuYnV0dG9uXzF2ZHFVIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4udHJhY2tfMkZMVEEge1xcbiAgd2lkdGg6IDJweDtcXG4gIGJhY2tncm91bmQ6ICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA4cHg7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLnRyYWNrLS1wYXN0XzNZS2Q0IHtcXG4gIGJhY2tncm91bmQ6ICM1ODY2ZGI7XFxuICB6LWluZGV4OiAyOyB9XFxuXFxuLmJ1dHRvbl8xdmRxVSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA4NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgei1pbmRleDogMztcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubG9jLWluZm9fMzc3VnUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgY29sb3I6ICNkZGQ7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7XFxuICBwYWRkaW5nOiA3cHggMTVweDsgfVxcblxcbi5zdWItaW5mb18zcUk1dSB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjYWFhOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2Nyb2xsYmFyXCI6IFwic2Nyb2xsYmFyXzN2SGx0XCIsXG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uXzF2ZHFVXCIsXG5cdFwidHJhY2tcIjogXCJ0cmFja18yRkxUQVwiLFxuXHRcInRyYWNrLS1wYXN0XCI6IFwidHJhY2stLXBhc3RfM1lLZDQgdHJhY2tfMkZMVEFcIixcblx0XCJsb2MtaW5mb1wiOiBcImxvYy1pbmZvXzM3N1Z1XCIsXG5cdFwic3ViLWluZm9cIjogXCJzdWItaW5mb18zcUk1dVwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItc2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va1BhZ2VMaXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlc19Ma3otOCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuXFxuLnBhZ2VzLS1mbHVpZF8xRFhVQSB7XFxuICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBhZ2VzXCI6IFwicGFnZXNfTGt6LThcIixcblx0XCJwYWdlcy0tZmx1aWRcIjogXCJwYWdlcy0tZmx1aWRfMURYVUEgcGFnZXNfTGt6LThcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZUxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8vIOaaguS4jeaUr+aMgeWMheWQq+WbvueJh+eahOiuoeeul1xuLy8g6K6h566X5rKh5pyJ562J5b6F5Zu+54mH5Yqg6L295a6M5oiQ77yM5omA5Lul57uT5p6c5piv5LiN5q2j56Gu55qEXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgY29uc29sZS5sb2coJ2RvbSByZWFkeSwgZ2V0Tm9kZUhlaWdodHMnKVxuICBsZXQgbm9kZXNIZWlnaHQgPSBbXVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChub2RlLmNsYXNzTmFtZSAhPT0gJ2diLWxpbmUnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIScpXG4gICAgfVxuICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpXG4gIH0pXG5cbiAgcmV0dXJuIG5vZGVzSGVpZ2h0XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdChtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zb2xlLmxvZygnc3RhcnQgbWQnKVxuICBsZXQgaHRtbCA9IG1hcmtlZChtYXJrZG93biwge1xuICAgIGdmbTogdHJ1ZSxcbiAgICBicmVha3M6IHRydWVcbiAgfSlcbiAgY29uc29sZS5sb2coJ2RvbmUgbWFya2VkJylcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGVcbiAgICAubWFwLmNhbGwoJChodG1sKSwgKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IDMgJiYgZWxlLm5vZGVWYWx1ZSA9PT0gJ1xcbicpIHtcbiAgICAgICAgLy8g56e76ZmkIGh0bWwg6YeM55qE5Zue6L2mXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ1AnKSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUuaW5uZXJIVE1MfTwvcD5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUub3V0ZXJIVE1MfTwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIobm9kZSA9PiBub2RlKVxuICAvLyBjb25zb2xlLmxvZyhub2RlcylcbiAgY29uc29sZS5sb2coJ2VuZCBtZCcpXG4gIHJldHVybiBub2Rlc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudXRpbHMudHNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXJrZWRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm1hcmtlZFwiXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImpxdWVyeVwiXG4gKiogbW9kdWxlIGlkID0gMjYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvSWNvbidcbmltcG9ydCBGYWRlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUnXG5pbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuLi8uL1ZpZXdlclByZWZlcmVuY2UnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVmlld2VyUGFuZWwuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBib29sZWFuXG4gIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U6IChuZXdWaXNpYmlsaXR5OiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVByZWZDbGljayA9IHRoaXMuaGFuZGxlUHJlZkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVByZWZDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uUHJlZlZpc2liaWxpdHlDaGFuZ2UoIXRoaXMucHJvcHMuc2hvd1ZpZXdlclByZWZlcmVuY2UpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBzaG93Vmlld2VyUHJlZmVyZW5jZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImJhY2tcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmVmQ2xpY2t9IHN0eWxlTmFtZT1cInByZWZlcmVuY2VcIj5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwcmVmZXJlbmNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RmFkZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoXG4gICAgICAgICAgICAgICAgPFZpZXdlclByZWZlcmVuY2UgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhbmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuLy8gaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi8uLi9lbGVtZW50cy9Td2l0Y2hlcidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclByZWZlcmVuY2UgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXByZWZlcmVuY2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLWZvbnQtc2l6ZVwiPlxuICAgICAgICAgICAgPHNwYW4+QS08L3NwYW4+PHNwYW4+QSs8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXNjcm9sbFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj7mu5rliqjmqKHlvI88L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoZXIgdmFsdWU9e3RydWV9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgc3R5bGVOYW1lPVwib3B0aW9uLXRoZW1lXCI+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZmZmJ319PnRoZW1lMTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNlZWUnfX0+dGhlbWUyPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzIyMid9fT50aGVtZTM8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuKShWaWV3ZXJQcmVmZXJlbmNlIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpXG5cbi8vIGludGVyZmFjZSBQcm9wcyB7XG4vLyAgIG9uOiBib29sZWFuXG4vLyB9XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB0aXRsZT86IHN0cmluZ1xuICBvbkNoYW5nZT86IChuZXdWYWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4gdm9pZFxuICBvcHRpb25zPzoge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhblxuICB9W11cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHN0eWxlTmFtZT86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICBpc09uID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNPbiA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZidcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8ICcnfSBzdHlsZU5hbWU9XCJzd2l0Y2hlci13cmFwXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+W9k+WJjeaVsOaNruacieivr++8jOWwhuS9v+eUqOm7mOiupOaVsOaNru+8gScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc3R5bGVOYW1lPXtgc3dpdGNoZXItLSR7c3RhdGV9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5vbiA/ICdvbicgOiAnb2ZmJ1xuLy8gICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgc3dpdGNoZXInXG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEwXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wcmVmZXJlbmNlXzFGTkpaIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm9wdGlvbl8xOUZYVyB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbl8xOUZYVzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLm9wdGlvbi1mb250LXNpemVfMThPTkcge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzE4T05HIHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyB9XFxuXFxuLm9wdGlvbi1zY3JvbGxfM2FndE8ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzNhZ3RPIC5sYWJlbF8zSExQcCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8zYWd0TyAuc3dpdGNoZXJfM1Q5S18ge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4ub3B0aW9uLXRoZW1lXzM4YlVnIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICAub3B0aW9uLXRoZW1lXzM4YlVnIHNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XFxuICAgIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wcmVmZXJlbmNlXCI6IFwidmlld2VyLXByZWZlcmVuY2VfMUZOSlpcIixcblx0XCJvcHRpb25cIjogXCJvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tZm9udC1zaXplXCI6IFwib3B0aW9uLWZvbnQtc2l6ZV8xOE9ORyBvcHRpb25fMTlGWFdcIixcblx0XCJvcHRpb24tc2Nyb2xsXCI6IFwib3B0aW9uLXNjcm9sbF8zYWd0TyBvcHRpb25fMTlGWFdcIixcblx0XCJsYWJlbFwiOiBcImxhYmVsXzNITFBwXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8zVDlLX1wiLFxuXHRcIm9wdGlvbi10aGVtZVwiOiBcIm9wdGlvbi10aGVtZV8zOGJVZyBvcHRpb25fMTlGWFdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9WaWV3ZXJQYW5lbC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wYW5lbF8xMDdNWSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5MDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG4gIGhlaWdodDogNjBweDsgfVxcblxcbi5jb250YWluZXJfM0w3OFIge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfMW1WckMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwOyB9XFxuICAuYmFja18xbVZyQyBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAuYmFja18xbVZyQyBhIHNwYW4ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuYmFja18xbVZyQyBzcGFuIHtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDsgfVxcblxcbi50aXRsZV8zTUlwUCB7XFxuICBmb250LXNpemU6IDEuMnJlbTsgfVxcblxcbi5wcmVmZXJlbmNlXzJKUVJpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInZpZXdlci1wYW5lbFwiOiBcInZpZXdlci1wYW5lbF8xMDdNWVwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhaW5lcl8zTDc4UlwiLFxuXHRcImJhY2tcIjogXCJiYWNrXzFtVnJDXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTUlwUFwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzJKUVJpXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmNsYXNzIEJvb2tQYWdlV2l0aFJhd0h0bWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBib29rUGFnZUxpc3Q6IGFueVxuXG4gIGdldENvbnRlbnRIdG1sKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tQYWdlTGlzdC5ib29rUGFnZS5ib29rUGFnZURvbVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmx1aWQsIG5vZGVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2tQYWdlTGlzdFxuICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZUhlaWdodHM9e1tdfVxuICAgICAgICBwYWdlQ291bnQ9ezF9XG4gICAgICAgIHBhZ2VIZWlnaHQ9ezB9XG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdCA9IHJlZiB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VXaXRoUmF3SHRtbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZVdpdGhSYXdIdG1sLnRzeFxuICoqLyIsImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZydcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0xvYWRpbmcuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJhY2tkcm9wPzogYm9vbGVhblxuICB0ZXh0Pzogc3RyaW5nXG4gIGNlbnRlcj86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgZHluYW1pY1RleHQ/OiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBpbnRlcnZhbElkOiBOb2RlSlMuVGltZXJcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkeW5hbWljVGV4dDogJydcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5keW5hbWljVGV4dC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGR5bmFtaWNUZXh0OiAnJyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZHluYW1pY1RleHQ6IHRoaXMuc3RhdGUuZHluYW1pY1RleHQgKyAnLidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LCA1MDApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHQsIGNlbnRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZHluYW1pY1RleHQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHdyYXBDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2xvYWRpbmctd3JhcC0tY2VudGVyJzogY2VudGVyLFxuICAgICAgJ2xvYWRpbmctd3JhcCc6ICFjZW50ZXJcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPXt3cmFwQ2xhc3N9PlxuICAgICAgICA8c3BhbiBzdHlsZU5hbWU9XCJ0ZXh0LWxvYWRpbmdcIj57dGV4dCArIGR5bmFtaWNUZXh0fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5Mb2FkaW5nWydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgdGV4dDogJ+WKoOi9veS4rSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTG9hZGluZy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA2XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICBtYXJnaW46IDMwcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5sb2FkaW5nLXdyYXBfaHR5WXoge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5sb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0LWxvYWRpbmdcIjogXCJ0ZXh0LWxvYWRpbmdfM2VmcWhcIixcblx0XCJsb2FkaW5nLXdyYXBcIjogXCJsb2FkaW5nLXdyYXBfaHR5WXpcIixcblx0XCJsb2FkaW5nLXdyYXAtLWNlbnRlclwiOiBcImxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNlxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3ZpZXdlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9