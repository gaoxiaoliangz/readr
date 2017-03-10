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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _webAPI = __webpack_require__(21);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _AddBookForm = __webpack_require__(366);

var _AddBookForm2 = _interopRequireDefault(_AddBookForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBook = function (_Component) {
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
            var _this2 = this;

            _webAPI2.default.addBook(data).then(function (result) {
                _this2.props.sendNotification('添加成功');
                _this2.props.resetForm('addBook');
            }, function (error) {
                _this2.props.sendNotification(error.message, 'error', 0);
            });
        }
    }, {
        key: 'addAuthor',
        value: function addAuthor(data) {
            var _this3 = this;

            _webAPI2.default.addAuthor(data).then(function (result) {
                _this3.props.sendNotification('添加成功');
                var id = result.json.ops[0]._id;
                var name = result.json.ops[0].name;
                _this3.props.initializeForm('addBook', {
                    authors: [{
                        name: name,
                        value: id
                    }],
                    author: ''
                });
                _this3.props.closeModal();
            }, function (error) {
                _this3.props.sendNotification(error.message, 'error');
            });
        }
    }, {
        key: 'handleAuthorValueChange',
        value: function handleAuthorValueChange(query) {
            if (!(0, _isEmpty3.default)(query)) {
                this.props.fetchAuthors({
                    q: query
                });
            }
        }
    }, {
        key: 'handleTitleValueChange',
        value: function handleTitleValueChange(newVal) {
            if (!(0, _isEmpty3.default)(newVal)) {
                this.props.searchDoubanBooks(newVal);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, '\u6DFB\u52A0\u4E66\u7C4D'), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, onSaveBook: this.addBook }));
        }
    }]);

    return AddBook;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        notification: state.components.notification,
        elements: state.elements
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, resetForm: _actions.resetForm, initializeForm: _actions.initializeForm })(AddBook);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AddBook, 'AddBook', '/Users/liang/Projects/readr/src/routes/AddBook/AddBook.tsx');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/routes/AddBook/AddBook.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/AddBook/AddBook.tsx');
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

/***/ 365:
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

var _Input = __webpack_require__(90);

var _Input2 = _interopRequireDefault(_Input);

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

var AddAuthorForm = function (_Component) {
    _inherits(AddAuthorForm, _Component);

    function AddAuthorForm(props) {
        _classCallCheck(this, AddAuthorForm);

        return _possibleConstructorReturn(this, (AddAuthorForm.__proto__ || Object.getPrototypeOf(AddAuthorForm)).call(this, props));
    }

    _createClass(AddAuthorForm, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                name = _props$fields.name,
                slug = _props$fields.slug,
                description = _props$fields.description,
                handleSubmit = _props.handleSubmit,
                closeModal = _props.closeModal,
                onSave = _props.onSave;

            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "名字" }, name)), _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "唯一标识" }, slug)), _react2.default.createElement(_Input2.default, Object.assign({ placeholder: "描述" }, description)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
                    onSave(data);
                }), onCancel: closeModal }));
        }
    }]);

    return AddAuthorForm;
}(_react.Component);
AddAuthorForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addAuthor',
    fields: ['name', 'slug', 'description']
})], AddAuthorForm);

var _default = (0, _reactRedux.connect)(function (state) {
    return state;
}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddAuthorForm.tsx");

    __REACT_HOT_LOADER__.register(AddAuthorForm, "AddAuthorForm", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddAuthorForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddAuthorForm.tsx");
}();

;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(47);

var _map3 = _interopRequireDefault(_map2);

var _omit2 = __webpack_require__(7);

var _omit3 = _interopRequireDefault(_omit2);

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

var _actions = __webpack_require__(15);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _form = __webpack_require__(85);

var _AddAuthorForm = __webpack_require__(365);

var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);

var _FileUploader = __webpack_require__(333);

var _FileUploader2 = _interopRequireDefault(_FileUploader);

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

var AddBookForm = function (_Component) {
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
            var data = {
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
                content: _react2.default.createElement(_AddAuthorForm2.default, { onSave: this.props.onSaveAuthor })
            });
            this.props.initializeForm('addAuthor', { name: value });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$fields = _props.fields,
                title = _props$fields.title,
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

            var selectedAuthorIds = authors.get([]).map(function (a) {
                return a.value;
            });
            var filteredAuthorOptions = authorsAsOptions.filter(function (a) {
                return selectedAuthorIds.indexOf(a.value) === -1;
            });
            return _react2.default.createElement("div", null, _react2.default.createElement(_form.SelectizeInput, { placeholder: "书名", value: title.value, values: [], options: doubanBooksAsOptions, onInputChange: function onInputChange(newValue) {
                    onTitleInputChange(newValue);
                    title.set(newValue);
                }, useValue: true, onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form.SelectizeInput, { placeholder: "作者", value: author.get(), values: authors.get([]), options: filteredAuthorOptions, onInputChange: function onInputChange(newValue) {
                    onAuthorInputChange(newValue);
                    author.set(newValue);
                }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_form.Textarea, Object.assign({ placeholder: "描述" }, description)), !(0, _isEmpty3.default)(file.value) ? _react2.default.createElement("div", null, _react2.default.createElement("span", null, file.value.originalname, " "), _react2.default.createElement(_form.Button, { color: "white", onClick: function onClick() {
                    file.set({});
                } }, "\u91CD\u65B0\u9009\u62E9")) : _react2.default.createElement("div", null, _react2.default.createElement(_FileUploader2.default, { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
                    file.set(result);
                }, onError: function onError(error) {
                    _this2.props.sendNotification(error.message, 'error');
                } }, _react2.default.createElement(_form.Button, { color: "white" }, "\u9009\u62E9\u4E66\u7C4D")), _react2.default.createElement("p", null, "\u652F\u6301 txt \u548C epub \u683C\u5F0F")), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
                    var postData = (0, _omit3.default)(data, ['author']);
                    postData['authors'] = (0, _map3.default)(postData['authors'], 'value');
                    postData['file'] = data.file._id;
                    onSaveBook(postData);
                }) }, "\u6DFB\u52A0"));
        }
    }]);

    return AddBookForm;
}(_react.Component);
AddBookForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addBook',
    fields: ['title', 'author', 'authors', 'cover', 'description', 'file'],
    destroyOnUnmount: true
})], AddBookForm);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        routing: state.routing.locationBeforeTransitions,
        doubanBooksAsOptions: selectors.doubanBooksAsOptions('search')(state),
        authorsAsOptions: selectors.authorsAsOptions('search')(state)
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, initializeForm: _actions.initializeForm })(AddBookForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddBookForm.tsx");

    __REACT_HOT_LOADER__.register(AddBookForm, "AddBookForm", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddBookForm.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddBookForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/AddBook/components/AddBookForm.tsx");
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.11.js.map