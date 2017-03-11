exports.ids = [14];
exports.modules = {

/***/ 304:
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

var _SigninForm = __webpack_require__(370);

var _SigninForm2 = _interopRequireDefault(_SigninForm);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _helpers = __webpack_require__(10);

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Signin = class Signin extends _react.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(data) {
        _webAPI2.default.userLogin(data).then(res => {
            this.props.sendNotification('登录成功！', 'success', 1500);
            this.props.userAuth().then(() => {
                setTimeout(() => {
                    _helpers2.default.redirect('/');
                }, 600);
            });
        }).catch(err => {
            console.error(err);
            this.props.sendNotification(err.message, 'error');
        });
    }
    render() {
        return _react2.default.createElement(_DocContainer2.default, { title: "登录" }, _react2.default.createElement("div", { className: "content-container" }, _react2.default.createElement("h1", { className: "page-title" }, "\u6B22\u8FCE\u56DE\u6765"), _react2.default.createElement(_SigninForm2.default, { onSave: this.handleSubmit }), _react2.default.createElement("p", { className: "hint" }, "\u6CA1\u6709\u8D26\u53F7\uFF1F", _react2.default.createElement(_reactRouter.Link, { to: "/signup" }, "\u6CE8\u518C"))));
    }
};
exports.default = (0, _reactRedux.connect)(state => ({
    notification: state.components.notification,
    user: state.user
}), { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signin);

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

/***/ 370:
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

let SigninForm = class SigninForm extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _props = this.props,
            _props$fields = _props.fields;
        const login = _props$fields.login,
              password = _props$fields.password,
              handleSubmit = _props.handleSubmit,
              onSave = _props.onSave;

        return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "用户名/邮箱" }, login)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(data => {
                onSave(data);
            }) }, "\u767B\u5F55"));
    }
};
SigninForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'signin',
    fields: ['login', 'password'],
    validate: values => {
        return (0, _validation2.default)(values);
    }
})], SigninForm);
exports.default = (0, _reactRedux.connect)((state, ownProps) => {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: _actions.sendNotification })(SigninForm);

/***/ })

};;
//# sourceMappingURL=chunk.14.js.map