exports.ids = [5];
exports.modules = {

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(255);
	
	var _actions = __webpack_require__(261);
	
	var _CollectionSection = __webpack_require__(480);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collections = function (_Component) {
	    _inherits(Collections, _Component);
	
	    function Collections(props) {
	        _classCallCheck(this, Collections);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Collections).call(this, props));
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

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CollectionSection = exports.CollectionList = exports.CollectionItem = undefined;
	
	var _CollectionSection = __webpack_require__(481);
	
	var _CollectionSection2 = _interopRequireDefault(_CollectionSection);
	
	var _CollectionItem = __webpack_require__(483);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _CollectionList = __webpack_require__(482);
	
	var _CollectionList2 = _interopRequireDefault(_CollectionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CollectionItem = _CollectionItem2.default;
	exports.CollectionList = _CollectionList2.default;
	exports.CollectionSection = _CollectionSection2.default;
	exports.default = _CollectionSection2.default;

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(272);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(89);
	
	var _layout = __webpack_require__(369);
	
	var _CollectionList = __webpack_require__(482);
	
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
	
	var styles = __webpack_require__(484);
	var CollectionSection = function (_Component) {
	    _inherits(CollectionSection, _Component);
	
	    function CollectionSection(props) {
	        _classCallCheck(this, CollectionSection);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionSection).call(this, props));
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

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(272);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _CollectionItem = __webpack_require__(483);
	
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
	
	var styles = __webpack_require__(484);
	var CollectionList = function (_Component) {
	    _inherits(CollectionList, _Component);
	
	    function CollectionList(props) {
	        _classCallCheck(this, CollectionList);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionList).call(this, props));
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

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(272);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(89);
	
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
	
	var styles = __webpack_require__(484);
	var CollectionItem = function (_Component) {
	    _inherits(CollectionItem, _Component);
	
	    function CollectionItem(props) {
	        _classCallCheck(this, CollectionItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionItem).call(this, props));
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

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(485);
	    var insertCss = __webpack_require__(276);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(275)();
	// imports
	exports.i(__webpack_require__(388), "");
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb24uY3NzPzg2NjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3Qzs7OztBQUNIOztBQUNpQjs7QUFRdEQ7Ozs7Ozs7Ozs7S0FBbUM7OztBQUVqQywwQkFBaUIsT0FDZjs7OytGQUdlOzs7Ozs7QUFDWCxrQkFBTSxNQUdOOzs7OztpQkFDcUIsb0JBQU8sS0FBTTs7QUFFdEMsd0JBQTRCLGtCQUN0Qjt3QkFBVTtBQUNSLDJCQUFNLEtBQUs7QUFDYix5QkFBTSxLQUFHO0FBQ0QsaUNBQU0sS0FBTSxNQUFJO2dDQUFhLEtBQU87c0JBQWY7QUFDcEIsa0NBQU0sS0FDaEI7O2NBTFUsQ0FEUCxDQUZKO0FBVUcsb0JBQ0wsOEJBQUksU0FBVSxXQUFtQixzQkFDL0IsOEJBQUksU0FBTSxPQUFFLEVBQVMsVUFBSyxLQUFRLFFBQVksY0FDNUMsOEJB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QUFtQixxQkFBcUIsdUJBQXVCLGdCQUFnQixjQUFjLFlBQVksa0JBQWtCLHFCQUFxQixlQUFlLHdCQUF3QixxQ0FBcUMseUJBQXlCLDJCQUEyQixPQUFPLEtBQUssR0FBRyxpQkFBaUIsc0JBQXNCLGdCQUFnQix1QkFBdUIsR0FBRyxpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0Isd0JBQXdCLGdCQUFnQixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxzQkFBc0IsbUJBQW1CLDBCQUEwQixHQUFHLHNDQUFzQyw4QkFBOEIscUJBQXFCLDhCQUE4QixpQkFBaUIsMkJBQTJCLE9BQU8sS0FBSyxxQkFBcUIsb0JBQW9CLEtBQUssR0FBRzs7QUFFcjBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiI1LjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaENvbGxlY3Rpb25zIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IENvbGxlY3Rpb25MaXN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZmV0Y2hDb2xsZWN0aW9uczogYW55XG4gIG5ld2VzdENvbGxlY3Rpb25zOiBBcnJheTxhbnk+XG59XG5cbmNsYXNzIENvbGxlY3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQ29sbGVjdGlvbnMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IG5ld2VzdENvbGxlY3Rpb25zIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgbGlzdCA9IG5ld2VzdENvbGxlY3Rpb25zXG4gICAgICAubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgYm9va0NvdmVyczogaXRlbS5pdGVtcy5tYXAoYm9vayA9PiBib29rLmNvdmVyKSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIH0pKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb2xsZWN0aW9uc1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IDgwMCwgbWFyZ2luOiAnMCBhdXRvJ319PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+5b6A5pyf5Lmm5Y2VPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb2xsZWN0aW9uTGlzdCBtYXhXaWR0aD17ODAwfSBzdHlsZT1cImRhcmtcIiBsaXN0PXtsaXN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+ICh7XG4gICAgbmV3ZXN0Q29sbGVjdGlvbnM6IHN0YXRlLnBhZ2luYXRpb24uYm9va0NvbGxlY3Rpb25zLm5ld2VzdFxuICAgICAgPyBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3QuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5ib29rQ29sbGVjdGlvbnNbaWRdKVxuICAgICAgOiBbXVxuICB9KSxcbiAgeyBmZXRjaENvbGxlY3Rpb25zIH1cbikoQ29sbGVjdGlvbnMgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zLnRzeFxuICoqLyIsImltcG9ydCBDb2xsZWN0aW9uU2VjdGlvbiBmcm9tICcuL0NvbGxlY3Rpb25TZWN0aW9uJ1xuaW1wb3J0IENvbGxlY3Rpb25JdGVtIGZyb20gJy4vQ29sbGVjdGlvbkl0ZW0nXG5pbXBvcnQgQ29sbGVjdGlvbkxpc3QgZnJvbSAnLi9Db2xsZWN0aW9uTGlzdCdcblxuZXhwb3J0IHsgQ29sbGVjdGlvbkl0ZW0sIENvbGxlY3Rpb25MaXN0LCBDb2xsZWN0aW9uU2VjdGlvbiB9XG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uU2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL19sYXlvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbkxpc3QgZnJvbSAnLi9Db2xsZWN0aW9uTGlzdCdcbmltcG9ydCB7IElDb2xsZWN0aW9uRW50aXR5IH0gZnJvbSAnLi9Db2xsZWN0aW9uSXRlbSdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9Db2xsZWN0aW9uLmNzcycpXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBsaXN0OiBJQ29sbGVjdGlvbkVudGl0eVtdXG4gIHRpdGxlOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIENvbGxlY3Rpb25TZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgdGl0bGUgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8aDIgc3R5bGVOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8Q29sbGVjdGlvbkxpc3QgbGlzdD17bGlzdH0gLz5cbiAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJ2aWV3LW1vcmVcIiB0bz1cIi9jb2xsZWN0aW9uc1wiPua1j+iniOabtOWkmuS5puWNlTwvTGluaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblNlY3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvblNlY3Rpb24udHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgQ29sbGVjdGlvbkl0ZW0sIHsgSUNvbGxlY3Rpb25FbnRpdHkgfSBmcm9tICcuL0NvbGxlY3Rpb25JdGVtJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0NvbGxlY3Rpb24uY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICBsaXN0OiBJQ29sbGVjdGlvbkVudGl0eVtdXG4gIHN0eWxlPzogJ2RhcmsnIHwgJ2xpZ2h0J1xuICBtYXhXaWR0aD86IG51bWJlclxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzKVxuY2xhc3MgQ29sbGVjdGlvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsaXN0LCBzdHlsZSwgbWF4V2lkdGggfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlTmFtZT1cImxpc3RcIiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICB7XG4gICAgICAgICAgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q29sbGVjdGlvbkl0ZW0gbWF4V2lkdGg9e21heFdpZHRofSBzdHlsZT17c3R5bGV9IGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uTGlzdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uTGlzdC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vQ29sbGVjdGlvbi5jc3MnKVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uRW50aXR5IHtcbiAgY292ZXI/OiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIGlkOiBzdHJpbmdcbiAgYm9va0NvdmVyczogc3RyaW5nW11cbiAgZGVzY3JpcHRpb246IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgSUNvbGxlY3Rpb25FbnRpdHkge1xuICBzdHlsZT86ICdkYXJrJyB8ICdsaWdodCdcbiAgbWF4V2lkdGg/OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIENvbGxlY3Rpb25JdGVtIGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIG5hbWUsIGlkLCBib29rQ292ZXJzLCBzdHlsZSwgbWF4V2lkdGggfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxlY3Rpb24taXRlbVwiIHN0eWxlTmFtZT17c3R5bGUgPT09ICdkYXJrJyA/ICdpdGVtLS1kYXJrJyA6ICdpdGVtLS1saWdodCd9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBtYXhXaWR0aCB8fCAnMTAwJScsIG1hcmdpbjogJzAgYXV0bycgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGgyIHN0eWxlTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8TGluayBzdHlsZU5hbWU9XCJsaW5rXCIgdG89e2Bjb2xsZWN0aW9ucy8ke2lkfWB9PntuYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZU5hbWU9XCJkZXNjXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDx1bCBzdHlsZU5hbWU9XCJjb3ZlcnNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBib29rQ292ZXJzLm1hcCgoYm9va0NvdmVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtib29rQ292ZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbkl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkl0ZW0udHN4XG4gKiovIiwiXG4gICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZsb2NhbElkZW50TmFtZT1bbG9jYWxdX1toYXNoOmJhc2U2NDo1XSEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UhLi9Db2xsZWN0aW9uLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJmxvY2FsSWRlbnROYW1lPVtsb2NhbF1fW2hhc2g6YmFzZTY0OjVdIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcD1mYWxzZSFzdHlsZXMvdmFyaWFibGVzLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb3Zlci1zaXplOiAxMDBweDtcXG4gIFxcXFwtLWxpZ2h0LWxpbms6IHtcXG4gICAgY29sb3I6ICNmZmY7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjZGRkO1xcbiAgICB9XFxuICB9O1xcbiAgXFxcXC0tZGFyazoge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICB9O1xcbn1cXG5cXG4uaXRlbV8yM1RpcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yKHZhcigtLWRhcmstYmx1ZSkgbCgtIDEwJSkpO1xcbiAgcGFkZGluZzogMCAwIDMwcHggMDtcXG59XFxuXFxuLml0ZW0tLWxpZ2h0XzJvMTUwIHtcXG59XFxuXFxuLnNlY3Rpb25fMUJkajMge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDQwcHggMDtcXG59XFxuXFxuLmNvdmVyc19sOTJaWiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICB0b3A6IDMwcHg7XFxuXFxuICAmIGxpIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbjogMCAxMHB4O1xcblxcbiAgICAmIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiA3MHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy15MSk7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm5hbWVfamVvNmwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmxpbmtfMU9PLWcge1xcbiAgQGFwcGx5IC0tbGlnaHQtbGluaztcXG59XFxuXFxuLmRlc2NfTU9CdnIge1xcbiAgY29sb3I6IGdyYXkoMTgwKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRpdGxlX2JEZ2Z3IHtcXG4gIEBhcHBseSAtLXBhZ2UtdGl0bGU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmxpc3RfMXA0MEEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi52aWV3LW1vcmVfUVFjYjMge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIHN0eWxlIDIgKi9cXG4uaXRlbS0tZGFya18xY09YMyB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyYXkpO1xcblxcbiAgJiAubGlua18xT08tZyB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYgLmRlc2NfTU9CdnIge1xcbiAgICBAYXBwbHkgLS1kYXJrO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpdGVtXCI6IFwiaXRlbV8yM1Rpc1wiLFxuXHRcIml0ZW0tLWxpZ2h0XCI6IFwiaXRlbS0tbGlnaHRfMm8xNTAgaXRlbV8yM1Rpc1wiLFxuXHRcInNlY3Rpb25cIjogXCJzZWN0aW9uXzFCZGozXCIsXG5cdFwiY292ZXJzXCI6IFwiY292ZXJzX2w5MlpaXCIsXG5cdFwibmFtZVwiOiBcIm5hbWVfamVvNmxcIixcblx0XCJsaW5rXCI6IFwibGlua18xT08tZ1wiLFxuXHRcImRlc2NcIjogXCJkZXNjX01PQnZyXCIsXG5cdFwidGl0bGVcIjogXCJ0aXRsZV9iRGdmd1wiLFxuXHRcImxpc3RcIjogXCJsaXN0XzFwNDBBXCIsXG5cdFwidmlldy1tb3JlXCI6IFwidmlldy1tb3JlX1FRY2IzIGxpbmtfMU9PLWdcIixcblx0XCJpdGVtLS1kYXJrXCI6IFwiaXRlbS0tZGFya18xY09YMyBpdGVtXzIzVGlzXCJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0ODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=