webpackJsonp([1],{

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _BookPageList = __webpack_require__(84);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(91);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(8);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(94);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(101);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _apis = __webpack_require__(62);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _utils = __webpack_require__(30);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(102);
	
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
	
	var styles = __webpack_require__(104);
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
	}, { fetchBook: _actions.fetchBook, fetchProgress: _actions.fetchProgress, openDialog: _actions.openDialog })(Viewer);

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(85);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(87);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(19);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(88);
	
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
	
	var styles = __webpack_require__(90);
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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(19);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(86);
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

/***/ 86:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"content_1mydI","page":"page_1SU4h","page--fluid":"page--fluid_vX8rQ page_1SU4h","page--init":"page--init_8DZFB","page-no":"page-no_1jbV-"};

/***/ },

/***/ 87:
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

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(89);
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

/***/ 89:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"scrollbar":"scrollbar_3vHlt","button":"button_1vdqU","track":"track_2FLTA","track--past":"track--past_3YKd4 track_2FLTA","loc-info":"loc-info_377Vu","sub-info":"sub-info_3qI5u"};

/***/ },

/***/ 90:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"pages":"pages_1SNis","pages--fluid":"pages--fluid_39FPe pages_1SNis"};

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(92);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(93);
	
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

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	
	;(function() {
	
	/**
	 * Block-Level Grammar
	 */
	
	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};
	
	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();
	
	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();
	
	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();
	
	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
	
	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();
	
	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();
	
	/**
	 * Normal Block Grammar
	 */
	
	block.normal = merge({}, block);
	
	/**
	 * GFM Block Grammar
	 */
	
	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});
	
	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();
	
	/**
	 * GFM + Tables Block Grammar
	 */
	
	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});
	
	/**
	 * Block Lexer
	 */
	
	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;
	
	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}
	
	/**
	 * Expose Block Rules
	 */
	
	Lexer.rules = block;
	
	/**
	 * Static Lex Method
	 */
	
	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};
	
	/**
	 * Preprocessing
	 */
	
	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');
	
	  return this.token(src, true);
	};
	
	/**
	 * Lexing
	 */
	
	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;
	
	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }
	
	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }
	
	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }
	
	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }
	
	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }
	
	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);
	
	      this.tokens.push({
	        type: 'blockquote_start'
	      });
	
	      cap = cap[0].replace(/^ *> ?/gm, '');
	
	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);
	
	      this.tokens.push({
	        type: 'blockquote_end'
	      });
	
	      continue;
	    }
	
	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	
	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });
	
	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);
	
	      next = false;
	      l = cap.length;
	      i = 0;
	
	      for (; i < l; i++) {
	        item = cap[i];
	
	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }
	
	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }
	
	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }
	
	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });
	
	        // Recurse.
	        this.token(item, false, bq);
	
	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }
	
	      this.tokens.push({
	        type: 'list_end'
	      });
	
	      continue;
	    }
	
	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }
	
	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }
	
	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return this.tokens;
	};
	
	/**
	 * Inline-Level Grammar
	 */
	
	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};
	
	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();
	
	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();
	
	/**
	 * Normal Inline Grammar
	 */
	
	inline.normal = merge({}, inline);
	
	/**
	 * Pedantic Inline Grammar
	 */
	
	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});
	
	/**
	 * GFM Inline Grammar
	 */
	
	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});
	
	/**
	 * GFM + Line Breaks Inline Grammar
	 */
	
	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});
	
	/**
	 * Inline Lexer & Compiler
	 */
	
	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;
	
	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }
	
	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}
	
	/**
	 * Expose Inline Rules
	 */
	
	InlineLexer.rules = inline;
	
	/**
	 * Static Lexing/Compiling Method
	 */
	
	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};
	
	/**
	 * Lexing/Compiling
	 */
	
	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;
	
	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }
	
	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }
	
	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }
	
	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }
	
	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }
	
	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }
	
	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return out;
	};
	
	/**
	 * Compile Link
	 */
	
	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;
	
	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};
	
	/**
	 * Smartypants Transformations
	 */
	
	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};
	
	/**
	 * Mangle Links
	 */
	
	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;
	
	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }
	
	  return out;
	};
	
	/**
	 * Renderer
	 */
	
	function Renderer(options) {
	  this.options = options || {};
	}
	
	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }
	
	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }
	
	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};
	
	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};
	
	Renderer.prototype.html = function(html) {
	  return html;
	};
	
	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};
	
	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};
	
	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};
	
	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};
	
	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};
	
	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};
	
	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};
	
	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};
	
	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};
	
	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};
	
	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};
	
	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};
	
	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};
	
	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};
	
	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};
	
	Renderer.prototype.text = function(text) {
	  return text;
	};
	
	/**
	 * Parsing & Compiling
	 */
	
	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}
	
	/**
	 * Static Parse Method
	 */
	
	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};
	
	/**
	 * Parse Loop
	 */
	
	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();
	
	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }
	
	  return out;
	};
	
	/**
	 * Next Token
	 */
	
	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};
	
	/**
	 * Preview Next Token
	 */
	
	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};
	
	/**
	 * Parse Text Tokens
	 */
	
	Parser.prototype.parseText = function() {
	  var body = this.token.text;
	
	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }
	
	  return this.inline.output(body);
	};
	
	/**
	 * Parse Current Token
	 */
	
	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;
	
	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);
	
	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];
	
	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }
	
	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';
	
	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;
	
	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};
	
	/**
	 * Helpers
	 */
	
	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}
	
	function unescape(html) {
		// explicitly match decimal, hex, and named HTML entities 
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}
	
	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	function noop() {}
	noop.exec = noop;
	
	function merge(obj) {
	  var i = 1
	    , target
	    , key;
	
	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	
	/**
	 * Marked
	 */
	
	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }
	
	    opt = merge({}, marked.defaults, opt || {});
	
	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;
	
	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }
	
	    pending = tokens.length;
	
	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }
	
	      var out;
	
	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }
	
	      opt.highlight = highlight;
	
	      return err
	        ? callback(err)
	        : callback(null, out);
	    };
	
	    if (!highlight || highlight.length < 3) {
	      return done();
	    }
	
	    delete opt.highlight;
	
	    if (!pending) return done();
	
	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }
	
	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}
	
	/**
	 * Options
	 */
	
	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};
	
	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};
	
	/**
	 * Expose
	 */
	
	marked.Parser = Parser;
	marked.parser = Parser.parse;
	
	marked.Renderer = Renderer;
	
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	
	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;
	
	marked.parse = marked;
	
	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}
	
	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(12))(679);

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _Icon = __webpack_require__(17);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(35);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(95);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(100);
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

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _Switcher = __webpack_require__(96);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(99);
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

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(97);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
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
	
	var styles = __webpack_require__(98);
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

/***/ 98:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"switcher-wrap":"switcher-wrap_3UMAU","switcher":"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"};

/***/ },

/***/ 99:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"viewer-preference":"viewer-preference_1FNJZ","option":"option_19FXW","option-font-size":"option-font-size_18ONG option_19FXW","option-scroll":"option-scroll_3agtO option_19FXW","label":"label_3HLPp","switcher":"switcher_3T9K_","option-theme":"option-theme_38bUg option_19FXW"};

/***/ },

/***/ 100:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"viewer-panel":"viewer-panel_aoOv7","container":"container_2cLNI","back":"back_ppxQ_","title":"title_3Nhli","preference":"preference_1wPa6"};

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(84);
	
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

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSideEffect = __webpack_require__(103);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _lodash = __webpack_require__(25);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultTitle = 'Readr';
	
	var DocContainer = function (_Component) {
	    _inherits(DocContainer, _Component);
	
	    function DocContainer() {
	        _classCallCheck(this, DocContainer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(DocContainer).apply(this, arguments));
	    }
	
	    _createClass(DocContainer, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	
	            return className ? _react2.default.createElement("div", { className: 'gb-doc-container' + className }, this.props.children) : _react2.default.createElement("div", { className: "gb-doc-container" }, this.props.children);
	        }
	    }]);
	
	    return DocContainer;
	}(_react.Component);
	
	function reducePropsToState(propsList) {
	    var innermostProps = propsList[propsList.length - 1];
	    var data = {};
	    if (innermostProps) {
	        data = _lodash2.default.pick(innermostProps, ['title', 'bodyClass']);
	        if (data.title && !innermostProps.useAsMasterTitle) {
	            data.title = data.title + ' | ' + defaultTitle;
	        } else {
	            data.title = data.title || defaultTitle;
	        }
	    }
	    return data;
	}
	function handleStateChangeOnClient(propList) {
	    var title = propList.title;
	    var bodyClass = propList.bodyClass;
	
	    if (typeof bodyClass !== 'undefined') {
	        document.body.className = bodyClass;
	    } else {
	        document.body.removeAttribute('class');
	    }
	    if (typeof title !== 'undefined') {
	        document.title = title;
	    } else {
	        document.title = defaultTitle;
	    }
	}
	exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(DocContainer);

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(670);

/***/ },

/***/ 104:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC51dGlscy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJTY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vLi9+L21hcmtlZC9saWIvbWFya2VkLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb250YWluZXJzL0RvY0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIF9yZWFjdF9raXRfZGxsIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUVJOzs7O0FBQ2xDOztLQUFzQzs7QUFDNkI7O0FBQ3BEOzs7O0FBQ2lCOzs7O0FBQ2dCOzs7O0FBQ2I7Ozs7QUFDZDs7OztBQUNHOzs7O0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN4RCxLQUFZLFNBQVUsb0JBQWtCO0FBdUJ4Qzs7O0FBRUUscUJBQWlCOzs7K0ZBQ0g7O0FBRVIsZUFBTyxTQUFRLE1BQU8sT0FBRztBQUN6QixlQUFNLFFBQUc7QUFDRix3QkFBTztBQUNOLHlCQUFNO0FBQ0wsMEJBQUk7QUFDVixvQkFBSTtBQUNXLG1DQUFPO0FBQ3RCLG9CQUFPO0FBQ0QsMEJBQ1o7V0FYRDtBQVlJLGVBQWtCLG9CQUFPLE1BQWtCLGtCQUFXO0FBQ3RELGVBQXNCLHdCQUFPLE1BQXNCLHNC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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsRUFBRTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVEsT0FBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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TyxLQUFNLGdCQUN0QixhQUYrQztnQkFFN0M7QUFDRixrQkFBTSxRQUFPLEtBQU0sU0FFMUI7OztBQUVLLFlBQ1A7O0FBRUQsb0NBQTJDO1NBQzVCLFFBQXdCLGVBQS9CO1NBQW9COztBQUV2QixTQUFDLE9BQWdCLGNBQWlCLGFBQUU7QUFDN0Isa0JBQUssS0FBVSxZQUNuQjtZQUFFO0FBQ0Usa0JBQUssS0FBZ0IsZ0JBQzlCOztBQUVFLFNBQUMsT0FBWSxVQUFpQjtBQUN2QixrQkFBTSxRQUNWLE1BRjZCO1lBRTNCO0FBQ0Usa0JBQU0sUUFJbEI7OzttQkFBNkIsK0JBQ1Qsb0JBRW5CLDJCQUFjLGM7Ozs7Ozs7QUNqRWYsZ0Q7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiIxLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IEJvb2tQYWdlTGlzdCBmcm9tICcuL0Jvb2tQYWdlTGlzdCdcbmltcG9ydCAqIGFzIHZpZXdlclV0aWxzIGZyb20gJy4vVmlld2VyLnV0aWxzJ1xuaW1wb3J0IHsgZmV0Y2hCb29rLCBmZXRjaFByb2dyZXNzLCBvcGVuRGlhbG9nIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBWaWV3ZXJQYW5lbCBmcm9tICcuL1ZpZXdlclBhbmVsJ1xuaW1wb3J0IEJvb2tQYWdlV2l0aFJhd0h0bWwgZnJvbSAnLi9Cb29rUGFnZVdpdGhSYXdIdG1sJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2FwaXMnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fdmlld2VyLnNjc3MnKVxuXG5pbnRlcmZhY2UgSUFsbFByb3BzIHtcbiAgZmV0Y2hCb29rOiBhbnlcbiAgYm9vazogYW55XG4gIHJhd0Jvb2tDb250ZW50OiBzdHJpbmdcbiAgZmV0Y2hQcm9ncmVzczogKGJvb2tJZDogc3RyaW5nKSA9PiB2b2lkXG4gIHByb2dyZXNzOiBudW1iZXJcbiAgb3BlbkRpYWxvZzogKGRhdGE6IG9wZW5EaWFsb2cpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNob3dQYW5lbD86IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgbm9kZUhlaWdodHM/OiBudW1iZXJbXVxuICBub2Rlcz86IHN0cmluZ1tdXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlPzogYm9vbGVhblxuICBmbHVpZD86IGJvb2xlYW5cbiAgaXNUb3VjaE1vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50PElBbGxQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQYW5lbDogZmFsc2UsXG4gICAgICBpc0NhbGNNb2RlOiB0cnVlLFxuICAgICAgbm9kZUhlaWdodHM6IFtdLFxuICAgICAgbm9kZXM6IFtdLFxuICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IGZhbHNlLFxuICAgICAgZmx1aWQ6IGZhbHNlLFxuICAgICAgaXNUb3VjaE1vZGU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ncmVzc0NoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWJvdW5kZWRIYW5kbGVSZXNpemUgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgYm9va0lkOiBzdHJpbmdcbiAgYm9va1BhZ2VXaXRoUmF3SHRtbDogYW55XG4gIGRlYm91bmRlZEhhbmRsZVJlc2l6ZTogYW55XG5cbiAgaXNWaWV3Rmx1aWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIDwgNzAwXG4gIH1cblxuICBpc1RvdWNoTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIHNldFByb2dyZXNzKHBlcmNlbnRhZ2UpIHtcbiAgICBhcGkuc2V0UHJvZ3Jlc3ModGhpcy5ib29rSWQsIHsgcGVyY2VudGFnZSB9KVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzQ2FsY01vZGUgJiYgIXRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgbGV0IGRUb1NjcmVlblJpZ2h0ID0gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggLSBldmVudC5wYWdlWFxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhbmVsOiB5IDwgOTAsXG4gICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UobmV3UHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNldFByb2dyZXNzKG5ld1Byb2dyZXNzKVxuICB9XG5cbiAgaGFuZGxlVmlld2VyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNUb3VjaE1vZGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6ICF0aGlzLnN0YXRlLnNob3dQYW5lbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjYWxjRG9tKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDYWxjTW9kZTogdHJ1ZVxuICAgIH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sLmdldENvbnRlbnRIdG1sKClcbiAgICAgIGNvbnN0IG5vZGVIZWlnaHRzID0gdmlld2VyVXRpbHMuZ2V0Tm9kZUhlaWdodHMoY29udGVudEh0bWwuY2hpbGROb2RlcylcbiAgICAgIGNvbnNvbGUubG9nKCdjYWxjIGRvbmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vZGVIZWlnaHRzLFxuICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgbG9hZFJhd0Jvb2tDb250ZW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hCb29rKHRoaXMuYm9va0lkKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBub2RlcyA9IHZpZXdlclV0aWxzLm1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdCh0aGlzLnByb3BzLnJhd0Jvb2tDb250ZW50KVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZXMsXG4gICAgICAgIGZsdWlkOiB0aGlzLmlzVmlld0ZsdWlkKCksXG4gICAgICAgIGlzVG91Y2hNb2RlOiB0aGlzLmlzVG91Y2hNb2RlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIHJldHVybiAhXy5pc0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IGhhc0Jvb2tOb2Rlc0xvYWRlZCA9IHRoaXMuc3RhdGUubm9kZXMubGVuZ3RoICE9PSAwICYmIHByZXZTdGF0ZS5ub2Rlcy5sZW5ndGggPT09IDBcbiAgICBjb25zdCB2aWV3Q2hhbmdlZCA9IHRoaXMuc3RhdGUuZmx1aWQgIT09IHByZXZTdGF0ZS5mbHVpZFxuXG4gICAgaWYgKGhhc0Jvb2tOb2Rlc0xvYWRlZCB8fCB2aWV3Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjRG9tKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWRSYXdCb29rQ29udGVudCgpXG4gICAgdGhpcy5wcm9wcy5mZXRjaFByb2dyZXNzKHRoaXMuYm9va0lkKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXJWaWV3UGFuZWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLnN0YXRlLnNob3dQYW5lbCB8fCB0aGlzLnN0YXRlLnNob3dWaWV3ZXJQcmVmZXJlbmNlKSAmJiAoXG4gICAgICA8Vmlld2VyUGFuZWxcbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX1cbiAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U9e3RoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2V9XG4gICAgICAgIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U9e25ld1Zpc2liaWxpdHkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2U6IG5ld1Zpc2liaWxpdHlcbiAgICAgICAgICB9KVxuICAgICAgICB9IH1cbiAgICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJCb29rKCkge1xuICAgIGNvbnN0IHsgbm9kZXMsIG5vZGVIZWlnaHRzLCBmbHVpZCwgc2hvd1BhZ2VJbmZvIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sb2FkaW5nXCI+5Yqg6L295LitIC4uLjwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzQ2FsY01vZGVcbiAgICAgID8gKFxuICAgICAgICA8Qm9va1BhZ2VXaXRoUmF3SHRtbFxuICAgICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VXaXRoUmF3SHRtbCA9IHJlZiB9IH1cbiAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgLz5cbiAgICAgIClcbiAgICAgIDogKFxuICAgICAgICA8Qm9va1BhZ2VMaXN0XG4gICAgICAgICAgbm9kZUhlaWdodHM9e25vZGVIZWlnaHRzfVxuICAgICAgICAgIG5vZGVzPXt0aGlzLnN0YXRlLm5vZGVzfVxuICAgICAgICAgIHBhZ2VDb3VudD17NX1cbiAgICAgICAgICBpbml0aWFsUHJvZ3Jlc3M9e3Byb2dyZXNzfVxuICAgICAgICAgIHBhZ2VIZWlnaHQ9ezkwMH1cbiAgICAgICAgICBvblByb2dyZXNzQ2hhbmdlPXt0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICBzaG93UGFnZUluZm89e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICAvPlxuICAgICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIGJvZHlDbGFzcz1cInZpZXdlclwiIHRpdGxlPXt0aGlzLnByb3BzLmJvb2sudGl0bGV9PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld2VyQ2xpY2t9IG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSB9ID5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVmlld1BhbmVsKCkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJCb29rKCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzOiBhbnkpID0+IHtcbiAgICBjb25zdCBib29rID0gc3RhdGUuZW50aXRpZXMuYm9va3Nbb3duUHJvcHMucGFyYW1zLmlkXSB8fCB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvb2ssXG4gICAgICByYXdCb29rQ29udGVudDogXy5nZXQoYm9vaywgJ2NvbnRlbnQucmF3JywgJycpLFxuICAgICAgcHJvZ3Jlc3M6IF8uZ2V0KHN0YXRlLnBheWxvYWRzLCAncHJvZ3Jlc3MucGVyY2VudGFnZScsIDApLFxuICAgICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICAgIH1cbiAgfSxcbiAgeyBmZXRjaEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5EaWFsb2cgfVxuKShWaWV3ZXIgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vQm9va1BhZ2UnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi9WaWV3ZXJTY3JvbGxiYXInXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2Jvb2stcGFnZS1saXN0LnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG5vZGVIZWlnaHRzOiBudW1iZXJbXVxuICBwYWdlQ291bnQ6IG51bWJlclxuICBpc1Njcm9sbE1vZGU/OiBib29sZWFuXG4gIGluaXRpYWxQYWdlPzogbnVtYmVyXG4gIGluaXRpYWxQcm9ncmVzcz86IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgb25Qcm9ncmVzc0NoYW5nZT86IChuZXdQcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkXG4gIGZsdWlkOiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIHNjcm9sbFRvcD86IG51bWJlclxuICBjdXJyZW50UGFnZT86IG51bWJlclxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rUGFnZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICBjdXJyZW50UGFnZTogMVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcylcbiAgICB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbCA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwsIDIwMCwge1xuICAgICAgbWF4V2FpdDogMTAwMFxuICAgIH0pXG4gIH1cblxuICBib29rUGFnZUxpc3REb206IEhUTUxVTGlzdEVsZW1lbnRcbiAgYm9va1BhZ2U6IGFueVxuICBkZWJvdW5kZWRIYW5kbGVTY3JvbGw6IGFueVxuXG4gIGhhbmRsZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNDYWxjTW9kZSkge1xuICAgICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICAgIGNvbnN0IHsgb25Qcm9ncmVzc0NoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSB1dGlscy5wZXJjZW50YWdlVG9QYWdlKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0LCBwYWdlcy5sZW5ndGgpXG5cbiAgICAgIGlmIChvblByb2dyZXNzQ2hhbmdlKSB7XG4gICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50UGFnZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5kZWJvdW5kZWRIYW5kbGVTY3JvbGwpXG4gIH1cblxuICBjYWxjUGFnZXMoKSB7XG4gICAgLy8gdG9kbzog5re75Yqg57yT5a2YXG4gICAgY29uc3QgeyBub2RlSGVpZ2h0cywgbm9kZXMsIHBhZ2VIZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYWdlcyA9IHV0aWxzLmdyb3VwTm9kZXNCeVBhZ2Uobm9kZXMsIG5vZGVIZWlnaHRzLCBwYWdlSGVpZ2h0KVxuXG4gICAgcmV0dXJuIHsgcGFnZXMsIHRvdGFsSGVpZ2h0OiBwYWdlcy5sZW5ndGggKiBwYWdlSGVpZ2h0IH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFnZUhlaWdodCwgaW5pdGlhbFBhZ2UsIGluaXRpYWxQcm9ncmVzcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBsZXQgc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKGluaXRpYWxQcm9ncmVzcykge1xuICAgICAgc2Nyb2xsVG9wID0gdG90YWxIZWlnaHQgKiBpbml0aWFsUHJvZ3Jlc3NcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxQYWdlKSB7XG4gICAgICBzY3JvbGxUb3AgPSBwYWdlSGVpZ2h0ICogKGluaXRpYWxQYWdlIC0gMSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlcywgdG90YWxIZWlnaHQgfSA9IHRoaXMuY2FsY1BhZ2VzKClcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBwYWdlQ291bnQsIHBhZ2VIZWlnaHQsIGZsdWlkLCBzaG93UGFnZUluZm8gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdGFydFBhZ2VJbmRleCA9IGN1cnJlbnRQYWdlIC0gMVxuICAgIGNvbnN0IGVuZFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4ICsgcGFnZUNvdW50XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAncGFnZXMnOiAhZmx1aWQsXG4gICAgICAncGFnZXMtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VMaXN0RG9tID0gcmVmIH0gfSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3sgaGVpZ2h0OiB0b3RhbEhlaWdodCB9fT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBfLnNsaWNlKHBhZ2VzLCBzdGFydFBhZ2VJbmRleCwgZW5kUGFnZUluZGV4KS5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJvb2tQYWdlXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XG4gICAgICAgICAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2UgPSByZWYgfSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPFZpZXdlclNjcm9sbGJhclxuICAgICAgICAgIHZpc2libGU9e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbD17cGFnZXMubGVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VMaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL0Jvb2tQYWdlTGlzdC51dGlscydcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX2Jvb2stcGFnZS5zY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBhZ2U6IHV0aWxzLlRQYWdlXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBmbHVpZDogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBib29rUGFnZURvbTogSFRNTERpdkVsZW1lbnRcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlOiB7IG5vZGVzLCBtZXRhIH0sIHBhZ2VIZWlnaHQsIGZsdWlkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogcGFnZUhlaWdodCAqIChtZXRhLnBhZ2VObyAtIDEpLFxuICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgIH1cbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlJzogIWZsdWlkLFxuICAgICAgJ3BhZ2UtLWZsdWlkJzogZmx1aWRcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogbWV0YS5vZmZzZXQgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5vZGVzLmpvaW4oJycpIH19XG4gICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlRG9tID0gcmVmIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJwYWdlLW5vXCI+e21ldGEucGFnZU5vfTwvZGl2PlxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29udGVudFwiOlwiY29udGVudF8xbXlkSVwiLFwicGFnZVwiOlwicGFnZV8xU1U0aFwiLFwicGFnZS0tZmx1aWRcIjpcInBhZ2UtLWZsdWlkX3ZYOHJRIHBhZ2VfMVNVNGhcIixcInBhZ2UtLWluaXRcIjpcInBhZ2UtLWluaXRfOERaRkJcIixcInBhZ2Utbm9cIjpcInBhZ2Utbm9fMWpiVi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8gbG9uZyBwYXJhZ3JhcGggc2l0dWF0aW9uIGRvZXNuJ3Qgc2VlbSB0byBhZmZlY3QgdGhpcyBmdW5jdGlvblxuLy8gb2Zmc2V0IGRpc3RhbmNlIGlzIGFsd2F5cyBuZWd0aXZlIG9yIHplcm9cbi8vIHRoZSBpbmRleCB3aWxsIGJlIG9mIHRoZSBwYXJhZ3JhcGggd2l0aCB0aGlzIG9mZnNldCBhdCB0aGUgZW5kXG5mdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KHtwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBub2RlSW5kZXggPSAwXG4gIGxldCBub2RlU3RhcnRJbmRleFxuXG4gIGlmIChwYWdlSW5kZXggIT09IDApIHtcbiAgICBsZXQgbm9kZUhlaWdodFN1bSA9IDBcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICogcGFnZUluZGV4KSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG9mZnNldCA9IG5vZGVIZWlnaHRTdW0gLSBub2RlSGVpZ2h0c1tub2RlSW5kZXggLSAxXSAtIHBhZ2VJbmRleCAqIHBhZ2VIZWlnaHRcbiAgICBub2RlU3RhcnRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlU3RhcnRJbmRleCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfVxufVxuXG5cbmZ1bmN0aW9uIGdldE5vZGVzT2ZQYWdlKHtwYWdlSW5kZXgsIG5vZGVzLCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0c306IHtcbiAgcGFnZUluZGV4OiBudW1iZXJcbiAgbm9kZXM6IGFueVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfSA9IGdldFBhZ2VPZmZzZXQoeyBwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzIH0pXG4gIGxldCBub2RlSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICBsZXQgbm9kZUVuZEluZGV4XG4gIGxldCBwYWdlTm9kZXMgPSBbXVxuXG4gIGxldCBub2RlSGVpZ2h0U3VtID0gb2Zmc2V0ICsgbm9kZUhlaWdodHNbbm9kZVN0YXJ0SW5kZXhdXG5cbiAgbm9kZUluZGV4KytcbiAgaWYgKG5vZGVIZWlnaHRTdW0gPCBwYWdlSGVpZ2h0KSB7XG4gICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAmJiBub2RlSW5kZXggIT09IG5vZGVzLmxlbmd0aCkge1xuICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tub2RlSW5kZXhdXG4gICAgICBub2RlSW5kZXgrK1xuICAgIH1cbiAgICBub2RlRW5kSW5kZXggPSBub2RlSW5kZXggLSAxXG4gIH0gZWxzZSB7XG4gICAgbm9kZUVuZEluZGV4ID0gbm9kZVN0YXJ0SW5kZXhcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBub2RlU3RhcnRJbmRleDsgaSA8PSBub2RlRW5kSW5kZXggJiYgaSA8PSBub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBwYWdlTm9kZXMucHVzaChub2Rlc1tpXSlcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VOb2Rlcywgb2Zmc2V0IH1cbn1cblxuXG5leHBvcnQgdHlwZSBUUGFnZSA9IHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG1ldGE6IGFueVxufVxuZXhwb3J0IHR5cGUgVFBhZ2VMaXN0ID0gVFBhZ2VbXVxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXM6IGFueSwgbm9kZUhlaWdodHM6IG51bWJlcltdLCBwYWdlSGVpZ2h0OiBudW1iZXIpOiBUUGFnZUxpc3Qge1xuICBsZXQgcGFnZXMgPSBbXVxuICBsZXQgcGFnZUhlaWdodFN1bSA9IG5vZGVIZWlnaHRzLnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMClcbiAgbGV0IHBhZ2VTdW0gPSBNYXRoLmNlaWwocGFnZUhlaWdodFN1bSAvIHBhZ2VIZWlnaHQpXG5cbiAgY29uc29sZS5sb2coJ3RvZG86IGdyb3VwIG5vZGVzJylcbiAgLy8gbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gIC8vICAgbm9kZS5wcm9wcy5pbmRleCA9IGluZGV4XG4gIC8vICAgcmV0dXJuIG5vZGVcbiAgLy8gfSlcblxuICBpZiAobm9kZUhlaWdodHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBub2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiAxLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH1cbiAgICB9XVxuICB9XG5cbiAgLy8gZmluYWxseVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VTdW07IGkrKykge1xuICAgIGNvbnN0IHsgcGFnZU5vZGVzLCBvZmZzZXQgfSA9IGdldE5vZGVzT2ZQYWdlKHsgcGFnZUluZGV4OiBpLCBub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQgfSlcblxuICAgIHBhZ2VzLnB1c2goe1xuICAgICAgbm9kZXM6IHBhZ2VOb2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiBpICsgMSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcGFnZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRhZ2VUb1BhZ2UocDogbnVtYmVyLCBwYWdlU3VtOiBudW1iZXIpIHtcbiAgaWYgKHAgPiAxKSB7XG4gICAgY29uc29sZS5lcnJvcignV3JvbmcgcGFyYW1ldGVyIScpXG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoKHAgKiBwYWdlU3VtKSBhcyBhbnkpICsgMVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC51dGlscy50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItc2Nyb2xsYmFyLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjdXJyZW50OiBudW1iZXJcbiAgdG90YWw6IG51bWJlclxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCwgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChjdXJyZW50IC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy52aXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsb2MtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+PHN0cm9uZz57Y3VycmVudH08L3N0cm9uZz4ve3RvdGFsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLWluZm9cIj57cGVyY2VudGFnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJTY3JvbGxiYXIudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2Nyb2xsYmFyXCI6XCJzY3JvbGxiYXJfM3ZIbHRcIixcImJ1dHRvblwiOlwiYnV0dG9uXzF2ZHFVXCIsXCJ0cmFja1wiOlwidHJhY2tfMkZMVEFcIixcInRyYWNrLS1wYXN0XCI6XCJ0cmFjay0tcGFzdF8zWUtkNCB0cmFja18yRkxUQVwiLFwibG9jLWluZm9cIjpcImxvYy1pbmZvXzM3N1Z1XCIsXCJzdWItaW5mb1wiOlwic3ViLWluZm9fM3FJNXVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlc1wiOlwicGFnZXNfMVNOaXNcIixcInBhZ2VzLS1mbHVpZFwiOlwicGFnZXMtLWZsdWlkXzM5RlBlIHBhZ2VzXzFTTmlzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyDmmoLkuI3mlK/mjIHljIXlkKvlm77niYfnmoTorqHnrpdcbi8vIOiuoeeul+ayoeacieetieW+heWbvueJh+WKoOi9veWujOaIkO+8jOaJgOS7pee7k+aenOaYr+S4jeato+ehrueahFxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVIZWlnaHRzKG5vZGVzKSB7XG4gIGNvbnNvbGUubG9nKCdkb20gcmVhZHksIGdldE5vZGVIZWlnaHRzJylcbiAgbGV0IG5vZGVzSGVpZ2h0ID0gW11cblxuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBpZiAobm9kZS5jbGFzc05hbWUgIT09ICdnYi1saW5lJykge1xuICAgICAgY29uc29sZS5lcnJvcignVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCEnKVxuICAgIH1cbiAgICBub2Rlc0hlaWdodC5wdXNoKG5vZGUuY2xpZW50SGVpZ2h0KVxuICB9KVxuXG4gIHJldHVybiBub2Rlc0hlaWdodFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrZG93blRvTm9kZVN0cmluZ0xpc3QobWFya2Rvd246IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IG1kJylcbiAgbGV0IGh0bWwgPSBtYXJrZWQobWFya2Rvd24sIHtcbiAgICBnZm06IHRydWUsXG4gICAgYnJlYWtzOiB0cnVlXG4gIH0pXG4gIGNvbnNvbGUubG9nKCdkb25lIG1hcmtlZCcpXG4gIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlXG4gICAgLm1hcC5jYWxsKCQoaHRtbCksIChlbGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlLm5vZGVUeXBlID09PSAzICYmIGVsZS5ub2RlVmFsdWUgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIOenu+mZpCBodG1sIOmHjOeahOWbnui9plxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlLnRhZ05hbWUgPT09ICdQJykge1xuICAgICAgICByZXR1cm4gYDxwIGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLmlubmVySFRNTH08L3A+YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ2ItbGluZVwiPiR7ZWxlLm91dGVySFRNTH08L2Rpdj5gXG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZSlcbiAgLy8gY29uc29sZS5sb2cobm9kZXMpXG4gIGNvbnNvbGUubG9nKCdlbmQgbWQnKVxuICByZXR1cm4gbm9kZXNcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnV0aWxzLnRzXG4gKiovIiwiLyoqXG4gKiBtYXJrZWQgLSBhIG1hcmtkb3duIHBhcnNlclxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTQsIENocmlzdG9waGVyIEplZmZyZXkuIChNSVQgTGljZW5zZWQpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hqai9tYXJrZWRcbiAqL1xuXG47KGZ1bmN0aW9uKCkge1xuXG4vKipcbiAqIEJsb2NrLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgYmxvY2sgPSB7XG4gIG5ld2xpbmU6IC9eXFxuKy8sXG4gIGNvZGU6IC9eKCB7NH1bXlxcbl0rXFxuKikrLyxcbiAgZmVuY2VzOiBub29wLFxuICBocjogL14oICpbLSpfXSl7Myx9ICooPzpcXG4rfCQpLyxcbiAgaGVhZGluZzogL14gKigjezEsNn0pICooW15cXG5dKz8pICojKiAqKD86XFxuK3wkKS8sXG4gIG5wdGFibGU6IG5vb3AsXG4gIGxoZWFkaW5nOiAvXihbXlxcbl0rKVxcbiAqKD18LSl7Mix9ICooPzpcXG4rfCQpLyxcbiAgYmxvY2txdW90ZTogL14oICo+W15cXG5dKyhcXG4oPyFkZWYpW15cXG5dKykqXFxuKikrLyxcbiAgbGlzdDogL14oICopKGJ1bGwpIFtcXHNcXFNdKz8oPzpocnxkZWZ8XFxuezIsfSg/ISApKD8hXFwxYnVsbCApXFxuKnxcXHMqJCkvLFxuICBodG1sOiAvXiAqKD86Y29tbWVudCAqKD86XFxufFxccyokKXxjbG9zZWQgKig/OlxcbnsyLH18XFxzKiQpfGNsb3NpbmcgKig/OlxcbnsyLH18XFxzKiQpKS8sXG4gIGRlZjogL14gKlxcWyhbXlxcXV0rKVxcXTogKjw/KFteXFxzPl0rKT4/KD86ICtbXCIoXShbXlxcbl0rKVtcIildKT8gKig/Olxcbit8JCkvLFxuICB0YWJsZTogbm9vcCxcbiAgcGFyYWdyYXBoOiAvXigoPzpbXlxcbl0rXFxuPyg/IWhyfGhlYWRpbmd8bGhlYWRpbmd8YmxvY2txdW90ZXx0YWd8ZGVmKSkrKVxcbiovLFxuICB0ZXh0OiAvXlteXFxuXSsvXG59O1xuXG5ibG9jay5idWxsZXQgPSAvKD86WyorLV18XFxkK1xcLikvO1xuYmxvY2suaXRlbSA9IC9eKCAqKShidWxsKSBbXlxcbl0qKD86XFxuKD8hXFwxYnVsbCApW15cXG5dKikqLztcbmJsb2NrLml0ZW0gPSByZXBsYWNlKGJsb2NrLml0ZW0sICdnbScpXG4gICgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gICgpO1xuXG5ibG9jay5saXN0ID0gcmVwbGFjZShibG9jay5saXN0KVxuICAoL2J1bGwvZywgYmxvY2suYnVsbGV0KVxuICAoJ2hyJywgJ1xcXFxuKyg/PVxcXFwxPyg/OlstKl9dICopezMsfSg/OlxcXFxuK3wkKSknKVxuICAoJ2RlZicsICdcXFxcbisoPz0nICsgYmxvY2suZGVmLnNvdXJjZSArICcpJylcbiAgKCk7XG5cbmJsb2NrLmJsb2NrcXVvdGUgPSByZXBsYWNlKGJsb2NrLmJsb2NrcXVvdGUpXG4gICgnZGVmJywgYmxvY2suZGVmKVxuICAoKTtcblxuYmxvY2suX3RhZyA9ICcoPyEoPzonXG4gICsgJ2F8ZW18c3Ryb25nfHNtYWxsfHN8Y2l0ZXxxfGRmbnxhYmJyfGRhdGF8dGltZXxjb2RlJ1xuICArICd8dmFyfHNhbXB8a2JkfHN1YnxzdXB8aXxifHV8bWFya3xydWJ5fHJ0fHJwfGJkaXxiZG8nXG4gICsgJ3xzcGFufGJyfHdicnxpbnN8ZGVsfGltZylcXFxcYilcXFxcdysoPyE6L3xbXlxcXFx3XFxcXHNAXSpAKVxcXFxiJztcblxuYmxvY2suaHRtbCA9IHJlcGxhY2UoYmxvY2suaHRtbClcbiAgKCdjb21tZW50JywgLzwhLS1bXFxzXFxTXSo/LS0+LylcbiAgKCdjbG9zZWQnLCAvPCh0YWcpW1xcc1xcU10rPzxcXC9cXDE+LylcbiAgKCdjbG9zaW5nJywgLzx0YWcoPzpcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPz4vKVxuICAoL3RhZy9nLCBibG9jay5fdGFnKVxuICAoKTtcblxuYmxvY2sucGFyYWdyYXBoID0gcmVwbGFjZShibG9jay5wYXJhZ3JhcGgpXG4gICgnaHInLCBibG9jay5ocilcbiAgKCdoZWFkaW5nJywgYmxvY2suaGVhZGluZylcbiAgKCdsaGVhZGluZycsIGJsb2NrLmxoZWFkaW5nKVxuICAoJ2Jsb2NrcXVvdGUnLCBibG9jay5ibG9ja3F1b3RlKVxuICAoJ3RhZycsICc8JyArIGJsb2NrLl90YWcpXG4gICgnZGVmJywgYmxvY2suZGVmKVxuICAoKTtcblxuLyoqXG4gKiBOb3JtYWwgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLm5vcm1hbCA9IG1lcmdlKHt9LCBibG9jayk7XG5cbi8qKlxuICogR0ZNIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay5nZm0gPSBtZXJnZSh7fSwgYmxvY2subm9ybWFsLCB7XG4gIGZlbmNlczogL14gKihgezMsfXx+ezMsfSlbIFxcLl0qKFxcUyspPyAqXFxuKFtcXHNcXFNdKj8pXFxzKlxcMSAqKD86XFxuK3wkKS8sXG4gIHBhcmFncmFwaDogL14vLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKyhbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpL1xufSk7XG5cbmJsb2NrLmdmbS5wYXJhZ3JhcGggPSByZXBsYWNlKGJsb2NrLnBhcmFncmFwaClcbiAgKCcoPyEnLCAnKD8hJ1xuICAgICsgYmxvY2suZ2ZtLmZlbmNlcy5zb3VyY2UucmVwbGFjZSgnXFxcXDEnLCAnXFxcXDInKSArICd8J1xuICAgICsgYmxvY2subGlzdC5zb3VyY2UucmVwbGFjZSgnXFxcXDEnLCAnXFxcXDMnKSArICd8JylcbiAgKCk7XG5cbi8qKlxuICogR0ZNICsgVGFibGVzIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay50YWJsZXMgPSBtZXJnZSh7fSwgYmxvY2suZ2ZtLCB7XG4gIG5wdGFibGU6IC9eICooXFxTLipcXHwuKilcXG4gKihbLTpdKyAqXFx8Wy18IDpdKilcXG4oKD86LipcXHwuKig/OlxcbnwkKSkqKVxcbiovLFxuICB0YWJsZTogL14gKlxcfCguKylcXG4gKlxcfCggKlstOl0rWy18IDpdKilcXG4oKD86ICpcXHwuKig/OlxcbnwkKSkqKVxcbiovXG59KTtcblxuLyoqXG4gKiBCbG9jayBMZXhlclxuICovXG5cbmZ1bmN0aW9uIExleGVyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbnMubGlua3MgPSB7fTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG4gIHRoaXMucnVsZXMgPSBibG9jay5ub3JtYWw7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRhYmxlcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGJsb2NrLnRhYmxlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IGJsb2NrLmdmbTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2UgQmxvY2sgUnVsZXNcbiAqL1xuXG5MZXhlci5ydWxlcyA9IGJsb2NrO1xuXG4vKipcbiAqIFN0YXRpYyBMZXggTWV0aG9kXG4gKi9cblxuTGV4ZXIubGV4ID0gZnVuY3Rpb24oc3JjLCBvcHRpb25zKSB7XG4gIHZhciBsZXhlciA9IG5ldyBMZXhlcihvcHRpb25zKTtcbiAgcmV0dXJuIGxleGVyLmxleChzcmMpO1xufTtcblxuLyoqXG4gKiBQcmVwcm9jZXNzaW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLmxleCA9IGZ1bmN0aW9uKHNyYykge1xuICBzcmMgPSBzcmNcbiAgICAucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJylcbiAgICAucmVwbGFjZSgvXFx0L2csICcgICAgJylcbiAgICAucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpXG4gICAgLnJlcGxhY2UoL1xcdTI0MjQvZywgJ1xcbicpO1xuXG4gIHJldHVybiB0aGlzLnRva2VuKHNyYywgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIExleGluZ1xuICovXG5cbkxleGVyLnByb3RvdHlwZS50b2tlbiA9IGZ1bmN0aW9uKHNyYywgdG9wLCBicSkge1xuICB2YXIgc3JjID0gc3JjLnJlcGxhY2UoL14gKyQvZ20sICcnKVxuICAgICwgbmV4dFxuICAgICwgbG9vc2VcbiAgICAsIGNhcFxuICAgICwgYnVsbFxuICAgICwgYlxuICAgICwgaXRlbVxuICAgICwgc3BhY2VcbiAgICAsIGlcbiAgICAsIGw7XG5cbiAgd2hpbGUgKHNyYykge1xuICAgIC8vIG5ld2xpbmVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5uZXdsaW5lLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbMF0ubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnc3BhY2UnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGNhcCA9IGNhcFswXS5yZXBsYWNlKC9eIHs0fS9nbSwgJycpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgdGV4dDogIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgID8gY2FwLnJlcGxhY2UoL1xcbiskLywgJycpXG4gICAgICAgICAgOiBjYXBcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZmVuY2VzIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZmVuY2VzLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIGxhbmc6IGNhcFsyXSxcbiAgICAgICAgdGV4dDogY2FwWzNdIHx8ICcnXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5oZWFkaW5nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgIGRlcHRoOiBjYXBbMV0ubGVuZ3RoLFxuICAgICAgICB0ZXh0OiBjYXBbMl1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFibGUgbm8gbGVhZGluZyBwaXBlIChnZm0pXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5ucHRhYmxlLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBjZWxsczogY2FwWzNdLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAncmlnaHQnO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdjZW50ZXInO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSsgKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBpdGVtLmNlbGxzW2ldLnNwbGl0KC8gKlxcfCAqLyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goaXRlbSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxoZWFkaW5nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsyXSA9PT0gJz0nID8gMSA6IDIsXG4gICAgICAgIHRleHQ6IGNhcFsxXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBoclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaHInXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGJsb2NrcXVvdGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ibG9ja3F1b3RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX3N0YXJ0J1xuICAgICAgfSk7XG5cbiAgICAgIGNhcCA9IGNhcFswXS5yZXBsYWNlKC9eICo+ID8vZ20sICcnKTtcblxuICAgICAgLy8gUGFzcyBgdG9wYCB0byBrZWVwIHRoZSBjdXJyZW50XG4gICAgICAvLyBcInRvcGxldmVsXCIgc3RhdGUuIFRoaXMgaXMgZXhhY3RseVxuICAgICAgLy8gaG93IG1hcmtkb3duLnBsIHdvcmtzLlxuICAgICAgdGhpcy50b2tlbihjYXAsIHRvcCwgdHJ1ZSk7XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnYmxvY2txdW90ZV9lbmQnXG4gICAgICB9KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGlzdFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxpc3QuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgYnVsbCA9IGNhcFsyXTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X3N0YXJ0JyxcbiAgICAgICAgb3JkZXJlZDogYnVsbC5sZW5ndGggPiAxXG4gICAgICB9KTtcblxuICAgICAgLy8gR2V0IGVhY2ggdG9wLWxldmVsIGl0ZW0uXG4gICAgICBjYXAgPSBjYXBbMF0ubWF0Y2godGhpcy5ydWxlcy5pdGVtKTtcblxuICAgICAgbmV4dCA9IGZhbHNlO1xuICAgICAgbCA9IGNhcC5sZW5ndGg7XG4gICAgICBpID0gMDtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGNhcFtpXTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGxpc3QgaXRlbSdzIGJ1bGxldFxuICAgICAgICAvLyBzbyBpdCBpcyBzZWVuIGFzIHRoZSBuZXh0IHRva2VuLlxuICAgICAgICBzcGFjZSA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9eICooWyorLV18XFxkK1xcLikgKy8sICcnKTtcblxuICAgICAgICAvLyBPdXRkZW50IHdoYXRldmVyIHRoZVxuICAgICAgICAvLyBsaXN0IGl0ZW0gY29udGFpbnMuIEhhY2t5LlxuICAgICAgICBpZiAofml0ZW0uaW5kZXhPZignXFxuICcpKSB7XG4gICAgICAgICAgc3BhY2UgLT0gaXRlbS5sZW5ndGg7XG4gICAgICAgICAgaXRlbSA9ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICAgID8gaXRlbS5yZXBsYWNlKG5ldyBSZWdFeHAoJ14gezEsJyArIHNwYWNlICsgJ30nLCAnZ20nKSwgJycpXG4gICAgICAgICAgICA6IGl0ZW0ucmVwbGFjZSgvXiB7MSw0fS9nbSwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5leHQgbGlzdCBpdGVtIGJlbG9uZ3MgaGVyZS5cbiAgICAgICAgLy8gQmFja3BlZGFsIGlmIGl0IGRvZXMgbm90IGJlbG9uZyBpbiB0aGlzIGxpc3QuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc21hcnRMaXN0cyAmJiBpICE9PSBsIC0gMSkge1xuICAgICAgICAgIGIgPSBibG9jay5idWxsZXQuZXhlYyhjYXBbaSArIDFdKVswXTtcbiAgICAgICAgICBpZiAoYnVsbCAhPT0gYiAmJiAhKGJ1bGwubGVuZ3RoID4gMSAmJiBiLmxlbmd0aCA+IDEpKSB7XG4gICAgICAgICAgICBzcmMgPSBjYXAuc2xpY2UoaSArIDEpLmpvaW4oJ1xcbicpICsgc3JjO1xuICAgICAgICAgICAgaSA9IGwgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIGl0ZW0gaXMgbG9vc2Ugb3Igbm90LlxuICAgICAgICAvLyBVc2U6IC8oXnxcXG4pKD8hIClbXlxcbl0rXFxuXFxuKD8hXFxzKiQpL1xuICAgICAgICAvLyBmb3IgZGlzY291bnQgYmVoYXZpb3IuXG4gICAgICAgIGxvb3NlID0gbmV4dCB8fCAvXFxuXFxuKD8hXFxzKiQpLy50ZXN0KGl0ZW0pO1xuICAgICAgICBpZiAoaSAhPT0gbCAtIDEpIHtcbiAgICAgICAgICBuZXh0ID0gaXRlbS5jaGFyQXQoaXRlbS5sZW5ndGggLSAxKSA9PT0gJ1xcbic7XG4gICAgICAgICAgaWYgKCFsb29zZSkgbG9vc2UgPSBuZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogbG9vc2VcbiAgICAgICAgICAgID8gJ2xvb3NlX2l0ZW1fc3RhcnQnXG4gICAgICAgICAgICA6ICdsaXN0X2l0ZW1fc3RhcnQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlY3Vyc2UuXG4gICAgICAgIHRoaXMudG9rZW4oaXRlbSwgZmFsc2UsIGJxKTtcblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnbGlzdF9pdGVtX2VuZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlzdF9lbmQnXG4gICAgICB9KTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaHRtbFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmh0bWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IHRoaXMub3B0aW9ucy5zYW5pdGl6ZVxuICAgICAgICAgID8gJ3BhcmFncmFwaCdcbiAgICAgICAgICA6ICdodG1sJyxcbiAgICAgICAgcHJlOiAhdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgICYmIChjYXBbMV0gPT09ICdwcmUnIHx8IGNhcFsxXSA9PT0gJ3NjcmlwdCcgfHwgY2FwWzFdID09PSAnc3R5bGUnKSxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlZlxuICAgIGlmICgoIWJxICYmIHRvcCkgJiYgKGNhcCA9IHRoaXMucnVsZXMuZGVmLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5saW5rc1tjYXBbMV0udG9Mb3dlckNhc2UoKV0gPSB7XG4gICAgICAgIGhyZWY6IGNhcFsyXSxcbiAgICAgICAgdGl0bGU6IGNhcFszXVxuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIChnZm0pXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy50YWJsZS5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IGNhcFsxXS5yZXBsYWNlKC9eICp8ICpcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGFsaWduOiBjYXBbMl0ucmVwbGFjZSgvXiAqfFxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgY2VsbHM6IGNhcFszXS5yZXBsYWNlKC8oPzogKlxcfCAqKT9cXG4kLywgJycpLnNwbGl0KCdcXG4nKVxuICAgICAgfTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uYWxpZ24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKC9eICotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnY2VudGVyJztcbiAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdsZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpdGVtLmNlbGxzW2ldID0gaXRlbS5jZWxsc1tpXVxuICAgICAgICAgIC5yZXBsYWNlKC9eICpcXHwgKnwgKlxcfCAqJC9nLCAnJylcbiAgICAgICAgICAuc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdG9wLWxldmVsIHBhcmFncmFwaFxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMucGFyYWdyYXBoLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIHRleHQ6IGNhcFsxXS5jaGFyQXQoY2FwWzFdLmxlbmd0aCAtIDEpID09PSAnXFxuJ1xuICAgICAgICAgID8gY2FwWzFdLnNsaWNlKDAsIC0xKVxuICAgICAgICAgIDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgLy8gVG9wLWxldmVsIHNob3VsZCBuZXZlciByZWFjaCBoZXJlLlxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG4vKipcbiAqIElubGluZS1MZXZlbCBHcmFtbWFyXG4gKi9cblxudmFyIGlubGluZSA9IHtcbiAgZXNjYXBlOiAvXlxcXFwoW1xcXFxgKnt9XFxbXFxdKCkjK1xcLS4hXz5dKS8sXG4gIGF1dG9saW5rOiAvXjwoW14gPl0rKEB8OlxcLylbXiA+XSspPi8sXG4gIHVybDogbm9vcCxcbiAgdGFnOiAvXjwhLS1bXFxzXFxTXSo/LS0+fF48XFwvP1xcdysoPzpcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPz4vLFxuICBsaW5rOiAvXiE/XFxbKGluc2lkZSlcXF1cXChocmVmXFwpLyxcbiAgcmVmbGluazogL14hP1xcWyhpbnNpZGUpXFxdXFxzKlxcWyhbXlxcXV0qKVxcXS8sXG4gIG5vbGluazogL14hP1xcWygoPzpcXFtbXlxcXV0qXFxdfFteXFxbXFxdXSkqKVxcXS8sXG4gIHN0cm9uZzogL15fXyhbXFxzXFxTXSs/KV9fKD8hXyl8XlxcKlxcKihbXFxzXFxTXSs/KVxcKlxcKig/IVxcKikvLFxuICBlbTogL15cXGJfKCg/OlteX118X18pKz8pX1xcYnxeXFwqKCg/OlxcKlxcKnxbXFxzXFxTXSkrPylcXCooPyFcXCopLyxcbiAgY29kZTogL14oYCspXFxzKihbXFxzXFxTXSo/W15gXSlcXHMqXFwxKD8hYCkvLFxuICBicjogL14gezIsfVxcbig/IVxccyokKS8sXG4gIGRlbDogbm9vcCxcbiAgdGV4dDogL15bXFxzXFxTXSs/KD89W1xcXFw8IVxcW18qYF18IHsyLH1cXG58JCkvXG59O1xuXG5pbmxpbmUuX2luc2lkZSA9IC8oPzpcXFtbXlxcXV0qXFxdfFteXFxbXFxdXXxcXF0oPz1bXlxcW10qXFxdKSkqLztcbmlubGluZS5faHJlZiA9IC9cXHMqPD8oW1xcc1xcU10qPyk+Pyg/OlxccytbJ1wiXShbXFxzXFxTXSo/KVsnXCJdKT9cXHMqLztcblxuaW5saW5lLmxpbmsgPSByZXBsYWNlKGlubGluZS5saW5rKVxuICAoJ2luc2lkZScsIGlubGluZS5faW5zaWRlKVxuICAoJ2hyZWYnLCBpbmxpbmUuX2hyZWYpXG4gICgpO1xuXG5pbmxpbmUucmVmbGluayA9IHJlcGxhY2UoaW5saW5lLnJlZmxpbmspXG4gICgnaW5zaWRlJywgaW5saW5lLl9pbnNpZGUpXG4gICgpO1xuXG4vKipcbiAqIE5vcm1hbCBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5ub3JtYWwgPSBtZXJnZSh7fSwgaW5saW5lKTtcblxuLyoqXG4gKiBQZWRhbnRpYyBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5wZWRhbnRpYyA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIHN0cm9uZzogL15fXyg/PVxcUykoW1xcc1xcU10qP1xcUylfXyg/IV8pfF5cXCpcXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqXFwqKD8hXFwqKS8sXG4gIGVtOiAvXl8oPz1cXFMpKFtcXHNcXFNdKj9cXFMpXyg/IV8pfF5cXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqKD8hXFwqKS9cbn0pO1xuXG4vKipcbiAqIEdGTSBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5nZm0gPSBtZXJnZSh7fSwgaW5saW5lLm5vcm1hbCwge1xuICBlc2NhcGU6IHJlcGxhY2UoaW5saW5lLmVzY2FwZSkoJ10pJywgJ358XSknKSgpLFxuICB1cmw6IC9eKGh0dHBzPzpcXC9cXC9bXlxcczxdK1tePC4sOjtcIicpXFxdXFxzXSkvLFxuICBkZWw6IC9efn4oPz1cXFMpKFtcXHNcXFNdKj9cXFMpfn4vLFxuICB0ZXh0OiByZXBsYWNlKGlubGluZS50ZXh0KVxuICAgICgnXXwnLCAnfl18JylcbiAgICAoJ3wnLCAnfGh0dHBzPzovL3wnKVxuICAgICgpXG59KTtcblxuLyoqXG4gKiBHRk0gKyBMaW5lIEJyZWFrcyBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5icmVha3MgPSBtZXJnZSh7fSwgaW5saW5lLmdmbSwge1xuICBicjogcmVwbGFjZShpbmxpbmUuYnIpKCd7Mix9JywgJyonKSgpLFxuICB0ZXh0OiByZXBsYWNlKGlubGluZS5nZm0udGV4dCkoJ3syLH0nLCAnKicpKClcbn0pO1xuXG4vKipcbiAqIElubGluZSBMZXhlciAmIENvbXBpbGVyXG4gKi9cblxuZnVuY3Rpb24gSW5saW5lTGV4ZXIobGlua3MsIG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG4gIHRoaXMubGlua3MgPSBsaW5rcztcbiAgdGhpcy5ydWxlcyA9IGlubGluZS5ub3JtYWw7XG4gIHRoaXMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgaWYgKCF0aGlzLmxpbmtzKSB7XG4gICAgdGhyb3cgbmV3XG4gICAgICBFcnJvcignVG9rZW5zIGFycmF5IHJlcXVpcmVzIGEgYGxpbmtzYCBwcm9wZXJ0eS4nKTtcbiAgfVxuXG4gIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5icmVha3MpIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuYnJlYWtzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gaW5saW5lLmdmbTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgdGhpcy5ydWxlcyA9IGlubGluZS5wZWRhbnRpYztcbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBJbmxpbmUgUnVsZXNcbiAqL1xuXG5JbmxpbmVMZXhlci5ydWxlcyA9IGlubGluZTtcblxuLyoqXG4gKiBTdGF0aWMgTGV4aW5nL0NvbXBpbGluZyBNZXRob2RcbiAqL1xuXG5JbmxpbmVMZXhlci5vdXRwdXQgPSBmdW5jdGlvbihzcmMsIGxpbmtzLCBvcHRpb25zKSB7XG4gIHZhciBpbmxpbmUgPSBuZXcgSW5saW5lTGV4ZXIobGlua3MsIG9wdGlvbnMpO1xuICByZXR1cm4gaW5saW5lLm91dHB1dChzcmMpO1xufTtcblxuLyoqXG4gKiBMZXhpbmcvQ29tcGlsaW5nXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm91dHB1dCA9IGZ1bmN0aW9uKHNyYykge1xuICB2YXIgb3V0ID0gJydcbiAgICAsIGxpbmtcbiAgICAsIHRleHRcbiAgICAsIGhyZWZcbiAgICAsIGNhcDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gZXNjYXBlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZXNjYXBlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSBjYXBbMV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBhdXRvbGlua1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmF1dG9saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbMl0gPT09ICdAJykge1xuICAgICAgICB0ZXh0ID0gY2FwWzFdLmNoYXJBdCg2KSA9PT0gJzonXG4gICAgICAgICAgPyB0aGlzLm1hbmdsZShjYXBbMV0uc3Vic3RyaW5nKDcpKVxuICAgICAgICAgIDogdGhpcy5tYW5nbGUoY2FwWzFdKTtcbiAgICAgICAgaHJlZiA9IHRoaXMubWFuZ2xlKCdtYWlsdG86JykgKyB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgIH1cbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB1cmwgKGdmbSlcbiAgICBpZiAoIXRoaXMuaW5MaW5rICYmIChjYXAgPSB0aGlzLnJ1bGVzLnVybC5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMV0pO1xuICAgICAgaHJlZiA9IHRleHQ7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIG51bGwsIHRleHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFnXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGFnLmV4ZWMoc3JjKSkge1xuICAgICAgaWYgKCF0aGlzLmluTGluayAmJiAvXjxhIC9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5MaW5rICYmIC9ePFxcL2E+L2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMub3B0aW9ucy5zYW5pdGl6ZVxuICAgICAgICA/IHRoaXMub3B0aW9ucy5zYW5pdGl6ZXJcbiAgICAgICAgICA/IHRoaXMub3B0aW9ucy5zYW5pdGl6ZXIoY2FwWzBdKVxuICAgICAgICAgIDogZXNjYXBlKGNhcFswXSlcbiAgICAgICAgOiBjYXBbMF1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCB7XG4gICAgICAgIGhyZWY6IGNhcFsyXSxcbiAgICAgICAgdGl0bGU6IGNhcFszXVxuICAgICAgfSk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gcmVmbGluaywgbm9saW5rXG4gICAgaWYgKChjYXAgPSB0aGlzLnJ1bGVzLnJlZmxpbmsuZXhlYyhzcmMpKVxuICAgICAgICB8fCAoY2FwID0gdGhpcy5ydWxlcy5ub2xpbmsuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGxpbmsgPSAoY2FwWzJdIHx8IGNhcFsxXSkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgbGluayA9IHRoaXMubGlua3NbbGluay50b0xvd2VyQ2FzZSgpXTtcbiAgICAgIGlmICghbGluayB8fCAhbGluay5ocmVmKSB7XG4gICAgICAgIG91dCArPSBjYXBbMF0uY2hhckF0KDApO1xuICAgICAgICBzcmMgPSBjYXBbMF0uc3Vic3RyaW5nKDEpICsgc3JjO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCBsaW5rKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBzdHJvbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5zdHJvbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuc3Ryb25nKHRoaXMub3V0cHV0KGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGVtXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZW0uZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZW0odGhpcy5vdXRwdXQoY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuY29kZXNwYW4oZXNjYXBlKGNhcFsyXSwgdHJ1ZSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYnJcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5ici5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5icigpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVsIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZGVsLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmRlbCh0aGlzLm91dHB1dChjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnRleHQoZXNjYXBlKHRoaXMuc21hcnR5cGFudHMoY2FwWzBdKSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3XG4gICAgICAgIEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSBMaW5rXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm91dHB1dExpbmsgPSBmdW5jdGlvbihjYXAsIGxpbmspIHtcbiAgdmFyIGhyZWYgPSBlc2NhcGUobGluay5ocmVmKVxuICAgICwgdGl0bGUgPSBsaW5rLnRpdGxlID8gZXNjYXBlKGxpbmsudGl0bGUpIDogbnVsbDtcblxuICByZXR1cm4gY2FwWzBdLmNoYXJBdCgwKSAhPT0gJyEnXG4gICAgPyB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgdGl0bGUsIHRoaXMub3V0cHV0KGNhcFsxXSkpXG4gICAgOiB0aGlzLnJlbmRlcmVyLmltYWdlKGhyZWYsIHRpdGxlLCBlc2NhcGUoY2FwWzFdKSk7XG59O1xuXG4vKipcbiAqIFNtYXJ0eXBhbnRzIFRyYW5zZm9ybWF0aW9uc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5zbWFydHlwYW50cyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMuc21hcnR5cGFudHMpIHJldHVybiB0ZXh0O1xuICByZXR1cm4gdGV4dFxuICAgIC8vIGVtLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS0vZywgJ1xcdTIwMTQnKVxuICAgIC8vIGVuLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS9nLCAnXFx1MjAxMycpXG4gICAgLy8gb3BlbmluZyBzaW5nbGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1wiXFxzXSknL2csICckMVxcdTIwMTgnKVxuICAgIC8vIGNsb3Npbmcgc2luZ2xlcyAmIGFwb3N0cm9waGVzXG4gICAgLnJlcGxhY2UoLycvZywgJ1xcdTIwMTknKVxuICAgIC8vIG9wZW5pbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcXHUyMDE4XFxzXSlcIi9nLCAnJDFcXHUyMDFjJylcbiAgICAvLyBjbG9zaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcdTIwMWQnKVxuICAgIC8vIGVsbGlwc2VzXG4gICAgLnJlcGxhY2UoL1xcLnszfS9nLCAnXFx1MjAyNicpO1xufTtcblxuLyoqXG4gKiBNYW5nbGUgTGlua3NcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUubWFuZ2xlID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5tYW5nbGUpIHJldHVybiB0ZXh0O1xuICB2YXIgb3V0ID0gJydcbiAgICAsIGwgPSB0ZXh0Lmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIGNoO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2ggPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgIGNoID0gJ3gnICsgY2gudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBvdXQgKz0gJyYjJyArIGNoICsgJzsnO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUmVuZGVyZXJcbiAqL1xuXG5mdW5jdGlvbiBSZW5kZXJlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG59XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jb2RlID0gZnVuY3Rpb24oY29kZSwgbGFuZywgZXNjYXBlZCkge1xuICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIHZhciBvdXQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KGNvZGUsIGxhbmcpO1xuICAgIGlmIChvdXQgIT0gbnVsbCAmJiBvdXQgIT09IGNvZGUpIHtcbiAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgY29kZSA9IG91dDtcbiAgICB9XG4gIH1cblxuICBpZiAoIWxhbmcpIHtcbiAgICByZXR1cm4gJzxwcmU+PGNvZGU+J1xuICAgICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgICArICdcXG48L2NvZGU+PC9wcmU+JztcbiAgfVxuXG4gIHJldHVybiAnPHByZT48Y29kZSBjbGFzcz1cIidcbiAgICArIHRoaXMub3B0aW9ucy5sYW5nUHJlZml4XG4gICAgKyBlc2NhcGUobGFuZywgdHJ1ZSlcbiAgICArICdcIj4nXG4gICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgKyAnXFxuPC9jb2RlPjwvcHJlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYmxvY2txdW90ZSA9IGZ1bmN0aW9uKHF1b3RlKSB7XG4gIHJldHVybiAnPGJsb2NrcXVvdGU+XFxuJyArIHF1b3RlICsgJzwvYmxvY2txdW90ZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBodG1sO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmhlYWRpbmcgPSBmdW5jdGlvbih0ZXh0LCBsZXZlbCwgcmF3KSB7XG4gIHJldHVybiAnPGgnXG4gICAgKyBsZXZlbFxuICAgICsgJyBpZD1cIidcbiAgICArIHRoaXMub3B0aW9ucy5oZWFkZXJQcmVmaXhcbiAgICArIHJhdy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgJy0nKVxuICAgICsgJ1wiPidcbiAgICArIHRleHRcbiAgICArICc8L2gnXG4gICAgKyBsZXZlbFxuICAgICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmhyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGhyLz5cXG4nIDogJzxocj5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbihib2R5LCBvcmRlcmVkKSB7XG4gIHZhciB0eXBlID0gb3JkZXJlZCA/ICdvbCcgOiAndWwnO1xuICByZXR1cm4gJzwnICsgdHlwZSArICc+XFxuJyArIGJvZHkgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saXN0aXRlbSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8bGk+JyArIHRleHQgKyAnPC9saT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnBhcmFncmFwaCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8cD4nICsgdGV4dCArICc8L3A+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZSA9IGZ1bmN0aW9uKGhlYWRlciwgYm9keSkge1xuICByZXR1cm4gJzx0YWJsZT5cXG4nXG4gICAgKyAnPHRoZWFkPlxcbidcbiAgICArIGhlYWRlclxuICAgICsgJzwvdGhlYWQ+XFxuJ1xuICAgICsgJzx0Ym9keT5cXG4nXG4gICAgKyBib2R5XG4gICAgKyAnPC90Ym9keT5cXG4nXG4gICAgKyAnPC90YWJsZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlcm93ID0gZnVuY3Rpb24oY29udGVudCkge1xuICByZXR1cm4gJzx0cj5cXG4nICsgY29udGVudCArICc8L3RyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVjZWxsID0gZnVuY3Rpb24oY29udGVudCwgZmxhZ3MpIHtcbiAgdmFyIHR5cGUgPSBmbGFncy5oZWFkZXIgPyAndGgnIDogJ3RkJztcbiAgdmFyIHRhZyA9IGZsYWdzLmFsaWduXG4gICAgPyAnPCcgKyB0eXBlICsgJyBzdHlsZT1cInRleHQtYWxpZ246JyArIGZsYWdzLmFsaWduICsgJ1wiPidcbiAgICA6ICc8JyArIHR5cGUgKyAnPic7XG4gIHJldHVybiB0YWcgKyBjb250ZW50ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG4vLyBzcGFuIGxldmVsIHJlbmRlcmVyXG5SZW5kZXJlci5wcm90b3R5cGUuc3Ryb25nID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxzdHJvbmc+JyArIHRleHQgKyAnPC9zdHJvbmc+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5lbSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZW0+JyArIHRleHQgKyAnPC9lbT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGVzcGFuID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxjb2RlPicgKyB0ZXh0ICsgJzwvY29kZT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGJyLz4nIDogJzxicj4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZGVsPicgKyB0ZXh0ICsgJzwvZGVsPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuc2FuaXRpemUpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHByb3QgPSBkZWNvZGVVUklDb21wb25lbnQodW5lc2NhcGUoaHJlZikpXG4gICAgICAgIC5yZXBsYWNlKC9bXlxcdzpdL2csICcnKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChwcm90LmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDAgfHwgcHJvdC5pbmRleE9mKCd2YnNjcmlwdDonKSA9PT0gMCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuICB2YXIgb3V0ID0gJzxhIGhyZWY9XCInICsgaHJlZiArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gJz4nICsgdGV4dCArICc8L2E+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIHZhciBvdXQgPSAnPGltZyBzcmM9XCInICsgaHJlZiArICdcIiBhbHQ9XCInICsgdGV4dCArICdcIic7XG4gIGlmICh0aXRsZSkge1xuICAgIG91dCArPSAnIHRpdGxlPVwiJyArIHRpdGxlICsgJ1wiJztcbiAgfVxuICBvdXQgKz0gdGhpcy5vcHRpb25zLnhodG1sID8gJy8+JyA6ICc+JztcbiAgcmV0dXJuIG91dDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gdGV4dDtcbn07XG5cbi8qKlxuICogUGFyc2luZyAmIENvbXBpbGluZ1xuICovXG5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW4gPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlcjtcbiAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xufVxuXG4vKipcbiAqIFN0YXRpYyBQYXJzZSBNZXRob2RcbiAqL1xuXG5QYXJzZXIucGFyc2UgPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMsIHJlbmRlcmVyKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKG9wdGlvbnMsIHJlbmRlcmVyKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZShzcmMpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMb29wXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHNyYykge1xuICB0aGlzLmlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihzcmMubGlua3MsIHRoaXMub3B0aW9ucywgdGhpcy5yZW5kZXJlcik7XG4gIHRoaXMudG9rZW5zID0gc3JjLnJldmVyc2UoKTtcblxuICB2YXIgb3V0ID0gJyc7XG4gIHdoaWxlICh0aGlzLm5leHQoKSkge1xuICAgIG91dCArPSB0aGlzLnRvaygpO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbiA9IHRoaXMudG9rZW5zLnBvcCgpO1xufTtcblxuLyoqXG4gKiBQcmV2aWV3IE5leHQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMudG9rZW5zLmxlbmd0aCAtIDFdIHx8IDA7XG59O1xuXG4vKipcbiAqIFBhcnNlIFRleHQgVG9rZW5zXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHkgPSB0aGlzLnRva2VuLnRleHQ7XG5cbiAgd2hpbGUgKHRoaXMucGVlaygpLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGJvZHkgKz0gJ1xcbicgKyB0aGlzLm5leHQoKS50ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaW5saW5lLm91dHB1dChib2R5KTtcbn07XG5cbi8qKlxuICogUGFyc2UgQ3VycmVudCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUudG9rID0gZnVuY3Rpb24oKSB7XG4gIHN3aXRjaCAodGhpcy50b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnc3BhY2UnOiB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNhc2UgJ2hyJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaHIoKTtcbiAgICB9XG4gICAgY2FzZSAnaGVhZGluZyc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmhlYWRpbmcoXG4gICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLnRleHQpLFxuICAgICAgICB0aGlzLnRva2VuLmRlcHRoLFxuICAgICAgICB0aGlzLnRva2VuLnRleHQpO1xuICAgIH1cbiAgICBjYXNlICdjb2RlJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY29kZSh0aGlzLnRva2VuLnRleHQsXG4gICAgICAgIHRoaXMudG9rZW4ubGFuZyxcbiAgICAgICAgdGhpcy50b2tlbi5lc2NhcGVkKTtcbiAgICB9XG4gICAgY2FzZSAndGFibGUnOiB7XG4gICAgICB2YXIgaGVhZGVyID0gJydcbiAgICAgICAgLCBib2R5ID0gJydcbiAgICAgICAgLCBpXG4gICAgICAgICwgcm93XG4gICAgICAgICwgY2VsbFxuICAgICAgICAsIGZsYWdzXG4gICAgICAgICwgajtcblxuICAgICAgLy8gaGVhZGVyXG4gICAgICBjZWxsID0gJyc7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmxhZ3MgPSB7IGhlYWRlcjogdHJ1ZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25baV0gfTtcbiAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi5oZWFkZXJbaV0pLFxuICAgICAgICAgIHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBoZWFkZXIgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9rZW4uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gdGhpcy50b2tlbi5jZWxsc1tpXTtcblxuICAgICAgICBjZWxsID0gJyc7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHJvd1tqXSksXG4gICAgICAgICAgICB7IGhlYWRlcjogZmFsc2UsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2pdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIudGFibGUoaGVhZGVyLCBib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnYmxvY2txdW90ZV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnYmxvY2txdW90ZV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuYmxvY2txdW90ZShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJydcbiAgICAgICAgLCBvcmRlcmVkID0gdGhpcy50b2tlbi5vcmRlcmVkO1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3QoYm9keSwgb3JkZXJlZCk7XG4gICAgfVxuICAgIGNhc2UgJ2xpc3RfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRva2VuLnR5cGUgPT09ICd0ZXh0J1xuICAgICAgICAgID8gdGhpcy5wYXJzZVRleHQoKVxuICAgICAgICAgIDogdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2xvb3NlX2l0ZW1fc3RhcnQnOiB7XG4gICAgICB2YXIgYm9keSA9ICcnO1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfaXRlbV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2h0bWwnOiB7XG4gICAgICB2YXIgaHRtbCA9ICF0aGlzLnRva2VuLnByZSAmJiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgID8gdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dClcbiAgICAgICAgOiB0aGlzLnRva2VuLnRleHQ7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5odG1sKGh0bWwpO1xuICAgIH1cbiAgICBjYXNlICdwYXJhZ3JhcGgnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCkpO1xuICAgIH1cbiAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGFyYWdyYXBoKHRoaXMucGFyc2VUZXh0KCkpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwsIGVuY29kZSkge1xuICByZXR1cm4gaHRtbFxuICAgIC5yZXBsYWNlKCFlbmNvZGUgPyAvJig/ISM/XFx3KzspL2cgOiAvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpO1xufVxuXG5mdW5jdGlvbiB1bmVzY2FwZShodG1sKSB7XG5cdC8vIGV4cGxpY2l0bHkgbWF0Y2ggZGVjaW1hbCwgaGV4LCBhbmQgbmFtZWQgSFRNTCBlbnRpdGllcyBcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJigjKD86XFxkKyl8KD86I3hbMC05QS1GYS1mXSspfCg/OlxcdyspKTs/L2csIGZ1bmN0aW9uKF8sIG4pIHtcbiAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChuID09PSAnY29sb24nKSByZXR1cm4gJzonO1xuICAgIGlmIChuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm4gbi5jaGFyQXQoMSkgPT09ICd4J1xuICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobi5zdWJzdHJpbmcoMiksIDE2KSlcbiAgICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtuLnN1YnN0cmluZygxKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UocmVnZXgsIG9wdCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZTtcbiAgb3B0ID0gb3B0IHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb24gc2VsZihuYW1lLCB2YWwpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHQpO1xuICAgIHZhbCA9IHZhbC5zb3VyY2UgfHwgdmFsO1xuICAgIHZhbCA9IHZhbC5yZXBsYWNlKC8oXnxbXlxcW10pXFxeL2csICckMScpO1xuICAgIHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuYW1lLCB2YWwpO1xuICAgIHJldHVybiBzZWxmO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbm5vb3AuZXhlYyA9IG5vb3A7XG5cbmZ1bmN0aW9uIG1lcmdlKG9iaikge1xuICB2YXIgaSA9IDFcbiAgICAsIHRhcmdldFxuICAgICwga2V5O1xuXG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5cbi8qKlxuICogTWFya2VkXG4gKi9cblxuZnVuY3Rpb24gbWFya2VkKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgfHwgdHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0O1xuICAgICAgb3B0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQgfHwge30pO1xuXG4gICAgdmFyIGhpZ2hsaWdodCA9IG9wdC5oaWdobGlnaHRcbiAgICAgICwgdG9rZW5zXG4gICAgICAsIHBlbmRpbmdcbiAgICAgICwgaSA9IDA7XG5cbiAgICB0cnkge1xuICAgICAgdG9rZW5zID0gTGV4ZXIubGV4KHNyYywgb3B0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nID0gdG9rZW5zLmxlbmd0aDtcblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3V0O1xuXG4gICAgICB0cnkge1xuICAgICAgICBvdXQgPSBQYXJzZXIucGFyc2UodG9rZW5zLCBvcHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnIgPSBlO1xuICAgICAgfVxuXG4gICAgICBvcHQuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuXG4gICAgICByZXR1cm4gZXJyXG4gICAgICAgID8gY2FsbGJhY2soZXJyKVxuICAgICAgICA6IGNhbGxiYWNrKG51bGwsIG91dCk7XG4gICAgfTtcblxuICAgIGlmICghaGlnaGxpZ2h0IHx8IGhpZ2hsaWdodC5sZW5ndGggPCAzKSB7XG4gICAgICByZXR1cm4gZG9uZSgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBvcHQuaGlnaGxpZ2h0O1xuXG4gICAgaWYgKCFwZW5kaW5nKSByZXR1cm4gZG9uZSgpO1xuXG4gICAgZm9yICg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbih0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ2NvZGUnKSB7XG4gICAgICAgICAgcmV0dXJuIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodCh0b2tlbi50ZXh0LCB0b2tlbi5sYW5nLCBmdW5jdGlvbihlcnIsIGNvZGUpIHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgIGlmIChjb2RlID09IG51bGwgfHwgY29kZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuLnRleHQgPSBjb2RlO1xuICAgICAgICAgIHRva2VuLmVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkodG9rZW5zW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0KSBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQpO1xuICAgIHJldHVybiBQYXJzZXIucGFyc2UoTGV4ZXIubGV4KHNyYywgb3B0KSwgb3B0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGUubWVzc2FnZSArPSAnXFxuUGxlYXNlIHJlcG9ydCB0aGlzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZC4nO1xuICAgIGlmICgob3B0IHx8IG1hcmtlZC5kZWZhdWx0cykuc2lsZW50KSB7XG4gICAgICByZXR1cm4gJzxwPkFuIGVycm9yIG9jY3VyZWQ6PC9wPjxwcmU+J1xuICAgICAgICArIGVzY2FwZShlLm1lc3NhZ2UgKyAnJywgdHJ1ZSlcbiAgICAgICAgKyAnPC9wcmU+JztcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xuXG5tYXJrZWQub3B0aW9ucyA9XG5tYXJrZWQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdCkge1xuICBtZXJnZShtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gIHJldHVybiBtYXJrZWQ7XG59O1xuXG5tYXJrZWQuZGVmYXVsdHMgPSB7XG4gIGdmbTogdHJ1ZSxcbiAgdGFibGVzOiB0cnVlLFxuICBicmVha3M6IGZhbHNlLFxuICBwZWRhbnRpYzogZmFsc2UsXG4gIHNhbml0aXplOiBmYWxzZSxcbiAgc2FuaXRpemVyOiBudWxsLFxuICBtYW5nbGU6IHRydWUsXG4gIHNtYXJ0TGlzdHM6IGZhbHNlLFxuICBzaWxlbnQ6IGZhbHNlLFxuICBoaWdobGlnaHQ6IG51bGwsXG4gIGxhbmdQcmVmaXg6ICdsYW5nLScsXG4gIHNtYXJ0eXBhbnRzOiBmYWxzZSxcbiAgaGVhZGVyUHJlZml4OiAnJyxcbiAgcmVuZGVyZXI6IG5ldyBSZW5kZXJlcixcbiAgeGh0bWw6IGZhbHNlXG59O1xuXG4vKipcbiAqIEV4cG9zZVxuICovXG5cbm1hcmtlZC5QYXJzZXIgPSBQYXJzZXI7XG5tYXJrZWQucGFyc2VyID0gUGFyc2VyLnBhcnNlO1xuXG5tYXJrZWQuUmVuZGVyZXIgPSBSZW5kZXJlcjtcblxubWFya2VkLkxleGVyID0gTGV4ZXI7XG5tYXJrZWQubGV4ZXIgPSBMZXhlci5sZXg7XG5cbm1hcmtlZC5JbmxpbmVMZXhlciA9IElubGluZUxleGVyO1xubWFya2VkLmlubGluZUxleGVyID0gSW5saW5lTGV4ZXIub3V0cHV0O1xuXG5tYXJrZWQucGFyc2UgPSBtYXJrZWQ7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBtYXJrZWQ7XG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBtYXJrZWQ7IH0pO1xufSBlbHNlIHtcbiAgdGhpcy5tYXJrZWQgPSBtYXJrZWQ7XG59XG5cbn0pLmNhbGwoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWFya2VkL2xpYi9tYXJrZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxMikpKDY3OSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9JY29uJ1xuaW1wb3J0IEZhZGUgZnJvbSAnLi4vLi4vZWxlbWVudHMvX2FuaW1hdGlvbnMvRmFkZSdcbmltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4vVmlld2VyUHJlZmVyZW5jZSdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItcGFuZWwuc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nXG4gIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBib29sZWFuXG4gIG9uUHJlZlZpc2liaWxpdHlDaGFuZ2U6IChuZXdWaXNpYmlsaXR5OiBib29sZWFuKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhhbmRsZVByZWZDbGljayA9IHRoaXMuaGFuZGxlUHJlZkNsaWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVByZWZDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uUHJlZlZpc2liaWxpdHlDaGFuZ2UoIXRoaXMucHJvcHMuc2hvd1ZpZXdlclByZWZlcmVuY2UpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBzaG93Vmlld2VyUHJlZmVyZW5jZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cImJhY2tcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVQcmVmQ2xpY2t9IHN0eWxlTmFtZT1cInByZWZlcmVuY2VcIj5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwcmVmZXJlbmNlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RmFkZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2hvd1ZpZXdlclByZWZlcmVuY2UgPyAoXG4gICAgICAgICAgICAgICAgPFZpZXdlclByZWZlcmVuY2UgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhbmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclBhbmVsLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbi8vIGltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXByZWZlcmVuY2Uuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInZpZXdlci1wcmVmZXJlbmNlXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi1mb250LXNpemVcIj5cbiAgICAgICAgICAgIDxzcGFuPkEtPC9zcGFuPjxzcGFuPkErPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi1zY3JvbGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+5rua5Yqo5qih5byPPC9zcGFuPlxuICAgICAgICAgICAgPFN3aXRjaGVyIHZhbHVlPXt0cnVlfSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi10aGVtZVwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI2ZmZid9fT50aGVtZTE8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjZWVlJ319PnRoZW1lMjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyMyMjInfX0+dGhlbWUzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbikoVmlld2VyUHJlZmVyZW5jZSBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclByZWZlcmVuY2UudHN4XG4gKiovIiwiaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4vU3dpdGNoZXInXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlclxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vX3N3aXRjaGVyLnNjc3MnKVxuXG4vLyBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICBvbjogYm9vbGVhblxuLy8gfVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgdGl0bGU/OiBzdHJpbmdcbiAgb25DaGFuZ2U/OiAobmV3VmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pID0+IHZvaWRcbiAgb3B0aW9ucz86IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW5cbiAgfVtdXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBzdHlsZU5hbWU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgdmFsdWU6IGlzT24sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzT24gPT09ICcxJyB8fCBpc09uID09PSAndHJ1ZScpIHtcbiAgICAgICAgaXNPbiA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzT24gPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RhdGUgPSBCb29sZWFuKGlzT24pID8gJ29uJyA6ICdvZmYnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCAnJ30gc3R5bGVOYW1lPVwic3dpdGNoZXItd3JhcFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSAmJiAoXG4gICAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYWx1ZVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVJbmRleCA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkuaW5kZXhPZih0aGlzLnByb3BzLnZhbHVlKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzFdLnZhbHVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3mlbDmja7mnInor6/vvIzlsIbkvb/nlKjpu5jorqTmlbDmja7vvIEnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmsqHmnInnu5kgb3B0aW9ucyDml7blv4Xpobvkvb/nlKjluIPlsJTlnovnmoQgdmFsdWXvvIEnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9ICF0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHN0eWxlTmFtZT17YHN3aXRjaGVyLS0ke3N0YXRlfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIGFueT4ge1xuXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZidcbi8vICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJ1xuXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXYgc3R5bGVOYW1lPXt0aGlzLnByb3BzLm9uID8gJ3N3aXRjaGVyLS1vbicgOiAnc3dpdGNoZXItLW9mZid9PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLWJ1dHRvblwiPjwvZGl2PlxuLy8gICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJzd2l0Y2hlci13cmFwXCI6XCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXCJzd2l0Y2hlclwiOlwic3dpdGNoZXJfRzNuNF9cIixcInN3aXRjaGVyLS1vZmZcIjpcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcInN3aXRjaGVyLS1vblwiOlwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXCJzd2l0Y2hlci1idXR0b25cIjpcInN3aXRjaGVyLWJ1dHRvbl8ya0hHTFwiLFwic3dpdGNoZXItdHJhY2tcIjpcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJ2aWV3ZXItcHJlZmVyZW5jZVwiOlwidmlld2VyLXByZWZlcmVuY2VfMUZOSlpcIixcIm9wdGlvblwiOlwib3B0aW9uXzE5RlhXXCIsXCJvcHRpb24tZm9udC1zaXplXCI6XCJvcHRpb24tZm9udC1zaXplXzE4T05HIG9wdGlvbl8xOUZYV1wiLFwib3B0aW9uLXNjcm9sbFwiOlwib3B0aW9uLXNjcm9sbF8zYWd0TyBvcHRpb25fMTlGWFdcIixcImxhYmVsXCI6XCJsYWJlbF8zSExQcFwiLFwic3dpdGNoZXJcIjpcInN3aXRjaGVyXzNUOUtfXCIsXCJvcHRpb24tdGhlbWVcIjpcIm9wdGlvbi10aGVtZV8zOGJVZyBvcHRpb25fMTlGWFdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1widmlld2VyLXBhbmVsXCI6XCJ2aWV3ZXItcGFuZWxfYW9PdjdcIixcImNvbnRhaW5lclwiOlwiY29udGFpbmVyXzJjTE5JXCIsXCJiYWNrXCI6XCJiYWNrX3BweFFfXCIsXCJ0aXRsZVwiOlwidGl0bGVfM05obGlcIixcInByZWZlcmVuY2VcIjpcInByZWZlcmVuY2VfMXdQYTZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmNsYXNzIEJvb2tQYWdlV2l0aFJhd0h0bWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBib29rUGFnZUxpc3Q6IGFueVxuXG4gIGdldENvbnRlbnRIdG1sKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tQYWdlTGlzdC5ib29rUGFnZS5ib29rUGFnZURvbVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmx1aWQsIG5vZGVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2tQYWdlTGlzdFxuICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZUhlaWdodHM9e1tdfVxuICAgICAgICBwYWdlQ291bnQ9ezF9XG4gICAgICAgIHBhZ2VIZWlnaHQ9ezB9XG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdCA9IHJlZiB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VXaXRoUmF3SHRtbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZVdpdGhSYXdIdG1sLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB3aXRoU2lkZUVmZmVjdCBmcm9tICdyZWFjdC1zaWRlLWVmZmVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgZGVmYXVsdFRpdGxlID0gJ1JlYWRyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG4gIGJvZHlDbGFzcz86IHN0cmluZ1xuICB0aXRsZT86IHN0cmluZ1xuICB1c2VBc01hc3RlclRpdGxlPzogYm9vbGVhblxufVxuXG5jbGFzcyBEb2NDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIGNsYXNzTmFtZVxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2diLWRvYy1jb250YWluZXInICsgY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJnYi1kb2MtY29udGFpbmVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVByb3BzVG9TdGF0ZShwcm9wc0xpc3QpIHtcbiAgY29uc3QgaW5uZXJtb3N0UHJvcHMgPSBwcm9wc0xpc3RbcHJvcHNMaXN0Lmxlbmd0aCAtIDFdXG4gIGxldCBkYXRhOiBhbnkgPSB7fVxuXG4gIGlmIChpbm5lcm1vc3RQcm9wcykge1xuICAgIGRhdGEgPSBfLnBpY2soaW5uZXJtb3N0UHJvcHMsIFsndGl0bGUnLCAnYm9keUNsYXNzJ10pXG4gICAgaWYgKGRhdGEudGl0bGUgJiYgIWlubmVybW9zdFByb3BzLnVzZUFzTWFzdGVyVGl0bGUpIHtcbiAgICAgIGRhdGEudGl0bGUgPSBgJHtkYXRhLnRpdGxlfSB8ICR7ZGVmYXVsdFRpdGxlfWBcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS50aXRsZSA9IGRhdGEudGl0bGUgfHwgZGVmYXVsdFRpdGxlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChwcm9wTGlzdCkge1xuICBjb25zdCB7IHRpdGxlLCBib2R5Q2xhc3MgfSA9IHByb3BMaXN0XG5cbiAgaWYgKHR5cGVvZiBib2R5Q2xhc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBkZWZhdWx0VGl0bGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2lkZUVmZmVjdChcbiAgcmVkdWNlUHJvcHNUb1N0YXRlLFxuICBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50XG4pKERvY0NvbnRhaW5lcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDY3MCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfcmVhY3Rfa2l0X2RsbFxuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA3IDggMTJcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==