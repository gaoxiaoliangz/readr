exports.ids = [5];
exports.modules = {

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _InfoTable = __webpack_require__(335);

var _InfoTable2 = _interopRequireDefault(_InfoTable);

var _webAPI = __webpack_require__(21);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _actions = __webpack_require__(15);

var _ContentPage = __webpack_require__(331);

var _ContentPage2 = _interopRequireDefault(_ContentPage);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

var _moment = __webpack_require__(416);

var _moment2 = _interopRequireDefault(_moment);

var _FileUploader = __webpack_require__(333);

var _FileUploader2 = _interopRequireDefault(_FileUploader);

var _form = __webpack_require__(85);

var _BookMetaForm = __webpack_require__(368);

var _BookMetaForm2 = _interopRequireDefault(_BookMetaForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManageBooks = function (_Component) {
    _inherits(ManageBooks, _Component);

    _createClass(ManageBooks, null, [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store,
                query = _ref.query;

            return store.dispatch((0, _actions.loadBooks)({
                page: query.page
            }));
        }
    }]);

    function ManageBooks(props) {
        _classCallCheck(this, ManageBooks);

        var _this = _possibleConstructorReturn(this, (ManageBooks.__proto__ || Object.getPrototypeOf(ManageBooks)).call(this, props));

        _this.state = {
            showModal: false
        };
        return _this;
    }

    _createClass(ManageBooks, [{
        key: 'deleteBook',
        value: function deleteBook(id, bookName) {
            var _this2 = this;

            this.props.openConfirmModal({
                title: '确认删除',
                content: '\u5C06\u5220\u9664\u300A' + bookName + '\u300B',
                onConfirm: function onConfirm() {
                    _webAPI2.default.deleteBook(id).then(function (res) {
                        _this2.props.closeConfirmModal();
                        _this2.props.sendNotification('删除成功！');
                        _this2.props.removeEntity('books', id);
                    });
                }
            });
        }
    }, {
        key: 'editBookMeta',
        value: function editBookMeta(bookId) {
            var _this3 = this;

            this.setState({
                showModal: true
            });
            var bookEntities = this.props.bookEntities;

            this.props.openModal({
                title: '编辑书籍信息',
                content: _react2.default.createElement(_BookMetaForm2.default, { onSave: function onSave(data) {
                        _webAPI2.default.editBookMeta(bookId, data).then(function (result) {
                            _this3.loadBooks();
                            _this3.props.closeModal();
                            _this3.props.sendNotification('修改成功！', 'success');
                        });
                    } })
            });
            var bookMeta = bookEntities[bookId];
            this.props.initializeForm('bookMeta', {
                title: bookMeta.title,
                authors: bookMeta.authors.map(function (item) {
                    return item.name;
                }).join(', '),
                description: bookMeta.description,
                cover: bookMeta.cover
            });
        }
    }, {
        key: 'loadBooks',
        value: function loadBooks() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

            this.props.loadBooks({
                page: props.routing.query.page || '1'
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            var _this4 = this;

            _helpers2.default.onRoutingChange(function (routing) {
                document.body.scrollTop = 0;
                _this4.loadBooks(nextProps);
            })(nextProps, this.props);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadBooks();
            this.props.loadUsers();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
            return _react2.default.createElement(_DocContainer2.default, { title: "书籍管理", bodyClass: "manage-books" }, _react2.default.createElement(_ContentPage2.default, { pagination: {
                    name: 'books'
                } }, _react2.default.createElement(_FileUploader2.default, { style: { marginTop: 20 }, url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
                    _this5.loadBooks();
                }, onError: function onError(error) {
                    _this5.props.sendNotification(error.message, 'error');
                } }, _react2.default.createElement(_form.Button, { color: "blue" }, '\u6DFB\u52A0\u4E66\u7C4D')), _react2.default.createElement(_InfoTable2.default, { data: bookListNewest.map(function (item) {
                    return Object.assign({}, item, {
                        authors: item.authors ? item.authors.map(function (author) {
                            return author.name;
                        }).join(', ') : '未知作者',
                        dateCreated: (0, _moment2.default)(new Date(item.dateCreated).valueOf()).format('YYYY年MM月DD日')
                    });
                }), header: [{
                    key: 'id',
                    name: 'ID'
                }, {
                    key: 'title',
                    name: '书名'
                }, {
                    key: 'dateCreated',
                    name: '创建日期'
                }, {
                    key: 'authors',
                    name: '作者'
                }], actions: [{
                    name: '删除',
                    fn: function fn(row) {
                        _this5.deleteBook(row.id, row.title);
                    }
                }, {
                    name: '编辑',
                    fn: function fn(row) {
                        _this5.editBookMeta(row.id);
                    }
                }] })));
        }
    }]);

    return ManageBooks;
}(_react.Component);

function mapStateToProps(state, ownProps) {
    var currentPage = selectors.common.currentPage('books')(state);
    var bookEntities = selectors.common.entities('books')(state);
    return {
        // 如果第一个参数传 null 会覆盖默认参数
        bookListNewest: selectors.books(undefined, currentPage)(state),
        routing: state.routing.locationBeforeTransitions,
        bookEntities: bookEntities
    };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { loadBooks: _actions.loadBooks, sendNotification: _actions.sendNotification, openConfirmModal: _actions.openConfirmModal, closeConfirmModal: _actions.closeConfirmModal, removeEntity: _actions.removeEntity, loadUsers: _actions.loadUsers, openModal: _actions.openModal, initializeForm: _actions.initializeForm, closeModal: _actions.closeModal })(ManageBooks);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ManageBooks, 'ManageBooks', '/Users/liang/Projects/readr/src/routes/ManageBooks/ManageBooks.tsx');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/routes/ManageBooks/ManageBooks.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/ManageBooks/ManageBooks.tsx');
}();

;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Paginator = __webpack_require__(337);

var _Paginator2 = _interopRequireDefault(_Paginator);

var _reactRedux = __webpack_require__(19);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentPage = function (_Component) {
    _inherits(ContentPage, _Component);

    function ContentPage(props) {
        _classCallCheck(this, ContentPage);

        return _possibleConstructorReturn(this, (ContentPage.__proto__ || Object.getPrototypeOf(ContentPage)).call(this, props));
    }

    _createClass(ContentPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                routing = _props.routing,
                _props$paginationLink = _props.paginationLinks,
                next = _props$paginationLink.next,
                last = _props$paginationLink.last;

            var all = last && last.page || 1;
            var current = next ? next.page - 1 : all;
            return _react2.default.createElement("div", null, children, _react2.default.createElement(_Paginator2.default, { all: all, current: current, url: {
                    pathname: routing.pathname,
                    query: routing.query || {}
                } }));
        }
    }]);

    return ContentPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
    var _ownProps$pagination = ownProps.pagination,
        name = _ownProps$pagination.name,
        key = _ownProps$pagination.key;

    return {
        routing: state.routing.locationBeforeTransitions || {},
        paginationLinks: selectors.common.paginationLinks(name, key)(state)
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(ContentPage);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ContentPage, 'ContentPage', '/Users/liang/Projects/readr/src/components/ContentPage/ContentPage.tsx');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/components/ContentPage/ContentPage.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/ContentPage/ContentPage.tsx');
}();

;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContentPage = __webpack_require__(330);

var _ContentPage2 = _interopRequireDefault(_ContentPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _ContentPage2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/ContentPage/index.ts');
}();

;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUploader = function (_Component) {
    _inherits(FileUploader, _Component);

    function FileUploader(props) {
        _classCallCheck(this, FileUploader);

        var _this = _possibleConstructorReturn(this, (FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call(this, props));

        _this.state = {
            value: null
        };
        _this.handleFileChange = _this.handleFileChange.bind(_this);
        return _this;
    }

    _createClass(FileUploader, [{
        key: 'handleFileChange',
        value: function handleFileChange(e) {
            var _props = this.props,
                url = _props.url,
                onComplete = _props.onComplete,
                onSuccess = _props.onSuccess,
                onError = _props.onError;

            var files = e.target.files;
            var data = new FormData();
            if (files.length > 1) {
                _jquery2.default.each(files, function (key, value) {
                    data.append(key, value);
                });
            } else {
                data.append('file', files[0]);
            }
            _jquery2.default.ajax({
                url: url,
                type: 'POST',
                data: data,
                cache: false,
                processData: false,
                // 如果这么设置 contentType 会导致不存在 boundary 的问题, 需要设置为 false
                // contentType: 'multipart/form-data',
                contentType: false,
                xhrFields: {
                    withCredentials: true
                },
                complete: function complete(data2) {
                    if (onComplete) {
                        onComplete(data2);
                    }
                },
                success: function success(data2, textStatus, jqXHR) {
                    if (onSuccess) {
                        onSuccess(data2);
                    }
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    if (onError) {
                        onError(jqXHR.responseJSON);
                    }
                }
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                url = _props2.url,
                accept = _props2.accept,
                noAjax = _props2.noAjax,
                children = _props2.children,
                name = _props2.name,
                multiple = _props2.multiple,
                style = _props2.style;
            // 如果页面上有两个上传组件可能会出错
            // input value 设为空会使得每次选中文件后都触发 onChange

            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
                    if (!noAjax) {
                        (0, _jquery2.default)(_this2.fileInput).click();
                    }
                }, style: Object.assign({
                    display: 'inline-block'
                }, style) }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: function ref(_ref) {
                    _this2.fileInput = _ref;
                }, onChange: function onChange(e) {
                    if (!noAjax) {
                        _this2.handleFileChange(e);
                    }
                }, accept: accept || '.*' }), _react2.default.createElement("input", { type: "submit", value: "提交" })), children);
        }
    }]);

    return FileUploader;
}(_react.Component);

var _default = FileUploader;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(FileUploader, 'FileUploader', '/Users/liang/Projects/readr/src/components/FileUploader/FileUploader.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/FileUploader/FileUploader.tsx');
}();

;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FileUploader = __webpack_require__(332);

var _FileUploader2 = _interopRequireDefault(_FileUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _FileUploader2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/FileUploader/index.ts');
}();

;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(47);

var _map3 = _interopRequireDefault(_map2);

var _keys2 = __webpack_require__(86);

var _keys3 = _interopRequireDefault(_keys2);

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

var styles = __webpack_require__(349);
var InfoTable = function (_Component) {
    _inherits(InfoTable, _Component);

    function InfoTable(props) {
        _classCallCheck(this, InfoTable);

        return _possibleConstructorReturn(this, (InfoTable.__proto__ || Object.getPrototypeOf(InfoTable)).call(this, props));
    }

    _createClass(InfoTable, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                header = _props.header,
                data = _props.data,
                enableTooltip = _props.enableTooltip,
                style = _props.style,
                actions = _props.actions,
                operationLabel = _props.operationLabel;

            actions = actions || [];
            if (!header) {
                header = data.length !== 0 && (0, _keys3.default)(data[0]).map(function (key) {
                    return {
                        key: key,
                        name: key
                    };
                }) || [];
            }
            var className = (0, _classnames2.default)({
                'info-table': true,
                'info-table--no-header': !header
            });
            return _react2.default.createElement("table", { styleName: className, style: style || {} }, _react2.default.createElement("tbody", null, header ? _react2.default.createElement("tr", null, header.map(function (item, index) {
                return _react2.default.createElement("th", { key: index }, item.name);
            }), actions.length !== 0 && _react2.default.createElement("th", { styleName: "actions" }, operationLabel || '操作')) : _react2.default.createElement("tr", null), data.map(function (row, index) {
                return _react2.default.createElement("tr", { key: index }, (0, _map3.default)(header, function (item, key) {
                    return _react2.default.createElement("td", { key: key }, row[item.key] && row[item.key].toString());
                }), actions.length !== 0 && _react2.default.createElement("td", { styleName: "actions" }, actions.length !== 0 && actions.map(function (action, index2) {
                    return _react2.default.createElement("div", { styleName: "action", key: index2, onClick: function onClick(e) {
                            action.fn(data[index]);
                        } }, action.name);
                })));
            })));
        }
    }]);

    return InfoTable;
}(_react.Component);
InfoTable = __decorate([(0, _reactCssModules2.default)(styles)], InfoTable);
var _default = InfoTable;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/InfoTable/InfoTable.tsx");

    __REACT_HOT_LOADER__.register(InfoTable, "InfoTable", "/Users/liang/Projects/readr/src/components/InfoTable/InfoTable.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/InfoTable/InfoTable.tsx");
}();

;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InfoTable = __webpack_require__(334);

var _InfoTable2 = _interopRequireDefault(_InfoTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _InfoTable2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/InfoTable/index.ts');
}();

;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(9);

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

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

var styles = __webpack_require__(350);
var Paginator = function (_Component) {
    _inherits(Paginator, _Component);

    function Paginator(props) {
        _classCallCheck(this, Paginator);

        return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));
    }

    _createClass(Paginator, [{
        key: "parseUrl",
        value: function parseUrl(pathname, query, pageNum) {
            var urlStyle = this.props.urlStyle ? this.props.urlStyle : 'query';
            if (urlStyle === 'query') {
                var _queryPart = _utils2.default.parseUrlencoded((0, _omit3.default)(query, ['page']));
                return "" + pathname + (_queryPart ? "?" + _queryPart + "&" : '?') + "page=" + pageNum;
            }
            var queryPart = _utils2.default.parseUrlencoded(query);
            return pathname + "/page/" + pageNum + "?" + queryPart;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var range = this.props.range ? this.props.range : 3;
            var totalRangeEndIndex = this.props.all - 1;
            var currentIndex = parseInt(this.props.current) - 1;
            var rangeStartIndex = currentIndex - range;
            var rangeEndIndex = currentIndex + range;
            var leftSpread = false;
            var rightSpread = false;
            var pages = [];
            var url = this.props.url;
            if (typeof this.props.all !== 'number') {
                throw new Error('all 必须为 number 类型！');
            }
            // 验证
            if (typeof currentIndex !== 'number') {
                console.error("\u9875\u7801\u5FC5\u987B\u4E3A\u6570\u5B57\uFF0C\u5374\u5F97\u5230 " + (typeof currentIndex === "undefined" ? "undefined" : _typeof(currentIndex)));
            }
            if (currentIndex > rangeEndIndex || currentIndex < 0) {
                console.error('页码不能大于所有页面数目或小于 1！');
            }
            if (range * 2 + 1 >= totalRangeEndIndex) {
                // 总长度小于 range 直径
                rangeEndIndex = totalRangeEndIndex;
                rangeStartIndex = 0;
            } else {
                // 处理右侧溢出
                if (rangeEndIndex >= totalRangeEndIndex) {
                    rangeEndIndex = totalRangeEndIndex;
                    rangeStartIndex = totalRangeEndIndex - (range * 2 + 1);
                } else {
                    rightSpread = true;
                }
                if (rangeStartIndex <= 0) {
                    rangeStartIndex = 0;
                    rangeEndIndex = range * 2 + 1;
                } else {
                    leftSpread = true;
                }
            }
            for (var i = rangeStartIndex; i <= rangeEndIndex; i++) {
                pages = pages.concat([{
                    pageNum: i + 1,
                    isCurrent: i === currentIndex
                }]);
            }
            // add spread
            if (leftSpread) {
                var spd = [{
                    pageNum: 1
                }, {
                    isSpread: true
                }];
                pages = spd.concat(pages);
            }
            if (rightSpread) {
                var _spd = [{
                    isSpread: true
                }, {
                    pageNum: totalRangeEndIndex + 1
                }];
                pages = pages.concat(_spd);
            }
            return this.props.all !== 1 && _react2.default.createElement("div", { styleName: "paginator" }, _react2.default.createElement("ul", null, pages.map(function (page, index) {
                if (page.isCurrent) {
                    return _react2.default.createElement("li", { key: index, styleName: "page-num--current" }, page.pageNum);
                }
                if (page.isSpread) {
                    return _react2.default.createElement("li", { key: index, styleName: "page-spread" }, "...");
                }
                return _react2.default.createElement("li", { key: index, styleName: "page-num" }, _react2.default.createElement(_reactRouter.Link, { to: _this2.parseUrl(url.pathname, url.query, page.pageNum) }, page.pageNum));
            })));
        }
    }]);

    return Paginator;
}(_react.Component);
Paginator = __decorate([(0, _reactCssModules2.default)(styles)], Paginator);
var _default = Paginator;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/components/Paginator/Paginator.tsx");

    __REACT_HOT_LOADER__.register(Paginator, "Paginator", "/Users/liang/Projects/readr/src/components/Paginator/Paginator.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/components/Paginator/Paginator.tsx");
}();

;

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Paginator = __webpack_require__(336);

var _Paginator2 = _interopRequireDefault(_Paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Paginator2.default;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/components/Paginator/index.ts');
}();

;

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".info-table_20Mpg > tbody > tr > td, .info-table_20Mpg > tbody > tr th {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.info-table--no-header_kMU9t {\n  position: relative; }\n\n.info-table_20Mpg {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_20Mpg > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_20Mpg > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_20Mpg > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_20Mpg > tbody > tr > td, .info-table_20Mpg > tbody > tr th {\n      padding: 0 10px;\n      max-width: 250px; }\n\n.actions_ApREx {\n  min-width: 80px; }\n  .actions_ApREx .action_1te-v {\n    cursor: pointer;\n    color: #1B267F;\n    display: inline-block;\n    margin-right: 5px; }\n    .actions_ApREx .action_1te-v:hover {\n      color: #2e40d2; }\n    .actions_ApREx .action_1te-v:active {\n      color: #090d2b; }\n", ""]);

// exports
exports.locals = {
	"info-table": "info-table_20Mpg",
	"info-table--no-header": "info-table--no-header_kMU9t",
	"actions": "actions_ApREx",
	"action": "action_1te-v"
};

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, ".page-spread_1Zy4Q, .page-num_1fJwI a, .page-num--current_3liok a, .page-num--current_3liok {\n  display: inline-block;\n  padding: 8px 12px;\n  color: #666;\n  border: 1px solid #ddd;\n  background: #fff;\n  min-width: 37px;\n  text-align: center;\n  border-radius: 3px;\n  box-sizing: border-box; }\n\n.paginator_1KZC2 {\n  margin: 20px 0; }\n\n.page-spread_1Zy4Q {\n  display: inline-block;\n  cursor: default; }\n\n.page-num_1fJwI, .page-num--current_3liok {\n  display: inline-block;\n  margin: 0 3px; }\n  .page-num_1fJwI a:hover, .page-num--current_3liok a:hover {\n    background: #1B267F;\n    color: #fff; }\n\n.page-num--current_3liok {\n  background: #ddd;\n  cursor: default; }\n", ""]);

// exports
exports.locals = {
	"page-spread": "page-spread_1Zy4Q",
	"page-num": "page-num_1fJwI",
	"page-num--current": "page-num--current_3liok",
	"paginator": "paginator_1KZC2"
};

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(344);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./InfoTable.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./InfoTable.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(345);
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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Paginator.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/sass-loader/index.js!./Paginator.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 368:
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

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

var _actions = __webpack_require__(15);

var _form = __webpack_require__(85);

var _ModalFooter = __webpack_require__(87);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

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

var BookMetaForm = function (_Component) {
    _inherits(BookMetaForm, _Component);

    function BookMetaForm(props) {
        _classCallCheck(this, BookMetaForm);

        return _possibleConstructorReturn(this, (BookMetaForm.__proto__ || Object.getPrototypeOf(BookMetaForm)).call(this, props));
    }

    _createClass(BookMetaForm, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                title = _props$fields.title,
                authors = _props$fields.authors,
                description = _props$fields.description,
                cover = _props$fields.cover,
                handleSubmit = _props.handleSubmit,
                closeModal = _props.closeModal,
                onSave = _props.onSave;

            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "书名" }, title)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "作者" }, authors)), _react2.default.createElement(_form.Textarea, Object.assign({ placeholder: "描述" }, description)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "封面" }, cover)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
                    onSave(data);
                }), onCancel: closeModal }));
        }
    }]);

    return BookMetaForm;
}(_react.Component);
BookMetaForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'bookMeta',
    fields: ['title', 'authors', 'description', 'cover']
})], BookMetaForm);

var _default = (0, _reactRedux.connect)(function (state) {
    return state;
}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(BookMetaForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/ManageBooks/components/BookMetaForm.tsx");

    __REACT_HOT_LOADER__.register(BookMetaForm, "BookMetaForm", "/Users/liang/Projects/readr/src/routes/ManageBooks/components/BookMetaForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/ManageBooks/components/BookMetaForm.tsx");
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.5.js.map