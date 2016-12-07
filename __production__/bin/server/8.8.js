exports.ids = [8];
exports.modules = {

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(91);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(93);
	
	var _reactRouter = __webpack_require__(61);
	
	var _actions = __webpack_require__(94);
	
	var _DocContainer = __webpack_require__(267);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _SigninForm = __webpack_require__(373);
	
	var _SigninForm2 = _interopRequireDefault(_SigninForm);
	
	var _api = __webpack_require__(269);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _helpers = __webpack_require__(56);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signin = function (_Component) {
	    _inherits(Signin, _Component);
	
	    function Signin(props) {
	        _classCallCheck(this, Signin);
	
	        var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));
	
	        _this.handleSubmit = _this.handleSubmit.bind(_this);
	        return _this;
	    }
	
	    _createClass(Signin, [{
	        key: 'handleSubmit',
	        value: function handleSubmit(data) {
	            var _this2 = this;
	
	            _api2.default.userLogin(data).then(function (res) {
	                _this2.props.sendNotification('登录成功！', 'success', 1500);
	                _this2.props.userAuth().then(function () {
	                    setTimeout(function () {
	                        _helpers2.default.redirect('/');
	                    }, 600);
	                });
	            }).catch(function (err) {
	                console.error(err);
	                _this2.props.sendNotification(err.message, 'error');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "登录" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, "欢迎回来"), _react2.default.createElement(_SigninForm2.default, { onSave: this.handleSubmit }), _react2.default.createElement("p", { className: "hint" }, "没有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "注册"))));
	        }
	    }]);
	
	    return Signin;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signin);

/***/ },

/***/ 373:
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
	
	var _form2 = __webpack_require__(213);
	
	var _validation = __webpack_require__(376);
	
	var _validation2 = _interopRequireDefault(_validation);
	
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
	
	var SigninForm = function (_Component) {
	    _inherits(SigninForm, _Component);
	
	    function SigninForm(props) {
	        _classCallCheck(this, SigninForm);
	
	        return _possibleConstructorReturn(this, (SigninForm.__proto__ || Object.getPrototypeOf(SigninForm)).call(this, props));
	    }
	
	    _createClass(SigninForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var login = _props$fields.login;
	            var password = _props$fields.password;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form2.Input, __assign({ placeholder: "用户名/邮箱" }, login)), _react2.default.createElement(_form2.Input, __assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form2.Button, { color: "blue", onClick: handleSubmit(function (data) {
	                    onSave(data);
	                }) }, "登录"));
	        }
	    }]);
	
	    return SigninForm;
	}(_react.Component);
	SigninForm = __decorate([(0, _form.form)({
	    form: 'signin',
	    fields: ['login', 'password'],
	    validate: function validate(values) {
	        return (0, _validation2.default)(values);
	    }
	})], SigninForm);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return {
	        initialValues: ownProps.initialValues,
	        routing: state.routing.locationBeforeTransitions
	    };
	}, { sendNotification: _actions.sendNotification })(SigninForm);

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

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = validation;
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validation(values, config) {
	    var errors = {};
	    _lodash2.default.keys(values).forEach(function (key) {
	        if (!values[key]) {
	            errors[key] = '\u4E0D\u80FD\u4E3A\u7A7A\uFF01';
	        }
	    });
	    return errors;
	}

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL1NpZ25pbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ25pbi9jb21wb25lbnRzL1NpZ25pbkZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2Zvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZm9ybS9jcmVhdGVGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9kYXRhL3ZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7Ozs7QUFDSDs7QUFDRjs7QUFDNkI7O0FBQ1I7Ozs7QUFDUjs7OztBQUNaOzs7O0FBUXBDOzs7Ozs7Ozs7Ozs7S0FBOEI7OztBQUM1QixxQkFBaUI7QUFDZjs7cUhBQVk7O0FBQ1IsZUFBYSxlQUFPLE1BQWEsYUFDdkM7O0FBRVk7Ozs7c0NBQUs7OztBQUNaLDJCQUFVLFVBQU0sTUFBSyxLQUFJO0FBQ3RCLHdCQUFNLE1BQWlCLGlCQUFRLFNBQVcsV0FBTztBQUNqRCx3QkFBTSxNQUFXLFdBQUssS0FBQztBQUNmLGdDQUFDO0FBQ0YsMkNBQVMsU0FDbEI7QUFBQyx3QkFDSDtBQUNGO0FBQUUsZ0JBQU0sTUFBQyxVQUFJO0FBQ0oseUJBQU0sTUFBSztBQUNkLHdCQUFNLE1BQWlCLGlCQUFJLElBQVEsU0FDekM7QUFDRjtBQUVNOzs7O0FBQ0csb0JBQ0wsZ0JBQWEsd0NBQU0sT0FBSyxRQUN0Qiw4QkFBSSxTQUFVLFdBQW9CLHVCQUNoQyw4QkFBRyxRQUFVLFdBQWEsZ0JBQVUsU0FDcEMsZ0JBQVcsc0NBQ0gsUUFBTSxLQUNaLGlCQUNGLDhCQUFFLE9BQVUsV0FBTyxVQUFNLHlCQUFLLG1DQUFHLElBQVUsYUFJbkQ7QUFHRjs7Ozs7OztBQUNXO0FBQ0ssdUJBQU8sTUFBVyxXQUFhO0FBQ3ZDLGVBQU8sTUFD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Q0FBSyxPQUFhLFdBQ25DO0FBRU07O3lDQUFvRCxhQUFnQixpQkFBaUIsaUJBQVc7O3lCQUF2RSxnQ0FBakI7eUJBQTZCOztBQUM1Qix1Q0FBa0I7QUFDbEIsdUNBQUksaUJBQU0sTUFBRyxJQUFpQixpQkFBVztBQUV4RCx5QkFBa0IsZUFBSztBQUNmLGdDQUFFO0FBQ0QsbUNBQVMseUJBQW9CO0FBQUksd0NBQU8sSUFBTzs4QkFBdEI7QUFDM0IsaUNBQUMsQ0FBVSxVQUFFO0FBQ1osb0NBQ0o7QUFDRjtBQUNGO0FBQUM7QUFFSyxzREFBK0IsbUNBQVUsT0FBRyxJQUFNLEtBQU07QUFDdEQsaUNBQWlCO0FBRzNCO0FBSmtFLHNCQUF4QixDQUFwQjtBQUt2Qjs7Ozs7O0FBRUsseUNBQ0M7QUFDRztBQUNBLHVCQUFXLFVBQUssS0FBUyxTQUFVLFVBQU87QUFDcEMsNkJBQVcsVUFBSyxLQUFXLFdBQVUsVUFBTztBQUN4QyxpQ0FBVyxVQUFLLEtBQWUsZUFBVSxVQUFPO0FBQ3RELDJCQUFXLFVBQUssS0FBUyxTQUFVLFVBRS9DO0FBTlM7QUFNUixVQVJXLEVBVWIsYUFDSDtBQUNGO0FBRUE7bUJBQXlCLFc7Ozs7Ozs7Ozs7Ozs7O0FDcEp6Qjs7Ozs7O3FCQUF5QyxRQUFpQjtBQUN4RCxTQUFZLFNBQVU7QUFFckIsc0JBQUssS0FBUSxRQUFRLFFBQUk7QUFDckIsYUFBQyxDQUFPLE9BQU0sTUFBRTtBQUNYLG9CQUNSO0FBQ0Y7QUFBRTtBQUVJLFlBQ1I7QUFBQyxFIiwiZmlsZSI6IjguOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgRG9jQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvRG9jQ29udGFpbmVyJ1xuaW1wb3J0IFNpZ25pbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL1NpZ25pbkZvcm0nXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcbmltcG9ydCBoZWxwZXJzIGZyb20gJy4uLy4uL2hlbHBlcnMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbmROb3RpZmljYXRpb24/OiBhbnlcbiAgdXNlckF1dGg/OiBhbnlcbn1cblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlU3VibWl0KGRhdGEpIHtcbiAgICBhcGkudXNlckxvZ2luKGRhdGEpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign55m75b2V5oiQ5Yqf77yBJywgJ3N1Y2Nlc3MnLCAxNTAwKVxuICAgICAgdGhpcy5wcm9wcy51c2VyQXV0aCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBoZWxwZXJzLnJlZGlyZWN0KCcvJylcbiAgICAgICAgfSwgNjAwKVxuICAgICAgfSlcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnIubWVzc2FnZSwgJ2Vycm9yJylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jQ29udGFpbmVyIHRpdGxlPVwi55m75b2VXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPuasoui/juWbnuadpTwvaDE+XG4gICAgICAgICAgPFNpZ25pbkZvcm1cbiAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaW50XCI+5rKh5pyJ6LSm5Y+377yfPExpbmsgdG89XCIvc2lnbnVwXCI+5rOo5YaMPC9MaW5rPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RvY0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDx7fSwge30sIFByb3BzPihcbiAgc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbiAgfSksXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfVxuKShTaWduaW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWduaW4vU2lnbmluLnRzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGZvcm0gfSBmcm9tICcuLi8uLi8uLi9mb3JtJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvZm9ybSdcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gJy4uLy4uLy4uL2RhdGEvdmFsaWRhdGlvbidcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5pdGlhbFZhbHVlcz86IGFueVxuICBvblNhdmU6IChkYXRhOiBhbnkpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIEFsbFByb3BzIGV4dGVuZHMgUHJvcHMge1xuICByb3V0aW5nOiBhbnlcbiAgc2VuZE5vdGlmaWNhdGlvbjogYW55XG4gIGhhbmRsZVN1Ym1pdDogYW55XG4gIGZpZWxkczogYW55XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG59XG5cbkBmb3JtKHtcbiAgZm9ybTogJ3NpZ25pbicsXG4gIGZpZWxkczogWydsb2dpbicsICdwYXNzd29yZCddLFxuICB2YWxpZGF0ZTogdmFsdWVzID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGlvbih2YWx1ZXMpXG4gIH1cbn0pXG5jbGFzcyBTaWduaW5Gb3JtIGV4dGVuZHMgQ29tcG9uZW50PEFsbFByb3BzLCBTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZmllbGRzOiB7IGxvZ2luLCBwYXNzd29yZCB9LFxuICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgb25TYXZlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLnlKjmiLflkI0v6YKu566xXCIgey4uLmxvZ2lufSAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlr4bnoIFcIiB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmR9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgIG9uU2F2ZShkYXRhKVxuICAgICAgICAgIH0pfT7nmbvlvZU8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbiAgICB9XG4gIH0sXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiB9XG4pKFNpZ25pbkZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWduaW4vY29tcG9uZW50cy9TaWduaW5Gb3JtLnRzeFxuICoqLyIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlRm9ybSdcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG5jb25zdCBmb3JtQWN0aW9ucyA9IGFjdGlvbnMuZm9ybVxuXG5pbnRlcmZhY2UgRm9ybUNvbmZpZyB7XG4gIGZvcm06IHN0cmluZ1xuICBmaWVsZHM6IHN0cmluZ1tdXG4gIHZhbGlkYXRlPzogKHZhbHVlczogYW55KSA9PiBhbnlcbiAgZGVzdHJveU9uVW5tb3VudD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIGNoYW5nZTogdHlwZW9mIGFjdGlvbnMuY2hhbmdlXG4gIHRvdWNoOiB0eXBlb2YgYWN0aW9ucy50b3VjaFxuICBkZWZpbmVGaWVsZDogdHlwZW9mIGFjdGlvbnMuZGVmaW5lRmllbGRcbiAgZGVzdHJveTogdHlwZW9mIGFjdGlvbnMuZGVzdHJveVxuICBmb3JtOiBhbnlcbiAgZm9ybVZhbHVlczogYW55XG4gIGZvcm1NZXRhOiBhbnlcbiAgZm9ybURlZmluaXRpb246IGFueVxufVxuXG5jbGFzcyBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbn1cblxuaW50ZXJmYWNlIENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciB7XG4gIC8vIFRPRE86IHdoeSBzbz9cbiAgLy8gPFQgZXh0ZW5kcyAodHlwZW9mIEVsZW1lbnRDbGFzcyk+KGNvbmZpZzogRm9ybUNvbmZpZyk6IFRcbiAgPFQgZXh0ZW5kcyBGdW5jdGlvbj4oY29uZmlnOiBGb3JtQ29uZmlnKTogVFxufVxuXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSAoZmllbGRzLCBmb3JtVmFsdWVzLCB2YWxpZGF0ZUZuKSA9PiB7XG4gIGlmICh2YWxpZGF0ZUZuKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVGbihmb3JtVmFsdWVzKVxuXG4gICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgY29uc3QgZmllbGRzV2l0aEVycm9ycyA9IF8ubWFwVmFsdWVzKGVycm9ycywgdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkczogXy5tZXJnZSh7fSwgZmllbGRzLCBmaWVsZHNXaXRoRXJyb3JzKSxcbiAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBmaWVsZHMsIGhhc0Vycm9yOiBmYWxzZSB9XG59XG5cbmNvbnN0IGNyZWF0ZUZvcm06IENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciA9IChjb25maWc6IEZvcm1Db25maWcpID0+IHtcbiAgY29uc3QgeyBmaWVsZHM6IGZpZWxkc0FyciwgZm9ybTogZm9ybU5hbWUsIHZhbGlkYXRlLCBkZXN0cm95T25Vbm1vdW50IH0gPSBjb25maWdcblxuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIHt9PiB7XG5cbiAgICAgIGNyZWF0ZUZpZWxkKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBjaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdmFsID0+IHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdmFsXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC50YXJnZXQpIHtcbiAgICAgICAgICAgIG5ld1ZhbCA9IHZhbC50YXJnZXQudmFsdWUgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlKGZvcm1OYW1lLCBrZXksIG5ld1ZhbCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgICAgIG9uQ2hhbmdlOiB2YWwgPT4gc2V0RmllbGRWYWx1ZSh2YWwpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBnZXQ6IChkZWZhdWx0VmFsPykgPT4gdmFsdWUgfHwgZGVmYXVsdFZhbCB8fCAnJyxcbiAgICAgICAgICAgIHNldDogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgZXZlbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGRlZmluZUZpZWxkIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGZpZWxkc0Fyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWZpbmVGaWVsZChmb3JtTmFtZSwgZmllbGQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vIOeUn+aIkOeJiOacrOeahCBSZWFjdCDkvJrlnKjliJ3lp4vljJbml7bmiafooYzkuIDmrKEgdW5tb3VudCDlsJrmnKrmn6XmmI7ljp/lm6BcbiAgICAgICAgaWYgKGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmRlc3Ryb3koZm9ybU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGVjb3JhdGVkRmllbGRzXG4gICAgICAgIGNvbnN0IHsgdG91Y2gsIGZvcm1WYWx1ZXMsIGZvcm1EZWZpbml0aW9uLCBmb3JtTWV0YSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc09iakFyciA9IF8ubWFwKGZpZWxkc0Fyciwga2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZm9ybVZhbHVlc1trZXldIHx8ICcnXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRmllbGQoZmllbGRWYWx1ZSwga2V5KVxuICAgICAgICB9KVxuXG4gICAgICAgIGZpZWxkc09iakFyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBfLmFzc2lnbih7fSwgZGVjb3JhdGVkRmllbGRzLCBmaWVsZClcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgY29sbGVjdGVkVmFsdWVzID0ge31cbiAgICAgICAgZm9ybURlZmluaXRpb24uZm9yRWFjaChkZWYgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRlZi5uYW1lXG4gICAgICAgICAgY29sbGVjdGVkVmFsdWVzW2tleV0gPSBmb3JtVmFsdWVzW2tleV1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB7IGZpZWxkczogZmllbGRzV2l0aEVycm9yLCBoYXNFcnJvciB9ID0gdmFsaWRhdGVGb3JtKGRlY29yYXRlZEZpZWxkcywgY29sbGVjdGVkVmFsdWVzLCB2YWxpZGF0ZSlcbiAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gZmllbGRzV2l0aEVycm9yXG4gICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IF8ubWVyZ2Uoe30sIGRlY29yYXRlZEZpZWxkcywgZm9ybU1ldGEpXG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZm4gPT4ge1xuICAgICAgICAgIHJldHVybiBlID0+IHtcbiAgICAgICAgICAgIHRvdWNoKGZvcm1OYW1lLCBmb3JtRGVmaW5pdGlvbi5tYXAoZGVmID0+IGRlZi5uYW1lKSlcbiAgICAgICAgICAgIGlmICghaGFzRXJyb3IpIHtcbiAgICAgICAgICAgICAgZm4oY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF8uYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgZmllbGRzOiBkZWNvcmF0ZWRGaWVsZHMsXG4gICAgICAgICAgaGFuZGxlU3VibWl0XG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25uZWN0KFxuICAgICAgc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZvcm06IHNlbGVjdG9ycy5mb3JtLmZ1bGxGb3JtKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybVZhbHVlczogc2VsZWN0b3JzLmZvcm0uZm9ybVZhbHVlcyhmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1EZWZpbml0aW9uOiBzZWxlY3RvcnMuZm9ybS5mb3JtRGVmaW5pdGlvbihmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1NZXRhOiBzZWxlY3RvcnMuZm9ybS5mb3JtTWV0YShmb3JtTmFtZSkoc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb3JtQWN0aW9uc1xuICAgICkoRm9ybSBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4XG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG50eXBlIENvbmZpZyA9IHtcbiAgdmFsaWRhdG9yczoge1xuICAgIFtrZXk6IHN0cmluZ106IFsodmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbiwgc3RyaW5nXVxuICB9W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGlvbih2YWx1ZXMsIGNvbmZpZz86IENvbmZpZykge1xuICBjb25zdCBlcnJvcnM6IGFueSA9IHt9XG5cbiAgXy5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgIGVycm9yc1trZXldID0gYOS4jeiDveS4uuepuu+8gWBcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9kYXRhL3ZhbGlkYXRpb24udHNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9