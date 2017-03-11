exports.ids = [0];
exports.modules = {

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(17);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _ViewerContainer = __webpack_require__(376);

var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);

var _Viewer = __webpack_require__(406);

var _Viewer2 = _interopRequireDefault(_Viewer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const mapStateToProps = (state, ownProps) => {
    const bookId = ownProps.params.id;
    const book = selectors.common.entity('books', bookId)(state);
    return {
        book: book
    };
};
let Viewer = class Viewer extends _react.Component {
    constructor(props) {
        super(props);
        this.bookId = props.params.id;
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
    }
    componentDidMount() {
        this.props.actions.initializeViewer(this.bookId);
    }
    render() {
        return _react2.default.createElement(_DocContainer2.default, { bodyClass: "viewer", title: this.props.book.title }, _react2.default.createElement(_ViewerContainer2.default, null));
    }
};
Viewer = __decorate([(0, _reactCssModules2.default)(_Viewer2.default)], Viewer);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(Viewer);

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _Loading = __webpack_require__(311);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let Loading = class Loading extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            dynamicText: ''
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.dynamicText.length === 3) {
                this.setState({ dynamicText: '' });
            } else {
                this.setState({
                    dynamicText: this.state.dynamicText + '.'
                });
            }
        }, 500);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        var _props = this.props;
        const text = _props.text,
              center = _props.center;
        const dynamicText = this.state.dynamicText;

        const wrapClass = (0, _classnames2.default)({
            'loading-wrap--center': center,
            'loading-wrap': !center
        });
        return _react2.default.createElement("div", { styleName: wrapClass }, _react2.default.createElement("span", { styleName: "text-loading" }, text + dynamicText));
    }
};
Loading = __decorate([(0, _reactCssModules2.default)(_Loading2.default)], Loading);
Loading['defaultProps'] = {
    text: '加载中'
};
exports.default = Loading;

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

exports.default = _Loading2.default;

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(351);
let Switcher = class Switcher extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props;
        let isOn = _props.value,
            className = _props.className;

        if (typeof this.props.value === 'string') {
            if (isOn === '1' || isOn === 'true') {
                isOn = true;
            } else {
                isOn = false;
            }
        }
        let state = Boolean(isOn) ? 'on' : 'off';
        return _react2.default.createElement("div", { className: className || '', styleName: "switcher-wrap" }, this.props.title && _react2.default.createElement("span", null, this.props.title), _react2.default.createElement("div", { onClick: e => {
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
            }, styleName: `switcher--${state}` }, _react2.default.createElement("div", { styleName: "switcher-button" }), _react2.default.createElement("div", { styleName: "switcher-track" })));
    }
};
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
exports.default = Switcher;

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

exports.default = _Switcher2.default;

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

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _assign2 = __webpack_require__(3);

var _assign3 = _interopRequireDefault(_assign2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _BookPage = __webpack_require__(374);

var _BookPage2 = _interopRequireDefault(_BookPage);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(408);
const mapStateToProps = (state, ownProps) => {
    const config = selectors.viewer.config(state);
    const computed = selectors.viewer.computed(config.bookId)(state);
    const currentPageNo = selectors.viewer.progress(config.bookId)(state).pageNo;
    return (0, _assign3.default)({}, config, { computed: computed, currentPageNo: currentPageNo });
};
let BookPages = class BookPages extends _react.Component {
    constructor(props) {
        super(props);
    }
    // 写成 decorator 的形式？
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
    }
    render() {
        var _props = this.props;
        const pages = _props.pages,
              fluid = _props.fluid,
              computed = _props.computed,
              theme = _props.theme,
              isScrollMode = _props.isScrollMode,
              pageHeight = _props.pageHeight,
              isCalcMode = _props.isCalcMode,
              currentPageNo = _props.currentPageNo;

        const totalHeight = computed.length * pageHeight;
        const className = (0, _classnames2.default)({
            'pages': !fluid,
            'pages--fluid': fluid,
            [theme && theme.toLocaleLowerCase()]: Boolean(theme)
        });
        const ulHeight = isCalcMode ? 'auto' : isScrollMode ? totalHeight : pageHeight;
        const ulStyle = { height: ulHeight };
        return _react2.default.createElement("ul", { styleName: className, style: ulStyle }, pages.map((page, index) => {
            const active = page.meta && page.meta.pageNo === currentPageNo;
            return _react2.default.createElement(_BookPage2.default, { fluid: fluid, page: page, pageHeight: pageHeight, key: index, active: active });
        }));
    }
};
BookPages = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookPages);
exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(BookPages);

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _forEach2 = __webpack_require__(417);

var _forEach3 = _interopRequireDefault(_forEach2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _marked = __webpack_require__(420);

var _marked2 = _interopRequireDefault(_marked);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactMarkdown = __webpack_require__(421);
let Markdown = class Markdown extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    renderSafely(className) {
        var _props = this.props;
        const input = _props.input,
              renderers = _props.renderers;

        return _react2.default.createElement(ReactMarkdown, { className: className, source: input, renderers: renderers || {}, escapeHtml: false, skipHtml: false });
    }
    renderUnSafely(className) {
        var _props2 = this.props;
        const input = _props2.input,
              markedRenderers = _props2.markedRenderers;

        let renderer = new _marked2.default.Renderer();
        if (markedRenderers) {
            (0, _forEach3.default)(markedRenderers, (val, key) => {
                if (key !== 'line') {
                    renderer[key] = val;
                }
            });
        }
        let html = (0, _marked2.default)(input, {
            gfm: false,
            breaks: true,
            renderer: renderer
        });
        if (markedRenderers && markedRenderers.line) {
            html = Array.prototype.filter.call((0, _jquery2.default)(html), ele => {
                // 移除元素间的回车及字符串
                return ele.nodeType !== 3;
            }).map(ele => {
                return markedRenderers.line(ele);
            }).join('');
        }
        return _react2.default.createElement("div", { className: className, dangerouslySetInnerHTML: { __html: html } });
    }
    render() {
        var _props3 = this.props;
        const safe = _props3.safe,
              className = _props3.className;

        return safe ? this.renderSafely(className) : this.renderUnSafely(className);
    }
};

Markdown['defaultProps'] = {
    safe: true
};
exports.default = Markdown;

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

exports.default = _Markdown2.default;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(93);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = __webpack_require__(400);

exports.default = props => {
    return _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, { component: "div", transitionName: styles, transitionEnterTimeout: 300, transitionLeaveTimeout: 300 }, props.children);
};

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

exports.default = _Slide2.default;

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slide = exports.Fade = undefined;

var _Fade = __webpack_require__(88);

var _Fade2 = _interopRequireDefault(_Fade);

var _Slide = __webpack_require__(363);

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Fade = _Fade2.default;
exports.Slide = _Slide2.default;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BookPages = __webpack_require__(355);

var _BookPages2 = _interopRequireDefault(_BookPages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BookChapter = (_ref) => {
    let id = _ref.id,
        markdown = _ref.markdown;

    return _react2.default.createElement("div", { id: id }, _react2.default.createElement(_BookPages2.default, { pages: [{
            nodes: [markdown]
        }] }));
};
let BookChapters = class BookChapters extends _react.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
    }
    triggerUpdate() {
        const onRawDataMount = this.props.onRawDataMount;

        if (onRawDataMount) {
            onRawDataMount(this.chapters);
        }
    }
    componentDidUpdate() {
        this.triggerUpdate();
    }
    componentDidMount() {
        this.triggerUpdate();
    }
    render() {
        const bookFlesh = this.props.bookFlesh;

        return _react2.default.createElement("div", { ref: _ref2 => this.chapters = _ref2 }, (bookFlesh || []).map(item => {
            return _react2.default.createElement(BookChapter, { id: item.id, markdown: item.markdown, key: item.id });
        }));
    }
};
exports.default = BookChapters;

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BookPages = __webpack_require__(355);

var _BookPages2 = _interopRequireDefault(_BookPages);

var _ViewerScrollbar = __webpack_require__(380);

var _ViewerScrollbar2 = _interopRequireDefault(_ViewerScrollbar);

var _redux = __webpack_require__(17);

var _reactRedux = __webpack_require__(20);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _NavArrow = __webpack_require__(375);

var _NavArrow2 = _interopRequireDefault(_NavArrow);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _BookContainer = __webpack_require__(407);

var _BookContainer2 = _interopRequireDefault(_BookContainer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const mapStateToProps = state => {
    var _selectors$viewer$con = selectors.viewer.config(state);

    const bookId = _selectors$viewer$con.bookId,
          theme = _selectors$viewer$con.theme,
          isScrollMode = _selectors$viewer$con.isScrollMode,
          isCalcMode = _selectors$viewer$con.isCalcMode;

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);

    const percentage = _selectors$viewer$pro.percentage,
          pageNo = _selectors$viewer$pro.pageNo;

    var _selectors$viewer$pro2 = selectors.viewer.progressComponent(state);

    const showPageInfo = _selectors$viewer$pro2.show;

    return {
        showPageInfo: showPageInfo,
        percentage: percentage,
        pageNo: pageNo,
        theme: theme,
        isScrollMode: isScrollMode,
        isCalcMode: isCalcMode
    };
};
let BookContainer = class BookContainer extends _react.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleScrollLazily = (0, _debounce3.default)(this.handleScroll, 200, {
            maxWait: 1000
        });
    }
    handleScroll() {
        var _props = this.props;
        const allPages = _props.allPages,
              pageHeight = _props.pageHeight,
              isScrollMode = _props.isScrollMode;

        const pageCount = allPages.length;
        const totalHeight = pageCount * pageHeight;
        const scrollTop = document.body.scrollTop;
        if (isScrollMode) {
            this.props.actions.updateBookProgress(scrollTop / totalHeight);
        }
    }
    handleForward() {
        var _props2 = this.props;
        const allPages = _props2.allPages,
              pageNo = _props2.pageNo;

        this.props.actions.viewerJumpTo(pageNo / allPages.length);
        document.body.scrollTop = 0;
    }
    handlebackward() {
        var _props3 = this.props;
        const allPages = _props3.allPages,
              pageNo = _props3.pageNo;

        this.props.actions.viewerJumpTo((pageNo - 2) / allPages.length);
        document.body.scrollTop = 0;
    }
    addEventListeners() {
        window.addEventListener('scroll', this.handleScrollLazily);
    }
    removeEventListeners() {
        window.removeEventListener('scroll', this.handleScrollLazily);
    }
    componentDidMount() {
        this.addEventListeners();
    }
    componentWillUnmount() {
        this.removeEventListeners();
    }
    render() {
        var _props4 = this.props;
        const allPages = _props4.allPages,
              pageHeight = _props4.pageHeight,
              showPageInfo = _props4.showPageInfo,
              pageLimit = _props4.pageLimit,
              pageNo = _props4.pageNo,
              theme = _props4.theme,
              isScrollMode = _props4.isScrollMode,
              isCalcMode = _props4.isCalcMode;

        let startPageIndex;
        startPageIndex = pageNo - Math.ceil(pageLimit / 2);
        startPageIndex = startPageIndex < 0 ? 0 : startPageIndex;
        const endPageIndex = startPageIndex + pageLimit;
        const divHeight = isCalcMode ? 'auto' : isScrollMode ? allPages.length * pageHeight : pageHeight;
        return _react2.default.createElement("div", { styleName: theme.toLowerCase(), style: { height: divHeight } }, _react2.default.createElement(_BookPages2.default, { pages: (0, _slice3.default)(allPages, startPageIndex, endPageIndex) }), _react2.default.createElement(_NavArrow2.default, { forward: this.handleForward.bind(this), backward: this.handlebackward.bind(this), show: !isScrollMode }), _react2.default.createElement(_ViewerScrollbar2.default, { visible: showPageInfo, current: pageNo, total: allPages.length }));
    }
};
BookContainer = __decorate([(0, _reactCssModules2.default)(_BookContainer2.default)], BookContainer);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(BookContainer);

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Markdown = __webpack_require__(361);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(92);
const renderers = {
    paragraph: function paragraph(text) {
        return `<p class="${styles['gb-line']}">${text}</p>`;
    },
    link: function link(href, title, text) {
        if (href.indexOf('http://') === -1) {
            return `<a href="${href}" class="js-book-nav">${text}</a>`;
        }
        return `<a href="${href}" target="_blank">${text}</a>`;
    },
    line: function line(ele) {
        const tagName = ele.tagName;
        if (tagName !== 'P') {
            return `<div class="${styles['gb-line']}">${ele.outerHTML || ele.innerHTML || ele.textContent}</div>`;
        }
        return ele.outerHTML;
    }
};
const mapStateToProps = (state, ownProps) => {
    var _selectors$viewer$con = selectors.viewer.config(state);

    const fontSize = _selectors$viewer$con.fontSize,
          theme = _selectors$viewer$con.theme,
          isScrollMode = _selectors$viewer$con.isScrollMode;

    return { fontSize: fontSize, theme: theme, isScrollMode: isScrollMode };
};
let BookPage = class BookPage extends _react.Component {
    render() {
        var _props = this.props,
            _props$page = _props.page;
        const nodes = _props$page.nodes,
              meta = _props$page.meta,
              pageHeight = _props.pageHeight,
              fluid = _props.fluid,
              fontSize = _props.fontSize,
              theme = _props.theme,
              isScrollMode = _props.isScrollMode,
              active = _props.active;

        const mdInput = nodes.join('\n\n');
        const contentStyle = { fontSize: fontSize };
        let liStyle = {};
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
        const className = (0, _classnames2.default)({
            'page': !fluid,
            'page--fluid': fluid,
            [theme && theme.toLocaleLowerCase()]: Boolean(theme)
        });
        return _react2.default.createElement("li", { styleName: className, style: liStyle }, _react2.default.createElement("div", { style: contentStyle, styleName: "content", ref: _ref => {
                this.bookPageDom = _ref;
            } }, _react2.default.createElement(_Markdown2.default, { className: "lines", input: mdInput, safe: false, markedRenderers: renderers })), meta && _react2.default.createElement("div", { styleName: "page-no" }, meta.pageNo));
    }
};
BookPage = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookPage);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(BookPage);

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(409);
let NavArrow = class NavArrow extends _react.Component {
    constructor(props) {
        super(props);
    }
    handleForwardClick() {
        this.props.forward();
    }
    handleBackwardClick() {
        this.props.backward();
    }
    render() {
        return this.props.show && _react2.default.createElement("div", { styleName: "navs" }, _react2.default.createElement("div", { styleName: "nav-left", onClick: this.handleBackwardClick.bind(this) }, "-"), _react2.default.createElement("div", { styleName: "nav-right", onClick: this.handleForwardClick.bind(this) }, "+"));
    }
};
NavArrow = __decorate([(0, _reactCssModules2.default)(styles)], NavArrow);
exports.default = NavArrow;

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqualWith2 = __webpack_require__(418);

var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

var _isEqual2 = __webpack_require__(48);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _debounce2 = __webpack_require__(415);

var _debounce3 = _interopRequireDefault(_debounce2);

var _get2 = __webpack_require__(14);

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

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

const PAGE_LIMIT = 5;
const mapStateToProps = (state, ownProps) => {
    const config = selectors.viewer.config(state);
    const bookId = config.bookId;
    const book = selectors.common.entity('books', bookId)(state);
    const bookContent = selectors.common.entity('bookContents', bookId)(state);
    const bookProgress = selectors.common.entity('bookProgress', bookId)(state);
    const cloudProgress = (0, _get3.default)(bookProgress, 'percentage', 0);
    const computedPages = selectors.viewer.computed(bookId)(state);

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);

    const viewerPercentage = _selectors$viewer$pro.percentage,
          isFetching = _selectors$viewer$pro.isFetching;

    var _selectors$viewer$pan = selectors.viewer.panel(state);

    const showPanel = _selectors$viewer$pan.show;

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
let ViewerContainer = class ViewerContainer extends _react.Component {
    constructor(props) {
        super(props);
        this.resizeLazily = (0, _debounce3.default)(this.handleResize, 500, {
            maxWait: 1000
        });
        this.handleViewerClick = this.handleViewerClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.resizeLazily = this.resizeLazily.bind(this);
        this.handleRawDataMount = this.handleRawDataMount.bind(this);
        this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this);
    }
    handleRawDataMount(ele) {
        this.props.actions.calcBook(this.props.bookId, ele);
    }
    handleViewerClick() {
        const isTouchMode = this.props.config.isTouchMode;

        if (isTouchMode) {
            this.props.actions.toggleViewerPanel();
            this.props.actions.toggleViewerPageProgressInfo();
        }
    }
    handleResize() {
        this.props.actions.initializeViewerConfig(this.props.bookId, {
            isCalcMode: false
        });
    }
    handelViewerMouseMove(event) {
        let dToScreenRight = _utils2.default.getScreenInfo().view.width - event.pageX;
        this.setState({
            showPageInfo: dToScreenRight < 100
        });
    }
    reinitializeViewer() {
        const bookId = this.props.bookId;

        this.props.actions.configViewer(bookId, {
            isCalcMode: true
        });
        this.setState({
            showPageInfo: false
        });
        this.props.actions.toggleViewerPanel(false);
        this.props.actions.toggleViewerPageProgressInfo(false);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(0, _isEqual3.default)(this.state, nextState) || !(0, _isEqual3.default)(this.props, nextProps);
    }
    componentDidUpdate(prevProps, prevState) {
        const viewChanged = !(0, _isEqualWith3.default)(this.props.config, prevProps.config, (valA, valB, key) => {
            if (key === 'isTouchMode' || key === 'isCalcMode' || key === 'isScrollMode' || key === 'theme') {
                return true;
            }
        });
        if (viewChanged) {
            this.reinitializeViewer();
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.resizeLazily);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeLazily);
    }
    renderBook() {
        var _props = this.props;
        const bookContent = _props.bookContent,
              computedPages = _props.computedPages;
        var _props$config = _props.config;
        const isCalcMode = _props$config.isCalcMode,
              pageHeight = _props$config.pageHeight;

        if (!bookContent.flesh) {
            return _react2.default.createElement(_Loading2.default, { text: "书籍获取中", center: true });
        }
        if (isCalcMode) {
            return _react2.default.createElement("div", null, _react2.default.createElement(_Loading2.default, { text: "书籍排版中", center: true }), _react2.default.createElement(_BookChapters2.default, { bookFlesh: bookContent.flesh, onRawDataMount: this.handleRawDataMount }));
        } else if (computedPages.length !== 0) {
            return _react2.default.createElement("div", { onClick: this.handleViewerClick }, _react2.default.createElement(_BookContainer2.default, { allPages: computedPages, pageHeight: pageHeight, pageLimit: PAGE_LIMIT }));
        } else {
            return _react2.default.createElement(_Loading2.default, { text: "准备中", center: true });
        }
    }
    render() {
        return _react2.default.createElement("div", { onMouseMove: this.handelViewerMouseMove }, _react2.default.createElement(_ViewerPanel2.default, null), this.renderBook());
    }
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(ViewerContainer);

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(17);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _preventScroll = __webpack_require__(381);

var _preventScroll2 = _interopRequireDefault(_preventScroll);

var _Viewer = __webpack_require__(91);

var viewerUtils = _interopRequireWildcard(_Viewer);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

var _ViewerNav = __webpack_require__(410);

var _ViewerNav2 = _interopRequireDefault(_ViewerNav);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const JS_NAV_HOOK = 'a.js-book-nav';
const mapStateToProps = (state, ownProps) => {
    var _selectors$viewer$con = selectors.viewer.config(state);

    const bookId = _selectors$viewer$con.bookId;

    const nav = selectors.viewer.navData(bookId)(state);

    var _selectors$viewer$pro = selectors.viewer.progress(bookId)(state);

    const viewerPercentage = _selectors$viewer$pro.percentage;

    const computedPages = selectors.viewer.computed(bookId)(state);
    return { nav: nav, viewerPercentage: viewerPercentage, computedPages: computedPages };
};
let ViewerNav = class ViewerNav extends _react.Component {
    constructor(props) {
        super(props);
        this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    }
    handleNavLinkClick(e) {
        e.preventDefault();
        var _props = this.props;
        const computedPages = _props.computedPages,
              viewerPercentage = _props.viewerPercentage;

        const href = (0, _jquery2.default)(e.target).attr('href');
        try {
            const pageNo = viewerUtils.resolveBookLocation(href, computedPages);
            const percentage = (pageNo - 1) / computedPages.length;
            this.props.actions.viewerJumpTo(percentage);
        } catch (error) {
            this.props.actions.sendNotification(error.message, 'error');
        }
    }
    componentDidMount() {
        this.$body = (0, _jquery2.default)('body');
        // TODO: js hook 常量
        _preventScroll2.default.init('.js-nav-scroll');
        this.$body.on('click', JS_NAV_HOOK, this.handleNavLinkClick);
    }
    componentWillUnmount() {
        _preventScroll2.default.destroy('.js-nav-scroll');
        this.$body.off('click', JS_NAV_HOOK, this.handleNavLinkClick);
    }
    renderLink(ref, hash, label) {
        if (hash) {
            return _react2.default.createElement("a", { className: "js-book-nav", href: `#${ref}$${hash}` }, label);
        }
        return _react2.default.createElement("a", { className: "js-book-nav", href: `#${ref}` }, label);
    }
    renderNav(navList) {
        return _react2.default.createElement("ul", null, navList.map((item, index) => {
            if (item.children) {
                return _react2.default.createElement("li", { key: index }, this.renderLink(item.ref, item.hash, item.label), this.renderNav(item.children));
            }
            return _react2.default.createElement("li", { key: index }, this.renderLink(item.ref, item.hash, item.label));
        }));
    }
    render() {
        const nav = this.props.nav;

        return _react2.default.createElement("div", { className: "js-nav-scroll", styleName: "viewer-nav" }, this.renderNav(nav));
    }
};
ViewerNav = __decorate([(0, _reactCssModules2.default)(_ViewerNav2.default)], ViewerNav);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(ViewerNav);

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _isDescendant = __webpack_require__(31);

var _isDescendant2 = _interopRequireDefault(_isDescendant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(411);
const mapStateToProps = (state, ownProps) => {
    const config = selectors.viewer.config(state);
    const bookId = config.bookId;

    var _selectors$viewer$pan = selectors.viewer.panel(state);

    const showPanel = _selectors$viewer$pan.show;

    var _selectors$viewer$pre = selectors.viewer.preference(state);

    const showPreference = _selectors$viewer$pre.show;

    var _selectors$viewer$nav = selectors.viewer.navigation(state);

    const showNavigation = _selectors$viewer$nav.show;

    var _selectors$common$ent = selectors.common.entity('books', bookId)(state);

    const title = _selectors$common$ent.title;

    return { config: config, showPanel: showPanel, showPreference: showPreference, title: title, showNavigation: showNavigation };
};
let ViewerPanel = class ViewerPanel extends _react.Component {
    constructor(props) {
        super(props);
        this.handelViewerMouseMove = this.handelViewerMouseMove.bind(this);
        this.handleGlobalClick = this.handleGlobalClick.bind(this);
    }
    handleGlobalClick(e) {
        var _props = this.props;
        const showPreference = _props.showPreference,
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
    handelViewerMouseMove(event) {
        var _props2 = this.props,
            _props2$config = _props2.config;
        const isCalcMode = _props2$config.isCalcMode,
              isTouchMode = _props2$config.isTouchMode,
              showPanel = _props2.showPanel;

        if (!isCalcMode && !isTouchMode) {
            let y = event.pageY - document.body.scrollTop;
            const show = y < 90;
            if (showPanel !== show) {
                this.props.actions.toggleViewerPanel(show);
            }
        }
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.handelViewerMouseMove);
        window.addEventListener('click', this.handleGlobalClick);
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handelViewerMouseMove);
        window.removeEventListener('click', this.handleGlobalClick);
    }
    render() {
        var _props3 = this.props;
        const title = _props3.title,
              showPanel = _props3.showPanel,
              showPreference = _props3.showPreference,
              showNavigation = _props3.showNavigation;

        return _react2.default.createElement(_animations.Slide, null,
        /*(showPanel || showPreference || showNavigation) && (*/
        showPanel && _react2.default.createElement("div", { styleName: "viewer-panel" }, _react2.default.createElement("div", { styleName: "container" }, _react2.default.createElement("div", { styleName: "back" }, _react2.default.createElement(_reactRouter.Link, { to: "/" }, _react2.default.createElement(_Icon2.default, { name: "back" }), _react2.default.createElement("span", null, "\u8FD4\u56DE"))), _react2.default.createElement("div", { ref: _ref => {
                this.nav = _ref;
            }, styleName: "contents" }, _react2.default.createElement("span", null, "\u76EE\u5F55"), _react2.default.createElement(_animations.Fade, null, showNavigation && _react2.default.createElement(_ViewerNav2.default, null))), _react2.default.createElement("span", { styleName: "title" }, title), _react2.default.createElement("div", { ref: _ref2 => {
                this.pref = _ref2;
            }, styleName: "preference" }, _react2.default.createElement(_Icon2.default, { name: "preference" }), _react2.default.createElement(_animations.Fade, null, showPreference && _react2.default.createElement(_ViewerPreference2.default, null))))));
    }
};
ViewerPanel = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPanel);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(ViewerPanel);

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys2 = __webpack_require__(85);

var _keys3 = _interopRequireDefault(_keys2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Switcher = __webpack_require__(339);

var _Switcher2 = _interopRequireDefault(_Switcher);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactRedux = __webpack_require__(20);

var _redux = __webpack_require__(17);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _classnames = __webpack_require__(21);

var _classnames2 = _interopRequireDefault(_classnames);

var _viewerDefs = __webpack_require__(90);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(412);
const MAX_FONT_SIZE = 20;
const MIN_FONT_SIZE = 12;
const mapStateToProps = (state, ownProps) => {
    var _selectors$viewer$con = selectors.viewer.config(state);

    const fontSize = _selectors$viewer$con.fontSize,
          isScrollMode = _selectors$viewer$con.isScrollMode,
          theme = _selectors$viewer$con.theme;

    return { fontSize: fontSize, isScrollMode: isScrollMode, theme: theme };
};
let ViewerPreference = class ViewerPreference extends _react.Component {
    constructor(props) {
        super(props);
    }
    handleDecFontSizeClick() {
        const fontSize = this.props.fontSize;

        var _getBtnStatus = this.getBtnStatus();

        const isDecDisabled = _getBtnStatus.isDecDisabled;

        if (!isDecDisabled) {
            this.props.actions.changeViewerFontSize(fontSize - 1);
        }
    }
    handleIncFontSizeClick() {
        const fontSize = this.props.fontSize;

        var _getBtnStatus2 = this.getBtnStatus();

        const isIncDisabled = _getBtnStatus2.isIncDisabled;

        if (!isIncDisabled) {
            this.props.actions.changeViewerFontSize(fontSize + 1);
        }
    }
    handleChangeThemeClick(key) {
        this.props.actions.changeViewerTheme(key);
    }
    handleToggleScrollModeClick(val) {
        this.props.actions.toggleViewerScrollMode(val);
    }
    getBtnStatus() {
        const fontSize = this.props.fontSize;

        const isDecDisabled = fontSize <= MIN_FONT_SIZE;
        const isIncDisabled = fontSize >= MAX_FONT_SIZE;
        return { isDecDisabled: isDecDisabled, isIncDisabled: isIncDisabled };
    }
    render() {
        var _getBtnStatus3 = this.getBtnStatus();

        const isDecDisabled = _getBtnStatus3.isDecDisabled,
              isIncDisabled = _getBtnStatus3.isIncDisabled;
        var _props = this.props;
        const isScrollMode = _props.isScrollMode,
              theme = _props.theme;

        const btnDecClass = (0, _classnames2.default)({
            'btn': !isDecDisabled,
            'btn--disabled': isDecDisabled
        });
        const btnIncClass = (0, _classnames2.default)({
            'btn': !isIncDisabled,
            'btn--disabled': isIncDisabled
        });
        return _react2.default.createElement("div", { styleName: "viewer-preference" }, _react2.default.createElement("ul", { className: "options" }, _react2.default.createElement("li", { styleName: "option-font-size" }, _react2.default.createElement("span", { styleName: btnDecClass, onClick: this.handleDecFontSizeClick.bind(this) }, "A-"), _react2.default.createElement("span", { styleName: btnIncClass, onClick: this.handleIncFontSizeClick.bind(this) }, "A+")), _react2.default.createElement("li", { styleName: "option-scroll" }, _react2.default.createElement("span", { className: "label" }, "\u6EDA\u52A8\u6A21\u5F0F"), _react2.default.createElement(_Switcher2.default, { value: isScrollMode, onChange: this.handleToggleScrollModeClick.bind(this) })), _react2.default.createElement("li", { styleName: "option-theme" }, (0, _keys3.default)(_viewerDefs.THEMES).map((key, index) => {
            const className = key.toLowerCase() + (theme === key ? '--active' : '');
            console.log(className, theme, key);
            return _react2.default.createElement("span", { key: index, className: styles[className], onClick: this.handleChangeThemeClick.bind(this, key) }, key);
        }))));
    }
};
ViewerPreference = __decorate([(0, _reactCssModules2.default)(styles)], ViewerPreference);
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
}))(ViewerPreference);

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(6);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const styles = __webpack_require__(413);
let ViewerScrollbar = class ViewerScrollbar extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props;
        const current = _props.current,
              total = _props.total;

        const percentage = (current / total * 100).toFixed(2) + '%';
        return this.props.visible && _react2.default.createElement("div", Object.assign({}, { styleName: 'loc-info' }), _react2.default.createElement("div", null, _react2.default.createElement("strong", null, current), "/", total), _react2.default.createElement("div", { styleName: "sub-info" }, percentage));
    }
};
ViewerScrollbar = __decorate([(0, _reactCssModules2.default)(styles)], ViewerScrollbar);
exports.default = ViewerScrollbar;

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
    const $this = (0, _jquery2.default)(this);
    const scrollTop = this.scrollTop;
    const scrollHeight = this.scrollHeight;
    const height = $this.innerHeight();
    const delta = ev.type === 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta;
    const up = delta > 0;
    const prevent = () => {
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
exports.default = {
    init: selector => {
        (0, _jquery2.default)(document).on('DOMMouseScroll mousewheel', selector, scrollHandler);
    },
    destroy: selector => {
        (0, _jquery2.default)(document).off('DOMMouseScroll mousewheel', selector, scrollHandler);
    }
};

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