exports.ids = [15];
exports.modules = {

/***/ 286:
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.form = undefined;
	
	var _createForm = __webpack_require__(375);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = exports.form = _createForm2.default;

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _reactRedux = __webpack_require__(93);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _actions = __webpack_require__(94);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var formActions = actions.form;
	
	var ElementClass = function (_Component) {
	    _inherits(ElementClass, _Component);
	
	    function ElementClass() {
	        _classCallCheck(this, ElementClass);
	
	        return _possibleConstructorReturn(this, (ElementClass.__proto__ || Object.getPrototypeOf(ElementClass)).apply(this, arguments));
	    }
	
	    return ElementClass;
	}(_react.Component);
	
	var validateForm = function validateForm(fields, formValues, validateFn) {
	    if (validateFn) {
	        var errors = validateFn(formValues);
	        if (!_lodash2.default.isEmpty(errors)) {
	            var fieldsWithErrors = _lodash2.default.mapValues(errors, function (val) {
	                return {
	                    error: val
	                };
	            });
	            return {
	                fields: _lodash2.default.merge({}, fields, fieldsWithErrors),
	                hasError: true
	            };
	        }
	    }
	    return { fields: fields, hasError: false };
	};
	var createForm = function createForm(config) {
	    var fieldsArr = config.fields;
	    var formName = config.form;
	    var validate = config.validate;
	    var destroyOnUnmount = config.destroyOnUnmount;
	
	    return function (WrappedComponent) {
	        var Form = function (_Component2) {
	            _inherits(Form, _Component2);
	
	            function Form() {
	                _classCallCheck(this, Form);
	
	                return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	            }
	
	            _createClass(Form, [{
	                key: 'createField',
	                value: function createField(value, key) {
	                    var change = this.props.change;
	
	                    var setFieldValue = function setFieldValue(val) {
	                        var newVal = val;
	                        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.target) {
	                            newVal = val.target.value || '';
	                        }
	                        change(formName, key, newVal, false, false);
	                    };
	                    var events = {
	                        onChange: function onChange(val) {
	                            return setFieldValue(val);
	                        }
	                    };
	                    return _defineProperty({}, key, {
	                        get: function get(defaultVal) {
	                            return value || defaultVal || '';
	                        },
	                        set: events.onChange,
	                        value: value,
	                        onChange: events.onChange,
	                        events: events
	                    });
	                }
	            }, {
	                key: 'componentDidMount',
	                value: function componentDidMount() {
	                    var defineField = this.props.defineField;
	
	                    fieldsArr.forEach(function (field) {
	                        defineField(formName, field);
	                    });
	                }
	            }, {
	                key: 'componentWillUnmount',
	                value: function componentWillUnmount() {
	                    // TODO
	                    // 生成版本的 React 会在初始化时执行一次 unmount 尚未查明原因
	                    if (destroyOnUnmount) {
	                        this.props.destroy(formName);
	                    }
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    var _this3 = this;
	
	                    var decoratedFields = void 0;
	                    var _props = this.props;
	                    var touch = _props.touch;
	                    var formValues = _props.formValues;
	                    var formDefinition = _props.formDefinition;
	                    var formMeta = _props.formMeta;
	
	                    var fieldsObjArr = _lodash2.default.map(fieldsArr, function (key) {
	                        var fieldValue = formValues[key] || '';
	                        return _this3.createField(fieldValue, key);
	                    });
	                    fieldsObjArr.forEach(function (field) {
	                        decoratedFields = _lodash2.default.assign({}, decoratedFields, field);
	                    });
	                    var collectedValues = {};
	                    formDefinition.forEach(function (def) {
	                        var key = def.name;
	                        collectedValues[key] = formValues[key];
	                    });
	
	                    var _validateForm = validateForm(decoratedFields, collectedValues, validate);
	
	                    var fieldsWithError = _validateForm.fields;
	                    var hasError = _validateForm.hasError;
	
	                    decoratedFields = fieldsWithError;
	                    decoratedFields = _lodash2.default.merge({}, decoratedFields, formMeta);
	                    var handleSubmit = function handleSubmit(fn) {
	                        return function (e) {
	                            touch(formName, formDefinition.map(function (def) {
	                                return def.name;
	                            }));
	                            if (!hasError) {
	                                fn(collectedValues);
	                            }
	                        };
	                    };
	                    return (0, _react.createElement)(WrappedComponent, _lodash2.default.assign({}, this.props, {
	                        fields: decoratedFields,
	                        handleSubmit: handleSubmit
	                    }));
	                }
	            }]);
	
	            return Form;
	        }(_react.Component);
	
	        return (0, _reactRedux.connect)(function (state) {
	            return {
	                form: selectors.form.fullForm(formName)(state),
	                formValues: selectors.form.formValues(formName)(state),
	                formDefinition: selectors.form.formDefinition(formName)(state),
	                formMeta: selectors.form.formMeta(formName)(state)
	            };
	        }, formActions)(Form);
	    };
	};
	exports.default = createForm;

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FileUploader = __webpack_require__(410);
	
	var _FileUploader2 = _interopRequireDefault(_FileUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FileUploader2.default;

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(286);
	
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
	            // 如果页面上有两个上传组件可能会出错
	            // input value 设为空会使得每次选中文件后都触发 onChange
	
	            return _react2.default.createElement("div", { className: "file-trigger", onClick: function onClick(e) {
	                    if (!noAjax) {
	                        (0, _jquery2.default)(_this2.fileInput).click();
	                    }
	                }, style: {
	                    display: 'inline-block'
	                } }, _react2.default.createElement("form", { action: url, method: "post", encType: "multipart/form-data", style: noAjax ? {} : { display: 'none' } }, _react2.default.createElement("input", { multiple: multiple, type: "file", name: name || 'file', id: "upload-file", value: noAjax ? undefined : '', ref: function ref(_ref) {
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

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actions = __webpack_require__(94);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _api = __webpack_require__(269);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _AddBookForm = __webpack_require__(415);
	
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
	                _this2.props.reset('addBook');
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
	                _this3.props.initialize('addBook', {
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加书籍" }, _react2.default.createElement("h1", { className: "page-title" }, "添加书籍"), _react2.default.createElement(_AddBookForm2.default, { onTitleInputChange: this.handleTitleValueChange, onAuthorInputChange: this.handleAuthorValueChange, onSaveAuthor: this.addAuthor, onSaveBook: this.addBook }));
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, searchDoubanBooks: _actions.searchDoubanBooks, closeModal: _actions.closeModal, fetchAuthors: _actions.fetchAuthors, reset: _actions.reset, initialize: _actions.initialize })(AddBook);

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _form = __webpack_require__(374);
	
	var _actions = __webpack_require__(94);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _form2 = __webpack_require__(213);
	
	var _AddAuthorForm = __webpack_require__(416);
	
	var _AddAuthorForm2 = _interopRequireDefault(_AddAuthorForm);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _FileUploader = __webpack_require__(409);
	
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
	            this.props.initialize('addBook', data);
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
	            this.props.initialize('addAuthor', { name: value });
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
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form2.SelectizeInput, { placeholder: "书名", value: title.value, values: [], options: doubanBooksAsOptions, onInputChange: function onInputChange(newValue) {
	                    onTitleInputChange(newValue);
	                    title.set(newValue);
	                }, useValue: true, onOptionClick: this.handleTitleOptionClick }), _react2.default.createElement(_form2.SelectizeInput, { placeholder: "作者", value: author.get(), values: authors.get([]), options: filteredAuthorOptions, onInputChange: function onInputChange(newValue) {
	                    onAuthorInputChange(newValue);
	                    author.set(newValue);
	                }, onValuesChange: authors.onChange, onAddNewValue: this.handleAddNewAuthor }), _react2.default.createElement(_form2.Input, __assign({ placeholder: "封面图片地址" }, cover)), _react2.default.createElement(_form2.Textarea, __assign({ placeholder: "描述" }, description)), !_lodash2.default.isEmpty(file.value) ? _react2.default.createElement("div", null, _react2.default.createElement("span", null, file.value.originalname, " "), _react2.default.createElement(_form2.Button, { color: "white", onClick: function onClick() {
	                    file.set({});
	                } }, "重新选择")) : _react2.default.createElement("div", null, _react2.default.createElement(_FileUploader2.default, { url: "/api/books", accept: ".txt,.epub", name: "book-file", onSuccess: function onSuccess(result) {
	                    file.set(result);
	                }, onError: function onError(error) {
	                    _this2.props.sendNotification(error.message, 'error');
	                } }, _react2.default.createElement(_form2.Button, { color: "white" }, "选择书籍")), _react2.default.createElement("p", null, "支持 txt 和 epub 格式")), _react2.default.createElement(_form2.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.omit(data, ['author']);
	                    postData['authors'] = _lodash2.default.map(postData['authors'], 'value');
	                    postData['file'] = data.file._id;
	                    onSaveBook(postData);
	                }) }, "添加"));
	        }
	    }]);
	
	    return AddBookForm;
	}(_react.Component);
	AddBookForm = __decorate([(0, _form.form)({
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, openModal: _actions.openModal, initialize: _actions.initialize })(AddBookForm);

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _form = __webpack_require__(374);
	
	var _actions = __webpack_require__(94);
	
	var _Input = __webpack_require__(218);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ModalFooter = __webpack_require__(212);
	
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
	AddAuthorForm = __decorate([(0, _form.form)({
	    form: 'addAuthor',
	    fields: ['name', 'slug', 'description']
	})], AddAuthorForm);
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state;
	}, { sendNotification: _actions.sendNotification, closeModal: _actions.closeModal })(AddAuthorForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcXVlcnlcIj8wYjc2KiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2luZGV4LnRzPzkzYzkqIiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2Zvcm0vY3JlYXRlRm9ybS50c3g/NzJhOCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL2luZGV4LnRzPzJhZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZWxlbWVudHMvRmlsZVVwbG9hZGVyL0ZpbGVVcGxvYWRlci50c3g/ZjIyZiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9BZGRCb29rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEJvb2tGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEF1dGhvckZvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9DOzs7Ozs7Ozs7Ozs7OztBQ0VBOzs7Ozs7QUFBTyxLQUF1QiwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUI7O0FBQ2xCOztBQUNmOzs7O0FBQ2Y7O0tBQW9DOztBQUNwQzs7S0FBd0M7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEtBQWlCLGNBQVUsUUFvQjNCOztLQUNDOzs7Ozs7Ozs7Ozs7QUFRRCxLQUFrQixlQUFHLHNCQUFPLFFBQVksWUFBWTtBQUMvQyxTQUFZLFlBQUU7QUFDZixhQUFZLFNBQWEsV0FBWTtBQUVsQyxhQUFDLENBQUUsaUJBQVEsUUFBUyxTQUFFO0FBQ3ZCLGlCQUFzQixvQ0FBYyxVQUFPLFFBQUs7QUFDeEM7QUFDQyw0QkFFVDtBQUhTO0FBR1AsY0FKd0I7QUFNcEI7QUFDRSx5QkFBRyxpQkFBTSxNQUFHLElBQVEs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UztBQUN0RCx1QkFDaEI7QUFKSSxFQUFELElBSUg7QUEwSEYsS0FBcUIsa0JBQUcseUJBQU0sT0FBVTtBQUNoQztBQUNHLGtCQUFPLE1BQVEsUUFBMEI7QUFDNUIsK0JBQVcsVUFBcUIscUJBQVUsVUFBTztBQUNyRCwyQkFBVyxVQUFpQixpQkFBVSxVQUUxRDtBQUxTO0FBT1Q7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQWtCLDZDQUFXLCtCQUM5QixtQ0FBYSxhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLMEI7Ozs7QUFDSDs7QUFDRDs7QUFDaUM7O0FBQzFCOzs7O0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjdEO0FBQXFDOztBQUVuQyw0QkFBaUI7QUFDZjs7OEhBQ0Y7QUFFTTs7Ozs7QUFDRSwwQkFHRSxLQUFNO3dDQUZKO2lCQUFNO2lCQUFNO2lCQUFlO2lCQUN2QjtpQkFBWTtpQkFDekI7O0FBRU0sb0JBQ0wsOEJBQUksYUFDRixnQkFBTSwwQ0FBWSxhQUFLLFFBQWEsUUFDcEMsZ0JBQU0sMENBQVksYUFBTyxVQUFhLFFBQ3RDLGdCQUFNLDBDQUFZLGFBQUssUUFBb0IsK0JBQy9CLHVDQUNELHdCQUFtQjtBQUNwQiw0QkFDUjtBQUFHLGtCQUZvQixHQUdmLFVBSWhCLFlBUk07QUFTUDs7Ozs7QUE5QkQ7QUFDTSxXQUFhO0FBQ1gsYUFBRSxDQUFPLFFBQVEsUUFDdkI7QUFISSxFQUFELElBZ0NMOztBQUNPLFlBQVM7RUFETSxFQUVwQixFQUFrQiw2Q0FDbkIsbUNBQWUsZSIsImZpbGUiOiIxNS4xNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpxdWVyeVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwianF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMSAxMyAxNVxuICoqLyIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlRm9ybSdcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG5jb25zdCBmb3JtQWN0aW9ucyA9IGFjdGlvbnMuZm9ybVxuXG5pbnRlcmZhY2UgRm9ybUNvbmZpZyB7XG4gIGZvcm06IHN0cmluZ1xuICBmaWVsZHM6IHN0cmluZ1tdXG4gIHZhbGlkYXRlPzogKHZhbHVlczogYW55KSA9PiBhbnlcbiAgZGVzdHJveU9uVW5tb3VudD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIGNoYW5nZTogdHlwZW9mIGFjdGlvbnMuY2hhbmdlXG4gIHRvdWNoOiB0eXBlb2YgYWN0aW9ucy50b3VjaFxuICBkZWZpbmVGaWVsZDogdHlwZW9mIGFjdGlvbnMuZGVmaW5lRmllbGRcbiAgZGVzdHJveTogdHlwZW9mIGFjdGlvbnMuZGVzdHJveVxuICBmb3JtOiBhbnlcbiAgZm9ybVZhbHVlczogYW55XG4gIGZvcm1NZXRhOiBhbnlcbiAgZm9ybURlZmluaXRpb246IGFueVxufVxuXG5jbGFzcyBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbn1cblxuaW50ZXJmYWNlIENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciB7XG4gIC8vIFRPRE86IHdoeSBzbz9cbiAgLy8gPFQgZXh0ZW5kcyAodHlwZW9mIEVsZW1lbnRDbGFzcyk+KGNvbmZpZzogRm9ybUNvbmZpZyk6IFRcbiAgPFQgZXh0ZW5kcyBGdW5jdGlvbj4oY29uZmlnOiBGb3JtQ29uZmlnKTogVFxufVxuXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSAoZmllbGRzLCBmb3JtVmFsdWVzLCB2YWxpZGF0ZUZuKSA9PiB7XG4gIGlmICh2YWxpZGF0ZUZuKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVGbihmb3JtVmFsdWVzKVxuXG4gICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgY29uc3QgZmllbGRzV2l0aEVycm9ycyA9IF8ubWFwVmFsdWVzKGVycm9ycywgdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkczogXy5tZXJnZSh7fSwgZmllbGRzLCBmaWVsZHNXaXRoRXJyb3JzKSxcbiAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBmaWVsZHMsIGhhc0Vycm9yOiBmYWxzZSB9XG59XG5cbmNvbnN0IGNyZWF0ZUZvcm06IENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciA9IChjb25maWc6IEZvcm1Db25maWcpID0+IHtcbiAgY29uc3QgeyBmaWVsZHM6IGZpZWxkc0FyciwgZm9ybTogZm9ybU5hbWUsIHZhbGlkYXRlLCBkZXN0cm95T25Vbm1vdW50IH0gPSBjb25maWdcblxuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIHt9PiB7XG5cbiAgICAgIGNyZWF0ZUZpZWxkKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBjaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdmFsID0+IHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdmFsXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC50YXJnZXQpIHtcbiAgICAgICAgICAgIG5ld1ZhbCA9IHZhbC50YXJnZXQudmFsdWUgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlKGZvcm1OYW1lLCBrZXksIG5ld1ZhbCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgICAgIG9uQ2hhbmdlOiB2YWwgPT4gc2V0RmllbGRWYWx1ZSh2YWwpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBnZXQ6IChkZWZhdWx0VmFsPykgPT4gdmFsdWUgfHwgZGVmYXVsdFZhbCB8fCAnJyxcbiAgICAgICAgICAgIHNldDogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgZXZlbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGRlZmluZUZpZWxkIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGZpZWxkc0Fyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWZpbmVGaWVsZChmb3JtTmFtZSwgZmllbGQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vIOeUn+aIkOeJiOacrOeahCBSZWFjdCDkvJrlnKjliJ3lp4vljJbml7bmiafooYzkuIDmrKEgdW5tb3VudCDlsJrmnKrmn6XmmI7ljp/lm6BcbiAgICAgICAgaWYgKGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmRlc3Ryb3koZm9ybU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGVjb3JhdGVkRmllbGRzXG4gICAgICAgIGNvbnN0IHsgdG91Y2gsIGZvcm1WYWx1ZXMsIGZvcm1EZWZpbml0aW9uLCBmb3JtTWV0YSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc09iakFyciA9IF8ubWFwKGZpZWxkc0Fyciwga2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZm9ybVZhbHVlc1trZXldIHx8ICcnXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRmllbGQoZmllbGRWYWx1ZSwga2V5KVxuICAgICAgICB9KVxuXG4gICAgICAgIGZpZWxkc09iakFyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBfLmFzc2lnbih7fSwgZGVjb3JhdGVkRmllbGRzLCBmaWVsZClcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgY29sbGVjdGVkVmFsdWVzID0ge31cbiAgICAgICAgZm9ybURlZmluaXRpb24uZm9yRWFjaChkZWYgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRlZi5uYW1lXG4gICAgICAgICAgY29sbGVjdGVkVmFsdWVzW2tleV0gPSBmb3JtVmFsdWVzW2tleV1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB7IGZpZWxkczogZmllbGRzV2l0aEVycm9yLCBoYXNFcnJvciB9ID0gdmFsaWRhdGVGb3JtKGRlY29yYXRlZEZpZWxkcywgY29sbGVjdGVkVmFsdWVzLCB2YWxpZGF0ZSlcbiAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gZmllbGRzV2l0aEVycm9yXG4gICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IF8ubWVyZ2Uoe30sIGRlY29yYXRlZEZpZWxkcywgZm9ybU1ldGEpXG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZm4gPT4ge1xuICAgICAgICAgIHJldHVybiBlID0+IHtcbiAgICAgICAgICAgIHRvdWNoKGZvcm1OYW1lLCBmb3JtRGVmaW5pdGlvbi5tYXAoZGVmID0+IGRlZi5uYW1lKSlcbiAgICAgICAgICAgIGlmICghaGFzRXJyb3IpIHtcbiAgICAgICAgICAgICAgZm4oY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF8uYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgZmllbGRzOiBkZWNvcmF0ZWRGaWVsZHMsXG4gICAgICAgICAgaGFuZGxlU3VibWl0XG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25uZWN0KFxuICAgICAgc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZvcm06IHNlbGVjdG9ycy5mb3JtLmZ1bGxGb3JtKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybVZhbHVlczogc2VsZWN0b3JzLmZvcm0uZm9ybVZhbHVlcyhmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1EZWZpbml0aW9uOiBzZWxlY3RvcnMuZm9ybS5mb3JtRGVmaW5pdGlvbihmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1NZXRhOiBzZWxlY3RvcnMuZm9ybS5mb3JtTWV0YShmb3JtTmFtZSkoc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb3JtQWN0aW9uc1xuICAgICkoRm9ybSBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4XG4gKiovIiwiaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuL0ZpbGVVcGxvYWRlcidcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9lbGVtZW50cy9GaWxlVXBsb2FkZXIvaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmludGVyZmFjZSBDYWxsYmFjayB7XG4gIChkYXRhOiBhbnkpOiBhbnlcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXJsOiBzdHJpbmdcbiAgbm9BamF4PzogYm9vbGVhblxuICBvblN1Y2Nlc3M/OiBDYWxsYmFja1xuICBvbkVycm9yPzogQ2FsbGJhY2tcbiAgb25Db21wbGV0ZT86IENhbGxiYWNrXG4gIG5hbWU/OiBzdHJpbmdcbiAgbXVsdGlwbGU/OiBib29sZWFuXG4gIGFjY2VwdD86IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB2YWx1ZTogc3RyaW5nXG59XG5cbmNsYXNzIEZpbGVVcGxvYWRlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcblxuICBmaWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlRmlsZUNoYW5nZShlKSB7XG4gICAgY29uc3QgeyB1cmwsIG9uQ29tcGxldGUsIG9uU3VjY2Vzcywgb25FcnJvciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlc1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICQuZWFjaChmaWxlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgZGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pXG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybCxcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGEsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG5cbiAgICAgIC8vIOWmguaenOi/meS5iOiuvue9riBjb250ZW50VHlwZSDkvJrlr7zoh7TkuI3lrZjlnKggYm91bmRhcnkg55qE6Zeu6aKYLCDpnIDopoHorr7nva7kuLogZmFsc2VcbiAgICAgIC8vIGNvbnRlbnRUeXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICBjb250ZW50VHlwZTogZmFsc2UsXG5cbiAgICAgIHhockZpZWxkczoge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogZGF0YTIgPT4ge1xuICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgIG9uQ29tcGxldGUoZGF0YTIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YTIsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICBvblN1Y2Nlc3MoZGF0YTIpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgIG9uRXJyb3IoanFYSFIucmVzcG9uc2VKU09OKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsLCBhY2NlcHQsIG5vQWpheCwgY2hpbGRyZW4sIG5hbWUsIG11bHRpcGxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyDlpoLmnpzpobXpnaLkuIrmnInkuKTkuKrkuIrkvKDnu4Tku7blj6/og73kvJrlh7rplJlcbiAgICAvLyBpbnB1dCB2YWx1ZSDorr7kuLrnqbrkvJrkvb/lvpfmr4/mrKHpgInkuK3mlofku7blkI7pg73op6blj5Egb25DaGFuZ2VcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXRyaWdnZXJcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBpZiAoIW5vQWpheCkge1xuICAgICAgICAgICAgJCh0aGlzLmZpbGVJbnB1dCkuY2xpY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8Zm9ybSBhY3Rpb249e3VybH0gbWV0aG9kPVwicG9zdFwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgc3R5bGU9e25vQWpheCA/IHt9IDogeyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPXtuYW1lIHx8ICdmaWxlJ31cbiAgICAgICAgICAgIGlkPVwidXBsb2FkLWZpbGVcIlxuICAgICAgICAgICAgdmFsdWU9e25vQWpheCA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAgICAgcmVmPXtyZWYgPT4geyB0aGlzLmZpbGVJbnB1dCA9IHJlZiB9IH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFub0FqYXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVDaGFuZ2UoZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICBhY2NlcHQ9e2FjY2VwdCB8fCAnLionfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5o+Q5LqkXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2VsZW1lbnRzL0ZpbGVVcGxvYWRlci9GaWxlVXBsb2FkZXIudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24sIG9wZW5Nb2RhbCwgc2VhcmNoRG91YmFuQm9va3MsIGNsb3NlTW9kYWwsIGZldGNoQXV0aG9ycywgcmVzZXQsIGluaXRpYWxpemUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IEFkZEJvb2tGb3JtIGZyb20gJy4vY29tcG9uZW50cy9BZGRCb29rRm9ybSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZWxlbWVudHM/OiBhbnlcbiAgY2hhbmdlVmFsdWU/OiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBvcGVuTW9kYWw/OiAoZGF0YTogb3Blbk1vZGFsKSA9PiB2b2lkXG4gIHNlYXJjaERvdWJhbkJvb2tzPzogYW55XG4gIGNsb3NlTW9kYWw/OiBhbnlcbiAgZmV0Y2hBdXRob3JzPzogYW55XG4gIHJlc2V0PzogdHlwZW9mIHJlc2V0XG4gIGZldGNoRG91YmFuQm9va3M6IGFueVxuICBpbml0aWFsaXplPzogdHlwZW9mIGluaXRpYWxpemVcbn1cblxuY2xhc3MgQWRkQm9vayBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcblxuICBkZWZhdWx0U3RhdGU6IHt9XG4gIGZldGNoRG91YmFuQm9va3M6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNsRGF0YToge1xuICAgICAgICBhdXRob3I6IHt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVUaXRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVUaXRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5hZGRBdXRob3IgPSB0aGlzLmFkZEF1dGhvci5iaW5kKHRoaXMpXG4gICAgdGhpcy5hZGRCb29rID0gdGhpcy5hZGRCb29rLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZEJvb2soZGF0YSkge1xuICAgIGFwaS5hZGRCb29rKGRhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5YqfJylcbiAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZEJvb2snKVxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InLCAwKVxuICAgIH0pXG4gIH1cblxuICBhZGRBdXRob3IoZGF0YSkge1xuICAgIGFwaS5hZGRBdXRob3IoZGF0YSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKCfmt7vliqDmiJDlip8nKVxuICAgICAgY29uc3QgaWQgPSByZXN1bHQuanNvbi5vcHNbMF0uX2lkXG4gICAgICBjb25zdCBuYW1lID0gcmVzdWx0Lmpzb24ub3BzWzBdLm5hbWVcbiAgICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSgnYWRkQm9vaycsIHtcbiAgICAgICAgYXV0aG9yczogW3tcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiBpZFxuICAgICAgICB9XSxcbiAgICAgICAgYXV0aG9yOiAnJ1xuICAgICAgfSlcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUF1dGhvclZhbHVlQ2hhbmdlKHF1ZXJ5KSB7XG4gICAgaWYgKCFfLmlzRW1wdHkocXVlcnkpKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXV0aG9ycyh7XG4gICAgICAgIHE6IHF1ZXJ5XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRpdGxlVmFsdWVDaGFuZ2UobmV3VmFsKSB7XG4gICAgaWYgKCFfLmlzRW1wdHkobmV3VmFsKSkge1xuICAgICAgdGhpcy5wcm9wcy5zZWFyY2hEb3ViYW5Cb29rcyhuZXdWYWwpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi5re75Yqg5Lmm57GNXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+5re75Yqg5Lmm57GNPC9oMT5cbiAgICAgICAgPEFkZEJvb2tGb3JtXG4gICAgICAgICAgb25UaXRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZVRpdGxlVmFsdWVDaGFuZ2V9XG4gICAgICAgICAgb25BdXRob3JJbnB1dENoYW5nZT17dGhpcy5oYW5kbGVBdXRob3JWYWx1ZUNoYW5nZX1cbiAgICAgICAgICBvblNhdmVBdXRob3I9e3RoaXMuYWRkQXV0aG9yfVxuICAgICAgICAgIG9uU2F2ZUJvb2s9e3RoaXMuYWRkQm9va31cbiAgICAgICAgICAvPlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIGVsZW1lbnRzOiBzdGF0ZS5lbGVtZW50c1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwsIHNlYXJjaERvdWJhbkJvb2tzLCBjbG9zZU1vZGFsLCBmZXRjaEF1dGhvcnMsIHJlc2V0LCBpbml0aWFsaXplIH1cbikoQWRkQm9vayBhcyBhbnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRCb29rL0FkZEJvb2sudHN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4uLy4uLy4uL2Zvcm0nXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCBvcGVuTW9kYWwsIGluaXRpYWxpemUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycydcbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIFNlbGVjdGl6ZUlucHV0LCBJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5pbXBvcnQgQWRkQXV0aG9yRm9ybSBmcm9tICcuL0FkZEF1dGhvckZvcm0nXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0ZpbGVVcGxvYWRlcidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25UaXRsZUlucHV0Q2hhbmdlPzogKG5ld1ZhbDogc3RyaW5nKSA9PiB2b2lkXG4gIG9uQXV0aG9ySW5wdXRDaGFuZ2U/OiAobmV3VmFsOiBzdHJpbmcpID0+IHZvaWRcbiAgb25TYXZlQXV0aG9yOiAoZGF0YTogYW55KSA9PiB2b2lkXG4gIG9uU2F2ZUJvb2s6IChkYXRhOiBhbnkpID0+IHZvaWRcbiAgaW5pdGlhbGl6ZT86IHR5cGVvZiBpbml0aWFsaXplXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBkb3ViYW5Cb29rc0FzT3B0aW9uczogYW55W11cbiAgYXV0aG9yc0FzT3B0aW9uczogYW55W11cbiAgb3Blbk1vZGFsOiAoZGF0YTogb3Blbk1vZGFsKSA9PiB2b2lkXG59XG5cbkBmb3JtKHtcbiAgZm9ybTogJ2FkZEJvb2snLFxuICBmaWVsZHM6IFsndGl0bGUnLCAnYXV0aG9yJywgJ2F1dGhvcnMnLCAnY292ZXInLCAnZGVzY3JpcHRpb24nLCAnZmlsZSddLFxuICBkZXN0cm95T25Vbm1vdW50OiB0cnVlXG59KVxuY2xhc3MgQWRkQm9va0Zvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2sgPSB0aGlzLmhhbmRsZVRpdGxlT3B0aW9uQ2xpY2suYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQWRkTmV3QXV0aG9yID0gdGhpcy5oYW5kbGVBZGROZXdBdXRob3IuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlVGl0bGVPcHRpb25DbGljayhvcHRpb24pIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgY292ZXI6IG9wdGlvbi5hZGRpdGlvbmFsLmNvdmVyLFxuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbi5hZGRpdGlvbmFsLmRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yOiBvcHRpb24uYWRkaXRpb25hbC5hdXRob3JcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5pbml0aWFsaXplKCdhZGRCb29rJywgZGF0YSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNsQXV0aG9yOiB7XG4gICAgICAgIHZhbHVlOiBvcHRpb24uYWRkaXRpb25hbC5hdXRob3IsXG4gICAgICAgIHZhbHVlczogW11cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQWRkTmV3QXV0aG9yKHZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuTW9kYWwoe1xuICAgICAgdGl0bGU6ICfmt7vliqDkvZzogIUnLFxuICAgICAgY29udGVudDogPEFkZEF1dGhvckZvcm1cbiAgICAgICAgb25TYXZlPXt0aGlzLnByb3BzLm9uU2F2ZUF1dGhvcn1cbiAgICAgICAgLz5cbiAgICB9KVxuICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSgnYWRkQXV0aG9yJywgeyBuYW1lOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczoge1xuICAgICAgICB0aXRsZSwgYXV0aG9yLCBhdXRob3JzLCBjb3ZlciwgZGVzY3JpcHRpb24sIGZpbGVcbiAgICAgIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBvblRpdGxlSW5wdXRDaGFuZ2UsXG4gICAgICBvbkF1dGhvcklucHV0Q2hhbmdlLFxuICAgICAgZG91YmFuQm9va3NBc09wdGlvbnMsXG4gICAgICBhdXRob3JzQXNPcHRpb25zLFxuICAgICAgb25TYXZlQm9vayxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRBdXRob3JJZHMgPSBhdXRob3JzLmdldChbXSkubWFwKGEgPT4gYS52YWx1ZSlcbiAgICBjb25zdCBmaWx0ZXJlZEF1dGhvck9wdGlvbnMgPSBhdXRob3JzQXNPcHRpb25zLmZpbHRlcihhID0+IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZEF1dGhvcklkcy5pbmRleE9mKGEudmFsdWUpID09PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlbGVjdGl6ZUlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLkuablkI1cIlxuICAgICAgICAgIHZhbHVlPXt0aXRsZS52YWx1ZX1cbiAgICAgICAgICB2YWx1ZXM9e1tdfVxuICAgICAgICAgIG9wdGlvbnM9e2RvdWJhbkJvb2tzQXNPcHRpb25zfVxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e25ld1ZhbHVlID0+IHtcbiAgICAgICAgICAgIG9uVGl0bGVJbnB1dENoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIHRpdGxlLnNldChuZXdWYWx1ZSlcbiAgICAgICAgICB9IH1cbiAgICAgICAgICB1c2VWYWx1ZVxuICAgICAgICAgIG9uT3B0aW9uQ2xpY2s9e3RoaXMuaGFuZGxlVGl0bGVPcHRpb25DbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuS9nOiAhVwiXG4gICAgICAgICAgdmFsdWU9e2F1dGhvci5nZXQoKX1cbiAgICAgICAgICB2YWx1ZXM9e2F1dGhvcnMuZ2V0KFtdKX1cbiAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJlZEF1dGhvck9wdGlvbnN9XG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgb25BdXRob3JJbnB1dENoYW5nZShuZXdWYWx1ZSlcbiAgICAgICAgICAgIGF1dGhvci5zZXQobmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2F1dGhvcnMub25DaGFuZ2V9XG4gICAgICAgICAgb25BZGROZXdWYWx1ZT17dGhpcy5oYW5kbGVBZGROZXdBdXRob3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5bCB6Z2i5Zu+54mH5Zyw5Z2AXCIgey4uLmNvdmVyfSAvPlxuICAgICAgICA8VGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLmj4/ov7BcIiB7Li4uZGVzY3JpcHRpb259IC8+XG4gICAgICAgIHtcbiAgICAgICAgICAhXy5pc0VtcHR5KGZpbGUudmFsdWUpXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZmlsZS52YWx1ZS5vcmlnaW5hbG5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5zZXQoe30pXG4gICAgICAgICAgICAgICAgICB9IH0+6YeN5paw6YCJ5oupPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZpbGVVcGxvYWRlclxuICAgICAgICAgICAgICAgICAgdXJsPVwiL2FwaS9ib29rc1wiXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIudHh0LC5lcHViXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJib29rLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaWxlLnNldChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVycm9yLm1lc3NhZ2UsICdlcnJvcicpXG4gICAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiPumAieaLqeS5puexjTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmlsZVVwbG9hZGVyPlxuICAgICAgICAgICAgICAgIDxwPuaUr+aMgSB0eHQg5ZKMIGVwdWIg5qC85byPPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICBjb25zdCBwb3N0RGF0YSA9IF8ub21pdChkYXRhLCBbJ2F1dGhvciddKVxuICAgICAgICAgIHBvc3REYXRhWydhdXRob3JzJ10gPSBfLm1hcChwb3N0RGF0YVsnYXV0aG9ycyddLCAndmFsdWUnKVxuICAgICAgICAgIHBvc3REYXRhWydmaWxlJ10gPSBkYXRhLmZpbGUuX2lkXG4gICAgICAgICAgb25TYXZlQm9vayhwb3N0RGF0YSlcbiAgICAgICAgfSl9Pua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgZG91YmFuQm9va3NBc09wdGlvbnM6IHNlbGVjdG9ycy5kb3ViYW5Cb29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpLFxuICAgIGF1dGhvcnNBc09wdGlvbnM6IHNlbGVjdG9ycy5hdXRob3JzQXNPcHRpb25zKCdzZWFyY2gnKShzdGF0ZSksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24sIG9wZW5Nb2RhbCwgaW5pdGlhbGl6ZSB9XG4pKEFkZEJvb2tGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEJvb2tGb3JtLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZvcm0gfSBmcm9tICcuLi8uLi8uLi9mb3JtJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgY2xvc2VNb2RhbCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvSW5wdXQnXG5pbXBvcnQgTW9kYWxGb290ZXIgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvTW9kYWwvTW9kYWxGb290ZXInXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uU2F2ZTogKGRhdGE6IGFueSkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgQWxsUHJvcHMgZXh0ZW5kcyBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkXG59XG5cbkBmb3JtKHtcbiAgZm9ybTogJ2FkZEF1dGhvcicsXG4gIGZpZWxkczogWyduYW1lJywgJ3NsdWcnLCAnZGVzY3JpcHRpb24nXVxufSlcbmNsYXNzIEFkZEF1dGhvckZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHM6IHsgbmFtZSwgc2x1ZywgZGVzY3JpcHRpb24gfSxcbiAgICAgIGhhbmRsZVN1Ym1pdCwgY2xvc2VNb2RhbCwgb25TYXZlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlkI3lrZdcIiB7Li4ubmFtZX0gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5ZSv5LiA5qCH6K+GXCIgey4uLnNsdWd9IC8+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuaPj+i/sFwiIHsuLi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPE1vZGFsRm9vdGVyXG4gICAgICAgICAgb25Db25maXJtPXtoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICBvblNhdmUoZGF0YSlcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNhbmNlbD17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIHN0YXRlID0+IHN0YXRlLFxuICB7IHNlbmROb3RpZmljYXRpb24sIGNsb3NlTW9kYWwgfVxuKShBZGRBdXRob3JGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQm9vay9jb21wb25lbnRzL0FkZEF1dGhvckZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==