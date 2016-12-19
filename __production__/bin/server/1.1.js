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
	            return _react2.default.createElement("div", { styleName: theme.toLowerCase(), style: { height: divHeight } }, _react2.default.createElement(_BookPages2.default, { pages: _lodash2.default.slice(allPages, startPageIndex, endPageIndex) }), _react2.default.createElement(_NavArrow2.default, { forward: this.handleForward.bind(this), backward: this.handlebackward.bind(this) }), _react2.default.createElement(_ViewerScrollbar2.default, { visible: showPageInfo, current: pageNo, total: allPages.length }));
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
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("div", { styleName: "navs" }, _react2.default.createElement("div", { styleName: "nav-left", onClick: this.handleBackwardClick.bind(this) }, "-"), _react2.default.createElement("div", { styleName: "nav-right", onClick: this.handleForwardClick.bind(this) }, "+"));
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
	
	    return { fontSize: fontSize, isScrollMode: isScrollMode };
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
	            var isScrollMode = this.props.isScrollMode;
	
	            var btnDecClass = (0, _classnames2.default)({
	                'btn': !isDecDisabled,
	                'btn--disabled': isDecDisabled
	            });
	            var btnIncClass = (0, _classnames2.default)({
	                'btn': !isIncDisabled,
	                'btn--disabled': isIncDisabled
	            });
	            return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), _react2.default.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "\u6EDA\u52A8\u6A21\u5F0F"), _react2.default.createElement(_Switcher2.default, { value: isScrollMode, onChange: this.handleToggleScrollModeClick.bind(this) })), _react2.default.createElement("li", { styleName: "option-theme" }, _lodash2.default.keys(_viewerDefs.THEMES).map(function (key, index) {
	                return _react2.default.createElement("span", { key: index, className: styles[key.toLowerCase()], onClick: _this2.handleChangeThemeClick.bind(_this2, key) }, key);
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
	exports.push([module.id, ".viewer-preference_kLYVW {\n  position: absolute;\n  right: 0;\n  top: 65px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden; }\n\n.option_3oCQo {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_3oCQo:last-child {\n    border: none; }\n\n.option-font-size_12HR2 {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_12HR2 .btn_o5Fp4, .option-font-size_12HR2 .btn--disabled_1i197 {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n  .option-font-size_12HR2 .btn_o5Fp4:first-child, .option-font-size_12HR2 .btn--disabled_1i197:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n  .option-font-size_12HR2 .btn--disabled_1i197 {\n    color: #ddd; }\n\n.option-scroll_2EQ0n {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_2EQ0n .label_iDRgB {\n    float: left; }\n  .option-scroll_2EQ0n .switcher_37lfk {\n    float: right; }\n\n.option-theme_4kqAY {\n  padding: 5px 0; }\n  .option-theme_4kqAY span {\n    border-radius: 50%;\n    border: 2px solid #ddd;\n    text-indent: -999em;\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 5px;\n    cursor: pointer; }\n\n.white_3_Vvc {\n  background: #fff; }\n\n.night_3cMtg {\n  background: #222; }\n\n.sepia_-SGHv {\n  background: #f9f1e5; }\n", ""]);
	
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
		"white": "white_3_Vvc",
		"night": "night_3cMtg",
		"sepia": "sepia_-SGHv"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vTWFya2Rvd24udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzPzY3YjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2Nzcz80MjJkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvTmF2QXJyb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzPzI1MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIuc2Nzcz9kYzcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9hbmltYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS5zY3NzPzYyYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzcz8yOGQwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvdXRpbHMvYnJvd3Nlci9wcmV2ZW50U2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2Nzcz8yZjdhIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzcz9hNmFmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ2hhcHRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzcz8xMGRiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3M/ZDVmZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbInNlbGVjdG9ycyIsImFjdGlvbnMiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwiYm9va0lkIiwicGFyYW1zIiwiaWQiLCJib29rIiwiY29tbW9uIiwiZW50aXR5IiwiVmlld2VyIiwicHJvcHMiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJpc0VxdWFsIiwiaW5pdGlhbGl6ZVZpZXdlciIsImNyZWF0ZUVsZW1lbnQiLCJib2R5Q2xhc3MiLCJ0aXRsZSIsImRpc3BhdGNoIiwiUEFHRV9MSU1JVCIsImNvbmZpZyIsInZpZXdlciIsImJvb2tDb250ZW50IiwiYm9va1Byb2dyZXNzIiwiY2xvdWRQcm9ncmVzcyIsImdldCIsImNvbXB1dGVkUGFnZXMiLCJjb21wdXRlZCIsInByb2dyZXNzIiwidmlld2VyUGVyY2VudGFnZSIsInBlcmNlbnRhZ2UiLCJpc0ZldGNoaW5nIiwicGFuZWwiLCJzaG93UGFuZWwiLCJzaG93IiwiaXNGZXRjaGluZ1Byb2dyZXNzIiwic2Vzc2lvbiIsIlZpZXdlckNvbnRhaW5lciIsInNob3dQYWdlSW5mbyIsInJlc2l6ZUxhemlseSIsImRlYm91bmNlIiwiaGFuZGxlUmVzaXplIiwibWF4V2FpdCIsImhhbmRsZVZpZXdlckNsaWNrIiwiYmluZCIsImhhbmRsZVJhd0RhdGFNb3VudCIsImhhbmRlbFZpZXdlck1vdXNlTW92ZSIsImVsZSIsImNhbGNCb29rIiwiaXNUb3VjaE1vZGUiLCJ0b2dnbGVWaWV3ZXJQYW5lbCIsInNldFN0YXRlIiwiaW5pdGlhbGl6ZVZpZXdlckNvbmZpZyIsImlzQ2FsY01vZGUiLCJldmVudCIsImRUb1NjcmVlblJpZ2h0IiwiZ2V0U2NyZWVuSW5mbyIsInZpZXciLCJ3aWR0aCIsInBhZ2VYIiwiY29uZmlnVmlld2VyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwidmlld0NoYW5nZWQiLCJpc0VxdWFsV2l0aCIsInZhbEEiLCJ2YWxCIiwicmVpbml0aWFsaXplVmlld2VyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlSGVpZ2h0IiwiZmxlc2giLCJ0ZXh0IiwiY2VudGVyIiwiYm9va0ZsZXNoIiwib25SYXdEYXRhTW91bnQiLCJhbGxQYWdlcyIsInBhZ2VMaW1pdCIsIm9uQ2xpY2siLCJvbk1vdXNlTW92ZSIsInJlbmRlckJvb2siLCJzdHlsZXMiLCJyZXF1aXJlIiwidGhlbWUiLCJpc1Njcm9sbE1vZGUiLCJwYWdlTm8iLCJCb29rQ29udGFpbmVyIiwiaGFuZGxlU2Nyb2xsIiwiaGFuZGxlU2Nyb2xsTGF6aWx5IiwicGFnZUNvdW50IiwidG90YWxIZWlnaHQiLCJzY3JvbGxUb3AiLCJkb2N1bWVudCIsImJvZHkiLCJ1cGRhdGVCb29rUHJvZ3Jlc3MiLCJ2aWV3ZXJKdW1wVG8iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwic3RhcnRQYWdlSW5kZXgiLCJNYXRoIiwiY2VpbCIsImVuZFBhZ2VJbmRleCIsImRpdkhlaWdodCIsInN0eWxlTmFtZSIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJoZWlnaHQiLCJwYWdlcyIsInNsaWNlIiwiZm9yd2FyZCIsImhhbmRsZUZvcndhcmQiLCJiYWNrd2FyZCIsImhhbmRsZWJhY2t3YXJkIiwidmlzaWJsZSIsImN1cnJlbnQiLCJ0b3RhbCIsImN1cnJlbnRQYWdlTm8iLCJhc3NpZ24iLCJCb29rUGFnZXMiLCJmbHVpZCIsImNsYXNzTmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiQm9vbGVhbiIsInVsSGVpZ2h0IiwidWxTdHlsZSIsIm1hcCIsInBhZ2UiLCJpbmRleCIsImFjdGl2ZSIsIm1ldGEiLCJzZW5kTm90aWZpY2F0aW9uIiwiYWxsb3dNdWx0aXBsZSIsInJlbmRlcmVycyIsInBhcmFncmFwaCIsImxpbmsiLCJocmVmIiwiaW5kZXhPZiIsImxpbmUiLCJ0YWdOYW1lIiwib3V0ZXJIVE1MIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJmb250U2l6ZSIsIkJvb2tQYWdlIiwibm9kZXMiLCJtZElucHV0Iiwiam9pbiIsImNvbnRlbnRTdHlsZSIsImxpU3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImRpc3BsYXkiLCJvZmZzZXQiLCJtYXJnaW5Ub3AiLCJyZWYiLCJib29rUGFnZURvbSIsImlucHV0Iiwic2FmZSIsIm1hcmtlZFJlbmRlcmVycyIsIlJlYWN0TWFya2Rvd24iLCJNYXJrZG93biIsInNvdXJjZSIsImVzY2FwZUh0bWwiLCJza2lwSHRtbCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJmb3JFYWNoIiwidmFsIiwiaHRtbCIsImdmbSIsImJyZWFrcyIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsIm5vZGVUeXBlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZW5kZXJTYWZlbHkiLCJyZW5kZXJVblNhZmVseSIsIl9fYXNzaWduIiwidCIsInMiLCJuIiwicCIsImhhc093blByb3BlcnR5IiwiVmlld2VyU2Nyb2xsYmFyIiwidG9GaXhlZCIsIk5hdkFycm93IiwiaGFuZGxlQmFja3dhcmRDbGljayIsImhhbmRsZUZvcndhcmRDbGljayIsInByZWZlcmVuY2UiLCJzaG93UHJlZmVyZW5jZSIsIm5hdmlnYXRpb24iLCJzaG93TmF2aWdhdGlvbiIsIlZpZXdlclBhbmVsIiwiaGFuZGxlR2xvYmFsQ2xpY2siLCJlIiwibmF2IiwidG9nZ2xlVmlld2VyTmF2aWdhdGlvbiIsInByZWYiLCJ0b2dnbGVWaWV3ZXJQcmVmZXJlbmNlIiwieSIsInBhZ2VZIiwidG8iLCJuYW1lIiwiRmFkZSIsIlNsaWRlIiwiY29tcG9uZW50IiwidHJhbnNpdGlvbk5hbWUiLCJ0cmFuc2l0aW9uRW50ZXJUaW1lb3V0IiwidHJhbnNpdGlvbkxlYXZlVGltZW91dCIsImNoaWxkcmVuIiwiTUFYX0ZPTlRfU0laRSIsIk1JTl9GT05UX1NJWkUiLCJWaWV3ZXJQcmVmZXJlbmNlIiwiZ2V0QnRuU3RhdHVzIiwiaXNEZWNEaXNhYmxlZCIsImNoYW5nZVZpZXdlckZvbnRTaXplIiwiaXNJbmNEaXNhYmxlZCIsImNoYW5nZVZpZXdlclRoZW1lIiwidG9nZ2xlVmlld2VyU2Nyb2xsTW9kZSIsImJ0bkRlY0NsYXNzIiwiYnRuSW5jQ2xhc3MiLCJoYW5kbGVEZWNGb250U2l6ZUNsaWNrIiwiaGFuZGxlSW5jRm9udFNpemVDbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJoYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2siLCJrZXlzIiwiaGFuZGxlQ2hhbmdlVGhlbWVDbGljayIsIlN3aXRjaGVyIiwiaXNPbiIsIm5ld1ZhbHVlIiwib3B0aW9ucyIsImN1cnJlbnRWYWx1ZUluZGV4Iiwib3B0aW9uIiwiY29uc29sZSIsImVycm9yIiwidmlld2VyVXRpbHMiLCJKU19OQVZfSE9PSyIsIiRib2R5IiwibmF2RGF0YSIsIlZpZXdlck5hdiIsImhhbmRsZU5hdkxpbmtDbGljayIsInByZXZlbnREZWZhdWx0IiwiYXR0ciIsInJlc29sdmVCb29rTG9jYXRpb24iLCJtZXNzYWdlIiwiaW5pdCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsImhhc2giLCJsYWJlbCIsIm5hdkxpc3QiLCJpdGVtIiwicmVuZGVyTGluayIsInJlbmRlck5hdiIsInNjcm9sbEhhbmRsZXIiLCJldiIsIiR0aGlzIiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkZWx0YSIsInR5cGUiLCJvcmlnaW5hbEV2ZW50IiwiZGV0YWlsIiwid2hlZWxEZWx0YSIsInVwIiwicHJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJldHVyblZhbHVlIiwic2VsZWN0b3IiLCJCb29rQ2hhcHRlciIsIm1hcmtkb3duIiwiQm9va0NoYXB0ZXJzIiwiY2hhcHRlcnMiLCJ0cmlnZ2VyVXBkYXRlIiwiTG9hZGluZyIsImR5bmFtaWNUZXh0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndyYXBDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0tBQVlBLFM7O0FBQ1o7O0tBQVlDLE87O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFmQSxLQUFJQyxhQUFjLGFBQVEsVUFBS0EsVUFBZCxJQUE2QixVQUFVQyxVQUFWLEVBQXNCQyxNQUF0QixFQUE4QkMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ25GLFNBQUlDLElBQUlDLFVBQVVDLE1BQWxCO0FBQUEsU0FBMEJDLElBQUlILElBQUksQ0FBSixHQUFRSCxNQUFSLEdBQWlCRSxTQUFTLElBQVQsR0FBZ0JBLE9BQU9LLE9BQU9DLHdCQUFQLENBQWdDUixNQUFoQyxFQUF3Q0MsR0FBeEMsQ0FBdkIsR0FBc0VDLElBQXJIO0FBQUEsU0FBMkhPLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFB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QUVHd1IsV0FGSDs7QUFHTCxpQkFBTUksWUFBWSwwQkFBVztBQUN6Qix5Q0FBd0JuTixNQURDO0FBRXpCLGlDQUFnQixDQUFDQTtBQUZRLGNBQVgsQ0FBbEI7QUFJQSxvQkFBUSxnQkFBTTNELGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsRUFBRXlGLFdBQVdxTCxTQUFiLEVBQTNCLEVBQ0osZ0JBQU05USxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUV5RixXQUFXLGNBQWIsRUFBNUIsRUFBMkQvQixPQUFPZ04sV0FBbEUsQ0FESSxDQUFSO0FBRUg7QUEvQkQ7O0FBQUE7QUFBQSxvQkFBSjtBQWlDQUQsV0FBVXhTLFdBQVcsQ0FDakIsaURBRGlCLENBQVgsRUFFUHdTLE9BRk8sQ0FBVjtBQUdBQSxTQUFRLGNBQVIsSUFBMEI7QUFDdEIvTSxXQUFNO0FBRGdCLEVBQTFCO21CQUdlK00sTzs7Ozs7Ozs7QUNoRGY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxnREFBK0MsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLGdCQUFnQixFQUFFLHlCQUF5QixtQkFBbUIsMEJBQTBCLEVBQUUseUJBQXlCLHFCQUFxQixFQUFFLGlDQUFpQyx1QkFBdUIsRUFBRTs7QUFFelU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDWEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMscUJBQXFCLEVBQUU7O0FBRTFEIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IFZpZXdDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL1ZpZXdlckNvbnRhaW5lcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVmlld2VyLnNjc3MnO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGJvb2tJZCA9IG93blByb3BzLnBhcmFtcy5pZDtcbiAgICBjb25zdCBib29rID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tzJywgYm9va0lkKShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va1xuICAgIH07XG59O1xubGV0IFZpZXdlciA9IGNsYXNzIFZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmJvb2tJZCA9IHByb3BzLnBhcmFtcy5pZDtcbiAgICB9XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhXy5pc0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgIV8uaXNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmluaXRpYWxpemVWaWV3ZXIodGhpcy5ib29rSWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgYm9keUNsYXNzOiBcInZpZXdlclwiLCB0aXRsZTogdGhpcy5wcm9wcy5ib29rLnRpdGxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZpZXdDb250YWluZXIsIG51bGwpKSk7XG4gICAgfVxufTtcblZpZXdlciA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfSkpLFxuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgVmlld2VyKTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9WaWV3ZXIudHN4XG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgQm9va0NvbnRhaW5lciBmcm9tICcuL0Jvb2tDb250YWluZXInO1xuaW1wb3J0IFZpZXdlclBhbmVsIGZyb20gJy4vVmlld2VyUGFuZWwnO1xuaW1wb3J0IEJvb2tDaGFwdGVycyBmcm9tICcuL0Jvb2tDaGFwdGVycyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuY29uc3QgUEFHRV9MSU1JVCA9IDU7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IGJvb2tJZCA9IGNvbmZpZy5ib29rSWQ7XG4gICAgY29uc3QgYm9vayA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGJvb2tJZCkoc3RhdGUpO1xuICAgIGNvbnN0IGJvb2tDb250ZW50ID0gc2VsZWN0b3JzLmNvbW1vbi5lbnRpdHkoJ2Jvb2tDb250ZW50cycsIGJvb2tJZCkoc3RhdGUpO1xuICAgIGNvbnN0IGJvb2tQcm9ncmVzcyA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rUHJvZ3Jlc3MnLCBib29rSWQpKHN0YXRlKTtcbiAgICBjb25zdCBjbG91ZFByb2dyZXNzID0gXy5nZXQoYm9va1Byb2dyZXNzLCAncGVyY2VudGFnZScsIDApO1xuICAgIGNvbnN0IGNvbXB1dGVkUGFnZXMgPSBzZWxlY3RvcnMudmlld2VyLmNvbXB1dGVkKGJvb2tJZCkoc3RhdGUpO1xuICAgIGNvbnN0IHsgcGVyY2VudGFnZTogdmlld2VyUGVyY2VudGFnZSwgaXNGZXRjaGluZyB9ID0gc2VsZWN0b3JzLnZpZXdlci5wcm9ncmVzcyhib29rSWQpKHN0YXRlKTtcbiAgICBjb25zdCB7IHNob3c6IHNob3dQYW5lbCB9ID0gc2VsZWN0b3JzLnZpZXdlci5wYW5lbChzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va0lkLFxuICAgICAgICBib29rLFxuICAgICAgICBib29rQ29udGVudCxcbiAgICAgICAgaXNGZXRjaGluZ1Byb2dyZXNzOiBpc0ZldGNoaW5nLFxuICAgICAgICBzZXNzaW9uOiBzdGF0ZS5zZXNzaW9uLFxuICAgICAgICBjb21wdXRlZFBhZ2VzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGNsb3VkUHJvZ3Jlc3MsXG4gICAgICAgIHZpZXdlclBlcmNlbnRhZ2UsXG4gICAgICAgIHNob3dQYW5lbFxuICAgIH07XG59O1xubGV0IFZpZXdlckNvbnRhaW5lciA9IGNsYXNzIFZpZXdlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd1BhZ2VJbmZvOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlc2l6ZUxhemlseSA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVSZXNpemUsIDUwMCwge1xuICAgICAgICAgICAgbWF4V2FpdDogMTAwMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVWaWV3ZXJDbGljayA9IHRoaXMuaGFuZGxlVmlld2VyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2l6ZUxhemlseSA9IHRoaXMucmVzaXplTGF6aWx5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmF3RGF0YU1vdW50ID0gdGhpcy5oYW5kbGVSYXdEYXRhTW91bnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUgPSB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVSYXdEYXRhTW91bnQoZWxlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jYWxjQm9vayh0aGlzLnByb3BzLmJvb2tJZCwgZWxlKTtcbiAgICB9XG4gICAgaGFuZGxlVmlld2VyQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHsgY29uZmlnOiB7IGlzVG91Y2hNb2RlIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChpc1RvdWNoTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclBhbmVsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93UGFnZUluZm86ICF0aGlzLnN0YXRlLnNob3dQYWdlSW5mb1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlUmVzaXplKCkge1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMuaW5pdGlhbGl6ZVZpZXdlckNvbmZpZyh0aGlzLnByb3BzLmJvb2tJZCwge1xuICAgICAgICAgICAgaXNDYWxjTW9kZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRlbFZpZXdlck1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBsZXQgZFRvU2NyZWVuUmlnaHQgPSB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCAtIGV2ZW50LnBhZ2VYO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dQYWdlSW5mbzogZFRvU2NyZWVuUmlnaHQgPCAxMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlaW5pdGlhbGl6ZVZpZXdlcigpIHtcbiAgICAgICAgY29uc3QgeyBib29rSWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jb25maWdWaWV3ZXIoYm9va0lkLCB7XG4gICAgICAgICAgICBpc0NhbGNNb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dQYWdlSW5mbzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyUGFuZWwoZmFsc2UpO1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBjb25zdCB2aWV3Q2hhbmdlZCA9ICFfLmlzRXF1YWxXaXRoKHRoaXMucHJvcHMuY29uZmlnLCBwcmV2UHJvcHMuY29uZmlnLCAodmFsQSwgdmFsQiwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaXNUb3VjaE1vZGUnIHx8IGtleSA9PT0gJ2lzQ2FsY01vZGUnIHx8IGtleSA9PT0gJ2lzU2Nyb2xsTW9kZScgfHwga2V5ID09PSAndGhlbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodmlld0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVpbml0aWFsaXplVmlld2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxhemlseSk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVMYXppbHkpO1xuICAgIH1cbiAgICByZW5kZXJCb29rKCkge1xuICAgICAgICBjb25zdCB7IHNob3dQYWdlSW5mbyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyBib29rQ29udGVudCwgY29tcHV0ZWRQYWdlcywgY29uZmlnOiB7IGlzQ2FsY01vZGUsIHBhZ2VIZWlnaHQgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFib29rQ29udGVudC5mbGVzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgeyB0ZXh0OiBcIuS5puexjeiOt+WPluS4rVwiLCBjZW50ZXI6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2FsY01vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgeyB0ZXh0OiBcIuS5puexjeaOkueJiOS4rVwiLCBjZW50ZXI6IHRydWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb29rQ2hhcHRlcnMsIHsgYm9va0ZsZXNoOiBib29rQ29udGVudC5mbGVzaCwgb25SYXdEYXRhTW91bnQ6IHRoaXMuaGFuZGxlUmF3RGF0YU1vdW50IH0pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcHV0ZWRQYWdlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rQ29udGFpbmVyLCB7IGFsbFBhZ2VzOiBjb21wdXRlZFBhZ2VzLCBwYWdlSGVpZ2h0OiBwYWdlSGVpZ2h0LCBzaG93UGFnZUluZm86IHNob3dQYWdlSW5mbywgcGFnZUxpbWl0OiBQQUdFX0xJTUlUIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHsgdGV4dDogXCLlh4blpIfkuK1cIiwgY2VudGVyOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgb25DbGljazogdGhpcy5oYW5kbGVWaWV3ZXJDbGljaywgb25Nb3VzZU1vdmU6IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZpZXdlclBhbmVsLCBudWxsKSxcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQm9vaygpKSk7XG4gICAgfVxufTtcblZpZXdlckNvbnRhaW5lciA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfSkpXG5dLCBWaWV3ZXJDb250YWluZXIpO1xuZXhwb3J0IGRlZmF1bHQgVmlld2VyQ29udGFpbmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyQ29udGFpbmVyLnRzeFxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9va1BhZ2VzIGZyb20gJy4vQm9va1BhZ2VzJztcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi9WaWV3ZXJTY3JvbGxiYXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBOYXZBcnJvdyBmcm9tICcuL05hdkFycm93JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tDb250YWluZXIuc2NzcycpO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIGNvbnN0IHsgYm9va0lkLCB0aGVtZSwgaXNTY3JvbGxNb2RlLCBpc0NhbGNNb2RlIH0gPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSk7XG4gICAgY29uc3QgeyBwZXJjZW50YWdlLCBwYWdlTm8gfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoYm9va0lkKShzdGF0ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGVyY2VudGFnZSxcbiAgICAgICAgcGFnZU5vLFxuICAgICAgICB0aGVtZSxcbiAgICAgICAgaXNTY3JvbGxNb2RlLFxuICAgICAgICBpc0NhbGNNb2RlXG4gICAgfTtcbn07XG5sZXQgQm9va0NvbnRhaW5lciA9IGNsYXNzIEJvb2tDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbExhemlseSA9IF8uZGVib3VuY2UodGhpcy5oYW5kbGVTY3JvbGwsIDIwMCwge1xuICAgICAgICAgICAgbWF4V2FpdDogMTAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICBjb25zdCB7IGFsbFBhZ2VzLCBwYWdlSGVpZ2h0LCBpc1Njcm9sbE1vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHBhZ2VDb3VudCA9IGFsbFBhZ2VzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSBwYWdlQ291bnQgKiBwYWdlSGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKGlzU2Nyb2xsTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnVwZGF0ZUJvb2tQcm9ncmVzcyhzY3JvbGxUb3AgLyB0b3RhbEhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlRm9yd2FyZCgpIHtcbiAgICAgICAgY29uc3QgeyBhbGxQYWdlcywgcGFnZU5vIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudmlld2VySnVtcFRvKHBhZ2VObyAvIGFsbFBhZ2VzLmxlbmd0aCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcbiAgICB9XG4gICAgaGFuZGxlYmFja3dhcmQoKSB7XG4gICAgICAgIGNvbnN0IHsgYWxsUGFnZXMsIHBhZ2VObyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnZpZXdlckp1bXBUbygocGFnZU5vIC0gMikgLyBhbGxQYWdlcy5sZW5ndGgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGxMYXppbHkpO1xuICAgIH1cbiAgICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsTGF6aWx5KTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFsbFBhZ2VzLCBwYWdlSGVpZ2h0LCBzaG93UGFnZUluZm8sIHBhZ2VMaW1pdCwgcGFnZU5vLCB0aGVtZSwgaXNTY3JvbGxNb2RlLCBpc0NhbGNNb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc3RhcnRQYWdlSW5kZXg7XG4gICAgICAgIHN0YXJ0UGFnZUluZGV4ID0gcGFnZU5vIC0gTWF0aC5jZWlsKHBhZ2VMaW1pdCAvIDIpO1xuICAgICAgICBzdGFydFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4IDwgMCA/IDAgOiBzdGFydFBhZ2VJbmRleDtcbiAgICAgICAgY29uc3QgZW5kUGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggKyBwYWdlTGltaXQ7XG4gICAgICAgIGNvbnN0IGRpdkhlaWdodCA9IGlzQ2FsY01vZGVcbiAgICAgICAgICAgID8gJ2F1dG8nXG4gICAgICAgICAgICA6IChpc1Njcm9sbE1vZGVcbiAgICAgICAgICAgICAgICA/IGFsbFBhZ2VzLmxlbmd0aCAqIHBhZ2VIZWlnaHRcbiAgICAgICAgICAgICAgICA6IHBhZ2VIZWlnaHQpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IHRoZW1lLnRvTG93ZXJDYXNlKCksIHN0eWxlOiB7IGhlaWdodDogZGl2SGVpZ2h0IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va1BhZ2VzLCB7IHBhZ2VzOiBfLnNsaWNlKGFsbFBhZ2VzLCBzdGFydFBhZ2VJbmRleCwgZW5kUGFnZUluZGV4KSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2QXJyb3csIHsgZm9yd2FyZDogdGhpcy5oYW5kbGVGb3J3YXJkLmJpbmQodGhpcyksIGJhY2t3YXJkOiB0aGlzLmhhbmRsZWJhY2t3YXJkLmJpbmQodGhpcykgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZpZXdlclNjcm9sbGJhciwgeyB2aXNpYmxlOiBzaG93UGFnZUluZm8sIGN1cnJlbnQ6IHBhZ2VObywgdG90YWw6IGFsbFBhZ2VzLmxlbmd0aCB9KSkpO1xuICAgIH1cbn07XG5Cb29rQ29udGFpbmVyID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSksXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBCb29rQ29udGFpbmVyKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tDb250YWluZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnRzeFxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vQm9va1BhZ2UnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tQYWdlcy5zY3NzJyk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IGNvbXB1dGVkID0gc2VsZWN0b3JzLnZpZXdlci5jb21wdXRlZChjb25maWcuYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgY3VycmVudFBhZ2VObyA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoY29uZmlnLmJvb2tJZCkoc3RhdGUpLnBhZ2VObztcbiAgICByZXR1cm4gXy5hc3NpZ24oe30sIGNvbmZpZywgeyBjb21wdXRlZCwgY3VycmVudFBhZ2VObyB9KTtcbn07XG5sZXQgQm9va1BhZ2VzID0gY2xhc3MgQm9va1BhZ2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIC8vIOWGmeaIkCBkZWNvcmF0b3Ig55qE5b2i5byP77yfXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiAhXy5pc0VxdWFsKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgIV8uaXNFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGFnZXMsIGZsdWlkLCBjb21wdXRlZCwgdGhlbWUsIGlzU2Nyb2xsTW9kZSwgcGFnZUhlaWdodCwgaXNDYWxjTW9kZSwgY3VycmVudFBhZ2VObyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSBjb21wdXRlZC5sZW5ndGggKiBwYWdlSGVpZ2h0O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdwYWdlcyc6ICFmbHVpZCxcbiAgICAgICAgICAgICdwYWdlcy0tZmx1aWQnOiBmbHVpZCxcbiAgICAgICAgICAgIFt0aGVtZSAmJiB0aGVtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXTogQm9vbGVhbih0aGVtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHVsSGVpZ2h0ID0gaXNDYWxjTW9kZVxuICAgICAgICAgICAgPyAnYXV0bydcbiAgICAgICAgICAgIDogKGlzU2Nyb2xsTW9kZVxuICAgICAgICAgICAgICAgID8gdG90YWxIZWlnaHRcbiAgICAgICAgICAgICAgICA6IHBhZ2VIZWlnaHQpO1xuICAgICAgICBjb25zdCB1bFN0eWxlID0geyBoZWlnaHQ6IHVsSGVpZ2h0IH07XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgc3R5bGVOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiB1bFN0eWxlIH0sIHBhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHBhZ2UubWV0YSAmJiBwYWdlLm1ldGEucGFnZU5vID09PSBjdXJyZW50UGFnZU5vO1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tQYWdlLCB7IGZsdWlkOiBmbHVpZCwgcGFnZTogcGFnZSwgcGFnZUhlaWdodDogcGFnZUhlaWdodCwga2V5OiBpbmRleCwgYWN0aXZlOiBhY3RpdmUgfSkpO1xuICAgICAgICB9KSkpO1xuICAgIH1cbn07XG5Cb29rUGFnZXMgPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uIH0pLFxuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgQm9va1BhZ2VzKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy50c3hcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTWFya2Rvd24nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vQm9va1BhZ2Uuc2NzcycpO1xuY29uc3QgcmVuZGVyZXJzID0ge1xuICAgIHBhcmFncmFwaCh0ZXh0KSB7XG4gICAgICAgIHJldHVybiBgPHAgY2xhc3M9XCIke3N0eWxlc1snZ2ItbGluZSddfVwiPiR7dGV4dH08L3A+YDtcbiAgICB9LFxuICAgIGxpbmsoaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZignaHR0cDovLycpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHtocmVmfVwiIGNsYXNzPVwianMtYm9vay1uYXZcIj4ke3RleHR9PC9hPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHtocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGV4dH08L2E+YDtcbiAgICB9LFxuICAgIGxpbmUoZWxlKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlbGUudGFnTmFtZTtcbiAgICAgICAgaWYgKHRhZ05hbWUgIT09ICdQJykge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtzdHlsZXNbJ2diLWxpbmUnXX1cIj4ke2VsZS5vdXRlckhUTUwgfHwgZWxlLmlubmVySFRNTCB8fCBlbGUudGV4dENvbnRlbnR9PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlLm91dGVySFRNTDtcbiAgICB9XG59O1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZm9udFNpemUsIHRoZW1lLCBpc1Njcm9sbE1vZGUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKTtcbiAgICByZXR1cm4geyBmb250U2l6ZSwgdGhlbWUsIGlzU2Nyb2xsTW9kZSB9O1xufTtcbmxldCBCb29rUGFnZSA9IGNsYXNzIEJvb2tQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgcGFnZTogeyBub2RlcywgbWV0YSB9LCBwYWdlSGVpZ2h0LCBmbHVpZCwgZm9udFNpemUsIHRoZW1lLCBpc1Njcm9sbE1vZGUsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbWRJbnB1dCA9IG5vZGVzLmpvaW4oJ1xcblxcbicpO1xuICAgICAgICBjb25zdCBjb250ZW50U3R5bGUgPSB7IGZvbnRTaXplIH07XG4gICAgICAgIGxldCBsaVN0eWxlID0ge307XG4gICAgICAgIGlmIChtZXRhICYmIHBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChpc1Njcm9sbE1vZGUpIHtcbiAgICAgICAgICAgICAgICBsaVN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwYWdlSGVpZ2h0ICogKG1ldGEucGFnZU5vIC0gMSksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcGFnZUhlaWdodCB8fCAnYXV0bydcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYWN0aXZlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGEgJiYgbWV0YS5vZmZzZXQpIHtcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZS5tYXJnaW5Ub3AgPSBtZXRhLm9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdwYWdlJzogIWZsdWlkLFxuICAgICAgICAgICAgJ3BhZ2UtLWZsdWlkJzogZmx1aWQsXG4gICAgICAgICAgICBbdGhlbWUgJiYgdGhlbWUudG9Mb2NhbGVMb3dlckNhc2UoKV06IEJvb2xlYW4odGhlbWUpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogbGlTdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBjb250ZW50U3R5bGUsIHN0eWxlTmFtZTogXCJjb250ZW50XCIsIHJlZjogcmVmID0+IHsgdGhpcy5ib29rUGFnZURvbSA9IHJlZjsgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd24sIHsgY2xhc3NOYW1lOiBcImxpbmVzXCIsIGlucHV0OiBtZElucHV0LCBzYWZlOiBmYWxzZSwgbWFya2VkUmVuZGVyZXJzOiByZW5kZXJlcnMgfSkpLFxuICAgICAgICAgICAgbWV0YSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJwYWdlLW5vXCIgfSwgbWV0YS5wYWdlTm8pKSkpO1xuICAgIH1cbn07XG5Cb29rUGFnZSA9IF9fZGVjb3JhdGUoW1xuICAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaCA9PiAoe1xuICAgICAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucywgZGlzcGF0Y2gpXG4gICAgfSkpLFxuICAgIENTU01vZHVsZXMoc3R5bGVzLCB7XG4gICAgICAgIGFsbG93TXVsdGlwbGU6IHRydWVcbiAgICB9KVxuXSwgQm9va1BhZ2UpO1xuZXhwb3J0IGRlZmF1bHQgQm9va1BhZ2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgTWFya2Rvd24gZnJvbSAnLi9NYXJrZG93bic7XG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5jb25zdCBSZWFjdE1hcmtkb3duID0gcmVxdWlyZSgncmVhY3QtbWFya2Rvd24nKTtcbmNsYXNzIE1hcmtkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIH1cbiAgICByZW5kZXJTYWZlbHkoY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXQsIHJlbmRlcmVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TWFya2Rvd24sIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHNvdXJjZTogaW5wdXQsIHJlbmRlcmVyczogcmVuZGVyZXJzIHx8IHt9LCBlc2NhcGVIdG1sOiBmYWxzZSwgc2tpcEh0bWw6IGZhbHNlIH0pKTtcbiAgICB9XG4gICAgcmVuZGVyVW5TYWZlbHkoY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXQsIG1hcmtlZFJlbmRlcmVycyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IG1hcmtlZC5SZW5kZXJlcigpO1xuICAgICAgICBpZiAobWFya2VkUmVuZGVyZXJzKSB7XG4gICAgICAgICAgICBfLmZvckVhY2gobWFya2VkUmVuZGVyZXJzLCAodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXJba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaHRtbCA9IG1hcmtlZChpbnB1dCwge1xuICAgICAgICAgICAgZ2ZtOiBmYWxzZSxcbiAgICAgICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgICAgIHJlbmRlcmVyXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWFya2VkUmVuZGVyZXJzICYmIG1hcmtlZFJlbmRlcmVycy5saW5lKSB7XG4gICAgICAgICAgICBodG1sID0gQXJyYXkucHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLmZpbHRlci5jYWxsKCQoaHRtbCksIGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g56e76Zmk5YWD57Sg6Ze055qE5Zue6L2m5Y+K5a2X56ym5LiyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZS5ub2RlVHlwZSAhPT0gMztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChlbGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXJrZWRSZW5kZXJlcnMubGluZShlbGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBodG1sIH0gfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzYWZlLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiBzYWZlXG4gICAgICAgICAgICA/IHRoaXMucmVuZGVyU2FmZWx5KGNsYXNzTmFtZSlcbiAgICAgICAgICAgIDogdGhpcy5yZW5kZXJVblNhZmVseShjbGFzc05hbWUpO1xuICAgIH1cbn1cbk1hcmtkb3duWydkZWZhdWx0UHJvcHMnXSA9IHtcbiAgICBzYWZlOiB0cnVlXG59O1xuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01hcmtkb3duL01hcmtkb3duLnRzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwibWFya2VkXCJcbiAqKiBtb2R1bGUgaWQgPSAyMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMyAxNVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiXG4gKiogbW9kdWxlIGlkID0gMjIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tQYWdlcy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlc18yZmRkSSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ucGFnZXMtLWZsdWlkXzNzbl9GIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLndoaXRlXzItekp3IHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ubmlnaHRfMVNsVzEge1xcbiAgYmFja2dyb3VuZDogIzMzMzsgfVxcblxcbi5zZXBpYV9FVll4OCB7XFxuICBiYWNrZ3JvdW5kOiAjZmJmN2YxOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGFnZXNcIjogXCJwYWdlc18yZmRkSVwiLFxuXHRcInBhZ2VzLS1mbHVpZFwiOiBcInBhZ2VzLS1mbHVpZF8zc25fRiBwYWdlc18yZmRkSVwiLFxuXHRcIndoaXRlXCI6IFwid2hpdGVfMi16SndcIixcblx0XCJuaWdodFwiOiBcIm5pZ2h0XzFTbFcxXCIsXG5cdFwic2VwaWFcIjogXCJzZXBpYV9FVll4OFwiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vVmlld2VyU2Nyb2xsYmFyLnNjc3MnKTtcbmxldCBWaWV3ZXJTY3JvbGxiYXIgPSBjbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnQsIHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKChjdXJyZW50IC8gdG90YWwpICogMTAwKS50b0ZpeGVkKDIpICsgJyUnO1xuICAgICAgICByZXR1cm4gKHRoaXMucHJvcHMudmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfX2Fzc2lnbih7fSwgeyBzdHlsZU5hbWU6ICdsb2MtaW5mbycgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBjdXJyZW50KSxcbiAgICAgICAgICAgICAgICBcIi9cIixcbiAgICAgICAgICAgICAgICB0b3RhbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInN1Yi1pbmZvXCIgfSwgcGVyY2VudGFnZSkpKSk7XG4gICAgfVxufTtcblZpZXdlclNjcm9sbGJhciA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgVmlld2VyU2Nyb2xsYmFyKTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclNjcm9sbGJhci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGxiYXJfM25JMU0ge1xcbiAgd2lkdGg6IDJweDtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDEwMHB4OyB9XFxuICAuc2Nyb2xsYmFyXzNuSTFNOmhvdmVyIC5idXR0b25fMXlzMDgge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi50cmFja18zbDdEeSB7XFxuICB3aWR0aDogMnB4O1xcbiAgYmFja2dyb3VuZDogI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDhweDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4udHJhY2stLXBhc3RfMl84U3Ige1xcbiAgYmFja2dyb3VuZDogIzU4NjZkYjtcXG4gIHotaW5kZXg6IDI7IH1cXG5cXG4uYnV0dG9uXzF5czA4IHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogIzFCMjY3RjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDg0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB6LWluZGV4OiAzO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5sb2MtaW5mb18xNW5XQiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMzBweDtcXG4gIGJvdHRvbTogMzBweDtcXG4gIGJhY2tncm91bmQ6ICMyMjI7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTtcXG4gIHBhZGRpbmc6IDdweCAxNXB4OyB9XFxuXFxuLnN1Yi1pbmZvXzNiWWo1IHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICNhYWE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzY3JvbGxiYXJcIjogXCJzY3JvbGxiYXJfM25JMU1cIixcblx0XCJidXR0b25cIjogXCJidXR0b25fMXlzMDhcIixcblx0XCJ0cmFja1wiOiBcInRyYWNrXzNsN0R5XCIsXG5cdFwidHJhY2stLXBhc3RcIjogXCJ0cmFjay0tcGFzdF8yXzhTciB0cmFja18zbDdEeVwiLFxuXHRcImxvYy1pbmZvXCI6IFwibG9jLWluZm9fMTVuV0JcIixcblx0XCJzdWItaW5mb1wiOiBcInN1Yi1pbmZvXzNiWWo1XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTmF2QXJyb3cuc2NzcycpO1xubGV0IE5hdkFycm93ID0gY2xhc3MgTmF2QXJyb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgaGFuZGxlRm9yd2FyZENsaWNrKCkge1xuICAgICAgICB0aGlzLnByb3BzLmZvcndhcmQoKTtcbiAgICB9XG4gICAgaGFuZGxlQmFja3dhcmRDbGljaygpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5iYWNrd2FyZCgpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwibmF2c1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcIm5hdi1sZWZ0XCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQmFja3dhcmRDbGljay5iaW5kKHRoaXMpIH0sIFwiLVwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwibmF2LXJpZ2h0XCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlRm9yd2FyZENsaWNrLmJpbmQodGhpcykgfSwgXCIrXCIpKSk7XG4gICAgfVxufTtcbk5hdkFycm93ID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBOYXZBcnJvdyk7XG5leHBvcnQgZGVmYXVsdCBOYXZBcnJvdztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTmF2QXJyb3cuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZzX1A4Tm15IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDc1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zNzVweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNjBweDsgfVxcblxcbi5uYXYtYXJyb3dfMlZydC0ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAubmF2LWFycm93XzJWcnQtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpOyB9XFxuICAubmF2LWFycm93XzJWcnQtOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG4ubmF2LWxlZnRfMnJTR1gge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ubmF2LXJpZ2h0XzIzTHROIHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hdnNcIjogXCJuYXZzX1A4Tm15XCIsXG5cdFwibmF2LWFycm93XCI6IFwibmF2LWFycm93XzJWcnQtXCIsXG5cdFwibmF2LWxlZnRcIjogXCJuYXYtbGVmdF8yclNHWCBuYXYtYXJyb3dfMlZydC1cIixcblx0XCJuYXYtcmlnaHRcIjogXCJuYXYtcmlnaHRfMjNMdE4gbmF2LWFycm93XzJWcnQtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tDb250YWluZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLndoaXRlXzNEbnFoIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cXG5cXG4ubmlnaHRfMU5xeFMge1xcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxcblxcbi5zZXBpYV8xWjJCSCB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmMWU1OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8zRG5xaFwiLFxuXHRcIm5pZ2h0XCI6IFwibmlnaHRfMU5xeFNcIixcblx0XCJzZXBpYVwiOiBcInNlcGlhXzFaMkJIXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0ljb24nO1xuaW1wb3J0IHsgRmFkZSwgU2xpZGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9hbmltYXRpb25zJztcbmltcG9ydCBWaWV3ZXJQcmVmZXJlbmNlIGZyb20gJy4vVmlld2VyUHJlZmVyZW5jZSc7XG5pbXBvcnQgVmlld2VyTmF2IGZyb20gJy4vVmlld2VyTmF2JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgaXNEZXNjZW5kYW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbS9pc0Rlc2NlbmRhbnQnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJQYW5lbC5zY3NzJyk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IGJvb2tJZCA9IGNvbmZpZy5ib29rSWQ7XG4gICAgY29uc3QgeyBzaG93OiBzaG93UGFuZWwgfSA9IHNlbGVjdG9ycy52aWV3ZXIucGFuZWwoc3RhdGUpO1xuICAgIGNvbnN0IHsgc2hvdzogc2hvd1ByZWZlcmVuY2UgfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJlZmVyZW5jZShzdGF0ZSk7XG4gICAgY29uc3QgeyBzaG93OiBzaG93TmF2aWdhdGlvbiB9ID0gc2VsZWN0b3JzLnZpZXdlci5uYXZpZ2F0aW9uKHN0YXRlKTtcbiAgICBjb25zdCB7IHRpdGxlIH0gPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va3MnLCBib29rSWQpKHN0YXRlKTtcbiAgICByZXR1cm4geyBjb25maWcsIHNob3dQYW5lbCwgc2hvd1ByZWZlcmVuY2UsIHRpdGxlLCBzaG93TmF2aWdhdGlvbiB9O1xufTtcbmxldCBWaWV3ZXJQYW5lbCA9IGNsYXNzIFZpZXdlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlID0gdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVHbG9iYWxDbGljayA9IHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlR2xvYmFsQ2xpY2soZSkge1xuICAgICAgICBjb25zdCB7IHNob3dQcmVmZXJlbmNlLCBzaG93TmF2aWdhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFpc0Rlc2NlbmRhbnQodGhpcy5uYXYsIGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHNob3dOYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlck5hdmlnYXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlck5hdmlnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLnByZWYsIGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgaWYgKHNob3dQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclByZWZlcmVuY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kZWxWaWV3ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBjb25maWc6IHsgaXNDYWxjTW9kZSwgaXNUb3VjaE1vZGUgfSwgc2hvd1BhbmVsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoIWlzQ2FsY01vZGUgJiYgIWlzVG91Y2hNb2RlKSB7XG4gICAgICAgICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBzaG93ID0geSA8IDkwO1xuICAgICAgICAgICAgaWYgKHNob3dQYW5lbCAhPT0gc2hvdykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJQYW5lbChzaG93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVHbG9iYWxDbGljayk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUdsb2JhbENsaWNrKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBzaG93UGFuZWwsIHNob3dQcmVmZXJlbmNlLCBzaG93TmF2aWdhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlLCBudWxsLCAoc2hvd1BhbmVsIHx8IHNob3dQcmVmZXJlbmNlIHx8IHNob3dOYXZpZ2F0aW9uKSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJ2aWV3ZXItcGFuZWxcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwiYmFja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBuYW1lOiBcImJhY2tcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiXFx1OEZENFxcdTU2REVcIikpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiByZWYgPT4geyB0aGlzLm5hdiA9IHJlZjsgfSwgc3R5bGVOYW1lOiBcImNvbnRlbnRzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgXCJcXHU3NkVFXFx1NUY1NVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGYWRlLCBudWxsLCBzaG93TmF2aWdhdGlvbiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChWaWV3ZXJOYXYsIG51bGwpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGVOYW1lOiBcInRpdGxlXCIgfSwgdGl0bGUpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiA9PiB7IHRoaXMucHJlZiA9IHJlZjsgfSwgc3R5bGVOYW1lOiBcInByZWZlcmVuY2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgbmFtZTogXCJwcmVmZXJlbmNlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFkZSwgbnVsbCwgc2hvd1ByZWZlcmVuY2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVmlld2VyUHJlZmVyZW5jZSwgbnVsbCkpKSkpKSkpKTtcbiAgICB9XG59O1xuVmlld2VyUGFuZWwgPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2ggPT4gKHtcbiAgICAgICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICAgIH0pKSxcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFZpZXdlclBhbmVsKTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhbmVsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwudHN4XG4gKiovIiwiaW1wb3J0IEZhZGUgZnJvbSAnLi9GYWRlJztcbmltcG9ydCBTbGlkZSBmcm9tICcuL1NsaWRlJztcbmV4cG9ydCB7IEZhZGUsIFNsaWRlIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL2FuaW1hdGlvbnMudHNcbiAqKi8iLCJpbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSc7XG5leHBvcnQgZGVmYXVsdCBTbGlkZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NsaWRlLnNjc3MnKTtcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAsIHsgY29tcG9uZW50OiBcImRpdlwiLCB0cmFuc2l0aW9uTmFtZTogc3R5bGVzLCB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAzMDAsIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDMwMCB9LCBwcm9wcy5jaGlsZHJlbikpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9TbGlkZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDIzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZW50ZXJfMktlUG0ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIG9wYWNpdHk6IDAuMDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuXFxuLmVudGVyQWN0aXZlXzdKRy1IIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4ubGVhdmVfM0FmZWcge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7IH1cXG5cXG4uc2VhdmVBY3RpdmVfMVJ0VHMge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJlbnRlclwiOiBcImVudGVyXzJLZVBtXCIsXG5cdFwiZW50ZXJBY3RpdmVcIjogXCJlbnRlckFjdGl2ZV83SkctSFwiLFxuXHRcImxlYXZlXCI6IFwibGVhdmVfM0FmZWdcIixcblx0XCJzZWF2ZUFjdGl2ZVwiOiBcInNlYXZlQWN0aXZlXzFSdFRzXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgVEhFTUVTIGFzIFRIRU1FX0RFRlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvdmlld2VyRGVmcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MnKTtcbmNvbnN0IE1BWF9GT05UX1NJWkUgPSAyMDtcbmNvbnN0IE1JTl9GT05UX1NJWkUgPSAxMjtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGZvbnRTaXplLCBpc1Njcm9sbE1vZGUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKTtcbiAgICByZXR1cm4geyBmb250U2l6ZSwgaXNTY3JvbGxNb2RlIH07XG59O1xubGV0IFZpZXdlclByZWZlcmVuY2UgPSBjbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGhhbmRsZURlY0ZvbnRTaXplQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHsgZm9udFNpemUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgaXNEZWNEaXNhYmxlZCB9ID0gdGhpcy5nZXRCdG5TdGF0dXMoKTtcbiAgICAgICAgaWYgKCFpc0RlY0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMuY2hhbmdlVmlld2VyRm9udFNpemUoZm9udFNpemUgLSAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVJbmNGb250U2l6ZUNsaWNrKCkge1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlzSW5jRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKCk7XG4gICAgICAgIGlmICghaXNJbmNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNoYW5nZVZpZXdlckZvbnRTaXplKGZvbnRTaXplICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlVGhlbWVDbGljayhrZXkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNoYW5nZVZpZXdlclRoZW1lKGtleSk7XG4gICAgfVxuICAgIGhhbmRsZVRvZ2dsZVNjcm9sbE1vZGVDbGljayh2YWwpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclNjcm9sbE1vZGUodmFsKTtcbiAgICB9XG4gICAgZ2V0QnRuU3RhdHVzKCkge1xuICAgICAgICBjb25zdCB7IGZvbnRTaXplIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpc0RlY0Rpc2FibGVkID0gZm9udFNpemUgPD0gTUlOX0ZPTlRfU0laRTtcbiAgICAgICAgY29uc3QgaXNJbmNEaXNhYmxlZCA9IGZvbnRTaXplID49IE1BWF9GT05UX1NJWkU7XG4gICAgICAgIHJldHVybiB7IGlzRGVjRGlzYWJsZWQsIGlzSW5jRGlzYWJsZWQgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGlzRGVjRGlzYWJsZWQsIGlzSW5jRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKCk7XG4gICAgICAgIGNvbnN0IHsgaXNTY3JvbGxNb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBidG5EZWNDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2J0bic6ICFpc0RlY0Rpc2FibGVkLFxuICAgICAgICAgICAgJ2J0bi0tZGlzYWJsZWQnOiBpc0RlY0Rpc2FibGVkXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBidG5JbmNDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICAgICAgJ2J0bic6ICFpc0luY0Rpc2FibGVkLFxuICAgICAgICAgICAgJ2J0bi0tZGlzYWJsZWQnOiBpc0luY0Rpc2FibGVkXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwidmlld2VyLXByZWZlcmVuY2VcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24tZm9udC1zaXplXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IGJ0bkRlY0NsYXNzLCBvbkNsaWNrOiB0aGlzLmhhbmRsZURlY0ZvbnRTaXplQ2xpY2suYmluZCh0aGlzKSB9LCBcIkEtXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlTmFtZTogYnRuSW5jQ2xhc3MsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlSW5jRm9udFNpemVDbGljay5iaW5kKHRoaXMpIH0sIFwiQStcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24tc2Nyb2xsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibGFiZWxcIiB9LCBcIlxcdTZFREFcXHU1MkE4XFx1NkEyMVxcdTVGMEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpdGNoZXIsIHsgdmFsdWU6IGlzU2Nyb2xsTW9kZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlVG9nZ2xlU2Nyb2xsTW9kZUNsaWNrLmJpbmQodGhpcykgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHN0eWxlTmFtZTogXCJvcHRpb24tdGhlbWVcIiB9LCBfLmtleXMoVEhFTUVfREVGUykubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IHN0eWxlc1trZXkudG9Mb3dlckNhc2UoKV0sIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hhbmdlVGhlbWVDbGljay5iaW5kKHRoaXMsIGtleSkgfSwga2V5KSk7XG4gICAgICAgICAgICAgICAgfSkpKSkpO1xuICAgIH1cbn07XG5WaWV3ZXJQcmVmZXJlbmNlID0gX19kZWNvcmF0ZShbXG4gICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGRpc3BhdGNoID0+ICh7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9KSksXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBWaWV3ZXJQcmVmZXJlbmNlKTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdlclByZWZlcmVuY2U7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnRzeFxuICoqLyIsImltcG9ydCBTd2l0Y2hlciBmcm9tICcuL1N3aXRjaGVyJztcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJyk7XG5sZXQgU3dpdGNoZXIgPSBjbGFzcyBTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB2YWx1ZTogaXNPbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNPbiA9PT0gJzEnIHx8IGlzT24gPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGlzT24gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXNPbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdGF0ZSA9IEJvb2xlYW4oaXNPbikgPyAnb24nIDogJ29mZic7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIHx8ICcnLCBzdHlsZU5hbWU6IFwic3dpdGNoZXItd3JhcFwiIH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLnRpdGxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0aGlzLnByb3BzLnRpdGxlKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgb25DbGljazogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5wcm9wcy5vcHRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCflvZPliY3mlbDmja7mnInor6/vvIzlsIbkvb/nlKjpu5jorqTmlbDmja7vvIEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+ayoeaciee7mSBvcHRpb25zIOaXtuW/hemhu+S9v+eUqOW4g+WwlOWei+eahCB2YWx1Ze+8gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHN0eWxlTmFtZTogYHN3aXRjaGVyLS0ke3N0YXRlfWAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcInN3aXRjaGVyLWJ1dHRvblwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwic3dpdGNoZXItdHJhY2tcIiB9KSkpKTtcbiAgICB9XG59O1xuU3dpdGNoZXIgPSBfX2RlY29yYXRlKFtcbiAgICBDU1NNb2R1bGVzKHN0eWxlcywge1xuICAgICAgICBhbGxvd011bHRpcGxlOiB0cnVlXG4gICAgfSlcbl0sIFN3aXRjaGVyKTtcbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcylcbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucHJvcHMub24gPyAnb24nIDogJ29mZidcbi8vICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHN3aXRjaGVyJ1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9fc3dpdGNoZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zd2l0Y2hlci13cmFwXzNVTUFVIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5zd2l0Y2hlcl9HM240XywgLnN3aXRjaGVyLS1vZmZfMUVvT1UsIC5zd2l0Y2hlci0tb25fMnhpd08ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cXG5cXG4uc3dpdGNoZXItdHJhY2tfeHZoamcge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxcblxcbi5zd2l0Y2hlci0tb2ZmXzFFb09VIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLWJ1dHRvbl8ya0hHTCB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnN3aXRjaGVyLS1vbl8yeGl3TyAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDIwcHg7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBiYWNrZ3JvdW5kOiAjMmU0MGQyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3dpdGNoZXItd3JhcFwiOiBcInN3aXRjaGVyLXdyYXBfM1VNQVVcIixcblx0XCJzd2l0Y2hlclwiOiBcInN3aXRjaGVyX0czbjRfXCIsXG5cdFwic3dpdGNoZXItLW9mZlwiOiBcInN3aXRjaGVyLS1vZmZfMUVvT1VcIixcblx0XCJzd2l0Y2hlci0tb25cIjogXCJzd2l0Y2hlci0tb25fMnhpd09cIixcblx0XCJzd2l0Y2hlci1idXR0b25cIjogXCJzd2l0Y2hlci1idXR0b25fMmtIR0xcIixcblx0XCJzd2l0Y2hlci10cmFja1wiOiBcInN3aXRjaGVyLXRyYWNrX3h2aGpnXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMTFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclByZWZlcmVuY2Uuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1wcmVmZXJlbmNlX2tMWVZXIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2NXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBjb2xvcjogIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLm9wdGlvbl8zb0NRbyB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbl8zb0NRbzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLm9wdGlvbi1mb250LXNpemVfMTJIUjIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG5fbzVGcDQsIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG4tLWRpc2FibGVkXzFpMTk3IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuX281RnA0OmZpcnN0LWNoaWxkLCAub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiAuYnRuLS1kaXNhYmxlZF8xaTE5NzpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG4tLWRpc2FibGVkXzFpMTk3IHtcXG4gICAgY29sb3I6ICNkZGQ7IH1cXG5cXG4ub3B0aW9uLXNjcm9sbF8yRVEwbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLm9wdGlvbi1zY3JvbGxfMkVRMG4gLmxhYmVsX2lEUmdCIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5vcHRpb24tc2Nyb2xsXzJFUTBuIC5zd2l0Y2hlcl8zN2xmayB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcblxcbi5vcHRpb24tdGhlbWVfNGtxQVkge1xcbiAgcGFkZGluZzogNXB4IDA7IH1cXG4gIC5vcHRpb24tdGhlbWVfNGtxQVkgc3BhbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTllbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLndoaXRlXzNfVnZjIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7IH1cXG5cXG4ubmlnaHRfM2NNdGcge1xcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxcblxcbi5zZXBpYV8tU0dIdiB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmMWU1OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXByZWZlcmVuY2VcIjogXCJ2aWV3ZXItcHJlZmVyZW5jZV9rTFlWV1wiLFxuXHRcIm9wdGlvblwiOiBcIm9wdGlvbl8zb0NRb1wiLFxuXHRcIm9wdGlvbi1mb250LXNpemVcIjogXCJvcHRpb24tZm9udC1zaXplXzEySFIyIG9wdGlvbl8zb0NRb1wiLFxuXHRcImJ0blwiOiBcImJ0bl9vNUZwNFwiLFxuXHRcImJ0bi0tZGlzYWJsZWRcIjogXCJidG4tLWRpc2FibGVkXzFpMTk3XCIsXG5cdFwib3B0aW9uLXNjcm9sbFwiOiBcIm9wdGlvbi1zY3JvbGxfMkVRMG4gb3B0aW9uXzNvQ1FvXCIsXG5cdFwibGFiZWxcIjogXCJsYWJlbF9pRFJnQlwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfMzdsZmtcIixcblx0XCJvcHRpb24tdGhlbWVcIjogXCJvcHRpb24tdGhlbWVfNGtxQVkgb3B0aW9uXzNvQ1FvXCIsXG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8zX1Z2Y1wiLFxuXHRcIm5pZ2h0XCI6IFwibmlnaHRfM2NNdGdcIixcblx0XCJzZXBpYVwiOiBcInNlcGlhXy1TR0h2XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYnJvd3Nlci9wcmV2ZW50U2Nyb2xsJztcbmltcG9ydCAqIGFzIHZpZXdlclV0aWxzIGZyb20gJy4uL1ZpZXdlci51dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJOYXYuc2NzcycpO1xuY29uc3QgSlNfTkFWX0hPT0sgPSAnYS5qcy1ib29rLW5hdic7XG5jb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGJvb2tJZCB9ID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpO1xuICAgIGNvbnN0IG5hdiA9IHNlbGVjdG9ycy52aWV3ZXIubmF2RGF0YShib29rSWQpKHN0YXRlKTtcbiAgICBjb25zdCB7IHBlcmNlbnRhZ2U6IHZpZXdlclBlcmNlbnRhZ2UgfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoYm9va0lkKShzdGF0ZSk7XG4gICAgY29uc3QgY29tcHV0ZWRQYWdlcyA9IHNlbGVjdG9ycy52aWV3ZXIuY29tcHV0ZWQoYm9va0lkKShzdGF0ZSk7XG4gICAgcmV0dXJuIHsgbmF2LCB2aWV3ZXJQZXJjZW50YWdlLCBjb21wdXRlZFBhZ2VzIH07XG59O1xubGV0IFZpZXdlck5hdiA9IGNsYXNzIFZpZXdlck5hdiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hdkxpbmtDbGljayA9IHRoaXMuaGFuZGxlTmF2TGlua0NsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZU5hdkxpbmtDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBjb21wdXRlZFBhZ2VzLCB2aWV3ZXJQZXJjZW50YWdlIC8qIOS5n+iuuOS8mueUqOWIsCAqLyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaHJlZiA9ICQoZS50YXJnZXQpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VObyA9IHZpZXdlclV0aWxzLnJlc29sdmVCb29rTG9jYXRpb24oaHJlZiwgY29tcHV0ZWRQYWdlcyk7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKHBhZ2VObyAtIDEpIC8gY29tcHV0ZWRQYWdlcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmFjdGlvbnMudmlld2VySnVtcFRvKHBlcmNlbnRhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIFRPRE86IGpzIGhvb2sg5bi46YePXG4gICAgICAgIHByZXZlbnRTY3JvbGwuaW5pdCgnLmpzLW5hdi1zY3JvbGwnKTtcbiAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgSlNfTkFWX0hPT0ssIHRoaXMuaGFuZGxlTmF2TGlua0NsaWNrKTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHByZXZlbnRTY3JvbGwuZGVzdHJveSgnLmpzLW5hdi1zY3JvbGwnKTtcbiAgICAgICAgJGJvZHkub2ZmKCdjbGljaycsIEpTX05BVl9IT09LLCB0aGlzLmhhbmRsZU5hdkxpbmtDbGljayk7XG4gICAgfVxuICAgIHJlbmRlckxpbmsocmVmLCBoYXNoLCBsYWJlbCkge1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImpzLWJvb2stbmF2XCIsIGhyZWY6IGAjJHtyZWZ9JCR7aGFzaH1gIH0sIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwianMtYm9vay1uYXZcIiwgaHJlZjogYCMke3JlZn1gIH0sIGxhYmVsKTtcbiAgICB9XG4gICAgcmVuZGVyTmF2KG5hdkxpc3QpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgbnVsbCwgbmF2TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckxpbmsoaXRlbS5yZWYsIGl0ZW0uaGFzaCwgaXRlbS5sYWJlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTmF2KGl0ZW0uY2hpbGRyZW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogaW5kZXggfSwgdGhpcy5yZW5kZXJMaW5rKGl0ZW0ucmVmLCBpdGVtLmhhc2gsIGl0ZW0ubGFiZWwpKSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBuYXYgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJqcy1uYXYtc2Nyb2xsXCIsIHN0eWxlTmFtZTogXCJ2aWV3ZXItbmF2XCIgfSwgdGhpcy5yZW5kZXJOYXYobmF2KSkpO1xuICAgIH1cbn07XG5WaWV3ZXJOYXYgPSBfX2RlY29yYXRlKFtcbiAgICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2ggPT4gKHtcbiAgICAgICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMsIGRpc3BhdGNoKVxuICAgIH0pKSxcbiAgICBDU1NNb2R1bGVzKHN0eWxlcylcbl0sIFZpZXdlck5hdik7XG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJOYXY7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYudHN4XG4gKiovIiwiLyoqXG4gKiDpmLvmraIgc2VsZWN0b3Ig5Lul5aSW55qE5YWD57Sg5rua5YqoXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4MDI0NjcvcHJldmVudC1zY3JvbGxpbmctb2YtcGFyZW50LWVsZW1lbnRcbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoZXYpIHtcbiAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gJHRoaXMuaW5uZXJIZWlnaHQoKTtcbiAgICBjb25zdCBkZWx0YSA9IChldi50eXBlID09PSAnRE9NTW91c2VTY3JvbGwnID9cbiAgICAgICAgZXYub3JpZ2luYWxFdmVudC5kZXRhaWwgKiAtNDAgOlxuICAgICAgICBldi5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEpO1xuICAgIGNvbnN0IHVwID0gZGVsdGEgPiAwO1xuICAgIGNvbnN0IHByZXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBpZiAoIXVwICYmIC1kZWx0YSA+IHNjcm9sbEhlaWdodCAtIGhlaWdodCAtIHNjcm9sbFRvcCkge1xuICAgICAgICAvLyBTY3JvbGxpbmcgZG93biwgYnV0IHRoaXMgd2lsbCB0YWtlIHVzIHBhc3QgdGhlIGJvdHRvbS5cbiAgICAgICAgJHRoaXMuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodCk7XG4gICAgICAgIHJldHVybiBwcmV2ZW50KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVwICYmIGRlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICAgIC8vIFNjcm9sbGluZyB1cCwgYnV0IHRoaXMgd2lsbCB0YWtlIHVzIHBhc3QgdGhlIHRvcC5cbiAgICAgICAgJHRoaXMuc2Nyb2xsVG9wKDApO1xuICAgICAgICByZXR1cm4gcHJldmVudCgpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0OiAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ0RPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwnLCBzZWxlY3Rvciwgc2Nyb2xsSGFuZGxlcik7XG4gICAgfSxcbiAgICBkZXN0cm95OiAoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdET01Nb3VzZVNjcm9sbCBtb3VzZXdoZWVsJywgc2VsZWN0b3IsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3V0aWxzL2Jyb3dzZXIvcHJldmVudFNjcm9sbC50c1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyTmF2LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyTmF2LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1uYXZfU0wyTVMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MHB4O1xcbiAgbGVmdDogLTIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAudmlld2VyLW5hdl9TTDJNUyB1bCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS44OyB9XFxuICAgIC52aWV3ZXItbmF2X1NMMk1TIHVsIGxpIGEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLW5hdlwiOiBcInZpZXdlci1uYXZfU0wyTVNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclBhbmVsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXBhbmVsXzEwN01ZIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTkwO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRhaW5lcl8zTDc4UiB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfMW1WckMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5iYWNrXzFtVnJDIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5iYWNrXzFtVnJDIGEgc3BhbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5iYWNrXzFtVnJDIHNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRlbnRzXzE2aUdRIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwMHB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5jb250ZW50c18xNmlHUSBzcGFuIHtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4udGl0bGVfM01JcFAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogNjBweDsgfVxcblxcbi5wcmVmZXJlbmNlXzJKUVJpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXBhbmVsXCI6IFwidmlld2VyLXBhbmVsXzEwN01ZXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyXzNMNzhSXCIsXG5cdFwiYmFja1wiOiBcImJhY2tfMW1WckNcIixcblx0XCJjb250ZW50c1wiOiBcImNvbnRlbnRzXzE2aUdRXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTUlwUFwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzJKUVJpXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvb2tQYWdlcyBmcm9tICcuL0Jvb2tQYWdlcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuY29uc3QgQm9va0NoYXB0ZXIgPSAoeyBpZCwgbWFya2Rvd24gfSkgPT4ge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGlkOiBpZCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tQYWdlcywgeyBwYWdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IFttYXJrZG93bl1cbiAgICAgICAgICAgICAgICB9XSB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDaGFwdGVycyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHRyaWdnZXJVcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHsgb25SYXdEYXRhTW91bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChvblJhd0RhdGFNb3VudCkge1xuICAgICAgICAgICAgb25SYXdEYXRhTW91bnQodGhpcy5jaGFwdGVycyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJVcGRhdGUoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlclVwZGF0ZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYm9va0ZsZXNoIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHJlZiA9PiB0aGlzLmNoYXB0ZXJzID0gcmVmIH0sIChib29rRmxlc2ggfHwgW10pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb29rQ2hhcHRlciwgeyBpZDogaXRlbS5pZCwgbWFya2Rvd246IGl0ZW0ubWFya2Rvd24sIGtleTogaXRlbS5pZCB9KSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va0NoYXB0ZXJzLnRzeFxuICoqLyIsImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzXG4gKiovIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmcuc2Nzcyc7XG5sZXQgTG9hZGluZyA9IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGR5bmFtaWNUZXh0OiAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHluYW1pY1RleHQubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGR5bmFtaWNUZXh0OiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljVGV4dDogdGhpcy5zdGF0ZS5keW5hbWljVGV4dCArICcuJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCwgY2VudGVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGR5bmFtaWNUZXh0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCB3cmFwQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdsb2FkaW5nLXdyYXAtLWNlbnRlcic6IGNlbnRlcixcbiAgICAgICAgICAgICdsb2FkaW5nLXdyYXAnOiAhY2VudGVyXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IHdyYXBDbGFzcyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZU5hbWU6IFwidGV4dC1sb2FkaW5nXCIgfSwgdGV4dCArIGR5bmFtaWNUZXh0KSkpO1xuICAgIH1cbn07XG5Mb2FkaW5nID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBMb2FkaW5nKTtcbkxvYWRpbmdbJ2RlZmF1bHRQcm9wcyddID0ge1xuICAgIHRleHQ6ICfliqDovb3kuK0nXG59O1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTG9hZGluZy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICBtYXJnaW46IDMwcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5sb2FkaW5nLXdyYXBfaHR5WXoge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5sb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0LWxvYWRpbmdcIjogXCJ0ZXh0LWxvYWRpbmdfM2VmcWhcIixcblx0XCJsb2FkaW5nLXdyYXBcIjogXCJsb2FkaW5nLXdyYXBfaHR5WXpcIixcblx0XCJsb2FkaW5nLXdyYXAtLWNlbnRlclwiOiBcImxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9