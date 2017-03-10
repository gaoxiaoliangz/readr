exports.ids = [7];
exports.modules = {

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _form = __webpack_require__(85);

var _Tab = __webpack_require__(342);

var _layout = __webpack_require__(45);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _selectors = __webpack_require__(27);

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

var styles = __webpack_require__(405);
var Profile = function (_Component) {
    _inherits(Profile, _Component);

    // static fetchData({store, params}) {
    //   return store.dispatch(fetch())
    // }
    function Profile(props) {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
    }

    _createClass(Profile, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // this.props.fetchBooks()
            this.props.fetchProfile();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var username = this.props.profile.username;

            return _react2.default.createElement(_layout.Container, null, _react2.default.createElement("div", { styleName: "profile" }, _react2.default.createElement("div", { styleName: "page-header" }, _react2.default.createElement("div", { styleName: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { styleName: "username" }, username), _react2.default.createElement("span", { styleName: "tagline" }, "\u6682\u65E0\u7B7E\u540D"), _react2.default.createElement(_form.Button, { onClick: function onClick() {
                    _this2.props.sendNotification('该功能尚不可用', 'warning');
                }, styleName: "edit" }, "\u7F16\u8F91")), _react2.default.createElement(_Tab.Tabs, null, _react2.default.createElement(_Tab.Tab, { title: "收藏" }, "\u6682\u65E0\u6570\u636E"), _react2.default.createElement(_Tab.Tab, { title: "读过" }, "\u6682\u65E0\u6570\u636E"))));
        }
    }]);

    return Profile;
}(_react.Component);
Profile = __decorate([(0, _reactCssModules2.default)(styles)], Profile);
function mapStateToProps(state, ownProps) {
    var userId = selectors.sessionUserId(state);
    return {
        newestBooks: state.pagination.books.newest ? state.pagination.books.newest.ids.map(function (id) {
            return state.entities.books[id];
        }) : [],
        profile: selectors.common.entity('profiles', userId)(state)
    };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, fetchCollections: _actions.fetchCollections, fetchProfile: _actions.fetchProfile })(Profile);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Profile/Profile.tsx");

    __REACT_HOT_LOADER__.register(Profile, "Profile", "/Users/liang/Projects/readr/src/routes/Profile/Profile.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Profile/Profile.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Profile/Profile.tsx");
}();

;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Component) {
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
            return _react2.default.createElement("div", { className: "tab" }, this.props.children);
        }
    }]);

    return Tab;
}(_react.Component);

var _default = Tab;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Tab, "Tab", "/Users/liang/Projects/readr/src/components/Tab/Tab.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/Tab/Tab.tsx");
}();

;

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(20);

var _classnames2 = _interopRequireDefault(_classnames);

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

var styles = __webpack_require__(352);
var Tabs = function (_Component) {
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
            var _this2 = this;

            var style = this.props.style;

            return _react2.default.createElement("div", Object.assign({ className: "tabs" }, style ? { style: style } : null), _react2.default.createElement("div", { styleName: "tabs-header" }, _react2.default.createElement("ul", null, this.props.children.map(function (child, index) {
                return _react2.default.createElement("li", { styleName: (0, _classnames2.default)({ 'active': index === _this2.state.active }), key: index, onClick: _this2.handleTabClick.bind(_this2, index) }, child.props.title);
            }))), this.props.children.filter(function (child, index) {
                return index === _this2.state.active;
            }).map(function (child) {
                return child.props.children;
            })[0]);
        }
    }]);

    return Tabs;
}(_react.Component);
Tabs = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], Tabs);
Tabs.defaultProps = {
    defaultActive: 0
};
var _default = Tabs;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/Tab/Tabs.tsx");

    __REACT_HOT_LOADER__.register(Tabs, "Tabs", "/Users/liang/Projects/readr/src/components/Tab/Tabs.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/Tab/Tabs.tsx");
}();

;

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = undefined;

var _Tab = __webpack_require__(340);

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = __webpack_require__(341);

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _Tab2.default;
exports.Tabs = _Tabs2.default;
var _default = _Tab2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Tab/index.ts');
}();

;

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".tabs-header_sMcX1 {\n  margin-bottom: 15px;\n  font-size: 1.2rem; }\n  .tabs-header_sMcX1 ul {\n    border-bottom: 1px solid #ddd; }\n    .tabs-header_sMcX1 ul li {\n      margin-bottom: -2px;\n      display: inline-block;\n      margin-right: 15px;\n      cursor: pointer;\n      padding: 10px 0; }\n      .tabs-header_sMcX1 ul li.active_1FiRT {\n        font-weight: bold;\n        color: #1B267F;\n        border-bottom: 2px solid #1B267F; }\n", ""]);

// exports
exports.locals = {
	"tabs-header": "tabs-header_sMcX1",
	"active": "active_1FiRT"
};

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(347);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_tab.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./_tab.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(390);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Profile.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Profile.scss");

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