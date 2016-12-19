exports.ids = [15];
exports.modules = {

/***/ 220:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUploader = __webpack_require__(342);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FileUploader2.default;

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(220);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
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
	            var _props = this.props;
	            var url = _props.url;
	            var onComplete = _props.onComplete;
	            var onSuccess = _props.onSuccess;
	            var onError = _props.onError;
	
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
	
	            var _props2 = this.props;
	            var url = _props2.url;
	            var accept = _props2.accept;
	            var noAjax = _props2.noAjax;
	            var children = _props2.children;
	            var name = _props2.name;
	            var multiple = _props2.multiple;
	            var style = _props2.style;
	            // 如果页面上有两个上传组件可能会出错
	            // input value 设为空会使得每次选中文件后都触发 onChange
	
	            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
	                    if (!noAjax) {
	                        (0, _jquery2.default)(_this2.fileInput).click();
	                    }
	                }, style: __assign({
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
	
	exports.default = FileUploader;

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _actions = __webpack_require__(90);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _api = __webpack_require__(203);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AddBookForm = __webpack_require__(348);
	
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
	
	            _api2.default.addBook(data).then(function (result) {
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
	
	            _api2.default.addAuthor(data).then(function (result) {
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
	            if (!_lodash2.default.isEmpty(query)) {
	                this.props.fetchAuthors({
	                    q: query
	                });
	            }
	        }
	    }, {
	        key: 'handleTitleValueChange',
	        value: function handleTitleValueChange(newVal) {
	            if (!_lodash2.default.isEmpty(newVal)) {
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, resetForm: _actions.resetForm, initializeForm: _actions.initializeForm })(AddBook);

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _betterReduxForm = __webpack_require__(114);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	var _actions = __webpack_require__(90);
	
	var _selectors = __webpack_require__(110);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _form = __webpack_require__(147);
	
	var _AddAuthorForm = __webpack_require__(349);
	
	var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _FileUploader = __webpack_require__(341);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var title = _props$fields.title;
	            var author = _props$fields.author;
	            var authors = _props$fields.authors;
	            var cover = _props$fields.cover;
	            var description = _props$fields.description;
	            var file = _props$fields.file;
	            var handleSubmit = _props.handleSubmit;
	            var onTitleInputChange = _props.onTitleInputChange;
	            var onAuthorInputChange = _props.onAuthorInputChange;
	            var doubanBooksAsOptions = _props.doubanBooksAsOptions;
	            var authorsAsOptions = _props.authorsAsOptions;
	            var onSaveBook = _props.onSaveBook;
	
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
	                }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), _react2.default.createElement(_form.Input, __assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_form.Textarea, __assign({ placeholder: "描述" }, description)), !_lodash2.default.isEmpty(file.value) ? _react2.default.createElement("div", null, _react2.default.createElement("span", null, file.value.originalname, " "), _react2.default.createElement(_form.Button, { color: "white", onClick: function onClick() {
	                    file.set({});
	                } }, "\u91CD\u65B0\u9009\u62E9")) : _react2.default.createElement("div", null, _react2.default.createElement(_FileUploader2.default, { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
	                    file.set(result);
	                }, onError: function onError(error) {
	                    _this2.props.sendNotification(error.message, 'error');
	                } }, _react2.default.createElement(_form.Button, { color: "white" }, "\u9009\u62E9\u4E66\u7C4D")), _react2.default.createElement("p", null, "\u652F\u6301 txt \u548C epub \u683C\u5F0F")), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.omit(data, ['author']);
	                    postData['authors'] = _lodash2.default.map(postData['authors'], 'value');
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, initializeForm: _actions.initializeForm })(AddBookForm);

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _betterReduxForm = __webpack_require__(114);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	var _actions = __webpack_require__(90);
	
	var _Input = __webpack_require__(152);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ModalFooter = __webpack_require__(146);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
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
	
	var AddAuthorForm = function (_Component) {
	    _inherits(AddAuthorForm, _Component);
	
	    function AddAuthorForm(props) {
	        _classCallCheck(this, AddAuthorForm);
	
	        return _possibleConstructorReturn(this, (AddAuthorForm.__proto__ || Object.getPrototypeOf(AddAuthorForm)).call(this, props));
	    }
	
	    _createClass(AddAuthorForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var slug = _props$fields.slug;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;
	            var closeModal = _props.closeModal;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_Input2.default, __assign({ placeholder: "名字" }, name)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "唯一标识" }, slug)), _react2.default.createElement(_Input2.default, __assign({ placeholder: "描述" }, description)), _react2.default.createElement(_ModalFooter2.default, { onConfirm: handleSubmit(function (data) {
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
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state;
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2KiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHM/MmFlNiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvRmlsZVVwbG9hZGVyLnRzeD9mMjJmIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL0FkZEJvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQXV0aG9yRm9ybS50c3giXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkZpbGVVcGxvYWRlciIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInVybCIsIm9uQ29tcGxldGUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiZmlsZXMiLCJ0YXJnZXQiLCJkYXRhIiwiRm9ybURhdGEiLCJlYWNoIiwia2V5IiwiYXBwZW5kIiwiYWpheCIsInR5cGUiLCJjYWNoZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjb21wbGV0ZSIsImRhdGEyIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJqcVhIUiIsImVycm9yIiwiZXJyb3JUaHJvd24iLCJyZXNwb25zZUpTT04iLCJhY2NlcHQiLCJub0FqYXgiLCJjaGlsZHJlbiIsIm5hbWUiLCJtdWx0aXBsZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmaWxlSW5wdXQiLCJjbGljayIsImRpc3BsYXkiLCJhY3Rpb24iLCJtZXRob2QiLCJlbmNUeXBlIiwiaWQiLCJ1bmRlZmluZWQiLCJyZWYiLCJvbkNoYW5nZSIsIkFkZEJvb2siLCJzbERhdGEiLCJhdXRob3IiLCJoYW5kbGVUaXRsZVZhbHVlQ2hhbmdlIiwiaGFuZGxlQXV0aG9yVmFsdWVDaGFuZ2UiLCJhZGRBdXRob3IiLCJhZGRCb29rIiwidGhlbiIsInNlbmROb3RpZmljYXRpb24iLCJyZXNldEZvcm0iLCJtZXNzYWdlIiwicmVzdWx0IiwianNvbiIsIm9wcyIsIl9pZCIsImluaXRpYWxpemVGb3JtIiwiYXV0aG9ycyIsImNsb3NlTW9kYWwiLCJxdWVyeSIsImlzRW1wdHkiLCJmZXRjaEF1dGhvcnMiLCJxIiwibmV3VmFsIiwic2VhcmNoRG91YmFuQm9va3MiLCJ0aXRsZSIsIm9uVGl0bGVJbnB1dENoYW5nZSIsIm9uQXV0aG9ySW5wdXRDaGFuZ2UiLCJvblNhdmVBdXRob3IiLCJvblNhdmVCb29rIiwibWFwU3RhdGVUb1Byb3BzIiwibm90aWZpY2F0aW9uIiwiY29tcG9uZW50cyIsImVsZW1lbnRzIiwib3Blbk1vZGFsIiwic2VsZWN0b3JzIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJBZGRCb29rRm9ybSIsImhhbmRsZVRpdGxlT3B0aW9uQ2xpY2siLCJoYW5kbGVBZGROZXdBdXRob3IiLCJvcHRpb24iLCJjb3ZlciIsImFkZGl0aW9uYWwiLCJkZXNjcmlwdGlvbiIsInNldFN0YXRlIiwic2xBdXRob3IiLCJ2YWx1ZXMiLCJjb250ZW50Iiwib25TYXZlIiwiZmllbGRzIiwiZmlsZSIsImhhbmRsZVN1Ym1pdCIsImRvdWJhbkJvb2tzQXNPcHRpb25zIiwiYXV0aG9yc0FzT3B0aW9ucyIsInNlbGVjdGVkQXV0aG9ySWRzIiwiZ2V0IiwibWFwIiwiYSIsImZpbHRlcmVkQXV0aG9yT3B0aW9ucyIsImZpbHRlciIsImluZGV4T2YiLCJwbGFjZWhvbGRlciIsIm9wdGlvbnMiLCJvbklucHV0Q2hhbmdlIiwibmV3VmFsdWUiLCJzZXQiLCJ1c2VWYWx1ZSIsIm9uT3B0aW9uQ2xpY2siLCJvblZhbHVlc0NoYW5nZSIsIm9uQWRkTmV3VmFsdWUiLCJvcmlnaW5hbG5hbWUiLCJjb2xvciIsInBvc3REYXRhIiwib21pdCIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50Iiwib3duUHJvcHMiLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsIkFkZEF1dGhvckZvcm0iLCJzbHVnIiwib25Db25maXJtIiwib25DYW5jZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9DOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQVRBLEtBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCQyxPQUFPQyxNQUFsQyxJQUE0QyxVQUFTQyxDQUFULEVBQVk7QUFDbkUsVUFBSyxJQUFJQyxDQUFKLEVBQU9DLElBQUksQ0FBWCxFQUFjQyxJQUFJQyxVQUFVQyxNQUFqQyxFQUF5Q0gsSUFBSUMsQ0FBN0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ2pERCxhQUFJRyxVQUFVRixDQUFWLENBQUo7QUFDQSxjQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtBQUFpQixpQkFBSUgsT0FBT1MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUNiTixFQUFFTSxDQUFGLElBQU9MLEVBQUVLLENBQUYsQ0FBUDtBQURKO0FBRUg7QUFDRCxZQUFPTixDQUFQO0FBQ0gsRUFQRDs7S0FVTVUsWTs7O0FBQ0YsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSUFDVEEsS0FEUzs7QUFFZixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsb0JBQU87QUFERSxVQUFiO0FBR0EsZUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTGU7QUFNbEI7Ozs7MENBQ2dCQyxDLEVBQUc7QUFBQSwwQkFDZ0MsS0FBS0wsS0FEckM7QUFBQSxpQkFDUk0sR0FEUSxVQUNSQSxHQURRO0FBQUEsaUJBQ0hDLFVBREcsVUFDSEEsVUFERztBQUFBLGlCQUNTQyxTQURULFVBQ1NBLFNBRFQ7QUFBQSxpQkFDb0JDLE9BRHBCLFVBQ29CQSxPQURwQjs7QUFFaEIsaUJBQU1DLFFBQVFMLEVBQUVNLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxpQkFBTUUsT0FBTyxJQUFJQyxRQUFKLEVBQWI7QUFDQSxpQkFBSUgsTUFBTWhCLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNsQixrQ0FBRW9CLElBQUYsQ0FBT0osS0FBUCxFQUFjLFVBQVVLLEdBQVYsRUFBZWIsS0FBZixFQUFzQjtBQUNoQ1UsMEJBQUtJLE1BQUwsQ0FBWUQsR0FBWixFQUFpQmIsS0FBakI7QUFDSCxrQkFGRDtBQUdILGNBSkQsTUFLSztBQUNEVSxzQkFBS0ksTUFBTCxDQUFZLE1BQVosRUFBb0JOLE1BQU0sQ0FBTixDQUFwQjtBQUNIO0FBQ0QsOEJBQUVPLElBQUYsQ0FBTztBQUNIWCx5QkFERztBQUVIWSx1QkFBTSxNQUZIO0FBR0hOLDJCQUhHO0FBSUhPLHdCQUFPLEtBSko7QUFLSEMsOEJBQWEsS0FMVjtBQU1IO0FBQ0E7QUFDQUMsOEJBQWEsS0FSVjtBQVNIQyw0QkFBVztBQUNQQyxzQ0FBaUI7QUFEVixrQkFUUjtBQVlIQywyQkFBVSx5QkFBUztBQUNmLHlCQUFJakIsVUFBSixFQUFnQjtBQUNaQSxvQ0FBV2tCLEtBQVg7QUFDSDtBQUNKLGtCQWhCRTtBQWlCSEMsMEJBQVMsaUJBQVVELEtBQVYsRUFBaUJFLFVBQWpCLEVBQTZCQyxLQUE3QixFQUFvQztBQUN6Qyx5QkFBSXBCLFNBQUosRUFBZTtBQUNYQSxtQ0FBVWlCLEtBQVY7QUFDSDtBQUNKLGtCQXJCRTtBQXNCSEksd0JBQU8sZUFBVUQsS0FBVixFQUFpQkQsVUFBakIsRUFBNkJHLFdBQTdCLEVBQTBDO0FBQzdDLHlCQUFJckIsT0FBSixFQUFhO0FBQ1RBLGlDQUFRbUIsTUFBTUcsWUFBZDtBQUNIO0FBQ0o7QUExQkUsY0FBUDtBQTRCSDs7OzZDQUNtQixDQUNuQjs7O2tDQUNRO0FBQUE7O0FBQUEsMkJBQzRELEtBQUsvQixLQURqRTtBQUFBLGlCQUNHTSxHQURILFdBQ0dBLEdBREg7QUFBQSxpQkFDUTBCLE1BRFIsV0FDUUEsTUFEUjtBQUFBLGlCQUNnQkMsTUFEaEIsV0FDZ0JBLE1BRGhCO0FBQUEsaUJBQ3dCQyxRQUR4QixXQUN3QkEsUUFEeEI7QUFBQSxpQkFDa0NDLElBRGxDLFdBQ2tDQSxJQURsQztBQUFBLGlCQUN3Q0MsUUFEeEMsV0FDd0NBLFFBRHhDO0FBQUEsaUJBQ2tEQyxLQURsRCxXQUNrREEsS0FEbEQ7QUFFTDtBQUNBOztBQUNBLG9CQUFRLGdCQUFNQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLEVBQUVDLFdBQVcsY0FBYixFQUE2QkMsU0FBUyxvQkFBSztBQUN0RSx5QkFBSSxDQUFDUCxNQUFMLEVBQWE7QUFDVCwrQ0FBRSxPQUFLUSxTQUFQLEVBQWtCQyxLQUFsQjtBQUNIO0FBQ0osa0JBSjhCLEVBSTVCTCxPQUFPbkQsU0FBUztBQUNmeUQsOEJBQVM7QUFETSxrQkFBVCxFQUVQTixLQUZPLENBSnFCLEVBQTNCLEVBT0osZ0JBQU1DLGFBQU4sQ0FBb0IsTUFBcEIsRUFBNEIsRUFBRU0sUUFBUXRDLEdBQVYsRUFBZXVDLFFBQVEsTUFBdkIsRUFBK0JDLFNBQVMscUJBQXhDLEVBQStEVCxPQUFPSixTQUFTLEVBQVQsR0FBYyxFQUFFVSxTQUFTLE1BQVgsRUFBcEYsRUFBNUIsRUFDSSxnQkFBTUwsYUFBTixDQUFvQixPQUFwQixFQUE2QixFQUFFRixVQUFVQSxRQUFaLEVBQXNCbEIsTUFBTSxNQUE1QixFQUFvQ2lCLE1BQU1BLFFBQVEsTUFBbEQsRUFBMERZLElBQUksYUFBOUQsRUFBNkU3QyxPQUFPK0IsU0FBU2UsU0FBVCxHQUFxQixFQUF6RyxFQUE2R0MsS0FBSyxtQkFBTztBQUFFLDRCQUFLUixTQUFMLEdBQWlCUSxJQUFqQjtBQUF1QixrQkFBbEosRUFBb0pDLFVBQVUscUJBQUs7QUFDeEwseUJBQUksQ0FBQ2pCLE1BQUwsRUFBYTtBQUNULGdDQUFLOUIsZ0JBQUwsQ0FBc0JFLENBQXRCO0FBQ0g7QUFDSixrQkFKd0IsRUFJdEIyQixRQUFRQSxVQUFVLElBSkksRUFBN0IsQ0FESixFQU1JLGdCQUFNTSxhQUFOLENBQW9CLE9BQXBCLEVBQTZCLEVBQUVwQixNQUFNLFFBQVIsRUFBa0JoQixPQUFPLElBQXpCLEVBQTdCLENBTkosQ0FQSSxFQWNKZ0MsUUFkSSxDQUFSO0FBZUg7Ozs7OzttQkFFVW5DLFk7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZjs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FDTW9ELE87OztBQUNGLHNCQUFZbkQsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNUQSxLQURTOztBQUVmLGVBQUtDLEtBQUwsR0FBYTtBQUNUbUQscUJBQVE7QUFDSkMseUJBQVE7QUFESjtBQURDLFVBQWI7QUFLQSxlQUFLQyxzQkFBTCxHQUE4QixNQUFLQSxzQkFBTCxDQUE0QmxELElBQTVCLE9BQTlCO0FBQ0EsZUFBS21ELHVCQUFMLEdBQStCLE1BQUtBLHVCQUFMLENBQTZCbkQsSUFBN0IsT0FBL0I7QUFDQSxlQUFLb0QsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVwRCxJQUFmLE9BQWpCO0FBQ0EsZUFBS3FELE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFyRCxJQUFiLE9BQWY7QUFWZTtBQVdsQjs7OztpQ0FDT1EsSSxFQUFNO0FBQUE7O0FBQ1YsMkJBQUk2QyxPQUFKLENBQVk3QyxJQUFaLEVBQWtCOEMsSUFBbEIsQ0FBdUIsa0JBQVU7QUFDN0Isd0JBQUsxRCxLQUFMLENBQVcyRCxnQkFBWCxDQUE0QixNQUE1QjtBQUNBLHdCQUFLM0QsS0FBTCxDQUFXNEQsU0FBWCxDQUFxQixTQUFyQjtBQUNILGNBSEQsRUFHRyxpQkFBUztBQUNSLHdCQUFLNUQsS0FBTCxDQUFXMkQsZ0JBQVgsQ0FBNEI5QixNQUFNZ0MsT0FBbEMsRUFBMkMsT0FBM0MsRUFBb0QsQ0FBcEQ7QUFDSCxjQUxEO0FBTUg7OzttQ0FDU2pELEksRUFBTTtBQUFBOztBQUNaLDJCQUFJNEMsU0FBSixDQUFjNUMsSUFBZCxFQUFvQjhDLElBQXBCLENBQXlCLGtCQUFVO0FBQy9CLHdCQUFLMUQsS0FBTCxDQUFXMkQsZ0JBQVgsQ0FBNEIsTUFBNUI7QUFDQSxxQkFBTVosS0FBS2UsT0FBT0MsSUFBUCxDQUFZQyxHQUFaLENBQWdCLENBQWhCLEVBQW1CQyxHQUE5QjtBQUNBLHFCQUFNOUIsT0FBTzJCLE9BQU9DLElBQVAsQ0FBWUMsR0FBWixDQUFnQixDQUFoQixFQUFtQjdCLElBQWhDO0FBQ0Esd0JBQUtuQyxLQUFMLENBQVdrRSxjQUFYLENBQTBCLFNBQTFCLEVBQXFDO0FBQ2pDQyw4QkFBUyxDQUFDO0FBQ0ZoQywrQkFBTUEsSUFESjtBQUVGakMsZ0NBQU82QztBQUZMLHNCQUFELENBRHdCO0FBS2pDTSw2QkFBUTtBQUx5QixrQkFBckM7QUFPQSx3QkFBS3JELEtBQUwsQ0FBV29FLFVBQVg7QUFDSCxjQVpELEVBWUcsaUJBQVM7QUFDUix3QkFBS3BFLEtBQUwsQ0FBVzJELGdCQUFYLENBQTRCOUIsTUFBTWdDLE9BQWxDLEVBQTJDLE9BQTNDO0FBQ0gsY0FkRDtBQWVIOzs7aURBQ3VCUSxLLEVBQU87QUFDM0IsaUJBQUksQ0FBQyxpQkFBRUMsT0FBRixDQUFVRCxLQUFWLENBQUwsRUFBdUI7QUFDbkIsc0JBQUtyRSxLQUFMLENBQVd1RSxZQUFYLENBQXdCO0FBQ3BCQyx3QkFBR0g7QUFEaUIsa0JBQXhCO0FBR0g7QUFDSjs7O2dEQUNzQkksTSxFQUFRO0FBQzNCLGlCQUFJLENBQUMsaUJBQUVILE9BQUYsQ0FBVUcsTUFBVixDQUFMLEVBQXdCO0FBQ3BCLHNCQUFLekUsS0FBTCxDQUFXMEUsaUJBQVgsQ0FBNkJELE1BQTdCO0FBQ0g7QUFDSjs7O2tDQUNRO0FBQ0wsb0JBQVEsZ0JBQU1uQyxhQUFOLHlCQUFrQyxFQUFFcUMsT0FBTyxNQUFULEVBQWxDLEVBQ0osZ0JBQU1yQyxhQUFOLENBQW9CLElBQXBCLEVBQTBCLEVBQUVDLFdBQVcsWUFBYixFQUExQixFQUF1RCwwQkFBdkQsQ0FESSxFQUVKLGdCQUFNRCxhQUFOLHdCQUFpQyxFQUFFc0Msb0JBQW9CLEtBQUt0QixzQkFBM0IsRUFBbUR1QixxQkFBcUIsS0FBS3RCLHVCQUE3RSxFQUFzR3VCLGNBQWMsS0FBS3RCLFNBQXpILEVBQW9JdUIsWUFBWSxLQUFLdEIsT0FBckosRUFBakMsQ0FGSSxDQUFSO0FBR0g7Ozs7OztBQUVMLEtBQU11QixrQkFBa0IsU0FBbEJBLGVBQWtCLFFBQVM7QUFDN0IsWUFBTztBQUNIQyx1QkFBY2hGLE1BQU1pRixVQUFOLENBQWlCRCxZQUQ1QjtBQUVIRSxtQkFBVWxGLE1BQU1rRjtBQUZiLE1BQVA7QUFJSCxFQUxEO21CQU1lLHlCQUFRSCxlQUFSLEVBQXlCLEVBQUVyQiwyQ0FBRixFQUFvQnlCLDZCQUFwQixFQUErQlYsNkNBQS9CLEVBQWtETiwrQkFBbEQsRUFBOERHLG1DQUE5RCxFQUE0RVgsNkJBQTVFLEVBQXVGTSx1Q0FBdkYsRUFBekIsRUFBa0lmLE9BQWxJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7S0FBWWtDLFM7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQXRCQSxLQUFJbkcsV0FBWSxhQUFRLFVBQUtBLFFBQWQsSUFBMkJDLE9BQU9DLE1BQWxDLElBQTRDLFVBQVNDLENBQVQsRUFBWTtBQUNuRSxVQUFLLElBQUlDLENBQUosRUFBT0MsSUFBSSxDQUFYLEVBQWNDLElBQUlDLFVBQVVDLE1BQWpDLEVBQXlDSCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRELGFBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGNBQUssSUFBSUksQ0FBVCxJQUFjTCxDQUFkO0FBQWlCLGlCQUFJSCxPQUFPUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLEVBQUVNLENBQUYsSUFBT0wsRUFBRUssQ0FBRixDQUFQO0FBREo7QUFFSDtBQUNELFlBQU9OLENBQVA7QUFDSCxFQVBEO0FBUUEsS0FBSWlHLGFBQWMsYUFBUSxVQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0I1RSxNQUF0QixFQUE4QkksR0FBOUIsRUFBbUN5RSxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJaEcsVUFBVUMsTUFBbEI7QUFBQSxTQUEwQmdHLElBQUlELElBQUksQ0FBSixHQUFROUUsTUFBUixHQUFpQjZFLFNBQVMsSUFBVCxHQUFnQkEsT0FBT3JHLE9BQU93Ryx3QkFBUCxDQUFnQ2hGLE1BQWhDLEVBQXdDSSxHQUF4QyxDQUF2QixHQUFzRXlFLElBQXJIO0FBQUEsU0FBMkhJLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVKLElBQUlHLFFBQVFDLFFBQVIsQ0FBaUJQLFVBQWpCLEVBQTZCNUUsTUFBN0IsRUFBcUNJLEdBQXJDLEVBQTBDeUUsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSWpHLElBQUlnRyxXQUFXN0YsTUFBWCxHQUFvQixDQUFqQyxFQUFvQ0gsS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUM7QUFBaUQsYUFBSXFHLElBQUlMLFdBQVdoRyxDQUFYLENBQVIsRUFBdUJtRyxJQUFJLENBQUNELElBQUksQ0FBSixHQUFRRyxFQUFFRixDQUFGLENBQVIsR0FBZUQsSUFBSSxDQUFKLEdBQVFHLEVBQUVqRixNQUFGLEVBQVVJLEdBQVYsRUFBZTJFLENBQWYsQ0FBUixHQUE0QkUsRUFBRWpGLE1BQUYsRUFBVUksR0FBVixDQUE1QyxLQUErRDJFLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0QsSUFBSSxDQUFKLElBQVNDLENBQVQsSUFBY3ZHLE9BQU80RyxjQUFQLENBQXNCcEYsTUFBdEIsRUFBOEJJLEdBQTlCLEVBQW1DMkUsQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQWVBLEtBQUlNO0FBQUE7O0FBQ0EsMEJBQVloRyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0hBQ1RBLEtBRFM7O0FBRWYsZUFBS2lHLHNCQUFMLEdBQThCLE1BQUtBLHNCQUFMLENBQTRCN0YsSUFBNUIsT0FBOUI7QUFDQSxlQUFLOEYsa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0I5RixJQUF4QixPQUExQjtBQUhlO0FBSWxCOztBQUxEO0FBQUE7QUFBQSxnREFNdUIrRixNQU52QixFQU0rQjtBQUMzQixpQkFBTXZGLE9BQU87QUFDVHdGLHdCQUFPRCxPQUFPRSxVQUFQLENBQWtCRCxLQURoQjtBQUVURSw4QkFBYUgsT0FBT0UsVUFBUCxDQUFrQkMsV0FGdEI7QUFHVGpELHlCQUFROEMsT0FBT0UsVUFBUCxDQUFrQmhEO0FBSGpCLGNBQWI7QUFLQSxrQkFBS3JELEtBQUwsQ0FBV2tFLGNBQVgsQ0FBMEIsU0FBMUIsRUFBcUN0RCxJQUFyQztBQUNBLGtCQUFLMkYsUUFBTCxDQUFjO0FBQ1ZDLDJCQUFVO0FBQ050Ryw0QkFBT2lHLE9BQU9FLFVBQVAsQ0FBa0JoRCxNQURuQjtBQUVOb0QsNkJBQVE7QUFGRjtBQURBLGNBQWQ7QUFNSDtBQW5CRDtBQUFBO0FBQUEsNENBb0JtQnZHLEtBcEJuQixFQW9CMEI7QUFDdEIsa0JBQUtGLEtBQUwsQ0FBV29GLFNBQVgsQ0FBcUI7QUFDakJULHdCQUFPLE1BRFU7QUFFakIrQiwwQkFBUyxnQkFBTXBFLGFBQU4sMEJBQW1DLEVBQUVxRSxRQUFRLEtBQUszRyxLQUFMLENBQVc4RSxZQUFyQixFQUFuQztBQUZRLGNBQXJCO0FBSUEsa0JBQUs5RSxLQUFMLENBQVdrRSxjQUFYLENBQTBCLFdBQTFCLEVBQXVDLEVBQUUvQixNQUFNakMsS0FBUixFQUF2QztBQUNIO0FBMUJEO0FBQUE7QUFBQSxrQ0EyQlM7QUFBQTs7QUFBQSwwQkFDZ0wsS0FBS0YsS0FEckw7QUFBQSx3Q0FDRzRHLE1BREg7QUFBQSxpQkFDYWpDLEtBRGIsaUJBQ2FBLEtBRGI7QUFBQSxpQkFDb0J0QixNQURwQixpQkFDb0JBLE1BRHBCO0FBQUEsaUJBQzRCYyxPQUQ1QixpQkFDNEJBLE9BRDVCO0FBQUEsaUJBQ3FDaUMsS0FEckMsaUJBQ3FDQSxLQURyQztBQUFBLGlCQUM0Q0UsV0FENUMsaUJBQzRDQSxXQUQ1QztBQUFBLGlCQUN5RE8sSUFEekQsaUJBQ3lEQSxJQUR6RDtBQUFBLGlCQUNpRUMsWUFEakUsVUFDaUVBLFlBRGpFO0FBQUEsaUJBQytFbEMsa0JBRC9FLFVBQytFQSxrQkFEL0U7QUFBQSxpQkFDbUdDLG1CQURuRyxVQUNtR0EsbUJBRG5HO0FBQUEsaUJBQ3dIa0Msb0JBRHhILFVBQ3dIQSxvQkFEeEg7QUFBQSxpQkFDOElDLGdCQUQ5SSxVQUM4SUEsZ0JBRDlJO0FBQUEsaUJBQ2dLakMsVUFEaEssVUFDZ0tBLFVBRGhLOztBQUVMLGlCQUFNa0Msb0JBQW9COUMsUUFBUStDLEdBQVIsQ0FBWSxFQUFaLEVBQWdCQyxHQUFoQixDQUFvQjtBQUFBLHdCQUFLQyxFQUFFbEgsS0FBUDtBQUFBLGNBQXBCLENBQTFCO0FBQ0EsaUJBQU1tSCx3QkFBd0JMLGlCQUFpQk0sTUFBakIsQ0FBd0IsYUFBSztBQUN2RCx3QkFBT0wsa0JBQWtCTSxPQUFsQixDQUEwQkgsRUFBRWxILEtBQTVCLE1BQXVDLENBQUMsQ0FBL0M7QUFDSCxjQUY2QixDQUE5QjtBQUdBLG9CQUFRLGdCQUFNb0MsYUFBTixDQUFvQixLQUFwQixFQUEyQixJQUEzQixFQUNKLGdCQUFNQSxhQUFOLHVCQUFvQyxFQUFFa0YsYUFBYSxJQUFmLEVBQXFCdEgsT0FBT3lFLE1BQU16RSxLQUFsQyxFQUF5Q3VHLFFBQVEsRUFBakQsRUFBcURnQixTQUFTVixvQkFBOUQsRUFBb0ZXLGVBQWUsaUNBQVk7QUFDM0k5Qyx3Q0FBbUIrQyxRQUFuQjtBQUNBaEQsMkJBQU1pRCxHQUFOLENBQVVELFFBQVY7QUFDSCxrQkFIK0IsRUFHN0JFLFVBQVUsSUFIbUIsRUFHYkMsZUFBZSxLQUFLN0Isc0JBSFAsRUFBcEMsQ0FESSxFQUtKLGdCQUFNM0QsYUFBTix1QkFBb0MsRUFBRWtGLGFBQWEsSUFBZixFQUFxQnRILE9BQU9tRCxPQUFPNkQsR0FBUCxFQUE1QixFQUEwQ1QsUUFBUXRDLFFBQVErQyxHQUFSLENBQVksRUFBWixDQUFsRCxFQUFtRU8sU0FBU0oscUJBQTVFLEVBQW1HSyxlQUFlLGlDQUFZO0FBQzFKN0MseUNBQW9COEMsUUFBcEI7QUFDQXRFLDRCQUFPdUUsR0FBUCxDQUFXRCxRQUFYO0FBQ0gsa0JBSCtCLEVBRzdCSSxnQkFBZ0I1RCxRQUFRakIsUUFISyxFQUdLOEUsZUFBZSxLQUFLOUIsa0JBSHpCLEVBQXBDLENBTEksRUFTSixnQkFBTTVELGFBQU4sY0FBMkJwRCxTQUFTLEVBQUVzSSxhQUFhLFFBQWYsRUFBVCxFQUFvQ3BCLEtBQXBDLENBQTNCLENBVEksRUFVSixnQkFBTTlELGFBQU4saUJBQThCcEQsU0FBUyxFQUFFc0ksYUFBYSxJQUFmLEVBQVQsRUFBZ0NsQixXQUFoQyxDQUE5QixDQVZJLEVBV0osQ0FBQyxpQkFBRWhDLE9BQUYsQ0FBVXVDLEtBQUszRyxLQUFmLENBQUQsR0FDTyxnQkFBTW9DLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFDQyxnQkFBTUEsYUFBTixDQUFvQixNQUFwQixFQUE0QixJQUE1QixFQUNJdUUsS0FBSzNHLEtBQUwsQ0FBVytILFlBRGYsRUFFSSxHQUZKLENBREQsRUFJQyxnQkFBTTNGLGFBQU4sZUFBNEIsRUFBRTRGLE9BQU8sT0FBVCxFQUFrQjFGLFNBQVMsbUJBQU07QUFDckRxRSwwQkFBS2UsR0FBTCxDQUFTLEVBQVQ7QUFDSCxrQkFGdUIsRUFBNUIsRUFFUywwQkFGVCxDQUpELENBRFAsR0FRTyxnQkFBTXRGLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkIsSUFBM0IsRUFDQyxnQkFBTUEsYUFBTix5QkFBa0MsRUFBRWhDLEtBQUssWUFBUCxFQUFxQjBCLFFBQVEsWUFBN0IsRUFBMkNHLE1BQU0sV0FBakQsRUFBOEQzQixXQUFXLDJCQUFVO0FBQzdHcUcsMEJBQUtlLEdBQUwsQ0FBUzlELE1BQVQ7QUFDSCxrQkFGNkIsRUFFM0JyRCxTQUFTLHdCQUFTO0FBQ2pCLDRCQUFLVCxLQUFMLENBQVcyRCxnQkFBWCxDQUE0QjlCLE1BQU1nQyxPQUFsQyxFQUEyQyxPQUEzQztBQUNILGtCQUo2QixFQUFsQyxFQUtJLGdCQUFNdkIsYUFBTixlQUE0QixFQUFFNEYsT0FBTyxPQUFULEVBQTVCLEVBQWdELDBCQUFoRCxDQUxKLENBREQsRUFPQyxnQkFBTTVGLGFBQU4sQ0FBb0IsR0FBcEIsRUFBeUIsSUFBekIsRUFBK0IsMkNBQS9CLENBUEQsQ0FuQkgsRUEyQkosZ0JBQU1BLGFBQU4sZUFBNEIsRUFBRUUsU0FBU3NFLGFBQWEsZ0JBQVE7QUFDcEQseUJBQU1xQixXQUFXLGlCQUFFQyxJQUFGLENBQU94SCxJQUFQLEVBQWEsQ0FBQyxRQUFELENBQWIsQ0FBakI7QUFDQXVILDhCQUFTLFNBQVQsSUFBc0IsaUJBQUVoQixHQUFGLENBQU1nQixTQUFTLFNBQVQsQ0FBTixFQUEyQixPQUEzQixDQUF0QjtBQUNBQSw4QkFBUyxNQUFULElBQW1CdkgsS0FBS2lHLElBQUwsQ0FBVTVDLEdBQTdCO0FBQ0FjLGdDQUFXb0QsUUFBWDtBQUNILGtCQUxrQyxDQUFYLEVBQTVCLEVBS1UsY0FMVixDQTNCSSxDQUFSO0FBaUNIO0FBbEVEOztBQUFBO0FBQUEsb0JBQUo7QUFvRUFuQyxlQUFjVixXQUFXLENBQ3JCLCtCQUFLO0FBQ0QrQyxXQUFNLFNBREw7QUFFRHpCLGFBQVEsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixTQUFwQixFQUErQixPQUEvQixFQUF3QyxhQUF4QyxFQUF1RCxNQUF2RCxDQUZQO0FBR0QwQix1QkFBa0I7QUFIakIsRUFBTCxDQURxQixDQUFYLEVBTVh0QyxXQU5XLENBQWQ7QUFPQSxLQUFNaEIsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDL0UsS0FBRCxFQUFRc0ksUUFBUixFQUFxQjtBQUN6QyxZQUFPO0FBQ0hDLGtCQUFTdkksTUFBTXVJLE9BQU4sQ0FBY0MseUJBRHBCO0FBRUgxQiwrQkFBc0IxQixVQUFVMEIsb0JBQVYsQ0FBK0IsUUFBL0IsRUFBeUM5RyxLQUF6QyxDQUZuQjtBQUdIK0csMkJBQWtCM0IsVUFBVTJCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDL0csS0FBckM7QUFIZixNQUFQO0FBS0gsRUFORDttQkFPZSx5QkFBUStFLGVBQVIsRUFBeUIsRUFBRXJCLDJDQUFGLEVBQW9CeUIsNkJBQXBCLEVBQStCbEIsdUNBQS9CLEVBQXpCLEVBQTBFOEIsV0FBMUUsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRmY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQW5CQSxLQUFJOUcsV0FBWSxhQUFRLFVBQUtBLFFBQWQsSUFBMkJDLE9BQU9DLE1BQWxDLElBQTRDLFVBQVNDLENBQVQsRUFBWTtBQUNuRSxVQUFLLElBQUlDLENBQUosRUFBT0MsSUFBSSxDQUFYLEVBQWNDLElBQUlDLFVBQVVDLE1BQWpDLEVBQXlDSCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRELGFBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGNBQUssSUFBSUksQ0FBVCxJQUFjTCxDQUFkO0FBQWlCLGlCQUFJSCxPQUFPUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLEVBQUVNLENBQUYsSUFBT0wsRUFBRUssQ0FBRixDQUFQO0FBREo7QUFFSDtBQUNELFlBQU9OLENBQVA7QUFDSCxFQVBEO0FBUUEsS0FBSWlHLGFBQWMsYUFBUSxVQUFLQSxVQUFkLElBQTZCLFVBQVVDLFVBQVYsRUFBc0I1RSxNQUF0QixFQUE4QkksR0FBOUIsRUFBbUN5RSxJQUFuQyxFQUF5QztBQUNuRixTQUFJQyxJQUFJaEcsVUFBVUMsTUFBbEI7QUFBQSxTQUEwQmdHLElBQUlELElBQUksQ0FBSixHQUFROUUsTUFBUixHQUFpQjZFLFNBQVMsSUFBVCxHQUFnQkEsT0FBT3JHLE9BQU93Ryx3QkFBUCxDQUFnQ2hGLE1BQWhDLEVBQXdDSSxHQUF4QyxDQUF2QixHQUFzRXlFLElBQXJIO0FBQUEsU0FBMkhJLENBQTNIO0FBQ0EsU0FBSSxRQUFPQyxPQUFQLHlDQUFPQSxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9BLFFBQVFDLFFBQWYsS0FBNEIsVUFBL0QsRUFBMkVKLElBQUlHLFFBQVFDLFFBQVIsQ0FBaUJQLFVBQWpCLEVBQTZCNUUsTUFBN0IsRUFBcUNJLEdBQXJDLEVBQTBDeUUsSUFBMUMsQ0FBSixDQUEzRSxLQUNLLEtBQUssSUFBSWpHLElBQUlnRyxXQUFXN0YsTUFBWCxHQUFvQixDQUFqQyxFQUFvQ0gsS0FBSyxDQUF6QyxFQUE0Q0EsR0FBNUM7QUFBaUQsYUFBSXFHLElBQUlMLFdBQVdoRyxDQUFYLENBQVIsRUFBdUJtRyxJQUFJLENBQUNELElBQUksQ0FBSixHQUFRRyxFQUFFRixDQUFGLENBQVIsR0FBZUQsSUFBSSxDQUFKLEdBQVFHLEVBQUVqRixNQUFGLEVBQVVJLEdBQVYsRUFBZTJFLENBQWYsQ0FBUixHQUE0QkUsRUFBRWpGLE1BQUYsRUFBVUksR0FBVixDQUE1QyxLQUErRDJFLENBQW5FO0FBQXhFLE1BQ0wsT0FBT0QsSUFBSSxDQUFKLElBQVNDLENBQVQsSUFBY3ZHLE9BQU80RyxjQUFQLENBQXNCcEYsTUFBdEIsRUFBOEJJLEdBQTlCLEVBQW1DMkUsQ0FBbkMsQ0FBZCxFQUFxREEsQ0FBNUQ7QUFDSCxFQUxEOztBQVlBLEtBQUlnRDtBQUFBOztBQUNBLDRCQUFZMUksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTO0FBRWxCOztBQUhEO0FBQUE7QUFBQSxrQ0FJUztBQUFBLDBCQUM2RSxLQUFLQSxLQURsRjtBQUFBLHdDQUNHNEcsTUFESDtBQUFBLGlCQUNhekUsSUFEYixpQkFDYUEsSUFEYjtBQUFBLGlCQUNtQndHLElBRG5CLGlCQUNtQkEsSUFEbkI7QUFBQSxpQkFDeUJyQyxXQUR6QixpQkFDeUJBLFdBRHpCO0FBQUEsaUJBQ3dDUSxZQUR4QyxVQUN3Q0EsWUFEeEM7QUFBQSxpQkFDc0QxQyxVQUR0RCxVQUNzREEsVUFEdEQ7QUFBQSxpQkFDa0V1QyxNQURsRSxVQUNrRUEsTUFEbEU7O0FBRUwsb0JBQVEsZ0JBQU1yRSxhQUFOLENBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQ0osZ0JBQU1BLGFBQU4sa0JBQTJCcEQsU0FBUyxFQUFFc0ksYUFBYSxJQUFmLEVBQVQsRUFBZ0NyRixJQUFoQyxDQUEzQixDQURJLEVBRUosZ0JBQU1HLGFBQU4sa0JBQTJCcEQsU0FBUyxFQUFFc0ksYUFBYSxNQUFmLEVBQVQsRUFBa0NtQixJQUFsQyxDQUEzQixDQUZJLEVBR0osZ0JBQU1yRyxhQUFOLGtCQUEyQnBELFNBQVMsRUFBRXNJLGFBQWEsSUFBZixFQUFULEVBQWdDbEIsV0FBaEMsQ0FBM0IsQ0FISSxFQUlKLGdCQUFNaEUsYUFBTix3QkFBaUMsRUFBRXNHLFdBQVc5QixhQUFhLGdCQUFRO0FBQzNESCw0QkFBTy9GLElBQVA7QUFDSCxrQkFGeUMsQ0FBYixFQUV6QmlJLFVBQVV6RSxVQUZlLEVBQWpDLENBSkksQ0FBUjtBQU9IO0FBYkQ7O0FBQUE7QUFBQSxvQkFBSjtBQWVBc0UsaUJBQWdCcEQsV0FBVyxDQUN2QiwrQkFBSztBQUNEK0MsV0FBTSxXQURMO0FBRUR6QixhQUFRLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsYUFBakI7QUFGUCxFQUFMLENBRHVCLENBQVgsRUFLYjhCLGFBTGEsQ0FBaEI7bUJBTWUseUJBQVE7QUFBQSxZQUFTekksS0FBVDtBQUFBLEVBQVIsRUFBd0IsRUFBRTBELDJDQUFGLEVBQW9CUywrQkFBcEIsRUFBeEIsRUFBMERzRSxhQUExRCxDIiwiZmlsZSI6IjE1LjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqcXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDIyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDEzIDE1XG4gKiovIiwiaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuL0ZpbGVVcGxvYWRlcic7XG5leHBvcnQgZGVmYXVsdCBGaWxlVXBsb2FkZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ZpbGVVcGxvYWRlci9pbmRleC50c1xuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5jbGFzcyBGaWxlVXBsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIG9uQ29tcGxldGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIOWmguaenOi/meS5iOiuvue9riBjb250ZW50VHlwZSDkvJrlr7zoh7TkuI3lrZjlnKggYm91bmRhcnkg55qE6Zeu6aKYLCDpnIDopoHorr7nva7kuLogZmFsc2VcbiAgICAgICAgICAgIC8vIGNvbnRlbnRUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogZGF0YTIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YTIsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoZGF0YTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoanFYSFIucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHVybCwgYWNjZXB0LCBub0FqYXgsIGNoaWxkcmVuLCBuYW1lLCBtdWx0aXBsZSwgc3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIC8vIOWmguaenOmhtemdouS4iuacieS4pOS4quS4iuS8oOe7hOS7tuWPr+iDveS8muWHuumUmVxuICAgICAgICAvLyBpbnB1dCB2YWx1ZSDorr7kuLrnqbrkvJrkvb/lvpfmr4/mrKHpgInkuK3mlofku7blkI7pg73op6blj5Egb25DaGFuZ2VcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZpbGUtdHJpZ2dlclwiLCBvbkNsaWNrOiBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuZmlsZUlucHV0KS5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHN0eWxlOiBfX2Fzc2lnbih7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgIH0sIHN0eWxlKSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IHVybCwgbWV0aG9kOiBcInBvc3RcIiwgZW5jVHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIHN0eWxlOiBub0FqYXggPyB7fSA6IHsgZGlzcGxheTogJ25vbmUnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBtdWx0aXBsZTogbXVsdGlwbGUsIHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBuYW1lIHx8ICdmaWxlJywgaWQ6IFwidXBsb2FkLWZpbGVcIiwgdmFsdWU6IG5vQWpheCA/IHVuZGVmaW5lZCA6ICcnLCByZWY6IHJlZiA9PiB7IHRoaXMuZmlsZUlucHV0ID0gcmVmOyB9LCBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgYWNjZXB0OiBhY2NlcHQgfHwgJy4qJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCLmj5DkuqRcIiB9KSksXG4gICAgICAgICAgICBjaGlsZHJlbikpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIG9wZW5Nb2RhbCwgc2VhcmNoRG91YmFuQm9va3MsIGNsb3NlTW9kYWwsIGZldGNoQXV0aG9ycywgcmVzZXRGb3JtLCBpbml0aWFsaXplRm9ybSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IEFkZEJvb2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9BZGRCb29rRm9ybSc7XG5jbGFzcyBBZGRCb29rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzbERhdGE6IHtcbiAgICAgICAgICAgICAgICBhdXRob3I6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlVGl0bGVWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlVGl0bGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEF1dGhvciA9IHRoaXMuYWRkQXV0aG9yLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWRkQm9vayA9IHRoaXMuYWRkQm9vay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBhZGRCb29rKGRhdGEpIHtcbiAgICAgICAgYXBpLmFkZEJvb2soZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVzZXRGb3JtKCdhZGRCb29rJyk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZEF1dGhvcihkYXRhKSB7XG4gICAgICAgIGFwaS5hZGRBdXRob3IoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcmVzdWx0Lmpzb24ub3BzWzBdLl9pZDtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSByZXN1bHQuanNvbi5vcHNbMF0ubmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZUZvcm0oJ2FkZEJvb2snLCB7XG4gICAgICAgICAgICAgICAgYXV0aG9yczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWRcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgYXV0aG9yOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQXV0aG9yVmFsdWVDaGFuZ2UocXVlcnkpIHtcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQXV0aG9ycyh7XG4gICAgICAgICAgICAgICAgcTogcXVlcnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgICAgIGlmICghXy5pc0VtcHR5KG5ld1ZhbCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VhcmNoRG91YmFuQm9va3MobmV3VmFsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi5re75Yqg5Lmm57GNXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCIgfSwgXCJcXHU2REZCXFx1NTJBMFxcdTRFNjZcXHU3QzREXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRCb29rRm9ybSwgeyBvblRpdGxlSW5wdXRDaGFuZ2U6IHRoaXMuaGFuZGxlVGl0bGVWYWx1ZUNoYW5nZSwgb25BdXRob3JJbnB1dENoYW5nZTogdGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZSwgb25TYXZlQXV0aG9yOiB0aGlzLmFkZEF1dGhvciwgb25TYXZlQm9vazogdGhpcy5hZGRCb29rIH0pKSk7XG4gICAgfVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RhdGUuY29tcG9uZW50cy5ub3RpZmljYXRpb24sXG4gICAgICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2VuZE5vdGlmaWNhdGlvbiwgb3Blbk1vZGFsLCBzZWFyY2hEb3ViYW5Cb29rcywgY2xvc2VNb2RhbCwgZmV0Y2hBdXRob3JzLCByZXNldEZvcm0sIGluaXRpYWxpemVGb3JtIH0pKEFkZEJvb2spO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeFxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZm9ybSBmcm9tICdiZXR0ZXItcmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwsIGluaXRpYWxpemVGb3JtIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIFNlbGVjdGl6ZUlucHV0LCBJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IEFkZEF1dGhvckZvcm0gZnJvbSAnLi9BZGRBdXRob3JGb3JtJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0ZpbGVVcGxvYWRlcic7XG5sZXQgQWRkQm9va0Zvcm0gPSBjbGFzcyBBZGRCb29rRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2sgPSB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBZGROZXdBdXRob3IgPSB0aGlzLmhhbmRsZUFkZE5ld0F1dGhvci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVUaXRsZU9wdGlvbkNsaWNrKG9wdGlvbikge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY292ZXI6IG9wdGlvbi5hZGRpdGlvbmFsLmNvdmVyLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYXV0aG9yOiBvcHRpb24uYWRkaXRpb25hbC5hdXRob3JcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsaXplRm9ybSgnYWRkQm9vaycsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNsQXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi5hZGRpdGlvbmFsLmF1dGhvcixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVBZGROZXdBdXRob3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwoe1xuICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDkvZzogIUnLFxuICAgICAgICAgICAgY29udGVudDogUmVhY3QuY3JlYXRlRWxlbWVudChBZGRBdXRob3JGb3JtLCB7IG9uU2F2ZTogdGhpcy5wcm9wcy5vblNhdmVBdXRob3IgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZUZvcm0oJ2FkZEF1dGhvcicsIHsgbmFtZTogdmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IHsgdGl0bGUsIGF1dGhvciwgYXV0aG9ycywgY292ZXIsIGRlc2NyaXB0aW9uLCBmaWxlIH0sIGhhbmRsZVN1Ym1pdCwgb25UaXRsZUlucHV0Q2hhbmdlLCBvbkF1dGhvcklucHV0Q2hhbmdlLCBkb3ViYW5Cb29rc0FzT3B0aW9ucywgYXV0aG9yc0FzT3B0aW9ucywgb25TYXZlQm9vaywgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQXV0aG9ySWRzID0gYXV0aG9ycy5nZXQoW10pLm1hcChhID0+IGEudmFsdWUpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEF1dGhvck9wdGlvbnMgPSBhdXRob3JzQXNPcHRpb25zLmZpbHRlcihhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZEF1dGhvcklkcy5pbmRleE9mKGEudmFsdWUpID09PSAtMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RpemVJbnB1dCwgeyBwbGFjZWhvbGRlcjogXCLkuablkI1cIiwgdmFsdWU6IHRpdGxlLnZhbHVlLCB2YWx1ZXM6IFtdLCBvcHRpb25zOiBkb3ViYW5Cb29rc0FzT3B0aW9ucywgb25JbnB1dENoYW5nZTogbmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblRpdGxlSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS5zZXQobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIHVzZVZhbHVlOiB0cnVlLCBvbk9wdGlvbkNsaWNrOiB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2sgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGl6ZUlucHV0LCB7IHBsYWNlaG9sZGVyOiBcIuS9nOiAhVwiLCB2YWx1ZTogYXV0aG9yLmdldCgpLCB2YWx1ZXM6IGF1dGhvcnMuZ2V0KFtdKSwgb3B0aW9uczogZmlsdGVyZWRBdXRob3JPcHRpb25zLCBvbklucHV0Q2hhbmdlOiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uQXV0aG9ySW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBhdXRob3Iuc2V0KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCBvblZhbHVlc0NoYW5nZTogYXV0aG9ycy5vbkNoYW5nZSwgb25BZGROZXdWYWx1ZTogdGhpcy5oYW5kbGVBZGROZXdBdXRob3IgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuWwgemdouWbvueJh+WcsOWdgFwiIH0sIGNvdmVyKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRhcmVhLCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuaPj+i/sFwiIH0sIGRlc2NyaXB0aW9uKSksXG4gICAgICAgICAgICAhXy5pc0VtcHR5KGZpbGUudmFsdWUpXG4gICAgICAgICAgICAgICAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS52YWx1ZS5vcmlnaW5hbG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNvbG9yOiBcIndoaXRlXCIsIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnNldCh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIFwiXFx1OTFDRFxcdTY1QjBcXHU5MDA5XFx1NjJFOVwiKSkpXG4gICAgICAgICAgICAgICAgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGVVcGxvYWRlciwgeyB1cmw6IFwiL2FwaS9ib29rc1wiLCBhY2NlcHQ6IFwiLnR4dCwuZXB1YlwiLCBuYW1lOiBcImJvb2stZmlsZVwiLCBvblN1Y2Nlc3M6IHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5zZXQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uRXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJ3aGl0ZVwiIH0sIFwiXFx1OTAwOVxcdTYyRTlcXHU0RTY2XFx1N0M0RFwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1NjUyRlxcdTYzMDEgdHh0IFxcdTU0OEMgZXB1YiBcXHU2ODNDXFx1NUYwRlwiKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogaGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0RGF0YSA9IF8ub21pdChkYXRhLCBbJ2F1dGhvciddKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdERhdGFbJ2F1dGhvcnMnXSA9IF8ubWFwKHBvc3REYXRhWydhdXRob3JzJ10sICd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YVsnZmlsZSddID0gZGF0YS5maWxlLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlQm9vayhwb3N0RGF0YSk7XG4gICAgICAgICAgICAgICAgfSkgfSwgXCJcXHU2REZCXFx1NTJBMFwiKSkpO1xuICAgIH1cbn07XG5BZGRCb29rRm9ybSA9IF9fZGVjb3JhdGUoW1xuICAgIGZvcm0oe1xuICAgICAgICBmb3JtOiAnYWRkQm9vaycsXG4gICAgICAgIGZpZWxkczogWyd0aXRsZScsICdhdXRob3InLCAnYXV0aG9ycycsICdjb3ZlcicsICdkZXNjcmlwdGlvbicsICdmaWxlJ10sXG4gICAgICAgIGRlc3Ryb3lPblVubW91bnQ6IHRydWVcbiAgICB9KVxuXSwgQWRkQm9va0Zvcm0pO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICAgICAgZG91YmFuQm9va3NBc09wdGlvbnM6IHNlbGVjdG9ycy5kb3ViYW5Cb29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpLFxuICAgICAgICBhdXRob3JzQXNPcHRpb25zOiBzZWxlY3RvcnMuYXV0aG9yc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpLFxuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2VuZE5vdGlmaWNhdGlvbiwgb3Blbk1vZGFsLCBpbml0aWFsaXplRm9ybSB9KShBZGRCb29rRm9ybSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL2NvbXBvbmVudHMvQWRkQm9va0Zvcm0udHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmb3JtIGZyb20gJ2JldHRlci1yZWR1eC1mb3JtJztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9JbnB1dCc7XG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTW9kYWwvTW9kYWxGb290ZXInO1xubGV0IEFkZEF1dGhvckZvcm0gPSBjbGFzcyBBZGRBdXRob3JGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IHsgbmFtZSwgc2x1ZywgZGVzY3JpcHRpb24gfSwgaGFuZGxlU3VibWl0LCBjbG9zZU1vZGFsLCBvblNhdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLlkI3lrZdcIiB9LCBuYW1lKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuWUr+S4gOagh+ivhlwiIH0sIHNsdWcpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIF9fYXNzaWduKHsgcGxhY2Vob2xkZXI6IFwi5o+P6L+wXCIgfSwgZGVzY3JpcHRpb24pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWxGb290ZXIsIHsgb25Db25maXJtOiBoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9KSwgb25DYW5jZWw6IGNsb3NlTW9kYWwgfSkpKTtcbiAgICB9XG59O1xuQWRkQXV0aG9yRm9ybSA9IF9fZGVjb3JhdGUoW1xuICAgIGZvcm0oe1xuICAgICAgICBmb3JtOiAnYWRkQXV0aG9yJyxcbiAgICAgICAgZmllbGRzOiBbJ25hbWUnLCAnc2x1ZycsICdkZXNjcmlwdGlvbiddXG4gICAgfSlcbl0sIEFkZEF1dGhvckZvcm0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSwgeyBzZW5kTm90aWZpY2F0aW9uLCBjbG9zZU1vZGFsIH0pKEFkZEF1dGhvckZvcm0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEF1dGhvckZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==