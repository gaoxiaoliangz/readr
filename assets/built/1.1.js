webpackJsonp([1],{

/***/ 138:
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
	
	var _BookPageList = __webpack_require__(139);
	
	var _BookPageList2 = _interopRequireDefault(_BookPageList);
	
	var _Viewer = __webpack_require__(146);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _actions = __webpack_require__(8);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _ViewerPanel = __webpack_require__(149);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookPageWithRawHtml = __webpack_require__(156);
	
	var _BookPageWithRawHtml2 = _interopRequireDefault(_BookPageWithRawHtml);
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _apis = __webpack_require__(119);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _utils = __webpack_require__(16);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _DocContainer = __webpack_require__(134);
	
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
	
	var styles = __webpack_require__(157);
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

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPage = __webpack_require__(140);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _BookPageList = __webpack_require__(142);
	
	var utils = _interopRequireWildcard(_BookPageList);
	
	var _lodash = __webpack_require__(18);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(80);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(82);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _ViewerScrollbar = __webpack_require__(143);
	
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
	
	var styles = __webpack_require__(145);
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

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(80);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(141);
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

/***/ 141:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"content_1mydI","page":"page_1SU4h","page--fluid":"page--fluid_vX8rQ page_1SU4h","page--init":"page--init_8DZFB","page-no":"page-no_1jbV-"};

/***/ },

/***/ 142:
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

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(144);
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

/***/ 144:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"scrollbar":"scrollbar_3vHlt","button":"button_1vdqU","track":"track_2FLTA","track--past":"track--past_3YKd4 track_2FLTA","loc-info":"loc-info_377Vu","sub-info":"sub-info_3qI5u"};

/***/ },

/***/ 145:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"pages":"pages_1SNis","pages--fluid":"pages--fluid_39FPe pages_1SNis"};

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getNodeHeights = getNodeHeights;
	exports.markdownToNodeStringList = markdownToNodeStringList;
	
	var _marked = __webpack_require__(147);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(148);
	
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

/***/ 147:
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

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(14))(679);

/***/ },

/***/ 149:
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
	
	var _Icon = __webpack_require__(78);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _Fade = __webpack_require__(88);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _ViewerPreference = __webpack_require__(150);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(155);
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

/***/ 150:
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
	
	var _Switcher = __webpack_require__(151);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(154);
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

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(152);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(82);
	
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
	
	var styles = __webpack_require__(153);
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

/***/ 153:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"switcher-wrap":"switcher-wrap_3UMAU","switcher":"switcher_G3n4_","switcher--off":"switcher--off_1EoOU","switcher--on":"switcher--on_2xiwO","switcher-button":"switcher-button_2kHGL","switcher-track":"switcher-track_xvhjg"};

/***/ },

/***/ 154:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"viewer-preference":"viewer-preference_1FNJZ","option":"option_19FXW","option-font-size":"option-font-size_18ONG option_19FXW","option-scroll":"option-scroll_3agtO option_19FXW","label":"label_3HLPp","switcher":"switcher_3T9K_","option-theme":"option-theme_38bUg option_19FXW"};

/***/ },

/***/ 155:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"viewer-panel":"viewer-panel_aoOv7","container":"container_2cLNI","back":"back_ppxQ_","title":"title_3Nhli","preference":"preference_1wPa6"};

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPageList = __webpack_require__(139);
	
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

/***/ 157:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX2Jvb2stcGFnZS5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC51dGlscy50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJTY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL19ib29rLXBhZ2UtbGlzdC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci51dGlscy50cyIsIndlYnBhY2s6Ly8vLi9+L21hcmtlZC9saWIvbWFya2VkLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQcmVmZXJlbmNlLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL192aWV3ZXItcHJlZmVyZW5jZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlV2l0aFJhd0h0bWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUVJOzs7O0FBQ2xDOztLQUFzQzs7QUFDbUM7O0FBQzFEOzs7O0FBQ2lCOzs7O0FBQ2dCOzs7O0FBQ2I7Ozs7QUFDZDs7OztBQUNHOzs7O0FBQ3lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN4RCxLQUFZLFNBQVUsb0JBQWtCO0FBdUJ4Qzs7O0FBRUUscUJBQWlCOzs7K0ZBQ0g7O0FBRVIsZUFBTyxTQUFRLE1BQU8sT0FBRztBQUN6QixlQUFNLFFBQUc7QUFDRix3QkFBTztBQUNOLHlCQUFNO0FBQ0wsMEJBQUk7QUFDVixvQkFBSTtBQUNXLG1DQUFPO0FBQ3RCLG9CQUFPO0FBQ0QsMEJBQ1o7V0FYRDtBQVlJLGVBQWtCLG9CQUFPLE1BQWtCLGtCQUFXO0FBQ3RELGVBQXNCLHdCQUFPLE1BQXNCLHNCQUFXO0FBQzlELGVBQXFCLHVCQUFPLE1BQXFCLHFCQUFXO0FBQzVELGVBQWEsZUFBTyxNQUFhLGFBQVc7QUFDNUMsZUFBc0IseUNBQWEsU0FBSyxNQUFhLGNBQUssS0FBRTtBQUN2RCxzQkFRQTtVQVRxQjs7Ozs7OztBQVV4QixvQkFBTSxnQkFBZ0IsZ0JBQUssS0FBTSxRQUc5Qjs7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LG9CQUNiO0VBRlMsSUF1Rlg7bUJBQXVCLFM7Ozs7Ozs7QUMvR3ZCO0FBQ0EsbUJBQWtCLCtOOzs7Ozs7O0FDRGxCO0FBQ0EsbUJBQWtCLHNSOzs7Ozs7O0FDRGxCO0FBQ0EsbUJBQWtCLDZJOzs7Ozs7Ozs7Ozs7Ozs7QUNEc0I7Ozs7QUFReEM7Ozs7Ozs7Ozs7OztLQUEyQzs7O0FBRXpDLGtDQUFpQixPQUNmOzs7dUdBS1k7Ozs7OztBQUNOLG9CQUFLLEtBQWEsYUFBUyxTQUc3Qjs7Ozs7OzswQkFDeUIsS0FBTTtpQkFBdEI7aUJBQVM7O0FBRWYsb0JBQ0wsZ0JBQWEsd0NBQ04sT0FBUSxPQUNSLE9BQVEsT0FDRixhQUFLLElBQ1AsV0FBSSxHQUNILFlBQUksR0FDSixrQkFDUDtBQUFlLDRCQUFhLGVBTXZDO2tCQU5nQixJQVZOOzs7Ozs7O21CQWdCd0Isb0I7Ozs7Ozs7QUNyQ2xDLDBDIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuaW1wb3J0ICogYXMgdmlld2VyVXRpbHMgZnJvbSAnLi9WaWV3ZXIudXRpbHMnXG5pbXBvcnQgeyBmZXRjaEJvb2ssIGZldGNoUHJvZ3Jlc3MsIG9wZW5Db25maXJtTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFZpZXdlclBhbmVsIGZyb20gJy4vVmlld2VyUGFuZWwnXG5pbXBvcnQgQm9va1BhZ2VXaXRoUmF3SHRtbCBmcm9tICcuL0Jvb2tQYWdlV2l0aFJhd0h0bWwnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL192aWV3ZXIuc2NzcycpXG5cbmludGVyZmFjZSBJQWxsUHJvcHMge1xuICBmZXRjaEJvb2s6IGFueVxuICBib29rOiBhbnlcbiAgcmF3Qm9va0NvbnRlbnQ6IHN0cmluZ1xuICBmZXRjaFByb2dyZXNzOiAoYm9va0lkOiBzdHJpbmcpID0+IHZvaWRcbiAgcHJvZ3Jlc3M6IG51bWJlclxuICBvcGVuQ29uZmlybU1vZGFsOiAoZGF0YTogb3BlbkNvbmZpcm1Nb2RhbCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2hvd1BhbmVsPzogYm9vbGVhblxuICBpc0NhbGNNb2RlPzogYm9vbGVhblxuICBub2RlSGVpZ2h0cz86IG51bWJlcltdXG4gIG5vZGVzPzogc3RyaW5nW11cbiAgc2hvd1ZpZXdlclByZWZlcmVuY2U/OiBib29sZWFuXG4gIGZsdWlkPzogYm9vbGVhblxuICBpc1RvdWNoTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQ8SUFsbFByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5ib29rSWQgPSBwcm9wcy5wYXJhbXMuaWRcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1BhbmVsOiBmYWxzZSxcbiAgICAgIGlzQ2FsY01vZGU6IHRydWUsXG4gICAgICBub2RlSGVpZ2h0czogW10sXG4gICAgICBub2RlczogW10sXG4gICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2UsXG4gICAgICBmbHVpZDogZmFsc2UsXG4gICAgICBpc1RvdWNoTW9kZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVWaWV3ZXJDbGljayA9IHRoaXMuaGFuZGxlVmlld2VyQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlID0gdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2UgPSB0aGlzLmhhbmRsZVByb2dyZXNzQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLmRlYm91bmRlZEhhbmRsZVJlc2l6ZSA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVSZXNpemUsIDUwMCwge1xuICAgICAgbWF4V2FpdDogMTAwMFxuICAgIH0pXG4gIH1cblxuICBib29rSWQ6IHN0cmluZ1xuICBib29rUGFnZVdpdGhSYXdIdG1sOiBhbnlcbiAgZGVib3VuZGVkSGFuZGxlUmVzaXplOiBhbnlcblxuICBpc1ZpZXdGbHVpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0U2NyZWVuSW5mbygpLnZpZXcud2lkdGggPCA3MDBcbiAgfVxuXG4gIGlzVG91Y2hNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCA8IDcwMFxuICB9XG5cbiAgc2V0UHJvZ3Jlc3MocGVyY2VudGFnZSkge1xuICAgIGFwaS5zZXRQcm9ncmVzcyh0aGlzLmJvb2tJZCwgeyBwZXJjZW50YWdlIH0pXG4gIH1cblxuICBoYW5kZWxWaWV3ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNDYWxjTW9kZSAmJiAhdGhpcy5zdGF0ZS5pc1RvdWNoTW9kZSkge1xuICAgICAgbGV0IHkgPSBldmVudC5wYWdlWSAtIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBsZXQgZFRvU2NyZWVuUmlnaHQgPSB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCAtIGV2ZW50LnBhZ2VYXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93UGFuZWw6IHkgPCA5MCxcbiAgICAgICAgc2hvd1BhZ2VJbmZvOiBkVG9TY3JlZW5SaWdodCA8IDEwMFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSZXNpemUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmbHVpZDogdGhpcy5pc1ZpZXdGbHVpZCgpLFxuICAgICAgaXNUb3VjaE1vZGU6IHRoaXMuaXNUb3VjaE1vZGUoKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQcm9ncmVzc0NoYW5nZShuZXdQcm9ncmVzcykge1xuICAgIHRoaXMuc2V0UHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpXG4gIH1cblxuICBoYW5kbGVWaWV3ZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1RvdWNoTW9kZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dQYW5lbDogIXRoaXMuc3RhdGUuc2hvd1BhbmVsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNhbGNEb20oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NhbGNNb2RlOiB0cnVlXG4gICAgfSwgKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudEh0bWwgPSB0aGlzLmJvb2tQYWdlV2l0aFJhd0h0bWwuZ2V0Q29udGVudEh0bWwoKVxuICAgICAgY29uc3Qgbm9kZUhlaWdodHMgPSB2aWV3ZXJVdGlscy5nZXROb2RlSGVpZ2h0cyhjb250ZW50SHRtbC5jaGlsZE5vZGVzKVxuICAgICAgY29uc29sZS5sb2coJ2NhbGMgZG9uZScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm9kZUhlaWdodHMsXG4gICAgICAgIGlzQ2FsY01vZGU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBsb2FkUmF3Qm9va0NvbnRlbnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEJvb2sodGhpcy5ib29rSWQpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IG5vZGVzID0gdmlld2VyVXRpbHMubWFya2Rvd25Ub05vZGVTdHJpbmdMaXN0KHRoaXMucHJvcHMucmF3Qm9va0NvbnRlbnQpXG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub2RlcyxcbiAgICAgICAgZmx1aWQ6IHRoaXMuaXNWaWV3Rmx1aWQoKSxcbiAgICAgICAgaXNUb3VjaE1vZGU6IHRoaXMuaXNUb3VjaE1vZGUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZGVib3VuZGVkSGFuZGxlUmVzaXplKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgaGFzQm9va05vZGVzTG9hZGVkID0gdGhpcy5zdGF0ZS5ub2Rlcy5sZW5ndGggIT09IDAgJiYgcHJldlN0YXRlLm5vZGVzLmxlbmd0aCA9PT0gMFxuICAgIGNvbnN0IHZpZXdDaGFuZ2VkID0gdGhpcy5zdGF0ZS5mbHVpZCAhPT0gcHJldlN0YXRlLmZsdWlkXG5cbiAgICBpZiAoaGFzQm9va05vZGVzTG9hZGVkIHx8IHZpZXdDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbGNEb20oKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9hZFJhd0Jvb2tDb250ZW50KClcbiAgICB0aGlzLnByb3BzLmZldGNoUHJvZ3Jlc3ModGhpcy5ib29rSWQpXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIHJlbmRlclZpZXdQYW5lbCgpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuc2hvd1BhbmVsIHx8IHRoaXMuc3RhdGUuc2hvd1ZpZXdlclByZWZlcmVuY2UpICYmIChcbiAgICAgIDxWaWV3ZXJQYW5lbFxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5ib29rLnRpdGxlfVxuICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZT17dGhpcy5zdGF0ZS5zaG93Vmlld2VyUHJlZmVyZW5jZX1cbiAgICAgICAgb25QcmVmVmlzaWJpbGl0eUNoYW5nZT17bmV3VmlzaWJpbGl0eSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogbmV3VmlzaWJpbGl0eVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gfVxuICAgICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckJvb2soKSB7XG4gICAgY29uc3QgeyBub2Rlcywgbm9kZUhlaWdodHMsIGZsdWlkLCBzaG93UGFnZUluZm8gfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxvYWRpbmdcIj7liqDovb3kuK0gLi4uPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNDYWxjTW9kZVxuICAgICAgPyAoXG4gICAgICAgIDxCb29rUGFnZVdpdGhSYXdIdG1sXG4gICAgICAgICAgbm9kZXM9e25vZGVzfVxuICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZVdpdGhSYXdIdG1sID0gcmVmIH0gfVxuICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAvPlxuICAgICAgKVxuICAgICAgOiAoXG4gICAgICAgIDxCb29rUGFnZUxpc3RcbiAgICAgICAgICBub2RlSGVpZ2h0cz17bm9kZUhlaWdodHN9XG4gICAgICAgICAgbm9kZXM9e3RoaXMuc3RhdGUubm9kZXN9XG4gICAgICAgICAgcGFnZUNvdW50PXs1fVxuICAgICAgICAgIGluaXRpYWxQcm9ncmVzcz17cHJvZ3Jlc3N9XG4gICAgICAgICAgcGFnZUhlaWdodD17OTAwfVxuICAgICAgICAgIG9uUHJvZ3Jlc3NDaGFuZ2U9e3RoaXMuaGFuZGxlUHJvZ3Jlc3NDaGFuZ2V9XG4gICAgICAgICAgZmx1aWQ9e2ZsdWlkfVxuICAgICAgICAgIHNob3dQYWdlSW5mbz17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwidmlld2VyXCIgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX0+XG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5oYW5kbGVWaWV3ZXJDbGlja30gb25Nb3VzZU1vdmU9e3RoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlIH0gPlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJWaWV3UGFuZWwoKSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlckJvb2soKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJvb2sgPSBzdGF0ZS5lbnRpdGllcy5ib29rc1tvd25Qcm9wcy5wYXJhbXMuaWRdIHx8IHt9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9vayxcbiAgICAgIHJhd0Jvb2tDb250ZW50OiBfLmdldChib29rLCAnY29udGVudC5yYXcnLCAnJyksXG4gICAgICBwcm9ncmVzczogXy5nZXQoc3RhdGUucGF5bG9hZHMsICdwcm9ncmVzcy5wZXJjZW50YWdlJywgMCksXG4gICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uXG4gICAgfVxuICB9LFxuICB7IGZldGNoQm9vaywgZmV0Y2hQcm9ncmVzcywgb3BlbkNvbmZpcm1Nb2RhbCB9XG4pKFZpZXdlciBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2UgZnJvbSAnLi9Cb29rUGFnZSdcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vQm9va1BhZ2VMaXN0LnV0aWxzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IFZpZXdlclNjcm9sbGJhciBmcm9tICcuL1ZpZXdlclNjcm9sbGJhcidcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYm9vay1wYWdlLWxpc3Quc2NzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBub2Rlczogc3RyaW5nW11cbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG4gIHBhZ2VDb3VudDogbnVtYmVyXG4gIGlzU2Nyb2xsTW9kZT86IGJvb2xlYW5cbiAgaW5pdGlhbFBhZ2U/OiBudW1iZXJcbiAgaW5pdGlhbFByb2dyZXNzPzogbnVtYmVyXG4gIHBhZ2VIZWlnaHQ6IG51bWJlclxuICBvblByb2dyZXNzQ2hhbmdlPzogKG5ld1Byb2dyZXNzOiBudW1iZXIpID0+IHZvaWRcbiAgZmx1aWQ6IGJvb2xlYW5cbiAgaXNDYWxjTW9kZT86IGJvb2xlYW5cbiAgc2hvd1BhZ2VJbmZvPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgc2Nyb2xsVG9wPzogbnVtYmVyXG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIEJvb2tQYWdlTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsID0gdGhpcy5oYW5kbGVTY3JvbGwuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVib3VuZGVkSGFuZGxlU2Nyb2xsID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMjAwLCB7XG4gICAgICBtYXhXYWl0OiAxMDAwXG4gICAgfSlcbiAgfVxuXG4gIGJvb2tQYWdlTGlzdERvbTogSFRNTFVMaXN0RWxlbWVudFxuICBib29rUGFnZTogYW55XG4gIGRlYm91bmRlZEhhbmRsZVNjcm9sbDogYW55XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5pc0NhbGNNb2RlKSB7XG4gICAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgICAgY29uc3QgeyBvblByb2dyZXNzQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHV0aWxzLnBlcmNlbnRhZ2VUb1BhZ2Uoc2Nyb2xsVG9wIC8gdG90YWxIZWlnaHQsIHBhZ2VzLmxlbmd0aClcblxuICAgICAgaWYgKG9uUHJvZ3Jlc3NDaGFuZ2UpIHtcbiAgICAgICAgb25Qcm9ncmVzc0NoYW5nZShzY3JvbGxUb3AgLyB0b3RhbEhlaWdodClcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRQYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmRlYm91bmRlZEhhbmRsZVNjcm9sbClcbiAgfVxuXG4gIGNhbGNQYWdlcygpIHtcbiAgICAvLyB0b2RvOiDmt7vliqDnvJPlrZhcbiAgICBjb25zdCB7IG5vZGVIZWlnaHRzLCBub2RlcywgcGFnZUhlaWdodCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBhZ2VzID0gdXRpbHMuZ3JvdXBOb2Rlc0J5UGFnZShub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQpXG5cbiAgICByZXR1cm4geyBwYWdlcywgdG90YWxIZWlnaHQ6IHBhZ2VzLmxlbmd0aCAqIHBhZ2VIZWlnaHQgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwYWdlSGVpZ2h0LCBpbml0aWFsUGFnZSwgaW5pdGlhbFByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgIGxldCBzY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAoaW5pdGlhbFByb2dyZXNzKSB7XG4gICAgICBzY3JvbGxUb3AgPSB0b3RhbEhlaWdodCAqIGluaXRpYWxQcm9ncmVzc1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFBhZ2UpIHtcbiAgICAgIHNjcm9sbFRvcCA9IHBhZ2VIZWlnaHQgKiAoaW5pdGlhbFBhZ2UgLSAxKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhZ2VzLCB0b3RhbEhlaWdodCB9ID0gdGhpcy5jYWxjUGFnZXMoKVxuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IHBhZ2VDb3VudCwgcGFnZUhlaWdodCwgZmx1aWQsIHNob3dQYWdlSW5mbyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHN0YXJ0UGFnZUluZGV4ID0gY3VycmVudFBhZ2UgLSAxXG4gICAgY29uc3QgZW5kUGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggKyBwYWdlQ291bnRcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdwYWdlcyc6ICFmbHVpZCxcbiAgICAgICdwYWdlcy0tZmx1aWQnOiBmbHVpZFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZUxpc3REb20gPSByZWYgfSB9IHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17eyBoZWlnaHQ6IHRvdGFsSGVpZ2h0IH19PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF8uc2xpY2UocGFnZXMsIHN0YXJ0UGFnZUluZGV4LCBlbmRQYWdlSW5kZXgpLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm9va1BhZ2VcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgICAgICAgcGFnZUhlaWdodD17cGFnZUhlaWdodH1cbiAgICAgICAgICAgICAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICAgICAgICAgICAgICAgIHJlZj17cmVmID0+IHsgdGhpcy5ib29rUGFnZSA9IHJlZiB9IH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8Vmlld2VyU2Nyb2xsYmFyXG4gICAgICAgICAgdmlzaWJsZT17c2hvd1BhZ2VJbmZvfVxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIHRvdGFsPXtwYWdlcy5sZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZUxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvQm9va1BhZ2VMaXN0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vQm9va1BhZ2VMaXN0LnV0aWxzJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fYm9vay1wYWdlLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcGFnZTogdXRpbHMuVFBhZ2VcbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBCb29rUGFnZSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGJvb2tQYWdlRG9tOiBIVE1MRGl2RWxlbWVudFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhZ2U6IHsgbm9kZXMsIG1ldGEgfSwgcGFnZUhlaWdodCwgZmx1aWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBwYWdlSGVpZ2h0ICogKG1ldGEucGFnZU5vIC0gMSksXG4gICAgICBoZWlnaHQ6IHBhZ2VIZWlnaHQgfHwgJ2F1dG8nXG4gICAgfVxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3BhZ2UnOiAhZmx1aWQsXG4gICAgICAncGFnZS0tZmx1aWQnOiBmbHVpZFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBtZXRhLm9mZnNldCB9fVxuICAgICAgICAgIHN0eWxlTmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbm9kZXMuam9pbignJykgfX1cbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VEb20gPSByZWYgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInBhZ2Utbm9cIj57bWV0YS5wYWdlTm99PC9kaXY+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZS50c3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjb250ZW50XCI6XCJjb250ZW50XzFteWRJXCIsXCJwYWdlXCI6XCJwYWdlXzFTVTRoXCIsXCJwYWdlLS1mbHVpZFwiOlwicGFnZS0tZmx1aWRfdlg4clEgcGFnZV8xU1U0aFwiLFwicGFnZS0taW5pdFwiOlwicGFnZS0taW5pdF84RFpGQlwiLFwicGFnZS1ub1wiOlwicGFnZS1ub18xamJWLVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuLy8gbG9uZyBwYXJhZ3JhcGggc2l0dWF0aW9uIGRvZXNuJ3Qgc2VlbSB0byBhZmZlY3QgdGhpcyBmdW5jdGlvblxuLy8gb2Zmc2V0IGRpc3RhbmNlIGlzIGFsd2F5cyBuZWd0aXZlIG9yIHplcm9cbi8vIHRoZSBpbmRleCB3aWxsIGJlIG9mIHRoZSBwYXJhZ3JhcGggd2l0aCB0aGlzIG9mZnNldCBhdCB0aGUgZW5kXG5mdW5jdGlvbiBnZXRQYWdlT2Zmc2V0KHtwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzfToge1xuICBwYWdlSW5kZXg6IG51bWJlclxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBub2RlSW5kZXggPSAwXG4gIGxldCBub2RlU3RhcnRJbmRleFxuXG4gIGlmIChwYWdlSW5kZXggIT09IDApIHtcbiAgICBsZXQgbm9kZUhlaWdodFN1bSA9IDBcbiAgICB3aGlsZSAobm9kZUhlaWdodFN1bSA8PSBwYWdlSGVpZ2h0ICogcGFnZUluZGV4KSB7XG4gICAgICBub2RlSGVpZ2h0U3VtICs9IG5vZGVIZWlnaHRzW25vZGVJbmRleF1cbiAgICAgIG5vZGVJbmRleCsrXG4gICAgfVxuICAgIG9mZnNldCA9IG5vZGVIZWlnaHRTdW0gLSBub2RlSGVpZ2h0c1tub2RlSW5kZXggLSAxXSAtIHBhZ2VJbmRleCAqIHBhZ2VIZWlnaHRcbiAgICBub2RlU3RhcnRJbmRleCA9IG5vZGVJbmRleCAtIDFcbiAgfSBlbHNlIHtcbiAgICBub2RlU3RhcnRJbmRleCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfVxufVxuXG5cbmZ1bmN0aW9uIGdldE5vZGVzT2ZQYWdlKHtwYWdlSW5kZXgsIG5vZGVzLCBwYWdlSGVpZ2h0LCBub2RlSGVpZ2h0c306IHtcbiAgcGFnZUluZGV4OiBudW1iZXJcbiAgbm9kZXM6IGFueVxuICBwYWdlSGVpZ2h0OiBudW1iZXJcbiAgbm9kZUhlaWdodHM6IG51bWJlcltdXG59KSB7XG4gIGxldCB7IG9mZnNldCwgbm9kZVN0YXJ0SW5kZXggfSA9IGdldFBhZ2VPZmZzZXQoeyBwYWdlSW5kZXgsIHBhZ2VIZWlnaHQsIG5vZGVIZWlnaHRzIH0pXG4gIGxldCBub2RlSW5kZXggPSBub2RlU3RhcnRJbmRleFxuICBsZXQgbm9kZUVuZEluZGV4XG4gIGxldCBwYWdlTm9kZXMgPSBbXVxuXG4gIGxldCBub2RlSGVpZ2h0U3VtID0gb2Zmc2V0ICsgbm9kZUhlaWdodHNbbm9kZVN0YXJ0SW5kZXhdXG5cbiAgbm9kZUluZGV4KytcbiAgaWYgKG5vZGVIZWlnaHRTdW0gPCBwYWdlSGVpZ2h0KSB7XG4gICAgd2hpbGUgKG5vZGVIZWlnaHRTdW0gPD0gcGFnZUhlaWdodCAmJiBub2RlSW5kZXggIT09IG5vZGVzLmxlbmd0aCkge1xuICAgICAgbm9kZUhlaWdodFN1bSArPSBub2RlSGVpZ2h0c1tub2RlSW5kZXhdXG4gICAgICBub2RlSW5kZXgrK1xuICAgIH1cbiAgICBub2RlRW5kSW5kZXggPSBub2RlSW5kZXggLSAxXG4gIH0gZWxzZSB7XG4gICAgbm9kZUVuZEluZGV4ID0gbm9kZVN0YXJ0SW5kZXhcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBub2RlU3RhcnRJbmRleDsgaSA8PSBub2RlRW5kSW5kZXggJiYgaSA8PSBub2Rlcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBwYWdlTm9kZXMucHVzaChub2Rlc1tpXSlcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VOb2Rlcywgb2Zmc2V0IH1cbn1cblxuXG5leHBvcnQgdHlwZSBUUGFnZSA9IHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIG1ldGE6IGFueVxufVxuZXhwb3J0IHR5cGUgVFBhZ2VMaXN0ID0gVFBhZ2VbXVxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTm9kZXNCeVBhZ2Uobm9kZXM6IGFueSwgbm9kZUhlaWdodHM6IG51bWJlcltdLCBwYWdlSGVpZ2h0OiBudW1iZXIpOiBUUGFnZUxpc3Qge1xuICBsZXQgcGFnZXMgPSBbXVxuICBsZXQgcGFnZUhlaWdodFN1bSA9IG5vZGVIZWlnaHRzLnJlZHVjZSgoYSwgYikgPT4gKGEgKyBiKSwgMClcbiAgbGV0IHBhZ2VTdW0gPSBNYXRoLmNlaWwocGFnZUhlaWdodFN1bSAvIHBhZ2VIZWlnaHQpXG5cbiAgY29uc29sZS5sb2coJ3RvZG86IGdyb3VwIG5vZGVzJylcbiAgLy8gbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUsIGluZGV4KSA9PiB7XG4gIC8vICAgbm9kZS5wcm9wcy5pbmRleCA9IGluZGV4XG4gIC8vICAgcmV0dXJuIG5vZGVcbiAgLy8gfSlcblxuICBpZiAobm9kZUhlaWdodHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBub2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiAxLFxuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH1cbiAgICB9XVxuICB9XG5cbiAgLy8gZmluYWxseVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VTdW07IGkrKykge1xuICAgIGNvbnN0IHsgcGFnZU5vZGVzLCBvZmZzZXQgfSA9IGdldE5vZGVzT2ZQYWdlKHsgcGFnZUluZGV4OiBpLCBub2Rlcywgbm9kZUhlaWdodHMsIHBhZ2VIZWlnaHQgfSlcblxuICAgIHBhZ2VzLnB1c2goe1xuICAgICAgbm9kZXM6IHBhZ2VOb2RlcyxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgcGFnZU5vOiBpICsgMSxcbiAgICAgICAgb2Zmc2V0XG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcGFnZXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRhZ2VUb1BhZ2UocDogbnVtYmVyLCBwYWdlU3VtOiBudW1iZXIpIHtcbiAgaWYgKHAgPiAxKSB7XG4gICAgY29uc29sZS5lcnJvcignV3JvbmcgcGFyYW1ldGVyIScpXG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoKHAgKiBwYWdlU3VtKSBhcyBhbnkpICsgMVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL0Jvb2tQYWdlTGlzdC51dGlscy50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL192aWV3ZXItc2Nyb2xsYmFyLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjdXJyZW50OiBudW1iZXJcbiAgdG90YWw6IG51bWJlclxuICB2aXNpYmxlOiBib29sZWFuXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY3VycmVudCwgdG90YWwgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChjdXJyZW50IC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy52aXNpYmxlICYmIChcbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsb2MtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+PHN0cm9uZz57Y3VycmVudH08L3N0cm9uZz4ve3RvdGFsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLWluZm9cIj57cGVyY2VudGFnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJTY3JvbGxiYXIudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic2Nyb2xsYmFyXCI6XCJzY3JvbGxiYXJfM3ZIbHRcIixcImJ1dHRvblwiOlwiYnV0dG9uXzF2ZHFVXCIsXCJ0cmFja1wiOlwidHJhY2tfMkZMVEFcIixcInRyYWNrLS1wYXN0XCI6XCJ0cmFjay0tcGFzdF8zWUtkNCB0cmFja18yRkxUQVwiLFwibG9jLWluZm9cIjpcImxvYy1pbmZvXzM3N1Z1XCIsXCJzdWItaW5mb1wiOlwic3ViLWluZm9fM3FJNXVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1zY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZXNcIjpcInBhZ2VzXzFTTmlzXCIsXCJwYWdlcy0tZmx1aWRcIjpcInBhZ2VzLS1mbHVpZF8zOUZQZSBwYWdlc18xU05pc1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fYm9vay1wYWdlLWxpc3Quc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8vIOaaguS4jeaUr+aMgeWMheWQq+WbvueJh+eahOiuoeeul1xuLy8g6K6h566X5rKh5pyJ562J5b6F5Zu+54mH5Yqg6L295a6M5oiQ77yM5omA5Lul57uT5p6c5piv5LiN5q2j56Gu55qEXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZUhlaWdodHMobm9kZXMpIHtcbiAgY29uc29sZS5sb2coJ2RvbSByZWFkeSwgZ2V0Tm9kZUhlaWdodHMnKVxuICBsZXQgbm9kZXNIZWlnaHQgPSBbXVxuXG4gIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIChub2RlLCBpbmRleCkgPT4ge1xuICAgIGlmIChub2RlLmNsYXNzTmFtZSAhPT0gJ2diLWxpbmUnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbnN1cHBvcnRlZCBjb250ZW50IGZvdW5kIScpXG4gICAgfVxuICAgIG5vZGVzSGVpZ2h0LnB1c2gobm9kZS5jbGllbnRIZWlnaHQpXG4gIH0pXG5cbiAgcmV0dXJuIG5vZGVzSGVpZ2h0XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duVG9Ob2RlU3RyaW5nTGlzdChtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBjb25zb2xlLmxvZygnc3RhcnQgbWQnKVxuICBsZXQgaHRtbCA9IG1hcmtlZChtYXJrZG93biwge1xuICAgIGdmbTogdHJ1ZSxcbiAgICBicmVha3M6IHRydWVcbiAgfSlcbiAgY29uc29sZS5sb2coJ2RvbmUgbWFya2VkJylcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGVcbiAgICAubWFwLmNhbGwoJChodG1sKSwgKGVsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGUubm9kZVR5cGUgPT09IDMgJiYgZWxlLm5vZGVWYWx1ZSA9PT0gJ1xcbicpIHtcbiAgICAgICAgLy8g56e76ZmkIGh0bWwg6YeM55qE5Zue6L2mXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChlbGUudGFnTmFtZSA9PT0gJ1AnKSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUuaW5uZXJIVE1MfTwvcD5gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJnYi1saW5lXCI+JHtlbGUub3V0ZXJIVE1MfTwvZGl2PmBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5maWx0ZXIobm9kZSA9PiBub2RlKVxuICAvLyBjb25zb2xlLmxvZyhub2RlcylcbiAgY29uc29sZS5sb2coJ2VuZCBtZCcpXG4gIHJldHVybiBub2Rlc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudXRpbHMudHNcbiAqKi8iLCIvKipcbiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxNCwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL21hcmtlZFxuICovXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiggKlstKl9dKXszLH0gKig/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpLyxcbiAgbnB0YWJsZTogbm9vcCxcbiAgbGhlYWRpbmc6IC9eKFteXFxuXSspXFxuICooPXwtKXsyLH0gKig/Olxcbit8JCkvLFxuICBibG9ja3F1b3RlOiAvXiggKj5bXlxcbl0rKFxcbig/IWRlZilbXlxcbl0rKSpcXG4qKSsvLFxuICBsaXN0OiAvXiggKikoYnVsbCkgW1xcc1xcU10rPyg/OmhyfGRlZnxcXG57Mix9KD8hICkoPyFcXDFidWxsIClcXG4qfFxccyokKS8sXG4gIGh0bWw6IC9eICooPzpjb21tZW50ICooPzpcXG58XFxzKiQpfGNsb3NlZCAqKD86XFxuezIsfXxcXHMqJCl8Y2xvc2luZyAqKD86XFxuezIsfXxcXHMqJCkpLyxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogK1tcIihdKFteXFxuXSspW1wiKV0pPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wLFxuICBwYXJhZ3JhcGg6IC9eKCg/OlteXFxuXStcXG4/KD8haHJ8aGVhZGluZ3xsaGVhZGluZ3xibG9ja3F1b3RlfHRhZ3xkZWYpKSspXFxuKi8sXG4gIHRleHQ6IC9eW15cXG5dKy9cbn07XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGQrXFwuKS87XG5ibG9jay5pdGVtID0gL14oICopKGJ1bGwpIFteXFxuXSooPzpcXG4oPyFcXDFidWxsIClbXlxcbl0qKSovO1xuYmxvY2suaXRlbSA9IHJlcGxhY2UoYmxvY2suaXRlbSwgJ2dtJylcbiAgKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgKCk7XG5cbmJsb2NrLmxpc3QgPSByZXBsYWNlKGJsb2NrLmxpc3QpXG4gICgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gICgnaHInLCAnXFxcXG4rKD89XFxcXDE/KD86Wy0qX10gKil7Myx9KD86XFxcXG4rfCQpKScpXG4gICgnZGVmJywgJ1xcXFxuKyg/PScgKyBibG9jay5kZWYuc291cmNlICsgJyknKVxuICAoKTtcblxuYmxvY2suYmxvY2txdW90ZSA9IHJlcGxhY2UoYmxvY2suYmxvY2txdW90ZSlcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG5ibG9jay5fdGFnID0gJyg/ISg/OidcbiAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGUnXG4gICsgJ3x2YXJ8c2FtcHxrYmR8c3VifHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkbydcbiAgKyAnfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKVxcXFxiKVxcXFx3Kyg/ITovfFteXFxcXHdcXFxcc0BdKkApXFxcXGInO1xuXG5ibG9jay5odG1sID0gcmVwbGFjZShibG9jay5odG1sKVxuICAoJ2NvbW1lbnQnLCAvPCEtLVtcXHNcXFNdKj8tLT4vKVxuICAoJ2Nsb3NlZCcsIC88KHRhZylbXFxzXFxTXSs/PFxcL1xcMT4vKVxuICAoJ2Nsb3NpbmcnLCAvPHRhZyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8pXG4gICgvdGFnL2csIGJsb2NrLl90YWcpXG4gICgpO1xuXG5ibG9jay5wYXJhZ3JhcGggPSByZXBsYWNlKGJsb2NrLnBhcmFncmFwaClcbiAgKCdocicsIGJsb2NrLmhyKVxuICAoJ2hlYWRpbmcnLCBibG9jay5oZWFkaW5nKVxuICAoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gICgnYmxvY2txdW90ZScsIGJsb2NrLmJsb2NrcXVvdGUpXG4gICgndGFnJywgJzwnICsgYmxvY2suX3RhZylcbiAgKCdkZWYnLCBibG9jay5kZWYpXG4gICgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiAqKGB7Myx9fH57Myx9KVsgXFwuXSooXFxTKyk/ICpcXG4oW1xcc1xcU10qPylcXHMqXFwxICooPzpcXG4rfCQpLyxcbiAgcGFyYWdyYXBoOiAvXi8sXG4gIGhlYWRpbmc6IC9eICooI3sxLDZ9KSArKFteXFxuXSs/KSAqIyogKig/Olxcbit8JCkvXG59KTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IHJlcGxhY2UoYmxvY2sucGFyYWdyYXBoKVxuICAoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihcXFMuKlxcfC4qKVxcbiAqKFstOl0rICpcXHxbLXwgOl0qKVxcbigoPzouKlxcfC4qKD86XFxufCQpKSopXFxuKi8sXG4gIHRhYmxlOiAvXiAqXFx8KC4rKVxcbiAqXFx8KCAqWy06XStbLXwgOl0qKVxcbigoPzogKlxcfC4qKD86XFxufCQpKSopXFxuKi9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IHt9O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5ydWxlcyA9IGJsb2NrLm5vcm1hbDtcblxuICBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3AsIGJxKSB7XG4gIHZhciBzcmMgPSBzcmMucmVwbGFjZSgvXiArJC9nbSwgJycpXG4gICAgLCBuZXh0XG4gICAgLCBsb29zZVxuICAgICwgY2FwXG4gICAgLCBidWxsXG4gICAgLCBiXG4gICAgLCBpdGVtXG4gICAgLCBzcGFjZVxuICAgICwgaVxuICAgICwgbDtcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gbmV3bGluZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5ld2xpbmUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFswXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzcGFjZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gezR9L2dtLCAnJyk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICB0ZXh0OiAhdGhpcy5vcHRpb25zLnBlZGFudGljXG4gICAgICAgICAgPyBjYXAucmVwbGFjZSgvXFxuKyQvLCAnJylcbiAgICAgICAgICA6IGNhcFxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmZW5jZXMgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5mZW5jZXMuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgbGFuZzogY2FwWzJdLFxuICAgICAgICB0ZXh0OiBjYXBbM10gfHwgJydcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQ6IGNhcFsyXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWJsZSBubyBsZWFkaW5nIHBpcGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgdHlwZTogJ3RhYmxlJyxcbiAgICAgICAgaGVhZGVyOiBjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJylcbiAgICAgIH07XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdyaWdodCc7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgIH0gZWxzZSBpZiAoL14gKjotKyAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW0uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbS5jZWxsc1tpXSA9IGl0ZW0uY2VsbHNbaV0uc3BsaXQoLyAqXFx8ICovKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzJdID09PSAnPScgPyAxIDogMixcbiAgICAgICAgdGV4dDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wLCB0cnVlKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3Rfc3RhcnQnLFxuICAgICAgICBvcmRlcmVkOiBidWxsLmxlbmd0aCA+IDFcbiAgICAgIH0pO1xuXG4gICAgICAvLyBHZXQgZWFjaCB0b3AtbGV2ZWwgaXRlbS5cbiAgICAgIGNhcCA9IGNhcFswXS5tYXRjaCh0aGlzLnJ1bGVzLml0ZW0pO1xuXG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICBsID0gY2FwLmxlbmd0aDtcbiAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpdGVtID0gY2FwW2ldO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtJ3MgYnVsbGV0XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlZW4gYXMgdGhlIG5leHQgdG9rZW4uXG4gICAgICAgIHNwYWNlID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14gKihbKistXXxcXGQrXFwuKSArLywgJycpO1xuXG4gICAgICAgIC8vIE91dGRlbnQgd2hhdGV2ZXIgdGhlXG4gICAgICAgIC8vIGxpc3QgaXRlbSBjb250YWlucy4gSGFja3kuXG4gICAgICAgIGlmICh+aXRlbS5pbmRleE9mKCdcXG4gJykpIHtcbiAgICAgICAgICBzcGFjZSAtPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICBpdGVtID0gIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgICAgPyBpdGVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7MSwnICsgc3BhY2UgKyAnfScsICdnbScpLCAnJylcbiAgICAgICAgICAgIDogaXRlbS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgbmV4dCBsaXN0IGl0ZW0gYmVsb25ncyBoZXJlLlxuICAgICAgICAvLyBCYWNrcGVkYWwgaWYgaXQgZG9lcyBub3QgYmVsb25nIGluIHRoaXMgbGlzdC5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zbWFydExpc3RzICYmIGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgYiA9IGJsb2NrLmJ1bGxldC5leGVjKGNhcFtpICsgMV0pWzBdO1xuICAgICAgICAgIGlmIChidWxsICE9PSBiICYmICEoYnVsbC5sZW5ndGggPiAxICYmIGIubGVuZ3RoID4gMSkpIHtcbiAgICAgICAgICAgIHNyYyA9IGNhcC5zbGljZShpICsgMSkuam9pbignXFxuJykgKyBzcmM7XG4gICAgICAgICAgICBpID0gbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgaXRlbSBpcyBsb29zZSBvciBub3QuXG4gICAgICAgIC8vIFVzZTogLyhefFxcbikoPyEgKVteXFxuXStcXG5cXG4oPyFcXHMqJCkvXG4gICAgICAgIC8vIGZvciBkaXNjb3VudCBiZWhhdmlvci5cbiAgICAgICAgbG9vc2UgPSBuZXh0IHx8IC9cXG5cXG4oPyFcXHMqJCkvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIG5leHQgPSBpdGVtLmNoYXJBdChpdGVtLmxlbmd0aCAtIDEpID09PSAnXFxuJztcbiAgICAgICAgICBpZiAoIWxvb3NlKSBsb29zZSA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBsb29zZVxuICAgICAgICAgICAgPyAnbG9vc2VfaXRlbV9zdGFydCdcbiAgICAgICAgICAgIDogJ2xpc3RfaXRlbV9zdGFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVjdXJzZS5cbiAgICAgICAgdGhpcy50b2tlbihpdGVtLCBmYWxzZSwgYnEpO1xuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6ICF0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgJiYgKGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScpLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVmXG4gICAgaWYgKCghYnEgJiYgdG9wKSAmJiAoY2FwID0gdGhpcy5ydWxlcy5kZWYuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLmxpbmtzW2NhcFsxXS50b0xvd2VyQ2FzZSgpXSA9IHtcbiAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICB0aXRsZTogY2FwWzNdXG4gICAgICB9O1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFibGUgKGdmbSlcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLnRhYmxlLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICBjZWxsczogY2FwWzNdLnJlcGxhY2UoLyg/OiAqXFx8ICopP1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoL14gKi0rOiAqJC8udGVzdChpdGVtLmFsaWduW2ldKSkge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAncmlnaHQnO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgaXRlbS5hbGlnbltpXSA9ICdjZW50ZXInO1xuICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSsgKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBpdGVtLmNlbGxzW2ldXG4gICAgICAgICAgLnJlcGxhY2UoL14gKlxcfCAqfCAqXFx8ICokL2csICcnKVxuICAgICAgICAgIC5zcGxpdCgvICpcXHwgKi8pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0b3AtbGV2ZWwgcGFyYWdyYXBoXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5wYXJhZ3JhcGguZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgdGV4dDogY2FwWzFdLmNoYXJBdChjYXBbMV0ubGVuZ3RoIC0gMSkgPT09ICdcXG4nXG4gICAgICAgICAgPyBjYXBbMV0uc2xpY2UoMCwgLTEpXG4gICAgICAgICAgOiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICAvLyBUb3AtbGV2ZWwgc2hvdWxkIG5ldmVyIHJlYWNoIGhlcmUuXG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzcmMpIHtcbiAgICAgIHRocm93IG5ld1xuICAgICAgICBFcnJvcignSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbi8qKlxuICogSW5saW5lLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgaW5saW5lID0ge1xuICBlc2NhcGU6IC9eXFxcXChbXFxcXGAqe31cXFtcXF0oKSMrXFwtLiFfPl0pLyxcbiAgYXV0b2xpbms6IC9ePChbXiA+XSsoQHw6XFwvKVteID5dKyk+LyxcbiAgdXJsOiBub29wLFxuICB0YWc6IC9ePCEtLVtcXHNcXFNdKj8tLT58XjxcXC8/XFx3Kyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo/Pi8sXG4gIGxpbms6IC9eIT9cXFsoaW5zaWRlKVxcXVxcKGhyZWZcXCkvLFxuICByZWZsaW5rOiAvXiE/XFxbKGluc2lkZSlcXF1cXHMqXFxbKFteXFxdXSopXFxdLyxcbiAgbm9saW5rOiAvXiE/XFxbKCg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dKSopXFxdLyxcbiAgc3Ryb25nOiAvXl9fKFtcXHNcXFNdKz8pX18oPyFfKXxeXFwqXFwqKFtcXHNcXFNdKz8pXFwqXFwqKD8hXFwqKS8sXG4gIGVtOiAvXlxcYl8oKD86W15fXXxfXykrPylfXFxifF5cXCooKD86XFwqXFwqfFtcXHNcXFNdKSs/KVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKylcXHMqKFtcXHNcXFNdKj9bXmBdKVxccypcXDEoPyFgKS8sXG4gIGJyOiAvXiB7Mix9XFxuKD8hXFxzKiQpLyxcbiAgZGVsOiBub29wLFxuICB0ZXh0OiAvXltcXHNcXFNdKz8oPz1bXFxcXDwhXFxbXypgXXwgezIsfVxcbnwkKS9cbn07XG5cbmlubGluZS5faW5zaWRlID0gLyg/OlxcW1teXFxdXSpcXF18W15cXFtcXF1dfFxcXSg/PVteXFxbXSpcXF0pKSovO1xuaW5saW5lLl9ocmVmID0gL1xccyo8PyhbXFxzXFxTXSo/KT4/KD86XFxzK1snXCJdKFtcXHNcXFNdKj8pWydcIl0pP1xccyovO1xuXG5pbmxpbmUubGluayA9IHJlcGxhY2UoaW5saW5lLmxpbmspXG4gICgnaW5zaWRlJywgaW5saW5lLl9pbnNpZGUpXG4gICgnaHJlZicsIGlubGluZS5faHJlZilcbiAgKCk7XG5cbmlubGluZS5yZWZsaW5rID0gcmVwbGFjZShpbmxpbmUucmVmbGluaylcbiAgKCdpbnNpZGUnLCBpbmxpbmUuX2luc2lkZSlcbiAgKCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopL1xufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogcmVwbGFjZShpbmxpbmUuZXNjYXBlKSgnXSknLCAnfnxdKScpKCksXG4gIHVybDogL14oaHR0cHM/OlxcL1xcL1teXFxzPF0rW148Liw6O1wiJylcXF1cXHNdKS8sXG4gIGRlbDogL15+fig/PVxcUykoW1xcc1xcU10qP1xcUyl+fi8sXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLnRleHQpXG4gICAgKCddfCcsICd+XXwnKVxuICAgICgnfCcsICd8aHR0cHM/Oi8vfCcpXG4gICAgKClcbn0pO1xuXG4vKipcbiAqIEdGTSArIExpbmUgQnJlYWtzIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmJyZWFrcyA9IG1lcmdlKHt9LCBpbmxpbmUuZ2ZtLCB7XG4gIGJyOiByZXBsYWNlKGlubGluZS5icikoJ3syLH0nLCAnKicpKCksXG4gIHRleHQ6IHJlcGxhY2UoaW5saW5lLmdmbS50ZXh0KSgnezIsfScsICcqJykoKVxufSk7XG5cbi8qKlxuICogSW5saW5lIExleGVyICYgQ29tcGlsZXJcbiAqL1xuXG5mdW5jdGlvbiBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5saW5rcyA9IGxpbmtzO1xuICB0aGlzLnJ1bGVzID0gaW5saW5lLm5vcm1hbDtcbiAgdGhpcy5yZW5kZXJlciA9IHRoaXMub3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgUmVuZGVyZXI7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAoIXRoaXMubGlua3MpIHtcbiAgICB0aHJvdyBuZXdcbiAgICAgIEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5nZm0pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5icmVha3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuZ2ZtO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gaW5saW5lLnBlZGFudGljO1xuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbGlua1xuICAgICwgdGV4dFxuICAgICwgaHJlZlxuICAgICwgY2FwO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBlc2NhcGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lc2NhcGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IGNhcFsxXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGF1dG9saW5rXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYXV0b2xpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBjYXBbMV0uY2hhckF0KDYpID09PSAnOidcbiAgICAgICAgICA/IHRoaXMubWFuZ2xlKGNhcFsxXS5zdWJzdHJpbmcoNykpXG4gICAgICAgICAgOiB0aGlzLm1hbmdsZShjYXBbMV0pO1xuICAgICAgICBocmVmID0gdGhpcy5tYW5nbGUoJ21haWx0bzonKSArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBocmVmID0gdGV4dDtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pXG4gICAgICAgICAgOiBlc2NhcGUoY2FwWzBdKVxuICAgICAgICA6IGNhcFswXVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGlua1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxpbmsuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIHtcbiAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICB0aXRsZTogY2FwWzNdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyByZWZsaW5rLCBub2xpbmtcbiAgICBpZiAoKGNhcCA9IHRoaXMucnVsZXMucmVmbGluay5leGVjKHNyYykpXG4gICAgICAgIHx8IChjYXAgPSB0aGlzLnJ1bGVzLm5vbGluay5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgbGluayA9IChjYXBbMl0gfHwgY2FwWzFdKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICBsaW5rID0gdGhpcy5saW5rc1tsaW5rLnRvTG93ZXJDYXNlKCldO1xuICAgICAgaWYgKCFsaW5rIHx8ICFsaW5rLmhyZWYpIHtcbiAgICAgICAgb3V0ICs9IGNhcFswXS5jaGFyQXQoMCk7XG4gICAgICAgIHNyYyA9IGNhcFswXS5zdWJzdHJpbmcoMSkgKyBzcmM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgb3V0ICs9IHRoaXMub3V0cHV0TGluayhjYXAsIGxpbmspO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHN0cm9uZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnN0cm9uZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5zdHJvbmcodGhpcy5vdXRwdXQoY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZW1cbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lbS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5lbSh0aGlzLm91dHB1dChjYXBbMl0gfHwgY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5jb2Rlc3Bhbihlc2NhcGUoY2FwWzJdLCB0cnVlKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBiclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmJyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWwgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5kZWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZGVsKHRoaXMub3V0cHV0KGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIudGV4dChlc2NhcGUodGhpcy5zbWFydHlwYW50cyhjYXBbMF0pKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXdcbiAgICAgICAgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDb21waWxlIExpbmtcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0TGluayA9IGZ1bmN0aW9uKGNhcCwgbGluaykge1xuICB2YXIgaHJlZiA9IGVzY2FwZShsaW5rLmhyZWYpXG4gICAgLCB0aXRsZSA9IGxpbmsudGl0bGUgPyBlc2NhcGUobGluay50aXRsZSkgOiBudWxsO1xuXG4gIHJldHVybiBjYXBbMF0uY2hhckF0KDApICE9PSAnISdcbiAgICA/IHRoaXMucmVuZGVyZXIubGluayhocmVmLCB0aXRsZSwgdGhpcy5vdXRwdXQoY2FwWzFdKSlcbiAgICA6IHRoaXMucmVuZGVyZXIuaW1hZ2UoaHJlZiwgdGl0bGUsIGVzY2FwZShjYXBbMV0pKTtcbn07XG5cbi8qKlxuICogU21hcnR5cGFudHMgVHJhbnNmb3JtYXRpb25zXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLnNtYXJ0eXBhbnRzID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5zbWFydHlwYW50cykgcmV0dXJuIHRleHQ7XG4gIHJldHVybiB0ZXh0XG4gICAgLy8gZW0tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tLS9nLCAnXFx1MjAxNCcpXG4gICAgLy8gZW4tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tL2csICdcXHUyMDEzJylcbiAgICAvLyBvcGVuaW5nIHNpbmdsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XCJcXHNdKScvZywgJyQxXFx1MjAxOCcpXG4gICAgLy8gY2xvc2luZyBzaW5nbGVzICYgYXBvc3Ryb3BoZXNcbiAgICAucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpXG4gICAgLy8gb3BlbmluZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1xcdTIwMThcXHNdKVwiL2csICckMVxcdTIwMWMnKVxuICAgIC8vIGNsb3NpbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFx1MjAxZCcpXG4gICAgLy8gZWxsaXBzZXNcbiAgICAucmVwbGFjZSgvXFwuezN9L2csICdcXHUyMDI2Jyk7XG59O1xuXG4vKipcbiAqIE1hbmdsZSBMaW5rc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5tYW5nbGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLm1hbmdsZSkgcmV0dXJuIHRleHQ7XG4gIHZhciBvdXQgPSAnJ1xuICAgICwgbCA9IHRleHQubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgY2g7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgY2ggPSAneCcgKyBjaC50b1N0cmluZygxNik7XG4gICAgfVxuICAgIG91dCArPSAnJiMnICsgY2ggKyAnOyc7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZW5kZXJlclxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbn1cblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGUgPSBmdW5jdGlvbihjb2RlLCBsYW5nLCBlc2NhcGVkKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KSB7XG4gICAgdmFyIG91dCA9IHRoaXMub3B0aW9ucy5oaWdobGlnaHQoY29kZSwgbGFuZyk7XG4gICAgaWYgKG91dCAhPSBudWxsICYmIG91dCAhPT0gY29kZSkge1xuICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICBjb2RlID0gb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlmICghbGFuZykge1xuICAgIHJldHVybiAnPHByZT48Y29kZT4nXG4gICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICsgJ1xcbjwvY29kZT48L3ByZT4nO1xuICB9XG5cbiAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmxhbmdQcmVmaXhcbiAgICArIGVzY2FwZShsYW5nLCB0cnVlKVxuICAgICsgJ1wiPidcbiAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICArICdcXG48L2NvZGU+PC9wcmU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ibG9ja3F1b3RlID0gZnVuY3Rpb24ocXVvdGUpIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nICsgcXVvdGUgKyAnPC9ibG9ja3F1b3RlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHRtbCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWw7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaGVhZGluZyA9IGZ1bmN0aW9uKHRleHQsIGxldmVsLCByYXcpIHtcbiAgcmV0dXJuICc8aCdcbiAgICArIGxldmVsXG4gICAgKyAnIGlkPVwiJ1xuICAgICsgdGhpcy5vcHRpb25zLmhlYWRlclByZWZpeFxuICAgICsgcmF3LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnLScpXG4gICAgKyAnXCI+J1xuICAgICsgdGV4dFxuICAgICsgJzwvaCdcbiAgICArIGxldmVsXG4gICAgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQpIHtcbiAgdmFyIHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmxpc3RpdGVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxsaT4nICsgdGV4dCArICc8L2xpPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIHJldHVybiAnPHRhYmxlPlxcbidcbiAgICArICc8dGhlYWQ+XFxuJ1xuICAgICsgaGVhZGVyXG4gICAgKyAnPC90aGVhZD5cXG4nXG4gICAgKyAnPHRib2R5PlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3Rib2R5PlxcbidcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgZmxhZ3MuYWxpZ24gKyAnXCI+J1xuICAgIDogJzwnICsgdHlwZSArICc+JztcbiAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cbi8vIHNwYW4gbGV2ZWwgcmVuZGVyZXJcblJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHN0cm9uZz4nICsgdGV4dCArICc8L3N0cm9uZz4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxlbT4nICsgdGV4dCArICc8L2VtPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGNvZGU+JyArIHRleHQgKyAnPC9jb2RlPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8YnIvPicgOiAnPGJyPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxkZWw+JyArIHRleHQgKyAnPC9kZWw+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHByb3QuaW5kZXhPZignamF2YXNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ3Zic2NyaXB0OicpID09PSAwKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIHZhciBvdXQgPSAnPGEgaHJlZj1cIicgKyBocmVmICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBQYXJzaW5nICYgQ29tcGlsaW5nXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbiA9IG51bGw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucywgcmVuZGVyZXIpIHtcbiAgdmFyIHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucywgcmVuZGVyZXIpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlKHNyYyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExvb3BcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIHRoaXMuaW5saW5lID0gbmV3IElubGluZUxleGVyKHNyYy5saW5rcywgdGhpcy5vcHRpb25zLCB0aGlzLnJlbmRlcmVyKTtcbiAgdGhpcy50b2tlbnMgPSBzcmMucmV2ZXJzZSgpO1xuXG4gIHZhciBvdXQgPSAnJztcbiAgd2hpbGUgKHRoaXMubmV4dCgpKSB7XG4gICAgb3V0ICs9IHRoaXMudG9rKCk7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy50b2tlbnMucG9wKCk7XG59O1xuXG4vKipcbiAqIFByZXZpZXcgTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy50b2tlbnMubGVuZ3RoIC0gMV0gfHwgMDtcbn07XG5cbi8qKlxuICogUGFyc2UgVGV4dCBUb2tlbnNcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keSA9IHRoaXMudG9rZW4udGV4dDtcblxuICB3aGlsZSAodGhpcy5wZWVrKCkudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgYm9keSArPSAnXFxuJyArIHRoaXMubmV4dCgpLnRleHQ7XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbmxpbmUub3V0cHV0KGJvZHkpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBDdXJyZW50IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS50b2sgPSBmdW5jdGlvbigpIHtcbiAgc3dpdGNoICh0aGlzLnRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdzcGFjZSc6IHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY2FzZSAnaHInOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ocigpO1xuICAgIH1cbiAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaGVhZGluZyhcbiAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4udGV4dCksXG4gICAgICAgIHRoaXMudG9rZW4uZGVwdGgsXG4gICAgICAgIHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ2NvZGUnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5jb2RlKHRoaXMudG9rZW4udGV4dCxcbiAgICAgICAgdGhpcy50b2tlbi5sYW5nLFxuICAgICAgICB0aGlzLnRva2VuLmVzY2FwZWQpO1xuICAgIH1cbiAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgIHZhciBoZWFkZXIgPSAnJ1xuICAgICAgICAsIGJvZHkgPSAnJ1xuICAgICAgICAsIGlcbiAgICAgICAgLCByb3dcbiAgICAgICAgLCBjZWxsXG4gICAgICAgICwgZmxhZ3NcbiAgICAgICAgLCBqO1xuXG4gICAgICAvLyBoZWFkZXJcbiAgICAgIGNlbGwgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmhlYWRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBmbGFncyA9IHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9O1xuICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLmhlYWRlcltpXSksXG4gICAgICAgICAgeyBoZWFkZXI6IHRydWUsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2ldIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGhlYWRlciArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByb3cgPSB0aGlzLnRva2VuLmNlbGxzW2ldO1xuXG4gICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQocm93W2pdKSxcbiAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdibG9ja3F1b3RlX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdibG9ja3F1b3RlX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJ1xuICAgICAgICAsIG9yZGVyZWQgPSB0aGlzLnRva2VuLm9yZGVyZWQ7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdChib2R5LCBvcmRlcmVkKTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgdmFyIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2l0ZW1fZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbG9vc2VfaXRlbV9zdGFydCc6IHtcbiAgICAgIHZhciBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgIHZhciBodG1sID0gIXRoaXMudG9rZW4ucHJlICYmICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgPyB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KVxuICAgICAgICA6IHRoaXMudG9rZW4udGV4dDtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmh0bWwoaHRtbCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlcnNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIHJldHVybiBodG1sXG4gICAgLnJlcGxhY2UoIWVuY29kZSA/IC8mKD8hIz9cXHcrOykvZyA6IC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjMzk7Jyk7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcblx0Ly8gZXhwbGljaXRseSBtYXRjaCBkZWNpbWFsLCBoZXgsIGFuZCBuYW1lZCBIVE1MIGVudGl0aWVzIFxuICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mKCMoPzpcXGQrKXwoPzojeFswLTlBLUZhLWZdKyl8KD86XFx3KykpOz8vZywgZnVuY3Rpb24oXywgbikge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShyZWdleCwgb3B0KSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICBvcHQgPSBvcHQgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbiBzZWxmKG5hbWUsIHZhbCkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdCk7XG4gICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgdmFsID0gdmFsLnJlcGxhY2UoLyhefFteXFxbXSlcXF4vZywgJyQxJyk7XG4gICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxubm9vcC5leGVjID0gbm9vcDtcblxuZnVuY3Rpb24gbWVyZ2Uob2JqKSB7XG4gIHZhciBpID0gMVxuICAgICwgdGFyZ2V0XG4gICAgLCBrZXk7XG5cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBNYXJrZWRcbiAqL1xuXG5mdW5jdGlvbiBtYXJrZWQoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayB8fCB0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHQ7XG4gICAgICBvcHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCB8fCB7fSk7XG5cbiAgICB2YXIgaGlnaGxpZ2h0ID0gb3B0LmhpZ2hsaWdodFxuICAgICAgLCB0b2tlbnNcbiAgICAgICwgcGVuZGluZ1xuICAgICAgLCBpID0gMDtcblxuICAgIHRyeSB7XG4gICAgICB0b2tlbnMgPSBMZXhlci5sZXgoc3JjLCBvcHQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGUpO1xuICAgIH1cblxuICAgIHBlbmRpbmcgPSB0b2tlbnMubGVuZ3RoO1xuXG4gICAgdmFyIGRvbmUgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIG91dCA9IFBhcnNlci5wYXJzZSh0b2tlbnMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVyciA9IGU7XG4gICAgICB9XG5cbiAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG5cbiAgICAgIHJldHVybiBlcnJcbiAgICAgICAgPyBjYWxsYmFjayhlcnIpXG4gICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICB9O1xuXG4gICAgaWYgKCFoaWdobGlnaHQgfHwgaGlnaGxpZ2h0Lmxlbmd0aCA8IDMpIHtcbiAgICAgIHJldHVybiBkb25lKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlIG9wdC5oaWdobGlnaHQ7XG5cbiAgICBpZiAoIXBlbmRpbmcpIHJldHVybiBkb25lKCk7XG5cbiAgICBmb3IgKDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0KHRva2VuLnRleHQsIHRva2VuLmxhbmcsIGZ1bmN0aW9uKGVyciwgY29kZSkge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCB8fCBjb2RlID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgLS1wZW5kaW5nIHx8IGRvbmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSh0b2tlbnNbaV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHQpIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gICAgcmV0dXJuIFBhcnNlci5wYXJzZShMZXhlci5sZXgoc3JjLCBvcHQpLCBvcHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2NoamovbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJlZDo8L3A+PHByZT4nXG4gICAgICAgICsgZXNjYXBlKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICArICc8L3ByZT4nO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1lcmdlKG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5kZWZhdWx0cyA9IHtcbiAgZ2ZtOiB0cnVlLFxuICB0YWJsZXM6IHRydWUsXG4gIGJyZWFrczogZmFsc2UsXG4gIHBlZGFudGljOiBmYWxzZSxcbiAgc2FuaXRpemU6IGZhbHNlLFxuICBzYW5pdGl6ZXI6IG51bGwsXG4gIG1hbmdsZTogdHJ1ZSxcbiAgc21hcnRMaXN0czogZmFsc2UsXG4gIHNpbGVudDogZmFsc2UsXG4gIGhpZ2hsaWdodDogbnVsbCxcbiAgbGFuZ1ByZWZpeDogJ2xhbmctJyxcbiAgc21hcnR5cGFudHM6IGZhbHNlLFxuICBoZWFkZXJQcmVmaXg6ICcnLFxuICByZW5kZXJlcjogbmV3IFJlbmRlcmVyLFxuICB4aHRtbDogZmFsc2Vcbn07XG5cbi8qKlxuICogRXhwb3NlXG4gKi9cblxubWFya2VkLlBhcnNlciA9IFBhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5cbm1hcmtlZC5SZW5kZXJlciA9IFJlbmRlcmVyO1xuXG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcblxubWFya2VkLklubGluZUxleGVyID0gSW5saW5lTGV4ZXI7XG5tYXJrZWQuaW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlci5vdXRwdXQ7XG5cbm1hcmtlZC5wYXJzZSA9IG1hcmtlZDtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IG1hcmtlZDtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIG1hcmtlZDsgfSk7XG59IGVsc2Uge1xuICB0aGlzLm1hcmtlZCA9IG1hcmtlZDtcbn1cblxufSkuY2FsbChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMgfHwgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKTtcbn0oKSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tYXJrZWQvbGliL21hcmtlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygxNCkpKDY3OSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBfdXRpbHNfZGxsXG4gKiogbW9kdWxlIGlkID0gMTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbidcbmltcG9ydCBGYWRlIGZyb20gJy4uLy4uL2VsZW1lbnRzL19hbmltYXRpb25zL0ZhZGUnXG5pbXBvcnQgVmlld2VyUHJlZmVyZW5jZSBmcm9tICcuL1ZpZXdlclByZWZlcmVuY2UnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9fdmlld2VyLXBhbmVsLnNjc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZ1xuICBzaG93Vmlld2VyUHJlZmVyZW5jZTogYm9vbGVhblxuICBvblByZWZWaXNpYmlsaXR5Q2hhbmdlOiAobmV3VmlzaWJpbGl0eTogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93Vmlld2VyUHJlZmVyZW5jZTogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVQcmVmQ2xpY2sgPSB0aGlzLmhhbmRsZVByZWZDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVQcmVmQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vblByZWZWaXNpYmlsaXR5Q2hhbmdlKCF0aGlzLnByb3BzLnNob3dWaWV3ZXJQcmVmZXJlbmNlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgc2hvd1ZpZXdlclByZWZlcmVuY2UgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInZpZXdlci1wYW5lbFwiPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiYmFja1wiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJiYWNrXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+6L+U5ZuePC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlUHJlZkNsaWNrfSBzdHlsZU5hbWU9XCJwcmVmZXJlbmNlXCI+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicHJlZmVyZW5jZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZhZGU+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNob3dWaWV3ZXJQcmVmZXJlbmNlID8gKFxuICAgICAgICAgICAgICAgIDxWaWV3ZXJQcmVmZXJlbmNlIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9GYWRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJQYW5lbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQYW5lbC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFN3aXRjaGVyIGZyb20gJy4uLy4uL2VsZW1lbnRzL1N3aXRjaGVyJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vX3ZpZXdlci1wcmVmZXJlbmNlLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lOiBzdHJpbmdcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgVmlld2VyUHJlZmVyZW5jZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJ2aWV3ZXItcHJlZmVyZW5jZVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tZm9udC1zaXplXCI+XG4gICAgICAgICAgICA8c3Bhbj5BLTwvc3Bhbj48c3Bhbj5BKzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPua7muWKqOaooeW8jzwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hlciB2YWx1ZT17dHJ1ZX0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tdGhlbWVcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZDogJyNmZmYnfX0+dGhlbWUxPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kOiAnI2VlZSd9fT50aGVtZTI8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmQ6ICcjMjIyJ319PnRoZW1lMzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4pKFZpZXdlclByZWZlcmVuY2UgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXJQcmVmZXJlbmNlLnRzeFxuICoqLyIsImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJ1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXJcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJylcblxuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgb246IGJvb2xlYW5cbi8vIH1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKG5ld1ZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIH1bXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHZhbHVlOiBpc09uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc09uID09PSAnMScgfHwgaXNPbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzT24gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09uID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YXRlID0gQm9vbGVhbihpc09uKSA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHN0eWxlTmFtZT1cInN3aXRjaGVyLXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSlcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5rKh5pyJ57uZIG9wdGlvbnMg5pe25b+F6aG75L2/55So5biD5bCU5Z6L55qEIHZhbHVl77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9e2Bzd2l0Y2hlci0tJHtzdGF0ZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic3dpdGNoZXItd3JhcFwiOlwic3dpdGNoZXItd3JhcF8zVU1BVVwiLFwic3dpdGNoZXJcIjpcInN3aXRjaGVyX0czbjRfXCIsXCJzd2l0Y2hlci0tb2ZmXCI6XCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXCJzd2l0Y2hlci0tb25cIjpcInN3aXRjaGVyLS1vbl8yeGl3T1wiLFwic3dpdGNoZXItYnV0dG9uXCI6XCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcInN3aXRjaGVyLXRyYWNrXCI6XCJzd2l0Y2hlci10cmFja194dmhqZ1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInZpZXdlci1wcmVmZXJlbmNlXCI6XCJ2aWV3ZXItcHJlZmVyZW5jZV8xRk5KWlwiLFwib3B0aW9uXCI6XCJvcHRpb25fMTlGWFdcIixcIm9wdGlvbi1mb250LXNpemVcIjpcIm9wdGlvbi1mb250LXNpemVfMThPTkcgb3B0aW9uXzE5RlhXXCIsXCJvcHRpb24tc2Nyb2xsXCI6XCJvcHRpb24tc2Nyb2xsXzNhZ3RPIG9wdGlvbl8xOUZYV1wiLFwibGFiZWxcIjpcImxhYmVsXzNITFBwXCIsXCJzd2l0Y2hlclwiOlwic3dpdGNoZXJfM1Q5S19cIixcIm9wdGlvbi10aGVtZVwiOlwib3B0aW9uLXRoZW1lXzM4YlVnIG9wdGlvbl8xOUZYV1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9fdmlld2VyLXByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDE1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1widmlld2VyLXBhbmVsXCI6XCJ2aWV3ZXItcGFuZWxfYW9PdjdcIixcImNvbnRhaW5lclwiOlwiY29udGFpbmVyXzJjTE5JXCIsXCJiYWNrXCI6XCJiYWNrX3BweFFfXCIsXCJ0aXRsZVwiOlwidGl0bGVfM05obGlcIixcInByZWZlcmVuY2VcIjpcInByZWZlcmVuY2VfMXdQYTZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci1wYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VMaXN0IGZyb20gJy4vQm9va1BhZ2VMaXN0J1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbm9kZXM6IHN0cmluZ1tdXG4gIGZsdWlkOiBib29sZWFuXG59XG5cbmNsYXNzIEJvb2tQYWdlV2l0aFJhd0h0bWwgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBib29rUGFnZUxpc3Q6IGFueVxuXG4gIGdldENvbnRlbnRIdG1sKCkge1xuICAgIHJldHVybiB0aGlzLmJvb2tQYWdlTGlzdC5ib29rUGFnZS5ib29rUGFnZURvbVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmx1aWQsIG5vZGVzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2tQYWdlTGlzdFxuICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgIG5vZGVzPXtub2Rlc31cbiAgICAgICAgbm9kZUhlaWdodHM9e1tdfVxuICAgICAgICBwYWdlQ291bnQ9ezF9XG4gICAgICAgIHBhZ2VIZWlnaHQ9ezB9XG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmJvb2tQYWdlTGlzdCA9IHJlZiB9fVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VXaXRoUmF3SHRtbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9Cb29rUGFnZVdpdGhSYXdIdG1sLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvX3ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMTU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9