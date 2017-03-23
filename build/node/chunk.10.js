exports.ids = [10];
exports.modules = {

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CollectionSection__ = __webpack_require__(340);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






let Collections = function (_Component) {
    _inherits(Collections, _Component);

    function Collections(props) {
        _classCallCheck(this, Collections);

        return _possibleConstructorReturn(this, (Collections.__proto__ || Object.getPrototypeOf(Collections)).call(this, props));
    }

    _createClass(Collections, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.loadCollections();
        }
    }, {
        key: 'render',
        value: function render() {
            let { newestCollections } = this.props;
            let list = newestCollections.map(item => ({
                name: item.name,
                id: item.id,
                bookCovers: item.items.map(book => book.cover),
                description: item.description
            }));
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "page-collections" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { maxWidth: 800, margin: '0 auto' } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { className: "page-title" }, "\u5F80\u671F\u4E66\u5355")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CollectionSection__["a" /* CollectionList */], { maxWidth: 800, style: "dark", list: list }));
        }
    }]);

    return Collections;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    newestCollections: state.pagination.bookCollections.newest ? state.pagination.bookCollections.newest.ids.map(id => state.entities.bookCollections[id]) : []
}), { loadCollections: __WEBPACK_IMPORTED_MODULE_2__actions_api__["loadCollections"] })(Collections);

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(365);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Collection.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Collection.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
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



const styles = __webpack_require__(331);
let CollectionItem = function (_Component) {
    _inherits(CollectionItem, _Component);

    function CollectionItem(props) {
        _classCallCheck(this, CollectionItem);

        return _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).call(this, props));
    }

    _createClass(CollectionItem, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            const { description, name, id, bookCovers, style, maxWidth } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "collection-item", styleName: style === 'dark' ? 'item--dark' : 'item--light' }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: { maxWidth: maxWidth || '100%', margin: '0 auto' } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-md-6" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "name" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], { styleName: "link", to: `collections/${id}` }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "desc" }, description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-md-6" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "covers" }, bookCovers.map((bookCover, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: bookCover }));
            }))))));
        }
    }]);

    return CollectionItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CollectionItem = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles)], CollectionItem);
/* harmony default export */ __webpack_exports__["a"] = CollectionItem;

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionItem__ = __webpack_require__(335);
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



const styles = __webpack_require__(331);
let CollectionList = function (_Component) {
    _inherits(CollectionList, _Component);

    function CollectionList(props) {
        _classCallCheck(this, CollectionList);

        return _possibleConstructorReturn(this, (CollectionList.__proto__ || Object.getPrototypeOf(CollectionList)).call(this, props));
    }

    _createClass(CollectionList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            const { list, style, maxWidth } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "list", className: "clearfix" }, list.map((item, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CollectionItem__["a" /* default */], Object.assign({ maxWidth: maxWidth, style: style, key: index }, item));
            }));
        }
    }]);

    return CollectionList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CollectionList = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles)], CollectionList);
/* harmony default export */ __webpack_exports__["a"] = CollectionList;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CollectionList__ = __webpack_require__(336);
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





const styles = __webpack_require__(331);
let CollectionSection = function (_Component) {
    _inherits(CollectionSection, _Component);

    function CollectionSection(props) {
        _classCallCheck(this, CollectionSection);

        return _possibleConstructorReturn(this, (CollectionSection.__proto__ || Object.getPrototypeOf(CollectionSection)).call(this, props));
    }

    _createClass(CollectionSection, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            const { list, title } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "section" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* Container */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", { styleName: "title" }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CollectionList__["a" /* default */], { list: list }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], { styleName: "view-more", to: "/collections" }, "\u6D4F\u89C8\u66F4\u591A\u4E66\u5355")));
        }
    }]);

    return CollectionSection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
CollectionSection = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles)], CollectionSection);
/* harmony default export */ __webpack_exports__["a"] = CollectionSection;

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CollectionSection__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollectionItem__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CollectionList__ = __webpack_require__(336);
/* unused harmony reexport CollectionItem */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__CollectionList__["a"]; });
/* unused harmony reexport CollectionSection */




/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__CollectionSection__["a" /* default */];

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".link_2j3vY {\n  color: #fff; }\n  .link_2j3vY:hover {\n    color: #ddd; }\n\n.item--dark_2UvSB .desc_3xXSM {\n  color: #666; }\n\n.item_1VC-O {\n  width: 100%;\n  min-height: 200px;\n  position: relative;\n  border-bottom: 1px solid #08105d;\n  padding: 0 0 30px 0; }\n\n.item--light_1OlEo { }\n\n.section_2K6ue {\n  background: #04082E;\n  overflow: hidden;\n  margin: 40px 0; }\n\n.covers_3CFy3 {\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  top: 30px; }\n  .covers_3CFy3 li {\n    float: left;\n    margin: 0 10px; }\n    .covers_3CFy3 li img {\n      max-width: 70px;\n      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n      overflow: hidden;\n      border-radius: 3px; }\n\n.name_21WWD {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-bottom: 1em; }\n\n.desc_3xXSM {\n  color: gray(180);\n  font-size: 1rem; }\n\n.title_1DW7V {\n  color: #fff; }\n\n.list_1jgXC {\n  width: 100%; }\n\n.view-more_3pDdp {\n  margin: 20px 0;\n  display: inline-block; }\n\n/* style 2 */\n.item--dark_2UvSB {\n  border-color: #ddd; }\n  .item--dark_2UvSB .link_2j3vY {\n    color: #333; }\n    .item--dark_2UvSB .link_2j3vY:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"link": "link_2j3vY",
	"item--dark": "item--dark_2UvSB item_1VC-O",
	"desc": "desc_3xXSM",
	"item": "item_1VC-O",
	"item--light": "item--light_1OlEo item_1VC-O",
	"section": "section_2K6ue",
	"covers": "covers_3CFy3",
	"name": "name_21WWD",
	"title": "title_1DW7V",
	"list": "list_1jgXC",
	"view-more": "view-more_3pDdp link_2j3vY"
};

/***/ })

};;
//# sourceMappingURL=chunk.10.js.map