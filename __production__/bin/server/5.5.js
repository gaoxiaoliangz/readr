exports.ids = [5];
exports.modules = {

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(84);
	
	var _actions = __webpack_require__(85);
	
	var _CollectionSection = __webpack_require__(324);
	
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
	            return _react2.default.createElement("div", { className: "page-collections" }, _react2.default.createElement("div", { style: { maxWidth: 800, margin: '0 auto' } }, _react2.default.createElement("h2", { className: "page-title" }, "往期书单")), _react2.default.createElement(_CollectionSection.CollectionList, { maxWidth: 800, style: "dark", list: list }));
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

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CollectionSection = exports.CollectionList = exports.CollectionItem = undefined;
	
	var _CollectionSection = __webpack_require__(325);
	
	var _CollectionSection2 = _interopRequireDefault(_CollectionSection);
	
	var _CollectionItem = __webpack_require__(327);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _CollectionList = __webpack_require__(326);
	
	var _CollectionList2 = _interopRequireDefault(_CollectionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CollectionItem = _CollectionItem2.default;
	exports.CollectionList = _CollectionList2.default;
	exports.CollectionSection = _CollectionSection2.default;
	exports.default = _CollectionSection2.default;

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(69);
	
	var _layout = __webpack_require__(203);
	
	var _CollectionList = __webpack_require__(326);
	
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
	
	var styles = __webpack_require__(328);
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
	
	            return _react2.default.createElement("div", { styleName: "section" }, _react2.default.createElement(_layout.Container, null, _react2.default.createElement("h2", { styleName: "title" }, title), _react2.default.createElement(_CollectionList2.default, { list: list }), _react2.default.createElement(_reactRouter.Link, { styleName: "view-more", to: "/collections" }, "浏览更多书单")));
	        }
	    }]);
	
	    return CollectionSection;
	}(_react.Component);
	CollectionSection = __decorate([(0, _reactCssModules2.default)(styles)], CollectionSection);
	exports.default = CollectionSection;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _CollectionItem = __webpack_require__(327);
	
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
	
	var styles = __webpack_require__(328);
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

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(82);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(108);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(69);
	
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
	
	var styles = __webpack_require__(328);
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

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(329);
	    var insertCss = __webpack_require__(112);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(111)();
	// imports
	exports.i(__webpack_require__(243), "");
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb24uY3NzPzg2NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUNpQjs7QUFRdEQ7Ozs7Ozs7Ozs7S0FBbUM7OztBQUVqQywwQkFBaUI7QUFDZjs7MEhBQ0Y7QUFFaUI7Ozs7O0FBQ1gsa0JBQU0sTUFDWjtBQUVNOzs7O0FBQ0EsaUJBQXFCLG9CQUFPLEtBQU07O0FBRXRDLGlCQUFRLHlCQUNGO0FBQVM7QUFDUCwyQkFBTSxLQUFLO0FBQ2IseUJBQU0sS0FBRztBQUNELHNDQUFZLE1BQUk7QUFBSyxnQ0FBUSxLQUFPO3NCQUE5QjtBQUNMLGtDQUFNLEtBQ2hCO0FBTFc7Y0FEWTtBQVFyQixvQkFDTCw4QkFBSSxTQUFVLFdBQW1CLHNCQUMvQiw4QkFBSSxTQUFNLE9BQUUsRUFBUyxVQUFLLEtBQVEsUUFBWSxjQUM1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OEQsd0JBQXdCLEdBQUcsd0JBQXdCLEdBQUcsb0JBQW9CLGlDQUFpQyxxQkFBcUIsbUJBQW1CLEdBQUcsbUJBQW1CLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGNBQWMsWUFBWSxrQkFBa0IscUJBQXFCLGVBQWUsd0JBQXdCLHFDQUFxQyx5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyxHQUFHLGlCQUFpQixzQkFBc0IsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLHNCQUFzQixtQkFBbUIsMEJBQTBCLEdBQUcsc0NBQXNDLDhCQUE4QixxQkFBcUIsOEJBQThCLGlCQUFpQiwyQkFBMkIsT0FBTyxLQUFLLHFCQUFxQixvQkFBb0IsS0FBSyxHQUFHOztBQUVyMEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6IjUuNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZldGNoQ29sbGVjdGlvbnMgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgQ29sbGVjdGlvbkxpc3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBmZXRjaENvbGxlY3Rpb25zOiBhbnlcbiAgbmV3ZXN0Q29sbGVjdGlvbnM6IEFycmF5PGFueT5cbn1cblxuY2xhc3MgQ29sbGVjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hDb2xsZWN0aW9ucygpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgbmV3ZXN0Q29sbGVjdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBsaXN0ID0gbmV3ZXN0Q29sbGVjdGlvbnNcbiAgICAgIC5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBib29rQ292ZXJzOiBpdGVtLml0ZW1zLm1hcChib29rID0+IGJvb2suY292ZXIpLFxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgfSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbGxlY3Rpb25zXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nfX0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj7lvoDmnJ/kuabljZU8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvbGxlY3Rpb25MaXN0IG1heFdpZHRoPXs4MDB9IHN0eWxlPVwiZGFya1wiIGxpc3Q9e2xpc3R9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBuZXdlc3RDb2xsZWN0aW9uczogc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0XG4gICAgICA/IHN0YXRlLnBhZ2luYXRpb24uYm9va0NvbGxlY3Rpb25zLm5ld2VzdC5pZHMubWFwKGlkID0+IHN0YXRlLmVudGl0aWVzLmJvb2tDb2xsZWN0aW9uc1tpZF0pXG4gICAgICA6IFtdXG4gIH0pLFxuICB7IGZldGNoQ29sbGVjdGlvbnMgfVxuKShDb2xsZWN0aW9ucyBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQ29sbGVjdGlvbnMvQ29sbGVjdGlvbnMudHN4XG4gKiovIiwiaW1wb3J0IENvbGxlY3Rpb25TZWN0aW9uIGZyb20gJy4vQ29sbGVjdGlvblNlY3Rpb24nXG5pbXBvcnQgQ29sbGVjdGlvbkl0ZW0gZnJvbSAnLi9Db2xsZWN0aW9uSXRlbSdcbmltcG9ydCBDb2xsZWN0aW9uTGlzdCBmcm9tICcuL0NvbGxlY3Rpb25MaXN0J1xuXG5leHBvcnQgeyBDb2xsZWN0aW9uSXRlbSwgQ29sbGVjdGlvbkxpc3QsIENvbGxlY3Rpb25TZWN0aW9uIH1cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25TZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL2luZGV4LnRzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvX2xheW91dCdcbmltcG9ydCBDb2xsZWN0aW9uTGlzdCBmcm9tICcuL0NvbGxlY3Rpb25MaXN0J1xuaW1wb3J0IHsgSUNvbGxlY3Rpb25FbnRpdHkgfSBmcm9tICcuL0NvbGxlY3Rpb25JdGVtJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0NvbGxlY3Rpb24uY3NzJylcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxpc3Q6IElDb2xsZWN0aW9uRW50aXR5W11cbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQ29sbGVjdGlvblNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaXN0LCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxDb2xsZWN0aW9uTGlzdCBsaXN0PXtsaXN0fSAvPlxuICAgICAgICAgIDxMaW5rIHN0eWxlTmFtZT1cInZpZXctbW9yZVwiIHRvPVwiL2NvbGxlY3Rpb25zXCI+5rWP6KeI5pu05aSa5Lmm5Y2VPC9MaW5rPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uU2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uU2VjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCBDb2xsZWN0aW9uSXRlbSwgeyBJQ29sbGVjdGlvbkVudGl0eSB9IGZyb20gJy4vQ29sbGVjdGlvbkl0ZW0nXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vQ29sbGVjdGlvbi5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gIGxpc3Q6IElDb2xsZWN0aW9uRW50aXR5W11cbiAgc3R5bGU/OiAnZGFyaycgfCAnbGlnaHQnXG4gIG1heFdpZHRoPzogbnVtYmVyXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBDb2xsZWN0aW9uTGlzdCBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxpc3QsIHN0eWxlLCBtYXhXaWR0aCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGVOYW1lPVwibGlzdFwiIGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDb2xsZWN0aW9uSXRlbSBtYXhXaWR0aD17bWF4V2lkdGh9IHN0eWxlPXtzdHlsZX0ga2V5PXtpbmRleH0gey4uLml0ZW19IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25MaXN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25MaXN0LnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9Db2xsZWN0aW9uLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25FbnRpdHkge1xuICBjb3Zlcj86IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgaWQ6IHN0cmluZ1xuICBib29rQ292ZXJzOiBzdHJpbmdbXVxuICBkZXNjcmlwdGlvbjogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBJQ29sbGVjdGlvbkVudGl0eSB7XG4gIHN0eWxlPzogJ2RhcmsnIHwgJ2xpZ2h0J1xuICBtYXhXaWR0aD86IG51bWJlclxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQ29sbGVjdGlvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbmFtZSwgaWQsIGJvb2tDb3ZlcnMsIHN0eWxlLCBtYXhXaWR0aCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGVjdGlvbi1pdGVtXCIgc3R5bGVOYW1lPXtzdHlsZSA9PT0gJ2RhcmsnID8gJ2l0ZW0tLWRhcmsnIDogJ2l0ZW0tLWxpZ2h0J30+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IG1heFdpZHRoIHx8ICcxMDAlJywgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8aDIgc3R5bGVOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHN0eWxlTmFtZT1cImxpbmtcIiB0bz17YGNvbGxlY3Rpb25zLyR7aWR9YH0+e25hbWV9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlTmFtZT1cImRlc2NcIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPHVsIHN0eWxlTmFtZT1cImNvdmVyc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGJvb2tDb3ZlcnMubWFwKChib29rQ292ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jvb2tDb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uSXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uSXRlbS50c3hcbiAqKi8iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSEuL0NvbGxlY3Rpb24uY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyOFxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIXN0eWxlcy92YXJpYWJsZXMuY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvdmVyLXNpemU6IDEwMHB4O1xcbiAgXFxcXC0tbGlnaHQtbGluazoge1xcbiAgICBjb2xvcjogI2ZmZjtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6ICNkZGQ7XFxuICAgIH1cXG4gIH07XFxuICBcXFxcLS1kYXJrOiB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIH07XFxufVxcblxcbi5pdGVtXzIzVGlzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3IodmFyKC0tZGFyay1ibHVlKSBsKC0gMTAlKSk7XFxuICBwYWRkaW5nOiAwIDAgMzBweCAwO1xcbn1cXG5cXG4uaXRlbS0tbGlnaHRfMm8xNTAge1xcbn1cXG5cXG4uc2VjdGlvbl8xQmRqMyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogNDBweCAwO1xcbn1cXG5cXG4uY292ZXJzX2w5MlpaIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMzBweDtcXG4gIHRvcDogMzBweDtcXG5cXG4gICYgbGkge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxuXFxuICAgICYgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDcwcHg7XFxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXkxKTtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubmFtZV9qZW82bCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubGlua18xT08tZyB7XFxuICBAYXBwbHkgLS1saWdodC1saW5rO1xcbn1cXG5cXG4uZGVzY19NT0J2ciB7XFxuICBjb2xvcjogZ3JheSgxODApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGl0bGVfYkRnZncge1xcbiAgQGFwcGx5IC0tcGFnZS10aXRsZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubGlzdF8xcDQwQSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnZpZXctbW9yZV9RUWNiMyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogc3R5bGUgMiAqL1xcbi5pdGVtLS1kYXJrXzFjT1gzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheSk7XFxuXFxuICAmIC5saW5rXzFPTy1nIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJiAuZGVzY19NT0J2ciB7XFxuICAgIEBhcHBseSAtLWRhcms7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIml0ZW1cIjogXCJpdGVtXzIzVGlzXCIsXG5cdFwiaXRlbS0tbGlnaHRcIjogXCJpdGVtLS1saWdodF8ybzE1MCBpdGVtXzIzVGlzXCIsXG5cdFwic2VjdGlvblwiOiBcInNlY3Rpb25fMUJkajNcIixcblx0XCJjb3ZlcnNcIjogXCJjb3ZlcnNfbDkyWlpcIixcblx0XCJuYW1lXCI6IFwibmFtZV9qZW82bFwiLFxuXHRcImxpbmtcIjogXCJsaW5rXzFPTy1nXCIsXG5cdFwiZGVzY1wiOiBcImRlc2NfTU9CdnJcIixcblx0XCJ0aXRsZVwiOiBcInRpdGxlX2JEZ2Z3XCIsXG5cdFwibGlzdFwiOiBcImxpc3RfMXA0MEFcIixcblx0XCJ2aWV3LW1vcmVcIjogXCJ2aWV3LW1vcmVfUVFjYjMgbGlua18xT08tZ1wiLFxuXHRcIml0ZW0tLWRhcmtcIjogXCJpdGVtLS1kYXJrXzFjT1gzIGl0ZW1fMjNUaXNcIlxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuL34vcG9zdGNzcy1sb2FkZXI/c291cmNlTWFwPWZhbHNlIS4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMyOVxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==