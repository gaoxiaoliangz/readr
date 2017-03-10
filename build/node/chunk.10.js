exports.ids = [10];
exports.modules = {

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(137);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(103);

var _actions = __webpack_require__(104);

var _Loading = __webpack_require__(269);

var _Loading2 = _interopRequireDefault(_Loading);

var _form = __webpack_require__(133);

var _DocContainer = __webpack_require__(134);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _reactCssModules = __webpack_require__(100);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _selectors = __webpack_require__(115);

var selectors = _interopRequireWildcard(_selectors);

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

var styles = __webpack_require__(367);
var BookDetail = function (_Component) {
    _inherits(BookDetail, _Component);

    // static fetchData({store, params}) {
    //   return store.dispatch(loadBook(params.id))
    // }
    function BookDetail(props) {
        _classCallCheck(this, BookDetail);

        var _this = _possibleConstructorReturn(this, (BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).call(this, props));

        _this.bookId = props.params.id;
        return _this;
    }

    _createClass(BookDetail, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.loadBook(this.bookId);
        }
    }, {
        key: "render",
        value: function render() {
            var bookInfo = this.props.bookInfo;

            var isFetching = (0, _isEmpty3.default)(bookInfo);
            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "book-info", title: bookInfo.title }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("article", { styleName: "book-info-container" }, _react2.default.createElement("div", { styleName: "book-detail" }, _react2.default.createElement("header", { styleName: "header" }, isFetching ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement("div", null, _react2.default.createElement("div", { styleName: "left-col" }, bookInfo.cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { styleName: "img", src: bookInfo.cover }))), _react2.default.createElement("div", { styleName: "right-col" }, _react2.default.createElement("h1", { styleName: "book-name" }, bookInfo.title || '无标题'), _react2.default.createElement("div", { styleName: "book-author" }, _react2.default.createElement("strong", null, "\u4F5C\u8005\uFF1A", bookInfo.authors && bookInfo.authors.map(function (a) {
                return a.name;
            }).join(', ') || '未知')), _react2.default.createElement("div", null, _react2.default.createElement(_form.Button, { styleName: "btn-read", to: "/viewer/book/" + bookInfo.id, color: "blue" }, "\u9605\u8BFB"))))), bookInfo.description && _react2.default.createElement("div", { styleName: "content" }, _react2.default.createElement("h2", { styleName: "desc" }, "\u5185\u5BB9\u7B80\u4ECB"), _react2.default.createElement("p", null, bookInfo.description))))));
        }
    }]);

    return BookDetail;
}(_react.Component);
BookDetail = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookDetail);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var id = ownProps.params.id;
    return {
        bookInfo: selectors.common.entity('books', id)(state)
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, { loadBook: _actions.loadBook })(BookDetail);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx");

    __REACT_HOT_LOADER__.register(BookDetail, "BookDetail", "/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/BookDetail/BookDetail.tsx");
}();

;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(100);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(101);

var _classnames2 = _interopRequireDefault(_classnames);

var _Loading = __webpack_require__(271);

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
            var _props = this.props,
                text = _props.text,
                center = _props.center;
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
var _default = Loading;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/Loading/Loading.tsx");

    __REACT_HOT_LOADER__.register(Loading, "Loading", "/Users/liang/Projects/readr/src/components/Loading/Loading.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/Loading/Loading.tsx");
}();

;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loading = __webpack_require__(268);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Loading2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Loading/index.ts');
}();

;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(98)();
// imports


// module
exports.push([module.i, ".text-loading_3Q6vh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3Q6vh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_7G2oJ {\n  text-align: left; }\n\n.loading-wrap--center_3AyTV {\n  text-align: center; }\n", ""]);

// exports
exports.locals = {
	"text-loading": "text-loading_3Q6vh",
	"loading-wrap": "loading-wrap_7G2oJ",
	"loading-wrap--center": "loading-wrap--center_3AyTV"
};

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(270);
    var insertCss = __webpack_require__(99);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Loading.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Loading.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(98)();
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

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(351);
    var insertCss = __webpack_require__(99);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookDetail.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./BookDetail.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.10.js.map