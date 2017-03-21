exports.ids = [13];
exports.modules = {

/***/ 288:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_DocContainer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SigninForm__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webAPI__ = __webpack_require__(72);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










let Signin = function (_Component) {
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
            __WEBPACK_IMPORTED_MODULE_7__webAPI__["a" /* default */].userLogin(data).then(res => {
                this.props.sendNotification('登录成功！', 'success', 1500);
                // this.props.loadSession().then(() => {
                //   setTimeout(() => {
                //     helpers.redirect('/')
                //   }, 600)
                // })
                this.props.loadSession();
            }).catch(err => {
                console.error(err);
                this.props.sendNotification(err.message, 'error');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_DocContainer__["a" /* default */], { title: "登录" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "content-container" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: "page-title" }, "\u6B22\u8FCE\u56DE\u6765"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SigninForm__["a" /* default */], { onSave: this.handleSubmit }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { className: "hint" }, "\u6CA1\u6709\u8D26\u53F7\uFF1F", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Link"], { to: "/signup" }, "\u6CE8\u518C"))));
        }
    }]);

    return Signin;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(state => ({
    notification: state.components.notification,
    user: state.user
}), { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"], loadSession: __WEBPACK_IMPORTED_MODULE_4__actions_api__["loadSession"] })(Signin);

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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_redux_form__ = __webpack_require__(25);
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






let SigninForm = function (_Component) {
    _inherits(SigninForm, _Component);

    function SigninForm(props) {
        _classCallCheck(this, SigninForm);

        return _possibleConstructorReturn(this, (SigninForm.__proto__ || Object.getPrototypeOf(SigninForm)).call(this, props));
    }

    _createClass(SigninForm, [{
        key: "render",
        value: function render() {
            const { fields: { login, password }, handleSubmit, onSave } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "用户名/邮箱" }, login)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["a" /* Input */], Object.assign({ placeholder: "密码", type: "password" }, password)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_form__["d" /* Button */], { color: "blue", onClick: handleSubmit(data => {
                    onSave(data);
                }) }, "\u767B\u5F55"));
        }
    }]);

    return SigninForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
SigninForm = __decorate([__WEBPACK_IMPORTED_MODULE_2_better_redux_form___default()({
    form: 'signin',
    fields: ['login', 'password'],
    validate: values => {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_validation__["a" /* default */])(values);
    }
})], SigninForm);
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])((state, ownProps) => {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: __WEBPACK_IMPORTED_MODULE_3__actions__["sendNotification"] })(SigninForm);

/***/ })

};;
//# sourceMappingURL=chunk.13.js.map