exports.ids = [8];
exports.modules = {

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PreferenceList__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








let Preference = function (_Component) {
    _inherits(Preference, _Component);

    function Preference(props) {
        _classCallCheck(this, Preference);

        var _this = _possibleConstructorReturn(this, (Preference.__proto__ || Object.getPrototypeOf(Preference)).call(this, props));

        _this.state = {
            showFav: true
        };
        return _this;
    }

    _createClass(Preference, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.loadProfile();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocContainer__["a" /* default */], { title: "设置" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_PreferenceList__["a" /* default */], Object.assign({}, this.props.profile))));
        }
    }]);

    return Preference;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => {
    return {
        profile: __WEBPACK_IMPORTED_MODULE_5__selectors__["f" /* profile */](state)
    };
}, { loadProfile: __WEBPACK_IMPORTED_MODULE_2__actions_api__["loadProfile"] })(Preference);

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_css_modules__);
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


const styles = __webpack_require__(380);
let Switcher = function (_Component) {
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
            let { value: isOn, className } = this.props;
            if (typeof this.props.value === 'string') {
                if (isOn === '1' || isOn === 'true') {
                    isOn = true;
                } else {
                    isOn = false;
                }
            }
            let state = Boolean(isOn) ? 'on' : 'off';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: className || '', styleName: "switcher-wrap" }, this.props.title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, this.props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { onClick: e => {
                    if (this.props.onChange) {
                        let newValue;
                        if (this.props.options) {
                            const currentValueIndex = this.props.options.map(option => option.value).indexOf(this.props.value);
                            if (currentValueIndex === 1) {
                                newValue = this.props.options[0].value;
                            } else if (currentValueIndex === 0) {
                                newValue = this.props.options[1].value;
                            } else {
                                newValue = this.props.options[0].value;
                                console.error('当前数据有误，将使用默认数据！');
                            }
                        } else {
                            if (typeof this.props.value === 'string') {
                                console.error('没有给 options 时必须使用布尔型的 value！');
                            } else {
                                newValue = !this.props.value;
                            }
                        }
                        this.props.onChange(newValue);
                    }
                }, styleName: `switcher--${state}` }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "switcher-button" }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "switcher-track" })));
        }
    }]);

    return Switcher;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Switcher = __decorate([__WEBPACK_IMPORTED_MODULE_1_react_css_modules___default()(styles, {
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
/* harmony default export */ __webpack_exports__["a"] = Switcher;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Switcher__ = __webpack_require__(345);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Switcher__["a" /* default */];

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Switcher__ = __webpack_require__(346);
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



const styles = __webpack_require__(384);
let PreferenceList = function (_Component) {
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
            const { username, email, encriptedPassword, showFav } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "settings" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "page-content" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "page-header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { style: { marginBottom: 0 }, className: "page-title" }, "\u8BBE\u7F6E"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u6682\u4E3A\u53EA\u8BFB")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", { styleName: "options" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "\u7528\u6237\u540D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "option-input" }, "readrweb.com/@", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", null, username)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "\u90AE\u7BB1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "option-input" }, email), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "\u5BC6\u7801"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "option-input" }, "******"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "edit" }, "\u7F16\u8F91")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: "option" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "\u516C\u5F00\u5C55\u793A\u6211\u7684\u6536\u85CF"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "option-desc" }, "\u5173\u95ED\u540E\u5176\u4ED6\u7528\u6237\u5C06\u65E0\u6CD5\u67E5\u770B\u60A8\u7684\u6536\u85CF"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Switcher__["a" /* default */], { styleName: "switcher", value: showFav, onChange: newValue => {
                    this.setState({
                        showFav: newValue
                    });
                } })))));
        }
    }]);

    return PreferenceList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
PreferenceList = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles, {
    allowMultiple: true
})], PreferenceList);
/* harmony default export */ __webpack_exports__["a"] = PreferenceList;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
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

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(367);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_switcher.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_switcher.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(371);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./PreferenceList.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/sass-loader/index.js!./PreferenceList.scss");

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