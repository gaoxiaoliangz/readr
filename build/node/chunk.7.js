exports.ids = [7];
exports.modules = {

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Tab__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Profile_scss__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Profile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__Profile_scss__);
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










let Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile(props) {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    }

    _createClass(Profile, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.loadProfile();
        }
    }, {
        key: "render",
        value: function render() {
            const { profile: { username } } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layout__["a" /* Container */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "profile" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "page-header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "user-avatar" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "username" }, username), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { styleName: "tagline" }, "\u6682\u65E0\u7B7E\u540D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { onClick: () => {
                    this.props.sendNotification('该功能尚不可用', 'warning');
                }, styleName: "edit" }, "\u7F16\u8F91")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Tab__["a" /* Tabs */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Tab__["b" /* Tab */], { title: "收藏" }, "\u6682\u65E0\u6570\u636E"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Tab__["b" /* Tab */], { title: "读过" }, "\u6682\u65E0\u6570\u636E"))));
        }
    }]);

    return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Profile = __decorate([__WEBPACK_IMPORTED_MODULE_7_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_9__Profile_scss___default.a)], Profile);
function mapStateToProps(state, ownProps) {
    // const userId = selectors.sessionUserId(state)
    return {
        profile: __WEBPACK_IMPORTED_MODULE_8__selectors__["f" /* profile */](state)
    };
}
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["sendNotification"], loadProfile: __WEBPACK_IMPORTED_MODULE_3__actions_api__["loadProfile"] })(Profile);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



let Tab = function (_Component) {
    _inherits(Tab, _Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));
    }

    _createClass(Tab, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "tab" }, this.props.children);
        }
    }]);

    return Tab;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = Tab;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
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



const styles = __webpack_require__(334);
let Tabs = function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

        _this.state = {
            active: _this.props.defaultActive
        };
        _this.handleTabClick = _this.handleTabClick.bind(_this);
        return _this;
    }

    _createClass(Tabs, [{
        key: "handleTabClick",
        value: function handleTabClick(index) {
            this.setState({
                active: index
            });
            if (this.props.onTabSwitch) {
                this.props.onTabSwitch(index);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            const { style } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", Object.assign({ className: "tabs" }, style ? { style } : null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "tabs-header" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, this.props.children.map((child, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { styleName: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ 'active': index === this.state.active }), key: index, onClick: this.handleTabClick.bind(this, index) }, child.props.title);
            }))), this.props.children.filter((child, index) => {
                return index === this.state.active;
            }).map(child => {
                return child.props.children;
            })[0]);
        }
    }]);

    return Tabs;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Tabs = __decorate([__WEBPACK_IMPORTED_MODULE_2_react_css_modules___default()(styles, {
    allowMultiple: true
})], Tabs);
Tabs.defaultProps = {
    defaultActive: 0
};
/* harmony default export */ __webpack_exports__["a"] = Tabs;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tab__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tabs__ = __webpack_require__(324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Tab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Tabs__["a"]; });



/* unused harmony default export */ var _unused_webpack_default_export = __WEBPACK_IMPORTED_MODULE_0__Tab__["a" /* default */];

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".tabs-header_sMcX1 {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_sMcX1 ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_sMcX1 ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_sMcX1 ul li.active_1FiRT {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);

// exports
exports.locals = {
	"tabs-header": "tabs-header_sMcX1",
	"active": "active_1FiRT"
};

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(329);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_tab.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./_tab.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".profile_2_txM {\n  min-height: 500px;\n  position: relative; }\n\n.page-header_8_W8w {\n  text-align: center;\n  margin: 30px 0; }\n  .page-header_8_W8w span {\n    display: block; }\n\n.username_Oq29Q {\n  margin-top: 20px;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: #333; }\n\n.edit_2eg-9 {\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.user-avatar__RLgV {\n  width: 160px;\n  height: 160px;\n  display: inline-block; }\n  .user-avatar__RLgV img {\n    width: 100%;\n    height: auto;\n    border-radius: 100%;\n    overflow: hidden;\n    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32); }\n\n.tagline_3Hzua {\n  font-size: 1.2rem; }\n", ""]);

// exports
exports.locals = {
	"profile": "profile_2_txM",
	"page-header": "page-header_8_W8w",
	"username": "username_Oq29Q",
	"edit": "edit_2eg-9",
	"user-avatar": "user-avatar__RLgV",
	"tagline": "tagline_3Hzua"
};

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(372);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Profile.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Profile.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.7.js.map