exports.ids = [12];
exports.modules = {

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.booksSelector = exports.booksSearchAsOptions = exports.authorsAsOptions = exports.doubanBooksAsOptions = exports.searchBooksSelector = exports.queryAuthorsSelector = exports.queryDoubanBooksSelector = undefined;
	
	var _common = __webpack_require__(449);
	
	Object.keys(_common).forEach(function (key) {
	    if (key === "default") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _common[key];
	        }
	    });
	});
	
	var _reselect = __webpack_require__(450);
	
	var queryDoubanBooksSelector = exports.queryDoubanBooksSelector = function queryDoubanBooksSelector(query) {
	    return (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	        entitiesName: 'doubanBooks',
	        paginationName: 'doubanBooks',
	        paginationQuery: query
	    }), function (books) {
	        return books;
	    });
	};
	var queryAuthorsSelector = exports.queryAuthorsSelector = function queryAuthorsSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'authors',
	        paginationName: 'authors',
	        paginationQuery: query
	    });
	};
	var searchBooksSelector = exports.searchBooksSelector = function searchBooksSelector(query) {
	    return (0, _common.selectPaginatedEntities)({
	        entitiesName: 'books',
	        paginationName: 'books',
	        paginationQuery: query
	    });
	};
	var doubanBooksAsOptions = exports.doubanBooksAsOptions = function doubanBooksAsOptions(query) {
	    return (0, _reselect.createSelector)(queryDoubanBooksSelector(query), function (books) {
	        return books.map(function (book) {
	            return {
	                name: book.title,
	                value: book.id,
	                additional: {
	                    description: book.summary,
	                    cover: book.images.large,
	                    author: book.author.join(', ')
	                }
	            };
	        });
	    });
	};
	var authorsAsOptions = exports.authorsAsOptions = function authorsAsOptions(query) {
	    return (0, _reselect.createSelector)(queryAuthorsSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.name,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSearchAsOptions = exports.booksSearchAsOptions = function booksSearchAsOptions(query) {
	    return (0, _reselect.createSelector)(searchBooksSelector(query), function (items) {
	        return items.map(function (item) {
	            return {
	                name: item.title,
	                value: item.id
	            };
	        });
	    });
	};
	var booksSelector = exports.booksSelector = (0, _reselect.createSelector)((0, _common.selectPaginatedEntities)({
	    entitiesName: 'books',
	    paginationName: 'books',
	    paginationKey: 'default'
	}), function (books) {
	    return books;
	});

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectPaginatedEntities = undefined;
	
	var _reselect = __webpack_require__(450);
	
	var _lodash = __webpack_require__(9);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var entitiesSelector = function entitiesSelector(name) {
	    return function (state) {
	        return state.entities[name] || {};
	    };
	};
	var paginationSelector = function paginationSelector(name) {
	    var key = arguments.length <= 1 || arguments[1] === undefined ? 'default' : arguments[1];
	    return function (state) {
	        return _lodash2.default.get(state.pagination, name + '.' + key + '.ids', []);
	    };
	};
	var queryPaginationSelector = function queryPaginationSelector(name, query) {
	    return function (state) {
	        return _lodash2.default.get(state.pagination, [name, 'query', query, 'ids'], []);
	    };
	};
	var selectPaginatedEntities = exports.selectPaginatedEntities = function selectPaginatedEntities(options) {
	    var entitiesName = options.entitiesName;
	    var paginationName = options.paginationName;
	    var paginationKey = options.paginationKey;
	    var paginationQuery = options.paginationQuery;
	
	    var pagiSelector = void 0;
	    if (paginationQuery) {
	        pagiSelector = queryPaginationSelector(paginationName, paginationQuery);
	    } else {
	        pagiSelector = paginationSelector(paginationName, paginationKey);
	    }
	    return (0, _reselect.createSelector)(entitiesSelector(entitiesName), pagiSelector, function (entities, ids) {
	        return ids.map(function (id) {
	            return entities[id];
	        });
	    });
	};

/***/ },

/***/ 450:
/***/ function(module, exports) {

	module.exports = require("reselect");

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(109);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(275);
	
	var _DocContainer = __webpack_require__(272);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _apis = __webpack_require__(402);
	
	var _apis2 = _interopRequireDefault(_apis);
	
	var _selectors = __webpack_require__(448);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _actions = __webpack_require__(78);
	
	var _reactCssModules = __webpack_require__(285);
	
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
	
	var styles = __webpack_require__(528);
	var ManageBooks = function (_Component) {
	    _inherits(ManageBooks, _Component);
	
	    function ManageBooks(props) {
	        _classCallCheck(this, ManageBooks);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ManageBooks).call(this, props));
	    }
	
	    _createClass(ManageBooks, [{
	        key: "handleDeleteClick",
	        value: function handleDeleteClick(id, bookName) {
	            var _this2 = this;
	
	            this.props.openConfirmModal({
	                title: '确认删除',
	                content: "将删除《" + bookName + "》",
	                onConfirm: function onConfirm() {
	                    _apis2.default.deleteBook(id).then(function (res) {
	                        _this2.props.closeConfirmModal();
	                        _this2.props.sendNotification('删除成功！');
	                        _this2.props.fetchBooks({ merge: false });
	                    });
	                }
	            });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.fetchBooks();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;
	
	            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
	            return _react2.default.createElement(_DocContainer2.default, { title: "管理书籍" }, _react2.default.createElement("table", { className: "info-table" }, _react2.default.createElement("tbody", null, _react2.default.createElement("tr", null, _react2.default.createElement("td", null, "ID"), _react2.default.createElement("td", null, "Name"), _react2.default.createElement("td", null, "Date created"), _react2.default.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map(function (book, index) {
	                return _react2.default.createElement("tr", { key: index }, _react2.default.createElement("td", null, book.id), _react2.default.createElement("td", null, book.title), _react2.default.createElement("td", null, book.dateCreated), _react2.default.createElement("td", null, _react2.default.createElement("a", { onClick: function onClick(e) {
	                        e.preventDefault();
	                        _this3.handleDeleteClick(book.id, book.title);
	                        return false;
	                    }, href: "#" }, "Delete")));
	            }) : null)));
	        }
	    }], [{
	        key: "fetchData",
	        value: function fetchData(_ref) {
	            var store = _ref.store;
	
	            return store.dispatch((0, _actions.fetchBooks)());
	        }
	    }]);
	
	    return ManageBooks;
	}(_react.Component);
	ManageBooks = __decorate([(0, _reactCssModules2.default)(styles, {
	    allowMultiple: true
	})], ManageBooks);
	function mapStateToProps(state, ownProps) {
	    return {
	        bookListNewest: selectors.booksSelector(state)
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchBooks: _actions.fetchBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal })(ManageBooks);

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(529);
	    var insertCss = __webpack_require__(289);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	  

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(288)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2luZGV4LnRzPzcyNmIiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3N0b3JlL3NlbGVjdG9ycy9jb21tb24udHM/MzMzNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZXNlbGVjdFwiP2E5MDEiLCJ3ZWJwYWNrOi8vL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzcz81MWM2Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBOztBQWlFd0I7Ozs7Ozs7Ozs7QUFyRWlCOztBQUlsQyxLQUE4QjsrRUFDWDtBQUNWLHVCQUFlO0FBQ2IseUJBQWU7QUFDZCwwQkFDZjtNQUpxQixDQURzQztnQkFTL0Q7TUFITztFQU5zQztBQVN0QyxLQUEwQjtpREFBb0M7QUFDdkQsdUJBQVc7QUFDVCx5QkFBVztBQUNWLDBCQUdqQjtNQU5vRTtFQUEzQjtBQU1sQyxLQUF5QjtpREFBb0M7QUFDdEQsdUJBQVM7QUFDUCx5QkFBUztBQUNSLDBCQUdqQjtNQU5tRTtFQUEzQjtBQU1qQyxLQUEwQjtZQUEwQiw4QkFDakMseUJBQU87QUFFdkIsZ0JBQU0sTUFBSTtvQkFBVTtBQUNwQix1QkFBTSxLQUFNO0FBQ1gsd0JBQU0sS0FBRztBQUNKLDZCQUFFO0FBQ0Msa0NBQU0sS0FBUTtBQUNwQiw0QkFBTSxLQUFPLE9BQU07QUFDbEIsNkJBQU0sS0FBTyxPQUFLLEtBTWhDOzs7VUFaNkI7TUFEdEI7RUFGa0M7QUFlbEMsS0FBc0I7WUFBMEIsOEJBQ2pDLHFCQUFPO0FBRW5CLGdCQUFNLE1BQUk7b0JBQVU7QUFD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Ozs7Ozs7OztBQ1ZuRDtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6IjEyLjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdyZXNlbGVjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzIH0gZnJvbSAnLi9jb21tb24nXG5cbmV4cG9ydCBjb25zdCBxdWVyeURvdWJhbkJvb2tzU2VsZWN0b3IgPSBxdWVyeSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnaW5hdGVkRW50aXRpZXMoe1xuICAgIGVudGl0aWVzTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uTmFtZTogJ2RvdWJhbkJvb2tzJyxcbiAgICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG4gIH0pLFxuICBib29rcyA9PiBib29rc1xuKVxuXG5leHBvcnQgY29uc3QgcXVlcnlBdXRob3JzU2VsZWN0b3IgPSBxdWVyeSA9PiBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gIGVudGl0aWVzTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2F1dGhvcnMnLFxuICBwYWdpbmF0aW9uUXVlcnk6IHF1ZXJ5XG59KVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoQm9va3NTZWxlY3RvciA9IHF1ZXJ5ID0+IHNlbGVjdFBhZ2luYXRlZEVudGl0aWVzKHtcbiAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICBwYWdpbmF0aW9uTmFtZTogJ2Jvb2tzJyxcbiAgcGFnaW5hdGlvblF1ZXJ5OiBxdWVyeVxufSlcblxuZXhwb3J0IGNvbnN0IGRvdWJhbkJvb2tzQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHF1ZXJ5RG91YmFuQm9va3NTZWxlY3RvcihxdWVyeSksXG4gIGJvb2tzID0+IHtcbiAgICByZXR1cm4gYm9va3MubWFwKGJvb2sgPT4gKHtcbiAgICAgIG5hbWU6IGJvb2sudGl0bGUsXG4gICAgICB2YWx1ZTogYm9vay5pZCxcbiAgICAgIGFkZGl0aW9uYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IGJvb2suc3VtbWFyeSxcbiAgICAgICAgY292ZXI6IGJvb2suaW1hZ2VzLmxhcmdlLFxuICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yLmpvaW4oJywgJylcbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYXV0aG9yc0FzT3B0aW9ucyA9IHF1ZXJ5ID0+IGNyZWF0ZVNlbGVjdG9yKFxuICBxdWVyeUF1dGhvcnNTZWxlY3RvcihxdWVyeSksXG4gIGl0ZW1zID0+IHtcbiAgICByZXR1cm4gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgIHZhbHVlOiBpdGVtLmlkXG4gICAgfSkpXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGJvb2tzU2VhcmNoQXNPcHRpb25zID0gcXVlcnkgPT4gY3JlYXRlU2VsZWN0b3IoXG4gIHNlYXJjaEJvb2tzU2VsZWN0b3IocXVlcnkpLFxuICBpdGVtcyA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgdmFsdWU6IGl0ZW0uaWRcbiAgICB9KSlcbiAgfVxuKVxuXG5leHBvcnQgY29uc3QgYm9va3NTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyh7XG4gICAgZW50aXRpZXNOYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25OYW1lOiAnYm9va3MnLFxuICAgIHBhZ2luYXRpb25LZXk6ICdkZWZhdWx0J1xuICB9KSxcbiAgYm9va3MgPT4gYm9va3NcbilcblxuZXhwb3J0ICogZnJvbSAnLi9jb21tb24nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaXNvbW9ycGhpYy9zdG9yZS9zZWxlY3RvcnMvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBlbnRpdGllc1NlbGVjdG9yID0gbmFtZSA9PiBzdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5lbnRpdGllc1tuYW1lXSB8fCB7fVxufVxuY29uc3QgcGFnaW5hdGlvblNlbGVjdG9yID0gKG5hbWUsIGtleSA9ICdkZWZhdWx0JykgPT4gc3RhdGUgPT4ge1xuICByZXR1cm4gXy5nZXQoc3RhdGUucGFnaW5hdGlvbiwgYCR7bmFtZX0uJHtrZXl9Lmlkc2AsIFtdKVxufVxuY29uc3QgcXVlcnlQYWdpbmF0aW9uU2VsZWN0b3IgPSAobmFtZSwgcXVlcnkpID0+IHN0YXRlID0+IHtcbiAgcmV0dXJuIF8uZ2V0KHN0YXRlLnBhZ2luYXRpb24sIFtuYW1lLCAncXVlcnknLCBxdWVyeSwgJ2lkcyddLCBbXSlcbn1cblxudHlwZSBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMgPSB7XG4gIGVudGl0aWVzTmFtZTogc3RyaW5nXG4gIHBhZ2luYXRpb25OYW1lOiBzdHJpbmdcbiAgcGFnaW5hdGlvbktleT86IHN0cmluZ1xuICBwYWdpbmF0aW9uUXVlcnk/OiBzdHJpbmdcbn1cbmV4cG9ydCBjb25zdCBzZWxlY3RQYWdpbmF0ZWRFbnRpdGllcyA9IChvcHRpb25zOiBTZWxlY3RQYWdpbmF0ZWRFbnRpdGllc09wdGlvbnMpID0+IHtcbiAgY29uc3Qge2VudGl0aWVzTmFtZSwgcGFnaW5hdGlvbk5hbWUsIHBhZ2luYXRpb25LZXksIHBhZ2luYXRpb25RdWVyeX0gPSBvcHRpb25zXG4gIGxldCBwYWdpU2VsZWN0b3I6IChzdGF0ZTogYW55KSA9PiBhbnlbXVxuXG4gIGlmIChwYWdpbmF0aW9uUXVlcnkpIHtcbiAgICBwYWdpU2VsZWN0b3IgPSBxdWVyeVBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvblF1ZXJ5KVxuICB9IGVsc2Uge1xuICAgIHBhZ2lTZWxlY3RvciA9IHBhZ2luYXRpb25TZWxlY3RvcihwYWdpbmF0aW9uTmFtZSwgcGFnaW5hdGlvbktleSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBlbnRpdGllc1NlbGVjdG9yKGVudGl0aWVzTmFtZSksXG4gICAgcGFnaVNlbGVjdG9yLFxuICAgIChlbnRpdGllcywgaWRzKSA9PiB7XG4gICAgICByZXR1cm4gaWRzLm1hcChpZCA9PiBlbnRpdGllc1tpZF0pXG4gICAgfVxuICApXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvc3RvcmUvc2VsZWN0b3JzL2NvbW1vbi50c1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VsZWN0XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJyZXNlbGVjdFwiXG4gKiogbW9kdWxlIGlkID0gNDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMTIgMTQgMTVcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IGFwaXMgZnJvbSAnLi4vLi4vYXBpcydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi8uLi9zdG9yZS9zZWxlY3RvcnMnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBmZXRjaEJvb2tzLCBvcGVuQ29uZmlybU1vZGFsLCBjbG9zZUNvbmZpcm1Nb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgQ1NTTW9kdWxlcyBmcm9tICdyZWFjdC1jc3MtbW9kdWxlcydcbmNvbnN0IHN0eWxlcyA9IHJlcXVpcmUoJy4vTWFuYWdlQm9va3MuY3NzJylcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBmZXRjaEJvb2tzPzogKGRhdGE/OiBmZXRjaEJvb2tzKSA9PiB2b2lkXG4gIGJvb2tMaXN0TmV3ZXN0PzogYW55XG4gIG9wZW5Db25maXJtTW9kYWw6IChkYXRhOiBvcGVuQ29uZmlybU1vZGFsKSA9PiB2b2lkXG4gIGNsb3NlQ29uZmlybU1vZGFsOiBhbnlcbn1cblxuQENTU01vZHVsZXMoc3R5bGVzLCB7XG4gIGFsbG93TXVsdGlwbGU6IHRydWVcbn0pXG5jbGFzcyBNYW5hZ2VCb29rcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgYW55PiB7XG5cbiAgc3RhdGljIGZldGNoRGF0YSh7c3RvcmV9KSB7XG4gICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGZldGNoQm9va3MoKSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVEZWxldGVDbGljayhpZCwgYm9va05hbWUpIHtcbiAgICB0aGlzLnByb3BzLm9wZW5Db25maXJtTW9kYWwoe1xuICAgICAgdGl0bGU6ICfnoa7orqTliKDpmaQnLFxuICAgICAgY29udGVudDogYOWwhuWIoOmZpOOAiiR7Ym9va05hbWV944CLYCxcbiAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICBhcGlzLmRlbGV0ZUJvb2soaWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlQ29uZmlybU1vZGFsKClcbiAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oJ+WIoOmZpOaIkOWKn++8gScpXG4gICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEJvb2tzKHttZXJnZTogZmFsc2V9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQm9va3MoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBib29rTGlzdE5ld2VzdCA9IHRoaXMucHJvcHMuYm9va0xpc3ROZXdlc3QgPyB0aGlzLnByb3BzLmJvb2tMaXN0TmV3ZXN0IDogbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLnrqHnkIbkuabnsY1cIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImluZm8tdGFibGVcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5JRDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5OYW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkRhdGUgY3JlYXRlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5BY3Rpb25zPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB7Ym9va0xpc3ROZXdlc3QgPyBib29rTGlzdE5ld2VzdC5tYXAoKGJvb2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHRkPntib29rLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57Ym9vay5kYXRlQ3JlYXRlZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUNsaWNrKGJvb2suaWQsIGJvb2sudGl0bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPkRlbGV0ZTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBudWxsfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGJvb2tMaXN0TmV3ZXN0OiBzZWxlY3RvcnMuYm9va3NTZWxlY3RvcihzdGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IGZldGNoQm9va3MsIHNlbmROb3RpZmljYXRpb24sIG9wZW5Db25maXJtTW9kYWwsIGNsb3NlQ29uZmlybU1vZGFsIH1cbikoTWFuYWdlQm9va3MgYXMgYW55KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLnRzeFxuICoqLyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwPWZhbHNlIS4vTWFuYWdlQm9va3MuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL01hbmFnZUJvb2tzL01hbmFnZUJvb2tzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMlxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXA9ZmFsc2UmbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmbG9jYWxJZGVudE5hbWU9W2xvY2FsXV9baGFzaDpiYXNlNjQ6NV0hLi9+L3Bvc3Rjc3MtbG9hZGVyP3NvdXJjZU1hcD1mYWxzZSEuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9NYW5hZ2VCb29rcy9NYW5hZ2VCb29rcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTJcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9