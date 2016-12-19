exports.ids = [8];
exports.modules = {

/***/ 306:
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
	
	var _SigninForm = __webpack_require__(307);
	
	var _SigninForm2 = _interopRequireDefault(_SigninForm);
	
	var _api = __webpack_require__(203);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _helpers = __webpack_require__(58);
	
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
	            return _react2.default.createElement(_DocContainer2.default, { title: "登录" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, '\u6B22\u8FCE\u56DE\u6765'), _react2.default.createElement(_SigninForm2.default, { onSave: this.handleSubmit }), _react2.default.createElement("p", { className: "hint" }, '\u6CA1\u6709\u8D26\u53F7\uFF1F', _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, '\u6CE8\u518C'))));
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

/***/ 307:
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
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "用户名/邮箱" }, login)), _react2.default.createElement(_form.Input, __assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(function (data) {
	                    onSave(data);
	                }) }, "\u767B\u5F55"));
	        }
	    }]);
	
	    return SigninForm;
	}(_react.Component);
	SigninForm = __decorate([(0, _betterReduxForm2.default)({
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

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL1NpZ25pbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzb21vcnBoaWMvcm91dGVzL1NpZ25pbi9jb21wb25lbnRzL1NpZ25pbkZvcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9pc29tb3JwaGljL2RhdGEvdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6WyJTaWduaW4iLCJwcm9wcyIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJkYXRhIiwidXNlckxvZ2luIiwidGhlbiIsInNlbmROb3RpZmljYXRpb24iLCJ1c2VyQXV0aCIsInNldFRpbWVvdXQiLCJyZWRpcmVjdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIm9uU2F2ZSIsInRvIiwibm90aWZpY2F0aW9uIiwic3RhdGUiLCJjb21wb25lbnRzIiwidXNlciIsIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImQiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsIlNpZ25pbkZvcm0iLCJmaWVsZHMiLCJsb2dpbiIsInBhc3N3b3JkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiY29sb3IiLCJvbkNsaWNrIiwiZm9ybSIsInZhbGlkYXRlIiwidmFsdWVzIiwib3duUHJvcHMiLCJpbml0aWFsVmFsdWVzIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJ2YWxpZGF0aW9uIiwiY29uZmlnIiwiZXJyb3JzIiwia2V5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QWVTLE9BQWYsQ0FBdUIsZUFBTztBQUMxQixhQUFJLENBQUNULE9BQU9uQixHQUFQLENBQUwsRUFBa0I7QUFDZDBCLG9CQUFPMUIsR0FBUDtBQUNIO0FBQ0osTUFKRDtBQUtBLFlBQU8wQixNQUFQO0FBQ0gsRSIsImZpbGUiOiI4LjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgdXNlckF1dGggfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuaW1wb3J0IFNpZ25pbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL1NpZ25pbkZvcm0nO1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuaW1wb3J0IGhlbHBlcnMgZnJvbSAnLi4vLi4vaGVscGVycyc7XG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVTdWJtaXQoZGF0YSkge1xuICAgICAgICBhcGkudXNlckxvZ2luKGRhdGEpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign55m75b2V5oiQ5Yqf77yBJywgJ3N1Y2Nlc3MnLCAxNTAwKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlckF1dGgoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGVscGVycy5yZWRpcmVjdCgnLycpO1xuICAgICAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kTm90aWZpY2F0aW9uKGVyci5tZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KERvY0NvbnRhaW5lciwgeyB0aXRsZTogXCLnmbvlvZVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtdGl0bGVcIiB9LCBcIlxcdTZCMjJcXHU4RkNFXFx1NTZERVxcdTY3NjVcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaWduaW5Gb3JtLCB7IG9uU2F2ZTogdGhpcy5oYW5kbGVTdWJtaXQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6IFwiaGludFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1NkNBMVxcdTY3MDlcXHU4RDI2XFx1NTNGN1xcdUZGMUZcIixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IHRvOiBcIi9zaWdudXBcIiB9LCBcIlxcdTZDRThcXHU1MThDXCIpKSkpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XG4gICAgbm90aWZpY2F0aW9uOiBzdGF0ZS5jb21wb25lbnRzLm5vdGlmaWNhdGlvbixcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSwgeyBzZW5kTm90aWZpY2F0aW9uLCB1c2VyQXV0aCB9KShTaWduaW4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvU2lnbmluL1NpZ25pbi50c3hcbiAqKi8iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGZvcm0gZnJvbSAnYmV0dGVyLXJlZHV4LWZvcm0nO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi4vLi4vLi4vZGF0YS92YWxpZGF0aW9uJztcbmxldCBTaWduaW5Gb3JtID0gY2xhc3MgU2lnbmluRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmllbGRzOiB7IGxvZ2luLCBwYXNzd29yZCB9LCBoYW5kbGVTdWJtaXQsIG9uU2F2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfX2Fzc2lnbih7IHBsYWNlaG9sZGVyOiBcIueUqOaIt+WQjS/pgq7nrrFcIiB9LCBsb2dpbikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLlr4bnoIFcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sIHBhc3N3b3JkKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJibHVlXCIsIG9uQ2xpY2s6IGhhbmRsZVN1Ym1pdChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pIH0sIFwiXFx1NzY3QlxcdTVGNTVcIikpKTtcbiAgICB9XG59O1xuU2lnbmluRm9ybSA9IF9fZGVjb3JhdGUoW1xuICAgIGZvcm0oe1xuICAgICAgICBmb3JtOiAnc2lnbmluJyxcbiAgICAgICAgZmllbGRzOiBbJ2xvZ2luJywgJ3Bhc3N3b3JkJ10sXG4gICAgICAgIHZhbGlkYXRlOiB2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb24odmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH0pXG5dLCBTaWduaW5Gb3JtKTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IG93blByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9uc1xuICAgIH07XG59LCB7IHNlbmROb3RpZmljYXRpb24gfSkoU2lnbmluRm9ybSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9TaWduaW4vY29tcG9uZW50cy9TaWduaW5Gb3JtLnRzeFxuICoqLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0aW9uKHZhbHVlcywgY29uZmlnKSB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG4gICAgXy5rZXlzKHZhbHVlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICBlcnJvcnNba2V5XSA9IGDkuI3og73kuLrnqbrvvIFgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGVycm9ycztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvZGF0YS92YWxpZGF0aW9uLnRzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==