exports.ids = [1];
exports.modules = {

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _redux = __webpack_require__(278);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _ViewerContainer = __webpack_require__(279);
	
	var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);
	
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
	
	var styles = __webpack_require__(326);
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
	}), (0, _reactCssModules2.default)(styles)], Viewer);
	exports.default = Viewer;

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _redux = __webpack_require__(278);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _BookContainer = __webpack_require__(280);
	
	var _BookContainer2 = _interopRequireDefault(_BookContainer);
	
	var _ViewerPanel = __webpack_require__(300);
	
	var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);
	
	var _BookChapters = __webpack_require__(321);
	
	var _BookChapters2 = _interopRequireDefault(_BookChapters);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Loading = __webpack_require__(322);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _utils = __webpack_require__(96);
	
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

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPages = __webpack_require__(281);
	
	var _BookPages2 = _interopRequireDefault(_BookPages);
	
	var _ViewerScrollbar = __webpack_require__(292);
	
	var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _redux = __webpack_require__(278);
	
	var _reactRedux = __webpack_require__(93);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _NavArrow = __webpack_require__(295);
	
	var _NavArrow2 = _interopRequireDefault(_NavArrow);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(298);
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

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var _BookPage = __webpack_require__(282);
	
	var _BookPage2 = _interopRequireDefault(_BookPage);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames2 = __webpack_require__(125);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _selectors = __webpack_require__(115);
	
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
	
	var styles = __webpack_require__(290);
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

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(125);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _Markdown = __webpack_require__(283);
	
	var _Markdown2 = _interopRequireDefault(_Markdown);
	
	var _reactRedux = __webpack_require__(93);
	
	var _redux = __webpack_require__(278);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(115);
	
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
	
	var styles = __webpack_require__(288);
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

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Markdown = __webpack_require__(284);
	
	var _Markdown2 = _interopRequireDefault(_Markdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Markdown2.default;

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(285);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _jquery = __webpack_require__(286);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactMarkdown = __webpack_require__(287);
	
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

/***/ 285:
/***/ function(module, exports) {

	module.exports = require("marked");

/***/ },

/***/ 286:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = require("react-markdown");

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(291);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(293);
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

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(294);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(296);
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

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(297);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(299);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(61);
	
	var _Icon = __webpack_require__(123);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _animations = __webpack_require__(301);
	
	var _ViewerPreference = __webpack_require__(306);
	
	var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);
	
	var _ViewerNav = __webpack_require__(314);
	
	var _ViewerNav2 = _interopRequireDefault(_ViewerNav);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRedux = __webpack_require__(93);
	
	var _redux = __webpack_require__(278);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _isDescendant = __webpack_require__(101);
	
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
	
	var styles = __webpack_require__(319);
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
	
	            return _react2.default.createElement(_animations.Slide, null, (showPanel || showPreference || showNavigation) && _react2.default.createElement("div", { styleName: "viewer-panel" }, _react2.default.createElement("div", { styleName: "container" }, _react2.default.createElement("div", { styleName: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "返回"))), _react2.default.createElement("div", { ref: function ref(_ref) {
	                    _this2.nav = _ref;
	                }, styleName: "contents" }, _react2.default.createElement("span", null, "目录"), _react2.default.createElement(_animations.Fade, null, showNavigation && _react2.default.createElement(_ViewerNav2.default, null))), _react2.default.createElement("span", { styleName: "title" }, title), _react2.default.createElement("div", { ref: function ref(_ref2) {
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

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Slide = exports.Fade = undefined;
	
	var _Fade = __webpack_require__(203);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _Slide = __webpack_require__(302);
	
	var _Slide2 = _interopRequireDefault(_Slide);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Fade = _Fade2.default;
	exports.Slide = _Slide2.default;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Slide = __webpack_require__(303);
	
	var _Slide2 = _interopRequireDefault(_Slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slide2.default;

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(205);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = __webpack_require__(304);
	
	exports.default = function (props) {
	    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
	};

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(305);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Switcher = __webpack_require__(307);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRedux = __webpack_require__(93);
	
	var _redux = __webpack_require__(278);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _viewerDefs = __webpack_require__(311);
	
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
	
	var styles = __webpack_require__(312);
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
	            return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), _react2.default.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "滚动模式"), _react2.default.createElement(_Switcher2.default, { value: isScrollMode, onChange: this.handleToggleScrollModeClick.bind(this) })), _react2.default.createElement("li", { styleName: "option-theme" }, _lodash2.default.keys(_viewerDefs.THEMES).map(function (key, index) {
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

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switcher = __webpack_require__(308);
	
	var _Switcher2 = _interopRequireDefault(_Switcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switcher2.default;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
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
	
	var styles = __webpack_require__(309);
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

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(310);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(313);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _redux = __webpack_require__(278);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _preventScroll = __webpack_require__(315);
	
	var _preventScroll2 = _interopRequireDefault(_preventScroll);
	
	var _Viewer = __webpack_require__(316);
	
	var viewerUtils = _interopRequireWildcard(_Viewer);
	
	var _jquery = __webpack_require__(286);
	
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
	
	var styles = __webpack_require__(317);
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

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _jquery = __webpack_require__(286);
	
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

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(318);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer-nav_SL2MS {\n  position: absolute;\n  top: 80px;\n  left: -20px;\n  height: 100%;\n  background: #fff;\n  overflow-y: scroll;\n  padding: 20px 20px 20px 0;\n  border-radius: 3px;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  width: 300px;\n  height: 400px; }\n  .viewer-nav_SL2MS ul {\n    margin-left: 20px;\n    text-align: left;\n    line-height: 1.8; }\n    .viewer-nav_SL2MS ul li a {\n      display: block;\n      border-bottom: 1px solid #ddd; }\n", ""]);
	
	// exports
	exports.locals = {
		"viewer-nav": "viewer-nav_SL2MS"
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(320);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookPages = __webpack_require__(281);
	
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

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Loading = __webpack_require__(323);
	
	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Loading2.default;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(127);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _classnames = __webpack_require__(125);
	
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
	
	var styles = __webpack_require__(324);
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

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(325);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
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

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(327);
	    var insertCss = __webpack_require__(131);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(130)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewer {\n  background: #eee; }\n", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vTWFya2Rvd24udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hcmtlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpxdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzPzY3YjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tQYWdlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2Nzcz80MjJkIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJTY3JvbGxiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvTmF2QXJyb3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzPzI1MDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL0Jvb2tDb250YWluZXIuc2Nzcz9kYzcxIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclBhbmVsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9hbmltYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS5zY3NzPzYyYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU2xpZGUvU2xpZGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvU3dpdGNoZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1N3aXRjaGVyL19zd2l0Y2hlci5zY3NzP2EyMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzcz8yOGQwIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvdXRpbHMvYnJvd3Nlci9wcmV2ZW50U2Nyb2xsLnRzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2Nzcz8yZjdhIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzcz9hNmFmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ2hhcHRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL0xvYWRpbmcuc2Nzcz8xMGRiIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvVmlld2VyLnNjc3M/ZDVmZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDSDs7QUFDSzs7QUFFcEI7Ozs7QUFDb0I7Ozs7QUFDYzs7OztBQUNqRDs7S0FBMkM7O0FBQzNDOztLQUF1Qzs7QUFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeEQsS0FBWSxTQUFVLG9CQUFpQjtBQVN2QyxLQUFxQixrQkFBRyx5QkFBTSxPQUFVO0FBQ3RDLFNBQVksU0FBVyxTQUFPLE9BQUc7QUFDakMsU0FBVSxPQUFZLFVBQU8sT0FBTyxPQUFRLFNBQVMsUUFBTztBQUV0RDtBQUdSO0FBSFM7QUFHUjtBQVNEO0FBQTZDOztBQUkzQyxxQkFBaUI7QUFDZjs7cUhBQVk7O0FBQ1IsZUFBTyxTQUFRLE1BQU8sT0FDNUI7O0FBRXFCOzs7OytDQUFVLFdBQVc7QUFDbEMsb0JBQUMsQ0FBRSxpQkFBUSxRQUFLLEtBQU0sT0FBWSxjQUFJLENBQUUsaUJBQVEsUUFBSyxLQUFNLE9BQ25FO0FBRWlCOzs7O0FBQ1gsa0JBQU0sTUFBUSxRQUFpQixpQkFBSyxLQUMxQztBQUVNOzs7O0FBQ0csb0JBQ0wsZ0JBQWEsd0NBQVUsV0FBUyxVQUFNLE9BQU0sS0FBTSxNQUFLLEtBQU8sU0FDNUQsZ0JBQWMseUNBR3BCO0FBQ0Q7Ozs7O0FBL0JELCtDQUNpQjtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDWEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBeUMsMkJBQTJCO0FBQ3BFLG9EQUFtRDs7Ozs7Ozs7QUNWbkQ7QUFDQTs7O0FBR0E7QUFDQSxvQ0FBbUMscUJBQXFCLEVBQUU7O0FBRTFEIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgVmlld0NvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvVmlld2VyQ29udGFpbmVyJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXIuc2NzcycpXG5cbmludGVyZmFjZSBBbGxQcm9wcyB7XG4gIGJvb2s6IHtcbiAgICB0aXRsZTogc3RyaW5nXG4gIH1cbiAgYWN0aW9uczogdHlwZW9mIGFjdGlvbnNcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCBib29rSWQgPSBvd25Qcm9wcy5wYXJhbXMuaWRcbiAgY29uc3QgYm9vayA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rcycsIGJvb2tJZCkoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICBib29rXG4gIH1cbn1cblxuQGNvbm5lY3Q8QWxsUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMgYXMge30sIGRpc3BhdGNoKVxuICB9KVxuKVxuQENTU01vZHVsZXMoc3R5bGVzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld2VyIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB2b2lkPiB7XG5cbiAgYm9va0lkOiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuYm9va0lkID0gcHJvcHMucGFyYW1zLmlkXG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIV8uaXNFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFfLmlzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmluaXRpYWxpemVWaWV3ZXIodGhpcy5ib29rSWQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgYm9keUNsYXNzPVwidmlld2VyXCIgdGl0bGU9e3RoaXMucHJvcHMuYm9vay50aXRsZX0+XG4gICAgICAgIDxWaWV3Q29udGFpbmVyLz5cbiAgICAgIDwvRG9jQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgQm9va0NvbnRhaW5lciBmcm9tICcuL0Jvb2tDb250YWluZXInXG5pbXBvcnQgVmlld2VyUGFuZWwgZnJvbSAnLi9WaWV3ZXJQYW5lbCdcbmltcG9ydCBCb29rQ2hhcHRlcnMgZnJvbSAnLi9Cb29rQ2hhcHRlcnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBQQUdFX0xJTUlUID0gNVxuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuaW50ZXJmYWNlIExvY2FsU3RhdGUge1xuICBzaG93UGFnZUluZm8/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgYm9va0lkPzogc3RyaW5nXG4gIGJvb2s/OiB7XG4gICAgdGl0bGU6IHN0cmluZ1xuICB9XG4gIGJvb2tDb250ZW50Pzoge1xuICAgIG5hdjogYW55XG4gICAgZmxlc2g6IFRCb29rRmxlc2hcbiAgfVxuICBzZXNzaW9uPzoge1xuICAgIGRldGVybWluZWQ6IGJvb2xlYW5cbiAgICB1c2VyOiB7XG4gICAgICByb2xlOiBzdHJpbmdcbiAgICB9XG4gIH1cbiAgaXNGZXRjaGluZ1Byb2dyZXNzPzogYm9vbGVhblxuICBjb21wdXRlZFBhZ2VzPzogVEJvb2tQYWdlW11cbiAgY29uZmlnPzogVmlld2VyQ29uZmlnXG4gIGFjdGlvbnM/OiB0eXBlb2YgYWN0aW9uc1xuICBjbG91ZFByb2dyZXNzPzogbnVtYmVyXG4gIHZpZXdlclBlcmNlbnRhZ2U/OiBudW1iZXJcbiAgc2hvd1BhbmVsPzogYm9vbGVhblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKVxuICBjb25zdCBib29rSWQgPSBjb25maWcuYm9va0lkXG4gIGNvbnN0IGJvb2sgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va3MnLCBib29rSWQpKHN0YXRlKVxuICBjb25zdCBib29rQ29udGVudCA9IHNlbGVjdG9ycy5jb21tb24uZW50aXR5KCdib29rQ29udGVudHMnLCBib29rSWQpKHN0YXRlKVxuICBjb25zdCBib29rUHJvZ3Jlc3MgPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va1Byb2dyZXNzJywgYm9va0lkKShzdGF0ZSlcbiAgY29uc3QgY2xvdWRQcm9ncmVzcyA9IF8uZ2V0KGJvb2tQcm9ncmVzcywgJ3BlcmNlbnRhZ2UnLCAwKVxuICBjb25zdCBjb21wdXRlZFBhZ2VzID0gc2VsZWN0b3JzLnZpZXdlci5jb21wdXRlZChib29rSWQpKHN0YXRlKVxuICBjb25zdCB7IHBlcmNlbnRhZ2U6IHZpZXdlclBlcmNlbnRhZ2UsIGlzRmV0Y2hpbmcgfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoYm9va0lkKShzdGF0ZSlcbiAgY29uc3QgeyBzaG93OiBzaG93UGFuZWwgfSA9IHNlbGVjdG9ycy52aWV3ZXIucGFuZWwoc3RhdGUpXG5cbiAgcmV0dXJuIHtcbiAgICBib29rSWQsXG4gICAgYm9vayxcbiAgICBib29rQ29udGVudCxcbiAgICBpc0ZldGNoaW5nUHJvZ3Jlc3M6IGlzRmV0Y2hpbmcsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvbixcbiAgICBjb21wdXRlZFBhZ2VzLFxuICAgIGNvbmZpZyxcbiAgICBjbG91ZFByb2dyZXNzLFxuICAgIHZpZXdlclBlcmNlbnRhZ2UsXG4gICAgc2hvd1BhbmVsXG4gIH1cbn1cblxuQGNvbm5lY3Q8QWxsUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMgYXMge30sIGRpc3BhdGNoKVxuICB9KVxuKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld2VyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCBMb2NhbFN0YXRlPiB7XG5cbiAgcmVzaXplTGF6aWx5OiB0eXBlb2YgXy5kZWJvdW5jZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dQYWdlSW5mbzogZmFsc2VcbiAgICB9XG4gICAgdGhpcy5yZXNpemVMYXppbHkgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlUmVzaXplLCA1MDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICAgIHRoaXMuaGFuZGxlVmlld2VyQ2xpY2sgPSB0aGlzLmhhbmRsZVZpZXdlckNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUxhemlseSA9IHRoaXMucmVzaXplTGF6aWx5LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVJhd0RhdGFNb3VudCA9IHRoaXMuaGFuZGxlUmF3RGF0YU1vdW50LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZSA9IHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVJhd0RhdGFNb3VudChlbGU6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNhbGNCb29rKHRoaXMucHJvcHMuYm9va0lkLCBlbGUpXG4gIH1cblxuICBoYW5kbGVWaWV3ZXJDbGljaygpIHtcbiAgICBjb25zdCB7IGNvbmZpZzogeyBpc1RvdWNoTW9kZSB9IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNUb3VjaE1vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJQYW5lbCgpXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1BhZ2VJbmZvOiAhdGhpcy5zdGF0ZS5zaG93UGFnZUluZm9cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVzaXplKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5pbml0aWFsaXplVmlld2VyQ29uZmlnKHRoaXMucHJvcHMuYm9va0lkLCB7XG4gICAgICBpc0NhbGNNb2RlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICBoYW5kZWxWaWV3ZXJNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBsZXQgZFRvU2NyZWVuUmlnaHQgPSB1dGlscy5nZXRTY3JlZW5JbmZvKCkudmlldy53aWR0aCAtIGV2ZW50LnBhZ2VYXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UGFnZUluZm86IGRUb1NjcmVlblJpZ2h0IDwgMTAwXG4gICAgfSlcbiAgfVxuXG4gIHJlaW5pdGlhbGl6ZVZpZXdlcigpIHtcbiAgICBjb25zdCB7IGJvb2tJZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNvbmZpZ1ZpZXdlcihib29rSWQsIHtcbiAgICAgIGlzQ2FsY01vZGU6IHRydWVcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UGFnZUluZm86IGZhbHNlLFxuICAgIH0pXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclBhbmVsKGZhbHNlKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHZpZXdDaGFuZ2VkID0gIV8uaXNFcXVhbFdpdGgodGhpcy5wcm9wcy5jb25maWcsIHByZXZQcm9wcy5jb25maWcsICh2YWxBLCB2YWxCLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdpc1RvdWNoTW9kZScgfHwga2V5ID09PSAnaXNDYWxjTW9kZScgfHwga2V5ID09PSAnaXNTY3JvbGxNb2RlJyB8fCBrZXkgPT09ICd0aGVtZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHZpZXdDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnJlaW5pdGlhbGl6ZVZpZXdlcigpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGF6aWx5KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGF6aWx5KVxuICB9XG5cbiAgcmVuZGVyQm9vaygpIHtcbiAgICBjb25zdCB7IHNob3dQYWdlSW5mbyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgYm9va0NvbnRlbnQsIGNvbXB1dGVkUGFnZXMsXG4gICAgICBjb25maWc6IHsgaXNDYWxjTW9kZSwgcGFnZUhlaWdodCB9fSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghYm9va0NvbnRlbnQuZmxlc2gpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyB0ZXh0PVwi5Lmm57GN6I635Y+W5LitXCIgY2VudGVyIC8+XG4gICAgfVxuXG4gICAgaWYgKGlzQ2FsY01vZGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExvYWRpbmcgdGV4dD1cIuS5puexjeaOkueJiOS4rVwiIGNlbnRlciAvPlxuICAgICAgICAgIDxCb29rQ2hhcHRlcnNcbiAgICAgICAgICAgIGJvb2tGbGVzaD17Ym9va0NvbnRlbnQuZmxlc2h9XG4gICAgICAgICAgICBvblJhd0RhdGFNb3VudD17dGhpcy5oYW5kbGVSYXdEYXRhTW91bnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVkUGFnZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Qm9va0NvbnRhaW5lclxuICAgICAgICAgIGFsbFBhZ2VzPXtjb21wdXRlZFBhZ2VzfVxuICAgICAgICAgIHBhZ2VIZWlnaHQ9e3BhZ2VIZWlnaHR9XG4gICAgICAgICAgc2hvd1BhZ2VJbmZvPXtzaG93UGFnZUluZm99XG4gICAgICAgICAgcGFnZUxpbWl0PXtQQUdFX0xJTUlUfVxuICAgICAgICAgIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyB0ZXh0PVwi5YeG5aSH5LitXCIgY2VudGVyIC8+XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVmlld2VyQ2xpY2t9IG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZX0gPlxuICAgICAgICA8Vmlld2VyUGFuZWwgLz5cbiAgICAgICAge3RoaXMucmVuZGVyQm9vaygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJDb250YWluZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJvb2tQYWdlcyBmcm9tICcuL0Jvb2tQYWdlcydcbmltcG9ydCBWaWV3ZXJTY3JvbGxiYXIgZnJvbSAnLi9WaWV3ZXJTY3JvbGxiYXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgTmF2QXJyb3cgZnJvbSAnLi9OYXZBcnJvdydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rQ29udGFpbmVyLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGxQYWdlczogVEJvb2tQYWdlW11cbiAgcGFnZUhlaWdodDogbnVtYmVyXG4gIHNob3dQYWdlSW5mbz86IGJvb2xlYW5cbiAgcGFnZUxpbWl0OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICBwZXJjZW50YWdlPzogbnVtYmVyXG4gIHBhZ2VObz86IG51bWJlclxuICB0aGVtZT86IHN0cmluZ1xuICBpc1Njcm9sbE1vZGU/OiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIGFjdGlvbnM/OiB0eXBlb2YgYWN0aW9uc1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgYm9va0lkLCB0aGVtZSwgaXNTY3JvbGxNb2RlLCBpc0NhbGNNb2RlIH0gPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSlcbiAgY29uc3QgeyBwZXJjZW50YWdlLCBwYWdlTm8gfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJvZ3Jlc3MoYm9va0lkKShzdGF0ZSlcblxuICByZXR1cm4ge1xuICAgIHBlcmNlbnRhZ2UsXG4gICAgcGFnZU5vLFxuICAgIHRoZW1lLFxuICAgIGlzU2Nyb2xsTW9kZSxcbiAgICBpc0NhbGNNb2RlXG4gIH1cbn1cblxuQGNvbm5lY3Q8QWxsUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMgYXMge30sIGRpc3BhdGNoKVxuICB9KVxuKVxuQENTU01vZHVsZXMoc3R5bGVzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBoYW5kbGVTY3JvbGxMYXppbHk6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVTY3JvbGwgPSB0aGlzLmhhbmRsZVNjcm9sbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVTY3JvbGxMYXppbHkgPSBfLmRlYm91bmNlKHRoaXMuaGFuZGxlU2Nyb2xsLCAyMDAsIHtcbiAgICAgIG1heFdhaXQ6IDEwMDBcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGNvbnN0IHsgYWxsUGFnZXMsIHBhZ2VIZWlnaHQsIGlzU2Nyb2xsTW9kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBhZ2VDb3VudCA9IGFsbFBhZ2VzLmxlbmd0aFxuICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gcGFnZUNvdW50ICogcGFnZUhlaWdodFxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgICBpZiAoaXNTY3JvbGxNb2RlKSB7XG4gICAgICB0aGlzLnByb3BzLmFjdGlvbnMudXBkYXRlQm9va1Byb2dyZXNzKHNjcm9sbFRvcCAvIHRvdGFsSGVpZ2h0KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvcndhcmQoKSB7XG4gICAgY29uc3QgeyBhbGxQYWdlcywgcGFnZU5vIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnZpZXdlckp1bXBUbyhwYWdlTm8gLyBhbGxQYWdlcy5sZW5ndGgpXG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG4gIH1cblxuICBoYW5kbGViYWNrd2FyZCgpIHtcbiAgICBjb25zdCB7IGFsbFBhZ2VzLCBwYWdlTm8gfSA9IHRoaXMucHJvcHNcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMudmlld2VySnVtcFRvKChwYWdlTm8gLSAyKSAvIGFsbFBhZ2VzLmxlbmd0aClcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbExhemlseSlcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbExhemlseSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGxQYWdlcywgcGFnZUhlaWdodCwgc2hvd1BhZ2VJbmZvLCBwYWdlTGltaXQsIHBhZ2VObyxcbiAgICAgIHRoZW1lLCBpc1Njcm9sbE1vZGUsIGlzQ2FsY01vZGUgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzdGFydFBhZ2VJbmRleFxuXG4gICAgc3RhcnRQYWdlSW5kZXggPSBwYWdlTm8gLSBNYXRoLmNlaWwocGFnZUxpbWl0IC8gMilcbiAgICBzdGFydFBhZ2VJbmRleCA9IHN0YXJ0UGFnZUluZGV4IDwgMCA/IDAgOiBzdGFydFBhZ2VJbmRleFxuXG4gICAgY29uc3QgZW5kUGFnZUluZGV4ID0gc3RhcnRQYWdlSW5kZXggKyBwYWdlTGltaXRcblxuICAgIGNvbnN0IGRpdkhlaWdodCA9IGlzQ2FsY01vZGVcbiAgICAgID8gJ2F1dG8nXG4gICAgICA6IChcbiAgICAgICAgaXNTY3JvbGxNb2RlXG4gICAgICAgICAgPyBhbGxQYWdlcy5sZW5ndGggKiBwYWdlSGVpZ2h0XG4gICAgICAgICAgOiBwYWdlSGVpZ2h0XG4gICAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9e3RoZW1lLnRvTG93ZXJDYXNlKCl9IHN0eWxlPXt7IGhlaWdodDogZGl2SGVpZ2h0IH19PlxuICAgICAgICA8Qm9va1BhZ2VzXG4gICAgICAgICAgcGFnZXM9e18uc2xpY2UoYWxsUGFnZXMsIHN0YXJ0UGFnZUluZGV4LCBlbmRQYWdlSW5kZXgpIGFzIFRCb29rUGFnZVtdfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxOYXZBcnJvd1xuICAgICAgICAgIGZvcndhcmQ9e3RoaXMuaGFuZGxlRm9yd2FyZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIGJhY2t3YXJkPXt0aGlzLmhhbmRsZWJhY2t3YXJkLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPFZpZXdlclNjcm9sbGJhclxuICAgICAgICAgIHZpc2libGU9e3Nob3dQYWdlSW5mb31cbiAgICAgICAgICBjdXJyZW50PXtwYWdlTm99XG4gICAgICAgICAgdG90YWw9e2FsbFBhZ2VzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IEJvb2tQYWdlIGZyb20gJy4vQm9va1BhZ2UnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Cb29rUGFnZXMuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VzOiBUQm9va1BhZ2VbXVxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiB0eXBlb2Ygc2VuZE5vdGlmaWNhdGlvblxuICB0aGVtZT86IHN0cmluZ1xuICBpc1Njcm9sbE1vZGU/OiBib29sZWFuXG4gIGlzQ2FsY01vZGU/OiBib29sZWFuXG4gIHBhZ2VIZWlnaHQ/OiBudW1iZXJcbiAgZmx1aWQ/OiBib29sZWFuXG4gIGNvbXB1dGVkPzogVEJvb2tQYWdlW11cbiAgY3VycmVudFBhZ2VObz86IG51bWJlclxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKVxuICBjb25zdCBjb21wdXRlZCA9IHNlbGVjdG9ycy52aWV3ZXIuY29tcHV0ZWQoY29uZmlnLmJvb2tJZCkoc3RhdGUpXG4gIGNvbnN0IGN1cnJlbnRQYWdlTm8gPSBzZWxlY3RvcnMudmlld2VyLnByb2dyZXNzKGNvbmZpZy5ib29rSWQpKHN0YXRlKS5wYWdlTm9cblxuICByZXR1cm4gXy5hc3NpZ24oe30sIGNvbmZpZywgeyBjb21wdXRlZCwgY3VycmVudFBhZ2VObyB9KVxufVxuXG5AY29ubmVjdDxBbGxQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uIH1cbilcbkBDU1NNb2R1bGVzKHN0eWxlcywge1xuICBhbGxvd011bHRpcGxlOiB0cnVlXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va1BhZ2VzIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICAvLyDlhpnmiJAgZGVjb3JhdG9yIOeahOW9ouW8j++8n1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gIV8uaXNFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFfLmlzRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFnZXMsIGZsdWlkLCBjb21wdXRlZCwgdGhlbWUsIGlzU2Nyb2xsTW9kZSwgcGFnZUhlaWdodCwgaXNDYWxjTW9kZSwgY3VycmVudFBhZ2VObyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gY29tcHV0ZWQubGVuZ3RoICogcGFnZUhlaWdodFxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3BhZ2VzJzogIWZsdWlkLFxuICAgICAgJ3BhZ2VzLS1mbHVpZCc6IGZsdWlkLFxuICAgICAgW3RoZW1lICYmIHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCldOiBCb29sZWFuKHRoZW1lKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bEhlaWdodCA9IGlzQ2FsY01vZGVcbiAgICAgID8gJ2F1dG8nXG4gICAgICA6IChcbiAgICAgICAgaXNTY3JvbGxNb2RlXG4gICAgICAgICAgPyB0b3RhbEhlaWdodFxuICAgICAgICAgIDogcGFnZUhlaWdodFxuICAgICAgKVxuXG4gICAgY29uc3QgdWxTdHlsZSA9IHsgaGVpZ2h0OiB1bEhlaWdodCB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsIHN0eWxlTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17dWxTdHlsZX0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmUgPSBwYWdlLm1ldGEgJiYgcGFnZS5tZXRhLnBhZ2VObyA9PT0gY3VycmVudFBhZ2VOb1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Qm9va1BhZ2VcbiAgICAgICAgICAgICAgICBmbHVpZD17Zmx1aWR9XG4gICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgICAgICBwYWdlSGVpZ2h0PXtwYWdlSGVpZ2h0fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VzLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTWFya2Rvd24nXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0Jvb2tQYWdlLnNjc3MnKVxuXG5jb25zdCByZW5kZXJlcnMgPSB7XG4gIHBhcmFncmFwaCh0ZXh0KSB7XG4gICAgcmV0dXJuIGA8cCBjbGFzcz1cIiR7c3R5bGVzWydnYi1saW5lJ119XCI+JHt0ZXh0fTwvcD5gXG4gIH0sXG5cbiAgbGluayhocmVmLCB0aXRsZSwgdGV4dCkge1xuICAgIGlmIChocmVmLmluZGV4T2YoJ2h0dHA6Ly8nKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7aHJlZn1cIiBjbGFzcz1cImpzLWJvb2stbmF2XCI+JHt0ZXh0fTwvYT5gXG4gICAgfVxuXG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtocmVmfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dGV4dH08L2E+YFxuICB9LFxuXG4gIGxpbmUoZWxlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGUudGFnTmFtZVxuICAgIGlmICh0YWdOYW1lICE9PSAnUCcpIHtcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7c3R5bGVzWydnYi1saW5lJ119XCI+JHtlbGUub3V0ZXJIVE1MIHx8IGVsZS5pbm5lckhUTUwgfHwgZWxlLnRleHRDb250ZW50fTwvZGl2PmBcbiAgICB9XG4gICAgcmV0dXJuIGVsZS5vdXRlckhUTUxcbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYWdlOiBUQm9va1BhZ2VcbiAgcGFnZUhlaWdodD86IG51bWJlclxuICBmbHVpZDogYm9vbGVhblxuICBhY3RpdmU/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgZm9udFNpemU/OiBudW1iZXJcbiAgdGhlbWU/OiBzdHJpbmdcbiAgaXNTY3JvbGxNb2RlPzogYm9vbGVhblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZm9udFNpemUsIHRoZW1lLCBpc1Njcm9sbE1vZGUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKVxuXG4gIHJldHVybiB7IGZvbnRTaXplLCB0aGVtZSwgaXNTY3JvbGxNb2RlIH1cbn1cblxuQGNvbm5lY3Q8QWxsUHJvcHM+KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbnMgYXMge30sIGRpc3BhdGNoKVxuICB9KVxuKVxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rUGFnZSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywge30+IHtcblxuICBib29rUGFnZURvbTogSFRNTERpdkVsZW1lbnRcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYWdlOiB7IG5vZGVzLCBtZXRhIH0sIHBhZ2VIZWlnaHQsIGZsdWlkLCBmb250U2l6ZSxcbiAgICAgIHRoZW1lLCBpc1Njcm9sbE1vZGUsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1kSW5wdXQgPSBub2Rlcy5qb2luKCdcXG5cXG4nKVxuICAgIGNvbnN0IGNvbnRlbnRTdHlsZSA9IHsgZm9udFNpemUgfSBhcyB7XG4gICAgICBtYXJnaW5Ub3A/OiBudW1iZXJcbiAgICAgIGZvbnRTaXplPzogbnVtYmVyXG4gICAgfVxuICAgIGxldCBsaVN0eWxlID0ge31cblxuICAgIGlmIChtZXRhICYmIHBhZ2VIZWlnaHQpIHtcbiAgICAgIGlmIChpc1Njcm9sbE1vZGUpIHtcbiAgICAgICAgbGlTdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB0b3A6IHBhZ2VIZWlnaHQgKiAobWV0YS5wYWdlTm8gLSAxKSxcbiAgICAgICAgICBoZWlnaHQ6IHBhZ2VIZWlnaHQgfHwgJ2F1dG8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpU3R5bGUgPSB7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGRpc3BsYXk6IGFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgaGVpZ2h0OiBwYWdlSGVpZ2h0IHx8ICdhdXRvJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGEgJiYgbWV0YS5vZmZzZXQpIHtcbiAgICAgIGNvbnRlbnRTdHlsZS5tYXJnaW5Ub3AgPSBtZXRhLm9mZnNldFxuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3BhZ2UnOiAhZmx1aWQsXG4gICAgICAncGFnZS0tZmx1aWQnOiBmbHVpZCxcbiAgICAgIFt0aGVtZSAmJiB0aGVtZS50b0xvY2FsZUxvd2VyQ2FzZSgpXTogQm9vbGVhbih0aGVtZSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZU5hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e2xpU3R5bGV9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e2NvbnRlbnRTdHlsZX1cbiAgICAgICAgICBzdHlsZU5hbWU9XCJjb250ZW50XCJcbiAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMuYm9va1BhZ2VEb20gPSByZWYgfSB9XG4gICAgICAgICAgPlxuICAgICAgICAgIDxNYXJrZG93blxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZXNcIlxuICAgICAgICAgICAgaW5wdXQ9e21kSW5wdXR9XG4gICAgICAgICAgICBzYWZlPXtmYWxzZX1cbiAgICAgICAgICAgIG1hcmtlZFJlbmRlcmVycz17cmVuZGVyZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBtZXRhICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwicGFnZS1ub1wiPnttZXRhLnBhZ2VOb308L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZS50c3hcbiAqKi8iLCJpbXBvcnQgTWFya2Rvd24gZnJvbSAnLi9NYXJrZG93bidcbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL01hcmtkb3duL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5jb25zdCBSZWFjdE1hcmtkb3duID0gcmVxdWlyZSgncmVhY3QtbWFya2Rvd24nKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dDogc3RyaW5nXG4gIC8qKlxuICAgKiBsaW5lIOS4uuiHquWumuS5ieeahCByZW5kZXJlciwg5ZyoIG1hcmtlZCDlrozmiJDlkI7ov5DooYzvvIzlj6/og73lr7nmgKfog73mnInlvbHlk41cbiAgICogbGluZShub2RlKVxuICAgKi9cbiAgbWFya2VkUmVuZGVyZXJzPzogYW55XG4gIHJlbmRlcmVycz86IGFueVxuICBzYWZlPzogYm9vbGVhblxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuY2xhc3MgTWFya2Rvd24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyU2FmZWx5KGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHsgaW5wdXQsIHJlbmRlcmVycyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzb3VyY2U9e2lucHV0fVxuICAgICAgICByZW5kZXJlcnM9e3JlbmRlcmVycyB8fCB7fX1cbiAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgIHNraXBIdG1sPXtmYWxzZX1cbiAgICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZW5kZXJVblNhZmVseShjbGFzc05hbWUpIHtcbiAgICBjb25zdCB7IGlucHV0LCBtYXJrZWRSZW5kZXJlcnMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgbWFya2VkLlJlbmRlcmVyKClcblxuICAgIGlmIChtYXJrZWRSZW5kZXJlcnMpIHtcbiAgICAgIF8uZm9yRWFjaChtYXJrZWRSZW5kZXJlcnMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ICE9PSAnbGluZScpIHtcbiAgICAgICAgICByZW5kZXJlcltrZXldID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbGV0IGh0bWwgPSBtYXJrZWQoaW5wdXQsIHtcbiAgICAgIGdmbTogZmFsc2UsXG4gICAgICBicmVha3M6IHRydWUsXG4gICAgICByZW5kZXJlclxuICAgIH0pXG5cbiAgICBpZiAobWFya2VkUmVuZGVyZXJzICYmIG1hcmtlZFJlbmRlcmVycy5saW5lKSB7XG4gICAgICBodG1sID0gQXJyYXkucHJvdG90eXBlXG4gICAgICAgIC5maWx0ZXIuY2FsbCgkKGh0bWwpLCBlbGUgPT4ge1xuICAgICAgICAgIC8vIOenu+mZpOWFg+e0oOmXtOeahOWbnui9puWPiuWtl+espuS4slxuICAgICAgICAgIHJldHVybiBlbGUubm9kZVR5cGUgIT09IDNcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcChlbGUgPT4ge1xuICAgICAgICAgIHJldHVybiBtYXJrZWRSZW5kZXJlcnMubGluZShlbGUpXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcnKVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNhZmUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHNhZmVcbiAgICAgID8gdGhpcy5yZW5kZXJTYWZlbHkoY2xhc3NOYW1lKVxuICAgICAgOiB0aGlzLnJlbmRlclVuU2FmZWx5KGNsYXNzTmFtZSlcbiAgfVxufVxuXG5NYXJrZG93blsnZGVmYXVsdFByb3BzJ10gPSB7XG4gIHNhZmU6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTWFya2Rvd24vTWFya2Rvd24udHN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWFya2VkXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJtYXJrZWRcIlxuICoqIG1vZHVsZSBpZCA9IDI4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDI4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEzIDE1XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCJcbiAqKiBtb2R1bGUgaWQgPSAyODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vQm9va1BhZ2VzLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvQm9va1BhZ2VzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2VzXzJmZGRJIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5wYWdlcy0tZmx1aWRfM3NuX0Yge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ud2hpdGVfMi16Sncge1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5uaWdodF8xU2xXMSB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzOyB9XFxuXFxuLnNlcGlhX0VWWXg4IHtcXG4gIGJhY2tncm91bmQ6ICNmYmY3ZjE7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwYWdlc1wiOiBcInBhZ2VzXzJmZGRJXCIsXG5cdFwicGFnZXMtLWZsdWlkXCI6IFwicGFnZXMtLWZsdWlkXzNzbl9GIHBhZ2VzXzJmZGRJXCIsXG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8yLXpKd1wiLFxuXHRcIm5pZ2h0XCI6IFwibmlnaHRfMVNsVzFcIixcblx0XCJzZXBpYVwiOiBcInNlcGlhX0VWWXg4XCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rUGFnZXMuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlclNjcm9sbGJhci5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY3VycmVudDogbnVtYmVyXG4gIHRvdGFsOiBudW1iZXJcbiAgdmlzaWJsZTogYm9vbGVhblxufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBWaWV3ZXJTY3JvbGxiYXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQsIHRvdGFsIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGVyY2VudGFnZSA9ICgoY3VycmVudCAvIHRvdGFsKSAqIDEwMCkudG9GaXhlZCgyKSArICclJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMudmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgey4uLnsgc3R5bGVOYW1lOiAnbG9jLWluZm8nIH19PlxuICAgICAgICAgIDxkaXY+PHN0cm9uZz57Y3VycmVudH08L3N0cm9uZz4ve3RvdGFsfTwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwic3ViLWluZm9cIj57cGVyY2VudGFnZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclNjcm9sbGJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyU2Nyb2xsYmFyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyU2Nyb2xsYmFyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNjcm9sbGJhcl8zbkkxTSB7XFxuICB3aWR0aDogMnB4O1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMTAwcHg7IH1cXG4gIC5zY3JvbGxiYXJfM25JMU06aG92ZXIgLmJ1dHRvbl8xeXMwOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRyYWNrXzNsN0R5IHtcXG4gIHdpZHRoOiAycHg7XFxuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogOHB4O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi50cmFjay0tcGFzdF8yXzhTciB7XFxuICBiYWNrZ3JvdW5kOiAjNTg2NmRiO1xcbiAgei1pbmRleDogMjsgfVxcblxcbi5idXR0b25fMXlzMDgge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjMUIyNjdGO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogODRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHotaW5kZXg6IDM7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvYy1pbmZvXzE1bldCIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMzIpO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7IH1cXG5cXG4uc3ViLWluZm9fM2JZajUge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBjb2xvcjogI2FhYTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNjcm9sbGJhclwiOiBcInNjcm9sbGJhcl8zbkkxTVwiLFxuXHRcImJ1dHRvblwiOiBcImJ1dHRvbl8xeXMwOFwiLFxuXHRcInRyYWNrXCI6IFwidHJhY2tfM2w3RHlcIixcblx0XCJ0cmFjay0tcGFzdFwiOiBcInRyYWNrLS1wYXN0XzJfOFNyIHRyYWNrXzNsN0R5XCIsXG5cdFwibG9jLWluZm9cIjogXCJsb2MtaW5mb18xNW5XQlwiLFxuXHRcInN1Yi1pbmZvXCI6IFwic3ViLWluZm9fM2JZajVcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclNjcm9sbGJhci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTmF2QXJyb3cuc2NzcycpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZvcndhcmQ6ICgpID0+IHZvaWRcbiAgYmFja3dhcmQ6ICgpID0+IHZvaWRcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QXJyb3cgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlRm9yd2FyZENsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuZm9yd2FyZCgpXG4gIH1cblxuICBoYW5kbGVCYWNrd2FyZENsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuYmFja3dhcmQoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwibmF2c1wiPlxuICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cIm5hdi1sZWZ0XCIgb25DbGljaz17dGhpcy5oYW5kbGVCYWNrd2FyZENsaWNrLmJpbmQodGhpcyl9Pi08L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJuYXYtcmlnaHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvcndhcmRDbGljay5iaW5kKHRoaXMpfT4rPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL05hdkFycm93LnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTmF2QXJyb3cuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZzX1A4Tm15IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDc1MHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0zNzVweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXJnaW4tdG9wOiAtNjBweDsgfVxcblxcbi5uYXYtYXJyb3dfMlZydC0ge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAubmF2LWFycm93XzJWcnQtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpOyB9XFxuICAubmF2LWFycm93XzJWcnQtOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG5cXG4ubmF2LWxlZnRfMnJTR1gge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ubmF2LXJpZ2h0XzIzTHROIHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5hdnNcIjogXCJuYXZzX1A4Tm15XCIsXG5cdFwibmF2LWFycm93XCI6IFwibmF2LWFycm93XzJWcnQtXCIsXG5cdFwibmF2LWxlZnRcIjogXCJuYXYtbGVmdF8yclNHWCBuYXYtYXJyb3dfMlZydC1cIixcblx0XCJuYXYtcmlnaHRcIjogXCJuYXYtcmlnaHRfMjNMdE4gbmF2LWFycm93XzJWcnQtXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9OYXZBcnJvdy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0Jvb2tDb250YWluZXIuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLndoaXRlXzNEbnFoIHtcXG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cXG5cXG4ubmlnaHRfMU5xeFMge1xcbiAgYmFja2dyb3VuZDogIzIyMjsgfVxcblxcbi5zZXBpYV8xWjJCSCB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmMWU1OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwid2hpdGVcIjogXCJ3aGl0ZV8zRG5xaFwiLFxuXHRcIm5pZ2h0XCI6IFwibmlnaHRfMU5xeFNcIixcblx0XCJzZXBpYVwiOiBcInNlcGlhXzFaMkJIXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ29udGFpbmVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9JY29uJ1xuaW1wb3J0IHsgRmFkZSwgU2xpZGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9hbmltYXRpb25zJ1xuaW1wb3J0IFZpZXdlclByZWZlcmVuY2UgZnJvbSAnLi9WaWV3ZXJQcmVmZXJlbmNlJ1xuaW1wb3J0IFZpZXdlck5hdiBmcm9tICcuL1ZpZXdlck5hdidcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IGlzRGVzY2VuZGFudCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20vaXNEZXNjZW5kYW50J1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJQYW5lbC5zY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHsgfVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHNob3dQYW5lbD86IGJvb2xlYW5cbiAgc2hvd1ByZWZlcmVuY2U/OiBib29sZWFuXG4gIHNob3dOYXZpZ2F0aW9uPzogYm9vbGVhblxuICBjb25maWc/OiBWaWV3ZXJDb25maWdcbiAgYWN0aW9ucz86IHR5cGVvZiBhY3Rpb25zXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgY29uc3QgY29uZmlnID0gc2VsZWN0b3JzLnZpZXdlci5jb25maWcoc3RhdGUpXG4gIGNvbnN0IGJvb2tJZCA9IGNvbmZpZy5ib29rSWRcbiAgY29uc3QgeyBzaG93OiBzaG93UGFuZWwgfSA9IHNlbGVjdG9ycy52aWV3ZXIucGFuZWwoc3RhdGUpXG4gIGNvbnN0IHsgc2hvdzogc2hvd1ByZWZlcmVuY2UgfSA9IHNlbGVjdG9ycy52aWV3ZXIucHJlZmVyZW5jZShzdGF0ZSlcbiAgY29uc3QgeyBzaG93OiBzaG93TmF2aWdhdGlvbiB9ID0gc2VsZWN0b3JzLnZpZXdlci5uYXZpZ2F0aW9uKHN0YXRlKVxuICBjb25zdCB7IHRpdGxlIH0gPSBzZWxlY3RvcnMuY29tbW9uLmVudGl0eSgnYm9va3MnLCBib29rSWQpKHN0YXRlKSBhcyBhbnlcblxuICByZXR1cm4geyBjb25maWcsIHNob3dQYW5lbCwgc2hvd1ByZWZlcmVuY2UsIHRpdGxlLCBzaG93TmF2aWdhdGlvbiB9XG59XG5cbkBjb25uZWN0PEFsbFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zIGFzIHt9LCBkaXNwYXRjaClcbiAgfSlcbilcbkBDU1NNb2R1bGVzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB2b2lkPiB7XG5cbiAgbmF2OiBIVE1MRGl2RWxlbWVudFxuICBwcmVmOiBIVE1MRGl2RWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUgPSB0aGlzLmhhbmRlbFZpZXdlck1vdXNlTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVHbG9iYWxDbGljayA9IHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlR2xvYmFsQ2xpY2soZSkge1xuICAgIGNvbnN0IHsgc2hvd1ByZWZlcmVuY2UsIHNob3dOYXZpZ2F0aW9uIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLm5hdiwgZS50YXJnZXQpKSB7XG4gICAgICBpZiAoc2hvd05hdmlnYXRpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlck5hdmlnYXRpb24oZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJOYXZpZ2F0aW9uKClcbiAgICB9XG5cbiAgICBpZiAoIWlzRGVzY2VuZGFudCh0aGlzLnByZWYsIGUudGFyZ2V0KSkge1xuICAgICAgaWYgKHNob3dQcmVmZXJlbmNlKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50b2dnbGVWaWV3ZXJQcmVmZXJlbmNlKGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmFjdGlvbnMudG9nZ2xlVmlld2VyUHJlZmVyZW5jZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGVsVmlld2VyTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBjb25maWc6IHsgaXNDYWxjTW9kZSwgaXNUb3VjaE1vZGUgfSwgc2hvd1BhbmVsIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoIWlzQ2FsY01vZGUgJiYgIWlzVG91Y2hNb2RlKSB7XG4gICAgICBsZXQgeSA9IGV2ZW50LnBhZ2VZIC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IHNob3cgPSB5IDwgOTBcbiAgICAgIGlmIChzaG93UGFuZWwgIT09IHNob3cpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclBhbmVsKHNob3cpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGVsVmlld2VyTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlR2xvYmFsQ2xpY2spXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kZWxWaWV3ZXJNb3VzZU1vdmUpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVHbG9iYWxDbGljaylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBzaG93UGFuZWwsIHNob3dQcmVmZXJlbmNlLCBzaG93TmF2aWdhdGlvbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZT5cbiAgICAgICAge1xuICAgICAgICAgIChzaG93UGFuZWwgfHwgc2hvd1ByZWZlcmVuY2UgfHwgc2hvd05hdmlnYXRpb24pICYmIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwidmlld2VyLXBhbmVsXCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImJhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmID0+IHsgdGhpcy5uYXYgPSByZWYgfSB9IHN0eWxlTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj7nm67lvZU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8RmFkZT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNob3dOYXZpZ2F0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWaWV3ZXJOYXYgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWYgPT4geyB0aGlzLnByZWYgPSByZWYgfSB9IHN0eWxlTmFtZT1cInByZWZlcmVuY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwcmVmZXJlbmNlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxGYWRlPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd1ByZWZlcmVuY2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdlclByZWZlcmVuY2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvU2xpZGU+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC50c3hcbiAqKi8iLCJpbXBvcnQgRmFkZSBmcm9tICcuL0ZhZGUnXG5pbXBvcnQgU2xpZGUgZnJvbSAnLi9TbGlkZSdcblxuZXhwb3J0IHsgRmFkZSwgU2xpZGUgfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9hbmltYXRpb25zLnRzXG4gKiovIiwiaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnXG5leHBvcnQgZGVmYXVsdCBTbGlkZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1NsaWRlLnNjc3MnKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXG4gICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgdHJhbnNpdGlvbk5hbWU9e3N0eWxlc31cbiAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezMwMH1cbiAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH1cbiAgICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vU2xpZGUuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL1NsaWRlL1NsaWRlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVudGVyXzJLZVBtIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICBvcGFjaXR5OiAwLjAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zczsgfVxcblxcbi5lbnRlckFjdGl2ZV83SkctSCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmxlYXZlXzNBZmVnIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzOyB9XFxuXFxuLnNlYXZlQWN0aXZlXzFSdFRzIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxuICBvcGFjaXR5OiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZW50ZXJcIjogXCJlbnRlcl8yS2VQbVwiLFxuXHRcImVudGVyQWN0aXZlXCI6IFwiZW50ZXJBY3RpdmVfN0pHLUhcIixcblx0XCJsZWF2ZVwiOiBcImxlYXZlXzNBZmVnXCIsXG5cdFwic2VhdmVBY3RpdmVcIjogXCJzZWF2ZUFjdGl2ZV8xUnRUc1wiXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9TbGlkZS9TbGlkZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3dpdGNoZXInXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUSEVNRVMgYXMgVEhFTUVfREVGUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy92aWV3ZXJEZWZzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9WaWV3ZXJQcmVmZXJlbmNlLnNjc3MnKVxuXG5jb25zdCBNQVhfRk9OVF9TSVpFID0gMjBcbmNvbnN0IE1JTl9GT05UX1NJWkUgPSAxMlxuXG5pbnRlcmZhY2UgUHJvcHMgeyB9XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgYWN0aW9ucz86IHR5cGVvZiBhY3Rpb25zXG4gIGZvbnRTaXplPzogbnVtYmVyXG4gIGlzU2Nyb2xsTW9kZT86IGJvb2xlYW5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGZvbnRTaXplLCBpc1Njcm9sbE1vZGUgfSA9IHNlbGVjdG9ycy52aWV3ZXIuY29uZmlnKHN0YXRlKVxuXG4gIHJldHVybiB7IGZvbnRTaXplLCBpc1Njcm9sbE1vZGUgfVxufVxuXG5AY29ubmVjdDxBbGxQcm9wcz4oXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9ucyBhcyB7fSwgZGlzcGF0Y2gpXG4gIH0pXG4pXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3ZXJQcmVmZXJlbmNlIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVEZWNGb250U2l6ZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgZm9udFNpemUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzRGVjRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKClcblxuICAgIGlmICghaXNEZWNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNoYW5nZVZpZXdlckZvbnRTaXplKGZvbnRTaXplIC0gMSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbmNGb250U2l6ZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgZm9udFNpemUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzSW5jRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKClcblxuICAgIGlmICghaXNJbmNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNoYW5nZVZpZXdlckZvbnRTaXplKGZvbnRTaXplICsgMSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VUaGVtZUNsaWNrKGtleSkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5jaGFuZ2VWaWV3ZXJUaGVtZShrZXkpXG4gIH1cblxuICBoYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2sodmFsKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnRvZ2dsZVZpZXdlclNjcm9sbE1vZGUodmFsKVxuICB9XG5cbiAgZ2V0QnRuU3RhdHVzKCkge1xuICAgIGNvbnN0IHsgZm9udFNpemUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc0RlY0Rpc2FibGVkID0gZm9udFNpemUgPD0gTUlOX0ZPTlRfU0laRVxuICAgIGNvbnN0IGlzSW5jRGlzYWJsZWQgPSBmb250U2l6ZSA+PSBNQVhfRk9OVF9TSVpFXG5cbiAgICByZXR1cm4geyBpc0RlY0Rpc2FibGVkLCBpc0luY0Rpc2FibGVkIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzRGVjRGlzYWJsZWQsIGlzSW5jRGlzYWJsZWQgfSA9IHRoaXMuZ2V0QnRuU3RhdHVzKClcbiAgICBjb25zdCB7IGlzU2Nyb2xsTW9kZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgYnRuRGVjQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICdidG4nOiAhaXNEZWNEaXNhYmxlZCxcbiAgICAgICdidG4tLWRpc2FibGVkJzogaXNEZWNEaXNhYmxlZFxuICAgIH0pXG5cbiAgICBjb25zdCBidG5JbmNDbGFzcyA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ2J0bic6ICFpc0luY0Rpc2FibGVkLFxuICAgICAgJ2J0bi0tZGlzYWJsZWQnOiBpc0luY0Rpc2FibGVkXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInZpZXdlci1wcmVmZXJlbmNlXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgPGxpIHN0eWxlTmFtZT1cIm9wdGlvbi1mb250LXNpemVcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT17YnRuRGVjQ2xhc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVjRm9udFNpemVDbGljay5iaW5kKHRoaXMpfT5BLTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlTmFtZT17YnRuSW5jQ2xhc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlSW5jRm9udFNpemVDbGljay5iaW5kKHRoaXMpfT5BKzwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tc2Nyb2xsXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPua7muWKqOaooeW8jzwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hlclxuICAgICAgICAgICAgICB2YWx1ZT17aXNTY3JvbGxNb2RlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUb2dnbGVTY3JvbGxNb2RlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBzdHlsZU5hbWU9XCJvcHRpb24tdGhlbWVcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXy5rZXlzKFRIRU1FX0RFRlMpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1trZXkudG9Mb3dlckNhc2UoKV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlVGhlbWVDbGljay5iaW5kKHRoaXMsIGtleSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2tleX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUHJlZmVyZW5jZS50c3hcbiAqKi8iLCJpbXBvcnQgU3dpdGNoZXIgZnJvbSAnLi9Td2l0Y2hlcidcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL19zd2l0Y2hlci5zY3NzJylcblxuLy8gaW50ZXJmYWNlIFByb3BzIHtcbi8vICAgb246IGJvb2xlYW5cbi8vIH1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIHRpdGxlPzogc3RyaW5nXG4gIG9uQ2hhbmdlPzogKG5ld1ZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB2b2lkXG4gIG9wdGlvbnM/OiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXG4gIH1bXVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgc3R5bGVOYW1lPzogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMsIHtcbiAgYWxsb3dNdWx0aXBsZTogdHJ1ZVxufSlcbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHZhbHVlOiBpc09uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmIChpc09uID09PSAnMScgfHwgaXNPbiA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGlzT24gPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09uID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN0YXRlID0gQm9vbGVhbihpc09uKSA/ICdvbicgOiAnb2ZmJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJyd9IHN0eWxlTmFtZT1cInN3aXRjaGVyLXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICBsZXQgbmV3VmFsdWVcblxuICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlSW5kZXggPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLmluZGV4T2YodGhpcy5wcm9wcy52YWx1ZSlcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByb3BzLm9wdGlvbnNbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWYWx1ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1sxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJvcHMub3B0aW9uc1swXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5b2T5YmN5pWw5o2u5pyJ6K+v77yM5bCG5L2/55So6buY6K6k5pWw5o2u77yBJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign5rKh5pyJ57uZIG9wdGlvbnMg5pe25b+F6aG75L2/55So5biD5bCU5Z6L55qEIHZhbHVl77yBJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzdHlsZU5hbWU9e2Bzd2l0Y2hlci0tJHtzdGF0ZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cInN3aXRjaGVyLXRyYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIGNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBhbnk+IHtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnByb3BzLm9uID8gJ29uJyA6ICdvZmYnXG4vLyAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBzd2l0Y2hlcidcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2IHN0eWxlTmFtZT17dGhpcy5wcm9wcy5vbiA/ICdzd2l0Y2hlci0tb24nIDogJ3N3aXRjaGVyLS1vZmYnfT5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci1idXR0b25cIj48L2Rpdj5cbi8vICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzd2l0Y2hlci10cmFja1wiPjwvZGl2PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaGVyXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Td2l0Y2hlci9Td2l0Y2hlci50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL19zd2l0Y2hlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN3aXRjaGVyLXdyYXBfM1VNQVUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLnN3aXRjaGVyX0czbjRfLCAuc3dpdGNoZXItLW9mZl8xRW9PVSwgLnN3aXRjaGVyLS1vbl8yeGl3TyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjb2xvcjogZ3JlZW47IH1cXG5cXG4uc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGJhY2tncm91bmQ6ICMxQjI2N0Y7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMyKTsgfVxcblxcbi5zd2l0Y2hlci10cmFja194dmhqZyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4OyB9XFxuXFxuLnN3aXRjaGVyLS1vZmZfMUVvT1UgLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7IH1cXG5cXG4uc3dpdGNoZXItLW9mZl8xRW9PVSAuc3dpdGNoZXItYnV0dG9uXzJrSEdMIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc3dpdGNoZXItLW9uXzJ4aXdPIC5zd2l0Y2hlci1idXR0b25fMmtIR0wge1xcbiAgbGVmdDogMjBweDsgfVxcblxcbi5zd2l0Y2hlci0tb25fMnhpd08gLnN3aXRjaGVyLXRyYWNrX3h2aGpnIHtcXG4gIGJhY2tncm91bmQ6ICMyZTQwZDI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzd2l0Y2hlci13cmFwXCI6IFwic3dpdGNoZXItd3JhcF8zVU1BVVwiLFxuXHRcInN3aXRjaGVyXCI6IFwic3dpdGNoZXJfRzNuNF9cIixcblx0XCJzd2l0Y2hlci0tb2ZmXCI6IFwic3dpdGNoZXItLW9mZl8xRW9PVVwiLFxuXHRcInN3aXRjaGVyLS1vblwiOiBcInN3aXRjaGVyLS1vbl8yeGl3T1wiLFxuXHRcInN3aXRjaGVyLWJ1dHRvblwiOiBcInN3aXRjaGVyLWJ1dHRvbl8ya0hHTFwiLFxuXHRcInN3aXRjaGVyLXRyYWNrXCI6IFwic3dpdGNoZXItdHJhY2tfeHZoamdcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvU3dpdGNoZXIvX3N3aXRjaGVyLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMVxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyUHJlZmVyZW5jZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXByZWZlcmVuY2Vfa0xZVlcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDY1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAxMnB4IDYzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ub3B0aW9uXzNvQ1FvIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuICAub3B0aW9uXzNvQ1FvOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG5cXG4ub3B0aW9uLWZvbnQtc2l6ZV8xMkhSMiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDsgfVxcbiAgLm9wdGlvbi1mb250LXNpemVfMTJIUjIgLmJ0bl9vNUZwNCwgLm9wdGlvbi1mb250LXNpemVfMTJIUjIgLmJ0bi0tZGlzYWJsZWRfMWkxOTcge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG5fbzVGcDQ6Zmlyc3QtY2hpbGQsIC5vcHRpb24tZm9udC1zaXplXzEySFIyIC5idG4tLWRpc2FibGVkXzFpMTk3OmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDsgfVxcbiAgLm9wdGlvbi1mb250LXNpemVfMTJIUjIgLmJ0bi0tZGlzYWJsZWRfMWkxOTcge1xcbiAgICBjb2xvcjogI2RkZDsgfVxcblxcbi5vcHRpb24tc2Nyb2xsXzJFUTBuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAub3B0aW9uLXNjcm9sbF8yRVEwbiAubGFiZWxfaURSZ0Ige1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgLm9wdGlvbi1zY3JvbGxfMkVRMG4gLnN3aXRjaGVyXzM3bGZrIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLm9wdGlvbi10aGVtZV80a3FBWSB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcbiAgLm9wdGlvbi10aGVtZV80a3FBWSBzcGFuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ud2hpdGVfM19WdmMge1xcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxcblxcbi5uaWdodF8zY010ZyB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyOyB9XFxuXFxuLnNlcGlhXy1TR0h2IHtcXG4gIGJhY2tncm91bmQ6ICNmOWYxZTU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ2aWV3ZXItcHJlZmVyZW5jZVwiOiBcInZpZXdlci1wcmVmZXJlbmNlX2tMWVZXXCIsXG5cdFwib3B0aW9uXCI6IFwib3B0aW9uXzNvQ1FvXCIsXG5cdFwib3B0aW9uLWZvbnQtc2l6ZVwiOiBcIm9wdGlvbi1mb250LXNpemVfMTJIUjIgb3B0aW9uXzNvQ1FvXCIsXG5cdFwiYnRuXCI6IFwiYnRuX281RnA0XCIsXG5cdFwiYnRuLS1kaXNhYmxlZFwiOiBcImJ0bi0tZGlzYWJsZWRfMWkxOTdcIixcblx0XCJvcHRpb24tc2Nyb2xsXCI6IFwib3B0aW9uLXNjcm9sbF8yRVEwbiBvcHRpb25fM29DUW9cIixcblx0XCJsYWJlbFwiOiBcImxhYmVsX2lEUmdCXCIsXG5cdFwic3dpdGNoZXJcIjogXCJzd2l0Y2hlcl8zN2xma1wiLFxuXHRcIm9wdGlvbi10aGVtZVwiOiBcIm9wdGlvbi10aGVtZV80a3FBWSBvcHRpb25fM29DUW9cIixcblx0XCJ3aGl0ZVwiOiBcIndoaXRlXzNfVnZjXCIsXG5cdFwibmlnaHRcIjogXCJuaWdodF8zY010Z1wiLFxuXHRcInNlcGlhXCI6IFwic2VwaWFfLVNHSHZcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlclByZWZlcmVuY2Uuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgcHJldmVudFNjcm9sbCBmcm9tICcuLi8uLi8uLi91dGlscy9icm93c2VyL3ByZXZlbnRTY3JvbGwnXG5pbXBvcnQgKiBhcyB2aWV3ZXJVdGlscyBmcm9tICcuLi9WaWV3ZXIudXRpbHMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL1ZpZXdlck5hdi5zY3NzJylcblxuY29uc3QgSlNfTkFWX0hPT0sgPSAnYS5qcy1ib29rLW5hdidcbmNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5cbmludGVyZmFjZSBQcm9wcyB7IH1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICBuYXY/OiBUQm9va05hdltdXG4gIGFjdGlvbnM/OiB0eXBlb2YgYWN0aW9uc1xuICBjb21wdXRlZFBhZ2VzPzogVEJvb2tQYWdlW11cbiAgdmlld2VyUGVyY2VudGFnZT86IG51bWJlclxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYm9va0lkIH0gPSBzZWxlY3RvcnMudmlld2VyLmNvbmZpZyhzdGF0ZSlcbiAgY29uc3QgbmF2ID0gc2VsZWN0b3JzLnZpZXdlci5uYXZEYXRhKGJvb2tJZCkoc3RhdGUpXG4gIGNvbnN0IHsgcGVyY2VudGFnZTogdmlld2VyUGVyY2VudGFnZSB9ID0gc2VsZWN0b3JzLnZpZXdlci5wcm9ncmVzcyhib29rSWQpKHN0YXRlKVxuICBjb25zdCBjb21wdXRlZFBhZ2VzID0gc2VsZWN0b3JzLnZpZXdlci5jb21wdXRlZChib29rSWQpKHN0YXRlKVxuXG4gIHJldHVybiB7IG5hdiwgdmlld2VyUGVyY2VudGFnZSwgY29tcHV0ZWRQYWdlcyB9XG59XG5cbkBjb25uZWN0PEFsbFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25zIGFzIHt9LCBkaXNwYXRjaClcbiAgfSlcbilcbkBDU1NNb2R1bGVzKHN0eWxlcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdlck5hdiBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgdm9pZD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVOYXZMaW5rQ2xpY2sgPSB0aGlzLmhhbmRsZU5hdkxpbmtDbGljay5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVOYXZMaW5rQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHsgY29tcHV0ZWRQYWdlcywgdmlld2VyUGVyY2VudGFnZSAvKiDkuZ/orrjkvJrnlKjliLAgKi8gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBocmVmID0gJChlLnRhcmdldCkuYXR0cignaHJlZicpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFnZU5vID0gdmlld2VyVXRpbHMucmVzb2x2ZUJvb2tMb2NhdGlvbihocmVmLCBjb21wdXRlZFBhZ2VzKVxuICAgICAgY29uc3QgcGVyY2VudGFnZSA9IChwYWdlTm8gLSAxKSAvIGNvbXB1dGVkUGFnZXMubGVuZ3RoXG5cbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy52aWV3ZXJKdW1wVG8ocGVyY2VudGFnZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJylcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBUT0RPOiBqcyBob29rIOW4uOmHj1xuICAgIHByZXZlbnRTY3JvbGwuaW5pdCgnLmpzLW5hdi1zY3JvbGwnKVxuICAgICRib2R5Lm9uKCdjbGljaycsIEpTX05BVl9IT09LLCB0aGlzLmhhbmRsZU5hdkxpbmtDbGljaylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHByZXZlbnRTY3JvbGwuZGVzdHJveSgnLmpzLW5hdi1zY3JvbGwnKVxuICAgICRib2R5Lm9mZignY2xpY2snLCBKU19OQVZfSE9PSywgdGhpcy5oYW5kbGVOYXZMaW5rQ2xpY2spXG4gIH1cblxuICByZW5kZXJMaW5rKHJlZiwgaGFzaCwgbGFiZWwpIHtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgcmV0dXJuIDxhIGNsYXNzTmFtZT1cImpzLWJvb2stbmF2XCIgaHJlZj17YCMke3JlZn0kJHtoYXNofWB9PntsYWJlbH08L2E+XG4gICAgfVxuICAgIHJldHVybiA8YSBjbGFzc05hbWU9XCJqcy1ib29rLW5hdlwiIGhyZWY9e2AjJHtyZWZ9YH0+e2xhYmVsfTwvYT5cbiAgfVxuXG4gIHJlbmRlck5hdihuYXZMaXN0OiBUQm9va05hdltdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIG5hdkxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMaW5rKGl0ZW0ucmVmLCBpdGVtLmhhc2gsIGl0ZW0ubGFiZWwpfVxuICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2KGl0ZW0uY2hpbGRyZW4pfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxpbmsoaXRlbS5yZWYsIGl0ZW0uaGFzaCwgaXRlbS5sYWJlbCl9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXYgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLW5hdi1zY3JvbGxcIiBzdHlsZU5hbWU9XCJ2aWV3ZXItbmF2XCI+XG4gICAgICAgIHt0aGlzLnJlbmRlck5hdihuYXYpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJOYXYudHN4XG4gKiovIiwiLyoqXG4gKiDpmLvmraIgc2VsZWN0b3Ig5Lul5aSW55qE5YWD57Sg5rua5YqoXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4MDI0NjcvcHJldmVudC1zY3JvbGxpbmctb2YtcGFyZW50LWVsZW1lbnRcbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoZXYpIHtcbiAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wXG4gIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0XG4gIGNvbnN0IGhlaWdodCA9ICR0aGlzLmlubmVySGVpZ2h0KClcbiAgY29uc3QgZGVsdGEgPSAoZXYudHlwZSA9PT0gJ0RPTU1vdXNlU2Nyb2xsJyA/XG4gICAgZXYub3JpZ2luYWxFdmVudC5kZXRhaWwgKiAtNDAgOlxuICAgIGV2Lm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YSlcbiAgY29uc3QgdXAgPSBkZWx0YSA+IDBcblxuICBjb25zdCBwcmV2ZW50ID0gKCkgPT4ge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgIGV2LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICghdXAgJiYgLWRlbHRhID4gc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0IC0gc2Nyb2xsVG9wKSB7XG4gICAgLy8gU2Nyb2xsaW5nIGRvd24sIGJ1dCB0aGlzIHdpbGwgdGFrZSB1cyBwYXN0IHRoZSBib3R0b20uXG4gICAgJHRoaXMuc2Nyb2xsVG9wKHNjcm9sbEhlaWdodClcbiAgICByZXR1cm4gcHJldmVudCgpXG4gIH0gZWxzZSBpZiAodXAgJiYgZGVsdGEgPiBzY3JvbGxUb3ApIHtcbiAgICAvLyBTY3JvbGxpbmcgdXAsIGJ1dCB0aGlzIHdpbGwgdGFrZSB1cyBwYXN0IHRoZSB0b3AuXG4gICAgJHRoaXMuc2Nyb2xsVG9wKDApXG4gICAgcmV0dXJuIHByZXZlbnQoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogKHNlbGVjdG9yOiBzdHJpbmcpID0+IHtcbiAgICAkKGRvY3VtZW50KS5vbignRE9NTW91c2VTY3JvbGwgbW91c2V3aGVlbCcsIHNlbGVjdG9yLCBzY3JvbGxIYW5kbGVyKVxuICB9LFxuICBkZXN0cm95OiAoc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICAgICQoZG9jdW1lbnQpLm9mZignRE9NTW91c2VTY3JvbGwgbW91c2V3aGVlbCcsIHNlbGVjdG9yLCBzY3JvbGxIYW5kbGVyKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3V0aWxzL2Jyb3dzZXIvcHJldmVudFNjcm9sbC50c1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyTmF2LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyTmF2LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZXdlci1uYXZfU0wyTVMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MHB4O1xcbiAgbGVmdDogLTIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMTJweCA2M3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4OyB9XFxuICAudmlld2VyLW5hdl9TTDJNUyB1bCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBsaW5lLWhlaWdodDogMS44OyB9XFxuICAgIC52aWV3ZXItbmF2X1NMMk1TIHVsIGxpIGEge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLW5hdlwiOiBcInZpZXdlci1uYXZfU0wyTVNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vc2Fzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1ZpZXdlci9jb21wb25lbnRzL1ZpZXdlck5hdi5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL1ZpZXdlclBhbmVsLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL2NvbXBvbmVudHMvVmlld2VyUGFuZWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDMxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmlld2VyLXBhbmVsXzEwN01ZIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTkwO1xcbiAgYmFja2dyb3VuZDogIzIyMjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xcbiAgaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRhaW5lcl8zTDc4UiB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmJhY2tfMW1WckMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5iYWNrXzFtVnJDIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5iYWNrXzFtVnJDIGEgc3BhbiB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5iYWNrXzFtVnJDIHNwYW4ge1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4OyB9XFxuXFxuLmNvbnRlbnRzXzE2aUdRIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEwMHB4O1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7IH1cXG4gIC5jb250ZW50c18xNmlHUSBzcGFuIHtcXG4gICAgY29sb3I6ICNmZmY7IH1cXG5cXG4udGl0bGVfM01JcFAge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsaW5lLWhlaWdodDogNjBweDsgfVxcblxcbi5wcmVmZXJlbmNlXzJKUVJpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgdG9wOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidmlld2VyLXBhbmVsXCI6IFwidmlld2VyLXBhbmVsXzEwN01ZXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY29udGFpbmVyXzNMNzhSXCIsXG5cdFwiYmFja1wiOiBcImJhY2tfMW1WckNcIixcblx0XCJjb250ZW50c1wiOiBcImNvbnRlbnRzXzE2aUdRXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV8zTUlwUFwiLFxuXHRcInByZWZlcmVuY2VcIjogXCJwcmVmZXJlbmNlXzJKUVJpXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9WaWV3ZXJQYW5lbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9va1BhZ2VzIGZyb20gJy4vQm9va1BhZ2VzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBCb29rQ2hhcHRlciA9ICh7IGlkLCBtYXJrZG93bn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICA8Qm9va1BhZ2VzXG4gICAgICAgIHBhZ2VzPXtbe1xuICAgICAgICAgIG5vZGVzOiBbbWFya2Rvd25dXG4gICAgICAgIH1dfVxuICAgICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGJvb2tGbGVzaDoge1xuICAgIG1hcmtkb3duOiBzdHJpbmdcbiAgICBpZDogc3RyaW5nXG4gIH1bXVxuICBvblJhd0RhdGFNb3VudD86IChyZWY6IEhUTUxFbGVtZW50KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tDaGFwdGVycyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjaGFwdGVyczogSFRNTEVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuICFfLmlzRXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcylcbiAgfVxuXG4gIHRyaWdnZXJVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBvblJhd0RhdGFNb3VudCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvblJhd0RhdGFNb3VudCkge1xuICAgICAgb25SYXdEYXRhTW91bnQodGhpcy5jaGFwdGVycylcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy50cmlnZ2VyVXBkYXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudHJpZ2dlclVwZGF0ZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBib29rRmxlc2ggfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17cmVmID0+IHRoaXMuY2hhcHRlcnMgPSByZWZ9PlxuICAgICAgICB7XG4gICAgICAgICAgKGJvb2tGbGVzaCB8fCBbXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEJvb2tDaGFwdGVyXG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbWFya2Rvd249e2l0ZW0ubWFya2Rvd259XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9WaWV3ZXIvY29tcG9uZW50cy9Cb29rQ2hhcHRlcnMudHN4XG4gKiovIiwiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJ1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9Mb2FkaW5nL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Mb2FkaW5nLnNjc3MnKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBiYWNrZHJvcD86IGJvb2xlYW5cbiAgdGV4dD86IHN0cmluZ1xuICBjZW50ZXI/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGR5bmFtaWNUZXh0Pzogc3RyaW5nXG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG5cbiAgaW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVyXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHluYW1pY1RleHQ6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZHluYW1pY1RleHQubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkeW5hbWljVGV4dDogJycgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGR5bmFtaWNUZXh0OiB0aGlzLnN0YXRlLmR5bmFtaWNUZXh0ICsgJy4nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgNTAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZXh0LCBjZW50ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGR5bmFtaWNUZXh0IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCB3cmFwQ2xhc3MgPSBjbGFzc25hbWVzKHtcbiAgICAgICdsb2FkaW5nLXdyYXAtLWNlbnRlcic6IGNlbnRlcixcbiAgICAgICdsb2FkaW5nLXdyYXAnOiAhY2VudGVyXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT17d3JhcENsYXNzfT5cbiAgICAgICAgPHNwYW4gc3R5bGVOYW1lPVwidGV4dC1sb2FkaW5nXCI+e3RleHQgKyBkeW5hbWljVGV4dH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuTG9hZGluZ1snZGVmYXVsdFByb3BzJ10gPSB7XG4gIHRleHQ6ICfliqDovb3kuK0nXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTG9hZGluZy5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvTG9hZGluZy9Mb2FkaW5nLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAzMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA3XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC1sb2FkaW5nXzNlZnFoIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNTBweCAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjOTk5OyB9XFxuXFxuLnRleHQtbG9hZGluZ18zZWZxaCB7XFxuICBtYXJnaW46IDMwcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5sb2FkaW5nLXdyYXBfaHR5WXoge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5sb2FkaW5nLXdyYXAtLWNlbnRlcl8zUEVJaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0ZXh0LWxvYWRpbmdcIjogXCJ0ZXh0LWxvYWRpbmdfM2VmcWhcIixcblx0XCJsb2FkaW5nLXdyYXBcIjogXCJsb2FkaW5nLXdyYXBfaHR5WXpcIixcblx0XCJsb2FkaW5nLXdyYXAtLWNlbnRlclwiOiBcImxvYWRpbmctd3JhcC0tY2VudGVyXzNQRUloXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Nhc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0xvYWRpbmcvTG9hZGluZy5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgN1xuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vVmlld2VyLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL2luc2VydENzcy5qc1wiKTtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG4gIFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52aWV3ZXIge1xcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vfi9zYXNzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UhLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvVmlld2VyL1ZpZXdlci5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9