exports.ids = [11];
exports.modules = {

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webAPI__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_AddBookForm__ = __webpack_require__(347);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










let AddBook = function (_Component) {
    _inherits(AddBook, _Component);

    function AddBook(props) {
        _classCallCheck(this, AddBook);

        var _this = _possibleConstructorReturn(this, (AddBook.__proto__ || Object.getPrototypeOf(AddBook)).call(this, props));

        _this.state = {
            slData: {
                author: {}
            }
        };
        _this.handleTitleValueChange = _this.handleTitleValueChange.bind(_this);
        _this.handleAuthorValueChange = _this.handleAuthorValueChange.bind(_this);
        _this.addAuthor = _this.addAuthor.bind(_this);
        _this.addBook = _this.addBook.bind(_this);
        return _this;
    }

    _createClass(AddBook, [{
        key: 'addBook',
        value: function addBook(data) {
            __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].addBook(data).then(result => {
                this.props.sendNotification('添加成功');
                this.props.resetForm('addBook');
            }, error => {
                this.props.sendNotification(error.message, 'error', 0);
            });
        }
    }, {
        key: 'addAuthor',
        value: function addAuthor(data) {
            __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].addAuthor(data).then(result => {
                this.props.sendNotification('添加成功');
                const id = result.json.ops[0]._id;
                const name = result.json.ops[0].name;
                this.props.initializeForm('addBook', {
                    authors: [{
                        name: name,
                        value: id
                    }],
                    author: ''
                });
                this.props.closeModal();
            }, error => {
                this.props.sendNotification(error.message, 'error');
            });
        }
    }, {
        key: 'handleAuthorValueChange',
        value: function handleAuthorValueChange(keyword) {
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(keyword)) {
                this.props.loadAuthors(1, keyword);
            }
        }
    }, {
        key: 'handleTitleValueChange',
        value: function handleTitleValueChange(newVal) {
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(newVal)) {
                this.props.searchDoubanBooks(newVal);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_DocContainer__["a" /* default */], { title: "添加书籍" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: "page-title" }, "\u6DFB\u52A0\u4E66\u7C4D"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_AddBookForm__["a" /* default */], { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, onSaveBook: this.addBook }));
        }
    }]);

    return AddBook;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

const mapStateToProps = state => {
    return {
        notification: state.components.notification,
        elements: state.elements
    };
};
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"], openModal: __WEBPACK_IMPORTED_MODULE_3__actions__["openModal"], searchDoubanBooks: __WEBPACK_IMPORTED_MODULE_4__actions_api__["searchDoubanBooks"], closeModal: __WEBPACK_IMPORTED_MODULE_3__actions__["closeModal"], loadAuthors: __WEBPACK_IMPORTED_MODULE_4__actions_api__["loadAuthors"], resetForm: __WEBPACK_IMPORTED_MODULE_3__actions__["resetForm"], initializeForm: __WEBPACK_IMPORTED_MODULE_3__actions__["initializeForm"] })(AddBook);

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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Input__ = __webpack_require__(78);
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






let AddAuthorForm = function (_Component) {
    _inherits(AddAuthorForm, _Component);

    function AddAuthorForm(props) {
        _classCallCheck(this, AddAuthorForm);

        return _possibleConstructorReturn(this, (AddAuthorForm.__proto__ || Object.getPrototypeOf(AddAuthorForm)).call(this, props));
    }

    _createClass(AddAuthorForm, [{
        key: "render",
        value: function render() {
            const { fields: { name, slug, description }, handleSubmit, closeModal, onSave } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Input__["a" /* default */], Object.assign({ placeholder: "名字" }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Input__["a" /* default */], Object.assign({ placeholder: "唯一标识" }, slug)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Input__["a" /* default */], Object.assign({ placeholder: "描述" }, description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Modal_ModalFooter__["a" /* default */], { onConfirm: handleSubmit(data => {
                    onSave(data);
                }), onCancel: closeModal }));
        }
    }]);

    return AddAuthorForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
AddAuthorForm = __decorate([__WEBPACK_IMPORTED_MODULE_2_better_redux_form___default()({
    form: 'addAuthor',
    fields: ['name', 'slug', 'description']
})], AddAuthorForm);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => state, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"], closeModal: __WEBPACK_IMPORTED_MODULE_3__actions__["closeModal"] })(AddAuthorForm);

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AddAuthorForm__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_FileUploader__ = __webpack_require__(318);
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








let AddBookForm = function (_Component) {
    _inherits(AddBookForm, _Component);

    function AddBookForm(props) {
        _classCallCheck(this, AddBookForm);

        var _this = _possibleConstructorReturn(this, (AddBookForm.__proto__ || Object.getPrototypeOf(AddBookForm)).call(this, props));

        _this.handleTitleOptionClick = _this.handleTitleOptionClick.bind(_this);
        _this.handleAddNewAuthor = _this.handleAddNewAuthor.bind(_this);
        return _this;
    }

    _createClass(AddBookForm, [{
        key: "handleTitleOptionClick",
        value: function handleTitleOptionClick(option) {
            const data = {
                cover: option.additional.cover,
                description: option.additional.description,
                author: option.additional.author
            };
            this.props.initializeForm('addBook', data);
            this.setState({
                slAuthor: {
                    value: option.additional.author,
                    values: []
                }
            });
        }
    }, {
        key: "handleAddNewAuthor",
        value: function handleAddNewAuthor(value) {
            this.props.openModal({
                title: '添加作者',
                content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AddAuthorForm__["a" /* default */], { onSave: this.props.onSaveAuthor })
            });
            this.props.initializeForm('addAuthor', { name: value });
        }
    }, {
        key: "render",
        value: function render() {
            const { fields: { title, author, authors, cover, description, file }, handleSubmit, onTitleInputChange, onAuthorInputChange, doubanBooksAsOptions, authorsAsOptions, onSaveBook } = this.props;
            const selectedAuthorIds = authors.get([]).map(a => a.value);
            const filteredAuthorOptions = authorsAsOptions.filter(a => {
                return selectedAuthorIds.indexOf(a.value) === -1;
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["b" /* SelectizeInput */], { placeholder: "书名", value: title.value, values: [], options: doubanBooksAsOptions, onInputChange: newValue => {
                    onTitleInputChange(newValue);
                    title.set(newValue);
                }, useValue: true, onOptionClick: this.handleTitleOptionClick }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["b" /* SelectizeInput */], { placeholder: "作者", value: author.get(), values: authors.get([]), options: filteredAuthorOptions, onInputChange: newValue => {
                    onAuthorInputChange(newValue);
                    author.set(newValue);
                }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "封面图片地址" }, cover)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["c" /* Textarea */], Object.assign({ placeholder: "描述" }, description)), !__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.isEmpty(file.value) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, file.value.originalname, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { color: "white", onClick: () => {
                    file.set({});
                } }, "\u91CD\u65B0\u9009\u62E9")) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_FileUploader__["a" /* default */], { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: result => {
                    file.set(result);
                }, onError: error => {
                    this.props.sendNotification(error.message, 'error');
                } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { color: "white" }, "\u9009\u62E9\u4E66\u7C4D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "\u652F\u6301 txt \u548C epub \u683C\u5F0F")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { onClick: handleSubmit(data => {
                    const postData = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.omit(data, ['author']);
                    postData['authors'] = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.map(postData['authors'], 'value');
                    postData['file'] = data.file._id;
                    onSaveBook(postData);
                }) }, "\u6DFB\u52A0"));
        }
    }]);

    return AddBookForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
AddBookForm = __decorate([__WEBPACK_IMPORTED_MODULE_2_better_redux_form___default()({
    form: 'addBook',
    fields: ['title', 'author', 'authors', 'cover', 'description', 'file'],
    destroyOnUnmount: true
})], AddBookForm);
const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing.locationBeforeTransitions
    };
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"], openModal: __WEBPACK_IMPORTED_MODULE_3__actions__["openModal"], initializeForm: __WEBPACK_IMPORTED_MODULE_3__actions__["initializeForm"] })(AddBookForm);

/***/ })

};;
//# sourceMappingURL=chunk.11.js.map