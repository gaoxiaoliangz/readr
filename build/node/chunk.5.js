exports.ids = [5];
exports.modules = {

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_InfoTable__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webAPI__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ContentPage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_FileUploader__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_BookMetaForm__ = __webpack_require__(350);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

















let ManageBooks = function (_Component) {
    _inherits(ManageBooks, _Component);

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
            this.props.openConfirmModal({
                title: '确认删除',
                content: `将删除《${bookName}》`,
                onConfirm: () => {
                    __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].deleteBook(id).then(res => {
                        this.props.closeConfirmModal();
                        this.props.sendNotification('删除成功！');
                        this.props.removeEntity('books', id);
                    });
                }
            });
        }
    }, {
        key: 'editBookMeta',
        value: function editBookMeta(bookMeta) {
            this.setState({
                showModal: true
            });
            this.props.openModal({
                title: '编辑书籍信息',
                content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_BookMetaForm__["a" /* default */], { onSave: data => {
                        __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].editBookMeta(bookMeta.id, data).then(result => {
                            this.loadBooks();
                            this.props.closeModal();
                            this.props.sendNotification('修改成功！', 'success');
                        });
                    } })
            });
            this.props.initializeForm('bookMeta', {
                title: bookMeta.title,
                authors: bookMeta.authors.map(item => item.name).join(', '),
                description: bookMeta.description,
                cover: bookMeta.cover
            });
        }
    }, {
        key: 'loadBooks',
        value: function loadBooks(props = this.props) {
            this.props.loadBooks(props.routing.query.page || '1');
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            __WEBPACK_IMPORTED_MODULE_10__helpers__["a" /* default */].onRoutingChange(routing => {
                document.body.scrollTop = 0;
                this.loadBooks(nextProps);
            })(nextProps, this.props);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.loadBooks();
            this.props.loadUsers();
        }
    }, {
        key: 'render',
        value: function render() {
            const { bookListNewest } = this.props;
            const entities = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.get(bookListNewest, ['pages', bookListNewest.currentPage], []);
            const rows = entities.map((row, index) => {
                return [row.id, row.title, __WEBPACK_IMPORTED_MODULE_11_moment___default()(new Date(row.dateCreated).valueOf()).format('YYYY年MM月DD日'), row.authors ? row.authors.map(author => author.name).join(', ') : '未知作者', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "dark-link", onClick: () => {
                        this.editBookMeta(entities[index]);
                    } }, "\u7F16\u8F91"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "dark-link", onClick: () => {
                        this.deleteBook(row.id, row.title);
                    } }, "\u5220\u9664"))];
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_DocContainer__["a" /* default */], { title: "书籍管理", bodyClass: "manage-books" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ContentPage__["a" /* default */], { pagination: {
                    name: 'books'
                } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_FileUploader__["a" /* default */], { style: { marginTop: 20 }, url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: result => {
                    this.loadBooks();
                }, onError: error => {
                    this.props.sendNotification(error.message, 'error');
                } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_form__["d" /* Button */], { color: "blue" }, "\u6DFB\u52A0\u4E66\u7C4D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_InfoTable__["a" /* default */], { rows: rows, header: ['ID', '数名', '创建日期', '作者', '操作'] })));
        }
    }]);

    return ManageBooks;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state, ownProps) {
    return {
        bookListNewest: __WEBPACK_IMPORTED_MODULE_6__selectors__["d" /* pagination */].bookList(state),
        routing: __WEBPACK_IMPORTED_MODULE_6__selectors__["e" /* routing */](state)
    };
}
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { loadBooks: __WEBPACK_IMPORTED_MODULE_8__actions_api__["loadBooks"], sendNotification: __WEBPACK_IMPORTED_MODULE_7__actions__["sendNotification"], openConfirmModal: __WEBPACK_IMPORTED_MODULE_7__actions__["openConfirmModal"], closeConfirmModal: __WEBPACK_IMPORTED_MODULE_7__actions__["closeConfirmModal"], removeEntity: __WEBPACK_IMPORTED_MODULE_8__actions_api__["removeEntity"], loadUsers: __WEBPACK_IMPORTED_MODULE_8__actions_api__["loadUsers"], openModal: __WEBPACK_IMPORTED_MODULE_7__actions__["openModal"], initializeForm: __WEBPACK_IMPORTED_MODULE_7__actions__["initializeForm"], closeModal: __WEBPACK_IMPORTED_MODULE_7__actions__["closeModal"] })(ManageBooks);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Paginator__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





let ContentPage = function (_Component) {
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
            const { children, routing, paginationLinks: { next, last } } = this.props;
            const all = last && last.page || 1;
            const current = next ? next.page - 1 : all;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Paginator__["a" /* default */], { all: all, current: current, url: {
                    pathname: routing.pathname,
                    query: routing.query || {}
                } }));
        }
    }]);

    return ContentPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

const mapStateToProps = (state, ownProps) => {
    const { pagination: { name, key } } = ownProps;
    return {
        routing: state.routing.locationBeforeTransitions || {}
    };
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, {})(ContentPage);

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContentPage__ = __webpack_require__(315);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__ContentPage__["a" /* default */];

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




let FileUploader = function (_Component) {
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
            const { url, onComplete, onSuccess, onError } = this.props;
            const files = e.target.files;
            const data = new FormData();
            if (files.length > 1) {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.each(files, function (key, value) {
                    data.append(key, value);
                });
            } else {
                data.append('file', files[0]);
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
                url,
                type: 'POST',
                data,
                cache: false,
                processData: false,
                // 如果这么设置 contentType 会导致不存在 boundary 的问题, 需要设置为 false
                // contentType: 'multipart/form-data',
                contentType: false,
                xhrFields: {
                    withCredentials: true
                },
                complete: data2 => {
                    if (onComplete) {
                        onComplete(data2);
                    }
                },
                success: function (data2, textStatus, jqXHR) {
                    if (onSuccess) {
                        onSuccess(data2);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
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
            const { url, accept, noAjax, children, name, multiple, style } = this.props;
            // 如果页面上有两个上传组件可能会出错
            // input value 设为空会使得每次选中文件后都触发 onChange
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "file-trigger", onClick: e => {
                    if (!noAjax) {
                        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.fileInput).click();
                    }
                }, style: Object.assign({
                    display: 'inline-block'
                }, style) }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: ref => {
                    this.fileInput = ref;
                }, onChange: e => {
                    if (!noAjax) {
                        this.handleFileChange(e);
                    }
                }, accept: accept || '.*' }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "submit", value: "提交" })), children);
        }
    }]);

    return FileUploader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = FileUploader;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileUploader__ = __webpack_require__(317);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__FileUploader__["a" /* default */];

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_css_modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InfoTable_scss__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__InfoTable_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__InfoTable_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let InfoTable = function (_Component) {
    _inherits(InfoTable, _Component);

    function InfoTable(props) {
        _classCallCheck(this, InfoTable);

        return _possibleConstructorReturn(this, (InfoTable.__proto__ || Object.getPrototypeOf(InfoTable)).call(this, props));
    }

    _createClass(InfoTable, [{
        key: "render",
        value: function render() {
            let { header, style, rows } = this.props;
            const className = __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                'info-table': true,
                'info-table--no-header': !header
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", { styleName: className, style: style || {} }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", null, header.map((item, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", { key: index }, item))), rows.map((row, index) => {
                if (row.length !== header.length) {
                    console.warn('Row items should match head items!');
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", { key: index }, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(row, (item, key) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", { key: key }, item)));
            })));
        }
    }]);

    return InfoTable;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
InfoTable = __decorate([__WEBPACK_IMPORTED_MODULE_3_react_css_modules___default()(__WEBPACK_IMPORTED_MODULE_4__InfoTable_scss___default.a)], InfoTable);
/* harmony default export */ __webpack_exports__["a"] = InfoTable;

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InfoTable__ = __webpack_require__(319);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__InfoTable__["a" /* default */];

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_css_modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_css_modules__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const styles = __webpack_require__(333);
let Paginator = function (_Component) {
    _inherits(Paginator, _Component);

    function Paginator(props) {
        _classCallCheck(this, Paginator);

        return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call(this, props));
    }

    _createClass(Paginator, [{
        key: "parseUrl",
        value: function parseUrl(pathname, query, pageNum) {
            let urlStyle = this.props.urlStyle ? this.props.urlStyle : 'query';
            if (urlStyle === 'query') {
                let queryPart = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* default */].parseUrlencoded(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.omit(query, ['page']));
                return `${pathname}${queryPart ? `?${queryPart}&` : '?'}page=${pageNum}`;
            }
            let queryPart = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* default */].parseUrlencoded(query);
            return `${pathname}/page/${pageNum}?${queryPart}`;
        }
    }, {
        key: "render",
        value: function render() {
            const range = this.props.range ? this.props.range : 3;
            const totalRangeEndIndex = this.props.all - 1;
            const currentIndex = parseInt(this.props.current) - 1;
            let rangeStartIndex = currentIndex - range;
            let rangeEndIndex = currentIndex + range;
            let leftSpread = false;
            let rightSpread = false;
            let pages = [];
            let url = this.props.url;
            if (typeof this.props.all !== 'number') {
                throw new Error('all 必须为 number 类型！');
            }
            // 验证
            if (typeof currentIndex !== 'number') {
                console.error(`页码必须为数字，却得到 ${typeof currentIndex}`);
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
            for (let i = rangeStartIndex; i <= rangeEndIndex; i++) {
                pages = pages.concat([{
                    pageNum: i + 1,
                    isCurrent: i === currentIndex
                }]);
            }
            // add spread
            if (leftSpread) {
                const spd = [{
                    pageNum: 1
                }, {
                    isSpread: true
                }];
                pages = spd.concat(pages);
            }
            if (rightSpread) {
                const spd = [{
                    isSpread: true
                }, {
                    pageNum: totalRangeEndIndex + 1
                }];
                pages = pages.concat(spd);
            }
            return this.props.all !== 1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { styleName: "paginator" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, pages.map((page, index) => {
                if (page.isCurrent) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, styleName: "page-num--current" }, page.pageNum);
                }
                if (page.isSpread) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, styleName: "page-spread" }, "...");
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { key: index, styleName: "page-num" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: this.parseUrl(url.pathname, url.query, page.pageNum) }, page.pageNum));
            })));
        }
    }]);

    return Paginator;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
Paginator = __decorate([__WEBPACK_IMPORTED_MODULE_4_react_css_modules___default()(styles)], Paginator);
/* harmony default export */ __webpack_exports__["a"] = Paginator;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Paginator__ = __webpack_require__(321);

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__Paginator__["a" /* default */];

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".info-table--no-header_kMU9t {\n  position: relative; }\n\n.info-table_20Mpg {\n  margin: 20px 0;\n  width: 100%;\n  line-height: 2.5;\n  font-size: 1rem;\n  position: relative; }\n  .info-table_20Mpg > tbody > tr:first-child {\n    border-bottom: 2px solid #666;\n    font-weight: bold;\n    line-height: 2.5; }\n  .info-table_20Mpg > tbody > tr {\n    border-bottom: 1px solid #ddd; }\n    .info-table_20Mpg > tbody > tr > th {\n      text-align: left;\n      border-bottom: 1px solid #ddd; }\n    .info-table_20Mpg > tbody > tr > td, .info-table_20Mpg > tbody > tr th {\n      padding: 0 10px;\n      max-width: 250px; }\n\n.actions_ApREx {\n  min-width: 80px; }\n  .actions_ApREx .action_1te-v {\n    cursor: pointer;\n    color: #1B267F;\n    display: inline-block;\n    margin-right: 5px; }\n    .actions_ApREx .action_1te-v:hover {\n      color: #2e40d2; }\n    .actions_ApREx .action_1te-v:active {\n      color: #090d2b; }\n", ""]);

// exports
exports.locals = {
	"info-table--no-header": "info-table--no-header_kMU9t",
	"info-table": "info-table_20Mpg",
	"actions": "actions_ApREx",
	"action": "action_1te-v"
};

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(327);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./InfoTable.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./InfoTable.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(328);
    var insertCss = __webpack_require__(3);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Paginator.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/sass-loader/index.js!./Paginator.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Modal_ModalFooter__ = __webpack_require__(74);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let BookMetaForm = function (_Component) {
    _inherits(BookMetaForm, _Component);

    function BookMetaForm(props) {
        _classCallCheck(this, BookMetaForm);

        return _possibleConstructorReturn(this, (BookMetaForm.__proto__ || Object.getPrototypeOf(BookMetaForm)).call(this, props));
    }

    _createClass(BookMetaForm, [{
        key: "render",
        value: function render() {
            const { fields: { title, authors, description, cover }, handleSubmit, closeModal, onSave } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "书名" }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "作者" }, authors)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["c" /* Textarea */], Object.assign({ placeholder: "描述" }, description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "封面" }, cover)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Modal_ModalFooter__["a" /* default */], { onConfirm: handleSubmit(data => {
                    onSave(data);
                }), onCancel: closeModal }));
        }
    }]);

    return BookMetaForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
BookMetaForm = __decorate([__WEBPACK_IMPORTED_MODULE_2_better_redux_form___default()({
    form: 'bookMeta',
    fields: ['title', 'authors', 'description', 'cover']
})], BookMetaForm);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => state, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"], closeModal: __WEBPACK_IMPORTED_MODULE_3__actions__["closeModal"] })(BookMetaForm);

/***/ })

};;
//# sourceMappingURL=chunk.5.js.map