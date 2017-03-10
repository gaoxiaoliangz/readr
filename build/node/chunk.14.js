exports.ids = [14];
exports.modules = {

/***/ 301:
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

var _SigninForm = __webpack_require__(367);

var _SigninForm2 = _interopRequireDefault(_SigninForm);

var _webAPI = __webpack_require__(21);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _helpers = __webpack_require__(10);

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

            _webAPI2.default.userLogin(data).then(function (res) {
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

var _default = (0, _reactRedux.connect)(function (state) {
    return {
        notification: state.components.notification,
        user: state.user
    };
}, { sendNotification: _actions.sendNotification, userAuth: _actions.userAuth })(Signin);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Signin, 'Signin', '/Users/liang/Projects/readr/src/routes/Signin/Signin.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/Signin/Signin.tsx');
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

/***/ 367:
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

var SigninForm = function (_Component) {
    _inherits(SigninForm, _Component);

    function SigninForm(props) {
        _classCallCheck(this, SigninForm);

        return _possibleConstructorReturn(this, (SigninForm.__proto__ || Object.getPrototypeOf(SigninForm)).call(this, props));
    }

    _createClass(SigninForm, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                login = _props$fields.login,
                password = _props$fields.password,
                handleSubmit = _props.handleSubmit,
                onSave = _props.onSave;

            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "用户名/邮箱" }, login)), _react2.default.createElement(_form.Input, Object.assign({ placeholder: "密码", type: "password" }, password)), _react2.default.createElement(_form.Button, { color: "blue", onClick: handleSubmit(function (data) {
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

var _default = (0, _reactRedux.connect)(function (state, ownProps) {
    return {
        initialValues: ownProps.initialValues,
        routing: state.routing.locationBeforeTransitions
    };
}, { sendNotification: _actions.sendNotification })(SigninForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/Signin/components/SigninForm.tsx");

    __REACT_HOT_LOADER__.register(SigninForm, "SigninForm", "/Users/liang/Projects/readr/src/routes/Signin/components/SigninForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/Signin/components/SigninForm.tsx");
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.14.js.map