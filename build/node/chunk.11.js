exports.ids = [11];
exports.modules = {

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _AddBookForm = __webpack_require__(366);

var _AddBookForm2 = _interopRequireDefault(_AddBookForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AddBook = class AddBook extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            slData: {
                author: {}
            }
        };
        this.handleTitleValueChange = this.handleTitleValueChange.bind(this);
        this.handleAuthorValueChange = this.handleAuthorValueChange.bind(this);
        this.addAuthor = this.addAuthor.bind(this);
        this.addBook = this.addBook.bind(this);
    }
    addBook(data) {
        _webAPI2.default.addBook(data).then(result => {
            this.props.sendNotification('添加成功');
            this.props.resetForm('addBook');
        }, error => {
            this.props.sendNotification(error.message, 'error', 0);
        });
    }
    addAuthor(data) {
        _webAPI2.default.addAuthor(data).then(result => {
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
    handleAuthorValueChange(query) {
        if (!(0, _isEmpty3.default)(query)) {
            this.props.fetchAuthors({
                q: query
            });
        }
    }
    handleTitleValueChange(newVal) {
        if (!(0, _isEmpty3.default)(newVal)) {
            this.props.searchDoubanBooks(newVal);
        }
    }
    render() {
        return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, "\u6DFB\u52A0\u4E66\u7C4D"), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, onSaveBook: this.addBook }));
    }
};

const mapStateToProps = state => {
    return {
        notification: state.components.notification,
        elements: state.elements
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, resetForm: _actions.resetForm, initializeForm: _actions.initializeForm })(AddBook);

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(329);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let FileUploader = class FileUploader extends _react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    handleFileChange(e) {
        var _props = this.props;
        const url = _props.url,
              onComplete = _props.onComplete,
              onSuccess = _props.onSuccess,
              onError = _props.onError;

        const files = e.target.files;
        const data = new FormData();
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
            complete: data2 => {
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
    componentDidMount() {}
    render() {
        var _props2 = this.props;
        const url = _props2.url,
              accept = _props2.accept,
              noAjax = _props2.noAjax,
              children = _props2.children,
              name = _props2.name,
              multiple = _props2.multiple,
              style = _props2.style;
        // 如果页面上有两个上传组件可能会出错
        // input value 设为空会使得每次选中文件后都触发 onChange

        return _react2.default.createElement("div", { className: "file-trigger", onClick: e => {
                if (!noAjax) {
                    (0, _jquery2.default)(this.fileInput).click();
                }
            }, style: Object.assign({
                display: 'inline-block'
            }, style) }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: _ref => {
                this.fileInput = _ref;
            }, onChange: e => {
                if (!noAjax) {
                    this.handleFileChange(e);
                }
            }, accept: accept || '.*' }), _react2.default.createElement("input", { type: "submit", value: "提交" })), children);
    }
};
exports.default = FileUploader;

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

exports.default = _FileUploader2.default;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

var _actions = __webpack_require__(13);

var _Input = __webpack_require__(89);

var _Input2 = _interopRequireDefault(_Input);

var _ModalFooter = __webpack_require__(86);

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AddAuthorForm = class AddAuthorForm extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props,
            _props$fields = _props.fields;
        const name = _props$fields.name,
              slug = _props$fields.slug,
              description = _props$fields.description,
              handleSubmit = _props.handleSubmit,
              closeModal = _props.closeModal,
              onSave = _props.onSave;

        return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "名字" }, name)), _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "唯一标识" }, slug)), _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "描述" }, description)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(data => {
                onSave(data);
            }), onCancel: closeModal }));
    }
};
AddAuthorForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addAuthor',
    fields: ['name', 'slug', 'description']
})], AddAuthorForm);
exports.default = (0, _reactRedux.connect)(state => state, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(49);

var _map3 = _interopRequireDefault(_map2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

var _actions = __webpack_require__(13);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _form = __webpack_require__(84);

var _AddAuthorForm = __webpack_require__(365);

var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);

var _FileUploader = __webpack_require__(333);

var _FileUploader2 = _interopRequireDefault(_FileUploader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AddBookForm = class AddBookForm extends _react.Component {
    constructor(props) {
        super(props);
        this.handleTitleOptionClick = this.handleTitleOptionClick.bind(this);
        this.handleAddNewAuthor = this.handleAddNewAuthor.bind(this);
    }
    handleTitleOptionClick(option) {
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
    handleAddNewAuthor(value) {
        this.props.openModal({
            title: '添加作者',
            content: _react2.default.createElement(_AddAuthorForm2.default, { onSave: this.props.onSaveAuthor })
        });
        this.props.initializeForm('addAuthor', { name: value });
    }
    render() {
        var _props = this.props,
            _props$fields = _props.fields;
        const title = _props$fields.title,
              author = _props$fields.author,
              authors = _props$fields.authors,
              cover = _props$fields.cover,
              description = _props$fields.description,
              file = _props$fields.file,
              handleSubmit = _props.handleSubmit,
              onTitleInputChange = _props.onTitleInputChange,
              onAuthorInputChange = _props.onAuthorInputChange,
              doubanBooksAsOptions = _props.doubanBooksAsOptions,
              authorsAsOptions = _props.authorsAsOptions,
              onSaveBook = _props.onSaveBook;

        const selectedAuthorIds = authors.get([]).map(a => a.value);
        const filteredAuthorOptions = authorsAsOptions.filter(a => {
            return selectedAuthorIds.indexOf(a.value) === -1;
        });
        return _react2.default.createElement("div", null, _react2.default.createElement(_form.SelectizeInput, { placeholder: "书名", value: title.value, values: [], options: doubanBooksAsOptions, onInputChange: newValue => {
                onTitleInputChange(newValue);
                title.set(newValue);
            }, useValue: true, onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "作者", value: author.get(), values: authors.get([]), options: filteredAuthorOptions, onInputChange: newValue => {
                onAuthorInputChange(newValue);
                author.set(newValue);
            }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_form.Textarea, Object.assign({ placeholder: "描述" }, description)), !(0, _isEmpty3.default)(file.value) ? _react2.default.createElement("div", null, _react2.default.createElement("span", null, file.value.originalname, " "), _react2.default.createElement(_form.Button, { color: "white", onClick: () => {
                file.set({});
            } }, "\u91CD\u65B0\u9009\u62E9")) : _react2.default.createElement("div", null, _react2.default.createElement(_FileUploader2.default, { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: result => {
                file.set(result);
            }, onError: error => {
                this.props.sendNotification(error.message, 'error');
            } }, _react2.default.createElement(_form.Button, { color: "white" }, "\u9009\u62E9\u4E66\u7C4D")), _react2.default.createElement("p", null, "\u652F\u6301 txt \u548C epub \u683C\u5F0F")), _react2.default.createElement(_form.Button, { onClick: handleSubmit(data => {
                const postData = (0, _omit3.default)(data, ['author']);
                postData['authors'] = (0, _map3.default)(postData['authors'], 'value');
                postData['file'] = data.file._id;
                onSaveBook(postData);
            }) }, "\u6DFB\u52A0"));
    }
};
AddBookForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addBook',
    fields: ['title', 'author', 'authors', 'cover', 'description', 'file'],
    destroyOnUnmount: true
})], AddBookForm);
const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing.locationBeforeTransitions,
        doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
        authorsAsOptions: selectors.authorsAsOptions('search')(state)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, initializeForm: _actions.initializeForm })(AddBookForm);

/***/ })

};;
//# sourceMappingURL=chunk.11.js.map