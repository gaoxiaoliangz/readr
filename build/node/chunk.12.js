exports.ids = [12];
exports.modules = {

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _AppError = __webpack_require__(357);

var _AppError2 = _interopRequireDefault(_AppError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let NoMatch = class NoMatch extends _react.Component {
    render() {
        return _react2.default.createElement(_DocContainer2.default, { title: "页面未找到" }, _react2.default.createElement(_AppError2.default, { title: "抱歉，页面未找到！", message: _react2.default.createElement("div", null, "\u4F60\u53EF\u4EE5", _react2.default.createElement(_reactRouter.Link, { className: "border-link", to: "/" }, "\u8FD4\u56DE\u9996\u9875"), "\u7EE7\u7EED\u6D4F\u89C8") }));
    }
};
exports.default = NoMatch;

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(50);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(399);
let AppError = class AppError extends _react.Component {
    render() {
        var _props = this.props;
        const title = _props.title,
              message = _props.message;

        return _react2.default.createElement("div", null, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement(_Logo2.default, { dark: true })), _react2.default.createElement("div", { styleName: "body" }, _react2.default.createElement("h1", { styleName: "title" }, title), _react2.default.createElement("div", null, message)));
    }
};
AppError = __decorate([(0, _reactCssModules2.default)(styles)], AppError);
exports.default = AppError;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppError = __webpack_require__(356);

var _AppError2 = _interopRequireDefault(_AppError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppError2.default;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".header_3lPrK {\n  text-align: center; }\n\n.title_1S9ou {\n  font-size: 1.6rem;\n  color: #222; }\n\n.body_1NxBf {\n  text-align: center;\n  width: 500px;\n  margin: 0 auto;\n  padding: 150px 0;\n  font-size: 1.1rem; }\n", ""]);

// exports
exports.locals = {
	"header": "header_3lPrK",
	"title": "title_1S9ou",
	"body": "body_1NxBf"
};

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(383);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./AppError.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./AppError.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.12.js.map