exports.ids = [0];
exports.modules = {

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_VContainer__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Viewer_scss__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Viewer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Viewer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schemas__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const mapStateToProps = (state, ownProps) => {
    const bookId = ownProps.params.id;
    const book = __WEBPACK_IMPORTED_MODULE_5__selectors__["b" /* entity */](__WEBPACK_IMPORTED_MODULE_9__schemas__["a" /* default */].BOOK, bookId)(state);
    return {
        book
    };
};
let Viewer = function (_Component) {
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
            return !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEqual(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEqual(this.props, nextProps);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.initializeViewer(this.bookId);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.props.destroy();
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocContainer__["a" /* default */], { bodyClass: "viewer", title: this.props.book.title }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_VContainer__["a" /* default */], null));
        }
    }]);

    return Viewer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Viewer = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__Viewer_scss___default.a)], Viewer);
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { initializeViewer: __WEBPACK_IMPORTED_MODULE_6__actions_viewer__["initializeViewer"], destroy: __WEBPACK_IMPORTED_MODULE_6__actions_viewer__["destroy"] })(Viewer);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loading_scss__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Loading_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Loading_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_gif__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__loading_gif__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let Loading = function (_Component) {
    _inherits(Loading, _Component);

    function Loading(props) {
        _classCallCheck(this, Loading);

        var _this = _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, props));

        _this.state = {
            dynamicDots: ''
        };
        return _this;
    }

    _createClass(Loading, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.intervalId = setInterval(() => {
                if (this.state.dynamicDots.length === 3) {
                    this.setState({ dynamicDots: '' });
                } else {
                    this.setState({
                        dynamicDots: this.state.dynamicDots + '.'
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
            const { text, center, useDynamicDots } = this.props;
            const { dynamicDots } = this.state;
            const wrapClass = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                'loading-wrap--center': center,
                'loading-wrap': !center
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: wrapClass }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { styleName: "text-loading" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { styleName: "gif", src: __WEBPACK_IMPORTED_MODULE_4__loading_gif___default.a }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, text + (useDynamicDots ? dynamicDots : '...'))));
        }
    }]);

    return Loading;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Loading = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_3__Loading_scss___default.a)], Loading);
Loading['defaultProps'] = {
    text: '加载中',
    useDynamicDots: false
};
/* harmony default export */ __webpack_exports__["a"] = Loading;

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loading__ = __webpack_require__(292);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Loading__["a" /* default */];

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".text-loading_3Q6vh {\n  margin: 30px 0;\n  display: inline-block;\n  line-height: 20px;\n  position: relative; }\n\n.loading-wrap_7G2oJ {\n  text-align: left; }\n\n.loading-wrap--center_3AyTV {\n  text-align: center; }\n\n.gif_aZzPl {\n  width: 20px;\n  height: auto;\n  line-height: 20px;\n  opacity: .6;\n  margin-right: 3px;\n  position: relative;\n  top: 2px; }\n", ""]);

// exports
exports.locals = {
	"text-loading": "text-loading_3Q6vh",
	"loading-wrap": "loading-wrap_7G2oJ",
	"loading-wrap--center": "loading-wrap--center_3AyTV",
	"gif": "gif_aZzPl"
};

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/loading.4275970884.gif";

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(294);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Loading.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Loading.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".viewer-panel_3c35T {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 990;\n  background: #fff;\n  color: #666;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);\n  height: 60px; }\n\n.container_f3q06 {\n  max-width: 1200px;\n  margin: 0 auto;\n  height: 60px;\n  position: relative; }\n\n.panel-item_1p29z {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n  line-height: 60px;\n  padding: 0 15px;\n  color: #333; }\n\n.logo_3SBZx {\n  left: 0; }\n  .logo_3SBZx .icon {\n    position: relative;\n    top: 5px; }\n\n.sep_tEdmq {\n  position: absolute;\n  left: 100px;\n  top: 20px;\n  width: 1px;\n  height: 20px;\n  background: #ddd;\n  display: none; }\n  @media (max-width: 540px) {\n    .sep_tEdmq {\n      display: inline-block; } }\n\n.title_Vll8e {\n  font-size: 1.1rem;\n  line-height: 60px;\n  padding: 0;\n  width: 700px;\n  margin: 0 auto;\n  float: none;\n  display: block;\n  position: relative;\n  color: #333; }\n  @media (max-width: 540px) {\n    .title_Vll8e {\n      display: inline-block;\n      position: absolute;\n      left: 120px;\n      top: 0; } }\n\n.preference_2KnV2 {\n  right: 0; }\n  .preference_2KnV2 .icon {\n    position: relative;\n    top: 5px; }\n", ""]);

// exports
exports.locals = {
	"viewer-panel": "viewer-panel_3c35T",
	"container": "container_f3q06",
	"panel-item": "panel-item_1p29z",
	"logo": "logo_3SBZx panel-item_1p29z",
	"sep": "sep_tEdmq",
	"title": "title_Vll8e",
	"preference": "preference_2KnV2 panel-item_1p29z"
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Fade__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Slide__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Fade__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Slide__["a"]; });




/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BookPage__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookPages_scss__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookPages_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__BookPages_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_viewerDefs__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const mapStateToProps = (state, ownProps) => {
    const config = __WEBPACK_IMPORTED_MODULE_6__selectors__["c" /* viewer */].config(state);
    const bookId = __WEBPACK_IMPORTED_MODULE_6__selectors__["c" /* viewer */].id(state);
    // const computed = selectors.viewer.computed(bookId)(state)
    // const currentPageNo = selectors.viewer.progress(bookId)(state).pageNo
    return { config, bookId };
};
let BookPages = function (_Component) {
    _inherits(BookPages, _Component);

    function BookPages(props) {
        _classCallCheck(this, BookPages);

        return _possibleConstructorReturn(this, (BookPages.__proto__ || Object.getPrototypeOf(BookPages)).call(this, props));
    }

    _createClass(BookPages, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isEqual(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isEqual(this.props, nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            const { pages, startPageIndex, limit, config: { theme, isScrollMode, pageHeight, isCalcMode, fluid, width } } = this.props;
            const totalHeight = pages.length * pageHeight;
            const className = __WEBPACK_IMPORTED_MODULE_5_classnames___default()({
                'pages': !fluid,
                'pages--fluid': fluid,
                [theme && theme.toLocaleLowerCase()]: Boolean(theme)
            });
            const ulHeight = isCalcMode ? 'auto' : isScrollMode ? totalHeight : pageHeight;
            const ulStyle = {
                height: ulHeight,
                width: fluid ? width : __WEBPACK_IMPORTED_MODULE_9__constants_viewerDefs__["c" /* MOBILE_BREAK_POINT */]
            };
            const pagesToRender = pages.slice(startPageIndex, startPageIndex + (limit || pages.length));
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: className, style: ulStyle }, pagesToRender.map((page, index) => {
                // const active = page.meta && page.meta.pageNo === currentPageNo
                const active = false;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__BookPage__["a" /* default */], { fluid: fluid, page: page, pageHeight: pageHeight, key: index, active: active });
            }));
        }
    }]);

    return BookPages;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookPages = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__BookPages_scss___default.a, {
    allowMultiple: true
})], BookPages);
BookPages['defaultProps'] = {
    startPageIndex: 0
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["sendNotification"] })(BookPages);

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





const ReactMarkdown = __webpack_require__(396);

let Markdown = function (_Component) {
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
            const { input, renderers } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ReactMarkdown, { className: className, source: input, renderers: renderers || {}, escapeHtml: false, skipHtml: false });
        }
    }, {
        key: 'renderUnSafely',
        value: function renderUnSafely(className) {
            const { input, markedRenderers } = this.props;
            let renderer = new __WEBPACK_IMPORTED_MODULE_1_marked___default.a.Renderer();
            if (markedRenderers) {
                __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.forEach(markedRenderers, (val, key) => {
                    if (key !== 'line') {
                        renderer[key] = val;
                    }
                });
            }
            let html = __WEBPACK_IMPORTED_MODULE_1_marked___default()(input, {
                gfm: false,
                breaks: true,
                renderer
            });
            if (markedRenderers && markedRenderers.line) {
                html = Array.prototype.filter.call(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(html), ele => {
                    // 移除元素间的回车及字符串
                    return ele.nodeType !== 3;
                }).map(ele => {
                    return markedRenderers.line(ele);
                }).join('');
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: html } });
        }
    }, {
        key: 'render',
        value: function render() {
            const { safe, className } = this.props;
            return safe ? this.renderSafely(className) : this.renderUnSafely(className);
        }
    }]);

    return Markdown;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Markdown['defaultProps'] = {
    safe: true
};
/* harmony default export */ __webpack_exports__["a"] = Markdown;

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Markdown__ = __webpack_require__(341);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Markdown__["a" /* default */];

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group__);


const styles = __webpack_require__(379);
/* harmony default export */ __webpack_exports__["a"] = props => {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_addons_css_transition_group___default.a, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slide__ = __webpack_require__(343);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Slide__["a" /* default */];

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BookPages__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookRaw__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Loading__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BookContainer_scss__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BookContainer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__BookContainer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__schemas__ = __webpack_require__(15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const mapStateToProps = state => {
    const bookId = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].id(state);
    const config = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].config(state);
    const status = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].status(state);
    const computed = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].computed(bookId)(state);
    const bookContent = __WEBPACK_IMPORTED_MODULE_5__selectors__["b" /* entity */](__WEBPACK_IMPORTED_MODULE_11__schemas__["a" /* default */].BOOK_CONTENT, bookId)(state);
    const localProgress = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].localProgress(bookId)(state);
    return {
        status,
        config,
        computed,
        bookContent,
        bookId,
        localProgress
    };
};
let BookContainer = function (_Component) {
    _inherits(BookContainer, _Component);

    function BookContainer(props) {
        _classCallCheck(this, BookContainer);

        var _this = _possibleConstructorReturn(this, (BookContainer.__proto__ || Object.getPrototypeOf(BookContainer)).call(this, props));

        _this.handleRawMount = _this.handleRawMount.bind(_this);
        return _this;
    }

    _createClass(BookContainer, [{
        key: "handleRawMount",
        value: function handleRawMount(wrap) {
            this.props.viewerActions.calcBook(this.props.bookId, wrap);
        }
    }, {
        key: "render",
        value: function render() {
            const { config: { theme, isCalcMode, isScrollMode, pageHeight }, status: { isReady }, computed, bookContent, localProgress, bookId } = this.props;
            const { flesh: bookFlesh } = bookContent;
            const pageNo = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(localProgress), 'page', 1);
            const pageLimit = 5;
            let startPageIndex;
            startPageIndex = pageNo - Math.ceil(pageLimit / 2);
            startPageIndex = startPageIndex < 0 ? 0 : startPageIndex;
            const divHeight = isCalcMode ? 'auto' : isScrollMode ? computed.length * pageHeight : pageHeight;
            // todo: use viewer status
            return bookId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "book-container", styleName: theme.toLowerCase(), style: { height: divHeight } }, !isReady && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Loading__["a" /* default */], { center: true }), isCalcMode && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__BookRaw__["a" /* default */], { bookFlesh: bookFlesh, onRawDataMount: this.handleRawMount }), isReady && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__BookPages__["a" /* default */], { startPageIndex: startPageIndex, limit: pageLimit, pages: computed }));
        }
    }]);

    return BookContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookContainer = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_10__BookContainer_scss___default.a)], BookContainer);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, dispatch => ({
    viewerActions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_6__actions__["viewer"], dispatch)
}))(BookContainer);

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Markdown__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookPage_scss__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookPage_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__BookPage_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const renderers = {
    paragraph(text) {
        return `<p class="${__WEBPACK_IMPORTED_MODULE_8__BookPage_scss___default.a['gb-line']}">${text}</p>`;
    },
    link(href, title, text) {
        if (href.indexOf('http://') === -1) {
            return `<a href="${href}" class="js-book-nav">${text}</a>`;
        }
        return `<a href="${href}" target="_blank">${text}</a>`;
    },
    line(ele) {
        const tagName = ele.tagName;
        if (tagName !== 'P') {
            return `<div class="${__WEBPACK_IMPORTED_MODULE_8__BookPage_scss___default.a['gb-line']}">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`;
        }
        return ele.outerHTML;
    }
};
const mapStateToProps = (state, ownProps) => {
    const { fontSize, theme, isScrollMode } = __WEBPACK_IMPORTED_MODULE_7__selectors__["c" /* viewer */].config(state);
    return { fontSize, theme, isScrollMode };
};
let BookPage = function (_Component) {
    _inherits(BookPage, _Component);

    function BookPage() {
        _classCallCheck(this, BookPage);

        return _possibleConstructorReturn(this, (BookPage.__proto__ || Object.getPrototypeOf(BookPage)).apply(this, arguments));
    }

    _createClass(BookPage, [{
        key: "render",
        value: function render() {
            const { page: { nodes, meta }, pageHeight, fluid, fontSize, theme, isScrollMode, active } = this.props;
            const mdInput = nodes.join('\n\n');
            const contentStyle = { fontSize };
            let liStyle = {};
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
            const className = __WEBPACK_IMPORTED_MODULE_1_classnames___default()({
                'page': !fluid,
                'page--fluid': fluid,
                [theme && theme.toLocaleLowerCase()]: Boolean(theme)
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: className, style: liStyle }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: contentStyle, styleName: "content", ref: ref => {
                    this.bookPageDom = ref;
                } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Markdown__["a" /* default */], { className: "lines", input: mdInput, safe: false, markedRenderers: renderers })), meta && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "page-no" }, meta.pageNo));
        }
    }]);

    return BookPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookPage = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__BookPage_scss___default.a, {
    allowMultiple: true
})], BookPage);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, dispatch => ({
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_6__actions__, dispatch)
}))(BookPage);

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BookPages__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// id attr is needed in calc
// not perfect but works
const Chapter = ({ id, markdown }) => {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: id }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__BookPages__["a" /* default */], { pages: [{
            nodes: [markdown]
        }] }));
};

let BookRaw = function (_Component) {
    _inherits(BookRaw, _Component);

    function BookRaw(props) {
        _classCallCheck(this, BookRaw);

        return _possibleConstructorReturn(this, (BookRaw.__proto__ || Object.getPrototypeOf(BookRaw)).call(this, props));
    }

    _createClass(BookRaw, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEqual(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEqual(this.props, nextProps);
        }
    }, {
        key: 'triggerUpdate',
        value: function triggerUpdate() {
            const { onRawDataMount } = this.props;
            if (onRawDataMount && this.props.bookFlesh && this.props.bookFlesh.length !== 0) {
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
            const { bookFlesh } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "book-raw", ref: ref => this.chapters = ref }, (bookFlesh || []).map(item => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Chapter, { id: item.id, markdown: item.markdown, key: item.id });
            }));
        }
    }]);

    return BookRaw;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = BookRaw;

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_animations__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProgressBar_scss__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ProgressBar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ProgressBar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VNav__ = __webpack_require__(359);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ProgressBar = function (_Component) {
    _inherits(ProgressBar, _Component);

    function ProgressBar(props) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

        _this.handleContentsClick = _this.handleContentsClick.bind(_this);
        return _this;
    }

    _createClass(ProgressBar, [{
        key: "handleContentsClick",
        value: function handleContentsClick() {
            this.props.toggleViewerNavigation();
            this.props.toggleViewerPreference(false);
        }
    }, {
        key: "render",
        value: function render() {
            const { localProgress, components: { showProgress, showNavigation } } = this.props;
            const latestLocalProgress = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.last(localProgress) || {};
            const { page, pageCount } = latestLocalProgress;
            const percentage = (page / pageCount * 100).toFixed(2) + '%';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_animations__["a" /* Slide */], null, showProgress && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "loc-info" }, page && pageCount && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "menu", onClick: this.handleContentsClick }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Icon__["a" /* default */], { name: "menu", size: 20 }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_animations__["b" /* Fade */], null, showNavigation && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__VNav__["a" /* default */], null))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, page, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "sep" }, "/"), pageCount), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "sub-info" }, percentage)))));
        }
    }]);

    return ProgressBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
ProgressBar = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_7__ProgressBar_scss___default.a)], ProgressBar);
const mapStateToProps = (state, ownProps) => {
    const id = __WEBPACK_IMPORTED_MODULE_6__selectors__["c" /* viewer */].id(state);
    return {
        localProgress: __WEBPACK_IMPORTED_MODULE_6__selectors__["c" /* viewer */].localProgress(id)(state),
        components: __WEBPACK_IMPORTED_MODULE_6__selectors__["c" /* viewer */].components(state)
    };
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, { toggleViewerNavigation: __WEBPACK_IMPORTED_MODULE_5__actions_viewer__["toggleViewerNavigation"], toggleViewerPreference: __WEBPACK_IMPORTED_MODULE_5__actions_viewer__["toggleViewerPreference"] })(ProgressBar);

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BookContainer__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VPanel__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ProgressBar__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_shouldViewerBeFluid__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_dom_isDescendant__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










// import { MOBILE_BREAK_POINT } from '../../../constants/viewerDefs'



const mapStateToProps = (state, ownProps) => {
    const config = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].config(state);
    const bookId = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].id(state);
    const computed = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].computed(bookId)(state);
    return {
        bookId,
        computed,
        config
    };
};

let VContainer = function (_Component) {
    _inherits(VContainer, _Component);

    function VContainer(props) {
        _classCallCheck(this, VContainer);

        var _this = _possibleConstructorReturn(this, (VContainer.__proto__ || Object.getPrototypeOf(VContainer)).call(this, props));

        _this.scrollTop = [];
        _this._handleResize = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.debounce(_this.handleResize.bind(_this), 500, {
            maxWait: 1000
        });
        _this._handleScroll = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.debounce(_this.handleScroll.bind(_this), 200, {
            maxWait: 1000
        });
        _this.handleFastScroll = _this.handleFastScroll.bind(_this);
        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
        return _this;
    }

    _createClass(VContainer, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isEqual(this.state, nextState) || !__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isEqual(this.props, nextProps);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addEventListeners();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeEventListeners();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            const { computed, bookId, config: { pageHeight, isScrollMode } } = this.props;
            const pageCount = computed.length;
            const totalHeight = pageCount * pageHeight;
            const scrollTop = document.body.scrollTop;
            const percentage = scrollTop / totalHeight;
            if (isScrollMode) {
                this.props.actions.viewer.updateLocalProgress(bookId, {
                    percentage,
                    pageCount,
                    timestamp: new Date().valueOf().toString(),
                    page: Math.round(pageCount * percentage)
                });
                this.props.actions.api.updateBookProgress(bookId, percentage);
            }
        }
    }, {
        key: 'handleFastScroll',
        value: function handleFastScroll() {
            const scrollTop = document.body.scrollTop;
            this.scrollTop.push(scrollTop);
            const scrollCount = this.scrollTop.length;
            if (scrollCount >= 2) {
                const delta = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.last(this.scrollTop) - this.scrollTop[scrollCount - 2];
                if (delta > 0) {
                    // down
                    this.props.actions.viewer.toggleViewerPanel(false);
                    this.props.actions.viewer.toggleViewerProgressInfo(false);
                    this.props.actions.viewer.toggleViewerNavigation(false);
                    this.props.actions.viewer.toggleViewerPreference(false);
                } else {
                    // up
                    this.props.actions.viewer.toggleViewerPanel(true);
                    this.props.actions.viewer.toggleViewerProgressInfo(true);
                }
            }
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            const { config: { fluid, width } } = this.props;
            const viewerWidth = __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* default */].getScreenInfo().width;
            const _fluid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_shouldViewerBeFluid__["a" /* default */])();
            const shouldUpdate = fluid !== _fluid || fluid && __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* default */].getScreenInfo().width !== width;
            if (shouldUpdate) {
                this.props.actions.viewer.configViewer({
                    fluid: _fluid,
                    width: viewerWidth
                });
            }
        }
    }, {
        key: 'handleGlobalClick',
        value: function handleGlobalClick(e) {
            const vPanel = document.querySelector('.js-vpanel');
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__utils_dom_isDescendant__["a" /* default */])(vPanel, e.target)) {
                this.props.actions.viewer.toggleViewerNavigation(false);
            }
        }
    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            window.addEventListener('click', this.handleGlobalClick);
            window.addEventListener('scroll', this._handleScroll);
            window.addEventListener('scroll', this.handleFastScroll);
            window.addEventListener('resize', this._handleResize);
        }
    }, {
        key: 'removeEventListeners',
        value: function removeEventListeners() {
            window.removeEventListener('scroll', this._handleScroll);
            window.removeEventListener('scroll', this.handleFastScroll);
            window.removeEventListener('resize', this._handleResize);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "viewer-container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__VPanel__["a" /* default */], { className: "js-vpanel" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__BookContainer__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ProgressBar__["a" /* default */], null));
        }
    }]);

    return VContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, dispatch => ({
    actions: {
        api: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__actions__["api"], dispatch),
        viewer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_2__actions__["viewer"], dispatch)
    }
}))(VContainer);

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_browser_preventScroll__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VNav_scss__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VNav_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__VNav_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schemas__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Icon__ = __webpack_require__(26);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const JS_NAV_HOOK = 'a.js-book-nav';
const mapStateToProps = (state, ownProps) => {
    const bookId = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].id(state);
    const bookInfo = __WEBPACK_IMPORTED_MODULE_4__selectors__["b" /* entity */](__WEBPACK_IMPORTED_MODULE_9__schemas__["a" /* default */].BOOK, bookId)(state);
    const nav = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].navData(bookId)(state);
    const computedPages = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].computed(bookId)(state);
    const config = __WEBPACK_IMPORTED_MODULE_4__selectors__["c" /* viewer */].config(state);
    return { nav, computedPages, config, bookInfo };
};
let VNav = function (_Component) {
    _inherits(VNav, _Component);

    function VNav(props) {
        _classCallCheck(this, VNav);

        var _this = _possibleConstructorReturn(this, (VNav.__proto__ || Object.getPrototypeOf(VNav)).call(this, props));

        _this.handleNavLinkClick = _this.handleNavLinkClick.bind(_this);
        return _this;
    }

    _createClass(VNav, [{
        key: "handleNavLinkClick",
        value: function handleNavLinkClick(e) {
            e.preventDefault();
            const { computedPages } = this.props;
            const href = __WEBPACK_IMPORTED_MODULE_7_jquery___default()(e.target).attr('href');
            try {
                const pageNo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* resolveBookLocation */])(href, computedPages);
                const percentage = (pageNo - 1) / computedPages.length;
                this.props.viewerGoTo(percentage);
            } catch (error) {
                this.props.sendNotification(error.message, 'error');
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.$body = __WEBPACK_IMPORTED_MODULE_7_jquery___default()('body');
            __WEBPACK_IMPORTED_MODULE_5__utils_browser_preventScroll__["a" /* default */].init('.js-nav-scroll');
            this.$body.on('click', JS_NAV_HOOK, this.handleNavLinkClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            __WEBPACK_IMPORTED_MODULE_5__utils_browser_preventScroll__["a" /* default */].destroy('.js-nav-scroll');
            this.$body.off('click', JS_NAV_HOOK, this.handleNavLinkClick);
        }
    }, {
        key: "renderLink",
        value: function renderLink(ref, hash, label) {
            if (hash) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "js-book-nav text-link", href: `#${ref}$${hash}` }, label);
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", { className: "js-book-nav text-link", href: `#${ref}` }, label);
        }
    }, {
        key: "renderNav",
        value: function renderNav(navList) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, navList.map((item, index) => {
                if (item.children) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index }, this.renderLink(item.ref, item.hash, item.label), this.renderNav(item.children));
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index }, this.renderLink(item.ref, item.hash, item.label));
            }));
        }
    }, {
        key: "render",
        value: function render() {
            const { nav, config: { fluid, width }, bookInfo } = this.props;
            const _width = fluid ? width - 50 : 300;
            const navStyle = {};
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "js-nav-scroll", styleName: "viewer-nav", style: navStyle }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "title" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "\u4E66\u67B6"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Icon__["a" /* default */], { name: "book", size: 30 })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "wrap" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-title" }, bookInfo.title), this.renderNav(nav)));
        }
    }]);

    return VNav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
VNav = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__VNav_scss___default.a)], VNav);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, {
    viewerGoTo: __WEBPACK_IMPORTED_MODULE_3__actions__["viewer"].viewerGoTo,
    sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"]
})(VNav);

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Icon__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_animations__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VPreference__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VPanel_scss__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VPanel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__VPanel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__schemas__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Logo__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Link } from 'react-router'











const mapStateToProps = (state, ownProps) => {
    const config = __WEBPACK_IMPORTED_MODULE_8__selectors__["c" /* viewer */].config(state);
    const bookId = __WEBPACK_IMPORTED_MODULE_8__selectors__["c" /* viewer */].id(state);
    const components = __WEBPACK_IMPORTED_MODULE_8__selectors__["c" /* viewer */].components(state);
    const { title } = __WEBPACK_IMPORTED_MODULE_8__selectors__["b" /* entity */](__WEBPACK_IMPORTED_MODULE_10__schemas__["a" /* default */].BOOK, bookId)(state);
    return { config, components, title };
};
let VPanel = function (_Component) {
    _inherits(VPanel, _Component);

    function VPanel(props) {
        _classCallCheck(this, VPanel);

        var _this = _possibleConstructorReturn(this, (VPanel.__proto__ || Object.getPrototypeOf(VPanel)).call(this, props));

        _this.handlePrefClick = _this.handlePrefClick.bind(_this);
        return _this;
    }

    _createClass(VPanel, [{
        key: "handlePrefClick",
        value: function handlePrefClick() {
            this.props.viewerActions.toggleViewerPreference();
            this.props.viewerActions.toggleViewerNavigation(false);
        }
    }, {
        key: "render",
        value: function render() {
            const { title, className, components: { showPanel, showPreference } } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_animations__["a" /* Slide */], null, showPanel && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { ref: ref => {
                    this.panel = ref;
                }, styleName: "viewer-panel", className: className || '' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "logo" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Logo__["a" /* default */], { dark: true })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "sep" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "title" }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { ref: ref => {
                    this.pref = ref;
                }, styleName: "preference", onClick: this.handlePrefClick }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Icon__["a" /* default */], { name: "font", size: 20 }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_animations__["b" /* Fade */], null, showPreference && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__VPreference__["a" /* default */], null))))));
        }
    }]);

    return VPanel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
VPanel = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_9__VPanel_scss___default.a)], VPanel);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, dispatch => ({
    viewerActions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_7__actions__["viewer"], dispatch)
}))(VPanel);

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_viewerDefs__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VPreference_scss__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VPreference_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__VPreference_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import Switcher from '../../../components/Switcher'









const MAX_FONT_SIZE = 20;
const MIN_FONT_SIZE = 12;
const mapStateToProps = (state, ownProps) => {
    const { fontSize, isScrollMode, theme } = __WEBPACK_IMPORTED_MODULE_5__selectors__["c" /* viewer */].config(state);
    return { fontSize, isScrollMode, theme };
};
let VPreference = function (_Component) {
    _inherits(VPreference, _Component);

    function VPreference(props) {
        _classCallCheck(this, VPreference);

        return _possibleConstructorReturn(this, (VPreference.__proto__ || Object.getPrototypeOf(VPreference)).call(this, props));
    }

    _createClass(VPreference, [{
        key: "handleDecFontSizeClick",
        value: function handleDecFontSizeClick() {
            const { fontSize } = this.props;
            const { isDecDisabled } = this.getBtnStatus();
            if (!isDecDisabled) {
                this.props.actions.configViewer({
                    fontSize: fontSize - 1
                });
            }
        }
    }, {
        key: "handleIncFontSizeClick",
        value: function handleIncFontSizeClick() {
            const { fontSize } = this.props;
            const { isIncDisabled } = this.getBtnStatus();
            if (!isIncDisabled) {
                this.props.actions.configViewer({
                    fontSize: fontSize + 1
                });
            }
        }
    }, {
        key: "handleChangeThemeClick",
        value: function handleChangeThemeClick(key) {
            this.props.actions.configViewer({
                theme: key
            });
        }
    }, {
        key: "handleToggleScrollModeClick",
        value: function handleToggleScrollModeClick(val) {
            this.props.actions.configViewer({
                isScrollMode: val
            });
        }
    }, {
        key: "getBtnStatus",
        value: function getBtnStatus() {
            const { fontSize } = this.props;
            const isDecDisabled = fontSize <= MIN_FONT_SIZE;
            const isIncDisabled = fontSize >= MAX_FONT_SIZE;
            return { isDecDisabled, isIncDisabled };
        }
    }, {
        key: "render",
        value: function render() {
            const { isDecDisabled, isIncDisabled } = this.getBtnStatus();
            const { theme } = this.props;
            const btnDecClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
                'btn': !isDecDisabled,
                'btn--disabled': isDecDisabled
            });
            const btnIncClass = __WEBPACK_IMPORTED_MODULE_6_classnames___default()({
                'btn': !isIncDisabled,
                'btn--disabled': isIncDisabled
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "viewer-preference" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { className: "options" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option-font-size" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option-theme" }, __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.keys(__WEBPACK_IMPORTED_MODULE_7__constants_viewerDefs__["d" /* THEMES */]).map((key, index) => {
                const className = key.toLowerCase() + (theme === key ? '--active' : '');
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { key: index, className: __WEBPACK_IMPORTED_MODULE_9__VPreference_scss___default.a[className], onClick: this.handleChangeThemeClick.bind(this, key) }, key);
            }))));
        }
    }]);

    return VPreference;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
VPreference = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_9__VPreference_scss___default.a)], VPreference);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, dispatch => ({
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_4__actions_viewer__, dispatch)
}))(VPreference);

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveBookLocation;
function resolveBookLocation(href, computedPages) {
    const chapterId = href.split('$')[0];
    const hash = href.split('$')[1];
    let i = 0;
    let foundChapterPage;
    while (i < computedPages.length) {
        const page = computedPages[i];
        if (`#${page.meta.chapterId}` === chapterId) {
            foundChapterPage = page.meta.pageNo;
            if (hash) {
                if (page.meta.hash && page.meta.hash.indexOf(hash) !== -1) {
                    // helpers.print('with hash', page.meta.pageNo)
                    return page.meta.pageNo;
                }
            } else {
                // helpers.print('without hash', page.meta.pageNo)
                return page.meta.pageNo;
            }
        }
        i++;
    }
    if (!foundChapterPage) {
        throw new Error('未找到位置！');
    }
    console.warn('所在章节未找到位置，已跳转至章节！');
    // helpers.print('foundChapterPage', foundChapterPage)
    return foundChapterPage;
}

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/**
 * 阻止 selector 以外的元素滚动
 * http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element
 */

function scrollHandler(ev) {
    const $this = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
    const scrollTop = this.scrollTop;
    const scrollHeight = this.scrollHeight;
    const height = $this.innerHeight();
    const delta = ev.type === 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta;
    const up = delta > 0;
    const prevent = () => {
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
}
/* harmony default export */ __webpack_exports__["a"] = {
    init: selector => {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('DOMMouseScroll mousewheel', selector, scrollHandler);
    },
    destroy: selector => {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off('DOMMouseScroll mousewheel', selector, scrollHandler);
    }
};

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".enter_1v5B1 {\n  transform: translateY(-100%);\n  opacity: 0.01;\n  transition: all .3s; }\n\n.enterActive_26TbM {\n  transform: translateY(0);\n  opacity: 1; }\n\n.leave_a2XRB {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all .3s; }\n\n.seaveActive_9yLLN {\n  transform: translateY(-100%);\n  opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"enter": "enter_1v5B1",
	"enterActive": "enterActive_26TbM",
	"leave": "leave_a2XRB",
	"seaveActive": "seaveActive_9yLLN"
};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".viewer {\n  background: #eee; }\n", ""]);

// exports


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".white_2z99Y {\n  background: #eee; }\n\n.night_37Qro {\n  background: #222; }\n\n.sepia_1cfSe {\n  background: #f9f1e5; }\n", ""]);

// exports
exports.locals = {
	"white": "white_2z99Y",
	"night": "night_37Qro",
	"sepia": "sepia_1cfSe"
};

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pages_19v_x {\n  position: relative;\n  margin: 0 auto;\n  background: #fff; }\n\n.pages--fluid_1dnEL { }\n\n.white_1oLZj {\n  background: #fff; }\n\n.night_ZSdxF {\n  background: #333; }\n\n.sepia_3Vs2d {\n  background: #fbf7f1; }\n", ""]);

// exports
exports.locals = {
	"pages": "pages_19v_x",
	"pages--fluid": "pages--fluid_1dnEL pages_19v_x",
	"white": "white_1oLZj",
	"night": "night_ZSdxF",
	"sepia": "sepia_3Vs2d"
};

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports
exports.i(__webpack_require__(330), undefined);

// module
exports.push([module.i, ".scrollbar_3zKIy {\n  width: 2px;\n  min-height: 400px;\n  position: fixed;\n  right: 40px;\n  top: 100px; }\n  .scrollbar_3zKIy:hover .button_3wZu2 {\n    display: block; }\n\n.track_3KmTR {\n  width: 2px;\n  background: #c4c4c4;\n  border-radius: 3px;\n  position: absolute;\n  left: 8px;\n  top: 0;\n  z-index: 1; }\n\n.track--past_1ZPLX {\n  background: #5866db;\n  z-index: 2; }\n\n.button_3wZu2 {\n  width: 20px;\n  height: 20px;\n  background: #1B267F;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  position: absolute;\n  left: 0;\n  top: 84px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 3;\n  display: none; }\n\n.loc-info_2SI7Q {\n  text-align: center;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  color: #222;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.44);\n  padding: 7px 15px;\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #fff; }\n  .loc-info_2SI7Q .sep_18qtN {\n    margin: 0 3px; }\n\n.container_VgExb {\n  max-width: 1200px;\n  margin: 0 auto;\n  position: relative; }\n\n.sub-info_1-V7a {\n  font-size: 0.8rem;\n  color: #999; }\n\n.menu_1r-Qw {\n  left: 0; }\n", ""]);

// exports
exports.locals = {
	"scrollbar": "scrollbar_3zKIy",
	"button": "button_3wZu2",
	"track": "track_3KmTR",
	"track--past": "track--past_1ZPLX track_3KmTR",
	"loc-info": "loc-info_2SI7Q",
	"sep": "sep_18qtN",
	"container": "container_VgExb",
	"sub-info": "sub-info_1-V7a",
	"menu": "menu_1r-Qw " + __webpack_require__(330).locals["panel-item"] + ""
};

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".viewer-nav_rTyXD {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 300px;\n  background: #fff;\n  overflow-y: scroll;\n  z-index: 1000;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15); }\n  @media (max-width: 540px) {\n    .viewer-nav_rTyXD {\n      width: 70%; } }\n  .viewer-nav_rTyXD ul {\n    text-align: left;\n    line-height: 2.2; }\n\n.title_6m1z4 {\n  font-size: 1.2rem;\n  height: 60px;\n  line-height: 60px;\n  padding-left: 15px;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n  font-weight: bold;\n  color: #333; }\n  .title_6m1z4 span.icon {\n    position: absolute;\n    right: 15px;\n    top: 10px;\n    color: #333; }\n\n.book-title_1N2dD {\n  font-size: 1rem;\n  font-weight: bold;\n  color: #333;\n  line-height: 2.2;\n  margin-top: 20px; }\n\n.wrap_2jN-Y {\n  padding: 0 20px; }\n", ""]);

// exports
exports.locals = {
	"viewer-nav": "viewer-nav_rTyXD",
	"title": "title_6m1z4",
	"book-title": "book-title_1N2dD",
	"wrap": "wrap_2jN-Y"
};

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".viewer-preference_nLmwe {\n  position: absolute;\n  right: 0;\n  top: 55px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden;\n  text-align: center; }\n\n.option_2fz_V {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_2fz_V:last-child {\n    border: none; }\n\n.option-font-size_3UrJc {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_3UrJc .btn_2jpGe, .option-font-size_3UrJc .btn--disabled_2a8Ch {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n    .option-font-size_3UrJc .btn_2jpGe:hover, .option-font-size_3UrJc .btn--disabled_2a8Ch:hover {\n      color: #333; }\n    .option-font-size_3UrJc .btn_2jpGe:active, .option-font-size_3UrJc .btn--disabled_2a8Ch:active {\n      color: #999; }\n  .option-font-size_3UrJc .btn_2jpGe:first-child, .option-font-size_3UrJc .btn--disabled_2a8Ch:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n  .option-font-size_3UrJc .btn--disabled_2a8Ch {\n    color: #ddd; }\n\n.option-scroll_26bF8 {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_26bF8 .label_1T8CI {\n    float: left; }\n  .option-scroll_26bF8 .switcher_2a_E- {\n    float: right; }\n\n.option-theme_1_Gw1 {\n  padding: 5px 0; }\n\n.theme-btn_M8DYK {\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  text-indent: -999em;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  cursor: pointer; }\n\n.white_2oNub {\n  background: #fff; }\n\n.white--active_3P6rW {\n  background: #fff;\n  border-color: #1B267F; }\n\n.night_1CUK2 {\n  background: #222; }\n\n.night--active_1OZtV {\n  background: #222;\n  border-color: #1B267F; }\n\n.sepia_2WAxe {\n  background: #f9f1e5; }\n\n.sepia--active_1oxnd {\n  background: #f9f1e5;\n  border-color: #1B267F; }\n", ""]);

// exports
exports.locals = {
	"viewer-preference": "viewer-preference_nLmwe",
	"option": "option_2fz_V",
	"option-font-size": "option-font-size_3UrJc option_2fz_V",
	"btn": "btn_2jpGe",
	"btn--disabled": "btn--disabled_2a8Ch",
	"option-scroll": "option-scroll_26bF8 option_2fz_V",
	"label": "label_1T8CI",
	"switcher": "switcher_2a_E-",
	"option-theme": "option-theme_1_Gw1 option_2fz_V",
	"theme-btn": "theme-btn_M8DYK",
	"white": "white_2oNub theme-btn_M8DYK",
	"white--active": "white--active_3P6rW theme-btn_M8DYK",
	"night": "night_1CUK2 theme-btn_M8DYK",
	"night--active": "night--active_1OZtV theme-btn_M8DYK",
	"sepia": "sepia_2WAxe theme-btn_M8DYK",
	"sepia--active": "sepia--active_1oxnd theme-btn_M8DYK"
};

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(366);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Slide.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Slide.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(373);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Viewer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Viewer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(374);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookContainer.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookContainer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(375);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookPages.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./BookPages.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(376);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./ProgressBar.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./ProgressBar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(377);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VNav.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VNav.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(330);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VPanel.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VPanel.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(378);
    var insertCss = __webpack_require__(3);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VPreference.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./VPreference.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.0.js.map