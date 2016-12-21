exports.ids = [6];
exports.modules = {

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _actions = __webpack_require__(93);
	
	var _CollectionSection = __webpack_require__(295);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collections = function (_Component) {
	    _inherits(Collections, _Component);
	
	    function Collections(props) {
	        _classCallCheck(this, Collections);
	
	        return _possibleConstructorReturn(this, (Collections.__proto__ || Object.getPrototypeOf(Collections)).call(this, props));
	    }
	
	    _createClass(Collections, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.fetchCollections();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var newestCollections = this.props.newestCollections;
	
	            var list = newestCollections.map(function (item) {
	                return {
	                    name: item.name,
	                    id: item.id,
	                    bookCovers: item.items.map(function (book) {
	                        return book.cover;
	                    }),
	                    description: item.description
	                };
	            });
	            return _react2.default.createElement("div", { className: "page-collections" }, _react2.default.createElement("div", { style: { maxWidth: 800, margin: '0 auto' } }, _react2.default.createElement("h2", { className: "page-title" }, '\u5F80\u671F\u4E66\u5355')), _react2.default.createElement(_CollectionSection.CollectionList, { maxWidth: 800, style: "dark", list: list }));
	        }
	    }]);
	
	    return Collections;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        newestCollections: state.pagination.bookCollections.newest ? state.pagination.bookCollections.newest.ids.map(function (id) {
	            return state.entities.bookCollections[id];
	        }) : []
	    };
	}, { fetchCollections: _actions.fetchCollections })(Collections);

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CollectionSection = exports.CollectionList = exports.CollectionItem = undefined;
	
	var _CollectionSection = __webpack_require__(296);
	
	var _CollectionSection2 = _interopRequireDefault(_CollectionSection);
	
	var _CollectionItem = __webpack_require__(298);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _CollectionList = __webpack_require__(297);
	
	var _CollectionList2 = _interopRequireDefault(_CollectionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CollectionItem = _CollectionItem2.default;
	exports.CollectionList = _CollectionList2.default;
	exports.CollectionSection = _CollectionSection2.default;
	exports.default = _CollectionSection2.default;

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(63);
	
	var _layout = __webpack_require__(173);
	
	var _CollectionList = __webpack_require__(297);
	
	var _CollectionList2 = _interopRequireDefault(_CollectionList);
	
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
	
	var styles = __webpack_require__(299);
	var CollectionSection = function (_Component) {
	    _inherits(CollectionSection, _Component);
	
	    function CollectionSection(props) {
	        _classCallCheck(this, CollectionSection);
	
	        return _possibleConstructorReturn(this, (CollectionSection.__proto__ || Object.getPrototypeOf(CollectionSection)).call(this, props));
	    }
	
	    _createClass(CollectionSection, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var list = _props.list;
	            var title = _props.title;
	
	            return _react2.default.createElement("div", { styleName: "section" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement(_CollectionList2.default, { list: list }), _react2.default.createElement(_reactRouter.Link, { styleName: "view-more", to: "/collections" }, "\u6D4F\u89C8\u66F4\u591A\u4E66\u5355")));
	        }
	    }]);
	
	    return CollectionSection;
	}(_react.Component);
	CollectionSection = __decorate([(0, _reactCssModules2.default)(styles)], CollectionSection);
	exports.default = CollectionSection;

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _CollectionItem = __webpack_require__(298);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	
	var styles = __webpack_require__(299);
	var CollectionList = function (_Component) {
	    _inherits(CollectionList, _Component);
	
	    function CollectionList(props) {
	        _classCallCheck(this, CollectionList);
	
	        return _possibleConstructorReturn(this, (CollectionList.__proto__ || Object.getPrototypeOf(CollectionList)).call(this, props));
	    }
	
	    _createClass(CollectionList, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var list = _props.list;
	            var style = _props.style;
	            var maxWidth = _props.maxWidth;
	
	            return _react2.default.createElement("div", { styleName: "list", className: "clearfix" }, list.map(function (item, index) {
	                return _react2.default.createElement(_CollectionItem2.default, __assign({ maxWidth: maxWidth, style: style, key: index }, item));
	            }));
	        }
	    }]);
	
	    return CollectionList;
	}(_react.Component);
	CollectionList = __decorate([(0, _reactCssModules2.default)(styles)], CollectionList);
	exports.default = CollectionList;

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(125);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(63);
	
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
	
	var styles = __webpack_require__(299);
	var CollectionItem = function (_Component) {
	    _inherits(CollectionItem, _Component);
	
	    function CollectionItem(props) {
	        _classCallCheck(this, CollectionItem);
	
	        return _possibleConstructorReturn(this, (CollectionItem.__proto__ || Object.getPrototypeOf(CollectionItem)).call(this, props));
	    }
	
	    _createClass(CollectionItem, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var description = _props.description;
	            var name = _props.name;
	            var id = _props.id;
	            var bookCovers = _props.bookCovers;
	            var style = _props.style;
	            var maxWidth = _props.maxWidth;
	
	            return _react2.default.createElement("div", { className: "collection-item", styleName: style === 'dark' ? 'item--dark' : 'item--light' }, _react2.default.createElement("div", { style: { maxWidth: maxWidth || '100%', margin: '0 auto' } }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("h2", { styleName: "name" }, _react2.default.createElement(_reactRouter.Link, { styleName: "link", to: "collections/" + id }, name)), _react2.default.createElement("div", { styleName: "desc" }, description)), _react2.default.createElement("div", { className: "col-md-6" }, _react2.default.createElement("ul", { styleName: "covers" }, bookCovers.map(function (bookCover, index) {
	                return _react2.default.createElement("li", { key: index }, _react2.default.createElement("img", { src: bookCover }));
	            }))))));
	        }
	    }]);
	
	    return CollectionItem;
	}(_react.Component);
	CollectionItem = __decorate([(0, _reactCssModules2.default)(styles)], CollectionItem);
	exports.default = CollectionItem;

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(300);
	    var insertCss = __webpack_require__(129);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(128)();
	// imports
	exports.i(__webpack_require__(167), "");
	
	// module
	exports.push([module.id, ":root {\n  --cover-size: 100px;\n  \\--light-link: {\n    color: #fff;\n\n    &:hover {\n      color: #ddd;\n    }\n  };\n  \\--dark: {\n    color: var(--text);\n  };\n}\n\n.item_23Tis {\n  width: 100%;\n  min-height: 200px;\n  position: relative;\n  border-bottom: 1px solid color(var(--dark-blue) l(- 10%));\n  padding: 0 0 30px 0;\n}\n\n.item--light_2o150 {\n}\n\n.section_1Bdj3 {\n  background: var(--dark-blue);\n  overflow: hidden;\n  margin: 40px 0;\n}\n\n.covers_l92ZZ {\n  overflow: hidden;\n  position: absolute;\n  right: 30px;\n  top: 30px;\n\n  & li {\n    float: left;\n    margin: 0 10px;\n\n    & img {\n      max-width: 70px;\n      box-shadow: var(--shadow-y1);\n      overflow: hidden;\n      border-radius: 3px;\n    }\n  }\n}\n\n.name_jeo6l {\n  font-size: 1.2rem;\n  color: #fff;\n  margin-bottom: 1em;\n}\n\n.link_1OO-g {\n  @apply --light-link;\n}\n\n.desc_MOBvr {\n  color: gray(180);\n  font-size: 1rem;\n}\n\n.title_bDgfw {\n  @apply --page-title;\n  color: #fff;\n}\n\n.list_1p40A {\n  width: 100%;\n}\n\n.view-more_QQcb3 {\n  margin: 20px 0;\n  display: inline-block;\n}\n\n/* style 2 */\n.item--dark_1cOX3 {\n  border-color: var(--gray);\n\n  & .link_1OO-g {\n    color: var(--text-dark);\n\n    &:hover {\n      color: var(--text);\n    }\n  }\n\n  & .desc_MOBvr {\n    @apply --dark;\n  }\n}\n", ""]);
	
	// exports
	exports.locals = {
		"item": "item_23Tis",
		"item--light": "item--light_2o150 item_23Tis",
		"section": "section_1Bdj3",
		"covers": "covers_l92ZZ",
		"name": "name_jeo6l",
		"link": "link_1OO-g",
		"desc": "desc_MOBvr",
		"title": "title_bDgfw",
		"list": "list_1p40A",
		"view-more": "view-more_QQcb3 link_1OO-g",
		"item--dark": "item--dark_1cOX3 item_23Tis"
	};

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uSXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uLmNzcz84NjY2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3MiXSwibmFtZXMiOlsiQ29sbGVjdGlvbnMiLCJwcm9wcyIsImZldGNoQ29sbGVjdGlvbnMiLCJuZXdlc3RDb2xsZWN0aW9ucyIsImxpc3QiLCJtYXAiLCJuYW1lIiwiaXRlbSIsImlkIiwiYm9va0NvdmVycyIsIml0ZW1zIiwiYm9vayIsImNvdmVyIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInN0YXRlIiwicGFnaW5hdGlvbiIsImJvb2tDb2xsZWN0aW9ucyIsIm5ld2VzdCIsImlkcyIsImVudGl0aWVzIiwiQ29sbGVjdGlvbkl0ZW0iLCJDb2xsZWN0aW9uTGlzdCIsIkNvbGxlY3Rpb25TZWN0aW9uIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5Iiwic3R5bGVzIiwicmVxdWlyZSIsInRpdGxlIiwic3R5bGVOYW1lIiwidG8iLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwibiIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleCIsImJvb2tDb3ZlciIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0tBQ01BLFc7OztBQUNGLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7QUFFbEI7Ozs7NkNBQ21CO0FBQ2hCLGtCQUFLQSxLQUFMLENBQVdDLGdCQUFYO0FBQ0g7OztrQ0FDUTtBQUFBLGlCQUNDQyxpQkFERCxHQUN1QixLQUFLRixLQUQ1QixDQUNDRSxpQkFERDs7QUFFTCxpQkFBSUMsT0FBT0Qsa0JBQ05FLEdBRE0sQ0FDRjtBQUFBLHdCQUFTO0FBQ2RDLDJCQUFNQyxLQUFLRCxJQURHO0FBRWRFLHlCQUFJRCxLQUFLQyxFQUZLO0FBR2RDLGlDQUFZRixLQUFLRyxLQUFMLENBQVdMLEdBQVgsQ0FBZTtBQUFBLGdDQUFRTSxLQUFLQyxLQUFiO0FBQUEsc0JBQWYsQ0FIRTtBQUlkQyxrQ0FBYU4sS0FBS007QUFKSixrQkFBVDtBQUFBLGNBREUsQ0FBWDtBQU9BLG9CQUFRLGdCQUFNQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsa0JBQWIsRUFBM0IsRUFDSixnQkFBTUQsYUFBTixDQUFvQixLQUFwQixFQUEyQixFQUFFRSxPQUFPLEVBQUVDLFVBQVUsR0FBWixFQUFpQkMsUUFBUSxRQUF6QixFQUFULEVBQTNCLEVBQ0ksZ0JBQU1KLGFBQU4sQ0FBb0IsSUFB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QkFBMkI7QUFDcEUsb0RBQW1EOzs7Ozs7OztBQ1ZuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBaUMsd0JBQXdCLHFCQUFxQixrQkFBa0IsaUJBQWlCLG9CQUFvQixPQUFPLE1BQU0sZUFBZSx5QkFBeUIsTUFBTSxHQUFHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHVCQUF1Qiw4REFBOEQsd0JBQXdCLEdBQUcsd0JBQXdCLEdBQUcsb0JBQW9CLGlDQUFpQyxxQkFBcUIsbUJBQW1CLEdBQUcsbUJBQW1CLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGNBQWMsWUFBWSxrQkFBa0IscUJBQXFCLGVBQWUsd0JBQXdCLHFDQUFxQyx5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyxHQUFHLGlCQUFpQixzQkFBc0IsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQixtQkFBbUIsMEJBQTBCLEdBQUcsc0NBQXNDLDhCQUE4QixxQkFBcUIsOEJBQThCLGlCQUFpQiwyQkFBMkIsT0FBTyxLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyxHQUFHOztBQUVyMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjYuNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uJztcbmNsYXNzIENvbGxlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBuZXdlc3RDb2xsZWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGxpc3QgPSBuZXdlc3RDb2xsZWN0aW9uc1xuICAgICAgICAgICAgLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGJvb2tDb3ZlcnM6IGl0ZW0uaXRlbXMubWFwKGJvb2sgPT4gYm9vay5jb3ZlciksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWNvbGxlY3Rpb25zXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwicGFnZS10aXRsZVwiIH0sIFwiXFx1NUY4MFxcdTY3MUZcXHU0RTY2XFx1NTM1NVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbGxlY3Rpb25MaXN0LCB7IG1heFdpZHRoOiA4MDAsIHN0eWxlOiBcImRhcmtcIiwgbGlzdDogbGlzdCB9KSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBuZXdlc3RDb2xsZWN0aW9uczogc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0XG4gICAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zW2lkXSlcbiAgICAgICAgOiBbXVxufSksIHsgZmV0Y2hDb2xsZWN0aW9ucyB9KShDb2xsZWN0aW9ucyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9ucy50c3hcbiAqKi8iLCJpbXBvcnQgQ29sbGVjdGlvblNlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uU2VjdGlvbic7XG5pbXBvcnQgQ29sbGVjdGlvbkl0ZW0gZnJvbSAnLi9Db2xsZWN0aW9uSXRlbSc7XG5pbXBvcnQgQ29sbGVjdGlvbkxpc3QgZnJvbSAnLi9Db2xsZWN0aW9uTGlzdCc7XG5leHBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgQ29sbGVjdGlvbkxpc3QsIENvbGxlY3Rpb25TZWN0aW9uIH07XG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uU2VjdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9pbmRleC50c1xuICoqLyIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL2xheW91dCc7XG5pbXBvcnQgQ29sbGVjdGlvbkxpc3QgZnJvbSAnLi9Db2xsZWN0aW9uTGlzdCc7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbGxlY3Rpb24uY3NzJyk7XG5sZXQgQ29sbGVjdGlvblNlY3Rpb24gPSBjbGFzcyBDb2xsZWN0aW9uU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGxpc3QsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZU5hbWU6IFwic2VjdGlvblwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZU5hbWU6IFwidGl0bGVcIiB9LCB0aXRsZSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xsZWN0aW9uTGlzdCwgeyBsaXN0OiBsaXN0IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBzdHlsZU5hbWU6IFwidmlldy1tb3JlXCIsIHRvOiBcIi9jb2xsZWN0aW9uc1wiIH0sIFwiXFx1NkQ0RlxcdTg5QzhcXHU2NkY0XFx1NTkxQVxcdTRFNjZcXHU1MzU1XCIpKSkpO1xuICAgIH1cbn07XG5Db2xsZWN0aW9uU2VjdGlvbiA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgQ29sbGVjdGlvblNlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblNlY3Rpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvblNlY3Rpb24udHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IENvbGxlY3Rpb25JdGVtIGZyb20gJy4vQ29sbGVjdGlvbkl0ZW0nO1xuY29uc3Qgc3R5bGVzID0gcmVxdWlyZSgnLi9Db2xsZWN0aW9uLmNzcycpO1xubGV0IENvbGxlY3Rpb25MaXN0ID0gY2xhc3MgQ29sbGVjdGlvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBsaXN0LCBzdHlsZSwgbWF4V2lkdGggfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlTmFtZTogXCJsaXN0XCIsIGNsYXNzTmFtZTogXCJjbGVhcmZpeFwiIH0sIGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbGxlY3Rpb25JdGVtLCBfX2Fzc2lnbih7IG1heFdpZHRoOiBtYXhXaWR0aCwgc3R5bGU6IHN0eWxlLCBrZXk6IGluZGV4IH0sIGl0ZW0pKSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxufTtcbkNvbGxlY3Rpb25MaXN0ID0gX19kZWNvcmF0ZShbXG4gICAgQ1NTTW9kdWxlcyhzdHlsZXMpXG5dLCBDb2xsZWN0aW9uTGlzdCk7XG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uTGlzdDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uTGlzdC50c3hcbiAqKi8iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5jb25zdCBzdHlsZXMgPSByZXF1aXJlKCcuL0NvbGxlY3Rpb24uY3NzJyk7XG5sZXQgQ29sbGVjdGlvbkl0ZW0gPSBjbGFzcyBDb2xsZWN0aW9uSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBuYW1lLCBpZCwgYm9va0NvdmVycywgc3R5bGUsIG1heFdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sbGVjdGlvbi1pdGVtXCIsIHN0eWxlTmFtZTogc3R5bGUgPT09ICdkYXJrJyA/ICdpdGVtLS1kYXJrJyA6ICdpdGVtLS1saWdodCcgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXhXaWR0aDogbWF4V2lkdGggfHwgJzEwMCUnLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGVOYW1lOiBcIm5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBzdHlsZU5hbWU6IFwibGlua1wiLCB0bzogYGNvbGxlY3Rpb25zLyR7aWR9YCB9LCBuYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGVOYW1lOiBcImRlc2NcIiB9LCBkZXNjcmlwdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IHN0eWxlTmFtZTogXCJjb3ZlcnNcIiB9LCBib29rQ292ZXJzLm1hcCgoYm9va0NvdmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBib29rQ292ZXIgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpKSkpO1xuICAgIH1cbn07XG5Db2xsZWN0aW9uSXRlbSA9IF9fZGVjb3JhdGUoW1xuICAgIENTU01vZHVsZXMoc3R5bGVzKVxuXSwgQ29sbGVjdGlvbkl0ZW0pO1xuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbkl0ZW07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkl0ZW0udHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Db2xsZWN0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb3Zlci1zaXplOiAxMDBweDtcXG4gIFxcXFwtLWxpZ2h0LWxpbms6IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZGRkO1xcbiAgICB9XFxuICB9O1xcbiAgXFxcXC0tZGFyazoge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICB9O1xcbn1cXG5cXG4uaXRlbV8yM1RpcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yKHZhcigtLWRhcmstYmx1ZSkgbCgtIDEwJSkpO1xcbiAgcGFkZGluZzogMCAwIDMwcHggMDtcXG59XFxuXFxuLml0ZW0tLWxpZ2h0XzJvMTUwIHtcXG59XFxuXFxuLnNlY3Rpb25fMUJkajMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDQwcHggMDtcXG59XFxuXFxuLmNvdmVyc19sOTJaWiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICB0b3A6IDMwcHg7XFxuXFxuICAmIGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcblxcbiAgICAmIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiA3MHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy15MSk7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5hbWVfamVvNmwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmxpbmtfMU9PLWcge1xcbiAgQGFwcGx5IC0tbGlnaHQtbGluaztcXG59XFxuXFxuLmRlc2NfTU9CdnIge1xcbiAgY29sb3I6IGdyYXkoMTgwKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRpdGxlX2JEZ2Z3IHtcXG4gIEBhcHBseSAtLXBhZ2UtdGl0bGU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxpc3RfMXA0MEEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52aWV3LW1vcmVfUVFjYjMge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIHN0eWxlIDIgKi9cXG4uaXRlbS0tZGFya18xY09YMyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXkpO1xcblxcbiAgJiAubGlua18xT08tZyB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYgLmRlc2NfTU9CdnIge1xcbiAgICBAYXBwbHkgLS1kYXJrO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpdGVtXCI6IFwiaXRlbV8yM1Rpc1wiLFxuXHRcIml0ZW0tLWxpZ2h0XCI6IFwiaXRlbS0tbGlnaHRfMm8xNTAgaXRlbV8yM1Rpc1wiLFxuXHRcInNlY3Rpb25cIjogXCJzZWN0aW9uXzFCZGozXCIsXG5cdFwiY292ZXJzXCI6IFwiY292ZXJzX2w5MlpaXCIsXG5cdFwibmFtZVwiOiBcIm5hbWVfamVvNmxcIixcblx0XCJsaW5rXCI6IFwibGlua18xT08tZ1wiLFxuXHRcImRlc2NcIjogXCJkZXNjX01PQnZyXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9iRGdmd1wiLFxuXHRcImxpc3RcIjogXCJsaXN0XzFwNDBBXCIsXG5cdFwidmlldy1tb3JlXCI6IFwidmlldy1tb3JlX1FRY2IzIGxpbmtfMU9PLWdcIixcblx0XCJpdGVtLS1kYXJrXCI6IFwiaXRlbS0tZGFya18xY09YMyBpdGVtXzIzVGlzXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=