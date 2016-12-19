exports.ids = [9];
exports.modules = {

/***/ 308:
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

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(87);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(89);
	
	var _reactRouter = __webpack_require__(63);
	
	var _actions = __webpack_require__(90);
	
	var _DocContainer = __webpack_require__(201);
	
	var _DocContainer2 = _interopRequireDefault(_DocContainer);
	
	var _SignupForm = __webpack_require__(311);
	
	var _SignupForm2 = _interopRequireDefault(_SignupForm);
	
	var _api = __webpack_require__(203);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _helpers = __webpack_require__(58);
	
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "注册" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, '\u52A0\u5165 Readr'), _react2.default.createElement(_SignupForm2.default, { onSave: this.handleSignup }), _react2.default.createElement("p", { className: "hint" }, '\u5DF2\u6709\u8D26\u53F7\uFF1F', _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, '\u767B\u5F55'))));
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

/***/ 311:
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
	
	var _form = __webpack_require__(147);
	
	var _validation = __webpack_require__(308);
	
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
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "用户名" }, username)), _react2.default.createElement(_form.Input, __assign({ placeholder: "邮箱" }, email)), _react2.default.createElement(_form.Input, __assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(function (data) {
	                    onSave(data);
	                }) }, "\u6CE8\u518C"));
	        }
	    }]);
	
	    return SignupForm;
	}(_react.Component);
	SignupForm = __decorate([(0, _betterReduxForm2.default)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9kYXRhL3ZhbGlkYXRpb24udHM/NDI2NyIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbnVwL1NpZ251cC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ251cC9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4Il0sIm5hbWVzIjpbInZhbGlkYXRpb24iLCJ2YWx1ZXMiLCJjb25maWciLCJlcnJvcnMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIlNpZ251cCIsInByb3BzIiwiaGFuZGxlU2lnbnVwIiwiYmluZCIsImRhdGEiLCJ1c2VyU2lnbnVwIiwidGhlbiIsInNlbmROb3RpZmljYXRpb24iLCJ1c2VyTG9naW4iLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyQXV0aCIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsImVyciIsIm1lc3NhZ2UiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJjbGFzc05hbWUiLCJvblNhdmUiLCJ0byIsIm5vdGlmaWNhdGlvbiIsInN0YXRlIiwiY29tcG9uZW50cyIsInVzZXIiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJTaWdudXBGb3JtIiwiZmllbGRzIiwiZW1haWwiLCJoYW5kbGVTdWJtaXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJjb2xvciIsIm9uQ2xpY2siLCJmb3JtIiwidmFsaWRhdGUiLCJvd25Qcm9wcyIsImluaXRpYWxWYWx1ZXMi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REw7QUFFRFAsYUFBUSxDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFVBQXRCLENBRlA7QUFHRFEsZUFBVSwwQkFBVTtBQUNoQixnQkFBTywwQkFBV2pFLE1BQVgsQ0FBUDtBQUNIO0FBTEEsRUFBTCxDQURvQixDQUFYLEVBUVZ3RCxVQVJVLENBQWI7bUJBU2UseUJBQVEsVUFBQzNCLEtBQUQsRUFBUXFDLFFBQVIsRUFBcUI7QUFDeEMsWUFBTztBQUNIQyx3QkFBZUQsU0FBU0MsYUFEckI7QUFFSEMsa0JBQVN2QyxNQUFNdUMsT0FBTixDQUFjQztBQUZwQixNQUFQO0FBSUgsRUFMYyxFQUtaLEVBQUV4RCwyQ0FBRixFQUxZLEVBS1UyQyxVQUxWLEMiLCJmaWxlIjoiOS45LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRpb24odmFsdWVzLCBjb25maWcpIHtcbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICBfLmtleXModmFsdWVzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICghdmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgIGVycm9yc1trZXldID0gYOS4jeiDveS4uuepuu+8gWA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3JzO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9kYXRhL3ZhbGlkYXRpb24udHNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IFNpZ251cEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL1NpZ251cEZvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycyc7XG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTaWdudXAgPSB0aGlzLmhhbmRsZVNpZ251cC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVTaWdudXAoZGF0YSkge1xuICAgICAgICBhcGkudXNlclNpZ251cChkYXRhKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5rOo5YaM5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICBhcGkudXNlckxvZ2luKHsgbG9naW46IGRhdGEudXNlcm5hbWUsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckF1dGgoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJzLnJlZGlyZWN0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbihlcnIubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi5rOo5YaMXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCIgfSwgXCJcXHU1MkEwXFx1NTE2NSBSZWFkclwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZ251cEZvcm0sIHsgb25TYXZlOiB0aGlzLmhhbmRsZVNpZ251cCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogXCJoaW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHU1REYyXFx1NjcwOVxcdThEMjZcXHU1M0Y3XFx1RkYxRlwiLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgdG86IFwiL3NpZ25pblwiIH0sIFwiXFx1NzY3QlxcdTVGNTVcIikpKSkpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgIHVzZXI6IHN0YXRlLnVzZXJcbn0pLCB7IHNlbmROb3RpZmljYXRpb24sIHVzZXJBdXRoIH0pKFNpZ251cCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWdudXAvU2lnbnVwLnRzeFxuICoqLyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgZm9ybSBmcm9tICdiZXR0ZXItcmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBzZW5kTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvZm9ybSc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuLi8uLi8uLi9kYXRhL3ZhbGlkYXRpb24nO1xubGV0IFNpZ251cEZvcm0gPSBjbGFzcyBTaWdudXBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9LCBoYW5kbGVTdWJtaXQsIG9uU2F2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIueUqOaIt+WQjVwiIH0sIHVzZXJuYW1lKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIumCrueusVwiIH0sIGVtYWlsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIuWvhueggVwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSwgcGFzc3dvcmQpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGNvbG9yOiBcImJsdWVcIiwgb25DbGljazogaGFuZGxlU3VibWl0KGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvblNhdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSkgfSwgXCJcXHU2Q0U4XFx1NTE4Q1wiKSkpO1xuICAgIH1cbn07XG5TaWdudXBGb3JtID0gX19kZWNvcmF0ZShbXG4gICAgZm9ybSh7XG4gICAgICAgIGZvcm06ICdzaWdudXAnLFxuICAgICAgICBmaWVsZHM6IFsndXNlcm5hbWUnLCAnZW1haWwnLCAncGFzc3dvcmQnXSxcbiAgICAgICAgdmFsaWRhdGU6IHZhbHVlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbih2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfSlcbl0sIFNpZ251cEZvcm0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczogb3duUHJvcHMuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgcm91dGluZzogc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zXG4gICAgfTtcbn0sIHsgc2VuZE5vdGlmaWNhdGlvbiB9KShTaWdudXBGb3JtKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ251cC9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==