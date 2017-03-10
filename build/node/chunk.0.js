exports.ids = [0];
exports.modules = {

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(46);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _redux = __webpack_require__(17);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _ViewerContainer = __webpack_require__(376);

var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);

var _Viewer = __webpack_require__(406);

var _Viewer2 = _interopRequireDefault(_Viewer);

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

var mapStateToProps = function mapStateToProps(state, ownProps) {
    var bookId = ownProps.params.id;
    var book = selectors.common.entity('books', bookId)(state);
    return {
        book: book
    };
};
var Viewer = function (_Component) {
    _inherits(Viewer, _Component);

    function Viewer(props) {
        _classCallCheck(this, Viewer);

        var _this = _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));

        _this.bookId = props.params.id;
        return _this;
    }

    _createClass(Viewer, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.actions.initializeViewer(this.bookId);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_DocContainer2.default, { bodyClass: "viewer", title: this.props.book.title }, _react2.default.createElement(_ViewerContainer2.default, null));
        }
    }]);

    return Viewer;
}(_react.Component);
Viewer = __decorate([(0, _reactCssModules2.default)(_Viewer2.default)], Viewer);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(Viewer);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/Viewer.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/Viewer.tsx");

    __REACT_HOT_LOADER__.register(Viewer, "Viewer", "/Users/liang/Projects/readr/src/routes/Viewer/Viewer.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/Viewer.tsx");
}();

;

/***/ }),

/***/ 308:
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

var _classnames = __webpack_require__(20);

var _classnames2 = _interopRequireDefault(_classnames);

var _Loading = __webpack_require__(311);

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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loading = __webpack_require__(308);

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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
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

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(310);
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

/***/ 338:
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

var styles = __webpack_require__(351);
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switcher = __webpack_require__(338);

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

/***/ 346:
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

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(346);
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

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(46);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _BookPage = __webpack_require__(374);

var _BookPage2 = _interopRequireDefault(_BookPage);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames2 = __webpack_require__(20);

var _classnames3 = _interopRequireDefault(_classnames2);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var styles = __webpack_require__(408);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var config = selectors.viewer.config(state);
    var computed = selectors.viewer.computed(config.bookId)(state);
    var currentPageNo = selectors.viewer.progress(config.bookId)(state).pageNo;
    return (0, _assign3.default)({}, config, { computed: computed, currentPageNo: currentPageNo });
};
var BookPages = function (_Component) {
    _inherits(BookPages, _Component);

    function BookPages(props) {
        _classCallCheck(this, BookPages);

        return _possibleConstructorReturn(this, (BookPages.__proto__ || Object.getPrototypeOf(BookPages)).call(this, props));
    }
    // 写成 decorator 的形式？


    _createClass(BookPages, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                pages = _props.pages,
                fluid = _props.fluid,
                computed = _props.computed,
                theme = _props.theme,
                isScrollMode = _props.isScrollMode,
                pageHeight = _props.pageHeight,
                isCalcMode = _props.isCalcMode,
                currentPageNo = _props.currentPageNo;

            var totalHeight = computed.length * pageHeight;
            var className = (0, _classnames3.default)(_defineProperty({
                'pages': !fluid,
                'pages--fluid': fluid
            }, theme && theme.toLocaleLowerCase(), Boolean(theme)));
            var ulHeight = isCalcMode ? 'auto' : isScrollMode ? totalHeight : pageHeight;
            var ulStyle = { height: ulHeight };
            return _react2.default.createElement("ul", { styleName: className, style: ulStyle }, pages.map(function (page, index) {
                var active = page.meta && page.meta.pageNo === currentPageNo;
                return _react2.default.createElement(_BookPage2.default, { fluid: fluid, page: page, pageHeight: pageHeight, key: index, active: active });
            }));
        }
    }]);

    return BookPages;
}(_react.Component);
BookPages = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookPages);

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(BookPages);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPages.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPages.tsx");

    __REACT_HOT_LOADER__.register(BookPages, "BookPages", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPages.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPages.tsx");
}();

;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _forEach2 = __webpack_require__(417);

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _marked = __webpack_require__(420);

var _marked2 = _interopRequireDefault(_marked);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMarkdown = __webpack_require__(421);

var Markdown = function (_Component) {
    _inherits(Markdown, _Component);

    function Markdown(props) {
        _classCallCheck(this, Markdown);

        return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));
    }

    _createClass(Markdown, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'renderSafely',
        value: function renderSafely(className) {
            var _props = this.props,
                input = _props.input,
                renderers = _props.renderers;

            return _react2.default.createElement(ReactMarkdown, { className: className, source: input, renderers: renderers || {}, escapeHtml: false, skipHtml: false });
        }
    }, {
        key: 'renderUnSafely',
        value: function renderUnSafely(className) {
            var _props2 = this.props,
                input = _props2.input,
                markedRenderers = _props2.markedRenderers;

            var renderer = new _marked2.default.Renderer();
            if (markedRenderers) {
                (0, _forEach3.default)(markedRenderers, function (val, key) {
                    if (key !== 'line') {
                        renderer[key] = val;
                    }
                });
            }
            var html = (0, _marked2.default)(input, {
                gfm: false,
                breaks: true,
                renderer: renderer
            });
            if (markedRenderers && markedRenderers.line) {
                html = Array.prototype.filter.call((0, _jquery2.default)(html), function (ele) {
                    // 移除元素间的回车及字符串
                    return ele.nodeType !== 3;
                }).map(function (ele) {
                    return markedRenderers.line(ele);
                }).join('');
            }
            return _react2.default.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: html } });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                safe = _props3.safe,
                className = _props3.className;

            return safe ? this.renderSafely(className) : this.renderUnSafely(className);
        }
    }]);

    return Markdown;
}(_react.Component);

Markdown['defaultProps'] = {
    safe: true
};
var _default = Markdown;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Markdown, 'Markdown', '/Users/liang/Projects/readr/src/components/Markdown/Markdown.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Markdown/Markdown.tsx');
}();

;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Markdown = __webpack_require__(360);

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Markdown2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Markdown/index.ts');
}();

;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(94);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(400);

var _default = function _default(props) {
    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Slide/Slide.tsx');
}();

;

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slide = __webpack_require__(362);

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Slide2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Slide/index.ts');
}();

;

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = exports.Fade = undefined;

var _Fade = __webpack_require__(89);

var _Fade2 = _interopRequireDefault(_Fade);

var _Slide = __webpack_require__(363);

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Fade = _Fade2.default;
exports.Slide = _Slide2.default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _isEqual2 = __webpack_require__(46);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BookPages = __webpack_require__(355);

var _BookPages2 = _interopRequireDefault(_BookPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookChapter = function BookChapter(_ref) {
    var id = _ref.id,
        markdown = _ref.markdown;

    return _react2.default.createElement("div", { id: id }, _react2.default.createElement(_BookPages2.default, { pages: [{
            nodes: [markdown]
        }] }));
};

var BookChapters = function (_Component) {
    _inherits(BookChapters, _Component);

    function BookChapters(props) {
        _classCallCheck(this, BookChapters);

        return _possibleConstructorReturn(this, (BookChapters.__proto__ || Object.getPrototypeOf(BookChapters)).call(this, props));
    }

    _createClass(BookChapters, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
        }
    }, {
        key: 'triggerUpdate',
        value: function triggerUpdate() {
            var onRawDataMount = this.props.onRawDataMount;

            if (onRawDataMount) {
                onRawDataMount(this.chapters);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.triggerUpdate();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.triggerUpdate();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var bookFlesh = this.props.bookFlesh;

            return _react2.default.createElement("div", { ref: function ref(_ref2) {
                    return _this2.chapters = _ref2;
                } }, (bookFlesh || []).map(function (item) {
                return _react2.default.createElement(BookChapter, { id: item.id, markdown: item.markdown, key: item.id });
            }));
        }
    }]);

    return BookChapters;
}(_react.Component);

exports.default = BookChapters;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(BookChapter, 'BookChapter', '/Users/liang/Projects/readr/src/routes/Viewer/components/BookChapters.tsx');

    __REACT_HOT_LOADER__.register(BookChapters, 'BookChapters', '/Users/liang/Projects/readr/src/routes/Viewer/components/BookChapters.tsx');
}();

;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slice2 = __webpack_require__(419);

var _slice3 = _interopRequireDefault(_slice2);

var _debounce2 = __webpack_require__(415);

var _debounce3 = _interopRequireDefault(_debounce2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BookPages = __webpack_require__(355);

var _BookPages2 = _interopRequireDefault(_BookPages);

var _ViewerScrollbar = __webpack_require__(380);

var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);

var _redux = __webpack_require__(17);

var _reactRedux = __webpack_require__(19);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _NavArrow = __webpack_require__(375);

var _NavArrow2 = _interopRequireDefault(_NavArrow);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

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

var styles = __webpack_require__(407);
var mapStateToProps = function mapStateToProps(state) {
    var _selectors$viewer$con = selectors.viewer.config(state),
        bookId = _selectors$viewer$con.bookId,
        theme = _selectors$viewer$con.theme,
        isScrollMode = _selectors$viewer$con.isScrollMode,
        isCalcMode = _selectors$viewer$con.isCalcMode;

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state),
        percentage = _selectors$viewer$pro.percentage,
        pageNo = _selectors$viewer$pro.pageNo;

    return {
        percentage: percentage,
        pageNo: pageNo,
        theme: theme,
        isScrollMode: isScrollMode,
        isCalcMode: isCalcMode
    };
};
var BookContainer = function (_Component) {
    _inherits(BookContainer, _Component);

    function BookContainer(props) {
        _classCallCheck(this, BookContainer);

        var _this = _possibleConstructorReturn(this, (BookContainer.__proto__ || Object.getPrototypeOf(BookContainer)).call(this, props));

        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleScrollLazily = (0, _debounce3.default)(_this.handleScroll, 200, {
            maxWait: 1000
        });
        return _this;
    }

    _createClass(BookContainer, [{
        key: "handleScroll",
        value: function handleScroll() {
            var _props = this.props,
                allPages = _props.allPages,
                pageHeight = _props.pageHeight,
                isScrollMode = _props.isScrollMode;

            var pageCount = allPages.length;
            var totalHeight = pageCount * pageHeight;
            var scrollTop = document.body.scrollTop;
            if (isScrollMode) {
                this.props.actions.updateBookProgress(scrollTop / totalHeight);
            }
        }
    }, {
        key: "handleForward",
        value: function handleForward() {
            var _props2 = this.props,
                allPages = _props2.allPages,
                pageNo = _props2.pageNo;

            this.props.actions.viewerJumpTo(pageNo / allPages.length);
            document.body.scrollTop = 0;
        }
    }, {
        key: "handlebackward",
        value: function handlebackward() {
            var _props3 = this.props,
                allPages = _props3.allPages,
                pageNo = _props3.pageNo;

            this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length);
            document.body.scrollTop = 0;
        }
    }, {
        key: "addEventListeners",
        value: function addEventListeners() {
            window.addEventListener('scroll', this.handleScrollLazily);
        }
    }, {
        key: "removeEventListeners",
        value: function removeEventListeners() {
            window.removeEventListener('scroll', this.handleScrollLazily);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.addEventListeners();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.removeEventListeners();
        }
    }, {
        key: "render",
        value: function render() {
            var _props4 = this.props,
                allPages = _props4.allPages,
                pageHeight = _props4.pageHeight,
                showPageInfo = _props4.showPageInfo,
                pageLimit = _props4.pageLimit,
                pageNo = _props4.pageNo,
                theme = _props4.theme,
                isScrollMode = _props4.isScrollMode,
                isCalcMode = _props4.isCalcMode;

            var startPageIndex = void 0;
            startPageIndex = pageNo - Math.ceil(pageLimit / 2);
            startPageIndex = startPageIndex < 0 ? 0 : startPageIndex;
            var endPageIndex = startPageIndex + pageLimit;
            var divHeight = isCalcMode ? 'auto' : isScrollMode ? allPages.length * pageHeight : pageHeight;
            return _react2.default.createElement("div", { styleName: theme.toLowerCase(), style: { height: divHeight } }, _react2.default.createElement(_BookPages2.default, { pages: (0, _slice3.default)(allPages, startPageIndex, endPageIndex) }), _react2.default.createElement(_NavArrow2.default, { forward: this.handleForward.bind(this), backward: this.handlebackward.bind(this), show: !isScrollMode }), _react2.default.createElement(_ViewerScrollbar2.default, { visible: showPageInfo, current: pageNo, total: allPages.length }));
        }
    }]);

    return BookContainer;
}(_react.Component);
BookContainer = __decorate([(0, _reactCssModules2.default)(styles)], BookContainer);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(BookContainer);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookContainer.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookContainer.tsx");

    __REACT_HOT_LOADER__.register(BookContainer, "BookContainer", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookContainer.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookContainer.tsx");
}();

;

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(20);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Markdown = __webpack_require__(361);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _reactRedux = __webpack_require__(19);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var styles = __webpack_require__(93);
var renderers = {
    paragraph: function paragraph(text) {
        return "<p class=\"" + styles['gb-line'] + "\">" + text + "</p>";
    },
    link: function link(href, title, text) {
        if (href.indexOf('http://') === -1) {
            return "<a href=\"" + href + "\" class=\"js-book-nav\">" + text + "</a>";
        }
        return "<a href=\"" + href + "\" target=\"_blank\">" + text + "</a>";
    },
    line: function line(ele) {
        var tagName = ele.tagName;
        if (tagName !== 'P') {
            return "<div class=\"" + styles['gb-line'] + "\">" + (ele.outerHTML || ele.innerHTML || ele.textContent) + "</div>";
        }
        return ele.outerHTML;
    }
};
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var _selectors$viewer$con = selectors.viewer.config(state),
        fontSize = _selectors$viewer$con.fontSize,
        theme = _selectors$viewer$con.theme,
        isScrollMode = _selectors$viewer$con.isScrollMode;

    return { fontSize: fontSize, theme: theme, isScrollMode: isScrollMode };
};
var BookPage = function (_Component) {
    _inherits(BookPage, _Component);

    function BookPage() {
        _classCallCheck(this, BookPage);

        return _possibleConstructorReturn(this, (BookPage.__proto__ || Object.getPrototypeOf(BookPage)).apply(this, arguments));
    }

    _createClass(BookPage, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$page = _props.page,
                nodes = _props$page.nodes,
                meta = _props$page.meta,
                pageHeight = _props.pageHeight,
                fluid = _props.fluid,
                fontSize = _props.fontSize,
                theme = _props.theme,
                isScrollMode = _props.isScrollMode,
                active = _props.active;

            var mdInput = nodes.join('\n\n');
            var contentStyle = { fontSize: fontSize };
            var liStyle = {};
            if (meta && pageHeight) {
                if (isScrollMode) {
                    liStyle = {
                        position: 'absolute',
                        top: pageHeight * (meta.pageNo - 1),
                        height: pageHeight || 'auto'
                    };
                } else {
                    liStyle = {
                        position: 'absolute',
                        top: 0,
                        display: active ? 'block' : 'none',
                        height: pageHeight || 'auto'
                    };
                }
            }
            if (meta && meta.offset) {
                contentStyle.marginTop = meta.offset;
            }
            var className = (0, _classnames3.default)(_defineProperty({
                'page': !fluid,
                'page--fluid': fluid
            }, theme && theme.toLocaleLowerCase(), Boolean(theme)));
            return _react2.default.createElement("li", { styleName: className, style: liStyle }, _react2.default.createElement("div", { style: contentStyle, styleName: "content", ref: function ref(_ref) {
                    _this2.bookPageDom = _ref;
                } }, _react2.default.createElement(_Markdown2.default, { className: "lines", input: mdInput, safe: false, markedRenderers: renderers })), meta && _react2.default.createElement("div", { styleName: "page-no" }, meta.pageNo));
        }
    }]);

    return BookPage;
}(_react.Component);
BookPage = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookPage);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(BookPage);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPage.tsx");

    __REACT_HOT_LOADER__.register(renderers, "renderers", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPage.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPage.tsx");

    __REACT_HOT_LOADER__.register(BookPage, "BookPage", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPage.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/BookPage.tsx");
}();

;

/***/ }),

/***/ 375:
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

var styles = __webpack_require__(409);
var NavArrow = function (_Component) {
    _inherits(NavArrow, _Component);

    function NavArrow(props) {
        _classCallCheck(this, NavArrow);

        return _possibleConstructorReturn(this, (NavArrow.__proto__ || Object.getPrototypeOf(NavArrow)).call(this, props));
    }

    _createClass(NavArrow, [{
        key: "handleForwardClick",
        value: function handleForwardClick() {
            this.props.forward();
        }
    }, {
        key: "handleBackwardClick",
        value: function handleBackwardClick() {
            this.props.backward();
        }
    }, {
        key: "render",
        value: function render() {
            return this.props.show && _react2.default.createElement("div", { styleName: "navs" }, _react2.default.createElement("div", { styleName: "nav-left", onClick: this.handleBackwardClick.bind(this) }, "-"), _react2.default.createElement("div", { styleName: "nav-right", onClick: this.handleForwardClick.bind(this) }, "+"));
        }
    }]);

    return NavArrow;
}(_react.Component);
NavArrow = __decorate([(0, _reactCssModules2.default)(styles)], NavArrow);
var _default = NavArrow;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/NavArrow.tsx");

    __REACT_HOT_LOADER__.register(NavArrow, "NavArrow", "/Users/liang/Projects/readr/src/routes/Viewer/components/NavArrow.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/NavArrow.tsx");
}();

;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqualWith2 = __webpack_require__(418);

var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

var _isEqual2 = __webpack_require__(46);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _debounce2 = __webpack_require__(415);

var _debounce3 = _interopRequireDefault(_debounce2);

var _get2 = __webpack_require__(13);

var _get3 = _interopRequireDefault(_get2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(17);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _BookContainer = __webpack_require__(373);

var _BookContainer2 = _interopRequireDefault(_BookContainer);

var _ViewerPanel = __webpack_require__(378);

var _ViewerPanel2 = _interopRequireDefault(_ViewerPanel);

var _BookChapters = __webpack_require__(372);

var _BookChapters2 = _interopRequireDefault(_BookChapters);

var _Loading = __webpack_require__(309);

var _Loading2 = _interopRequireDefault(_Loading);

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGE_LIMIT = 5;
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var config = selectors.viewer.config(state);
    var bookId = config.bookId;
    var book = selectors.common.entity('books', bookId)(state);
    var bookContent = selectors.common.entity('bookContents', bookId)(state);
    var bookProgress = selectors.common.entity('bookProgress', bookId)(state);
    var cloudProgress = (0, _get3.default)(bookProgress, 'percentage', 0);
    var computedPages = selectors.viewer.computed(bookId)(state);

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state),
        viewerPercentage = _selectors$viewer$pro.percentage,
        isFetching = _selectors$viewer$pro.isFetching;

    var _selectors$viewer$pan = selectors.viewer.panel(state),
        showPanel = _selectors$viewer$pan.show;

    return {
        bookId: bookId,
        book: book,
        bookContent: bookContent,
        isFetchingProgress: isFetching,
        session: state.session,
        computedPages: computedPages,
        config: config,
        cloudProgress: cloudProgress,
        viewerPercentage: viewerPercentage,
        showPanel: showPanel
    };
};

var ViewerContainer = function (_Component) {
    _inherits(ViewerContainer, _Component);

    function ViewerContainer(props) {
        _classCallCheck(this, ViewerContainer);

        var _this = _possibleConstructorReturn(this, (ViewerContainer.__proto__ || Object.getPrototypeOf(ViewerContainer)).call(this, props));

        _this.state = {
            showPageInfo: false
        };
        _this.resizeLazily = (0, _debounce3.default)(_this.handleResize, 500, {
            maxWait: 1000
        });
        _this.handleViewerClick = _this.handleViewerClick.bind(_this);
        _this.handleResize = _this.handleResize.bind(_this);
        _this.resizeLazily = _this.resizeLazily.bind(_this);
        _this.handleRawDataMount = _this.handleRawDataMount.bind(_this);
        _this.handelViewerMouseMove = _this.handelViewerMouseMove.bind(_this);
        return _this;
    }

    _createClass(ViewerContainer, [{
        key: 'handleRawDataMount',
        value: function handleRawDataMount(ele) {
            this.props.actions.calcBook(this.props.bookId, ele);
        }
    }, {
        key: 'handleViewerClick',
        value: function handleViewerClick() {
            var isTouchMode = this.props.config.isTouchMode;

            if (isTouchMode) {
                this.props.actions.toggleViewerPanel();
                this.setState({
                    showPageInfo: !this.state.showPageInfo
                });
            }
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.props.actions.initializeViewerConfig(this.props.bookId, {
                isCalcMode: false
            });
        }
    }, {
        key: 'handelViewerMouseMove',
        value: function handelViewerMouseMove(event) {
            var dToScreenRight = _utils2.default.getScreenInfo().view.width - event.pageX;
            this.setState({
                showPageInfo: dToScreenRight < 100
            });
        }
    }, {
        key: 'reinitializeViewer',
        value: function reinitializeViewer() {
            var bookId = this.props.bookId;

            this.props.actions.configViewer(bookId, {
                isCalcMode: true
            });
            this.setState({
                showPageInfo: false
            });
            this.props.actions.toggleViewerPanel(false);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var viewChanged = !(0, _isEqualWith3.default)(this.props.config, prevProps.config, function (valA, valB, key) {
                if (key === 'isTouchMode' || key === 'isCalcMode' || key === 'isScrollMode' || key === 'theme') {
                    return true;
                }
            });
            if (viewChanged) {
                this.reinitializeViewer();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('resize', this.resizeLazily);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.resizeLazily);
        }
    }, {
        key: 'renderBook',
        value: function renderBook() {
            var showPageInfo = this.state.showPageInfo;
            var _props = this.props,
                bookContent = _props.bookContent,
                computedPages = _props.computedPages,
                _props$config = _props.config,
                isCalcMode = _props$config.isCalcMode,
                pageHeight = _props$config.pageHeight;

            if (!bookContent.flesh) {
                return _react2.default.createElement(_Loading2.default, { text: "书籍获取中", center: true });
            }
            if (isCalcMode) {
                return _react2.default.createElement("div", null, _react2.default.createElement(_Loading2.default, { text: "书籍排版中", center: true }), _react2.default.createElement(_BookChapters2.default, { bookFlesh: bookContent.flesh, onRawDataMount: this.handleRawDataMount }));
            } else if (computedPages.length !== 0) {
                return _react2.default.createElement(_BookContainer2.default, { allPages: computedPages, pageHeight: pageHeight, showPageInfo: showPageInfo, pageLimit: PAGE_LIMIT });
            } else {
                return _react2.default.createElement(_Loading2.default, { text: "准备中", center: true });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement("div", { onClick: this.handleViewerClick, onMouseMove: this.handelViewerMouseMove }, _react2.default.createElement(_ViewerPanel2.default, null), this.renderBook());
        }
    }]);

    return ViewerContainer;
}(_react.Component);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(ViewerContainer);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(PAGE_LIMIT, 'PAGE_LIMIT', '/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerContainer.tsx');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerContainer.tsx');

    __REACT_HOT_LOADER__.register(ViewerContainer, 'ViewerContainer', '/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerContainer.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerContainer.tsx');
}();

;

/***/ }),

/***/ 377:
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

var _redux = __webpack_require__(17);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _preventScroll = __webpack_require__(381);

var _preventScroll2 = _interopRequireDefault(_preventScroll);

var _Viewer = __webpack_require__(92);

var viewerUtils = _interopRequireWildcard(_Viewer);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

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

var styles = __webpack_require__(410);
var JS_NAV_HOOK = 'a.js-book-nav';
var $body = (0, _jquery2.default)('body');
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var _selectors$viewer$con = selectors.viewer.config(state),
        bookId = _selectors$viewer$con.bookId;

    var nav = selectors.viewer.navData(bookId)(state);

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state),
        viewerPercentage = _selectors$viewer$pro.percentage;

    var computedPages = selectors.viewer.computed(bookId)(state);
    return { nav: nav, viewerPercentage: viewerPercentage, computedPages: computedPages };
};
var ViewerNav = function (_Component) {
    _inherits(ViewerNav, _Component);

    function ViewerNav(props) {
        _classCallCheck(this, ViewerNav);

        var _this = _possibleConstructorReturn(this, (ViewerNav.__proto__ || Object.getPrototypeOf(ViewerNav)).call(this, props));

        _this.handleNavLinkClick = _this.handleNavLinkClick.bind(_this);
        return _this;
    }

    _createClass(ViewerNav, [{
        key: "handleNavLinkClick",
        value: function handleNavLinkClick(e) {
            e.preventDefault();
            var _props = this.props,
                computedPages = _props.computedPages,
                viewerPercentage = _props.viewerPercentage;

            var href = (0, _jquery2.default)(e.target).attr('href');
            try {
                var pageNo = viewerUtils.resolveBookLocation(href, computedPages);
                var percentage = (pageNo - 1) / computedPages.length;
                this.props.actions.viewerJumpTo(percentage);
            } catch (error) {
                this.props.actions.sendNotification(error.message, 'error');
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            // TODO: js hook 常量
            _preventScroll2.default.init('.js-nav-scroll');
            $body.on('click', JS_NAV_HOOK, this.handleNavLinkClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            _preventScroll2.default.destroy('.js-nav-scroll');
            $body.off('click', JS_NAV_HOOK, this.handleNavLinkClick);
        }
    }, {
        key: "renderLink",
        value: function renderLink(ref, hash, label) {
            if (hash) {
                return _react2.default.createElement("a", { className: "js-book-nav", href: "#" + ref + "$" + hash }, label);
            }
            return _react2.default.createElement("a", { className: "js-book-nav", href: "#" + ref }, label);
        }
    }, {
        key: "renderNav",
        value: function renderNav(navList) {
            var _this2 = this;

            return _react2.default.createElement("ul", null, navList.map(function (item, index) {
                if (item.children) {
                    return _react2.default.createElement("li", { key: index }, _this2.renderLink(item.ref, item.hash, item.label), _this2.renderNav(item.children));
                }
                return _react2.default.createElement("li", { key: index }, _this2.renderLink(item.ref, item.hash, item.label));
            }));
        }
    }, {
        key: "render",
        value: function render() {
            var nav = this.props.nav;

            return _react2.default.createElement("div", { className: "js-nav-scroll", styleName: "viewer-nav" }, this.renderNav(nav));
        }
    }]);

    return ViewerNav;
}(_react.Component);
ViewerNav = __decorate([(0, _reactCssModules2.default)(styles)], ViewerNav);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(ViewerNav);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");

    __REACT_HOT_LOADER__.register(JS_NAV_HOOK, "JS_NAV_HOOK", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");

    __REACT_HOT_LOADER__.register($body, "$body", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");

    __REACT_HOT_LOADER__.register(ViewerNav, "ViewerNav", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerNav.tsx");
}();

;

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

var _animations = __webpack_require__(364);

var _ViewerPreference = __webpack_require__(379);

var _ViewerPreference2 = _interopRequireDefault(_ViewerPreference);

var _ViewerNav = __webpack_require__(377);

var _ViewerNav2 = _interopRequireDefault(_ViewerNav);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRedux = __webpack_require__(19);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

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

var styles = __webpack_require__(411);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var config = selectors.viewer.config(state);
    var bookId = config.bookId;

    var _selectors$viewer$pan = selectors.viewer.panel(state),
        showPanel = _selectors$viewer$pan.show;

    var _selectors$viewer$pre = selectors.viewer.preference(state),
        showPreference = _selectors$viewer$pre.show;

    var _selectors$viewer$nav = selectors.viewer.navigation(state),
        showNavigation = _selectors$viewer$nav.show;

    var _selectors$common$ent = selectors.common.entity('books', bookId)(state),
        title = _selectors$common$ent.title;

    return { config: config, showPanel: showPanel, showPreference: showPreference, title: title, showNavigation: showNavigation };
};
var ViewerPanel = function (_Component) {
    _inherits(ViewerPanel, _Component);

    function ViewerPanel(props) {
        _classCallCheck(this, ViewerPanel);

        var _this = _possibleConstructorReturn(this, (ViewerPanel.__proto__ || Object.getPrototypeOf(ViewerPanel)).call(this, props));

        _this.handelViewerMouseMove = _this.handelViewerMouseMove.bind(_this);
        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
        return _this;
    }

    _createClass(ViewerPanel, [{
        key: "handleGlobalClick",
        value: function handleGlobalClick(e) {
            var _props = this.props,
                showPreference = _props.showPreference,
                showNavigation = _props.showNavigation;

            if (!(0, _isDescendant2.default)(this.nav, e.target)) {
                if (showNavigation) {
                    this.props.actions.toggleViewerNavigation(false);
                }
            } else {
                this.props.actions.toggleViewerNavigation();
            }
            if (!(0, _isDescendant2.default)(this.pref, e.target)) {
                if (showPreference) {
                    this.props.actions.toggleViewerPreference(false);
                }
            } else {
                this.props.actions.toggleViewerPreference();
            }
        }
    }, {
        key: "handelViewerMouseMove",
        value: function handelViewerMouseMove(event) {
            var _props2 = this.props,
                _props2$config = _props2.config,
                isCalcMode = _props2$config.isCalcMode,
                isTouchMode = _props2$config.isTouchMode,
                showPanel = _props2.showPanel;

            if (!isCalcMode && !isTouchMode) {
                var y = event.pageY - document.body.scrollTop;
                var show = y < 90;
                if (showPanel !== show) {
                    this.props.actions.toggleViewerPanel(show);
                }
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener('mousemove', this.handelViewerMouseMove);
            window.addEventListener('click', this.handleGlobalClick);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener('mousemove', this.handelViewerMouseMove);
            window.removeEventListener('click', this.handleGlobalClick);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                title = _props3.title,
                showPanel = _props3.showPanel,
                showPreference = _props3.showPreference,
                showNavigation = _props3.showNavigation;

            return _react2.default.createElement(_animations.Slide, null, (showPanel || showPreference || showNavigation) && _react2.default.createElement("div", { styleName: "viewer-panel" }, _react2.default.createElement("div", { styleName: "container" }, _react2.default.createElement("div", { styleName: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "\u8FD4\u56DE"))), _react2.default.createElement("div", { ref: function ref(_ref) {
                    _this2.nav = _ref;
                }, styleName: "contents" }, _react2.default.createElement("span", null, "\u76EE\u5F55"), _react2.default.createElement(_animations.Fade, null, showNavigation && _react2.default.createElement(_ViewerNav2.default, null))), _react2.default.createElement("span", { styleName: "title" }, title), _react2.default.createElement("div", { ref: function ref(_ref2) {
                    _this2.pref = _ref2;
                }, styleName: "preference" }, _react2.default.createElement(_Icon2.default, { name: "preference" }), _react2.default.createElement(_animations.Fade, null, showPreference && _react2.default.createElement(_ViewerPreference2.default, null))))));
        }
    }]);

    return ViewerPanel;
}(_react.Component);
ViewerPanel = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPanel);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(ViewerPanel);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPanel.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPanel.tsx");

    __REACT_HOT_LOADER__.register(ViewerPanel, "ViewerPanel", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPanel.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPanel.tsx");
}();

;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys2 = __webpack_require__(86);

var _keys3 = _interopRequireDefault(_keys2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switcher = __webpack_require__(339);

var _Switcher2 = _interopRequireDefault(_Switcher);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRedux = __webpack_require__(19);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _classnames = __webpack_require__(20);

var _classnames2 = _interopRequireDefault(_classnames);

var _viewerDefs = __webpack_require__(91);

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

var styles = __webpack_require__(412);
var MAX_FONT_SIZE = 20;
var MIN_FONT_SIZE = 12;
var mapStateToProps = function mapStateToProps(state, ownProps) {
    var _selectors$viewer$con = selectors.viewer.config(state),
        fontSize = _selectors$viewer$con.fontSize,
        isScrollMode = _selectors$viewer$con.isScrollMode,
        theme = _selectors$viewer$con.theme;

    return { fontSize: fontSize, isScrollMode: isScrollMode, theme: theme };
};
var ViewerPreference = function (_Component) {
    _inherits(ViewerPreference, _Component);

    function ViewerPreference(props) {
        _classCallCheck(this, ViewerPreference);

        return _possibleConstructorReturn(this, (ViewerPreference.__proto__ || Object.getPrototypeOf(ViewerPreference)).call(this, props));
    }

    _createClass(ViewerPreference, [{
        key: "handleDecFontSizeClick",
        value: function handleDecFontSizeClick() {
            var fontSize = this.props.fontSize;

            var _getBtnStatus = this.getBtnStatus(),
                isDecDisabled = _getBtnStatus.isDecDisabled;

            if (!isDecDisabled) {
                this.props.actions.changeViewerFontSize(fontSize - 1);
            }
        }
    }, {
        key: "handleIncFontSizeClick",
        value: function handleIncFontSizeClick() {
            var fontSize = this.props.fontSize;

            var _getBtnStatus2 = this.getBtnStatus(),
                isIncDisabled = _getBtnStatus2.isIncDisabled;

            if (!isIncDisabled) {
                this.props.actions.changeViewerFontSize(fontSize + 1);
            }
        }
    }, {
        key: "handleChangeThemeClick",
        value: function handleChangeThemeClick(key) {
            this.props.actions.changeViewerTheme(key);
        }
    }, {
        key: "handleToggleScrollModeClick",
        value: function handleToggleScrollModeClick(val) {
            this.props.actions.toggleViewerScrollMode(val);
        }
    }, {
        key: "getBtnStatus",
        value: function getBtnStatus() {
            var fontSize = this.props.fontSize;

            var isDecDisabled = fontSize <= MIN_FONT_SIZE;
            var isIncDisabled = fontSize >= MAX_FONT_SIZE;
            return { isDecDisabled: isDecDisabled, isIncDisabled: isIncDisabled };
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _getBtnStatus3 = this.getBtnStatus(),
                isDecDisabled = _getBtnStatus3.isDecDisabled,
                isIncDisabled = _getBtnStatus3.isIncDisabled;

            var _props = this.props,
                isScrollMode = _props.isScrollMode,
                theme = _props.theme;

            var btnDecClass = (0, _classnames2.default)({
                'btn': !isDecDisabled,
                'btn--disabled': isDecDisabled
            });
            var btnIncClass = (0, _classnames2.default)({
                'btn': !isIncDisabled,
                'btn--disabled': isIncDisabled
            });
            return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), _react2.default.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "\u6EDA\u52A8\u6A21\u5F0F"), _react2.default.createElement(_Switcher2.default, { value: isScrollMode, onChange: this.handleToggleScrollModeClick.bind(this) })), _react2.default.createElement("li", { styleName: "option-theme" }, (0, _keys3.default)(_viewerDefs.THEMES).map(function (key, index) {
                var className = key.toLowerCase() + (theme === key ? '--active' : '');
                console.log(className, theme, key);
                return _react2.default.createElement("span", { key: index, className: styles[className], onClick: _this2.handleChangeThemeClick.bind(_this2, key) }, key);
            }))));
        }
    }]);

    return ViewerPreference;
}(_react.Component);
ViewerPreference = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPreference);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
})(ViewerPreference);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");

    __REACT_HOT_LOADER__.register(MAX_FONT_SIZE, "MAX_FONT_SIZE", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");

    __REACT_HOT_LOADER__.register(MIN_FONT_SIZE, "MIN_FONT_SIZE", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");

    __REACT_HOT_LOADER__.register(ViewerPreference, "ViewerPreference", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerPreference.tsx");
}();

;

/***/ }),

/***/ 380:
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

var styles = __webpack_require__(413);
var ViewerScrollbar = function (_Component) {
    _inherits(ViewerScrollbar, _Component);

    function ViewerScrollbar(props) {
        _classCallCheck(this, ViewerScrollbar);

        return _possibleConstructorReturn(this, (ViewerScrollbar.__proto__ || Object.getPrototypeOf(ViewerScrollbar)).call(this, props));
    }

    _createClass(ViewerScrollbar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                current = _props.current,
                total = _props.total;

            var percentage = (current / total * 100).toFixed(2) + '%';
            return this.props.visible && _react2.default.createElement("div", Object.assign({}, { styleName: 'loc-info' }), _react2.default.createElement("div", null, _react2.default.createElement("strong", null, current), "/", total), _react2.default.createElement("div", { styleName: "sub-info" }, percentage));
        }
    }]);

    return ViewerScrollbar;
}(_react.Component);
ViewerScrollbar = __decorate([(0, _reactCssModules2.default)(styles)], ViewerScrollbar);
var _default = ViewerScrollbar;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerScrollbar.tsx");

    __REACT_HOT_LOADER__.register(ViewerScrollbar, "ViewerScrollbar", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerScrollbar.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Viewer/components/ViewerScrollbar.tsx");
}();

;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollHandler(ev) {
    var $this = (0, _jquery2.default)(this);
    var scrollTop = this.scrollTop;
    var scrollHeight = this.scrollHeight;
    var height = $this.innerHeight();
    var delta = ev.type === 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta;
    var up = delta > 0;
    var prevent = function prevent() {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
    };
    if (!up && -delta > scrollHeight - height - scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        // Scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
    }
} /**
   * 阻止 selector 以外的元素滚动
   * http://stackoverflow.com/questions/5802467/prevent-scrolling-of-parent-element
   */
var _default = {
    init: function init(selector) {
        (0, _jquery2.default)(document).on('DOMMouseScroll mousewheel', selector, scrollHandler);
    },
    destroy: function destroy(selector) {
        (0, _jquery2.default)(document).off('DOMMouseScroll mousewheel', selector, scrollHandler);
    }
};
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(scrollHandler, 'scrollHandler', '/Users/liang/Projects/readr/src/utils/browser/preventScroll.ts');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/utils/browser/preventScroll.ts');
}();

;

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".enter_1v5B1 {\n  transform: translateY(-100%);\n  opacity: 0.01;\n  transition: all .3s; }\n\n.enterActive_26TbM {\n  transform: translateY(0);\n  opacity: 1; }\n\n.leave_a2XRB {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all .3s; }\n\n.seaveActive_9yLLN {\n  transform: translateY(-100%);\n  opacity: 0; }\n", ""]);

// exports
exports.locals = {
	"enter": "enter_1v5B1",
	"enterActive": "enterActive_26TbM",
	"leave": "leave_a2XRB",
	"seaveActive": "seaveActive_9yLLN"
};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".viewer {\n  background: #eee; }\n", ""]);

// exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".white_2z99Y {\n  background: #eee; }\n\n.night_37Qro {\n  background: #222; }\n\n.sepia_1cfSe {\n  background: #f9f1e5; }\n", ""]);

// exports
exports.locals = {
	"white": "white_2z99Y",
	"night": "night_37Qro",
	"sepia": "sepia_1cfSe"
};

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".pages_19v_x {\n  position: relative;\n  width: 700px;\n  margin: 0 auto;\n  background: #fff; }\n\n.pages--fluid_1dnEL {\n  width: 100%; }\n\n.white_1oLZj {\n  background: #fff; }\n\n.night_ZSdxF {\n  background: #333; }\n\n.sepia_3Vs2d {\n  background: #fbf7f1; }\n", ""]);

// exports
exports.locals = {
	"pages": "pages_19v_x",
	"pages--fluid": "pages--fluid_1dnEL pages_19v_x",
	"white": "white_1oLZj",
	"night": "night_ZSdxF",
	"sepia": "sepia_3Vs2d"
};

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".navs_28W6W {\n  position: fixed;\n  top: 50%;\n  width: 750px;\n  left: 50%;\n  margin-left: -375px;\n  height: 120px;\n  margin-top: -60px; }\n\n.nav-arrow_RW2Xi {\n  width: 20px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n  background: #fff;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none; }\n  .nav-arrow_RW2Xi:hover {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n  .nav-arrow_RW2Xi:active {\n    box-shadow: none; }\n\n.nav-left_3g8Om {\n  float: left; }\n\n.nav-right_2FsBq {\n  float: right; }\n", ""]);

// exports
exports.locals = {
	"navs": "navs_28W6W",
	"nav-arrow": "nav-arrow_RW2Xi",
	"nav-left": "nav-left_3g8Om nav-arrow_RW2Xi",
	"nav-right": "nav-right_2FsBq nav-arrow_RW2Xi"
};

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".viewer-nav_2OoUT {\n  position: absolute;\n  top: 80px;\n  left: -20px;\n  height: 100%;\n  background: #fff;\n  overflow-y: scroll;\n  padding: 20px 20px 20px 0;\n  border-radius: 3px;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  width: 300px;\n  height: 400px; }\n  .viewer-nav_2OoUT ul {\n    margin-left: 20px;\n    text-align: left;\n    line-height: 1.8; }\n    .viewer-nav_2OoUT ul li a {\n      display: block;\n      border-bottom: 1px solid #ddd; }\n", ""]);

// exports
exports.locals = {
	"viewer-nav": "viewer-nav_2OoUT"
};

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".viewer-panel_28Idq {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  z-index: 990;\n  background: #222;\n  color: #fff;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);\n  height: 60px; }\n\n.container_3HjnD {\n  max-width: 1200px;\n  text-align: center;\n  margin: 0 auto;\n  height: 60px;\n  position: relative; }\n\n.back_4XY67 {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  line-height: 60px; }\n  .back_4XY67 a {\n    color: #fff;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px;\n    overflow: hidden; }\n    .back_4XY67 a span {\n      float: left;\n      margin-right: 5px; }\n  .back_4XY67 span {\n    line-height: 30px;\n    display: inline-block;\n    height: 60px;\n    line-height: 60px; }\n\n.contents_VJwYc {\n  display: inline-block;\n  position: absolute;\n  left: 100px;\n  top: 0;\n  cursor: pointer;\n  line-height: 60px; }\n  .contents_VJwYc span {\n    color: #fff; }\n\n.title_3Vi5B {\n  font-size: 1.2rem;\n  line-height: 60px; }\n\n.preference_3S7CO {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  cursor: pointer;\n  display: inline-block; }\n", ""]);

// exports
exports.locals = {
	"viewer-panel": "viewer-panel_28Idq",
	"container": "container_3HjnD",
	"back": "back_4XY67",
	"contents": "contents_VJwYc",
	"title": "title_3Vi5B",
	"preference": "preference_3S7CO"
};

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".viewer-preference_1KDgt {\n  position: absolute;\n  right: 0;\n  top: 65px;\n  width: 200px;\n  background: #fff;\n  box-shadow: 0 12px 63px rgba(0, 0, 0, 0.15);\n  color: #666;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  overflow: hidden; }\n\n.option_H-ecf {\n  padding: 10px 15px;\n  border-bottom: 1px solid #ddd; }\n  .option_H-ecf:last-child {\n    border: none; }\n\n.option-font-size_2-R30 {\n  overflow: hidden;\n  padding: 0; }\n  .option-font-size_2-R30 .btn_3_tRz, .option-font-size_2-R30 .btn--disabled_2LRO5 {\n    font-size: 1.2rem;\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    padding: 0 5px;\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer; }\n    .option-font-size_2-R30 .btn_3_tRz:hover, .option-font-size_2-R30 .btn--disabled_2LRO5:hover {\n      color: #333; }\n    .option-font-size_2-R30 .btn_3_tRz:active, .option-font-size_2-R30 .btn--disabled_2LRO5:active {\n      color: #999; }\n  .option-font-size_2-R30 .btn_3_tRz:first-child, .option-font-size_2-R30 .btn--disabled_2LRO5:first-child {\n    font-size: .9rem;\n    border-right: 1px solid #ddd; }\n  .option-font-size_2-R30 .btn--disabled_2LRO5 {\n    color: #ddd; }\n\n.option-scroll_3MxdL {\n  overflow: hidden;\n  text-align: left; }\n  .option-scroll_3MxdL .label_i6lv1 {\n    float: left; }\n  .option-scroll_3MxdL .switcher_3Llvj {\n    float: right; }\n\n.option-theme_30Vrz {\n  padding: 5px 0; }\n\n.theme-btn_2xsxR {\n  border-radius: 50%;\n  border: 2px solid #ddd;\n  text-indent: -999em;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n  cursor: pointer; }\n\n.white_3yn4t {\n  background: #fff; }\n\n.white--active_Fu40U {\n  background: #fff;\n  border-color: #1B267F; }\n\n.night_2Elp2 {\n  background: #222; }\n\n.night--active_ShZrb {\n  background: #222;\n  border-color: #1B267F; }\n\n.sepia_2Mzyq {\n  background: #f9f1e5; }\n\n.sepia--active_2rCX_ {\n  background: #f9f1e5;\n  border-color: #1B267F; }\n", ""]);

// exports
exports.locals = {
	"viewer-preference": "viewer-preference_1KDgt",
	"option": "option_H-ecf",
	"option-font-size": "option-font-size_2-R30 option_H-ecf",
	"btn": "btn_3_tRz",
	"btn--disabled": "btn--disabled_2LRO5",
	"option-scroll": "option-scroll_3MxdL option_H-ecf",
	"label": "label_i6lv1",
	"switcher": "switcher_3Llvj",
	"option-theme": "option-theme_30Vrz option_H-ecf",
	"theme-btn": "theme-btn_2xsxR",
	"white": "white_3yn4t theme-btn_2xsxR",
	"white--active": "white--active_Fu40U theme-btn_2xsxR",
	"night": "night_2Elp2 theme-btn_2xsxR",
	"night--active": "night--active_ShZrb theme-btn_2xsxR",
	"sepia": "sepia_2Mzyq theme-btn_2xsxR",
	"sepia--active": "sepia--active_2rCX_ theme-btn_2xsxR"
};

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".scrollbar_2JIsC {\n  width: 2px;\n  min-height: 400px;\n  position: fixed;\n  right: 40px;\n  top: 100px; }\n  .scrollbar_2JIsC:hover .button_2_Um5 {\n    display: block; }\n\n.track_2Pcg_ {\n  width: 2px;\n  background: #c4c4c4;\n  border-radius: 3px;\n  position: absolute;\n  left: 8px;\n  top: 0;\n  z-index: 1; }\n\n.track--past_1xR9T {\n  background: #5866db;\n  z-index: 2; }\n\n.button_2_Um5 {\n  width: 20px;\n  height: 20px;\n  background: #1B267F;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  position: absolute;\n  left: 0;\n  top: 84px;\n  cursor: pointer;\n  border-radius: 50%;\n  z-index: 3;\n  display: none; }\n\n.loc-info_2mooY {\n  text-align: center;\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n  background: #222;\n  color: #ddd;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.32);\n  padding: 7px 15px; }\n\n.sub-info_3Sjr- {\n  font-size: 0.8rem;\n  color: #aaa; }\n", ""]);

// exports
exports.locals = {
	"scrollbar": "scrollbar_2JIsC",
	"button": "button_2_Um5",
	"track": "track_2Pcg_",
	"track--past": "track--past_1xR9T track_2Pcg_",
	"loc-info": "loc-info_2mooY",
	"sub-info": "sub-info_3Sjr-"
};

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(385);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Slide.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Slide.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(391);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Viewer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Viewer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(392);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookContainer.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookContainer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(393);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookPages.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookPages.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(394);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./NavArrow.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./NavArrow.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(395);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerNav.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerNav.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(396);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerPanel.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerPanel.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(397);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerPreference.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerPreference.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(398);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerScrollbar.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./ViewerScrollbar.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.0.js.map