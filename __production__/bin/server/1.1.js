exports.ids = [1];
exports.modules = {

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _redux = __webpack_require__(212);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _ViewerContainer = __webpack_require__(213);
	
	var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);
	
	var _Viewer = __webpack_require__(260);
	
	var _Viewer2 = _interopRequireDefault(_Viewer);
	
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
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var bookId = ownProps.params.id;
	    var book = selectors.common.entity('books', bookId)(state);
	    return {
	        book: book
	    };
	};
	var Viewer = function (_Component) {
	    _inherits(Viewer, _Component);
	
	    function Viewer(props) {
	        _classCallCheck(this, Viewer);
	
	        var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));
	
	        _this.bookId = props.params.id;
	        return _this;
	    }
	
	    _createClass(Viewer, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return !_lodash2.default.isEqual(this.state, nextState) || !_lodash2.default.isEqual(this.props, nextProps);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.actions.initializeViewer(this.bookId);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "viewer", title: this.props.book.title }, _react2.default.createElement(_ViewerContainer2.default, null));
	        }
	    }]);
	
	    return Viewer;
	}(_react.Component);
	Viewer = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(_Viewer2.default)], Viewer);
	exports.default = Viewer;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(212);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookContainer = __webpack_require__(214);
	
	var _BookContainer2 = _interopRequireDefault(_BookContainer);
	
	var _ViewerPanel = __webpack_require__(234);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookChapters = __webpack_require__(255);
	
	var _BookChapters2 = _interopRequireDefault(_BookChapters);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Loading = __webpack_require__(256);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _utils = __webpack_require__(92);
	
	var _utils2 = _interopRequireDefault(_utils);
	
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
	
	var PAGE_LIMIT = 5;
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var config = selectors.viewer.config(state);
	    var bookId = config.bookId;
	    var book = selectors.common.entity('books', bookId)(state);
	    var bookContent = selectors.common.entity('bookContents', bookId)(state);
	    var bookProgress = selectors.common.entity('bookProgress', bookId)(state);
	    var cloudProgress = _lodash2.default.get(bookProgress, 'percentage', 0);
	    var computedPages = selectors.viewer.computed(bookId)(state);
	
	    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);
	
	    var viewerPercentage = _selectors$viewer$pro.percentage;
	    var isFetching = _selectors$viewer$pro.isFetching;
	
	    var _selectors$viewer$pan = selectors.viewer.panel(state);
	
	    var showPanel = _selectors$viewer$pan.show;
	
	    return {
	        bookId: bookId,
	        book: book,
	        bookContent: bookContent,
	        isFetchingProgress: isFetching,
	        session: state.session,
	        computedPages: computedPages,
	        config: config,
	        cloudProgress: cloudProgress,
	        viewerPercentage: viewerPercentage,
	        showPanel: showPanel
	    };
	};
	var ViewerContainer = function (_Component) {
	    _inherits(ViewerContainer, _Component);
	
	    function ViewerContainer(props) {
	        _classCallCheck(this, ViewerContainer);
	
	        var _this = _possibleConstructorReturn(this, (ViewerContainer.__proto__ || Object.getPrototypeOf(ViewerContainer)).call(this, props));
	
	        _this.state = {
	            showPageInfo: false
	        };
	        _this.resizeLazily = _lodash2.default.debounce(_this.handleResize, 500, {
	            maxWait: 1000
	        });
	        _this.handleViewerClick = _this.handleViewerClick.bind(_this);
	        _this.handleResize = _this.handleResize.bind(_this);
	        _this.resizeLazily = _this.resizeLazily.bind(_this);
	        _this.handleRawDataMount = _this.handleRawDataMount.bind(_this);
	        _this.handelViewerMouseMove = _this.handelViewerMouseMove.bind(_this);
	        return _this;
	    }
	
	    _createClass(ViewerContainer, [{
	        key: "handleRawDataMount",
	        value: function handleRawDataMount(ele) {
	            this.props.actions.calcBook(this.props.bookId, ele);
	        }
	    }, {
	        key: "handleViewerClick",
	        value: function handleViewerClick() {
	            var isTouchMode = this.props.config.isTouchMode;
	
	            if (isTouchMode) {
	                this.props.actions.toggleViewerPanel();
	                this.setState({
	                    showPageInfo: !this.state.showPageInfo
	                });
	            }
	        }
	    }, {
	        key: "handleResize",
	        value: function handleResize() {
	            this.props.actions.initializeViewerConfig(this.props.bookId, {
	                isCalcMode: false
	            });
	        }
	    }, {
	        key: "handelViewerMouseMove",
	        value: function handelViewerMouseMove(event) {
	            var dToScreenRight = _utils2.default.getScreenInfo().view.width - event.pageX;
	            this.setState({
	                showPageInfo: dToScreenRight < 100
	            });
	        }
	    }, {
	        key: "reinitializeViewer",
	        value: function reinitializeViewer() {
	            var bookId = this.props.bookId;
	
	            this.props.actions.configViewer(bookId, {
	                isCalcMode: true
	            });
	            this.setState({
	                showPageInfo: false
	            });
	            this.props.actions.toggleViewerPanel(false);
	        }
	    }, {
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return !_lodash2.default.isEqual(this.state, nextState) || !_lodash2.default.isEqual(this.props, nextProps);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {
	            var viewChanged = !_lodash2.default.isEqualWith(this.props.config, prevProps.config, function (valA, valB, key) {
	                if (key === 'isTouchMode' || key === 'isCalcMode' || key === 'isScrollMode' || key === 'theme') {
	                    return true;
	                }
	            });
	            if (viewChanged) {
	                this.reinitializeViewer();
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('resize', this.resizeLazily);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener('resize', this.resizeLazily);
	        }
	    }, {
	        key: "renderBook",
	        value: function renderBook() {
	            var showPageInfo = this.state.showPageInfo;
	            var _props = this.props;
	            var bookContent = _props.bookContent;
	            var computedPages = _props.computedPages;
	            var _props$config = _props.config;
	            var isCalcMode = _props$config.isCalcMode;
	            var pageHeight = _props$config.pageHeight;
	
	            if (!bookContent.flesh) {
	                return _react2.default.createElement(_Loading2.default, { text: "书籍获取中", center: true });
	            }
	            if (isCalcMode) {
	                return _react2.default.createElement("div", null, _react2.default.createElement(_Loading2.default, { text: "书籍排版中", center: true }), _react2.default.createElement(_BookChapters2.default, { bookFlesh: bookContent.flesh, onRawDataMount: this.handleRawDataMount }));
	            } else if (computedPages.length !== 0) {
	                return _react2.default.createElement(_BookContainer2.default, { allPages: computedPages, pageHeight: pageHeight, showPageInfo: showPageInfo, pageLimit: PAGE_LIMIT });
	            } else {
	                return _react2.default.createElement(_Loading2.default, { text: "准备中", center: true });
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { onClick: this.handleViewerClick, onMouseMove: this.handelViewerMouseMove }, _react2.default.createElement(_ViewerPanel2.default, null), this.renderBook());
	        }
	    }]);
	
	    return ViewerContainer;
	}(_react.Component);
	ViewerContainer = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	})], ViewerContainer);
	exports.default = ViewerContainer;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPages = __webpack_require__(215);
	
	var _BookPages2 = _interopRequireDefault(_BookPages);
	
	var _ViewerScrollbar = __webpack_require__(226);
	
	var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _redux = __webpack_require__(212);
	
	var _reactRedux = __webpack_require__(89);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _NavArrow = __webpack_require__(229);
	
	var _NavArrow2 = _interopRequireDefault(_NavArrow);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
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
	
	var styles = __webpack_require__(232);
	var mapStateToProps = function mapStateToProps(state) {
	    var _selectors$viewer$con = selectors.viewer.config(state);
	
	    var bookId = _selectors$viewer$con.bookId;
	    var theme = _selectors$viewer$con.theme;
	    var isScrollMode = _selectors$viewer$con.isScrollMode;
	    var isCalcMode = _selectors$viewer$con.isCalcMode;
	
	    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);
	
	    var percentage = _selectors$viewer$pro.percentage;
	    var pageNo = _selectors$viewer$pro.pageNo;
	
	    return {
	        percentage: percentage,
	        pageNo: pageNo,
	        theme: theme,
	        isScrollMode: isScrollMode,
	        isCalcMode: isCalcMode
	    };
	};
	var BookContainer = function (_Component) {
	    _inherits(BookContainer, _Component);
	
	    function BookContainer(props) {
	        _classCallCheck(this, BookContainer);
	
	        var _this = _possibleConstructorReturn(this, (BookContainer.__proto__ || Object.getPrototypeOf(BookContainer)).call(this, props));
	
	        _this.handleScroll = _this.handleScroll.bind(_this);
	        _this.handleScrollLazily = _lodash2.default.debounce(_this.handleScroll, 200, {
	            maxWait: 1000
	        });
	        return _this;
	    }
	
	    _createClass(BookContainer, [{
	        key: "handleScroll",
	        value: function handleScroll() {
	            var _props = this.props;
	            var allPages = _props.allPages;
	            var pageHeight = _props.pageHeight;
	            var isScrollMode = _props.isScrollMode;
	
	            var pageCount = allPages.length;
	            var totalHeight = pageCount * pageHeight;
	            var scrollTop = document.body.scrollTop;
	            if (isScrollMode) {
	                this.props.actions.updateBookProgress(scrollTop / totalHeight);
	            }
	        }
	    }, {
	        key: "handleForward",
	        value: function handleForward() {
	            var _props2 = this.props;
	            var allPages = _props2.allPages;
	            var pageNo = _props2.pageNo;
	
	            this.props.actions.viewerJumpTo(pageNo / allPages.length);
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: "handlebackward",
	        value: function handlebackward() {
	            var _props3 = this.props;
	            var allPages = _props3.allPages;
	            var pageNo = _props3.pageNo;
	
	            this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length);
	            document.body.scrollTop = 0;
	        }
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            window.addEventListener('scroll', this.handleScrollLazily);
	        }
	    }, {
	        key: "removeEventListeners",
	        value: function removeEventListeners() {
	            window.removeEventListener('scroll', this.handleScrollLazily);
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
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
	            var _props4 = this.props;
	            var allPages = _props4.allPages;
	            var pageHeight = _props4.pageHeight;
	            var showPageInfo = _props4.showPageInfo;
	            var pageLimit = _props4.pageLimit;
	            var pageNo = _props4.pageNo;
	            var theme = _props4.theme;
	            var isScrollMode = _props4.isScrollMode;
	            var isCalcMode = _props4.isCalcMode;
	
	            var startPageIndex = void 0;
	            startPageIndex = pageNo - Math.ceil(pageLimit / 2);
	            startPageIndex = startPageIndex < 0 ? 0 : startPageIndex;
	            var endPageIndex = startPageIndex + pageLimit;
	            var divHeight = isCalcMode ? 'auto' : isScrollMode ? allPages.length * pageHeight : pageHeight;
	            return _react2.default.createElement("div", { styleName: theme.toLowerCase(), style: { height: divHeight } }, _react2.default.createElement(_BookPages2.default, { pages: _lodash2.default.slice(allPages, startPageIndex, endPageIndex) }), _react2.default.createElement(_NavArrow2.default, { forward: this.handleForward.bind(this), backward: this.handlebackward.bind(this), show: !isScrollMode }), _react2.default.createElement(_ViewerScrollbar2.default, { visible: showPageInfo, current: pageNo, total: allPages.length }));
	        }
	    }]);
	
	    return BookContainer;
	}(_react.Component);
	BookContainer = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(styles)], BookContainer);
	exports.default = BookContainer;

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _BookPage = __webpack_require__(216);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames2 = __webpack_require__(120);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	var styles = __webpack_require__(224);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var config = selectors.viewer.config(state);
	    var computed = selectors.viewer.computed(config.bookId)(state);
	    var currentPageNo = selectors.viewer.progress(config.bookId)(state).pageNo;
	    return _lodash2.default.assign({}, config, { computed: computed, currentPageNo: currentPageNo });
	};
	var BookPages = function (_Component) {
	    _inherits(BookPages, _Component);
	
	    function BookPages(props) {
	        _classCallCheck(this, BookPages);
	
	        return _possibleConstructorReturn(this, (BookPages.__proto__ || Object.getPrototypeOf(BookPages)).call(this, props));
	    }
	    // 写成 decorator 的形式？
	
	
	    _createClass(BookPages, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return !_lodash2.default.isEqual(this.state, nextState) || !_lodash2.default.isEqual(this.props, nextProps);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var pages = _props.pages;
	            var fluid = _props.fluid;
	            var computed = _props.computed;
	            var theme = _props.theme;
	            var isScrollMode = _props.isScrollMode;
	            var pageHeight = _props.pageHeight;
	            var isCalcMode = _props.isCalcMode;
	            var currentPageNo = _props.currentPageNo;
	
	            var totalHeight = computed.length * pageHeight;
	            var className = (0, _classnames3.default)(_defineProperty({
	                'pages': !fluid,
	                'pages--fluid': fluid
	            }, theme && theme.toLocaleLowerCase(), Boolean(theme)));
	            var ulHeight = isCalcMode ? 'auto' : isScrollMode ? totalHeight : pageHeight;
	            var ulStyle = { height: ulHeight };
	            return _react2.default.createElement("ul", { styleName: className, style: ulStyle }, pages.map(function (page, index) {
	                var active = page.meta && page.meta.pageNo === currentPageNo;
	                return _react2.default.createElement(_BookPage2.default, { fluid: fluid, page: page, pageHeight: pageHeight, key: index, active: active });
	            }));
	        }
	    }]);
	
	    return BookPages;
	}(_react.Component);
	BookPages = __decorate([(0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification }), (0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookPages);
	exports.default = BookPages;

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(120);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Markdown = __webpack_require__(217);
	
	var _Markdown2 = _interopRequireDefault(_Markdown);
	
	var _reactRedux = __webpack_require__(89);
	
	var _redux = __webpack_require__(212);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	var styles = __webpack_require__(222);
	var renderers = {
	    paragraph: function paragraph(text) {
	        return "<p class=\"" + styles['gb-line'] + "\">" + text + "</p>";
	    },
	    link: function link(href, title, text) {
	        if (href.indexOf('http://') === -1) {
	            return "<a href=\"" + href + "\" class=\"js-book-nav\">" + text + "</a>";
	        }
	        return "<a href=\"" + href + "\" target=\"_blank\">" + text + "</a>";
	    },
	    line: function line(ele) {
	        var tagName = ele.tagName;
	        if (tagName !== 'P') {
	            return "<div class=\"" + styles['gb-line'] + "\">" + (ele.outerHTML || ele.innerHTML || ele.textContent) + "</div>";
	        }
	        return ele.outerHTML;
	    }
	};
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var _selectors$viewer$con = selectors.viewer.config(state);
	
	    var fontSize = _selectors$viewer$con.fontSize;
	    var theme = _selectors$viewer$con.theme;
	    var isScrollMode = _selectors$viewer$con.isScrollMode;
	
	    return { fontSize: fontSize, theme: theme, isScrollMode: isScrollMode };
	};
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
	            var fontSize = _props.fontSize;
	            var theme = _props.theme;
	            var isScrollMode = _props.isScrollMode;
	            var active = _props.active;
	
	            var mdInput = nodes.join('\n\n');
	            var contentStyle = { fontSize: fontSize };
	            var liStyle = {};
	            if (meta && pageHeight) {
	                if (isScrollMode) {
	                    liStyle = {
	                        position: 'absolute',
	                        top: pageHeight * (meta.pageNo - 1),
	                        height: pageHeight || 'auto'
	                    };
	                } else {
	                    liStyle = {
	                        position: 'absolute',
	                        top: 0,
	                        display: active ? 'block' : 'none',
	                        height: pageHeight || 'auto'
	                    };
	                }
	            }
	            if (meta && meta.offset) {
	                contentStyle.marginTop = meta.offset;
	            }
	            var className = (0, _classnames3.default)(_defineProperty({
	                'page': !fluid,
	                'page--fluid': fluid
	            }, theme && theme.toLocaleLowerCase(), Boolean(theme)));
	            return _react2.default.createElement("li", { styleName: className, style: liStyle }, _react2.default.createElement("div", { style: contentStyle, styleName: "content", ref: function ref(_ref) {
	                    _this2.bookPageDom = _ref;
	                } }, _react2.default.createElement(_Markdown2.default, { className: "lines", input: mdInput, safe: false, markedRenderers: renderers })), meta && _react2.default.createElement("div", { styleName: "page-no" }, meta.pageNo));
	        }
	    }]);
	
	    return BookPage;
	}(_react.Component);
	BookPage = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], BookPage);
	exports.default = BookPage;

/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Markdown = __webpack_require__(218);
	
	var _Markdown2 = _interopRequireDefault(_Markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Markdown2.default;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(219);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactMarkdown = __webpack_require__(221);
	
	var Markdown = function (_Component) {
	    _inherits(Markdown, _Component);
	
	    function Markdown(props) {
	        _classCallCheck(this, Markdown);
	
	        return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));
	    }
	
	    _createClass(Markdown, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'renderSafely',
	        value: function renderSafely(className) {
	            var _props = this.props;
	            var input = _props.input;
	            var renderers = _props.renderers;
	
	            return _react2.default.createElement(ReactMarkdown, { className: className, source: input, renderers: renderers || {}, escapeHtml: false, skipHtml: false });
	        }
	    }, {
	        key: 'renderUnSafely',
	        value: function renderUnSafely(className) {
	            var _props2 = this.props;
	            var input = _props2.input;
	            var markedRenderers = _props2.markedRenderers;
	
	            var renderer = new _marked2.default.Renderer();
	            if (markedRenderers) {
	                _lodash2.default.forEach(markedRenderers, function (val, key) {
	                    if (key !== 'line') {
	                        renderer[key] = val;
	                    }
	                });
	            }
	            var html = (0, _marked2.default)(input, {
	                gfm: false,
	                breaks: true,
	                renderer: renderer
	            });
	            if (markedRenderers && markedRenderers.line) {
	                html = Array.prototype.filter.call((0, _jquery2.default)(html), function (ele) {
	                    // 移除元素间的回车及字符串
	                    return ele.nodeType !== 3;
	                }).map(function (ele) {
	                    return markedRenderers.line(ele);
	                }).join('');
	            }
	            return _react2.default.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: html } });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props3 = this.props;
	            var safe = _props3.safe;
	            var className = _props3.className;
	
	            return safe ? this.renderSafely(className) : this.renderUnSafely(className);
	        }
	    }]);
	
	    return Markdown;
	}(_react.Component);
	
	Markdown['defaultProps'] = {
	    safe: true
	};
	exports.default = Markdown;

/***/ },

/***/ 219:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 221:
/***/ function(module, exports) {

	module.exports = require("react-markdown");

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(225);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".pages_2fddI {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  background: #fff; }\n\n.pages--fluid_3sn_F {\n  width: 100%; }\n\n.white_2-zJw {\n  background: #fff; }\n\n.night_1SlW1 {\n  background: #333; }\n\n.sepia_EVYx8 {\n  background: #fbf7f1; }\n", ""]);
	
	// exports
	exports.locals = {
		"pages": "pages_2fddI",
		"pages--fluid": "pages--fluid_3sn_F pages_2fddI",
		"white": "white_2-zJw",
		"night": "night_1SlW1",
		"sepia": "sepia_EVYx8"
	};

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(227);
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
	            return this.props.visible && _react2.default.createElement("div", __assign({}, { styleName: 'loc-info' }), _react2.default.createElement("div", null, _react2.default.createElement("strong", null, current), "/", total), _react2.default.createElement("div", { styleName: "sub-info" }, percentage));
	        }
	    }]);
	
	    return ViewerScrollbar;
	}(_react.Component);
	ViewerScrollbar = __decorate([(0, _reactCssModules2.default)(styles)], ViewerScrollbar);
	exports.default = ViewerScrollbar;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(228);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	
	var styles = __webpack_require__(230);
	var NavArrow = function (_Component) {
	    _inherits(NavArrow, _Component);
	
	    function NavArrow(props) {
	        _classCallCheck(this, NavArrow);
	
	        return _possibleConstructorReturn(this, (NavArrow.__proto__ || Object.getPrototypeOf(NavArrow)).call(this, props));
	    }
	
	    _createClass(NavArrow, [{
	        key: "handleForwardClick",
	        value: function handleForwardClick() {
	            this.props.forward();
	        }
	    }, {
	        key: "handleBackwardClick",
	        value: function handleBackwardClick() {
	            this.props.backward();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return this.props.show && _react2.default.createElement("div", { styleName: "navs" }, _react2.default.createElement("div", { styleName: "nav-left", onClick: this.handleBackwardClick.bind(this) }, "-"), _react2.default.createElement("div", { styleName: "nav-right", onClick: this.handleForwardClick.bind(this) }, "+"));
	        }
	    }]);
	
	    return NavArrow;
	}(_react.Component);
	NavArrow = __decorate([(0, _reactCssModules2.default)(styles)], NavArrow);
	exports.default = NavArrow;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(231);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".navs_P8Nmy {\n  position: fixed;\n  top: 50%;\n  width: 750px;\n  left: 50%;\n  margin-left: -375px;\n  height: 120px;\n  margin-top: -60px; }\n\n.nav-arrow_2Vrt- {\n  width: 20px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n  background: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none; }\n  .nav-arrow_2Vrt-:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .nav-arrow_2Vrt-:active {\n    box-shadow: none; }\n\n.nav-left_2rSGX {\n  float: left; }\n\n.nav-right_23LtN {\n  float: right; }\n", ""]);
	
	// exports
	exports.locals = {
		"navs": "navs_P8Nmy",
		"nav-arrow": "nav-arrow_2Vrt-",
		"nav-left": "nav-left_2rSGX nav-arrow_2Vrt-",
		"nav-right": "nav-right_23LtN nav-arrow_2Vrt-"
	};

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(233);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".white_3Dnqh {\n  background: #eee; }\n\n.night_1NqxS {\n  background: #222; }\n\n.sepia_1Z2BH {\n  background: #f9f1e5; }\n", ""]);
	
	// exports
	exports.locals = {
		"white": "white_3Dnqh",
		"night": "night_1NqxS",
		"sepia": "sepia_1Z2BH"
	};

/***/ },

/***/ 234:
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
	
	var _Icon = __webpack_require__(118);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _animations = __webpack_require__(235);
	
	var _ViewerPreference = __webpack_require__(240);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _ViewerNav = __webpack_require__(248);
	
	var _ViewerNav2 = _interopRequireDefault(_ViewerNav);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRedux = __webpack_require__(89);
	
	var _redux = __webpack_require__(212);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _isDescendant = __webpack_require__(97);
	
	var _isDescendant2 = _interopRequireDefault(_isDescendant);
	
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
	
	var styles = __webpack_require__(253);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var config = selectors.viewer.config(state);
	    var bookId = config.bookId;
	
	    var _selectors$viewer$pan = selectors.viewer.panel(state);
	
	    var showPanel = _selectors$viewer$pan.show;
	
	    var _selectors$viewer$pre = selectors.viewer.preference(state);
	
	    var showPreference = _selectors$viewer$pre.show;
	
	    var _selectors$viewer$nav = selectors.viewer.navigation(state);
	
	    var showNavigation = _selectors$viewer$nav.show;
	
	    var _selectors$common$ent = selectors.common.entity('books', bookId)(state);
	
	    var title = _selectors$common$ent.title;
	
	    return { config: config, showPanel: showPanel, showPreference: showPreference, title: title, showNavigation: showNavigation };
	};
	var ViewerPanel = function (_Component) {
	    _inherits(ViewerPanel, _Component);
	
	    function ViewerPanel(props) {
	        _classCallCheck(this, ViewerPanel);
	
	        var _this = _possibleConstructorReturn(this, (ViewerPanel.__proto__ || Object.getPrototypeOf(ViewerPanel)).call(this, props));
	
	        _this.handelViewerMouseMove = _this.handelViewerMouseMove.bind(_this);
	        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(ViewerPanel, [{
	        key: "handleGlobalClick",
	        value: function handleGlobalClick(e) {
	            var _props = this.props;
	            var showPreference = _props.showPreference;
	            var showNavigation = _props.showNavigation;
	
	            if (!(0, _isDescendant2.default)(this.nav, e.target)) {
	                if (showNavigation) {
	                    this.props.actions.toggleViewerNavigation(false);
	                }
	            } else {
	                this.props.actions.toggleViewerNavigation();
	            }
	            if (!(0, _isDescendant2.default)(this.pref, e.target)) {
	                if (showPreference) {
	                    this.props.actions.toggleViewerPreference(false);
	                }
	            } else {
	                this.props.actions.toggleViewerPreference();
	            }
	        }
	    }, {
	        key: "handelViewerMouseMove",
	        value: function handelViewerMouseMove(event) {
	            var _props2 = this.props;
	            var _props2$config = _props2.config;
	            var isCalcMode = _props2$config.isCalcMode;
	            var isTouchMode = _props2$config.isTouchMode;
	            var showPanel = _props2.showPanel;
	
	            if (!isCalcMode && !isTouchMode) {
	                var y = event.pageY - document.body.scrollTop;
	                var show = y < 90;
	                if (showPanel !== show) {
	                    this.props.actions.toggleViewerPanel(show);
	                }
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener('mousemove', this.handelViewerMouseMove);
	            window.addEventListener('click', this.handleGlobalClick);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener('mousemove', this.handelViewerMouseMove);
	            window.removeEventListener('click', this.handleGlobalClick);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props3 = this.props;
	            var title = _props3.title;
	            var showPanel = _props3.showPanel;
	            var showPreference = _props3.showPreference;
	            var showNavigation = _props3.showNavigation;
	
	            return _react2.default.createElement(_animations.Slide, null, (showPanel || showPreference || showNavigation) && _react2.default.createElement("div", { styleName: "viewer-panel" }, _react2.default.createElement("div", { styleName: "container" }, _react2.default.createElement("div", { styleName: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "\u8FD4\u56DE"))), _react2.default.createElement("div", { ref: function ref(_ref) {
	                    _this2.nav = _ref;
	                }, styleName: "contents" }, _react2.default.createElement("span", null, "\u76EE\u5F55"), _react2.default.createElement(_animations.Fade, null, showNavigation && _react2.default.createElement(_ViewerNav2.default, null))), _react2.default.createElement("span", { styleName: "title" }, title), _react2.default.createElement("div", { ref: function ref(_ref2) {
	                    _this2.pref = _ref2;
	                }, styleName: "preference" }, _react2.default.createElement(_Icon2.default, { name: "preference" }), _react2.default.createElement(_animations.Fade, null, showPreference && _react2.default.createElement(_ViewerPreference2.default, null))))));
	        }
	    }]);
	
	    return ViewerPanel;
	}(_react.Component);
	ViewerPanel = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(styles)], ViewerPanel);
	exports.default = ViewerPanel;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slide = exports.Fade = undefined;
	
	var _Fade = __webpack_require__(137);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _Slide = __webpack_require__(236);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Fade = _Fade2.default;
	exports.Slide = _Slide2.default;

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Slide = __webpack_require__(237);
	
	var _Slide2 = _interopRequireDefault(_Slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slide2.default;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(139);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(238);
	
	exports.default = function (props) {
	    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
	};

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(239);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".enter_2KePm {\n  transform: translateY(-100%);\n  opacity: 0.01;\n  transition: all .3s; }\n\n.enterActive_7JG-H {\n  transform: translateY(0);\n  opacity: 1; }\n\n.leave_3Afeg {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all .3s; }\n\n.seaveActive_1RtTs {\n  transform: translateY(-100%);\n  opacity: 0; }\n", ""]);
	
	// exports
	exports.locals = {
		"enter": "enter_2KePm",
		"enterActive": "enterActive_7JG-H",
		"leave": "leave_3Afeg",
		"seaveActive": "seaveActive_1RtTs"
	};

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(241);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRedux = __webpack_require__(89);
	
	var _redux = __webpack_require__(212);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _classnames = __webpack_require__(120);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _viewerDefs = __webpack_require__(245);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
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
	
	var styles = __webpack_require__(246);
	var MAX_FONT_SIZE = 20;
	var MIN_FONT_SIZE = 12;
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var _selectors$viewer$con = selectors.viewer.config(state);
	
	    var fontSize = _selectors$viewer$con.fontSize;
	    var isScrollMode = _selectors$viewer$con.isScrollMode;
	    var theme = _selectors$viewer$con.theme;
	
	    return { fontSize: fontSize, isScrollMode: isScrollMode, theme: theme };
	};
	var ViewerPreference = function (_Component) {
	    _inherits(ViewerPreference, _Component);
	
	    function ViewerPreference(props) {
	        _classCallCheck(this, ViewerPreference);
	
	        return _possibleConstructorReturn(this, (ViewerPreference.__proto__ || Object.getPrototypeOf(ViewerPreference)).call(this, props));
	    }
	
	    _createClass(ViewerPreference, [{
	        key: "handleDecFontSizeClick",
	        value: function handleDecFontSizeClick() {
	            var fontSize = this.props.fontSize;
	
	            var _getBtnStatus = this.getBtnStatus();
	
	            var isDecDisabled = _getBtnStatus.isDecDisabled;
	
	            if (!isDecDisabled) {
	                this.props.actions.changeViewerFontSize(fontSize - 1);
	            }
	        }
	    }, {
	        key: "handleIncFontSizeClick",
	        value: function handleIncFontSizeClick() {
	            var fontSize = this.props.fontSize;
	
	            var _getBtnStatus2 = this.getBtnStatus();
	
	            var isIncDisabled = _getBtnStatus2.isIncDisabled;
	
	            if (!isIncDisabled) {
	                this.props.actions.changeViewerFontSize(fontSize + 1);
	            }
	        }
	    }, {
	        key: "handleChangeThemeClick",
	        value: function handleChangeThemeClick(key) {
	            this.props.actions.changeViewerTheme(key);
	        }
	    }, {
	        key: "handleToggleScrollModeClick",
	        value: function handleToggleScrollModeClick(val) {
	            this.props.actions.toggleViewerScrollMode(val);
	        }
	    }, {
	        key: "getBtnStatus",
	        value: function getBtnStatus() {
	            var fontSize = this.props.fontSize;
	
	            var isDecDisabled = fontSize <= MIN_FONT_SIZE;
	            var isIncDisabled = fontSize >= MAX_FONT_SIZE;
	            return { isDecDisabled: isDecDisabled, isIncDisabled: isIncDisabled };
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _getBtnStatus3 = this.getBtnStatus();
	
	            var isDecDisabled = _getBtnStatus3.isDecDisabled;
	            var isIncDisabled = _getBtnStatus3.isIncDisabled;
	            var _props = this.props;
	            var isScrollMode = _props.isScrollMode;
	            var theme = _props.theme;
	
	            var btnDecClass = (0, _classnames2.default)({
	                'btn': !isDecDisabled,
	                'btn--disabled': isDecDisabled
	            });
	            var btnIncClass = (0, _classnames2.default)({
	                'btn': !isIncDisabled,
	                'btn--disabled': isIncDisabled
	            });
	            return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), _react2.default.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "\u6EDA\u52A8\u6A21\u5F0F"), _react2.default.createElement(_Switcher2.default, { value: isScrollMode, onChange: this.handleToggleScrollModeClick.bind(this) })), _react2.default.createElement("li", { styleName: "option-theme" }, _lodash2.default.keys(_viewerDefs.THEMES).map(function (key, index) {
	                var className = key.toLowerCase() + (theme === key ? '--active' : '');
	                console.log(className, theme, key);
	                return _react2.default.createElement("span", { key: index, className: styles[className], onClick: _this2.handleChangeThemeClick.bind(_this2, key) }, key);
	            }))));
	        }
	    }]);
	
	    return ViewerPreference;
	}(_react.Component);
	ViewerPreference = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(styles)], ViewerPreference);
	exports.default = ViewerPreference;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(242);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	
	var styles = __webpack_require__(243);
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
	// class Switcher extends Component<Props, any> {
	//   constructor(props) {
	//     super(props)
	//   }
	//   render() {
	//     let className = this.props.on ? 'on' : 'off'
	//     className = className + ' switcher'
	//     return (
	//       <div styleName={this.props.on ? 'switcher--on' : 'switcher--off'}>
	//         <div styleName="switcher-button"></div>
	//         <div styleName="switcher-track"></div>
	//       </div>
	//     )
	//   }
	// }
	exports.default = Switcher;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(244);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(247);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-preference_kLYVW {\n  position: absolute;\n  right: 0;\n  top: 65px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden; }\n\n.option_3oCQo {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_3oCQo:last-child {\n    border: none; }\n\n.option-font-size_12HR2 {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_12HR2 .btn_o5Fp4, .option-font-size_12HR2 .btn--disabled_1i197 {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n    .option-font-size_12HR2 .btn_o5Fp4:hover, .option-font-size_12HR2 .btn--disabled_1i197:hover {\n      color: #333; }\n    .option-font-size_12HR2 .btn_o5Fp4:active, .option-font-size_12HR2 .btn--disabled_1i197:active {\n      color: #999; }\n  .option-font-size_12HR2 .btn_o5Fp4:first-child, .option-font-size_12HR2 .btn--disabled_1i197:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n  .option-font-size_12HR2 .btn--disabled_1i197 {\n    color: #ddd; }\n\n.option-scroll_2EQ0n {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_2EQ0n .label_iDRgB {\n    float: left; }\n  .option-scroll_2EQ0n .switcher_37lfk {\n    float: right; }\n\n.option-theme_4kqAY {\n  padding: 5px 0; }\n\n.theme-btn_3aKct {\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  text-indent: -999em;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  cursor: pointer; }\n\n.white_3_Vvc {\n  background: #fff; }\n\n.white--active_39AK8 {\n  background: #fff;\n  border-color: #1B267F; }\n\n.night_3cMtg {\n  background: #222; }\n\n.night--active_2i1GO {\n  background: #222;\n  border-color: #1B267F; }\n\n.sepia_-SGHv {\n  background: #f9f1e5; }\n\n.sepia--active_2XOo1 {\n  background: #f9f1e5;\n  border-color: #1B267F; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-preference": "viewer-preference_kLYVW",
		"option": "option_3oCQo",
		"option-font-size": "option-font-size_12HR2 option_3oCQo",
		"btn": "btn_o5Fp4",
		"btn--disabled": "btn--disabled_1i197",
		"option-scroll": "option-scroll_2EQ0n option_3oCQo",
		"label": "label_iDRgB",
		"switcher": "switcher_37lfk",
		"option-theme": "option-theme_4kqAY option_3oCQo",
		"theme-btn": "theme-btn_3aKct",
		"white": "white_3_Vvc theme-btn_3aKct",
		"white--active": "white--active_39AK8 theme-btn_3aKct",
		"night": "night_3cMtg theme-btn_3aKct",
		"night--active": "night--active_2i1GO theme-btn_3aKct",
		"sepia": "sepia_-SGHv theme-btn_3aKct",
		"sepia--active": "sepia--active_2XOo1 theme-btn_3aKct"
	};

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _redux = __webpack_require__(212);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _actions = __webpack_require__(90);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _preventScroll = __webpack_require__(249);
	
	var _preventScroll2 = _interopRequireDefault(_preventScroll);
	
	var _Viewer = __webpack_require__(250);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
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
	
	var styles = __webpack_require__(251);
	var JS_NAV_HOOK = 'a.js-book-nav';
	var $body = (0, _jquery2.default)('body');
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    var _selectors$viewer$con = selectors.viewer.config(state);
	
	    var bookId = _selectors$viewer$con.bookId;
	
	    var nav = selectors.viewer.navData(bookId)(state);
	
	    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);
	
	    var viewerPercentage = _selectors$viewer$pro.percentage;
	
	    var computedPages = selectors.viewer.computed(bookId)(state);
	    return { nav: nav, viewerPercentage: viewerPercentage, computedPages: computedPages };
	};
	var ViewerNav = function (_Component) {
	    _inherits(ViewerNav, _Component);
	
	    function ViewerNav(props) {
	        _classCallCheck(this, ViewerNav);
	
	        var _this = _possibleConstructorReturn(this, (ViewerNav.__proto__ || Object.getPrototypeOf(ViewerNav)).call(this, props));
	
	        _this.handleNavLinkClick = _this.handleNavLinkClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(ViewerNav, [{
	        key: "handleNavLinkClick",
	        value: function handleNavLinkClick(e) {
	            e.preventDefault();
	            var _props = this.props;
	            var computedPages = _props.computedPages;
	            var viewerPercentage = _props.viewerPercentage;
	
	            var href = (0, _jquery2.default)(e.target).attr('href');
	            try {
	                var pageNo = viewerUtils.resolveBookLocation(href, computedPages);
	                var percentage = (pageNo - 1) / computedPages.length;
	                this.props.actions.viewerJumpTo(percentage);
	            } catch (error) {
	                this.props.actions.sendNotification(error.message, 'error');
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            // TODO: js hook 常量
	            _preventScroll2.default.init('.js-nav-scroll');
	            $body.on('click', JS_NAV_HOOK, this.handleNavLinkClick);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            _preventScroll2.default.destroy('.js-nav-scroll');
	            $body.off('click', JS_NAV_HOOK, this.handleNavLinkClick);
	        }
	    }, {
	        key: "renderLink",
	        value: function renderLink(ref, hash, label) {
	            if (hash) {
	                return _react2.default.createElement("a", { className: "js-book-nav", href: "#" + ref + "$" + hash }, label);
	            }
	            return _react2.default.createElement("a", { className: "js-book-nav", href: "#" + ref }, label);
	        }
	    }, {
	        key: "renderNav",
	        value: function renderNav(navList) {
	            var _this2 = this;
	
	            return _react2.default.createElement("ul", null, navList.map(function (item, index) {
	                if (item.children) {
	                    return _react2.default.createElement("li", { key: index }, _this2.renderLink(item.ref, item.hash, item.label), _this2.renderNav(item.children));
	                }
	                return _react2.default.createElement("li", { key: index }, _this2.renderLink(item.ref, item.hash, item.label));
	            }));
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var nav = this.props.nav;
	
	            return _react2.default.createElement("div", { className: "js-nav-scroll", styleName: "viewer-nav" }, this.renderNav(nav));
	        }
	    }]);
	
	    return ViewerNav;
	}(_react.Component);
	ViewerNav = __decorate([(0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)(actions, dispatch)
	    };
	}), (0, _reactCssModules2.default)(styles)], ViewerNav);
	exports.default = ViewerNav;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function scrollHandler(ev) {
	    var $this = (0, _jquery2.default)(this);
	    var scrollTop = this.scrollTop;
	    var scrollHeight = this.scrollHeight;
	    var height = $this.innerHeight();
	    var delta = ev.type === 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta;
	    var up = delta > 0;
	    var prevent = function prevent() {
	        ev.stopPropagation();
	        ev.preventDefault();
	        ev.returnValue = false;
	        return false;
	    };
	    if (!up && -delta > scrollHeight - height - scrollTop) {
	        // Scrolling down, but this will take us past the bottom.
	        $this.scrollTop(scrollHeight);
	        return prevent();
	    } else if (up && delta > scrollTop) {
	        // Scrolling up, but this will take us past the top.
	        $this.scrollTop(0);
	        return prevent();
	    }
	} /**
	   * 阻止 selector 以外的元素滚动
	   * http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element
	   */
	exports.default = {
	    init: function init(selector) {
	        (0, _jquery2.default)(document).on('DOMMouseScroll mousewheel', selector, scrollHandler);
	    },
	    destroy: function destroy(selector) {
	        (0, _jquery2.default)(document).off('DOMMouseScroll mousewheel', selector, scrollHandler);
	    }
	};

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(252);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-nav_SL2MS {\n  position: absolute;\n  top: 80px;\n  left: -20px;\n  height: 100%;\n  background: #fff;\n  overflow-y: scroll;\n  padding: 20px 20px 20px 0;\n  border-radius: 3px;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  width: 300px;\n  height: 400px; }\n  .viewer-nav_SL2MS ul {\n    margin-left: 20px;\n    text-align: left;\n    line-height: 1.8; }\n    .viewer-nav_SL2MS ul li a {\n      display: block;\n      border-bottom: 1px solid #ddd; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-nav": "viewer-nav_SL2MS"
	};

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(254);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-panel_107MY {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 990;\n  background: #222;\n  color: #fff;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);\n  height: 60px; }\n\n.container_3L78R {\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  height: 60px;\n  position: relative; }\n\n.back_1mVrC {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  line-height: 60px; }\n  .back_1mVrC a {\n    color: #fff;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px;\n    overflow: hidden; }\n    .back_1mVrC a span {\n      float: left;\n      margin-right: 5px; }\n  .back_1mVrC span {\n    line-height: 30px;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px; }\n\n.contents_16iGQ {\n  display: inline-block;\n  position: absolute;\n  left: 100px;\n  top: 0;\n  cursor: pointer;\n  line-height: 60px; }\n  .contents_16iGQ span {\n    color: #fff; }\n\n.title_3MIpP {\n  font-size: 1.2rem;\n  line-height: 60px; }\n\n.preference_2JQRi {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  cursor: pointer;\n  display: inline-block; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-panel": "viewer-panel_107MY",
		"container": "container_3L78R",
		"back": "back_1mVrC",
		"contents": "contents_16iGQ",
		"title": "title_3MIpP",
		"preference": "preference_2JQRi"
	};

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPages = __webpack_require__(215);
	
	var _BookPages2 = _interopRequireDefault(_BookPages);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookChapter = function BookChapter(_ref) {
	    var id = _ref.id;
	    var markdown = _ref.markdown;
	
	    return _react2.default.createElement("div", { id: id }, _react2.default.createElement(_BookPages2.default, { pages: [{
	            nodes: [markdown]
	        }] }));
	};
	
	var BookChapters = function (_Component) {
	    _inherits(BookChapters, _Component);
	
	    function BookChapters(props) {
	        _classCallCheck(this, BookChapters);
	
	        return _possibleConstructorReturn(this, (BookChapters.__proto__ || Object.getPrototypeOf(BookChapters)).call(this, props));
	    }
	
	    _createClass(BookChapters, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            return !_lodash2.default.isEqual(this.state, nextState) || !_lodash2.default.isEqual(this.props, nextProps);
	        }
	    }, {
	        key: 'triggerUpdate',
	        value: function triggerUpdate() {
	            var onRawDataMount = this.props.onRawDataMount;
	
	            if (onRawDataMount) {
	                onRawDataMount(this.chapters);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.triggerUpdate();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.triggerUpdate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var bookFlesh = this.props.bookFlesh;
	
	            return _react2.default.createElement("div", { ref: function ref(_ref2) {
	                    return _this2.chapters = _ref2;
	                } }, (bookFlesh || []).map(function (item) {
	                return _react2.default.createElement(BookChapter, { id: item.id, markdown: item.markdown, key: item.id });
	            }));
	        }
	    }]);
	
	    return BookChapters;
	}(_react.Component);
	
	exports.default = BookChapters;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(257);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(122);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(120);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Loading = __webpack_require__(258);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
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
	Loading = __decorate([(0, _reactCssModules2.default)(_Loading2.default)], Loading);
	Loading['defaultProps'] = {
	    text: '加载中'
	};
	exports.default = Loading;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(259);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
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

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(261);
	    var insertCss = __webpack_require__(126);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(125)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vTWFya2Rvd24udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzPzY3YjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2Nzcz80MjJkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvTmF2QXJyb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzPzI1MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIuc2Nzcz9kYzcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9hbmltYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS5zY3NzPzYyYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzcz8yOGQwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvdXRpbHMvYnJvd3Nlci9wcmV2ZW50U2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2Nzcz8yZjdhIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzcz9hNmFmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ2hhcHRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzcz8xMGRiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3M/ZDVmZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbInNlbGVjdG9ycyIsImFjdGlvbnMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiYm9va0lkIiwicGFyYW1zIiwiaWQiLCJib29rIiwiY29tbW9uIiwiZW50aXR5IiwiVmlld2VyIiwicHJvcHMiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpc0VxdWFsIiwiaW5pdGlhbGl6ZVZpZXdlciIsImNyZWF0ZUVsZW1lbnQiLCJib2R5Q2xhc3MiLCJ0aXRsZSIsImRpc3BhdGNoIiwiUEFHRV9MSU1JVCIsImNvbmZpZyIsInZpZXdlciIsImJvb2tDb250ZW50IiwiYm9va1Byb2dyZXNzIiwiY2xvdWRQcm9ncmVzcyIsImdldCIsImNvbXB1dGVkUGFnZXMiLCJjb21wdXRlZCIsInByb2dyZXNzIiwidmlld2VyUGVyY2VudGFnZSIsInBlcmNlbnRhZ2UiLCJpc0ZldGNoaW5nIiwicGFuZWwiLCJzaG93UGFuZWwiLCJzaG93IiwiaXNGZXRjaGluZ1Byb2dyZXNzIiwic2Vzc2lvbiIsIlZpZXdlckNvbnRhaW5lciIsInNob3dQYWdlSW5mbyIsInJlc2l6ZUxhemlseSIsImRlYm91bmNlIiwiaGFuZGxlUmVzaXplIiwibWF4V2FpdCIsImhhbmRsZVZpZXdlckNsaWNrIiwiYmluZCIsImhhbmRsZVJhd0RhdGFNb3VudCIsImhhbmRlbFZpZXdlck1vdXNlTW92ZSIsImVsZSIsImNhbGNCb29rIiwiaXNUb3VjaE1vZGUiLCJ0b2dnbGVWaWV3ZXJQYW5lbCIsInNldFN0YXRlIiwiaW5pdGlhbGl6ZVZpZXdlckNvbmZpZyIsImlzQ2FsY01vZGUiLCJldmVudCIsImRUb1NjcmVlblJpZ2h0IiwiZ2V0U2NyZWVuSW5mbyIsInZpZXciLCJ3aWR0aCIsInBhZ2VYIiwiY29uZmlnVmlld2VyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwidmlld0NoYW5nZWQiLCJpc0VxdWFsV2l0aCIsInZhbEEiLCJ2YWxCIiwicmVpbml0aWFsaXplVmlld2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlSGVpZ2h0IiwiZmxlc2giLCJ0ZXh0IiwiY2VudGVyIiwiYm9va0ZsZXNoIiwib25SYXdEYXRhTW91bnQiLCJhbGxQYWdlcyIsInBhZ2VMaW1pdCIsIm9uQ2xpY2siLCJvbk1vdXNlTW92ZSIsInJlbmRlckJvb2siLCJzdHlsZXMiLCJyZXF1aXJlIiwidGhlbWUiLCJpc1Njcm9sbE1vZGUiLCJwYWdlTm8iLCJCb29rQ29udGFpbmVyIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlU2Nyb2xsTGF6aWx5IiwicGFnZUNvdW50IiwidG90YWxIZWlnaHQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsImJvZHkiLCJ1cGRhdGVCb29rUHJvZ3Jlc3MiLCJ2aWV3ZXJKdW1wVG8iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwic3RhcnRQYWdlSW5kZXgiLCJNYXRoIiwiY2VpbCIsImVuZFBhZ2VJbmRleCIsImRpdkhlaWdodCIsInN0eWxlTmFtZSIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJoZWlnaHQiLCJwYWdlcyIsInNsaWNlIiwiZm9yd2FyZCIsImhhbmRsZUZvcndhcmQiLCJiYWNrd2FyZCIsImhhbmRsZWJhY2t3YXJkIiwidmlzaWJsZSIsImN1cnJlbnQiLCJ0b3RhbCIsImN1cnJlbnRQYWdlTm8iLCJhc3NpZ24iLCJCb29rUGFnZXMiLCJmbHVpZCIsImNsYXNzTmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiQm9vbGVhbiIsInVsSGVpZ2h0IiwidWxTdHlsZSIsIm1hcCIsInBhZ2UiLCJpbmRleCIsImFjdGl2ZSIsIm1ldGEiLCJzZW5kTm90aWZpY2F0aW9uIiwiYWxsb3dNdWx0aXBsZSIsInJlbmRlcmVycyIsInBhcmFncmFwaCIsImxpbmsiLCJocmVmIiwiaW5kZXhPZiIsImxpbmUiLCJ0YWdOYW1lIiwib3V0ZXJIVE1MIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJmb250U2l6ZSIsIkJvb2tQYWdlIiwibm9kZXMiLCJtZElucHV0Iiwiam9pbiIsImNvbnRlbnRTdHlsZSIsImxpU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImRpc3BsYXkiLCJvZmZzZXQiLCJtYXJnaW5Ub3AiLCJyZWYiLCJib29rUGFnZURvbSIsImlucHV0Iiwic2FmZSIsIm1hcmtlZFJlbmRlcmVycyIsIlJlYWN0TWFya2Rvd24iLCJNYXJrZG93biIsInNvdXJjZSIsImVzY2FwZUh0bWwiLCJza2lwSHRtbCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJmb3JFYWNoIiwidmFsIiwiaHRtbCIsImdmbSIsImJyZWFrcyIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsIm5vZGVUeXBlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZW5kZXJTYWZlbHkiLCJyZW5kZXJVblNhZmVseSIsIl9fYXNzaWduIiwidCIsInMiLCJuIiwicCIsImhhc093blByb3BlcnR5IiwiVmlld2VyU2Nyb2xsYmFyIiwidG9GaXhlZCIsIk5hdkFycm93IiwiaGFuZGxlQmFja3dhcmRDbGljayIsImhhbmRsZUZvcndhcmRDbGljayIsInByZWZlcmVuY2UiLCJzaG93UHJlZmVyZW5jZSIsIm5hdmlnYXRpb24iLCJzaG93TmF2aWdhdGlvbiIsIlZpZXdlclBhbmVsIiwiaGFuZGxlR2xvYmFsQ2xpY2siLCJlIiwibmF2IiwidG9nZ2xlVmlld2VyTmF2aWdhdGlvbiIsInByZWYiLCJ0b2dnbGVWaWV3ZXJQcmVmZXJlbmNlIiwieSIsInBhZ2VZIiwidG8iLCJuYW1lIiwiRmFkZSIsIlNsaWRlIiwiY29tcG9uZW50IiwidHJhbnNpdGlvbk5hbWUiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsImNoaWxkcmVuIiwiTUFYX0ZPTlRfU0laRSIsIk1JTl9GT05UX1NJWkUiLCJWaWV3ZXJQcmVmZXJlbmNlIiwiZ2V0QnRuU3RhdHVzIiwiaXNEZWNEaXNhYmxlZCIsImNoYW5nZVZpZXdlckZvbnRTaXplIiwiaXNJbmNEaXNhYmxlZCIsImNoYW5nZVZpZXdlclRoZW1lIiwidG9nZ2xlVmlld2VyU2Nyb2xsTW9kZSIsImJ0bkRlY0NsYXNzIiwiYnRuSW5jQ2xhc3MiLCJoYW5kbGVEZWNGb250U2l6ZUNsaWNrIiwiaGFuZGxlSW5jRm9udFNpemVDbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJoYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2siLCJrZXlzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVRoZW1lQ2xpY2siLCJTd2l0Y2hlciIsImlzT24iLCJuZXdWYWx1ZSIsIm9wdGlvbnMiLCJjdXJyZW50VmFsdWVJbmRleCIsIm9wdGlvbiIsImVycm9yIiwidmlld2VyVXRpbHMiLCJKU19OQVZfSE9PSyIsIiRib2R5IiwibmF2RGF0YSIsIlZpZXdlck5hdiIsImhhbmRsZU5hdkxpbmtDbGljayIsInByZXZlbnREZWZhdWx0IiwiYXR0ciIsInJlc29sdmVCb29rTG9jYXRpb24iLCJtZXNzYWdlIiwiaW5pdCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsImhhc2giLCJsYWJlbCIsIm5hdkxpc3QiLCJpdGVtIiwicmVuZGVyTGluayIsInJlbmRlck5hdiIsInNjcm9sbEhhbmRsZXIiLCJldiIsIiR0aGlzIiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkZWx0YSIsInR5cGUiLCJvcmlnaW5hbEV2ZW50IiwiZGV0YWlsIiwid2hlZWxEZWx0YSIsInVwIiwicHJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJldHVyblZhbHVlIiwic2VsZWN0b3IiLCJCb29rQ2hhcHRlciIsIm1hcmtkb3duIiwiQm9va0NoYXB0ZXJzIiwiY2hhcHRlcnMiLCJ0cmlnZ2VyVXBkYXRlIiwiTG9hZGluZyIsImR5bmFtaWNUZXh0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndyYXBDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0tBQVlBLFM7O0FBQ1o7O0tBQVlDLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFmQSxLQUFJQyxhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFB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d0IsZ0JBQWdCLEVBQUUseUJBQXlCLG1CQUFtQiwwQkFBMEIsRUFBRSx5QkFBeUIscUJBQXFCLEVBQUUsaUNBQWlDLHVCQUF1QixFQUFFOztBQUV6VTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7QUNYQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUF5QywyQkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBLG9DQUFtQyxxQkFBcUIsRUFBRTs7QUFFMUQiLCJmaWxlIjoiMS4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcic7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgVmlld0NvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvVmlld2VyQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WaWV3ZXIuc2Nzcyc7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgYm9va0lkID0gb3duUHJvcHMucGFyYW1zLmlkO1xuICAgIGNvbnN0IGJvb2sgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va3MnLCBib29rSWQpKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rXG4gICAgfTtcbn07XG5sZXQgVmlld2VyID0gY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkO1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMuaW5pdGlhbGl6ZVZpZXdlcih0aGlzLmJvb2tJZCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyBib2R5Q2xhc3M6IFwidmlld2VyXCIsIHRpdGxlOiB0aGlzLnByb3BzLmJvb2sudGl0bGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld0NvbnRhaW5lciwgbnVsbCkpKTtcbiAgICB9XG59O1xuVmlld2VyID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSksXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBWaWV3ZXIpO1xuZXhwb3J0IGRlZmF1bHQgVmlld2VyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3hcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBCb29rQ29udGFpbmVyIGZyb20gJy4vQm9va0NvbnRhaW5lcic7XG5pbXBvcnQgVmlld2VyUGFuZWwgZnJvbSAnLi9WaWV3ZXJQYW5lbCc7XG5pbXBvcnQgQm9va0NoYXB0ZXJzIGZyb20gJy4vQm9va0NoYXB0ZXJzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Mb2FkaW5nJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5jb25zdCBQQUdFX0xJTUlUID0gNTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSk7XG4gICAgY29uc3QgYm9va0lkID0gY29uZmlnLmJvb2tJZDtcbiAgICBjb25zdCBib29rID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tzJywgYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgYm9va0NvbnRlbnQgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va0NvbnRlbnRzJywgYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgYm9va1Byb2dyZXNzID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tQcm9ncmVzcycsIGJvb2tJZCkoc3RhdGUpO1xuICAgIGNvbnN0IGNsb3VkUHJvZ3Jlc3MgPSBfLmdldChib29rUHJvZ3Jlc3MsICdwZXJjZW50YWdlJywgMCk7XG4gICAgY29uc3QgY29tcHV0ZWRQYWdlcyA9IHNlbGVjdG9ycy52aWV3ZXIuY29tcHV0ZWQoYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgeyBwZXJjZW50YWdlOiB2aWV3ZXJQZXJjZW50YWdlLCBpc0ZldGNoaW5nIH0gPSBzZWxlY3RvcnMudmlld2VyLnByb2dyZXNzKGJvb2tJZCkoc3RhdGUpO1xuICAgIGNvbnN0IHsgc2hvdzogc2hvd1BhbmVsIH0gPSBzZWxlY3RvcnMudmlld2VyLnBhbmVsKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29rSWQsXG4gICAgICAgIGJvb2ssXG4gICAgICAgIGJvb2tDb250ZW50LFxuICAgICAgICBpc0ZldGNoaW5nUHJvZ3Jlc3M6IGlzRmV0Y2hpbmcsXG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb24sXG4gICAgICAgIGNvbXB1dGVkUGFnZXMsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgY2xvdWRQcm9ncmVzcyxcbiAgICAgICAgdmlld2VyUGVyY2VudGFnZSxcbiAgICAgICAgc2hvd1BhbmVsXG4gICAgfTtcbn07XG5sZXQgVmlld2VyQ29udGFpbmVyID0gY2xhc3MgVmlld2VyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93UGFnZUluZm86IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVzaXplTGF6aWx5ID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVJlc2l6ZSwgNTAwLCB7XG4gICAgICAgICAgICBtYXhXYWl0OiAxMDAwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZVZpZXdlckNsaWNrID0gdGhpcy5oYW5kbGVWaWV3ZXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzaXplTGF6aWx5ID0gdGhpcy5yZXNpemVMYXppbHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSYXdEYXRhTW91bnQgPSB0aGlzLmhhbmRsZVJhd0RhdGFNb3VudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZVJhd0RhdGFNb3VudChlbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNhbGNCb29rKHRoaXMucHJvcHMuYm9va0lkLCBlbGUpO1xuICAgIH1cbiAgICBoYW5kbGVWaWV3ZXJDbGljaygpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWc6IHsgaXNUb3VjaE1vZGUgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGlzVG91Y2hNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyUGFuZWwoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dQYWdlSW5mbzogIXRoaXMuc3RhdGUuc2hvd1BhZ2VJbmZvXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5pbml0aWFsaXplVmlld2VyQ29uZmlnKHRoaXMucHJvcHMuYm9va0lkLCB7XG4gICAgICAgICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBkVG9TY3JlZW5SaWdodCA9IHV0aWxzLmdldFNjcmVlbkluZm8oKS52aWV3LndpZHRoIC0gZXZlbnQucGFnZVg7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BhZ2VJbmZvOiBkVG9TY3JlZW5SaWdodCA8IDEwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVpbml0aWFsaXplVmlld2VyKCkge1xuICAgICAgICBjb25zdCB7IGJvb2tJZCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNvbmZpZ1ZpZXdlcihib29rSWQsIHtcbiAgICAgICAgICAgIGlzQ2FsY01vZGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd1BhZ2VJbmZvOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJQYW5lbChmYWxzZSk7XG4gICAgfVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gIV8uaXNFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFfLmlzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHZpZXdDaGFuZ2VkID0gIV8uaXNFcXVhbFdpdGgodGhpcy5wcm9wcy5jb25maWcsIHByZXZQcm9wcy5jb25maWcsICh2YWxBLCB2YWxCLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdpc1RvdWNoTW9kZScgfHwga2V5ID09PSAnaXNDYWxjTW9kZScgfHwga2V5ID09PSAnaXNTY3JvbGxNb2RlJyB8fCBrZXkgPT09ICd0aGVtZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2aWV3Q2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWluaXRpYWxpemVWaWV3ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGF6aWx5KTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxhemlseSk7XG4gICAgfVxuICAgIHJlbmRlckJvb2soKSB7XG4gICAgICAgIGNvbnN0IHsgc2hvd1BhZ2VJbmZvIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB7IGJvb2tDb250ZW50LCBjb21wdXRlZFBhZ2VzLCBjb25maWc6IHsgaXNDYWxjTW9kZSwgcGFnZUhlaWdodCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWJvb2tDb250ZW50LmZsZXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7IHRleHQ6IFwi5Lmm57GN6I635Y+W5LitXCIsIGNlbnRlcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDYWxjTW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7IHRleHQ6IFwi5Lmm57GN5o6S54mI5LitXCIsIGNlbnRlcjogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tDaGFwdGVycywgeyBib29rRmxlc2g6IGJvb2tDb250ZW50LmZsZXNoLCBvblJhd0RhdGFNb3VudDogdGhpcy5oYW5kbGVSYXdEYXRhTW91bnQgfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wdXRlZFBhZ2VzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tDb250YWluZXIsIHsgYWxsUGFnZXM6IGNvbXB1dGVkUGFnZXMsIHBhZ2VIZWlnaHQ6IHBhZ2VIZWlnaHQsIHNob3dQYWdlSW5mbzogc2hvd1BhZ2VJbmZvLCBwYWdlTGltaXQ6IFBBR0VfTElNSVQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgeyB0ZXh0OiBcIuWHhuWkh+S4rVwiLCBjZW50ZXI6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLCBvbk1vdXNlTW92ZTogdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyUGFuZWwsIG51bGwpLFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJCb29rKCkpKTtcbiAgICB9XG59O1xuVmlld2VyQ29udGFpbmVyID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSlcbl0sIFZpZXdlckNvbnRhaW5lcik7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJDb250YWluZXIudHN4XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb29rUGFnZXMgZnJvbSAnLi9Cb29rUGFnZXMnO1xuaW1wb3J0IFZpZXdlclNjcm9sbGJhciBmcm9tICcuL1ZpZXdlclNjcm9sbGJhcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IE5hdkFycm93IGZyb20gJy4vTmF2QXJyb3cnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va0NvbnRhaW5lci5zY3NzJyk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBib29rSWQsIHRoZW1lLCBpc1Njcm9sbE1vZGUsIGlzQ2FsY01vZGUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKTtcbiAgICBjb25zdCB7IHBlcmNlbnRhZ2UsIHBhZ2VObyB9ID0gc2VsZWN0b3JzLnZpZXdlci5wcm9ncmVzcyhib29rSWQpKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwZXJjZW50YWdlLFxuICAgICAgICBwYWdlTm8sXG4gICAgICAgIHRoZW1lLFxuICAgICAgICBpc1Njcm9sbE1vZGUsXG4gICAgICAgIGlzQ2FsY01vZGVcbiAgICB9O1xufTtcbmxldCBCb29rQ29udGFpbmVyID0gY2xhc3MgQm9va0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsTGF6aWx5ID0gXy5kZWJvdW5jZSh0aGlzLmhhbmRsZVNjcm9sbCwgMjAwLCB7XG4gICAgICAgICAgICBtYXhXYWl0OiAxMDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICAgIGNvbnN0IHsgYWxsUGFnZXMsIHBhZ2VIZWlnaHQsIGlzU2Nyb2xsTW9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgcGFnZUNvdW50ID0gYWxsUGFnZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHBhZ2VDb3VudCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoaXNTY3JvbGxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlQm9va1Byb2dyZXNzKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVGb3J3YXJkKCkge1xuICAgICAgICBjb25zdCB7IGFsbFBhZ2VzLCBwYWdlTm8gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy52aWV3ZXJKdW1wVG8ocGFnZU5vIC8gYWxsUGFnZXMubGVuZ3RoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgIH1cbiAgICBoYW5kbGViYWNrd2FyZCgpIHtcbiAgICAgICAgY29uc3QgeyBhbGxQYWdlcywgcGFnZU5vIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudmlld2VySnVtcFRvKChwYWdlTm8gLSAyKSAvIGFsbFBhZ2VzLmxlbmd0aCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbExhemlseSk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGxMYXppbHkpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWxsUGFnZXMsIHBhZ2VIZWlnaHQsIHNob3dQYWdlSW5mbywgcGFnZUxpbWl0LCBwYWdlTm8sIHRoZW1lLCBpc1Njcm9sbE1vZGUsIGlzQ2FsY01vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzdGFydFBhZ2VJbmRleDtcbiAgICAgICAgc3RhcnRQYWdlSW5kZXggPSBwYWdlTm8gLSBNYXRoLmNlaWwocGFnZUxpbWl0IC8gMik7XG4gICAgICAgIHN0YXJ0UGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggPCAwID8gMCA6IHN0YXJ0UGFnZUluZGV4O1xuICAgICAgICBjb25zdCBlbmRQYWdlSW5kZXggPSBzdGFydFBhZ2VJbmRleCArIHBhZ2VMaW1pdDtcbiAgICAgICAgY29uc3QgZGl2SGVpZ2h0ID0gaXNDYWxjTW9kZVxuICAgICAgICAgICAgPyAnYXV0bydcbiAgICAgICAgICAgIDogKGlzU2Nyb2xsTW9kZVxuICAgICAgICAgICAgICAgID8gYWxsUGFnZXMubGVuZ3RoICogcGFnZUhlaWdodFxuICAgICAgICAgICAgICAgIDogcGFnZUhlaWdodCk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogdGhlbWUudG9Mb3dlckNhc2UoKSwgc3R5bGU6IHsgaGVpZ2h0OiBkaXZIZWlnaHQgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rUGFnZXMsIHsgcGFnZXM6IF8uc2xpY2UoYWxsUGFnZXMsIHN0YXJ0UGFnZUluZGV4LCBlbmRQYWdlSW5kZXgpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZBcnJvdywgeyBmb3J3YXJkOiB0aGlzLmhhbmRsZUZvcndhcmQuYmluZCh0aGlzKSwgYmFja3dhcmQ6IHRoaXMuaGFuZGxlYmFja3dhcmQuYmluZCh0aGlzKSwgc2hvdzogIWlzU2Nyb2xsTW9kZSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyU2Nyb2xsYmFyLCB7IHZpc2libGU6IHNob3dQYWdlSW5mbywgY3VycmVudDogcGFnZU5vLCB0b3RhbDogYWxsUGFnZXMubGVuZ3RoIH0pKSk7XG4gICAgfVxufTtcbkJvb2tDb250YWluZXIgPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2ggPT4gKHtcbiAgICAgICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICAgIH0pKSxcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIEJvb2tDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgQm9va0NvbnRhaW5lcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIudHN4XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgQm9va1BhZ2UgZnJvbSAnLi9Cb29rUGFnZSc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va1BhZ2VzLnNjc3MnKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSk7XG4gICAgY29uc3QgY29tcHV0ZWQgPSBzZWxlY3RvcnMudmlld2VyLmNvbXB1dGVkKGNvbmZpZy5ib29rSWQpKHN0YXRlKTtcbiAgICBjb25zdCBjdXJyZW50UGFnZU5vID0gc2VsZWN0b3JzLnZpZXdlci5wcm9ncmVzcyhjb25maWcuYm9va0lkKShzdGF0ZSkucGFnZU5vO1xuICAgIHJldHVybiBfLmFzc2lnbih7fSwgY29uZmlnLCB7IGNvbXB1dGVkLCBjdXJyZW50UGFnZU5vIH0pO1xufTtcbmxldCBCb29rUGFnZXMgPSBjbGFzcyBCb29rUGFnZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgLy8g5YaZ5oiQIGRlY29yYXRvciDnmoTlvaLlvI/vvJ9cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlcywgZmx1aWQsIGNvbXB1dGVkLCB0aGVtZSwgaXNTY3JvbGxNb2RlLCBwYWdlSGVpZ2h0LCBpc0NhbGNNb2RlLCBjdXJyZW50UGFnZU5vIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IGNvbXB1dGVkLmxlbmd0aCAqIHBhZ2VIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ3BhZ2VzJzogIWZsdWlkLFxuICAgICAgICAgICAgJ3BhZ2VzLS1mbHVpZCc6IGZsdWlkLFxuICAgICAgICAgICAgW3RoZW1lICYmIHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldOiBCb29sZWFuKHRoZW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdWxIZWlnaHQgPSBpc0NhbGNNb2RlXG4gICAgICAgICAgICA/ICdhdXRvJ1xuICAgICAgICAgICAgOiAoaXNTY3JvbGxNb2RlXG4gICAgICAgICAgICAgICAgPyB0b3RhbEhlaWdodFxuICAgICAgICAgICAgICAgIDogcGFnZUhlaWdodCk7XG4gICAgICAgIGNvbnN0IHVsU3R5bGUgPSB7IGhlaWdodDogdWxIZWlnaHQgfTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBzdHlsZU5hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHVsU3R5bGUgfSwgcGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gcGFnZS5tZXRhICYmIHBhZ2UubWV0YS5wYWdlTm8gPT09IGN1cnJlbnRQYWdlTm87XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va1BhZ2UsIHsgZmx1aWQ6IGZsdWlkLCBwYWdlOiBwYWdlLCBwYWdlSGVpZ2h0OiBwYWdlSGVpZ2h0LCBrZXk6IGluZGV4LCBhY3RpdmU6IGFjdGl2ZSB9KSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxufTtcbkJvb2tQYWdlcyA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IHNlbmROb3RpZmljYXRpb24gfSksXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgICAgICAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxuICAgIH0pXG5dLCBCb29rUGFnZXMpO1xuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2VzO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VzLnRzeFxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBNYXJrZG93biBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9NYXJrZG93bic7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rUGFnZS5zY3NzJyk7XG5jb25zdCByZW5kZXJlcnMgPSB7XG4gICAgcGFyYWdyYXBoKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIGA8cCBjbGFzcz1cIiR7c3R5bGVzWydnYi1saW5lJ119XCI+JHt0ZXh0fTwvcD5gO1xuICAgIH0sXG4gICAgbGluayhocmVmLCB0aXRsZSwgdGV4dCkge1xuICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCdodHRwOi8vJykgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke2hyZWZ9XCIgY2xhc3M9XCJqcy1ib29rLW5hdlwiPiR7dGV4dH08L2E+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke2hyZWZ9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0ZXh0fTwvYT5gO1xuICAgIH0sXG4gICAgbGluZShlbGUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsZS50YWdOYW1lO1xuICAgICAgICBpZiAodGFnTmFtZSAhPT0gJ1AnKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3N0eWxlc1snZ2ItbGluZSddfVwiPiR7ZWxlLm91dGVySFRNTCB8fCBlbGUuaW5uZXJIVE1MIHx8IGVsZS50ZXh0Q29udGVudH08L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGUub3V0ZXJIVE1MO1xuICAgIH1cbn07XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBmb250U2l6ZSwgdGhlbWUsIGlzU2Nyb2xsTW9kZSB9ID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIHJldHVybiB7IGZvbnRTaXplLCB0aGVtZSwgaXNTY3JvbGxNb2RlIH07XG59O1xubGV0IEJvb2tQYWdlID0gY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYWdlOiB7IG5vZGVzLCBtZXRhIH0sIHBhZ2VIZWlnaHQsIGZsdWlkLCBmb250U2l6ZSwgdGhlbWUsIGlzU2Nyb2xsTW9kZSwgYWN0aXZlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBtZElucHV0ID0gbm9kZXMuam9pbignXFxuXFxuJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRTdHlsZSA9IHsgZm9udFNpemUgfTtcbiAgICAgICAgbGV0IGxpU3R5bGUgPSB7fTtcbiAgICAgICAgaWYgKG1ldGEgJiYgcGFnZUhlaWdodCkge1xuICAgICAgICAgICAgaWYgKGlzU2Nyb2xsTW9kZSkge1xuICAgICAgICAgICAgICAgIGxpU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBhZ2VIZWlnaHQgKiAobWV0YS5wYWdlTm8gLSAxKSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaVN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBhY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHBhZ2VIZWlnaHQgfHwgJ2F1dG8nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0YSAmJiBtZXRhLm9mZnNldCkge1xuICAgICAgICAgICAgY29udGVudFN0eWxlLm1hcmdpblRvcCA9IG1ldGEub2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ3BhZ2UnOiAhZmx1aWQsXG4gICAgICAgICAgICAncGFnZS0tZmx1aWQnOiBmbHVpZCxcbiAgICAgICAgICAgIFt0aGVtZSAmJiB0aGVtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXTogQm9vbGVhbih0aGVtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBsaVN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IGNvbnRlbnRTdHlsZSwgc3R5bGVOYW1lOiBcImNvbnRlbnRcIiwgcmVmOiByZWYgPT4geyB0aGlzLmJvb2tQYWdlRG9tID0gcmVmOyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93biwgeyBjbGFzc05hbWU6IFwibGluZXNcIiwgaW5wdXQ6IG1kSW5wdXQsIHNhZmU6IGZhbHNlLCBtYXJrZWRSZW5kZXJlcnM6IHJlbmRlcmVycyB9KSksXG4gICAgICAgICAgICBtZXRhICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInBhZ2Utbm9cIiB9LCBtZXRhLnBhZ2VObykpKSk7XG4gICAgfVxufTtcbkJvb2tQYWdlID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSksXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgICAgICAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxuICAgIH0pXG5dLCBCb29rUGFnZSk7XG5leHBvcnQgZGVmYXVsdCBCb29rUGFnZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlLnRzeFxuICoqLyIsImltcG9ydCBNYXJrZG93biBmcm9tICcuL01hcmtkb3duJztcbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9NYXJrZG93bi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmNvbnN0IFJlYWN0TWFya2Rvd24gPSByZXF1aXJlKCdyZWFjdC1tYXJrZG93bicpO1xuY2xhc3MgTWFya2Rvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlclNhZmVseShjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dCwgcmVuZGVyZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNYXJrZG93biwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc291cmNlOiBpbnB1dCwgcmVuZGVyZXJzOiByZW5kZXJlcnMgfHwge30sIGVzY2FwZUh0bWw6IGZhbHNlLCBza2lwSHRtbDogZmFsc2UgfSkpO1xuICAgIH1cbiAgICByZW5kZXJVblNhZmVseShjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgeyBpbnB1dCwgbWFya2VkUmVuZGVyZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKCk7XG4gICAgICAgIGlmIChtYXJrZWRSZW5kZXJlcnMpIHtcbiAgICAgICAgICAgIF8uZm9yRWFjaChtYXJrZWRSZW5kZXJlcnMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdsaW5lJykge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcltrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBodG1sID0gbWFya2VkKGlucHV0LCB7XG4gICAgICAgICAgICBnZm06IGZhbHNlLFxuICAgICAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICAgICAgcmVuZGVyZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXJrZWRSZW5kZXJlcnMgJiYgbWFya2VkUmVuZGVyZXJzLmxpbmUpIHtcbiAgICAgICAgICAgIGh0bWwgPSBBcnJheS5wcm90b3R5cGVcbiAgICAgICAgICAgICAgICAuZmlsdGVyLmNhbGwoJChodG1sKSwgZWxlID0+IHtcbiAgICAgICAgICAgICAgICAvLyDnp7vpmaTlhYPntKDpl7TnmoTlm57ovablj4rlrZfnrKbkuLJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlLm5vZGVUeXBlICE9PSAzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtlZFJlbmRlcmVycy5saW5lKGVsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGh0bWwgfSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNhZmUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHNhZmVcbiAgICAgICAgICAgID8gdGhpcy5yZW5kZXJTYWZlbHkoY2xhc3NOYW1lKVxuICAgICAgICAgICAgOiB0aGlzLnJlbmRlclVuU2FmZWx5KGNsYXNzTmFtZSk7XG4gICAgfVxufVxuTWFya2Rvd25bJ2RlZmF1bHRQcm9wcyddID0ge1xuICAgIHNhZmU6IHRydWVcbn07XG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vTWFya2Rvd24udHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDIxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDIyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEzIDE1XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCJcbiAqKiBtb2R1bGUgaWQgPSAyMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va1BhZ2VzLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2VzXzJmZGRJIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlcy0tZmx1aWRfM3NuX0Yge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ud2hpdGVfMi16Sncge1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5uaWdodF8xU2xXMSB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzOyB9XFxuXFxuLnNlcGlhX0VWWXg4IHtcXG4gIGJhY2tncm91bmQ6ICNmYmY3ZjE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlc1wiOiBcInBhZ2VzXzJmZGRJXCIsXG5cdFwicGFnZXMtLWZsdWlkXCI6IFwicGFnZXMtLWZsdWlkXzNzbl9GIHBhZ2VzXzJmZGRJXCIsXG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8yLXpKd1wiLFxuXHRcIm5pZ2h0XCI6IFwibmlnaHRfMVNsVzFcIixcblx0XCJzZXBpYVwiOiBcInNlcGlhX0VWWXg4XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZXMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJTY3JvbGxiYXIuc2NzcycpO1xubGV0IFZpZXdlclNjcm9sbGJhciA9IGNsYXNzIFZpZXdlclNjcm9sbGJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudCwgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDApLnRvRml4ZWQoMikgKyAnJSc7XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy52aXNpYmxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9fYXNzaWduKHt9LCB7IHN0eWxlTmFtZTogJ2xvYy1pbmZvJyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIGN1cnJlbnQpLFxuICAgICAgICAgICAgICAgIFwiL1wiLFxuICAgICAgICAgICAgICAgIHRvdGFsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwic3ViLWluZm9cIiB9LCBwZXJjZW50YWdlKSkpKTtcbiAgICB9XG59O1xuVmlld2VyU2Nyb2xsYmFyID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBWaWV3ZXJTY3JvbGxiYXIpO1xuZXhwb3J0IGRlZmF1bHQgVmlld2VyU2Nyb2xsYmFyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyU2Nyb2xsYmFyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcm9sbGJhcl8zbkkxTSB7XFxuICB3aWR0aDogMnB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMTAwcHg7IH1cXG4gIC5zY3JvbGxiYXJfM25JMU06aG92ZXIgLmJ1dHRvbl8xeXMwOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRyYWNrXzNsN0R5IHtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogOHB4O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi50cmFjay0tcGFzdF8yXzhTciB7XFxuICBiYWNrZ3JvdW5kOiAjNTg2NmRiO1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5idXR0b25fMXlzMDgge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogODRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvYy1pbmZvXzE1bldCIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7IH1cXG5cXG4uc3ViLWluZm9fM2JZajUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2FhYTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNjcm9sbGJhclwiOiBcInNjcm9sbGJhcl8zbkkxTVwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8xeXMwOFwiLFxuXHRcInRyYWNrXCI6IFwidHJhY2tfM2w3RHlcIixcblx0XCJ0cmFjay0tcGFzdFwiOiBcInRyYWNrLS1wYXN0XzJfOFNyIHRyYWNrXzNsN0R5XCIsXG5cdFwibG9jLWluZm9cIjogXCJsb2MtaW5mb18xNW5XQlwiLFxuXHRcInN1Yi1pbmZvXCI6IFwic3ViLWluZm9fM2JZajVcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9OYXZBcnJvdy5zY3NzJyk7XG5sZXQgTmF2QXJyb3cgPSBjbGFzcyBOYXZBcnJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBoYW5kbGVGb3J3YXJkQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9yd2FyZCgpO1xuICAgIH1cbiAgICBoYW5kbGVCYWNrd2FyZENsaWNrKCkge1xuICAgICAgICB0aGlzLnByb3BzLmJhY2t3YXJkKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2hvdyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJuYXZzXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwibmF2LWxlZnRcIiwgb25DbGljazogdGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrLmJpbmQodGhpcykgfSwgXCItXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJuYXYtcmlnaHRcIiwgb25DbGljazogdGhpcy5oYW5kbGVGb3J3YXJkQ2xpY2suYmluZCh0aGlzKSB9LCBcIitcIikpKTtcbiAgICB9XG59O1xuTmF2QXJyb3cgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIE5hdkFycm93KTtcbmV4cG9ydCBkZWZhdWx0IE5hdkFycm93O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvTmF2QXJyb3cudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9OYXZBcnJvdy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdnNfUDhObXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogNzUwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTM3NXB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIG1hcmdpbi10b3A6IC02MHB4OyB9XFxuXFxuLm5hdi1hcnJvd18yVnJ0LSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBsaW5lLWhlaWdodDogMTIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC5uYXYtYXJyb3dfMlZydC06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7IH1cXG4gIC5uYXYtYXJyb3dfMlZydC06YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxcblxcbi5uYXYtbGVmdF8yclNHWCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5uYXYtcmlnaHRfMjNMdE4ge1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibmF2c1wiOiBcIm5hdnNfUDhObXlcIixcblx0XCJuYXYtYXJyb3dcIjogXCJuYXYtYXJyb3dfMlZydC1cIixcblx0XCJuYXYtbGVmdFwiOiBcIm5hdi1sZWZ0XzJyU0dYIG5hdi1hcnJvd18yVnJ0LVwiLFxuXHRcIm5hdi1yaWdodFwiOiBcIm5hdi1yaWdodF8yM0x0TiBuYXYtYXJyb3dfMlZydC1cIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va0NvbnRhaW5lci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud2hpdGVfM0RucWgge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblxcbi5uaWdodF8xTnF4UyB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyOyB9XFxuXFxuLnNlcGlhXzFaMkJIIHtcXG4gIGJhY2tncm91bmQ6ICNmOWYxZTU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ3aGl0ZVwiOiBcIndoaXRlXzNEbnFoXCIsXG5cdFwibmlnaHRcIjogXCJuaWdodF8xTnF4U1wiLFxuXHRcInNlcGlhXCI6IFwic2VwaWFfMVoyQkhcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvSWNvbic7XG5pbXBvcnQgeyBGYWRlLCBTbGlkZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2FuaW1hdGlvbnMnO1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi9WaWV3ZXJQcmVmZXJlbmNlJztcbmltcG9ydCBWaWV3ZXJOYXYgZnJvbSAnLi9WaWV3ZXJOYXYnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBpc0Rlc2NlbmRhbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tL2lzRGVzY2VuZGFudCc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlclBhbmVsLnNjc3MnKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSk7XG4gICAgY29uc3QgYm9va0lkID0gY29uZmlnLmJvb2tJZDtcbiAgICBjb25zdCB7IHNob3c6IHNob3dQYW5lbCB9ID0gc2VsZWN0b3JzLnZpZXdlci5wYW5lbChzdGF0ZSk7XG4gICAgY29uc3QgeyBzaG93OiBzaG93UHJlZmVyZW5jZSB9ID0gc2VsZWN0b3JzLnZpZXdlci5wcmVmZXJlbmNlKHN0YXRlKTtcbiAgICBjb25zdCB7IHNob3c6IHNob3dOYXZpZ2F0aW9uIH0gPSBzZWxlY3RvcnMudmlld2VyLm5hdmlnYXRpb24oc3RhdGUpO1xuICAgIGNvbnN0IHsgdGl0bGUgfSA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGJvb2tJZCkoc3RhdGUpO1xuICAgIHJldHVybiB7IGNvbmZpZywgc2hvd1BhbmVsLCBzaG93UHJlZmVyZW5jZSwgdGl0bGUsIHNob3dOYXZpZ2F0aW9uIH07XG59O1xubGV0IFZpZXdlclBhbmVsID0gY2xhc3MgVmlld2VyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUgPSB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUdsb2JhbENsaWNrID0gdGhpcy5oYW5kbGVHbG9iYWxDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVHbG9iYWxDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHsgc2hvd1ByZWZlcmVuY2UsIHNob3dOYXZpZ2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLm5hdiwgZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBpZiAoc2hvd05hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyTmF2aWdhdGlvbihmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyTmF2aWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNEZXNjZW5kYW50KHRoaXMucHJlZiwgZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBpZiAoc2hvd1ByZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyUHJlZmVyZW5jZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyUHJlZmVyZW5jZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRlbFZpZXdlck1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCB7IGNvbmZpZzogeyBpc0NhbGNNb2RlLCBpc1RvdWNoTW9kZSB9LCBzaG93UGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghaXNDYWxjTW9kZSAmJiAhaXNUb3VjaE1vZGUpIHtcbiAgICAgICAgICAgIGxldCB5ID0gZXZlbnQucGFnZVkgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IHNob3cgPSB5IDwgOTA7XG4gICAgICAgICAgICBpZiAoc2hvd1BhbmVsICE9PSBzaG93KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclBhbmVsKHNob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUdsb2JhbENsaWNrKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2spO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIHNob3dQYW5lbCwgc2hvd1ByZWZlcmVuY2UsIHNob3dOYXZpZ2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2xpZGUsIG51bGwsIChzaG93UGFuZWwgfHwgc2hvd1ByZWZlcmVuY2UgfHwgc2hvd05hdmlnYXRpb24pICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInZpZXdlci1wYW5lbFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJiYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IG5hbWU6IFwiYmFja1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJcXHU4RkQ0XFx1NTZERVwiKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiA9PiB7IHRoaXMubmF2ID0gcmVmOyB9LCBzdHlsZU5hbWU6IFwiY29udGVudHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBcIlxcdTc2RUVcXHU1RjU1XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZhZGUsIG51bGwsIHNob3dOYXZpZ2F0aW9uICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFZpZXdlck5hdiwgbnVsbCkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwidGl0bGVcIiB9LCB0aXRsZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogcmVmID0+IHsgdGhpcy5wcmVmID0gcmVmOyB9LCBzdHlsZU5hbWU6IFwicHJlZmVyZW5jZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBuYW1lOiBcInByZWZlcmVuY2VcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCBzaG93UHJlZmVyZW5jZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJQcmVmZXJlbmNlLCBudWxsKSkpKSkpKSkpO1xuICAgIH1cbn07XG5WaWV3ZXJQYW5lbCA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfSkpLFxuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgVmlld2VyUGFuZWwpO1xuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFuZWw7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC50c3hcbiAqKi8iLCJpbXBvcnQgRmFkZSBmcm9tICcuL0ZhZGUnO1xuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xuZXhwb3J0IHsgRmFkZSwgU2xpZGUgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvYW5pbWF0aW9ucy50c1xuICoqLyIsImltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcbmV4cG9ydCBkZWZhdWx0IFNsaWRlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vU2xpZGUuc2NzcycpO1xuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwgeyBjb21wb25lbnQ6IFwiZGl2XCIsIHRyYW5zaXRpb25OYW1lOiBzdHlsZXMsIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDMwMCwgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogMzAwIH0sIHByb3BzLmNoaWxkcmVuKSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1NsaWRlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5lbnRlcl8yS2VQbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgb3BhY2l0eTogMC4wMTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG5cXG4uZW50ZXJBY3RpdmVfN0pHLUgge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5sZWF2ZV8zQWZlZyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcblxcbi5zZWF2ZUFjdGl2ZV8xUnRUcyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgb3BhY2l0eTogMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImVudGVyXCI6IFwiZW50ZXJfMktlUG1cIixcblx0XCJlbnRlckFjdGl2ZVwiOiBcImVudGVyQWN0aXZlXzdKRy1IXCIsXG5cdFwibGVhdmVcIjogXCJsZWF2ZV8zQWZlZ1wiLFxuXHRcInNlYXZlQWN0aXZlXCI6IFwic2VhdmVBY3RpdmVfMVJ0VHNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2l0Y2hlciBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Td2l0Y2hlcic7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBUSEVNRVMgYXMgVEhFTUVfREVGUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy92aWV3ZXJEZWZzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlclByZWZlcmVuY2Uuc2NzcycpO1xuY29uc3QgTUFYX0ZPTlRfU0laRSA9IDIwO1xuY29uc3QgTUlOX0ZPTlRfU0laRSA9IDEyO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZm9udFNpemUsIGlzU2Nyb2xsTW9kZSwgdGhlbWUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKTtcbiAgICByZXR1cm4geyBmb250U2l6ZSwgaXNTY3JvbGxNb2RlLCB0aGVtZSB9O1xufTtcbmxldCBWaWV3ZXJQcmVmZXJlbmNlID0gY2xhc3MgVmlld2VyUHJlZmVyZW5jZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBoYW5kbGVEZWNGb250U2l6ZUNsaWNrKCkge1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzRGVjRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKCk7XG4gICAgICAgIGlmICghaXNEZWNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNoYW5nZVZpZXdlckZvbnRTaXplKGZvbnRTaXplIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlSW5jRm9udFNpemVDbGljaygpIHtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBpc0luY0Rpc2FibGVkIH0gPSB0aGlzLmdldEJ0blN0YXR1cygpO1xuICAgICAgICBpZiAoIWlzSW5jRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jaGFuZ2VWaWV3ZXJGb250U2l6ZShmb250U2l6ZSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVRoZW1lQ2xpY2soa2V5KSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jaGFuZ2VWaWV3ZXJUaGVtZShrZXkpO1xuICAgIH1cbiAgICBoYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2sodmFsKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJTY3JvbGxNb2RlKHZhbCk7XG4gICAgfVxuICAgIGdldEJ0blN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgeyBmb250U2l6ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXNEZWNEaXNhYmxlZCA9IGZvbnRTaXplIDw9IE1JTl9GT05UX1NJWkU7XG4gICAgICAgIGNvbnN0IGlzSW5jRGlzYWJsZWQgPSBmb250U2l6ZSA+PSBNQVhfRk9OVF9TSVpFO1xuICAgICAgICByZXR1cm4geyBpc0RlY0Rpc2FibGVkLCBpc0luY0Rpc2FibGVkIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBpc0RlY0Rpc2FibGVkLCBpc0luY0Rpc2FibGVkIH0gPSB0aGlzLmdldEJ0blN0YXR1cygpO1xuICAgICAgICBjb25zdCB7IGlzU2Nyb2xsTW9kZSwgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGJ0bkRlY0NsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnYnRuJzogIWlzRGVjRGlzYWJsZWQsXG4gICAgICAgICAgICAnYnRuLS1kaXNhYmxlZCc6IGlzRGVjRGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJ0bkluY0NsYXNzID0gY2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAnYnRuJzogIWlzSW5jRGlzYWJsZWQsXG4gICAgICAgICAgICAnYnRuLS1kaXNhYmxlZCc6IGlzSW5jRGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJ2aWV3ZXItcHJlZmVyZW5jZVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwib3B0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvbi1mb250LXNpemVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogYnRuRGVjQ2xhc3MsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRGVjRm9udFNpemVDbGljay5iaW5kKHRoaXMpIH0sIFwiQS1cIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBidG5JbmNDbGFzcywgb25DbGljazogdGhpcy5oYW5kbGVJbmNGb250U2l6ZUNsaWNrLmJpbmQodGhpcykgfSwgXCJBK1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvbi1zY3JvbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJsYWJlbFwiIH0sIFwiXFx1NkVEQVxcdTUyQThcXHU2QTIxXFx1NUYwRlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hlciwgeyB2YWx1ZTogaXNTY3JvbGxNb2RlLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2suYmluZCh0aGlzKSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgc3R5bGVOYW1lOiBcIm9wdGlvbi10aGVtZVwiIH0sIF8ua2V5cyhUSEVNRV9ERUZTKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0ga2V5LnRvTG93ZXJDYXNlKCkgKyAodGhlbWUgPT09IGtleSA/ICctLWFjdGl2ZScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsYXNzTmFtZSwgdGhlbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IHN0eWxlc1tjbGFzc05hbWVdLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNoYW5nZVRoZW1lQ2xpY2suYmluZCh0aGlzLCBrZXkpIH0sIGtleSkpO1xuICAgICAgICAgICAgICAgIH0pKSkpKTtcbiAgICB9XG59O1xuVmlld2VyUHJlZmVyZW5jZSA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfSkpLFxuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgVmlld2VyUHJlZmVyZW5jZSk7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJQcmVmZXJlbmNlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcic7XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9fc3dpdGNoZXIuc2NzcycpO1xubGV0IFN3aXRjaGVyID0gY2xhc3MgU3dpdGNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgdmFsdWU6IGlzT24sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzT24gPT09ICcxJyB8fCBpc09uID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBpc09uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzT24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RhdGUgPSBCb29sZWFuKGlzT24pID8gJ29uJyA6ICdvZmYnO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB8fCAnJywgc3R5bGVOYW1lOiBcInN3aXRjaGVyLXdyYXBcIiB9LFxuICAgICAgICAgICAgdGhpcy5wcm9wcy50aXRsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgdGhpcy5wcm9wcy50aXRsZSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IG9uQ2xpY2s6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZUluZGV4ID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKS5pbmRleE9mKHRoaXMucHJvcHMudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY3VycmVudFZhbHVlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmsqHmnInnu5kgb3B0aW9ucyDml7blv4Xpobvkvb/nlKjluIPlsJTlnovnmoQgdmFsdWXvvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gIXRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBzdHlsZU5hbWU6IGBzd2l0Y2hlci0tJHtzdGF0ZX1gIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJzd2l0Y2hlci1idXR0b25cIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInN3aXRjaGVyLXRyYWNrXCIgfSkpKSk7XG4gICAgfVxufTtcblN3aXRjaGVyID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgICAgICAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxuICAgIH0pXG5dLCBTd2l0Y2hlcik7XG4vLyBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpXG4vLyAgIH1cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoaXMucHJvcHMub24gPyAnc3dpdGNoZXItLW9uJyA6ICdzd2l0Y2hlci0tb2ZmJ30+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItYnV0dG9uXCI+PC9kaXY+XG4vLyAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3dpdGNoZXItdHJhY2tcIj48L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vICAgfVxuLy8gfVxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL1N3aXRjaGVyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vX3N3aXRjaGVyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxIDExXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoZXItd3JhcF8zVU1BVSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uc3dpdGNoZXJfRzNuNF8sIC5zd2l0Y2hlci0tb2ZmXzFFb09VLCAuc3dpdGNoZXItLW9uXzJ4aXdPIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XFxuXFxuLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAyMHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgYmFja2dyb3VuZDogIzJlNDBkMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInN3aXRjaGVyLXdyYXBcIjogXCJzd2l0Y2hlci13cmFwXzNVTUFVXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl9HM240X1wiLFxuXHRcInN3aXRjaGVyLS1vZmZcIjogXCJzd2l0Y2hlci0tb2ZmXzFFb09VXCIsXG5cdFwic3dpdGNoZXItLW9uXCI6IFwic3dpdGNoZXItLW9uXzJ4aXdPXCIsXG5cdFwic3dpdGNoZXItYnV0dG9uXCI6IFwic3dpdGNoZXItYnV0dG9uXzJrSEdMXCIsXG5cdFwic3dpdGNoZXItdHJhY2tcIjogXCJzd2l0Y2hlci10cmFja194dmhqZ1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9fc3dpdGNoZXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDExXG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9WaWV3ZXJQcmVmZXJlbmNlLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXItcHJlZmVyZW5jZV9rTFlWVyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogNjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDEycHggNjNweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgY29sb3I6ICM2NjY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi5vcHRpb25fM29DUW8ge1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cXG4gIC5vcHRpb25fM29DUW86bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5vcHRpb24tZm9udC1zaXplXzEySFIyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwOyB9XFxuICAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuX281RnA0LCAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuLS1kaXNhYmxlZF8xaTE5NyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuX281RnA0OmhvdmVyLCAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuLS1kaXNhYmxlZF8xaTE5Nzpob3ZlciB7XFxuICAgICAgY29sb3I6ICMzMzM7IH1cXG4gICAgLm9wdGlvbi1mb250LXNpemVfMTJIUjIgLmJ0bl9vNUZwNDphY3RpdmUsIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG4tLWRpc2FibGVkXzFpMTk3OmFjdGl2ZSB7XFxuICAgICAgY29sb3I6ICM5OTk7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG5fbzVGcDQ6Zmlyc3QtY2hpbGQsIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG4tLWRpc2FibGVkXzFpMTk3OmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbi1mb250LXNpemVfMTJIUjIgLmJ0bi0tZGlzYWJsZWRfMWkxOTcge1xcbiAgICBjb2xvcjogI2RkZDsgfVxcblxcbi5vcHRpb24tc2Nyb2xsXzJFUTBuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8yRVEwbiAubGFiZWxfaURSZ0Ige1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgLm9wdGlvbi1zY3JvbGxfMkVRMG4gLnN3aXRjaGVyXzM3bGZrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm9wdGlvbi10aGVtZV80a3FBWSB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcblxcbi50aGVtZS1idG5fM2FLY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gIHRleHQtaW5kZW50OiAtOTk5ZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLndoaXRlXzNfVnZjIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ud2hpdGUtLWFjdGl2ZV8zOUFLOCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLm5pZ2h0XzNjTXRnIHtcXG4gIGJhY2tncm91bmQ6ICMyMjI7IH1cXG5cXG4ubmlnaHQtLWFjdGl2ZV8yaTFHTyB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyO1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXFxuLnNlcGlhXy1TR0h2IHtcXG4gIGJhY2tncm91bmQ6ICNmOWYxZTU7IH1cXG5cXG4uc2VwaWEtLWFjdGl2ZV8yWE9vMSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmMWU1O1xcbiAgYm9yZGVyLWNvbG9yOiAjMUIyNjdGOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXByZWZlcmVuY2VcIjogXCJ2aWV3ZXItcHJlZmVyZW5jZV9rTFlWV1wiLFxuXHRcIm9wdGlvblwiOiBcIm9wdGlvbl8zb0NRb1wiLFxuXHRcIm9wdGlvbi1mb250LXNpemVcIjogXCJvcHRpb24tZm9udC1zaXplXzEySFIyIG9wdGlvbl8zb0NRb1wiLFxuXHRcImJ0blwiOiBcImJ0bl9vNUZwNFwiLFxuXHRcImJ0bi0tZGlzYWJsZWRcIjogXCJidG4tLWRpc2FibGVkXzFpMTk3XCIsXG5cdFwib3B0aW9uLXNjcm9sbFwiOiBcIm9wdGlvbi1zY3JvbGxfMkVRMG4gb3B0aW9uXzNvQ1FvXCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbF9pRFJnQlwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfMzdsZmtcIixcblx0XCJvcHRpb24tdGhlbWVcIjogXCJvcHRpb24tdGhlbWVfNGtxQVkgb3B0aW9uXzNvQ1FvXCIsXG5cdFwidGhlbWUtYnRuXCI6IFwidGhlbWUtYnRuXzNhS2N0XCIsXG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8zX1Z2YyB0aGVtZS1idG5fM2FLY3RcIixcblx0XCJ3aGl0ZS0tYWN0aXZlXCI6IFwid2hpdGUtLWFjdGl2ZV8zOUFLOCB0aGVtZS1idG5fM2FLY3RcIixcblx0XCJuaWdodFwiOiBcIm5pZ2h0XzNjTXRnIHRoZW1lLWJ0bl8zYUtjdFwiLFxuXHRcIm5pZ2h0LS1hY3RpdmVcIjogXCJuaWdodC0tYWN0aXZlXzJpMUdPIHRoZW1lLWJ0bl8zYUtjdFwiLFxuXHRcInNlcGlhXCI6IFwic2VwaWFfLVNHSHYgdGhlbWUtYnRuXzNhS2N0XCIsXG5cdFwic2VwaWEtLWFjdGl2ZVwiOiBcInNlcGlhLS1hY3RpdmVfMlhPbzEgdGhlbWUtYnRuXzNhS2N0XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYnJvd3Nlci9wcmV2ZW50U2Nyb2xsJztcbmltcG9ydCAqIGFzIHZpZXdlclV0aWxzIGZyb20gJy4uL1ZpZXdlci51dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJOYXYuc2NzcycpO1xuY29uc3QgSlNfTkFWX0hPT0sgPSAnYS5qcy1ib29rLW5hdic7XG5jb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGJvb2tJZCB9ID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IG5hdiA9IHNlbGVjdG9ycy52aWV3ZXIubmF2RGF0YShib29rSWQpKHN0YXRlKTtcbiAgICBjb25zdCB7IHBlcmNlbnRhZ2U6IHZpZXdlclBlcmNlbnRhZ2UgfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgY29tcHV0ZWRQYWdlcyA9IHNlbGVjdG9ycy52aWV3ZXIuY29tcHV0ZWQoYm9va0lkKShzdGF0ZSk7XG4gICAgcmV0dXJuIHsgbmF2LCB2aWV3ZXJQZXJjZW50YWdlLCBjb21wdXRlZFBhZ2VzIH07XG59O1xubGV0IFZpZXdlck5hdiA9IGNsYXNzIFZpZXdlck5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hdkxpbmtDbGljayA9IHRoaXMuaGFuZGxlTmF2TGlua0NsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU5hdkxpbmtDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBjb21wdXRlZFBhZ2VzLCB2aWV3ZXJQZXJjZW50YWdlIC8qIOS5n+iuuOS8mueUqOWIsCAqLyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaHJlZiA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VObyA9IHZpZXdlclV0aWxzLnJlc29sdmVCb29rTG9jYXRpb24oaHJlZiwgY29tcHV0ZWRQYWdlcyk7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKHBhZ2VObyAtIDEpIC8gY29tcHV0ZWRQYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudmlld2VySnVtcFRvKHBlcmNlbnRhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIFRPRE86IGpzIGhvb2sg5bi46YePXG4gICAgICAgIHByZXZlbnRTY3JvbGwuaW5pdCgnLmpzLW5hdi1zY3JvbGwnKTtcbiAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgSlNfTkFWX0hPT0ssIHRoaXMuaGFuZGxlTmF2TGlua0NsaWNrKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHByZXZlbnRTY3JvbGwuZGVzdHJveSgnLmpzLW5hdi1zY3JvbGwnKTtcbiAgICAgICAgJGJvZHkub2ZmKCdjbGljaycsIEpTX05BVl9IT09LLCB0aGlzLmhhbmRsZU5hdkxpbmtDbGljayk7XG4gICAgfVxuICAgIHJlbmRlckxpbmsocmVmLCBoYXNoLCBsYWJlbCkge1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImpzLWJvb2stbmF2XCIsIGhyZWY6IGAjJHtyZWZ9JCR7aGFzaH1gIH0sIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwianMtYm9vay1uYXZcIiwgaHJlZjogYCMke3JlZn1gIH0sIGxhYmVsKTtcbiAgICB9XG4gICAgcmVuZGVyTmF2KG5hdkxpc3QpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgbmF2TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckxpbmsoaXRlbS5yZWYsIGl0ZW0uaGFzaCwgaXRlbS5sYWJlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTmF2KGl0ZW0uY2hpbGRyZW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXggfSwgdGhpcy5yZW5kZXJMaW5rKGl0ZW0ucmVmLCBpdGVtLmhhc2gsIGl0ZW0ubGFiZWwpKSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBuYXYgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJqcy1uYXYtc2Nyb2xsXCIsIHN0eWxlTmFtZTogXCJ2aWV3ZXItbmF2XCIgfSwgdGhpcy5yZW5kZXJOYXYobmF2KSkpO1xuICAgIH1cbn07XG5WaWV3ZXJOYXYgPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2ggPT4gKHtcbiAgICAgICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICAgIH0pKSxcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFZpZXdlck5hdik7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJOYXY7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYudHN4XG4gKiovIiwiLyoqXG4gKiDpmLvmraIgc2VsZWN0b3Ig5Lul5aSW55qE5YWD57Sg5rua5YqoXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4MDI0NjcvcHJldmVudC1zY3JvbGxpbmctb2YtcGFyZW50LWVsZW1lbnRcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoZXYpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gJHRoaXMuaW5uZXJIZWlnaHQoKTtcbiAgICBjb25zdCBkZWx0YSA9IChldi50eXBlID09PSAnRE9NTW91c2VTY3JvbGwnID9cbiAgICAgICAgZXYub3JpZ2luYWxFdmVudC5kZXRhaWwgKiAtNDAgOlxuICAgICAgICBldi5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEpO1xuICAgIGNvbnN0IHVwID0gZGVsdGEgPiAwO1xuICAgIGNvbnN0IHByZXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBpZiAoIXVwICYmIC1kZWx0YSA+IHNjcm9sbEhlaWdodCAtIGhlaWdodCAtIHNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGxpbmcgZG93biwgYnV0IHRoaXMgd2lsbCB0YWtlIHVzIHBhc3QgdGhlIGJvdHRvbS5cbiAgICAgICAgJHRoaXMuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgIHJldHVybiBwcmV2ZW50KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVwICYmIGRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIC8vIFNjcm9sbGluZyB1cCwgYnV0IHRoaXMgd2lsbCB0YWtlIHVzIHBhc3QgdGhlIHRvcC5cbiAgICAgICAgJHRoaXMuc2Nyb2xsVG9wKDApO1xuICAgICAgICByZXR1cm4gcHJldmVudCgpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ0RPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwnLCBzZWxlY3Rvciwgc2Nyb2xsSGFuZGxlcik7XG4gICAgfSxcbiAgICBkZXN0cm95OiAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdET01Nb3VzZVNjcm9sbCBtb3VzZXdoZWVsJywgc2VsZWN0b3IsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3V0aWxzL2Jyb3dzZXIvcHJldmVudFNjcm9sbC50c1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyTmF2LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyTmF2LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1uYXZfU0wyTVMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MHB4O1xcbiAgbGVmdDogLTIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAudmlld2VyLW5hdl9TTDJNUyB1bCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS44OyB9XFxuICAgIC52aWV3ZXItbmF2X1NMMk1TIHVsIGxpIGEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLW5hdlwiOiBcInZpZXdlci1uYXZfU0wyTVNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclBhbmVsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXBhbmVsXzEwN01ZIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTkwO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRhaW5lcl8zTDc4UiB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfMW1WckMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5iYWNrXzFtVnJDIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5iYWNrXzFtVnJDIGEgc3BhbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5iYWNrXzFtVnJDIHNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRlbnRzXzE2aUdRIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwMHB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5jb250ZW50c18xNmlHUSBzcGFuIHtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4udGl0bGVfM01JcFAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogNjBweDsgfVxcblxcbi5wcmVmZXJlbmNlXzJKUVJpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXBhbmVsXCI6IFwidmlld2VyLXBhbmVsXzEwN01ZXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyXzNMNzhSXCIsXG5cdFwiYmFja1wiOiBcImJhY2tfMW1WckNcIixcblx0XCJjb250ZW50c1wiOiBcImNvbnRlbnRzXzE2aUdRXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTUlwUFwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzJKUVJpXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvb2tQYWdlcyBmcm9tICcuL0Jvb2tQYWdlcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY29uc3QgQm9va0NoYXB0ZXIgPSAoeyBpZCwgbWFya2Rvd24gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tQYWdlcywgeyBwYWdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFttYXJrZG93bl1cbiAgICAgICAgICAgICAgICB9XSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDaGFwdGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHRyaWdnZXJVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgb25SYXdEYXRhTW91bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvblJhd0RhdGFNb3VudCkge1xuICAgICAgICAgICAgb25SYXdEYXRhTW91bnQodGhpcy5jaGFwdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJVcGRhdGUoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlclVwZGF0ZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYm9va0ZsZXNoIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiA9PiB0aGlzLmNoYXB0ZXJzID0gcmVmIH0sIChib29rRmxlc2ggfHwgW10pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rQ2hhcHRlciwgeyBpZDogaXRlbS5pZCwgbWFya2Rvd246IGl0ZW0ubWFya2Rvd24sIGtleTogaXRlbS5pZCB9KSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va0NoYXB0ZXJzLnRzeFxuICoqLyIsImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmcuc2Nzcyc7XG5sZXQgTG9hZGluZyA9IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGR5bmFtaWNUZXh0OiAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHluYW1pY1RleHQubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGR5bmFtaWNUZXh0OiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVGV4dDogdGhpcy5zdGF0ZS5keW5hbWljVGV4dCArICcuJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCwgY2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGR5bmFtaWNUZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB3cmFwQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdsb2FkaW5nLXdyYXAtLWNlbnRlcic6IGNlbnRlcixcbiAgICAgICAgICAgICdsb2FkaW5nLXdyYXAnOiAhY2VudGVyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IHdyYXBDbGFzcyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwidGV4dC1sb2FkaW5nXCIgfSwgdGV4dCArIGR5bmFtaWNUZXh0KSkpO1xuICAgIH1cbn07XG5Mb2FkaW5nID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBMb2FkaW5nKTtcbkxvYWRpbmdbJ2RlZmF1bHRQcm9wcyddID0ge1xuICAgIHRleHQ6ICfliqDovb3kuK0nXG59O1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTG9hZGluZy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICBtYXJnaW46IDMwcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5sb2FkaW5nLXdyYXBfaHR5WXoge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5sb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0LWxvYWRpbmdcIjogXCJ0ZXh0LWxvYWRpbmdfM2VmcWhcIixcblx0XCJsb2FkaW5nLXdyYXBcIjogXCJsb2FkaW5nLXdyYXBfaHR5WXpcIixcblx0XCJsb2FkaW5nLXdyYXAtLWNlbnRlclwiOiBcImxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9