exports.ids = [12];
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

var _reactRouter = __webpack_require__(9);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _AppError = __webpack_require__(354);

var _AppError2 = _interopRequireDefault(_AppError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoMatch = function (_Component) {
    _inherits(NoMatch, _Component);

    function NoMatch() {
        _classCallCheck(this, NoMatch);

        return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
    }

    _createClass(NoMatch, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_DocContainer2.default, { title: "页面未找到" }, _react2.default.createElement(_AppError2.default, { title: "抱歉，页面未找到！", message: _react2.default.createElement("div", null, '\u4F60\u53EF\u4EE5', _react2.default.createElement(_reactRouter.Link, { className: "border-link", to: "/" }, '\u8FD4\u56DE\u9996\u9875'), '\u7EE7\u7EED\u6D4F\u89C8') }));
        }
    }]);

    return NoMatch;
}(_react.Component);

var _default = NoMatch;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(NoMatch, 'NoMatch', '/Users/liang/Projects/readr/src/routes/NoMatch/NoMatch.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/NoMatch/NoMatch.tsx');
}();

;

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

var _Logo = __webpack_require__(48);

var _Logo2 = _interopRequireDefault(_Logo);

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

var styles = __webpack_require__(396);
var AppError = function (_Component) {
    _inherits(AppError, _Component);

    function AppError() {
        _classCallCheck(this, AppError);

        return _possibleConstructorReturn(this, (AppError.__proto__ || Object.getPrototypeOf(AppError)).apply(this, arguments));
    }

    _createClass(AppError, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                title = _props.title,
                message = _props.message;

            return _react2.default.createElement("div", null, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement(_Logo2.default, { dark: true })), _react2.default.createElement("div", { styleName: "body" }, _react2.default.createElement("h1", { styleName: "title" }, title), _react2.default.createElement("div", null, message)));
        }
    }]);

    return AppError;
}(_react.Component);
AppError = __decorate([(0, _reactCssModules2.default)(styles)], AppError);
var _default = AppError;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/AppError/AppError.tsx");

    __REACT_HOT_LOADER__.register(AppError, "AppError", "/Users/liang/Projects/readr/src/components/AppError/AppError.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/AppError/AppError.tsx");
}();

;

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppError = __webpack_require__(353);

var _AppError2 = _interopRequireDefault(_AppError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _AppError2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/AppError/index.ts');
}();

;

/***/ }),

/***/ 380:
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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(380);
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