webpackJsonp([5],{

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(7);
	
	var _actions = __webpack_require__(8);
	
	var _CollectionSection = __webpack_require__(140);
	
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

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CollectionSection = exports.CollectionList = exports.CollectionItem = undefined;
	
	var _CollectionSection = __webpack_require__(141);
	
	var _CollectionSection2 = _interopRequireDefault(_CollectionSection);
	
	var _CollectionItem = __webpack_require__(143);
	
	var _CollectionItem2 = _interopRequireDefault(_CollectionItem);
	
	var _CollectionList = __webpack_require__(142);
	
	var _CollectionList2 = _interopRequireDefault(_CollectionList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CollectionItem = _CollectionItem2.default;
	exports.CollectionList = _CollectionList2.default;
	exports.CollectionSection = _CollectionSection2.default;
	exports.default = _CollectionSection2.default;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(4);
	
	var _layout = __webpack_require__(48);
	
	var _CollectionList = __webpack_require__(142);
	
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
	
	var styles = __webpack_require__(144);
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

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _CollectionItem = __webpack_require__(143);
	
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
	
	var styles = __webpack_require__(144);
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

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactCssModules = __webpack_require__(21);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactRouter = __webpack_require__(4);
	
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
	
	var styles = __webpack_require__(144);
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

/***/ 144:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"item":"item_23Tis","item--light":"item--light_2o150 item_23Tis","section":"section_1Bdj3","covers":"covers_l92ZZ","name":"name_jeo6l","link":"link_1OO-g","desc":"desc_MOBvr","title":"title_bDgfw","list":"list_1p40A","view-more":"view-more_QQcb3 link_1OO-g","item--dark":"item--dark_1cOX3 item_23Tis"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvcm91dGVzL0NvbGxlY3Rpb25zL0NvbGxlY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvY29tcG9uZW50cy9Db2xsZWN0aW9uU2VjdGlvbi9Db2xsZWN0aW9uU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkxpc3QudHN4Iiwid2VicGFjazovLy9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb24uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDSDs7QUFDaUI7O0FBUXREOzs7Ozs7Ozs7O0tBQW1DOzs7QUFFakMsMEJBQWlCLE9BQ2Y7OzsrRkFHZTs7Ozs7O0FBQ1gsa0JBQU0sTUFHTjs7Ozs7aUJBQ3FCLG9CQUFPLEtBQU07O0FBRXRDLHdCQUE0QixrQkFDdEI7d0JBQVU7QUFDUiwyQkFBTSxLQUFLO0FBQ2IseUJBQU0sS0FBRztBQUNELGlDQUFNLEtBQU0sTUFBSTtnQ0FBYSxLQUFPO3NCQUFmO0FBQ3BCLGtDQUFNLEtBQ2hCOztjQUxVLENBRFAsQ0FGSjtBQVVHLG9CQUNMLDhCQUFJLFNBQVUsV0FBbUIsc0JBQy9CLDhCQUFJLFNBQU0sT0FBRSxFQUFTLFVBQUssS0FBUSxRQUFZLGNBQzVDLDhCQUFHLFFBQVUsV0FBYSxnQkFDdEIsVUFDTixnQkFBZSxtREFBUyxVQUFNLEtBQU0sT0FBTyxRQUFLLE1BTXhEOzs7Ozs7O21CQUFzQjtZQUNWO0FBQ1Msa0NBQWtCLFdBQWdCLGdCQUFPLFNBQ2pELE1BQVcsV0FBZ0IsZ0JBQU8sT0FBSSxJQUFJO29CQUFZLE1BQVMsU0FBZ0IsZ0JBQUs7VUFBdkMsQ0FEOUIsR0FHeEI7O0VBSk8sRUFLVCxFQUNELCtDQUFvQixhOzs7Ozs7Ozs7Ozs7OztBQ2pEOEI7Ozs7QUFDTjs7OztBQUc3Qzs7Ozs7O1NBQXVCO1NBQWdCO1NBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xROzs7O0FBQ0U7Ozs7QUFDUDs7QUFDZTs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLEtBQVksU0FBZSxvQkFBb0I7QUFXL0M7OztBQUVFLGdDQUFpQixPQUNmOzs7cUdBR2U7Ozs7OzZDQUdYOzs7a0NBQ0U7MEJBQXNCLEtBQU07aUJBQXRCO2lCQUFTOztBQUVkLG9CQUNMLDhCQUFJLFNBQVUsV0FBVSxhQUN0QixnQkFBVSx1Q0FDUiw4QkFBRyxRQUFVLFdBQVEsV0FBYSxRQUNsQyxnQkFBZSwwQ0FBSyxNQUFVLFNBQzlCLGdCQUFLLG1DQUFVLFdBQVksYUFBRyxJQUFlLGtCQUt0RDs7OztZQXRCd0M7O0FBRHpDLGlDQUFXLCtCQUFRLFVBeUJuQjttQkFBZ0Msa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNROzs7O0FBQ0U7Ozs7QUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNwRSxLQUFZLFNBQWUsb0JBQW9CO0FBWS9DOzs7QUFFRSw2QkFBaUIsT0FDZjs7O2tHQUdlOzs7Ozs2Q0FHWDs7OzswQkFDa0MsS0FBTTtpQkFBaEM7aUJBQU87aUJBQVk7O0FBRXhCLGtEQUNELFNBQVUsV0FBTyxRQUFVLFdBQVcsY0FFbEMsS0FBSSxjQUFNLE1BQU87QUFDWix3QkFDTCxnQkFBZSxtREFBUyxVQUFXLFVBQU0sT0FBUSxPQUFJLEtBQVEsU0FPMUU7Y0FUa0IsQ0FGYixFQUhJOzs7O1lBVjRCOztBQUR0Qyw4QkFBVywrQkFBUSxVQTJCbkI7bUJBQTZCLGU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNXOzs7O0FBQ0U7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNuQyxLQUFZLFNBQWUsb0JBQW9CO0FBbUIvQzs7O0FBRUUsNkJBQWlCLE9BQ2Y7OztrR0FHZTs7Ozs7NkNBR1g7Ozs7MEJBQytELEtBQU07aUJBQXREO2lCQUFNO2lCQUFJO2lCQUFZO2lCQUFPO2lCQUFZOztBQUVyRCxrREFDRCxTQUFVLFdBQWtCLG1CQUFVLFdBQU8sVUFBVyxTQUFlLGVBQWlCLCtDQUN0RixTQUFNLE9BQUUsRUFBVSxVQUFVLFlBQVUsUUFBUSxRQUFhLDRDQUN6RCxTQUFVLFdBQU0sU0FDbEIsOEJBQUksU0FBVSxXQUFXLGNBQ3ZCLDhCQUFHLFFBQVUsV0FBTyxVQUNsQixnQkFBSyxtQ0FBVSxXQUFPLFFBQUsscUJBQW9CLE1BQzVDLFFBQ0wsOEJBQUksU0FBVSxXQUFPLFVBQ2pCLDZDQUNGLFNBQVUsV0FBVyw0Q0FDcEIsUUFBVSxXQUFTLFlBRVIsV0FBSSxjQUFXLFdBQU87QUFDdkIsd0JBQ0wsOEJBQUcsUUFBSSxLQUFRLFNBQ2IsOEJBQUksU0FBSSxLQVkvQjtjQWZnQyxDQUZuQixDQURGLENBUEYsQ0FERixDQURGLEVBSEk7Ozs7WUFWNEI7O0FBRHRDLDhCQUFXLCtCQUFRLFVBMkNuQjttQkFBNkIsZTs7Ozs7OztBQ2hFN0I7QUFDQSxtQkFBa0IsOFMiLCJmaWxlIjoiNS41LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZmV0Y2hDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBDb2xsZWN0aW9uTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGZldGNoQ29sbGVjdGlvbnM6IGFueVxuICBuZXdlc3RDb2xsZWN0aW9uczogQXJyYXk8YW55PlxufVxuXG5jbGFzcyBDb2xsZWN0aW9ucyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaENvbGxlY3Rpb25zKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBuZXdlc3RDb2xsZWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGxpc3QgPSBuZXdlc3RDb2xsZWN0aW9uc1xuICAgICAgLm1hcChpdGVtID0+ICh7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGJvb2tDb3ZlcnM6IGl0ZW0uaXRlbXMubWFwKGJvb2sgPT4gYm9vay5jb3ZlciksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICB9KSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29sbGVjdGlvbnNcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21heFdpZHRoOiA4MDAsIG1hcmdpbjogJzAgYXV0byd9fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuW+gOacn+S5puWNlTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q29sbGVjdGlvbkxpc3QgbWF4V2lkdGg9ezgwMH0gc3R5bGU9XCJkYXJrXCIgbGlzdD17bGlzdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIG5ld2VzdENvbGxlY3Rpb25zOiBzdGF0ZS5wYWdpbmF0aW9uLmJvb2tDb2xsZWN0aW9ucy5uZXdlc3RcbiAgICAgID8gc3RhdGUucGFnaW5hdGlvbi5ib29rQ29sbGVjdGlvbnMubmV3ZXN0Lmlkcy5tYXAoaWQgPT4gc3RhdGUuZW50aXRpZXMuYm9va0NvbGxlY3Rpb25zW2lkXSlcbiAgICAgIDogW11cbiAgfSksXG4gIHsgZmV0Y2hDb2xsZWN0aW9ucyB9XG4pKENvbGxlY3Rpb25zIGFzIGFueSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL3JvdXRlcy9Db2xsZWN0aW9ucy9Db2xsZWN0aW9ucy50c3hcbiAqKi8iLCJpbXBvcnQgQ29sbGVjdGlvblNlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uU2VjdGlvbidcbmltcG9ydCBDb2xsZWN0aW9uSXRlbSBmcm9tICcuL0NvbGxlY3Rpb25JdGVtJ1xuaW1wb3J0IENvbGxlY3Rpb25MaXN0IGZyb20gJy4vQ29sbGVjdGlvbkxpc3QnXG5cbmV4cG9ydCB7IENvbGxlY3Rpb25JdGVtLCBDb2xsZWN0aW9uTGlzdCwgQ29sbGVjdGlvblNlY3Rpb24gfVxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvblNlY3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9fbGF5b3V0J1xuaW1wb3J0IENvbGxlY3Rpb25MaXN0IGZyb20gJy4vQ29sbGVjdGlvbkxpc3QnXG5pbXBvcnQgeyBJQ29sbGVjdGlvbkVudGl0eSB9IGZyb20gJy4vQ29sbGVjdGlvbkl0ZW0nXG5jb25zdCBzdHlsZXM6IGFueSA9IHJlcXVpcmUoJy4vQ29sbGVjdGlvbi5jc3MnKVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgbGlzdDogSUNvbGxlY3Rpb25FbnRpdHlbXVxuICB0aXRsZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBDb2xsZWN0aW9uU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxpc3QsIHRpdGxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGgyIHN0eWxlTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPENvbGxlY3Rpb25MaXN0IGxpc3Q9e2xpc3R9IC8+XG4gICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwidmlldy1tb3JlXCIgdG89XCIvY29sbGVjdGlvbnNcIj7mtY/op4jmm7TlpJrkuabljZU8L0xpbms+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25TZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25TZWN0aW9uLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDU1NNb2R1bGVzIGZyb20gJ3JlYWN0LWNzcy1tb2R1bGVzJ1xuaW1wb3J0IENvbGxlY3Rpb25JdGVtLCB7IElDb2xsZWN0aW9uRW50aXR5IH0gZnJvbSAnLi9Db2xsZWN0aW9uSXRlbSdcbmNvbnN0IHN0eWxlczogYW55ID0gcmVxdWlyZSgnLi9Db2xsZWN0aW9uLmNzcycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgbGlzdDogSUNvbGxlY3Rpb25FbnRpdHlbXVxuICBzdHlsZT86ICdkYXJrJyB8ICdsaWdodCdcbiAgbWF4V2lkdGg/OiBudW1iZXJcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbkBDU1NNb2R1bGVzKHN0eWxlcylcbmNsYXNzIENvbGxlY3Rpb25MaXN0IGV4dGVuZHMgQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGlzdCwgc3R5bGUsIG1heFdpZHRoIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZU5hbWU9XCJsaXN0XCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAge1xuICAgICAgICAgIGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbGxlY3Rpb25JdGVtIG1heFdpZHRoPXttYXhXaWR0aH0gc3R5bGU9e3N0eWxlfSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbkxpc3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbkxpc3QudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENTU01vZHVsZXMgZnJvbSAncmVhY3QtY3NzLW1vZHVsZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuY29uc3Qgc3R5bGVzOiBhbnkgPSByZXF1aXJlKCcuL0NvbGxlY3Rpb24uY3NzJylcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sbGVjdGlvbkVudGl0eSB7XG4gIGNvdmVyPzogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGJvb2tDb3ZlcnM6IHN0cmluZ1tdXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIElDb2xsZWN0aW9uRW50aXR5IHtcbiAgc3R5bGU/OiAnZGFyaycgfCAnbGlnaHQnXG4gIG1heFdpZHRoPzogbnVtYmVyXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5AQ1NTTW9kdWxlcyhzdHlsZXMpXG5jbGFzcyBDb2xsZWN0aW9uSXRlbSBleHRlbmRzIENvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBuYW1lLCBpZCwgYm9va0NvdmVycywgc3R5bGUsIG1heFdpZHRoIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsZWN0aW9uLWl0ZW1cIiBzdHlsZU5hbWU9e3N0eWxlID09PSAnZGFyaycgPyAnaXRlbS0tZGFyaycgOiAnaXRlbS0tbGlnaHQnfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogbWF4V2lkdGggfHwgJzEwMCUnLCBtYXJnaW46ICcwIGF1dG8nIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxoMiBzdHlsZU5hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgc3R5bGVOYW1lPVwibGlua1wiIHRvPXtgY29sbGVjdGlvbnMvJHtpZH1gfT57bmFtZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGVOYW1lPVwiZGVzY1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8dWwgc3R5bGVOYW1lPVwiY292ZXJzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYm9va0NvdmVycy5tYXAoKGJvb2tDb3ZlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Ym9va0NvdmVyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25JdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9jb21wb25lbnRzL0NvbGxlY3Rpb25TZWN0aW9uL0NvbGxlY3Rpb25JdGVtLnRzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIml0ZW1cIjpcIml0ZW1fMjNUaXNcIixcIml0ZW0tLWxpZ2h0XCI6XCJpdGVtLS1saWdodF8ybzE1MCBpdGVtXzIzVGlzXCIsXCJzZWN0aW9uXCI6XCJzZWN0aW9uXzFCZGozXCIsXCJjb3ZlcnNcIjpcImNvdmVyc19sOTJaWlwiLFwibmFtZVwiOlwibmFtZV9qZW82bFwiLFwibGlua1wiOlwibGlua18xT08tZ1wiLFwiZGVzY1wiOlwiZGVzY19NT0J2clwiLFwidGl0bGVcIjpcInRpdGxlX2JEZ2Z3XCIsXCJsaXN0XCI6XCJsaXN0XzFwNDBBXCIsXCJ2aWV3LW1vcmVcIjpcInZpZXctbW9yZV9RUWNiMyBsaW5rXzFPTy1nXCIsXCJpdGVtLS1kYXJrXCI6XCJpdGVtLS1kYXJrXzFjT1gzIGl0ZW1fMjNUaXNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pc29tb3JwaGljL2NvbXBvbmVudHMvQ29sbGVjdGlvblNlY3Rpb24vQ29sbGVjdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=