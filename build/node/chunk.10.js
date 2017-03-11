exports.ids = [10];
exports.modules = {

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _CollectionSection = __webpack_require__(359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Collections = class Collections extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchCollections();
    }
    render() {
        let newestCollections = this.props.newestCollections;

        let list = newestCollections.map(item => ({
            name: item.name,
            id: item.id,
            bookCovers: item.items.map(book => book.cover),
            description: item.description
        }));
        return _react2.default.createElement("div", { className: "page-collections" }, _react2.default.createElement("div", { style: { maxWidth: 800, margin: '0 auto' } }, _react2.default.createElement("h2", { className: "page-title" }, "\u5F80\u671F\u4E66\u5355")), _react2.default.createElement(_CollectionSection.CollectionList, { maxWidth: 800, style: "dark", list: list }));
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    newestCollections: state.pagination.bookCollections.newest ? state.pagination.bookCollections.newest.ids.map(id => state.entities.bookCollections[id]) : []
}), { fetchCollections: _actions.fetchCollections })(Collections);

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(384);
    var insertCss = __webpack_require__(2);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Collection.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Collection.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(348);
let CollectionItem = class CollectionItem extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        const description = _props.description,
              name = _props.name,
              id = _props.id,
              bookCovers = _props.bookCovers,
              style = _props.style,
              maxWidth = _props.maxWidth;

        return _react2.default.createElement("div", { className: "collection-item", styleName: style === 'dark' ? 'item--dark' : 'item--light' }, _react2.default.createElement("div", { style: { maxWidth: maxWidth || '100%', margin: '0 auto' } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("h2", { styleName: "name" }, _react2.default.createElement(_reactRouter.Link, { styleName: "link", to: `collections/${id}` }, name)), _react2.default.createElement("div", { styleName: "desc" }, description)), _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("ul", { styleName: "covers" }, bookCovers.map((bookCover, index) => {
            return _react2.default.createElement("li", { key: index }, _react2.default.createElement("img", { src: bookCover }));
        }))))));
    }
};
CollectionItem = __decorate([(0, _reactCssModules2.default)(styles)], CollectionItem);
exports.default = CollectionItem;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CollectionItem = __webpack_require__(353);

var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(348);
let CollectionList = class CollectionList extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        const list = _props.list,
              style = _props.style,
              maxWidth = _props.maxWidth;

        return _react2.default.createElement("div", { styleName: "list", className: "clearfix" }, list.map((item, index) => {
            return _react2.default.createElement(_CollectionItem2.default, Object.assign({ maxWidth: maxWidth, style: style, key: index }, item));
        }));
    }
};
CollectionList = __decorate([(0, _reactCssModules2.default)(styles)], CollectionList);
exports.default = CollectionList;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

var _layout = __webpack_require__(47);

var _CollectionList = __webpack_require__(354);

var _CollectionList2 = _interopRequireDefault(_CollectionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(348);
let CollectionSection = class CollectionSection extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        const list = _props.list,
              title = _props.title;

        return _react2.default.createElement("div", { styleName: "section" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement(_CollectionList2.default, { list: list }), _react2.default.createElement(_reactRouter.Link, { styleName: "view-more", to: "/collections" }, "\u6D4F\u89C8\u66F4\u591A\u4E66\u5355")));
    }
};
CollectionSection = __decorate([(0, _reactCssModules2.default)(styles)], CollectionSection);
exports.default = CollectionSection;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionSection = exports.CollectionList = exports.CollectionItem = undefined;

var _CollectionSection = __webpack_require__(358);

var _CollectionSection2 = _interopRequireDefault(_CollectionSection);

var _CollectionItem = __webpack_require__(353);

var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

var _CollectionList = __webpack_require__(354);

var _CollectionList2 = _interopRequireDefault(_CollectionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CollectionItem = _CollectionItem2.default;
exports.CollectionList = _CollectionList2.default;
exports.CollectionSection = _CollectionSection2.default;
exports.default = _CollectionSection2.default;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".link_2j3vY {\n  color: #fff; }\n  .link_2j3vY:hover {\n    color: #ddd; }\n\n.title_1DW7V {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.link_2j3vY {\n  color: #fff; }\n  .link_2j3vY:hover {\n    color: #ddd; }\n\n.item--dark_2UvSB .desc_3xXSM {\n  color: #666; }\n\n.item_1VC-O {\n  width: 100%;\n  min-height: 200px;\n  position: relative;\n  border-bottom: 1px solid #08105d;\n  padding: 0 0 30px 0; }\n\n.item--light_1OlEo { }\n\n.section_2K6ue {\n  background: #04082E;\n  overflow: hidden;\n  margin: 40px 0; }\n\n.covers_3CFy3 {\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  top: 30px; }\n  .covers_3CFy3 li {\n    float: left;\n    margin: 0 10px; }\n    .covers_3CFy3 li img {\n      max-width: 70px;\n      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n      overflow: hidden;\n      border-radius: 3px; }\n\n.name_21WWD {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-bottom: 1em; }\n\n.desc_3xXSM {\n  color: gray(180);\n  font-size: 1rem; }\n\n.title_1DW7V {\n  color: #fff; }\n\n.list_1jgXC {\n  width: 100%; }\n\n.view-more_3pDdp {\n  margin: 20px 0;\n  display: inline-block; }\n\n/* style 2 */\n.item--dark_2UvSB {\n  border-color: #ddd; }\n  .item--dark_2UvSB .link_2j3vY {\n    color: #333; }\n    .item--dark_2UvSB .link_2j3vY:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"link": "link_2j3vY",
	"title": "title_1DW7V",
	"item--dark": "item--dark_2UvSB item_1VC-O",
	"desc": "desc_3xXSM",
	"item": "item_1VC-O",
	"item--light": "item--light_1OlEo item_1VC-O",
	"section": "section_2K6ue",
	"covers": "covers_3CFy3",
	"name": "name_21WWD",
	"list": "list_1jgXC",
	"view-more": "view-more_3pDdp link_2j3vY"
};

/***/ })

};;
//# sourceMappingURL=chunk.10.js.map