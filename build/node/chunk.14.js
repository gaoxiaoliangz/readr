exports.ids = [14];
exports.modules = {

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_api__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AddCollectionForm__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__webAPI__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_DocContainer__ = __webpack_require__(44);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









let AddCollection = function (_Component) {
    _inherits(AddCollection, _Component);

    function AddCollection(props) {
        _classCallCheck(this, AddCollection);

        var _this = _possibleConstructorReturn(this, (AddCollection.__proto__ || Object.getPrototypeOf(AddCollection)).call(this, props));

        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleBooksValueChange = _this.handleBooksValueChange.bind(_this);
        return _this;
    }

    _createClass(AddCollection, [{
        key: 'handleSave',
        value: function handleSave(data) {
            const creator = this.props.session.user.id;
            const postData = Object.assign({}, data, {
                creator
            });
            __WEBPACK_IMPORTED_MODULE_5__webAPI__["a" /* default */].addCollection(postData).then(result => {
                this.props.sendNotification('添加成功！');
                this.props.resetForm('addCollection');
            }, error => {
                this.props.sendNotification(error.message, 'error');
            });
        }
    }, {
        key: 'handleBooksValueChange',
        value: function handleBooksValueChange(newVal) {
            // if (!_.isEmpty(newVal)) {
            //   this.props.loadBooks({
            //     q: newVal
            //   })
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_DocContainer__["a" /* default */], { title: "添加合集" }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", { className: "page-title" }, "\u6DFB\u52A0\u5408\u96C6"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_AddCollectionForm__["a" /* default */], { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
        }
    }]);

    return AddCollection;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
    return {
        notification: state.components.notification,
        elements: state.elements,
        session: state.session
    };
}
/* harmony default export */ __webpack_exports__["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["sendNotification"], resetForm: __WEBPACK_IMPORTED_MODULE_2__actions__["resetForm"], loadBooks: __WEBPACK_IMPORTED_MODULE_3__actions_api__["loadBooks"] })(AddCollection);

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_form__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_better_redux_form__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_better_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_better_redux_form__);
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






let AddCollectionForm = function (_Component) {
    _inherits(AddCollectionForm, _Component);

    function AddCollectionForm(props) {
        _classCallCheck(this, AddCollectionForm);

        return _possibleConstructorReturn(this, (AddCollectionForm.__proto__ || Object.getPrototypeOf(AddCollectionForm)).call(this, props));
    }

    _createClass(AddCollectionForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            const { fields: { name, _booksValue, _booksValues, _booksOptions, description }, handleSubmit, onSave, onBooksValueChange, booksSearchAsOptions } = this.props;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_form__["a" /* Input */], Object.assign({ placeholder: "合集名称" }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_form__["b" /* SelectizeInput */], { placeholder: "选择书籍", onInputChange: newValue => {
                    if (onBooksValueChange) {
                        onBooksValueChange(newValue);
                    }
                    _booksValue.set(newValue);
                }, value: _booksValue.get(), onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_form__["c" /* Textarea */], Object.assign({}, description, { placeholder: "描述" })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_form__["d" /* Button */], { onClick: handleSubmit(data => {
                    let postData = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.pick(data, ['name', 'description']);
                    postData = Object.assign({}, postData, {
                        items: _booksValues.value ? _booksValues.value.map(item => item.value) : []
                    });
                    onSave(postData);
                }) }, "\u6DFB\u52A0"));
        }
    }]);

    return AddCollectionForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
AddCollectionForm = __decorate([__WEBPACK_IMPORTED_MODULE_5_better_redux_form___default()({
    form: 'addCollection',
    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
})], AddCollectionForm);
const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing.locationBeforeTransitions
    };
};
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, { sendNotification: __WEBPACK_IMPORTED_MODULE_2__actions__["sendNotification"] })(AddCollectionForm);

/***/ })

};;
//# sourceMappingURL=chunk.14.js.map