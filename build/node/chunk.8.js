exports.ids = [8];
exports.modules = {

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _PreferenceList = __webpack_require__(366);

var _PreferenceList2 = _interopRequireDefault(_PreferenceList);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preference = function (_Component) {
    _inherits(Preference, _Component);

    // static fetchData({store, params}) {
    //   return store.dispatch(fetch())
    // }
    function Preference(props) {
        _classCallCheck(this, Preference);

        var _this = _possibleConstructorReturn(this, (Preference.__proto__ || Object.getPrototypeOf(Preference)).call(this, props));

        _this.state = {
            showFav: true
        };
        return _this;
    }

    _createClass(Preference, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchProfile();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_DocContainer2.default, { title: "设置" }, _react2.default.createElement("div", { className: "container" }, _react2.default.createElement(_PreferenceList2.default, Object.assign({}, this.props.profile))));
        }
    }]);

    return Preference;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        profile: (0, _get3.default)(state.payloads, 'profile', {})
    };
}, { sendNotification: _actions.sendNotification, fetchProfile: _actions.fetchProfile })(Preference);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Preference, 'Preference', '/Users/liang/Projects/readr/src/routes/Preference/Preference.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/Preference/Preference.tsx');
}();

;

/***/ }),

/***/ 335:
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

            var _props = this.props,
                isOn = _props.value,
                className = _props.className;

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
// class Switcher extends Component<Props, any> {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     let className = this.props.on ? 'on' : 'off'
//     className = className + ' switcher'
//     return (
//       <div styleName={this.props.on ? 'switcher--on' : 'switcher--off'}>
//         <div styleName="switcher-button"></div>
//         <div styleName="switcher-track"></div>
//       </div>
//     )
//   }
// }
var _default = Switcher;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/Switcher/Switcher.tsx");

    __REACT_HOT_LOADER__.register(Switcher, "Switcher", "/Users/liang/Projects/readr/src/components/Switcher/Switcher.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/Switcher/Switcher.tsx");
}();

;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switcher = __webpack_require__(335);

var _Switcher2 = _interopRequireDefault(_Switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Switcher2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Switcher/index.ts');
}();

;

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".switcher-wrap_2IpN8 {\n  display: inline-block; }\n\n.switcher_3dC-Z, .switcher--off_3PpBE, .switcher--on_3j_eP {\n  display: inline-block;\n  width: 40px;\n  position: relative;\n  cursor: pointer;\n  margin: 0 5px;\n  color: green; }\n\n.switcher-button_p5hGG {\n  background: #1B267F;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.switcher-track_3djr0 {\n  height: 10px;\n  margin-top: 5px;\n  border-radius: 50px; }\n\n.switcher--off_3PpBE .switcher-track_3djr0 {\n  background: #ddd; }\n\n.switcher--off_3PpBE .switcher-button_p5hGG {\n  left: 0; }\n\n.switcher--on_3j_eP .switcher-button_p5hGG {\n  left: 20px; }\n\n.switcher--on_3j_eP .switcher-track_3djr0 {\n  background: #2e40d2; }\n", ""]);

// exports
exports.locals = {
	"switcher-wrap": "switcher-wrap_2IpN8",
	"switcher": "switcher_3dC-Z",
	"switcher--off": "switcher--off_3PpBE",
	"switcher--on": "switcher--on_3j_eP",
	"switcher-button": "switcher-button_p5hGG",
	"switcher-track": "switcher-track_3djr0"
};

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(343);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_switcher.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_switcher.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switcher = __webpack_require__(336);

var _Switcher2 = _interopRequireDefault(_Switcher);

var _reactCssModules = __webpack_require__(5);

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

var styles = __webpack_require__(401);
var PreferenceList = function (_Component) {
    _inherits(PreferenceList, _Component);

    function PreferenceList(props) {
        _classCallCheck(this, PreferenceList);

        return _possibleConstructorReturn(this, (PreferenceList.__proto__ || Object.getPrototypeOf(PreferenceList)).call(this, props));
    }

    _createClass(PreferenceList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                username = _props.username,
                email = _props.email,
                encriptedPassword = _props.encriptedPassword,
                showFav = _props.showFav;

            return _react2.default.createElement("div", { styleName: "settings" }, _react2.default.createElement("div", { className: "page-content" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("h1", { style: { marginBottom: 0 }, className: "page-title" }, "\u8BBE\u7F6E"), _react2.default.createElement("span", null, "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u6682\u4E3A\u53EA\u8BFB")), _react2.default.createElement("ul", { styleName: "options" }, _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u7528\u6237\u540D"), _react2.default.createElement("span", { styleName: "option-input" }, "readrweb.com/@", _react2.default.createElement("strong", null, username)), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u90AE\u7BB1"), _react2.default.createElement("span", { styleName: "option-input" }, email), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u5BC6\u7801"), _react2.default.createElement("span", { styleName: "option-input" }, "******"), _react2.default.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement("li", { styleName: "option" }, _react2.default.createElement("h2", null, "\u516C\u5F00\u5C55\u793A\u6211\u7684\u6536\u85CF"), _react2.default.createElement("span", { styleName: "option-desc" }, "\u5173\u95ED\u540E\u5176\u4ED6\u7528\u6237\u5C06\u65E0\u6CD5\u67E5\u770B\u60A8\u7684\u6536\u85CF"), _react2.default.createElement(_Switcher2.default, { styleName: "switcher", value: showFav, onChange: function onChange(newValue) {
                    _this2.setState({
                        showFav: newValue
                    });
                } })))));
        }
    }]);

    return PreferenceList;
}(_react.Component);
PreferenceList = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], PreferenceList);
var _default = PreferenceList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Preference/components/PreferenceList.tsx");

    __REACT_HOT_LOADER__.register(PreferenceList, "PreferenceList", "/Users/liang/Projects/readr/src/routes/Preference/components/PreferenceList.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Preference/components/PreferenceList.tsx");
}();

;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".settings_1BQPk .options_EBw_K {\n  margin-top: -35px; }\n\n.settings_1BQPk .option_l8jNG {\n  padding: 30px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.14);\n  position: relative; }\n  .settings_1BQPk .option_l8jNG h2 {\n    color: #333;\n    font-size: 1.2rem;\n    margin: 0;\n    margin-bottom: 5px; }\n  .settings_1BQPk .option_l8jNG:last-child {\n    display: none; }\n\n.settings_1BQPk .option-input_1aVAP,\n.settings_1BQPk .option-desc_3BP9p {\n  display: block; }\n\n.settings_1BQPk .user-avatar_2dFQG {\n  width: 100px;\n  height: 100px; }\n\n.settings_1BQPk .edit_NlaUS,\n.settings_1BQPk .switcher_7p_UC {\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -19px; }\n\n.settings_1BQPk .switcher_7p_UC {\n  margin-top: -8px; }\n\n.settings_1BQPk .edit_NlaUS {\n  border: 1px solid #ddd;\n  padding: 6px 16px;\n  border-radius: 100px;\n  cursor: pointer;\n  display: none; }\n", ""]);

// exports
exports.locals = {
	"settings": "settings_1BQPk",
	"options": "options_EBw_K",
	"option": "option_l8jNG",
	"option-input": "option-input_1aVAP",
	"option-desc": "option-desc_3BP9p",
	"user-avatar": "user-avatar_2dFQG",
	"edit": "edit_NlaUS",
	"switcher": "switcher_7p_UC"
};

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(386);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./PreferenceList.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./PreferenceList.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.8.js.map