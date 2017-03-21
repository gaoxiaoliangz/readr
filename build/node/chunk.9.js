exports.ids = [9];
exports.modules = {

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Loading__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookDetail_scss__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BookDetail_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__BookDetail_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__schemas__ = __webpack_require__(35);
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










let BookDetail = function (_Component) {
    _inherits(BookDetail, _Component);

    function BookDetail(props) {
        _classCallCheck(this, BookDetail);

        var _this = _possibleConstructorReturn(this, (BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).call(this, props));

        _this.bookId = props.params.id;
        return _this;
    }

    _createClass(BookDetail, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.loadBookInfo(this.bookId);
        }
    }, {
        key: "render",
        value: function render() {
            const { bookInfo } = this.props;
            const isFetching = bookInfo.fetchStatus === 'loading';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_DocContainer__["a" /* default */], { bodyClass: "book-info", title: bookInfo.title }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", { styleName: "book-info-container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-detail" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", { styleName: "header" }, isFetching ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Loading__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "left-col" }, bookInfo.cover && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-cover" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { styleName: "img", src: bookInfo.cover }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "right-col" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { styleName: "book-name" }, bookInfo.title || '无标题'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-author" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, "\u4F5C\u8005\uFF1A", bookInfo.authors && bookInfo.authors.map(a => a.name).join(', ') || '未知')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { styleName: "btn-read", to: `/viewer/book/${bookInfo.id}`, color: "blue" }, "\u9605\u8BFB"))))), bookInfo.description && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "content" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "desc" }, "\u5185\u5BB9\u7B80\u4ECB"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, bookInfo.description))))));
        }
    }]);

    return BookDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookDetail = __decorate([__WEBPACK_IMPORTED_MODULE_6_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_8__BookDetail_scss___default.a)], BookDetail);
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.params.id;
    return {
        bookInfo: __WEBPACK_IMPORTED_MODULE_7__selectors__["b" /* entity */](__WEBPACK_IMPORTED_MODULE_9__schemas__["a" /* default */].BOOK, id)(state)
    };
};
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { loadBookInfo: __WEBPACK_IMPORTED_MODULE_2__actions_api__["loadBookInfo"] })(BookDetail);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(17);
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
exports.push([module.i, ".text-loading_3Q6vh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3Q6vh {\n  margin: 30px 0;\n  display: inline-block;\n  line-height: 20px;\n  position: relative; }\n\n.loading-wrap_7G2oJ {\n  text-align: left; }\n\n.loading-wrap--center_3AyTV {\n  text-align: center; }\n\n.gif_aZzPl {\n  width: 20px;\n  height: auto;\n  line-height: 20px;\n  opacity: .6;\n  margin-right: 3px;\n  position: relative;\n  top: 2px; }\n", ""]);

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

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".book-detail_Iinfr {\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  margin-top: 40px; }\n\n.book-info-container_12Cuh {\n  max-width: 700px;\n  margin: 0 auto; }\n\n.header_kUeRW {\n  overflow: hidden;\n  padding: 40px 40px;\n  position: relative; }\n  @media (max-width: 540px) {\n    .header_kUeRW {\n      padding: 20px; } }\n\n.content_QQ2OP {\n  padding: 40px 40px;\n  border-top: 1px solid #ddd;\n  line-height: 1.7; }\n  @media (max-width: 540px) {\n    .content_QQ2OP {\n      padding: 20px; } }\n\n.btn-read_A9Lcq {\n  position: absolute;\n  bottom: 40px; }\n\n.left-col_1xTZr {\n  float: left;\n  margin-right: 30px; }\n\n.right-col_3qf9k {\n  width: 100%;\n  min-height: 140px; }\n\n.book-name_30SJM {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin: 0 0 10px 0;\n  color: #333;\n  line-height: 1.2;\n  word-wrap: break-word; }\n\n.book-author_1ShCb {\n  font-size: 1rem;\n  margin-bottom: 10px; }\n\n.book-cover_3h02j {\n  margin: 0;\n  top: 0;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  overflow: hidden;\n  border-radius: 3px; }\n\n.img_HM3eq {\n  width: 100px;\n  height: auto;\n  display: block; }\n\n.desc_26hRG {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #333; }\n", ""]);

// exports
exports.locals = {
	"book-detail": "book-detail_Iinfr",
	"book-info-container": "book-info-container_12Cuh",
	"header": "header_kUeRW",
	"content": "content_QQ2OP",
	"btn-read": "btn-read_A9Lcq",
	"left-col": "left-col_1xTZr",
	"right-col": "right-col_3qf9k",
	"book-name": "book-name_30SJM",
	"book-author": "book-author_1ShCb",
	"book-cover": "book-cover_3h02j",
	"img": "img_HM3eq",
	"desc": "desc_26hRG"
};

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(368);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookDetail.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookDetail.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.9.js.map