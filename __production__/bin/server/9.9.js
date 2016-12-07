exports.ids = [9];
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

/***/ },

/***/ 378:
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
	
	var _SignupForm = __webpack_require__(379);
	
	var _SignupForm2 = _interopRequireDefault(_SignupForm);
	
	var _api = __webpack_require__(269);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _helpers = __webpack_require__(56);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signup = function (_Component) {
	    _inherits(Signup, _Component);
	
	    function Signup(props) {
	        _classCallCheck(this, Signup);
	
	        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));
	
	        _this.handleSignup = _this.handleSignup.bind(_this);
	        return _this;
	    }
	
	    _createClass(Signup, [{
	        key: 'handleSignup',
	        value: function handleSignup(data) {
	            var _this2 = this;
	
	            _api2.default.userSignup(data).then(function (res) {
	                _this2.props.sendNotification('注册成功！');
	                _api2.default.userLogin({ login: data.username, password: data.password }).then(function () {
	                    _this2.props.userAuth().then(function () {
	                        setTimeout(function () {
	                            _helpers2.default.redirect('/');
	                        }, 600);
	                    });
	                });
	            }, function (err) {
	                _this2.props.sendNotification(err.message, 'error');
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_DocContainer2.default, { title: "注册" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, "加入 Readr"), _react2.default.createElement(_SignupForm2.default, { onSave: this.handleSignup }), _react2.default.createElement("p", { className: "hint" }, "已有账号？", _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "登录"))));
	        }
	    }]);
	
	    return Signup;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	    return {
	        notification: state.components.notification,
	        user: state.user
	    };
	}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signup);

/***/ },

/***/ 379:
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
	
	var SignupForm = function (_Component) {
	    _inherits(SignupForm, _Component);
	
	    function SignupForm(props) {
	        _classCallCheck(this, SignupForm);
	
	        return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));
	    }
	
	    _createClass(SignupForm, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var username = _props$fields.username;
	            var email = _props$fields.email;
	            var password = _props$fields.password;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form2.Input, __assign({ placeholder: "用户名" }, username)), _react2.default.createElement(_form2.Input, __assign({ placeholder: "邮箱" }, email)), _react2.default.createElement(_form2.Input, __assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form2.Button, { color: "blue", onClick: handleSubmit(function (data) {
	                    onSave(data);
	                }) }, "注册"));
	        }
	    }]);
	
	    return SignupForm;
	}(_react.Component);
	SignupForm = __decorate([(0, _form.form)({
	    form: 'signup',
	    fields: ['username', 'email', 'password'],
	    validate: function validate(values) {
	        return (0, _validation2.default)(values);
	    }
	})], SignupForm);
	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	    return {
	        initialValues: ownProps.initialValues,
	        routing: state.routing.locationBeforeTransitions
	    };
	}, { sendNotification: _actions.sendNotification })(SignupForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2luZGV4LnRzPzkzYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvZm9ybS9jcmVhdGVGb3JtLnRzeD83MmE4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2RhdGEvdmFsaWRhdGlvbi50cz80MjY3Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvU2lnbnVwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL2NvbXBvbmVudHMvU2lnbnVwRm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFBTyxLQUF1QiwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeUI7O0FBQ2xCOztBQUNmOzs7O0FBQ2Y7O0tBQW9DOztBQUNwQzs7S0FBd0M7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLEtBQWlCLGNBQVUsUUFvQjNCOztLQUNDOzs7Ozs7Ozs7Ozs7QUFRRCxLQUFrQixlQUFHLHNCQUFPLFFBQVksWUFBWTtBQUMvQyxTQUFZLFlBQUU7QUFDZixhQUFZLFNBQWEsV0FBWTtBQUVsQyxhQUFDLENBQUUsaUJBQVEsUUFBUyxTQUFFO0FBQ3ZCLGlCQUFzQixvQ0FBYyxVQUFPLFFBQUs7QUFDeEM7QUFDQyw0QkFFVDtBQUhTO0FBR1AsY0FKd0I7QUFNcEI7QUFDRSx5QkFBRyxpQkFBTSxNQUFHLElBQVEsUUFBbUI7QUFDckMsMkJBRVo7QUFKUztBQUtYO0FBQUM7QUFFSyxZQUFDLEVBQVEsZ0JBQVUsVUFDM0I7QUFBQztBQUVELEtBQWdCLGFBQTZCLG9CQUFtQjtBQUN4RCxTQUFtQixtQkFBWDtTQUEyQixXQUF1QyxPQUFqRDtTQUFvQjtTQUFvQjs7QUFFakUsWUFBaUI7QUFDckIsYUFFYTs7Ozs7Ozs7Ozs7NkNBQU0sT0FBSztBQUNkLHlCQUFVLFNBQU8sS0FBTTs7QUFFN0IseUJBQW1CLGdC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Z0JBQWMsYUFDeEMsZ0JBQVcsc0NBQ0gsUUFBTSxLQUNWLGlCQUNKLDhCQUFFLE9BQVUsV0FBTyxVQUFNLHlCQUFLLG1DQUFHLElBQVUsYUFJbkQ7QUFHRjs7Ozs7OztBQUNXO0FBQ0ssdUJBQU8sTUFBVyxXQUFhO0FBQ3ZDLGVBQU8sTUFDWDtBQUhRO0VBRFUsRUFLcEIsRUFBa0IsNkNBQ25CLCtCQUFRLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekQrQjs7OztBQUNIOztBQUNEOztBQUNxQjs7QUFDSDs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JqRDtBQUFrQzs7QUFFaEMseUJBQWlCO0FBQ2Y7O3dIQUNGO0FBRU07Ozs7O0FBQ0UsMEJBSUUsS0FBTTt3Q0FISjtpQkFBVTtpQkFBTztpQkFBWTtpQkFDekI7aUJBRWI7O0FBRU0sb0JBQ0wsOEJBQUksYUFDRixnQkFBTSx1Q0FBWSxhQUFNLFNBQWlCLFlBQ3pDLGdCQUFNLHVDQUFZLGFBQUssUUFBYyxTQUNyQyxnQkFBTSx1Q0FBWSxhQUFLLE1BQUssTUFBVyxjQUFpQiw0QkFDakQsK0JBQ0EsT0FBTyxRQUNMLHNCQUFtQjtBQUNsQiw0QkFDUjtBQUFHLGtCQUZrQixHQUZ2QixFQU9OO0FBQ0Q7Ozs7O0FBakNEO0FBQ00sV0FBVTtBQUNSLGFBQUUsQ0FBVyxZQUFTLFNBQWE7QUFDakMsZUFBUTtBQUNSLGdCQUFXLDBCQUNuQjtBQUNBO0FBTkksRUFBRCxJQW1DTDs0Q0FDRSxVQUFNLE9BQVU7QUFDUjtBQUNTLHdCQUFVLFNBQWM7QUFDOUIsa0JBQU8sTUFBUSxRQUUxQjtBQUpTO0FBSVIsRUFObUIsRUFPcEIsRUFDRCwrQ0FBWSxZIiwiZmlsZSI6IjkuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY3JlYXRlRm9ybSdcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL2Zvcm0vaW5kZXgudHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnXG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJ1xuXG5jb25zdCBmb3JtQWN0aW9ucyA9IGFjdGlvbnMuZm9ybVxuXG5pbnRlcmZhY2UgRm9ybUNvbmZpZyB7XG4gIGZvcm06IHN0cmluZ1xuICBmaWVsZHM6IHN0cmluZ1tdXG4gIHZhbGlkYXRlPzogKHZhbHVlczogYW55KSA9PiBhbnlcbiAgZGVzdHJveU9uVW5tb3VudD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIEZvcm1Qcm9wcyB7XG4gIGNoYW5nZTogdHlwZW9mIGFjdGlvbnMuY2hhbmdlXG4gIHRvdWNoOiB0eXBlb2YgYWN0aW9ucy50b3VjaFxuICBkZWZpbmVGaWVsZDogdHlwZW9mIGFjdGlvbnMuZGVmaW5lRmllbGRcbiAgZGVzdHJveTogdHlwZW9mIGFjdGlvbnMuZGVzdHJveVxuICBmb3JtOiBhbnlcbiAgZm9ybVZhbHVlczogYW55XG4gIGZvcm1NZXRhOiBhbnlcbiAgZm9ybURlZmluaXRpb246IGFueVxufVxuXG5jbGFzcyBFbGVtZW50Q2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbn1cblxuaW50ZXJmYWNlIENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciB7XG4gIC8vIFRPRE86IHdoeSBzbz9cbiAgLy8gPFQgZXh0ZW5kcyAodHlwZW9mIEVsZW1lbnRDbGFzcyk+KGNvbmZpZzogRm9ybUNvbmZpZyk6IFRcbiAgPFQgZXh0ZW5kcyBGdW5jdGlvbj4oY29uZmlnOiBGb3JtQ29uZmlnKTogVFxufVxuXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSAoZmllbGRzLCBmb3JtVmFsdWVzLCB2YWxpZGF0ZUZuKSA9PiB7XG4gIGlmICh2YWxpZGF0ZUZuKSB7XG4gICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGVGbihmb3JtVmFsdWVzKVxuXG4gICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgY29uc3QgZmllbGRzV2l0aEVycm9ycyA9IF8ubWFwVmFsdWVzKGVycm9ycywgdmFsID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpZWxkczogXy5tZXJnZSh7fSwgZmllbGRzLCBmaWVsZHNXaXRoRXJyb3JzKSxcbiAgICAgICAgaGFzRXJyb3I6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBmaWVsZHMsIGhhc0Vycm9yOiBmYWxzZSB9XG59XG5cbmNvbnN0IGNyZWF0ZUZvcm06IENyZWF0ZUZvcm1DbGFzc0RlY29yYXRvciA9IChjb25maWc6IEZvcm1Db25maWcpID0+IHtcbiAgY29uc3QgeyBmaWVsZHM6IGZpZWxkc0FyciwgZm9ybTogZm9ybU5hbWUsIHZhbGlkYXRlLCBkZXN0cm95T25Vbm1vdW50IH0gPSBjb25maWdcblxuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudCA9PiB7XG4gICAgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudDxGb3JtUHJvcHMsIHt9PiB7XG5cbiAgICAgIGNyZWF0ZUZpZWxkKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgY29uc3QgeyBjaGFuZ2UgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdmFsID0+IHtcbiAgICAgICAgICBsZXQgbmV3VmFsID0gdmFsXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbC50YXJnZXQpIHtcbiAgICAgICAgICAgIG5ld1ZhbCA9IHZhbC50YXJnZXQudmFsdWUgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlKGZvcm1OYW1lLCBrZXksIG5ld1ZhbCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0ge1xuICAgICAgICAgIG9uQ2hhbmdlOiB2YWwgPT4gc2V0RmllbGRWYWx1ZSh2YWwpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICBnZXQ6IChkZWZhdWx0VmFsPykgPT4gdmFsdWUgfHwgZGVmYXVsdFZhbCB8fCAnJyxcbiAgICAgICAgICAgIHNldDogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZXZlbnRzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgZXZlbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IGRlZmluZUZpZWxkIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGZpZWxkc0Fyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWZpbmVGaWVsZChmb3JtTmFtZSwgZmllbGQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIC8vIOeUn+aIkOeJiOacrOeahCBSZWFjdCDkvJrlnKjliJ3lp4vljJbml7bmiafooYzkuIDmrKEgdW5tb3VudCDlsJrmnKrmn6XmmI7ljp/lm6BcbiAgICAgICAgaWYgKGRlc3Ryb3lPblVubW91bnQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmRlc3Ryb3koZm9ybU5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZGVjb3JhdGVkRmllbGRzXG4gICAgICAgIGNvbnN0IHsgdG91Y2gsIGZvcm1WYWx1ZXMsIGZvcm1EZWZpbml0aW9uLCBmb3JtTWV0YSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IGZpZWxkc09iakFyciA9IF8ubWFwKGZpZWxkc0Fyciwga2V5ID0+IHtcbiAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZm9ybVZhbHVlc1trZXldIHx8ICcnXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRmllbGQoZmllbGRWYWx1ZSwga2V5KVxuICAgICAgICB9KVxuXG4gICAgICAgIGZpZWxkc09iakFyci5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICBkZWNvcmF0ZWRGaWVsZHMgPSBfLmFzc2lnbih7fSwgZGVjb3JhdGVkRmllbGRzLCBmaWVsZClcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgY29sbGVjdGVkVmFsdWVzID0ge31cbiAgICAgICAgZm9ybURlZmluaXRpb24uZm9yRWFjaChkZWYgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGRlZi5uYW1lXG4gICAgICAgICAgY29sbGVjdGVkVmFsdWVzW2tleV0gPSBmb3JtVmFsdWVzW2tleV1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB7IGZpZWxkczogZmllbGRzV2l0aEVycm9yLCBoYXNFcnJvciB9ID0gdmFsaWRhdGVGb3JtKGRlY29yYXRlZEZpZWxkcywgY29sbGVjdGVkVmFsdWVzLCB2YWxpZGF0ZSlcbiAgICAgICAgZGVjb3JhdGVkRmllbGRzID0gZmllbGRzV2l0aEVycm9yXG4gICAgICAgIGRlY29yYXRlZEZpZWxkcyA9IF8ubWVyZ2Uoe30sIGRlY29yYXRlZEZpZWxkcywgZm9ybU1ldGEpXG5cbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZm4gPT4ge1xuICAgICAgICAgIHJldHVybiBlID0+IHtcbiAgICAgICAgICAgIHRvdWNoKGZvcm1OYW1lLCBmb3JtRGVmaW5pdGlvbi5tYXAoZGVmID0+IGRlZi5uYW1lKSlcbiAgICAgICAgICAgIGlmICghaGFzRXJyb3IpIHtcbiAgICAgICAgICAgICAgZm4oY29sbGVjdGVkVmFsdWVzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIF8uYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgZmllbGRzOiBkZWNvcmF0ZWRGaWVsZHMsXG4gICAgICAgICAgaGFuZGxlU3VibWl0XG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25uZWN0KFxuICAgICAgc3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZvcm06IHNlbGVjdG9ycy5mb3JtLmZ1bGxGb3JtKGZvcm1OYW1lKShzdGF0ZSksXG4gICAgICAgICAgZm9ybVZhbHVlczogc2VsZWN0b3JzLmZvcm0uZm9ybVZhbHVlcyhmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1EZWZpbml0aW9uOiBzZWxlY3RvcnMuZm9ybS5mb3JtRGVmaW5pdGlvbihmb3JtTmFtZSkoc3RhdGUpLFxuICAgICAgICAgIGZvcm1NZXRhOiBzZWxlY3RvcnMuZm9ybS5mb3JtTWV0YShmb3JtTmFtZSkoc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmb3JtQWN0aW9uc1xuICAgICkoRm9ybSBhcyBhbnkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9mb3JtL2NyZWF0ZUZvcm0udHN4XG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG50eXBlIENvbmZpZyA9IHtcbiAgdmFsaWRhdG9yczoge1xuICAgIFtrZXk6IHN0cmluZ106IFsodmFsdWU6IHN0cmluZykgPT4gYm9vbGVhbiwgc3RyaW5nXVxuICB9W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGlvbih2YWx1ZXMsIGNvbmZpZz86IENvbmZpZykge1xuICBjb25zdCBlcnJvcnM6IGFueSA9IHt9XG5cbiAgXy5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgIGVycm9yc1trZXldID0gYOS4jeiDveS4uuepuu+8gWBcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGVycm9yc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9kYXRhL3ZhbGlkYXRpb24udHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IERvY0NvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0RvY0NvbnRhaW5lcidcbmltcG9ydCBTaWdudXBGb3JtIGZyb20gJy4vY29tcG9uZW50cy9TaWdudXBGb3JtJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXG5pbXBvcnQgaGVscGVycyBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZW5kTm90aWZpY2F0aW9uPzogYW55XG4gIHVzZXJBdXRoPzogYW55XG59XG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZVNpZ251cCA9IHRoaXMuaGFuZGxlU2lnbnVwLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVNpZ251cChkYXRhKSB7XG4gICAgYXBpLnVzZXJTaWdudXAoZGF0YSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5rOo5YaM5oiQ5Yqf77yBJylcbiAgICAgICAgYXBpLnVzZXJMb2dpbih7IGxvZ2luOiBkYXRhLnVzZXJuYW1lLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZXJBdXRoKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaGVscGVycy5yZWRpcmVjdCgnLycpXG4gICAgICAgICAgICB9LCA2MDApXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnIubWVzc2FnZSwgJ2Vycm9yJylcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NDb250YWluZXIgdGl0bGU9XCLms6jlhoxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+5Yqg5YWlIFJlYWRyPC9oMT5cbiAgICAgICAgICA8U2lnbnVwRm9ybVxuICAgICAgICAgICAgb25TYXZlPXt0aGlzLmhhbmRsZVNpZ251cH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGludFwiPuW3suaciei0puWPt++8nzxMaW5rIHRvPVwiL3NpZ25pblwiPueZu+W9lTwvTGluaz48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Eb2NDb250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8e30sIHt9LCBQcm9wcz4oXG4gIHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG4gIH0pLFxuICB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH1cbikoU2lnbnVwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL1NpZ251cC50c3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi4vLi4vLi4vZm9ybSdcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJ1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuLi8uLi8uLi9kYXRhL3ZhbGlkYXRpb24nXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxWYWx1ZXM/OiBhbnlcbiAgb25TYXZlOiAoZGF0YTogYW55KSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBBbGxQcm9wcyBleHRlbmRzIFByb3BzIHtcbiAgcm91dGluZzogYW55XG4gIHNlbmROb3RpZmljYXRpb246IGFueVxuICBoYW5kbGVTdWJtaXQ6IGFueVxuICBmaWVsZHM6IGFueVxufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xufVxuXG5AZm9ybSh7XG4gIGZvcm06ICdzaWdudXAnLFxuICBmaWVsZHM6IFsndXNlcm5hbWUnLCAnZW1haWwnLCAncGFzc3dvcmQnXSxcbiAgdmFsaWRhdGU6IHZhbHVlcyA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRpb24odmFsdWVzKVxuICB9XG59KVxuY2xhc3MgU2lnbnVwRm9ybSBleHRlbmRzIENvbXBvbmVudDxBbGxQcm9wcywgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkczogeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0sXG4gICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICBvblNhdmVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIueUqOaIt+WQjVwiIHsuLi51c2VybmFtZX0gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi6YKu566xXCIgey4uLmVtYWlsfSAvPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlr4bnoIFcIiB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmR9IC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgIG9uU2F2ZShkYXRhKVxuICAgICAgICAgIH0pfT7ms6jlhow8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PHt9LCB7fSwgUHJvcHM+KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgICByb3V0aW5nOiBzdGF0ZS5yb3V0aW5nLmxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnNcbiAgICB9XG4gIH0sXG4gIHsgc2VuZE5vdGlmaWNhdGlvbiB9XG4pKFNpZ251cEZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvY29tcG9uZW50cy9TaWdudXBGb3JtLnRzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=