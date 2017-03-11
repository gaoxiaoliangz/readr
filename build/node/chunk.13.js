exports.ids = [13];
exports.modules = {

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactRouter = __webpack_require__(9);

var _actions = __webpack_require__(13);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

var _SignupForm = __webpack_require__(371);

var _SignupForm2 = _interopRequireDefault(_SignupForm);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Signup = class Signup extends _react.Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(data) {
        _webAPI2.default.userSignup(data).then(res => {
            this.props.sendNotification('注册成功！');
            _webAPI2.default.userLogin({ login: data.username, password: data.password }).then(() => {
                this.props.userAuth().then(() => {
                    setTimeout(() => {
                        _helpers2.default.redirect('/');
                    }, 600);
                });
            });
        }, err => {
            this.props.sendNotification(err.message, 'error');
        });
    }
    render() {
        return _react2.default.createElement(_DocContainer2.default, { title: "注册" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, "\u52A0\u5165 Readr"), _react2.default.createElement(_SignupForm2.default, { onSave: this.handleSignup }), _react2.default.createElement("p", { className: "hint" }, "\u5DF2\u6709\u8D26\u53F7\uFF1F", _react2.default.createElement(_reactRouter.Link, { to: "/signin" }, "\u767B\u5F55"))));
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    notification: state.components.notification,
    user: state.user
}), { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signup);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys2 = __webpack_require__(85);

var _keys3 = _interopRequireDefault(_keys2);

exports.default = validation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validation(values, config) {
    const errors = {};
    (0, _keys3.default)(values).forEach(key => {
        if (!values[key]) {
            errors[key] = `不能为空！`;
        }
    });
    return errors;
}

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

var _actions = __webpack_require__(13);

var _form = __webpack_require__(84);

var _validation = __webpack_require__(343);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SignupForm = class SignupForm extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props,
            _props$fields = _props.fields;
        const username = _props$fields.username,
              email = _props$fields.email,
              password = _props$fields.password,
              handleSubmit = _props.handleSubmit,
              onSave = _props.onSave;

        return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "用户名" }, username)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "邮箱" }, email)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(data => {
                onSave(data);
            }) }, "\u6CE8\u518C"));
    }
};
SignupForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'signup',
    fields: ['username', 'email', 'password'],
    validate: values => {
        return (0, _validation2.default)(values);
    }
})], SignupForm);
exports.default = (0, _reactRedux.connect)((state, ownProps) => {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: _actions.sendNotification })(SignupForm);

/***/ })

};;
//# sourceMappingURL=chunk.13.js.map