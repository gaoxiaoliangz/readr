exports.ids = [16];
exports.modules = {

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

/***/ 418:
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
	
	var _AddCollectionForm = __webpack_require__(419);
	
	var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);
	
	var _api = __webpack_require__(269);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddCollection = function (_Component) {
	    _inherits(AddCollection, _Component);
	
	    function AddCollection(props) {
	        _classCallCheck(this, AddCollection);
	
	        var _this = _possibleConstructorReturn(this, (AddCollection.__proto__ || Object.getPrototypeOf(AddCollection)).call(this, props));
	
	        _this.handleSave = _this.handleSave.bind(_this);
	        _this.handleBooksValueChange = _this.handleBooksValueChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(AddCollection, [{
	        key: 'handleSave',
	        value: function handleSave(data) {
	            var _this2 = this;
	
	            var creator = this.props.session.user.id;
	            var postData = Object.assign({}, data, {
	                creator: creator
	            });
	            _api2.default.addCollection(postData).then(function (result) {
	                _this2.props.sendNotification('添加成功！');
	                _this2.props.reset('addCollection');
	            }, function (error) {
	                _this2.props.sendNotification(error.message, 'error');
	            });
	        }
	    }, {
	        key: 'handleBooksValueChange',
	        value: function handleBooksValueChange(newVal) {
	            if (!_lodash2.default.isEmpty(newVal)) {
	                this.props.loadBooks({
	                    q: newVal
	                });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "添加合集" }, _react2.default.createElement("h1", { className: "page-title" }, "添加合集"), _react2.default.createElement(_AddCollectionForm2.default, { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
	        }
	    }]);
	
	    return AddCollection;
	}(_react.Component);
	
	function mapStateToProps(state) {
	    return {
	        notification: state.components.notification,
	        elements: state.elements,
	        session: state.session
	    };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, reset: _actions.reset, loadBooks: _actions.loadBooks })(AddCollection);

/***/ },

/***/ 419:
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
	
	var _actions = __webpack_require__(94);
	
	var _form = __webpack_require__(213);
	
	var _selectors = __webpack_require__(115);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _form2 = __webpack_require__(374);
	
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
	
	var AddCollectionForm = function (_Component) {
	    _inherits(AddCollectionForm, _Component);
	
	    function AddCollectionForm(props) {
	        _classCallCheck(this, AddCollectionForm);
	
	        return _possibleConstructorReturn(this, (AddCollectionForm.__proto__ || Object.getPrototypeOf(AddCollectionForm)).call(this, props));
	    }
	
	    _createClass(AddCollectionForm, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var _booksValue = _props$fields._booksValue;
	            var _booksValues = _props$fields._booksValues;
	            var _booksOptions = _props$fields._booksOptions;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	            var onBooksValueChange = _props.onBooksValueChange;
	            var booksSearchAsOptions = _props.booksSearchAsOptions;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "合集名称" }, name)), _react2.default.createElement(_form.SelectizeInput, { placeholder: "选择书籍", onInputChange: function onInputChange(newValue) {
	                    if (onBooksValueChange) {
	                        onBooksValueChange(newValue);
	                    }
	                    _booksValue.set(newValue);
	                }, value: _booksValue.get(), onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, __assign({}, description, { placeholder: "描述" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.pick(data, ['name', 'description']);
	                    postData = Object.assign({}, postData, {
	                        items: _booksValues.value ? _booksValues.value.map(function (item) {
	                            return item.value;
	                        }) : []
	                    });
	                    onSave(postData);
	                }) }, "添加"));
	        }
	    }]);
	
	    return AddCollectionForm;
	}(_react.Component);
	AddCollectionForm = __decorate([(0, _form2.form)({
	    form: 'addCollection',
	    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
	})], AddCollectionForm);
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        routing: state.routing.locationBeforeTransitions,
	        booksSearchAsOptions: selectors.booksAsOptions('search')(state)
	    };
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2luZGV4LnRzPzkzYzkqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4PzcyYTgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9BZGRDb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUFPLEtBQXVCLDJDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z5Qjs7QUFDbEI7O0FBQ2Y7Ozs7QUFDZjs7S0FBb0M7O0FBQ3BDOztLQUF3Qzs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsS0FBaUIsY0FBVSxRQW9CM0I7O0tBQ0M7Ozs7Ozs7Ozs7OztBQVFELEtBQWtCLGVBQUcsc0JBQU8sUUFBWSxZQUFZO0FBQy9DLFNBQVksWUFBRTtBQUNmLGFBQVksU0FBYSxXQUFZO0FBRWxDLGFBQUMsQ0FBRSxpQkFBUSxRQUFTLFNBQUU7QUFDdkIsaUJBQXNCLG9DQUFjLFVBQU8sUUFBSztBQUN4QztBQUNDLDRCQUVUO0FBSFM7QUFHUCxjQUp3QjtBQU1wQjtBQUNFLHlCQUFHLGlCQUFNLE1BQUcsSUFBUSxRQUFtQjtBQUNyQywyQkFFWjtBQUpTO0FBS1g7QUFBQztBQUVLLFlBQUMsRUFBUSxnQkFBVSxVQUMzQjtBQUFDO0FBRUQsS0FBZ0IsYUFBNkIsb0JBQW1CO0FBQ3hELFNBQW1CLG1CQUFYO1NBQTJCLFdBQXVDLE9BQWpEO1NBQW9CO1NBQW9COztBQUVqRSxZQUFpQjtBQUNyQixhQUVhOzs7Ozs7Ozs7Ozs2Q0FBTSxPQUFLO0FBQ2QseUJBQVUsU0FBTyxLQUFNOztBQUU3Qix5QkFBbUIsZ0JBQU07QUFDdkIsNkJBQVUsU0FBTTtB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LCtCQUFXLFVBQWUsZUFBVSxVQUU1RDtBQUpTO0FBTVQ7bUJBQXNCLHlCQUNMLGlCQUNmLEVBQ0QsK0NBQW1CLG1CIiwiZmlsZSI6IjE2LjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jcmVhdGVGb3JtJ1xuXG5leHBvcnQgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZm9ybS9pbmRleC50c1xuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMnXG5cbmNvbnN0IGZvcm1BY3Rpb25zID0gYWN0aW9ucy5mb3JtXG5cbmludGVyZmFjZSBGb3JtQ29uZmlnIHtcbiAgZm9ybTogc3RyaW5nXG4gIGZpZWxkczogc3RyaW5nW11cbiAgdmFsaWRhdGU/OiAodmFsdWVzOiBhbnkpID0+IGFueVxuICBkZXN0cm95T25Vbm1vdW50PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgRm9ybVByb3BzIHtcbiAgY2hhbmdlOiB0eXBlb2YgYWN0aW9ucy5jaGFuZ2VcbiAgdG91Y2g6IHR5cGVvZiBhY3Rpb25zLnRvdWNoXG4gIGRlZmluZUZpZWxkOiB0eXBlb2YgYWN0aW9ucy5kZWZpbmVGaWVsZFxuICBkZXN0cm95OiB0eXBlb2YgYWN0aW9ucy5kZXN0cm95XG4gIGZvcm06IGFueVxuICBmb3JtVmFsdWVzOiBhbnlcbiAgZm9ybU1ldGE6IGFueVxuICBmb3JtRGVmaW5pdGlvbjogYW55XG59XG5cbmNsYXNzIEVsZW1lbnRDbGFzcyBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xufVxuXG5pbnRlcmZhY2UgQ3JlYXRlRm9ybUNsYXNzRGVjb3JhdG9yIHtcbiAgLy8gVE9ETzogd2h5IHNvP1xuICAvLyA8VCBleHRlbmRzICh0eXBlb2YgRWxlbWVudENsYXNzKT4oY29uZmlnOiBGb3JtQ29uZmlnKTogVFxuICA8VCBleHRlbmRzIEZ1bmN0aW9uPihjb25maWc6IEZvcm1Db25maWcpOiBUXG59XG5cbmNvbnN0IHZhbGlkYXRlRm9ybSA9IChmaWVsZHMsIGZvcm1WYWx1ZXMsIHZhbGlkYXRlRm4pID0+IHtcbiAgaWYgKHZhbGlkYXRlRm4pIHtcbiAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZUZuKGZvcm1WYWx1ZXMpXG5cbiAgICBpZiAoIV8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICBjb25zdCBmaWVsZHNXaXRoRXJyb3JzID0gXy5tYXBWYWx1ZXMoZXJyb3JzLCB2YWwgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiB2YWxcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmllbGRzOiBfLm1lcmdlKHt9LCBmaWVsZHMsIGZpZWxkc1dpdGhFcnJvcnMpLFxuICAgICAgICBoYXNFcnJvcjogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGZpZWxkcywgaGFzRXJyb3I6IGZhbHNlIH1cbn1cblxuY29uc3QgY3JlYXRlRm9ybTogQ3JlYXRlRm9ybUNsYXNzRGVjb3JhdG9yID0gKGNvbmZpZzogRm9ybUNvbmZpZykgPT4ge1xuICBjb25zdCB7IGZpZWxkczogZmllbGRzQXJyLCBmb3JtOiBmb3JtTmFtZSwgdmFsaWRhdGUsIGRlc3Ryb3lPblVubW91bnQgfSA9IGNvbmZpZ1xuXG4gIHJldHVybiBXcmFwcGVkQ29tcG9uZW50ID0+IHtcbiAgICBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50PEZvcm1Qcm9wcywge30+IHtcblxuICAgICAgY3JlYXRlRmllbGQodmFsdWUsIGtleSkge1xuICAgICAgICBjb25zdCB7IGNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IHNldEZpZWxkVmFsdWUgPSB2YWwgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWwgPSB2YWxcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgdmFsLnRhcmdldCkge1xuICAgICAgICAgICAgbmV3VmFsID0gdmFsLnRhcmdldC52YWx1ZSB8fCAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2UoZm9ybU5hbWUsIGtleSwgbmV3VmFsLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudHMgPSB7XG4gICAgICAgICAgb25DaGFuZ2U6IHZhbCA9PiBzZXRGaWVsZFZhbHVlKHZhbClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgIGdldDogKGRlZmF1bHRWYWw/KSA9PiB2YWx1ZSB8fCBkZWZhdWx0VmFsIHx8ICcnLFxuICAgICAgICAgICAgc2V0OiBldmVudHMub25DaGFuZ2UsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBldmVudHMub25DaGFuZ2UsXG4gICAgICAgICAgICBldmVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmaW5lRmllbGQgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgZmllbGRzQXJyLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgIGRlZmluZUZpZWxkKGZvcm1OYW1lLCBmaWVsZClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgLy8g55Sf5oiQ54mI5pys55qEIFJlYWN0IOS8muWcqOWIneWni+WMluaXtuaJp+ihjOS4gOasoSB1bm1vdW50IOWwmuacquafpeaYjuWOn+WboFxuICAgICAgICBpZiAoZGVzdHJveU9uVW5tb3VudCkge1xuICAgICAgICAgIHRoaXMucHJvcHMuZGVzdHJveShmb3JtTmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBkZWNvcmF0ZWRGaWVsZHNcbiAgICAgICAgY29uc3QgeyB0b3VjaCwgZm9ybVZhbHVlcywgZm9ybURlZmluaXRpb24sIGZvcm1NZXRhIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgZmllbGRzT2JqQXJyID0gXy5tYXAoZmllbGRzQXJyLCBrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBmb3JtVmFsdWVzW2tleV0gfHwgJydcbiAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVGaWVsZChmaWVsZFZhbHVlLCBrZXkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZmllbGRzT2JqQXJyLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IF8uYXNzaWduKHt9LCBkZWNvcmF0ZWRGaWVsZHMsIGZpZWxkKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjb2xsZWN0ZWRWYWx1ZXMgPSB7fVxuICAgICAgICBmb3JtRGVmaW5pdGlvbi5mb3JFYWNoKGRlZiA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gZGVmLm5hbWVcbiAgICAgICAgICBjb2xsZWN0ZWRWYWx1ZXNba2V5XSA9IGZvcm1WYWx1ZXNba2V5XVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHsgZmllbGRzOiBmaWVsZHNXaXRoRXJyb3IsIGhhc0Vycm9yIH0gPSB2YWxpZGF0ZUZvcm0oZGVjb3JhdGVkRmllbGRzLCBjb2xsZWN0ZWRWYWx1ZXMsIHZhbGlkYXRlKVxuICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBmaWVsZHNXaXRoRXJyb3JcbiAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gXy5tZXJnZSh7fSwgZGVjb3JhdGVkRmllbGRzLCBmb3JtTWV0YSlcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBmbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIGUgPT4ge1xuICAgICAgICAgICAgdG91Y2goZm9ybU5hbWUsIGZvcm1EZWZpbml0aW9uLm1hcChkZWYgPT4gZGVmLm5hbWUpKVxuICAgICAgICAgICAgaWYgKCFoYXNFcnJvcikge1xuICAgICAgICAgICAgICBmbihjb2xsZWN0ZWRWYWx1ZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgXy5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBmaWVsZHM6IGRlY29yYXRlZEZpZWxkcyxcbiAgICAgICAgICBoYW5kbGVTdWJtaXRcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbm5lY3QoXG4gICAgICBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZm9ybTogc2VsZWN0b3JzLmZvcm0uZnVsbEZvcm0oZm9ybU5hbWUpKHN0YXRlKSxcbiAgICAgICAgICBmb3JtVmFsdWVzOiBzZWxlY3RvcnMuZm9ybS5mb3JtVmFsdWVzKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybURlZmluaXRpb246IHNlbGVjdG9ycy5mb3JtLmZvcm1EZWZpbml0aW9uKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybU1ldGE6IHNlbGVjdG9ycy5mb3JtLmZvcm1NZXRhKGZvcm1OYW1lKShzdGF0ZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZvcm1BY3Rpb25zXG4gICAgKShGb3JtIGFzIGFueSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2Zvcm0vY3JlYXRlRm9ybS50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCByZXNldCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgQWRkQ29sbGVjdGlvbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXNzaW9uOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbj86IGFueVxuICBub3RpZmljYXRpb24/OiBhbnlcbiAgcmVzZXQ6IGFueVxuICBsb2FkQm9va3M/OiB0eXBlb2YgbG9hZEJvb2tzXG59XG5cbmNsYXNzIEFkZENvbGxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQm9va3NWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlQm9va3NWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVTYXZlKGRhdGEpIHtcbiAgICBjb25zdCBjcmVhdG9yID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWRcbiAgICBjb25zdCBwb3N0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGNyZWF0b3JcbiAgICB9KVxuXG4gICAgYXBpLmFkZENvbGxlY3Rpb24ocG9zdERhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJylcbiAgICAgIHRoaXMucHJvcHMucmVzZXQoJ2FkZENvbGxlY3Rpb24nKVxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnJvci5tZXNzYWdlLCAnZXJyb3InKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVCb29rc1ZhbHVlQ2hhbmdlKG5ld1ZhbCkge1xuICAgIGlmICghXy5pc0VtcHR5KG5ld1ZhbCkpIHtcbiAgICAgIHRoaXMucHJvcHMubG9hZEJvb2tzKHtcbiAgICAgICAgcTogbmV3VmFsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY0NvbnRhaW5lciB0aXRsZT1cIua3u+WKoOWQiOmbhlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPua3u+WKoOWQiOmbhjwvaDE+XG4gICAgICAgIDxBZGRDb2xsZWN0aW9uRm9ybVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5oYW5kbGVTYXZlfVxuICAgICAgICAgIG9uQm9va3NWYWx1ZUNoYW5nZT17dGhpcy5oYW5kbGVCb29rc1ZhbHVlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHMsXG4gICAgc2Vzc2lvbjogc3RhdGUuc2Vzc2lvblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgeyBzZW5kTm90aWZpY2F0aW9uLCByZXNldCwgbG9hZEJvb2tzIH1cbikoQWRkQ29sbGVjdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vQWRkQ29sbGVjdGlvbi50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucydcbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIFNlbGVjdGl6ZUlucHV0LCBJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2VsZWN0b3JzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4uLy4uLy4uL2Zvcm0nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxEYXRhPzogYW55XG4gIG9uU2F2ZTogKGRhdGE6IGFueSkgPT4gdm9pZFxuICBvbkJvb2tzVmFsdWVDaGFuZ2U/OiAodmFsOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG4gIGhhbmRsZVN1Ym1pdDogYW55XG4gIGZpZWxkczogYW55XG4gIGJvb2tzU2VhcmNoQXNPcHRpb25zOiBhbnlcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbn1cblxuQGZvcm0oe1xuICBmb3JtOiAnYWRkQ29sbGVjdGlvbicsXG4gIGZpZWxkczogWyduYW1lJywgJ19ib29rc1ZhbHVlJywgJ19ib29rc1ZhbHVlcycsICdfYm9va3NPcHRpb25zJywgJ2Rlc2NyaXB0aW9uJ10sXG59KVxuY2xhc3MgQWRkQ29sbGVjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQ8QWxsUHJvcHMsIFN0YXRlPiB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyBuYW1lLCBfYm9va3NWYWx1ZSwgX2Jvb2tzVmFsdWVzLCBfYm9va3NPcHRpb25zLCBkZXNjcmlwdGlvbiB9LFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgb25TYXZlLFxuICAgICAgb25Cb29rc1ZhbHVlQ2hhbmdlLFxuICAgICAgYm9va3NTZWFyY2hBc09wdGlvbnNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWQiOmbhuWQjeensFwiIHsuLi5uYW1lfSAvPlxuICAgICAgICA8U2VsZWN0aXplSW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIumAieaLqeS5puexjVwiXG4gICAgICAgICAgb25JbnB1dENoYW5nZT17bmV3VmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKG9uQm9va3NWYWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkJvb2tzVmFsdWVDaGFuZ2UobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYm9va3NWYWx1ZS5zZXQobmV3VmFsdWUpXG4gICAgICAgICAgfSB9XG4gICAgICAgICAgdmFsdWU9e19ib29rc1ZhbHVlLmdldCgpfVxuICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtfYm9va3NWYWx1ZXMub25DaGFuZ2V9XG4gICAgICAgICAgb3B0aW9ucz17Ym9va3NTZWFyY2hBc09wdGlvbnN9XG4gICAgICAgICAgdmFsdWVzPXtfYm9va3NWYWx1ZXMudmFsdWUgfHwgW119XG4gICAgICAgICAgLz5cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgey4uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5o+P6L+wXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHBvc3REYXRhID0gXy5waWNrKGRhdGEsIFsnbmFtZScsICdkZXNjcmlwdGlvbiddKVxuICAgICAgICAgICAgcG9zdERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBwb3N0RGF0YSwge1xuICAgICAgICAgICAgICBpdGVtczogX2Jvb2tzVmFsdWVzLnZhbHVlID8gX2Jvb2tzVmFsdWVzLnZhbHVlLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpIDogW11cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvblNhdmUocG9zdERhdGEpXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPua3u+WKoDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMsXG4gICAgYm9va3NTZWFyY2hBc09wdGlvbnM6IHNlbGVjdG9ycy5ib29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICB7IHNlbmROb3RpZmljYXRpb24gfVxuKShBZGRDb2xsZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vY29tcG9uZW50cy9BZGRDb2xsZWN0aW9uRm9ybS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9