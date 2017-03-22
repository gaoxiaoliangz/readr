exports.ids = [12];
exports.modules = {

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_SignupForm__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webAPI__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers__ = __webpack_require__(16);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










let Signup = function (_Component) {
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
            __WEBPACK_IMPORTED_MODULE_6__webAPI__["a" /* default */].userSignup(data).then(res => {
                this.props.sendNotification('注册成功！');
                __WEBPACK_IMPORTED_MODULE_6__webAPI__["a" /* default */].userLogin({ login: data.username, password: data.password }).then(() => {
                    this.props.userAuth().then(() => {
                        setTimeout(() => {
                            __WEBPACK_IMPORTED_MODULE_7__helpers__["a" /* default */].redirect('/');
                        }, 600);
                    });
                });
            }, err => {
                this.props.sendNotification(err.message, 'error');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DocContainer__["a" /* default */], { title: "注册" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "content-container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: "page-title" }, "\u52A0\u5165 Readr"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_SignupForm__["a" /* default */], { onSave: this.handleSignup }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { className: "hint" }, "\u5DF2\u6709\u8D26\u53F7\uFF1F", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], { to: "/signin" }, "\u767B\u5F55"))));
        }
    }]);

    return Signup;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    notification: state.components.notification,
    user: state.user
}), { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"] })(Signup);

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = validation;

function validation(values, config) {
    const errors = {};
    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keys(values).forEach(key => {
        if (!values[key]) {
            errors[key] = `不能为空！`;
        }
    });
    return errors;
}

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_validation__ = __webpack_require__(326);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let SignupForm = function (_Component) {
    _inherits(SignupForm, _Component);

    function SignupForm(props) {
        _classCallCheck(this, SignupForm);

        return _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));
    }

    _createClass(SignupForm, [{
        key: "render",
        value: function render() {
            const { fields: { username, email, password }, handleSubmit, onSave } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "用户名" }, username)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "邮箱" }, email)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "密码", type: "password" }, password)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { color: "blue", onClick: handleSubmit(data => {
                    onSave(data);
                }) }, "\u6CE8\u518C"));
        }
    }]);

    return SignupForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
SignupForm = __decorate([__WEBPACK_IMPORTED_MODULE_2_better_redux_form___default()({
    form: 'signup',
    fields: ['username', 'email', 'password'],
    validate: values => {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_validation__["a" /* default */])(values);
    }
})], SignupForm);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])((state, ownProps) => {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"] })(SignupForm);

/***/ })

};;
//# sourceMappingURL=chunk.12.js.map