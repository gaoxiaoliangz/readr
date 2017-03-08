exports.ids = [10];
exports.modules = {

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(15);

var _CollectionSection = __webpack_require__(359);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collections = function (_Component) {
    _inherits(Collections, _Component);

    function Collections(props) {
        _classCallCheck(this, Collections);

        return _possibleConstructorReturn(this, (Collections.__proto__ || Object.getPrototypeOf(Collections)).call(this, props));
    }

    _createClass(Collections, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchCollections();
        }
    }, {
        key: 'render',
        value: function render() {
            var newestCollections = this.props.newestCollections;

            var list = newestCollections.map(function (item) {
                return {
                    name: item.name,
                    id: item.id,
                    bookCovers: item.items.map(function (book) {
                        return book.cover;
                    }),
                    description: item.description
                };
            });
            return _react2.default.createElement("div", { className: "page-collections" }, _react2.default.createElement("div", { style: { maxWidth: 800, margin: '0 auto' } }, _react2.default.createElement("h2", { className: "page-title" }, '\u5F80\u671F\u4E66\u5355')), _react2.default.createElement(_CollectionSection.CollectionList, { maxWidth: 800, style: "dark", list: list }));
        }
    }]);

    return Collections;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        newestCollections: state.pagination.bookCollections.newest ? state.pagination.bookCollections.newest.ids.map(function (id) {
            return state.entities.bookCollections[id];
        }) : []
    };
}, { fetchCollections: _actions.fetchCollections })(Collections);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Collections, 'Collections', '/Users/liang/Projects/readr/src/isomorphic/routes/Collections/Collections.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/routes/Collections/Collections.tsx');
}();

;

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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Collection.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Collection.scss");

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

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

var styles = __webpack_require__(348);
var CollectionItem = function (_Component) {
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
            var _props = this.props,
                description = _props.description,
                name = _props.name,
                id = _props.id,
                bookCovers = _props.bookCovers,
                style = _props.style,
                maxWidth = _props.maxWidth;

            return _react2.default.createElement("div", { className: "collection-item", styleName: style === 'dark' ? 'item--dark' : 'item--light' }, _react2.default.createElement("div", { style: { maxWidth: maxWidth || '100%', margin: '0 auto' } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("h2", { styleName: "name" }, _react2.default.createElement(_reactRouter.Link, { styleName: "link", to: "collections/" + id }, name)), _react2.default.createElement("div", { styleName: "desc" }, description)), _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("ul", { styleName: "covers" }, bookCovers.map(function (bookCover, index) {
                return _react2.default.createElement("li", { key: index }, _react2.default.createElement("img", { src: bookCover }));
            }))))));
        }
    }]);

    return CollectionItem;
}(_react.Component);
CollectionItem = __decorate([(0, _reactCssModules2.default)(styles)], CollectionItem);
var _default = CollectionItem;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionItem.tsx");

    __REACT_HOT_LOADER__.register(CollectionItem, "CollectionItem", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionItem.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionItem.tsx");
}();

;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CollectionItem = __webpack_require__(353);

var _CollectionItem2 = _interopRequireDefault(_CollectionItem);

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

var styles = __webpack_require__(348);
var CollectionList = function (_Component) {
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
            var _props = this.props,
                list = _props.list,
                style = _props.style,
                maxWidth = _props.maxWidth;

            return _react2.default.createElement("div", { styleName: "list", className: "clearfix" }, list.map(function (item, index) {
                return _react2.default.createElement(_CollectionItem2.default, Object.assign({ maxWidth: maxWidth, style: style, key: index }, item));
            }));
        }
    }]);

    return CollectionList;
}(_react.Component);
CollectionList = __decorate([(0, _reactCssModules2.default)(styles)], CollectionList);
var _default = CollectionList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionList.tsx");

    __REACT_HOT_LOADER__.register(CollectionList, "CollectionList", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionList.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionList.tsx");
}();

;

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRouter = __webpack_require__(9);

var _layout = __webpack_require__(46);

var _CollectionList = __webpack_require__(354);

var _CollectionList2 = _interopRequireDefault(_CollectionList);

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

var styles = __webpack_require__(348);
var CollectionSection = function (_Component) {
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
            var _props = this.props,
                list = _props.list,
                title = _props.title;

            return _react2.default.createElement("div", { styleName: "section" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement(_CollectionList2.default, { list: list }), _react2.default.createElement(_reactRouter.Link, { styleName: "view-more", to: "/collections" }, "\u6D4F\u89C8\u66F4\u591A\u4E66\u5355")));
        }
    }]);

    return CollectionSection;
}(_react.Component);
CollectionSection = __decorate([(0, _reactCssModules2.default)(styles)], CollectionSection);
var _default = CollectionSection;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionSection.tsx");

    __REACT_HOT_LOADER__.register(CollectionSection, "CollectionSection", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionSection.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/CollectionSection.tsx");
}();

;

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
var _default = _CollectionSection2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/CollectionSection/index.ts');
}();

;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".link_2bXcD {\n  color: #fff; }\n  .link_2bXcD:hover {\n    color: #ddd; }\n\n.title_Zjber {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.link_2bXcD {\n  color: #fff; }\n  .link_2bXcD:hover {\n    color: #ddd; }\n\n.item--dark_IIv1a .desc_3Qi4o {\n  color: #666; }\n\n.item_1UDRG {\n  width: 100%;\n  min-height: 200px;\n  position: relative;\n  border-bottom: 1px solid #08105d;\n  padding: 0 0 30px 0; }\n\n.item--light_LGMjQ { }\n\n.section_2hKEP {\n  background: #04082E;\n  overflow: hidden;\n  margin: 40px 0; }\n\n.covers_1y8IM {\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  top: 30px; }\n  .covers_1y8IM li {\n    float: left;\n    margin: 0 10px; }\n    .covers_1y8IM li img {\n      max-width: 70px;\n      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n      overflow: hidden;\n      border-radius: 3px; }\n\n.name_3_CO7 {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-bottom: 1em; }\n\n.desc_3Qi4o {\n  color: gray(180);\n  font-size: 1rem; }\n\n.title_Zjber {\n  color: #fff; }\n\n.list_2s5OR {\n  width: 100%; }\n\n.view-more_aJ8ph {\n  margin: 20px 0;\n  display: inline-block; }\n\n/* style 2 */\n.item--dark_IIv1a {\n  border-color: #ddd; }\n  .item--dark_IIv1a .link_2bXcD {\n    color: #333; }\n    .item--dark_IIv1a .link_2bXcD:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"link": "link_2bXcD",
	"title": "title_Zjber",
	"item--dark": "item--dark_IIv1a item_1UDRG",
	"desc": "desc_3Qi4o",
	"item": "item_1UDRG",
	"item--light": "item--light_LGMjQ item_1UDRG",
	"section": "section_2hKEP",
	"covers": "covers_1y8IM",
	"name": "name_3_CO7",
	"list": "list_2s5OR",
	"view-more": "view-more_aJ8ph link_2bXcD"
};

/***/ })

};;
//# sourceMappingURL=chunk.10.js.map