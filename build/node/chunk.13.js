exports.ids = [13];
exports.modules = {

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _reactRouter = __webpack_require__(9);

var _actions = __webpack_require__(15);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _SignupForm = __webpack_require__(368);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _webAPI = __webpack_require__(21);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _helpers = __webpack_require__(10);

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

            _webAPI2.default.userSignup(data).then(function (res) {
                _this2.props.sendNotification('注册成功！');
                _webAPI2.default.userLogin({ login: data.username, password: data.password }).then(function () {
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

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        notification: state.components.notification,
        user: state.user
    };
}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signup);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Signup, 'Signup', '/Users/liang/Projects/readr/src/routes/Signup/Signup.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/Signup/Signup.tsx');
}();

;

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys2 = __webpack_require__(83);

var _keys3 = _interopRequireDefault(_keys2);

exports.default = validation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validation(values, config) {
    var errors = {};
    (0, _keys3.default)(values).forEach(function (key) {
        if (!values[key]) {
            errors[key] = '\u4E0D\u80FD\u4E3A\u7A7A\uFF01';
        }
    });
    return errors;
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(validation, 'validation', '/Users/liang/Projects/readr/src/utils/validation.ts');
}();

;

/***/ }),

/***/ 368:
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

var _form = __webpack_require__(82);

var _validation = __webpack_require__(340);

var _validation2 = _interopRequireDefault(_validation);

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

var SignupForm = function (_Component) {
    _inherits(SignupForm, _Component);

    function SignupForm(props) {
        _classCallCheck(this, SignupForm);

        return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));
    }

    _createClass(SignupForm, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                username = _props$fields.username,
                email = _props$fields.email,
                password = _props$fields.password,
                handleSubmit = _props.handleSubmit,
                onSave = _props.onSave;

            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "用户名" }, username)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "邮箱" }, email)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(function (data) {
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

var _default = (0, _reactRedux.connect)(function (state, ownProps) {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: _actions.sendNotification })(SignupForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Signup/components/SignupForm.tsx");

    __REACT_HOT_LOADER__.register(SignupForm, "SignupForm", "/Users/liang/Projects/readr/src/routes/Signup/components/SignupForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Signup/components/SignupForm.tsx");
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.13.js.map