exports.ids = [1];
exports.modules = {

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BookListSection__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_css_modules__);
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








const styles = __webpack_require__(393);
let CollectionDetail = function (_Component) {
    _inherits(CollectionDetail, _Component);

    function CollectionDetail(props) {
        _classCallCheck(this, CollectionDetail);

        return _possibleConstructorReturn(this, (CollectionDetail.__proto__ || Object.getPrototypeOf(CollectionDetail)).call(this, props));
    }

    _createClass(CollectionDetail, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.loadCollection(this.props.params.id);
        }
    }, {
        key: "render",
        value: function render() {
            const bookCollection = this.props.bookCollection ? this.props.bookCollection : { items: [] };
            const items = bookCollection.items;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "collection" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layout__["a" /* Container */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "title" }, bookCollection.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "sub-title" }, "10 \u672C\u4E66"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "book-slider" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_BookListSection__["a" /* default */], { bookEntities: items })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_form__["d" /* Button */], { onClick: () => {
                    this.props.sendNotification('功能开发中', 'warning');
                } }, "\u6536\u85CF"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "page-content" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layout__["a" /* Container */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, bookCollection.description))));
        }
    }]);

    return CollectionDetail;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CollectionDetail = __decorate([__WEBPACK_IMPORTED_MODULE_7_react_css_modules___default()(styles)], CollectionDetail);
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])((state, ownProps) => {
    return { bookCollection: state.entities.bookCollections[ownProps.params.id] };
}, { loadCollection: __WEBPACK_IMPORTED_MODULE_4__actions_api__["loadCollection"], sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"] })(CollectionDetail);

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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BookInfoPopup__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Book_scss__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Book_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Book_scss__);
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





let Book = function (_Component) {
    _inherits(Book, _Component);

    function Book(props) {
        _classCallCheck(this, Book);

        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

        _this.state = {
            showPopup: false
        };
        _this.showPopup = _this.showPopup.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        return _this;
    }

    _createClass(Book, [{
        key: "showPopup",
        value: function showPopup() {
            this.setState({
                showPopup: true
            });
        }
    }, {
        key: "hidePopup",
        value: function hidePopup() {
            this.setState({
                showPopup: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            const { showDesc, description, cover } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: '/book/' + this.props.id }, cover && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-cover" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: this.props.cover })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-meta" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BookInfoPopup__["a" /* default */], { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
        }
    }]);

    return Book;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Book = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__Book_scss___default.a, {
    allowMultiple: true
})], Book);
/* harmony default export */ __webpack_exports__["a"] = Book;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Book__ = __webpack_require__(297);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Book__["a" /* default */];

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
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



const styles = __webpack_require__(308);
let BookInfoPopup = function (_Component) {
    _inherits(BookInfoPopup, _Component);

    function BookInfoPopup(props) {
        _classCallCheck(this, BookInfoPopup);

        return _possibleConstructorReturn(this, (BookInfoPopup.__proto__ || Object.getPrototypeOf(BookInfoPopup)).call(this, props));
    }

    _createClass(BookInfoPopup, [{
        key: "render",
        value: function render() {
            const { author, title, description, bookId } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "popup" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "title" }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { styleName: "author" }, author), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_form__["d" /* Button */], { color: "blue", to: '/viewer/book/' + bookId }, "\u9605\u8BFB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "description" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, description)));
        }
    }]);

    return BookInfoPopup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookInfoPopup = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles, {
    allowMultiple: true
})], BookInfoPopup);
/* harmony default export */ __webpack_exports__["a"] = BookInfoPopup;

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookInfoPopup__ = __webpack_require__(299);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__BookInfoPopup__["a" /* default */];

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Book__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_css_modules__);
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



const styles = __webpack_require__(309);
let BookList = function (_Component) {
    _inherits(BookList, _Component);

    function BookList() {
        _classCallCheck(this, BookList);

        return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
    }

    _createClass(BookList, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "book-list", className: "clearfix" }, this.props.bookEntities && this.props.bookEntities.length !== 0 ? this.props.bookEntities.map((book, index) => {
                const { title, authors, description, cover } = book;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Book__["a" /* default */], { id: book.id, title: title || '无标题', authors: authors && authors.map(author => author.name).join(', ') || '未知作者', description: description, cover: cover, disablePopup: true }));
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "\u6682\u65E0\u8BB0\u5F55"));
        }
    }]);

    return BookList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookList = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles)], BookList);
/* harmony default export */ __webpack_exports__["a"] = BookList;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookList__ = __webpack_require__(301);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__BookList__["a" /* default */];

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".book_1Mhus {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_1Mhus a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_1Mhus a:hover img {\n      opacity: .96; }\n    .book_1Mhus a:active img {\n      opacity: .8; }\n\n.book-meta_2_-SN {\n  background: transparent; }\n\n.meta-item_29Oj5 {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2xm-_ {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_2uQ57 {\n  color: #999; }\n\n.book-cover_2Njlt {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(306) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_2Njlt img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_2Njlt:hover {\n    top: -7px; }\n\n.book-desc_qmKU9 {\n  color: #999; }\n\n.book--card_SUxdP {\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_SUxdP a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_SUxdP a:hover img {\n      opacity: 1; }\n    .book--card_SUxdP a:active img {\n      opacity: 1; }\n  .book--card_SUxdP .book-cover_2Njlt {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_SUxdP .book-cover_2Njlt:hover {\n      top: 0; }\n    .book--card_SUxdP .book-cover_2Njlt img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_SUxdP .book-meta_2_-SN {\n    float: none; }\n  .book--card_SUxdP .meta-item_29Oj5 {\n    width: auto; }\n", ""]);

// exports
exports.locals = {
	"book": "book_1Mhus",
	"book-meta": "book-meta_2_-SN",
	"meta-item": "meta-item_29Oj5",
	"book-name": "book-name_2xm-_ meta-item_29Oj5",
	"book-author": "book-author_2uQ57 meta-item_29Oj5",
	"book-cover": "book-cover_2Njlt",
	"book-desc": "book-desc_qmKU9",
	"book--card": "book--card_SUxdP book_1Mhus"
};

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".popup_2QR4_ {\n  position: absolute;\n  z-index: 999;\n  left: 134px;\n  top: 0;\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);\n  padding: 20px 20px 0;\n  border: 1px solid #ddd; }\n\n.header_2DiuQ {\n  margin-bottom: 20px; }\n\n.title_r5Pz7 {\n  margin: 30px 0 10px 0; }\n\n.author_1IeQO {\n  font-size: 0.9rem;\n  margin: 0 0 2em 0; }\n\n.description_i8oqq {\n  line-height: 1.6;\n  padding: 10px 0;\n  border-top: 1px solid #ddd; }\n", ""]);

// exports
exports.locals = {
	"popup": "popup_2QR4_",
	"header": "header_2DiuQ",
	"title": "title_r5Pz7",
	"author": "author_1IeQO",
	"description": "description_i8oqq"
};

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".book-list_1On2y {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_1On2y li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_1On2y li {\n        width: 100%; } }\n", ""]);

// exports
exports.locals = {
	"book-list": "book-list_1On2y"
};

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/shadow.471ea37f96.png";

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(303);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Book.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Book.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(304);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(305);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookList.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookList.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BookList__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Loading__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Icon__ = __webpack_require__(26);
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






const styles = __webpack_require__(313);
let BookListSection = function (_Component) {
    _inherits(BookListSection, _Component);

    function BookListSection() {
        _classCallCheck(this, BookListSection);

        return _possibleConstructorReturn(this, (BookListSection.__proto__ || Object.getPrototypeOf(BookListSection)).apply(this, arguments));
    }

    _createClass(BookListSection, [{
        key: "render",
        value: function render() {
            const { isFetching, title, moreLink, bookEntities } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "section-title" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: moreLink }, title, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Icon__["a" /* default */], { name: "arrowRight", size: 20 }))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "section-title" }, title)), isFetching && bookEntities.length === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Loading__["a" /* default */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BookList__["a" /* default */], { bookEntities: bookEntities }));
        }
    }]);

    return BookListSection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookListSection = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(styles, {
    allowMultiple: true
})], BookListSection);
/* harmony default export */ __webpack_exports__["a"] = BookListSection;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BookListSection__ = __webpack_require__(310);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__BookListSection__["a" /* default */];

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".book-list-section_2tEA- {\n  position: relative; }\n\n.more_1c3vt {\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 32px; }\n\n.section-title_pTGd6 {\n  margin-bottom: 10px; }\n  .section-title_pTGd6 a {\n    color: #333; }\n    .section-title_pTGd6 a:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"book-list-section": "book-list-section_2tEA-",
	"more": "more_1c3vt",
	"section-title": "section-title_pTGd6"
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(312);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookListSection.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./BookListSection.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".header_1PWbX {\n  background: black;\n}\n\n.title_4-14u {\n  /*composes: page-title from \"styles/base.css\";*/\n  /* todo */\n  margin-top: 0;\n  padding-top: 30px;\n  color: #fff;\n}\n", ""]);

// exports
exports.locals = {
	"header": "header_1PWbX",
	"title": "title_4-14u"
};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(364);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/postcss-loader/index.js??ref--3-2!./CollectionDetail.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/postcss-loader/index.js??ref--3-2!./CollectionDetail.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.1.js.map