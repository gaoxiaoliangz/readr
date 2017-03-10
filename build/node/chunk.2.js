exports.ids = [2];
exports.modules = {

/***/ 297:
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

var _Button = __webpack_require__(87);

var _Button2 = _interopRequireDefault(_Button);

var _BookListSection = __webpack_require__(328);

var _BookListSection2 = _interopRequireDefault(_BookListSection);

var _actions = __webpack_require__(15);

var _Container = __webpack_require__(30);

var _Container2 = _interopRequireDefault(_Container);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

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

var styles = __webpack_require__(405);
var Browse = function (_Component) {
    _inherits(Browse, _Component);

    function Browse(props) {
        _classCallCheck(this, Browse);

        return _possibleConstructorReturn(this, (Browse.__proto__ || Object.getPrototypeOf(Browse)).call(this, props));
    }

    _createClass(Browse, [{
        key: "loadMore",
        value: function loadMore() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.props.loadBooks({ page: page }, 'browse');
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.loadMore();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                nextPage = _props.nextPage,
                isBooksFetching = _props.isBooksFetching;

            return _react2.default.createElement(_Container2.default, { className: "archive" }, _react2.default.createElement(_BookListSection2.default, { title: "所有书籍", bookEntities: this.props.newestBooks, isFetching: isBooksFetching }), nextPage !== 0 && _react2.default.createElement(_Button2.default, { onClick: function onClick() {
                    _this2.loadMore(nextPage);
                }, styleName: "btn-load-more", width: 200, color: "white" }, isBooksFetching ? '加载中 ...' : '加载更多'));
        }
    }], [{
        key: "fetchData",
        value: function fetchData(_ref) {
            var store = _ref.store;

            return store.dispatch((0, _actions.loadBooks)());
        }
    }]);

    return Browse;
}(_react.Component);
Browse = __decorate([(0, _reactCssModules2.default)(styles)], Browse);
function mapStateToProps(state, ownProps) {
    return {
        newestBooks: selectors.books('browse')(state),
        isBooksFetching: selectors.common.isPaginationFetching('books', 'browse')(state),
        nextPage: selectors.common.nextPage('books', 'browse')(state)
    };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, fetchCollections: _actions.fetchCollections })(Browse);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/routes/Browse/Browse.tsx");

    __REACT_HOT_LOADER__.register(Browse, "Browse", "/Users/liang/Projects/readr/src/isomorphic/routes/Browse/Browse.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/isomorphic/routes/Browse/Browse.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/routes/Browse/Browse.tsx");
}();

;

/***/ }),

/***/ 310:
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

var _Loading = __webpack_require__(313);

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

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/elements/Loading/Loading.tsx");

    __REACT_HOT_LOADER__.register(Loading, "Loading", "/Users/liang/Projects/readr/src/isomorphic/elements/Loading/Loading.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/elements/Loading/Loading.tsx");
}();

;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loading = __webpack_require__(310);

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Loading2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/elements/Loading/index.ts');
}();

;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".text-loading_3efqh {\n  text-align: center;\n  margin: 50px 0;\n  font-size: 20px;\n  font-weight: normal;\n  color: #999; }\n\n.text-loading_3efqh {\n  margin: 30px 0;\n  display: inline-block; }\n\n.loading-wrap_htyYz {\n  text-align: left; }\n\n.loading-wrap--center_3PEIh {\n  text-align: center; }\n", ""]);

// exports
exports.locals = {
	"text-loading": "text-loading_3efqh",
	"loading-wrap": "loading-wrap_htyYz",
	"loading-wrap--center": "loading-wrap--center_3PEIh"
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(312);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Loading.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Loading.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 314:
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

var _BookInfoPopup = __webpack_require__(317);

var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Book = __webpack_require__(324);

var _Book2 = _interopRequireDefault(_Book);

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

var Book = function (_Component) {
    _inherits(Book, _Component);

    function Book(props) {
        _classCallCheck(this, Book);

        var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, props));

        _this.state = {
            showPopup: false
        };
        _this.showPopup = _this.showPopup.bind(_this);
        _this.hidePopup = _this.hidePopup.bind(_this);
        return _this;
    }

    _createClass(Book, [{
        key: "showPopup",
        value: function showPopup() {
            this.setState({
                showPopup: true
            });
        }
    }, {
        key: "hidePopup",
        value: function hidePopup() {
            this.setState({
                showPopup: false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                showDesc = _props.showDesc,
                description = _props.description,
                cover = _props.cover;

            return _react2.default.createElement("div", { onMouseEnter: this.showPopup, onMouseLeave: this.hidePopup, styleName: "book--card" }, _react2.default.createElement(_reactRouter.Link, { to: '/book/' + this.props.id }, cover && _react2.default.createElement("div", { styleName: "book-cover" }, _react2.default.createElement("img", { src: this.props.cover })), _react2.default.createElement("div", { styleName: "book-meta" }, _react2.default.createElement("span", { title: this.props.title, styleName: "book-name" }, this.props.title || '无标题'), _react2.default.createElement("span", { styleName: "book-author" }, this.props.authors || '作者不详'), showDesc && _react2.default.createElement("span", { styleName: "book-desc" }, description || '空'))), this.state.showPopup && !this.props.disablePopup && _react2.default.createElement(_BookInfoPopup2.default, { bookId: this.props.id, title: this.props.title, author: this.props.authors, description: this.props.description }));
        }
    }]);

    return Book;
}(_react.Component);
Book = __decorate([(0, _reactCssModules2.default)(_Book2.default, {
    allowMultiple: true
})], Book);
var _default = Book;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/Book/Book.tsx");

    __REACT_HOT_LOADER__.register(Book, "Book", "/Users/liang/Projects/readr/src/isomorphic/components/Book/Book.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/Book/Book.tsx");
}();

;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Book = __webpack_require__(314);

var _Book2 = _interopRequireDefault(_Book);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Book2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/Book/index.ts');
}();

;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _form = __webpack_require__(83);

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

var styles = __webpack_require__(325);
var BookInfoPopup = function (_Component) {
    _inherits(BookInfoPopup, _Component);

    function BookInfoPopup(props) {
        _classCallCheck(this, BookInfoPopup);

        return _possibleConstructorReturn(this, (BookInfoPopup.__proto__ || Object.getPrototypeOf(BookInfoPopup)).call(this, props));
    }

    _createClass(BookInfoPopup, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                author = _props.author,
                title = _props.title,
                description = _props.description,
                bookId = _props.bookId;

            return _react2.default.createElement("div", { styleName: "popup" }, _react2.default.createElement("div", { styleName: "header" }, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement("p", { styleName: "author" }, author), _react2.default.createElement(_form.Button, { color: "blue", to: '/viewer/book/' + bookId }, "\u9605\u8BFB")), _react2.default.createElement("div", { styleName: "description" }, _react2.default.createElement("p", null, description)));
        }
    }]);

    return BookInfoPopup;
}(_react.Component);
BookInfoPopup = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookInfoPopup);
var _default = BookInfoPopup;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/BookInfoPopup/BookInfoPopup.tsx");

    __REACT_HOT_LOADER__.register(BookInfoPopup, "BookInfoPopup", "/Users/liang/Projects/readr/src/isomorphic/components/BookInfoPopup/BookInfoPopup.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/BookInfoPopup/BookInfoPopup.tsx");
}();

;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookInfoPopup = __webpack_require__(316);

var _BookInfoPopup2 = _interopRequireDefault(_BookInfoPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _BookInfoPopup2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/BookInfoPopup/index.ts');
}();

;

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Book = __webpack_require__(315);

var _Book2 = _interopRequireDefault(_Book);

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

var styles = __webpack_require__(326);
var BookList = function (_Component) {
    _inherits(BookList, _Component);

    function BookList() {
        _classCallCheck(this, BookList);

        return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
    }

    _createClass(BookList, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("ul", { styleName: "book-list", className: "clearfix" }, this.props.bookEntities && this.props.bookEntities.length !== 0 ? this.props.bookEntities.map(function (book, index) {
                var title = book.title,
                    authors = book.authors,
                    description = book.description,
                    cover = book.cover;

                return _react2.default.createElement("li", { key: index }, _react2.default.createElement(_Book2.default, { id: book.id, title: title || '无标题', authors: authors && authors.map(function (author) {
                        return author.name;
                    }).join(', ') || '未知作者', description: description, cover: cover, disablePopup: true }));
            }) : _react2.default.createElement("li", null, "\u6682\u65E0\u8BB0\u5F55"));
        }
    }]);

    return BookList;
}(_react.Component);
BookList = __decorate([(0, _reactCssModules2.default)(styles)], BookList);
var _default = BookList;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/BookList/BookList.tsx");

    __REACT_HOT_LOADER__.register(BookList, "BookList", "/Users/liang/Projects/readr/src/isomorphic/components/BookList/BookList.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/BookList/BookList.tsx");
}();

;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookList = __webpack_require__(318);

var _BookList2 = _interopRequireDefault(_BookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _BookList2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/BookList/index.ts');
}();

;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".meta-item_27HBb {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.book_3oO5g {\n  float: left;\n  transition: all 0.2s ease 0s;\n  position: relative;\n  width: 150px;\n  padding: 0 10px; }\n  .book_3oO5g a {\n    display: block;\n    padding-top: 10px;\n    position: relative; }\n    .book_3oO5g a:hover img {\n      opacity: .96; }\n    .book_3oO5g a:active img {\n      opacity: .8; }\n\n.book-meta_3NZ17 {\n  background: transparent; }\n\n.meta-item_27HBb {\n  width: 100%;\n  text-align: left;\n  display: block;\n  line-height: 1.5;\n  margin-left: 17px;\n  width: 134px; }\n\n.book-name_2wUnN {\n  font-size: 1.3rem;\n  color: #333; }\n\n.book-author_10qBa {\n  color: #999; }\n\n.book-cover_2-mLB {\n  position: relative;\n  margin: 0;\n  width: 134px;\n  height: 184px;\n  top: 0;\n  background: url(" + __webpack_require__(323) + ") no-repeat top;\n  transition: all 0.2s ease 0s;\n  position: relative; }\n  .book-cover_2-mLB img {\n    width: 100px;\n    height: 150px;\n    display: block;\n    position: absolute;\n    border: none;\n    left: 17px;\n    top: 7px;\n    border-radius: 4px; }\n  .book-cover_2-mLB:hover {\n    top: -7px; }\n\n.book-desc_1Jzf7 {\n  color: #999; }\n\n.book--card_2kgeY {\n  width: auto;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  padding: 10px;\n  float: none;\n  height: 100px; }\n  .book--card_2kgeY a {\n    padding: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 1; }\n    .book--card_2kgeY a:hover img {\n      opacity: 1; }\n    .book--card_2kgeY a:active img {\n      opacity: 1; }\n  .book--card_2kgeY .book-cover_2-mLB {\n    width: auto;\n    height: auto;\n    height: 72px;\n    background: none;\n    overflow: hidden;\n    float: left;\n    border-radius: 4px;\n    margin-right: 20px; }\n    .book--card_2kgeY .book-cover_2-mLB:hover {\n      top: 0; }\n    .book--card_2kgeY .book-cover_2-mLB img {\n      width: 50px;\n      height: auto;\n      position: relative;\n      top: 0;\n      left: 0; }\n  .book--card_2kgeY .book-meta_3NZ17 {\n    float: none; }\n  .book--card_2kgeY .meta-item_27HBb {\n    width: auto; }\n", ""]);

// exports
exports.locals = {
	"meta-item": "meta-item_27HBb",
	"book": "book_3oO5g",
	"book-meta": "book-meta_3NZ17",
	"book-name": "book-name_2wUnN meta-item_27HBb",
	"book-author": "book-author_10qBa meta-item_27HBb",
	"book-cover": "book-cover_2-mLB",
	"book-desc": "book-desc_1Jzf7",
	"book--card": "book--card_2kgeY book_3oO5g"
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".title_BVO7e {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.popup_MPCqr {\n  position: absolute;\n  z-index: 999;\n  left: 134px;\n  top: 0;\n  width: 300px;\n  background: #fff;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.16);\n  padding: 20px 20px 0;\n  border: 1px solid #ddd; }\n\n.header_1InIf {\n  margin-bottom: 20px; }\n\n.title_BVO7e {\n  margin: 30px 0 10px 0; }\n\n.author_28BiA {\n  font-size: 0.9rem;\n  margin: 0 0 2em 0; }\n\n.description_D9rVN {\n  line-height: 1.6;\n  padding: 10px 0;\n  border-top: 1px solid #ddd; }\n", ""]);

// exports
exports.locals = {
	"title": "title_BVO7e",
	"popup": "popup_MPCqr",
	"header": "header_1InIf",
	"author": "author_28BiA",
	"description": "description_D9rVN"
};

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".book-list_2s_Jl {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-left: -10px;\n  margin-right: -10px; }\n  .book-list_2s_Jl li {\n    float: left;\n    width: 50%;\n    padding: 10px;\n    box-sizing: border-box; }\n    @media (max-width: 540px) {\n      .book-list_2s_Jl li {\n        width: 100%; } }\n", ""]);

// exports
exports.locals = {
	"book-list": "book-list_2s_Jl"
};

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/shadow.471ea37f96.png";

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(320);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Book.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Book.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(321);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookInfoPopup.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(322);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookList.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookList.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 327:
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

var _BookList = __webpack_require__(319);

var _BookList2 = _interopRequireDefault(_BookList);

var _Loading = __webpack_require__(311);

var _Loading2 = _interopRequireDefault(_Loading);

var _reactCssModules = __webpack_require__(5);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Icon = __webpack_require__(29);

var _Icon2 = _interopRequireDefault(_Icon);

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

var styles = __webpack_require__(330);
var BookListSection = function (_Component) {
    _inherits(BookListSection, _Component);

    function BookListSection() {
        _classCallCheck(this, BookListSection);

        return _possibleConstructorReturn(this, (BookListSection.__proto__ || Object.getPrototypeOf(BookListSection)).apply(this, arguments));
    }

    _createClass(BookListSection, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isFetching = _props.isFetching,
                title = _props.title,
                moreLink = _props.moreLink,
                bookEntities = _props.bookEntities;

            return _react2.default.createElement("div", { styleName: "book-list-section" }, this.props.title && (moreLink ? _react2.default.createElement("h2", { styleName: "section-title" }, _react2.default.createElement(_reactRouter.Link, { to: moreLink }, title, _react2.default.createElement(_Icon2.default, { name: "arrowRight", size: 20 }))) : _react2.default.createElement("h2", { styleName: "section-title" }, title)), isFetching && bookEntities.length === 0 ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement(_BookList2.default, { bookEntities: bookEntities }));
        }
    }]);

    return BookListSection;
}(_react.Component);
BookListSection = __decorate([(0, _reactCssModules2.default)(styles, {
    allowMultiple: true
})], BookListSection);
var _default = BookListSection;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/isomorphic/components/BookListSection/BookListSection.tsx");

    __REACT_HOT_LOADER__.register(BookListSection, "BookListSection", "/Users/liang/Projects/readr/src/isomorphic/components/BookListSection/BookListSection.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/isomorphic/components/BookListSection/BookListSection.tsx");
}();

;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BookListSection = __webpack_require__(327);

var _BookListSection2 = _interopRequireDefault(_BookListSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _BookListSection2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/components/BookListSection/index.ts');
}();

;

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".section-title_2Kv3D {\n  margin: 35px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #333; }\n\n.book-list-section_2CfDe {\n  position: relative; }\n\n.more_mgQHg {\n  position: absolute;\n  right: 0;\n  top: 0;\n  line-height: 32px; }\n\n.section-title_2Kv3D {\n  margin-bottom: 10px; }\n  .section-title_2Kv3D a {\n    color: #333; }\n    .section-title_2Kv3D a:hover {\n      color: #666; }\n", ""]);

// exports
exports.locals = {
	"section-title": "section-title_2Kv3D",
	"book-list-section": "book-list-section_2CfDe",
	"more": "more_mgQHg"
};

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(329);
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookListSection.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./BookListSection.scss");

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
exports.push([module.i, ".btn-load-more_26sdQ {\n  margin: 20px auto;\n  display: block; }\n", ""]);

// exports
exports.locals = {
	"btn-load-more": "btn-load-more_26sdQ"
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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Browse.scss", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--3-1!../../../../node_modules/sass-loader/index.js!./Browse.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ })

};;
//# sourceMappingURL=chunk.2.js.map